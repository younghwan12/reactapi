import React from "react";

function MoviePop({ popular }) {
  return (
    <li>
      <a href={`https://www.themoviedb.org/movie/${popular.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${popular.poster_path}`}
          alt={popular.title}
        />
        <em>
          <span className="title">{popular.title}</span>
          <span className="star">{popular.vote_average}</span>
        </em>
      </a>
    </li>
  );
}

const MoviePopular = (props) => {
  return (
    <section className="movie__popular">
      <div className="container">
        <div className="popular__inner">
          <h2>극장 BOX OFFICE 순위</h2>
          <ul>
            {props.popular.map((popular, index) => (
              <MoviePop key={index} popular={popular} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MoviePopular;
