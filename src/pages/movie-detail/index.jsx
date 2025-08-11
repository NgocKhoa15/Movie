import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./index.scss"

function MovieDetail() {
// lấy slug ở trên url
const {movieId} = useParams();
const [movie, setMovie] = useState(null);

console.log(movieId);

// thông qua API lấy movie detail

    const fetchMovieDetail = async () => {
    const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=a10ee5569194b352bcca20840b7f8a32`
        );
        setMovie(response.data);
        console.log(response.data);
    }

    // chạy nó chạy khi vừa load page 
    useEffect(() => {
        fetchMovieDetail();
    },[movieId]);
    

    
  return (
    <div className='movie-detail'>
        <h1>{movie?.original_title}</h1>
    </div>
  )
}

export default MovieDetail