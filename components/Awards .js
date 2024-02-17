"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Awards = () => {
  return (
    <section id='awards' className=' mt-8 mb-[4rem]'>
      <div className='containers'>
        <h2 className='text-center text-[2rem] md:text-[2.5rem] lg:text-[2.813rem] text-[#20396e] font-[900]'>Awards & Recognitions</h2>
        <p className='text-center text-[1rem] md:text-[1.125rem] lg:text-[1.5rem] text-[#292c30] font-[500] md:max-w-[1100px] mx-auto mt-5'>
          We’re proud to accept industry accolades for our excellence in the services we have provided, commitment to unparalleled results, and continuous growth.
        </p>
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
            className="awards-swiper"
          >
            <SwiperSlide>
              <img src='/logo-deloitte-fast-50.jpg' className='cursor-pointer' />
              <span></span>
            </SwiperSlide>
            <SwiperSlide>
              <img src='/logo-deloitte-fast-500.jpg' className='cursor-pointer' />
              <span></span>
            </SwiperSlide>
            <SwiperSlide>
              <img src='/logo-dun-bradstreet-top-100-smes.jpg' className='cursor-pointer' />
              <span></span>
            </SwiperSlide>
            <SwiperSlide>
              <img src='/logo-cio-choice.jpg' className='cursor-pointer' />
              <span></span>
            </SwiperSlide>
            <SwiperSlide>
              <img src='/logo-dun-bradstreet-sme-excellence.jpg' className='cursor-pointer' />
              <span></span>
            </SwiperSlide>
            <SwiperSlide>
              <img src='/logo-great-place-to-work.jpg' className='cursor-pointer' />
              <span></span>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Awards 