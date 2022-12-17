import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Loading from './screens/loading/Loading'
import MovieDetail from './screens/movieDetail/MovieDetail'
import Search from './screens/search/Search'
import Home from './screens/home/Home'
import './index.css'
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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
