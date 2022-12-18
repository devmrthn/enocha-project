import React from 'react'
import MovieItem from '../../components/movieItem/MovieItem'
import { useState } from 'react'
import './HorizontalScroll.scss'
import tokenContext from '../../context/tokenContext'
import { useContext } from 'react'
import { useEffect } from 'react'

function HorizontalScroll() {

    const value = useContext(tokenContext);

    let [movieList, setMovieList] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${value.token}&language=en-US&page=1`)
        .then((response) =>
        {
            return response.json()
        })
        .then((data) =>
        {
            setMovieList(data.results)
            console.log('seted')
            console.log(value)
        })
    }, [])


  return (
    <div className='horizontalScroll__div'>
       
        {movieList && movieList.map((item, index) => { 
            return ( 
                <MovieItem key={index} width={150} height={210} source={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} display='ib' number={index + 1} />
            )
        })}


        
        
    </div>
  )
}

export default HorizontalScroll