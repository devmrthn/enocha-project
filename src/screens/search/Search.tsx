import React from 'react'
import './Search.scss'
import SearchBox from '../../components/searchBox/SearchBox'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react'
import tokenContext from '../../context/tokenContext'
import { useState } from 'react'


function Search() {

  const value = useContext(tokenContext);

  let [timeout, setTimeOut] = useState(0)

  let [searchResult, setSearchResult] = useState([])



  const { text } = useParams<{ text: string }>();
  
  let [searchText, setSearchText] = useState(text)
  // search text in database and show results url : /search/movie?query=movieName?api_key=

  useEffect(() => { 


    if (timeout) {
      clearTimeout(timeout)
    }

    setTimeOut(setTimeout(() => {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${value.token}&query=${text}`)
      .then((response) => {
        return response.json()
      }).then((data) => {
        setSearchResult(data.results)
        console.log(data.results)
      })
    }, 1000))

    
  }, [text])


  


  return (
    <div>

      <SearchBox changeText={setSearchText}/>
      
    </div>
  )
}

export default Search