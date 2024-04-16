import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={50}
        freeMode={true}
        breakpoints={{
            640: {
                width: 640,
                slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>

                <a href="#!"><img src="images\slider\62bdee66d787c4a6f4d9ced7_4WhistlesWinery-ShilohCreative-p-1080.jpeg" alt="" /></a>

        </SwiperSlide>

        <SwiperSlide>

                <a href="#!"><img src="images\slider\623391de29ea67625d90bc28_CodeSeeLearn-ShilohCreative.jpg" alt="" /></a>

        </SwiperSlide>

        <SwiperSlide>

                <a href="#!"><img src="images\slider\6233964d458d840baa74c42f_LandingPage-ShilohCreative.jpg" alt="" /></a>

        </SwiperSlide>

        <SwiperSlide>

                <a href="#!"><img src="images\slider\6233919229ea6779ed90baf2_VanguardDesignCo-ShilohCreative.jpg" alt="" /></a>

        </SwiperSlide>

        <SwiperSlide>

                <a href="#!"><img src="images\slider\6233990417440f78c3061103_LandingPage-ShilohCreative (1).jpg" alt="" /></a>

        </SwiperSlide>

      </Swiper>
    </>
  );
}
