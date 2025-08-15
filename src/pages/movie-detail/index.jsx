import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
import axios from "axios";
import Tag from "../../components/tag";

function MovieDetail() {
  // lấy slug ở trên url
  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  console.log(movieId);

  // thông qua API lấy movie detail
  // chạy nó chạy khi vừa load page

  const fetchMovieDetail = async () => {
    const respone = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=a10ee5569194b352bcca20840b7f8a32`
    );
    setMovie(respone.data);
    console.log(respone.data);
  };

  useEffect(() => {
    fetchMovieDetail();
  }, []);

  return (
    <div className="movie-detail">
      <div className="banner">
        <img
          className="bg-blur"
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt=""
        />

        <div className="content">
          <div className="left">
            <img
              src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
              alt=""
            />
          </div>
          <div className="right">
            <h1>{movie?.title}</h1>
            <p>{movie?.tagline}</p>
            <Tag >abc </Tag>
          </div>
        </div>
        <div className="overlay"></div>
      </div>
    </div>
  );
}

export default MovieDetail;
