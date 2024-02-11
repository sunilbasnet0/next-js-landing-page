"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Testimonial = () => {
  return (
    <section id='testimonial' className='mb-[4rem]'>
      <div className='containers'>
        <h2 className='text-center text-[2rem] md:text-[2.5rem] lg:text-[2.813rem] text-[#20396e] font-[900]'>Stories From Our Amazing Clients</h2>
        <div className='testimonial'>
          <Swiper
            slidesPerView={1}
            spaceBetween={70}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="testimonial-swiper"
          >
            <SwiperSlide>
              <div className='testimonial-card grid grid-cols-1 md:grid-cols-3 min-h-[300px]'>
                <div className='md:order-first order-last md:mt-0 mt-8'>
                  <p className='text-[1.125rem] font-light text-[#184ca1]'>
                    Intranet Portal Developmet<br />
                    <span className='text-[#4a4e56] pt-4 font-[700]'>Project</span>
                  </p>
                  <span className='w-[30px] h-[1px] bg-[#757474] block my-8'></span>
                  <p className='text-[1.125rem] font-light text-[#184ca1]'>Tea <br />
                    <span className='text-[#4a4e56] pt-4 font-[700]'>Industry</span>
                  </p>
                </div>
                <div className='col-span-2'>
                  <figure className="img-author">
                    <img src='https://www.indusnet.co.in/site/wp-content/uploads/2021/08/client-5.jpg' className='rounded-[50%] ' />
                  </figure>
                  <h4 className='text-[1.125rem] font-light text-[#184ca1] pt-2'>Manish Prasad Chief Manager – IT Application, SBI Funds Management Pvt Ltd.</h4>
                  <span className='w-[30px] h-[1px] bg-[#757474] block my-3'></span>
                  <p className='text-[#4a4e56] pt-2 font-[300] text-[1rem]'>“The team’s experience and knowledge were able to shine through & was hassle-free.”</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='testimonial-card grid grid-cols-1 md:grid-cols-3 min-h-[300px]'>
                <div className='md:order-first order-last md:mt-0 mt-8'>
                  <p className='text-[1.125rem] font-light text-[#184ca1]'>
                    E-Commerce<br /> Development <br />
                    <span className='text-[#4a4e56] pt-4 font-[700]'>Project</span>
                  </p>
                  <span className='w-[30px] h-[1px] bg-[#757474] block my-8'></span>
                  <p className='text-[1.125rem] font-light text-[#184ca1]'>Tea <br />
                    <span className='text-[#4a4e56] pt-4 font-[700]'>Industry</span>
                  </p>
                </div>
                <div className='col-span-2'>
                  <figure className="img-author">
                    <img src='https://www.indusnet.co.in/site/wp-content/uploads/2021/08/client-3.jpg' className='rounded-[50%] ' />
                  </figure>
                  <h4 className='text-[1.125rem] font-light text-[#184ca1] pt-2'>Neeraj Agarwal Co-Founder &amp; CEO, Tea People Ltd.</h4>
                  <span className='w-[30px] h-[1px] bg-[#757474] block my-3'></span>
                  <p className='text-[#4a4e56] pt-2 font-[300] text-[1rem]'>“The team was technically very astute and understood our requirements very well.”</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='testimonial-card grid grid-cols-1 md:grid-cols-3 min-h-[300px]'>
                <div className='md:order-first order-last md:mt-0 mt-8'>
                  <p className='text-[1.125rem] font-light text-[#184ca1]'>
                    E-Commerce<br /> Development <br />
                    <span className='text-[#4a4e56] pt-4 font-[700]'>Project</span>
                  </p>
                  <span className='w-[30px] h-[1px] bg-[#757474] block my-8'></span>
                  <p className='text-[1.125rem] font-light text-[#184ca1]'>Tea <br />
                    <span className='text-[#4a4e56] pt-4 font-[700]'>Industry</span>
                  </p>
                </div>
                <div className='col-span-2'>
                  <figure className="img-author">
                    <img src='https://www.indusnet.co.in/site/wp-content/uploads/2021/08/client-4.jpg' className='rounded-[50%] ' />
                  </figure>
                  <h4 className='text-[1.125rem] font-light text-[#184ca1] pt-2'>Neeraj Agarwal Co-Founder &amp; CEO, Tea People Ltd.</h4>
                  <span className='w-[30px] h-[1px] bg-[#757474] block my-3'></span>
                  <p className='text-[#4a4e56] pt-2 font-[300] text-[1rem]'>“The team was technically very astute and understood our requirements very well.”</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Testimonial