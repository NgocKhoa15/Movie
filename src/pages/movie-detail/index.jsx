import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
import axios from "axios";
import Tag from "../../components/tag";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

function MovieDetail() {
  // lấy slug ở trên url
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState({});
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

  const fetchCredits = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=a10ee5569194b352bcca20840b7f8a32`
    );
    setCredits(response.data);
    console.log(
      response.data.crew?.filter((item) => item.job === "Director")[0].name
    );
  };

  useEffect(() => {
    fetchMovieDetail();
    fetchCredits();
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
            <p className="tagLine">{movie?.tagline}</p>
            {movie.genres?.map((genre) => (
              <Tag>{genre.name}</Tag>
            ))}

            <div className="circleRating">
              <CircularProgressbar
                value={movie.vote_average}
                maxValue={10}
                text={movie.vote_average?.toFixed(1)}
                styles={buildStyles({
                  pathColor:
                    movie.vote_average < 5
                      ? "red"
                      : movie.vote_average < 7
                      ? "orange"
                      : "green",
                })}
              />
            </div>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <div className="box">
              <div className="info">
                <span className="label">Status: </span>
                <span className="value">{movie.status}</span>
              </div>

              <div className="info">
                <span className="label">Release Date: </span>
                <span className="value">{movie.release_date}</span>
              </div>

              <div className="info">
                <span className="label">Runtime: </span>
                <span className="value">{movie.runtime}</span>
              </div>
            </div>

            <div className="box">
              <div className="info">
                <span className="label">Director: </span>
                <span className="value">
                  {
                    credits.crew?.filter((item) => item.job === "Director")[0]
                      .name
                  }
                </span>
              </div>
            </div>

            <div className="box">
              <div className="info">
                <span className="label">Director: </span>
                <span className="value">
                  {
                    credits.crew?.filter((item) => item.job === "Writer")[0]
                      .name
                  }
                </span>
              </div>
            </div>


          </div>
        </div>
        <div className="overlay"></div>
      </div>
    </div>
  );
}

export default MovieDetail;
