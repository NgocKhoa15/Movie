import React, { useEffect, useState } from 'react'
import "./index.scss";
import Container from '../../components/container';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MovieCard from '../../components/movie-card';

function SearchPage() {
// xác định tên phim => param
    const [movies, setMovies] = useState([]);
    const {keyWord} = useParams();
    
    const fetchSearchData = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/multi?query=${keyWord}&page=1&api_key=a10ee5569194b352bcca20840b7f8a32`
    );
        console.log(response.data.results);
        setMovies(response.data.results);
    }

    useEffect(() => {
        fetchSearchData();
    },[]);


  return (
    <Container>
      <div className="search">
        <h2>Result for '{keyWord}': </h2>

        <div className="movie-list">
          {movies.map((movie) => (
            <MovieCard
              id={movie.id}
              name={movie.title ? movie.title : movie.name}
              description={
                movie.release_date ? movie.release_date : movie.first_air_date
              }
              img={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default SearchPage;