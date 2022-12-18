import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './TabList.scss'
import { useContext } from 'react'
import tokenContext from '../../context/tokenContext'
import MovieItem from '../../components/movieItem/MovieItem'

function TabList() {

    let [tabNumber, setTabNumber] = useState(0)
    const [tabItems, setTabItems] = useState([])
    const value = useContext(tokenContext);

    /* useEffect */
    useEffect(() => {
        if (tabNumber == 0) {
            fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${value.token}&language=en-US&page=1`).then((response) => {
                return response.json()
            }).then((data) => {
                setTabItems(data.results)
                console.log(data.results)
            })
            console.log('Now Playing')
        }else if (tabNumber == 1) {

            fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${value.token}&language=en-US&page=1`).then((response) => {
                return response.json()
            }).then((data) => {
                setTabItems(data.results)
                console.log(data.results)

            })
            console.log('Upcoming')
        }else if (tabNumber == 2) {
            fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${value.token}&language=en-US&page=1`).then((response) => {
                return response.json()
            }).then((data) => {
                setTabItems(data.results)
                console.log(data.results)

            })
            console.log('Top Rated')
        }else if (tabNumber == 3) {
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${value.token}&language=en-US&page=1`).then((response) => {
                return response.json()
            }).then((data) => {
                setTabItems(data.results)
                console.log(data.results)

            })

            console.log('Popular')
        }


        
    }, [tabNumber])    

  return (
    <div className='tabList__div my-5 '>
        <div className="grid grid-cols-4 my-5">
            <button className={`tabList__btn ${tabNumber == 0 ? 'tabList__btn__active': 'tabList__btn__deactive'}`} onClick={() => {setTabNumber(0)}}>Now Playing</button>
            <button className={`tabList__btn ${tabNumber == 1 ? 'tabList__btn__active': 'tabList__btn__deactive'}`} onClick={() => {setTabNumber(1)}}>Upcoming</button>
            <button className={`tabList__btn ${tabNumber == 2 ? 'tabList__btn__active': 'tabList__btn__deactive'}`} onClick={() => {setTabNumber(2)}}>Top Rated</button>
            <button className={`tabList__btn ${tabNumber == 3 ? 'tabList__btn__active': 'tabList__btn__deactive'}`} onClick={() => {setTabNumber(3)}}>Popular</button>


        </div>

        <div className="grid grid-cols-3 gap-4 tabList__movies">
            {tabItems.map((item, index) => {
                return (
                    <MovieItem tabItem={true} key={index} width={150} height={210} source={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}  />
                )
            })}

        </div>
        
    </div>
  )
}

export default TabList