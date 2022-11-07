import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieCont from "../include/MovieCont";
import MovieSearch from "../include/MovieSearch";
import MoviePopular from "../include/MoviePopular";
import Contact from "../layout/Contact";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=18acbb5a46d65f5d2353c95c8c861560&language=ko&region=KR"
    )
      .then((response) => response.json())
      .then((result) => setPopular(result.results))
      // .then((result) => setMovies(result))
      .catch((error) => console.log("error", error));
  });

  const search = (query) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=18acbb5a46d65f5d2353c95c8c861560&query=${query}`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=18acbb5a46d65f5d2353c95c8c861560&query=spider"
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Movie", "reference API"]} />
        <MoviePopular popular={popular} />
        <MovieSearch onSearch={search} />
        <MovieCont movies={movies} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Movie;
