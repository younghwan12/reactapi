import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper";

function YoutubeRan({ random }) {
  return (
    <li>
      <a href={`https://www.youtube.com/watch?v=${random.id.videoId}`}>
        <img
          src={random.snippet.thumbnails.medium.url}
          alt={random.snippet.description}
        />
      </a>
    </li>
  );
}

const YoutubeSlider = ({ random }) => {
  return (
    <section className="movie__popular">
      <div className="container">
        <div className="popular__inner">
          <h2>Youtube Ranking</h2>
          <Swiper
            effect={"coverflow"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            initialSlide="3"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            {random.map((random, index) =>
              index < 10 ? (
                <SwiperSlide key={index}>
                  <YoutubeRan key={index} random={random} index={index} />
                </SwiperSlide>
              ) : null
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default YoutubeSlider;
