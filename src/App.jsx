import React from 'react'
import Home from './pages/home';
import Header from './components/header';
import HeroSection from './components/hero-section';
import Carousel from './components/carousel';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MovieDetail from './pages/movie-detail';
import "react-circular-progressbar/dist/styles.css";
import Demo from './pages/demo-responsive';
import SearchPage from './pages/search';

function App() {
  

  const router = createBrowserRouter([
    {
      path: "",
      element: <Home />,
    },
    {
      path: "movie-detail/:movieId", // slug trong react routerdom
      element: <MovieDetail />,
    }, 
    {
      path: "search/:keyWord",
      element: <SearchPage />,
    },
    {
      path: "demo",
      element: <Demo />,
    },
  ]);

  return (
    // single pass aplication: cơ chế load lại trang
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;