import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Loading from './screens/loading/Loading'
import MovieDetail from './screens/movieDetail/MovieDetail'
import Search from './screens/search/Search'
import Home from './screens/home/Home'
import './index.css'

import { createContext } from 'react'

const tokenContext = createContext("3c4a75c60ab27c385698962f1c76f654");


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/loading",
    element: <Loading />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/search/:text",
    element: <Search />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/movie-detail",
    element: <MovieDetail />,
  },
]);




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <tokenContext.Provider value="3c4a75c60ab27c385698962f1c76f654">
      <RouterProvider router={router} />
    </tokenContext.Provider>
  </React.StrictMode>,
)
