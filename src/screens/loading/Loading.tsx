import React from 'react'
import logo from './popcorn 1.svg'
import './Loading.scss'

function Loading() {
  return (
    <div className='h-screen w-screen flex justify-center items-center loading__div'>
        <img src={logo} alt="" />

    </div>
  )
}

export default Loading