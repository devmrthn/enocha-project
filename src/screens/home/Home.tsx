import React from 'react'
import SearchBox from '../../components/searchBox/SearchBox'
import BottomMenu from '../../components/bottomMenu/BottomMenu'
import HorizontalScroll from './HorizontalScroll'
import TabList from './TabList'
import './Home.scss'

function Home() {
  return (
    <>
      <div className='home__div min-h-screen'>
        <div className='container mx-auto p-6'>
          <h1 className='text-white'>What Do You Want To Watch?</h1>
          <SearchBox />
          <HorizontalScroll />
          
          <TabList />

        </div>
      </div>

      <BottomMenu buttonNumber={0} />
    </>
  )
}

export default Home