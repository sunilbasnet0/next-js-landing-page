"use client"

import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "../../styles/branding.css"




const page = () => {
  return (
    <main className='relative lg:py-[7rem] py-[5rem] bg-[#131426]'>
      <section className='py-[3rem]'>
        <div className='absolute top-0 right-0'>
          <img src='https://assets-global.website-files.com/63f3c83933b2e96042f898cc/6416015336dcd306d7dfb33e_branding-header-bg.svg' loading='lazy' />
        </div>
        <div className='conatiners relative z-20'>
          <div className='mt-[2rem]'>
            <img src="https://assets-global.website-files.com/63f3c83933b2e96042f898cc/640d8cc385f0c05a3fb28780_branding-header-icon.png" loading="lazy" alt="" />
            <h1 className='text-[1rem] text-[#a56d98] pt-[2rem]'>B2B Branding Services</h1>
            <h2 className="text-[3.5rem] font-semibold capitalize text-white">We create profitable <br />and memorable brands</h2>
            <p className="text-[#a39890] text-[1.25rem] pt-[2rem]">A brand is more than a logo. Ensure that your branding is on-point and ready to <br />launch to your target audience.</p>
            <div className='mt-[2rem] flex items-center gap-[2rem]'>
              <button className='text-[#000] bg-white px-[2.5rem]'>Book a Call</button>
              <button className='b bg-transparent hover:text-[a56d98]'>View Work</button>
            </div>
          </div>
        </div>
      </section>

      <section className='my-[4rem]'>
        <div className='containers'>
          <div className='max-w-[700px] mx-auto'>
            <p className='text-[#806088] text-[1.25rem] text-center uppercase'>example brand guidelines</p>
            <h2 className='text-[#fff] text-[3rem] text-center font-bold'>What you'll get from B2B branding</h2>
          </div>
          <div className='my-[3rem]'>
            <Swiper
              // install Swiper modules
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              className='brand-image-slider'

            >
              <SwiperSlide>
                <img src='https://assets-global.website-files.com/63f3c83933b2e96042f898cc/641461d336588bef2bf0e768_slide-01.png' loading='lazy' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='https://assets-global.website-files.com/63f3c83933b2e96042f898cc/6430869ea31608b15f96e0d0_branding-slide-images-13-min.png' loading='lazy' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='https://assets-global.website-files.com/63f3c83933b2e96042f898cc/6430869d3be141663b2793a5_branding-slide-images-16-min.png' loading='lazy' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='https://assets-global.website-files.com/63f3c83933b2e96042f898cc/6430869e2b72bb37b7076d99_branding-slide-images-14-min.png' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='https://assets-global.website-files.com/63f3c83933b2e96042f898cc/6430869ea31608856096e0d1_branding-slide-images-19-min.png' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='https://assets-global.website-files.com/63f3c83933b2e96042f898cc/6430869db89d662e6c4a9a95_branding-slide-images-20-min.png' />
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </section>
    </main >
  )
}

export default page