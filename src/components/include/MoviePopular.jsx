import React from "react";

function MoviePop( props ) {
  return (
    <li>
      <a href={`https://www.themoviedb.org/movie/${props.popular.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.popular.poster_path}`}
          alt={props.popular.title}
        />
        <em>
          <span className="ranking">{props.index + 1}</span>
          <span className="title">{props.popular.title}</span>
          <span className="star">★ : {props.popular.vote_average}</span>
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
          <h2>BOX OFFICE Ranking</h2>
          <ul>
            {props.popular.map((popular, index) =>
            index < 5 ? (
              <MoviePop key={index} popular={popular} index = {index} />
            ) : null
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MoviePopular;
