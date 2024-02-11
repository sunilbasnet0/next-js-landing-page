"use client"

import React, { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

const Partners = () => {
  return (
    <section id="partners" className='py-[1.5rem] lg:py-[2rem] bg-[#edecec]'>
      <div className='containers overflow-x-hidden'>
        <Swiper
          slidesPerView={1}
          spaceBetween={70}

          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            425: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 70,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src='/google-icon.png' className='grayscale cursor-pointer' alt="Google" />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/amazon-icon.png' className='grayscale cursor-pointer' alt="Amazon" />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/digitalocean-icon.png' className='grayscale cursor-pointer' alt="DigitalOcean" />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/microsoft-icon.png' className='grayscale cursor-pointer' alt="Microsoft" />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/samsung-icon.png' className='grayscale cursor-pointer' alt="Samsung" />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/google-icon.png' className='grayscale cursor-pointer' alt="Google" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
