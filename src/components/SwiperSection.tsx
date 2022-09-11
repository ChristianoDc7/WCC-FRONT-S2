import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import '../styles/common.scss'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import EuroSwiper from "./EuroSwiper";

export const SwiperSection = () => {
  return (
    <Swiper
        slidesPerView={1}
        effect={'fade'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        direction="vertical"
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><EuroSwiper src="/swiper/images-1.jpg" user='Bonne Ance'/></SwiperSlide>
        <SwiperSlide><EuroSwiper src="/swiper/images-2.jpg" user='Philippe Brown'/></SwiperSlide>
        <SwiperSlide><EuroSwiper src="/swiper/images-3.jpg" user='Arc Zurich'/></SwiperSlide>
      </Swiper>
  )
}
