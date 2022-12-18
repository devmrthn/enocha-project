import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App h-screen w-screen bg-slate-700 flex flex-col'>
      <h1 className='bg-slate-600 text-center p-4 text-slate-300 text-5xl font-bold flex flex-grow-0'>Routes </h1>
      <div className='mt-4 flex-grow'>
      <ul className='mx-2 p-5 bg-slate-600 rounded-xl'>

            <li className='mb-5 text-cyan-300 text-4xl font-bold'>
              <Link to={`/`}>This Page ( / )</Link>
            </li>
            <li className='mb-5 text-cyan-300 text-4xl font-bold'>
              <Link to={`/loading`}>Loading  ( /loading )</Link>
            </li>
            <li className='mb-5 text-cyan-300 text-4xl font-bold'>
              <Link to={`/home`}>Home  ( /home )</Link>
            </li>
            <li className='mb-5 text-cyan-300 text-4xl font-bold'>
              <Link to={`/search/:text`}>Search  ( /search/:text )</Link>
            </li>
            <li className='mb-5 text-cyan-300 text-4xl font-bold'>
              <Link to={`/movie-detail`}>Movie Detail  ( /movie-detail )</Link>
            </li>


          </ul>
      </div>
    </div>
  )
}

export default App
