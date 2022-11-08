import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";

function MoviePop(props) {
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
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {/* <ul> */}
            {props.popular.map((popular, index) =>
              index < 10 ? (
                <SwiperSlide key={index}>
                  <MoviePop key={index} popular={popular} index={index} />
                </SwiperSlide>
              ) : null
            )}
            {/* </ul> */}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MoviePopular;
