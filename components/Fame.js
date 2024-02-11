"use client"

import React, { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

const Fame = () => {
  return (
    <section id='fame' className='my-[4rem]'>
      <div className='containers'>
        <h2 className='text-center text-[2rem] md:text-[2.5rem] lg:text-[2.813rem] text-[#20396e] font-[900]'>Walk of Fame</h2>
        <div className='my-[3rem]'>
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
            className="fame-swiper"
          >
            <SwiperSlide>
              <img src='/fame-logo-01.jpg' className='cursor-pointer' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/fame-logo-02.png' className='cursor-pointer' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/fame-logo-03.png' className='cursor-pointer' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/fame-logo-04.png' className='cursor-pointer' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/fame-logo-05.png' className='cursor-pointer' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/fame-logo-06.png' className='cursor-pointer' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/fame-logo-07.png' className='cursor-pointer' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/fame-logo-8.jpg' className='cursor-pointer' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/fame-logo-9.jpg' className='cursor-pointer' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/fame-logo-10.jpg' className='cursor-pointer' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/fame-logo-11.jpg' className='cursor-pointer' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/fame-logo-12.jpg' className='cursor-pointer' />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Fame 