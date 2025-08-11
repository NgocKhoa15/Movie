import React from 'react'
import Home from './pages/home';
import Header from './components/header';
import HeroSection from './components/hero-section';
import Carousel from './components/carousel';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MovieDetail from './pages/movie-detail';

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
      path: "abc",
      element: <h1>ABC</h1>,
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