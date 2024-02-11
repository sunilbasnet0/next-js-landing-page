"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Services = () => {
  return (
    <section id='servicces' className='my-[3rem]'>
      <div className='containers'>
        <h2 className='text-center text-[2rem] md:text-[2.5rem] lg:text-[2.813rem] text-[#20396e] font-[900]'>Services We Provide</h2>
        <div className='services-cards mt-[3rem]'>
          <Swiper
            slidesPerView={1}
            spaceBetween={40}

            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="services-swiper"
          >
            <SwiperSlide>
              <div className='services-card border-[#d3d7d8] border-[1px] rounded-[1.5rem] p-[2.5rem]'>
                <figure className='w-[50px] h-[50px]'>
                  <svg viewBox="-49 141 512 512">
                    <path d="M433,221h-24v-50c0-16.5-13.5-30-30-30H35c-16.5,0-30,13.5-30,30v50h-24c-16.5,0-30,13.5-30,30
                        v288c0,16.5,13.5,30,30,30h176v24h-19c-16.5,0-30,13.5-30,30v20c0,5.5,4.5,10,10,10h178c5.5,0,10-4.5,10-10v-20
                        c0-16.5-13.5-30-30-30h-19v-24h176c16.5,0,30-13.5,30-30V251C463,234.5,449.5,221,433,221z M433,241c5.5,0,10,4.5,10,10v230h-34V241
                        L433,241z M35,161h344c5.5,0,10,4.5,10,10v50H25v-50C25,165.5,29.5,161,35,161z M-19,241H5v75c0,5.5,4.5,10,10,10s10-4.5,10-10v-75
                        h364v240h-51v-33c0-5.5-4.5-10-10-10h-13c-2.3-7.9-5.4-15.4-9.4-22.6l9.2-9.2c3.9-3.9,3.9-10.2,0-14.1l-30.4-30.4
                        c-3.9-3.9-10.2-3.9-14.1,0l-9.2,9.2c-7.2-4-14.8-7.1-22.6-9.4v-13c0-5.5-4.5-10-10-10h-42.9c-5.5,0-10,4.5-10,10v13
                        c-7.9,2.3-15.4,5.4-22.6,9.4l-9.2-9.2c-3.9-3.9-10.2-3.9-14.1,0l-30.4,30.4c-3.9,3.9-3.9,10.2,0,14.1l9.2,9.2
                        c-4,7.2-7.1,14.8-9.4,22.6H86c-5.5,0-10,4.5-10,10v33H25v-75c0-5.5-4.5-10-10-10s-10,4.5-10,10v75h-34V251
                        C-29,245.5-24.5,241-19,241L-19,241z M128,406.8l-7.6-7.6l16.2-16.2l7.6,7.6c3.3,3.3,8.6,3.9,12.5,1.3c9.5-6.1,19.8-10.4,30.8-12.8
                        c4.6-1,7.9-5.1,7.9-9.8v-10.8h22.9v10.8c0,4.7,3.3,8.8,7.9,9.8c11,2.3,21.4,6.6,30.8,12.8c4,2.6,9.2,2,12.5-1.3l7.6-7.6l16.2,16.2
                        l-7.6,7.6c-3.3,3.3-3.9,8.6-1.3,12.5c6.1,9.5,10.4,19.8,12.8,30.8c1,4.6,5.1,7.9,9.8,7.9H318v23h-62.3c0.9-3.8,1.3-7.6,1.3-11.5
                        c0-27.6-22.4-50-50-50s-50,22.4-50,50c0,3.9,0.5,7.7,1.3,11.5H96v-23h10.8c4.7,0,8.8-3.3,9.8-7.9c2.3-11,6.6-21.4,12.8-30.8
                        C131.9,415.3,131.4,410.1,128,406.8L128,406.8z M177,469.5c0-16.5,13.5-30,30-30s30,13.5,30,30c0,3.9-0.8,7.9-2.3,11.5h-55.4
                        C177.8,477.4,177,473.5,177,469.5z M286,623v10H128v-10c0-5.5,4.5-10,10-10h138C281.5,613,286,617.5,286,623L286,623z M237,593h-60
                        v-24h60V593z M433,549H-19c-5.5,0-10-4.5-10-10v-38h472v38C443,544.5,438.5,549,433,549z"></path>
                    <path d="M237,201h108c5.5,0,10-4.5,10-10s-4.5-10-10-10H237c-5.5,0-10,4.5-10,10S231.5,201,237,201z"></path>
                    <path d="M113,201c2.6,0,5.2-1.1,7.1-2.9c1.9-1.9,2.9-4.4,2.9-7.1s-1.1-5.2-2.9-7.1
                            c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2,1.1-7.1,2.9c-1.9,1.9-2.9,4.4-2.9,7.1s1.1,5.2,2.9,7.1C107.8,199.9,110.4,201,113,201z"></path>
                    <path d="M69,201c2.6,0,5.2-1.1,7.1-2.9c1.9-1.9,2.9-4.4,2.9-7.1s-1.1-5.2-2.9-7.1
                            c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2,1.1-7.1,2.9c-1.9,1.9-2.9,4.4-2.9,7.1s1.1,5.2,2.9,7.1C63.8,199.9,66.4,201,69,201z"></path>
                    <path d="M157,201c2.6,0,5.2-1.1,7.1-2.9c1.9-1.9,2.9-4.4,2.9-7.1s-1.1-5.2-2.9-7.1
                            c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2,1.1-7.1,2.9c-1.9,1.9-2.9,4.4-2.9,7.1s1.1,5.2,2.9,7.1C151.8,199.9,154.4,201,157,201z"></path>
                    <path d="M63,289h23.8c5.5,0,10-4.5,10-10c0-5.5-4.5-10-10-10H63c-5.5,0-10,4.5-10,10
                            C53,284.5,57.5,289,63,289z"></path>
                    <path d="M130.8,289h91.7c5.5,0,10-4.5,10-10c0-5.5-4.5-10-10-10h-91.7c-5.5,0-10,4.5-10,10
                            C120.8,284.5,125.3,289,130.8,289z"></path>
                    <path d="M63,337h58c5.5,0,10-4.5,10-10s-4.5-10-10-10H63c-5.5,0-10,4.5-10,10S57.5,337,63,337z"></path>
                    <path d="M266.5,289H351c5.5,0,10-4.5,10-10c0-5.5-4.5-10-10-10h-84.5c-5.5,0-10,4.5-10,10
                            C256.5,284.5,261,289,266.5,289z"></path>
                    <path d="M351,317h-68.4c-5.5,0-10,4.5-10,10s4.5,10,10,10H351c5.5,0,10-4.5,10-10S356.5,317,351,317z"></path>
                    <path d="M15,371c2.6,0,5.2-1.1,7.1-2.9s2.9-4.4,2.9-7.1s-1.1-5.2-2.9-7.1c-1.9-1.9-4.4-2.9-7.1-2.9
                            s-5.2,1.1-7.1,2.9S5,358.4,5,361s1.1,5.2,2.9,7.1C9.8,369.9,12.4,371,15,371z"></path>
                  </svg>
                </figure>
                <h2 className='text-[1.813rem] text-[#184ca1] font-[900] py-3'>Web Development</h2>
                <p className='text-[1.125rem] text-[#4F545C] font-[400] leading-7'>With high scalable front-end frameworks and well-
                  documented backend solutions, we are providing
                  tailored web app solutions to best suit your next digital
                  products.</p>
                <div className='mt-[2.25rem]'>
                  <Swiper
                    slidesPerView={2}
                    spaceBetween={40}
                    breakpoints={{
                      425: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                      1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                      },
                    }}
                    className="mySwiper-icon"
                  >
                    <SwiperSlide>
                      <img src='/react-icon.png' className='grayscale bg-transparent' />
                      <p>React</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/pytho-icon.png' className='grayscale bg-transparent' />
                      <p>Python</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/javascript-logo.png' className='grayscale bg-transparent' />
                      <p>JavaScript</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/Angular-icon.png' className='grayscale bg-transparent' />
                      <p>Angular</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/vue-icon.png' className='grayscale bg-transparent' />
                      <p>Vue.js</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/node-js.png' className='grayscale bg-transparent' />
                      <p>Node.js</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/django.png' className='grayscale bg-transparent' />
                      <p>Django</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/laravel.png' className='grayscale bg-transparent' />
                      <p>Laravel</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/php-logo.png' className='grayscale bg-transparent' />
                      <p>PHP</p>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div className='services-card border-[#d3d7d8] border-[1px] rounded-[1.5rem] p-[2.5rem]'>
                <figure className='w-[50px] h-[50px]'>
                  <svg viewBox="-49 141 512 512">
                    <path d="M183.2,181c4.4,0,8-3.6,8-8s-3.6-8-8-8h-0.1c-4.4,0-8,3.6-8,8S178.8,181,183.2,181z"></path>
                    <path d="M207,181h24c4.4,0,8-3.6,8-8s-3.6-8-8-8h-24c-4.4,0-8,3.6-8,8S202.6,181,207,181z"></path>
                    <path d="M351,597V189c0-26.4-21.5-47.9-47.9-48c0,0-0.1,0-0.1,0H111c-26.5,0-48,21.5-48,48v408c0,30.9,25.1,56,56,56
                            h176C325.9,653,351,627.9,351,597z M335,541H79V205h256V541z M79,557h128h128v8c0,22.1-17.9,40-40,40h-88h-88c-22.1,0-40-17.9-40-40
                            V557z M111,157h191.9c0,0,0,0,0.1,0c17.6,0,32,14.4,32,32H79v0C79,171.4,93.4,157,111,157L111,157z M295,637H119
                            c-19.3,0-35.5-13.8-39.2-32.1c10.1,9.9,24,16.1,39.2,16.1h176c15.2,0,29.1-6.2,39.2-16.1C330.5,623.2,314.3,637,295,637z"></path>
                    <path d="M183,581c0,13.2,10.8,24,24,24s24-10.8,24-24s-10.8-24-24-24S183,567.8,183,581z M207,573c4.4,0,8,3.6,8,8
                        s-3.6,8-8,8s-8-3.6-8-8S202.6,573,207,573z"></path>
                    <path d="M135,485h144c22.1,0,40-17.9,40-40V301c0-22.1-17.9-40-40-40H135c-22.1,0-40,17.9-40,40v144
                        C95,467,112.9,485,135,485z M111,301c0-13.2,10.8-24,24-24h144c13.2,0,24,10.8,24,24v144c0,13.2-10.8,24-24,24H135
                        c-13.2,0-24-10.8-24-24V301z"></path>
                    <path d="M175,397c2,0,4.1-0.8,5.7-2.3c3.1-3.1,3.1-8.2,0-11.3L170.3,373l10.3-10.3c3.1-3.1,3.1-8.2,0-11.3
                        s-8.2-3.1-11.3,0l-16,16c-3.1,3.1-3.1,8.2,0,11.3l16,16C170.9,396.2,173,397,175,397L175,397z"></path>
                    <path d="M233.4,394.7c1.6,1.6,3.6,2.3,5.7,2.3s4.1-0.8,5.7-2.3l16-16c3.1-3.1,3.1-8.2,0-11.3l-16-16
                        c-3.1-3.1-8.2-3.1-11.3,0c-3.1,3.1-3.1,8.2,0,11.3l10.3,10.3l-10.3,10.3C230.3,386.5,230.3,391.5,233.4,394.7L233.4,394.7z"></path>
                    <path d="M196.5,404.6c0.8,0.3,1.7,0.4,2.5,0.4c3.4,0,6.5-2.1,7.6-5.5l16-48c1.4-4.2-0.9-8.7-5.1-10.1
                        c-4.2-1.4-8.7,0.9-10.1,5.1l-16,48C190,398.7,192.3,403.2,196.5,404.6z"></path>
                    <path d="M207,461c48.5,0,88-39.5,88-88s-39.5-88-88-88s-88,39.5-88,88S158.5,461,207,461z M207,301
                        c39.7,0,72,32.3,72,72s-32.3,72-72,72s-72-32.3-72-72S167.3,301,207,301z"></path>
                  </svg>
                </figure>
                <h2 className='text-[1.813rem] text-[#184ca1] font-[900] py-3'>Mobile Development</h2>
                <p className='text-[1.125rem] text-[#4F545C] font-[400] leading-7'>We flawlessly code your requirements to create custom
                  mobile apps and ensure high revenue and millions of
                  downloads. We drive innovations at scale.</p>
                <div className='mt-[2.8rem]'>
                  <Swiper
                    slidesPerView={2}
                    spaceBetween={40}
                    breakpoints={{
                      425: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                      1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                      },
                    }}
                    className="mySwiper-icon"
                  >
                    <SwiperSlide>
                      <img src='/react-icon.png' className='grayscale bg-transparent' />
                      <p>React</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/pytho-icon.png' className='grayscale bg-transparent' />
                      <p>Python</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/javascript-logo.png' className='grayscale bg-transparent' />
                      <p>JavaScript</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/Angular-icon.png' className='grayscale bg-transparent' />
                      <p>Angular</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/vue-icon.png' className='grayscale bg-transparent' />
                      <p>Vue.js</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/node-js.png' className='grayscale bg-transparent' />
                      <p>Node.js</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/django.png' className='grayscale bg-transparent' />
                      <p>Django</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/laravel.png' className='grayscale bg-transparent' />
                      <p>Laravel</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/php-logo.png' className='grayscale bg-transparent' />
                      <p>PHP</p>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </SwiperSlide>



            <SwiperSlide>
              <div className='services-card border-[#d3d7d8] border-[1px] rounded-[1.5rem] p-[2.5rem]'>
                <figure className='w-[50px] h-[50px]'>
                  <svg viewBox="0 0 512 512">
                    <g>
                      <g>
                        <path d="M457.345,408.036c5.488-7.584,8.735-16.891,8.735-26.946V321c0-5.523-4.478-10-10-10h-44.692
                            c-20.66,0-37.468,16.808-37.468,37.468v32.622c0,10.049,3.243,19.349,8.724,26.931c-6.836,1.109-13.413,3.299-19.547,6.505
                            c-13.894-20.732-36.657-35.03-62.815-37.442c-0.102-0.029-0.206-0.05-0.309-0.075c9.359-10.451,15.064-24.239,15.064-39.339V256
                            c0-5.523-4.478-10-10-10h-60.742c-26.099,0-47.332,21.233-47.332,47.332v44.337c0,15.1,5.705,28.888,15.064,39.339
                            c-0.103,0.025-0.207,0.047-0.309,0.075c-26.161,2.412-48.925,16.712-62.818,37.447c-6.136-3.205-12.714-5.397-19.547-6.506
                            c5.482-7.582,8.727-16.884,8.727-26.934V321c0-5.523-4.478-10-10-10H83.388c-20.66,0-37.468,16.808-37.468,37.468v32.622
                            c0,10.056,3.247,19.362,8.735,26.946C23.702,413.095,0,440.014,0,472.375V502c0,5.523,4.478,10,10,10h492c5.522,0,10-4.477,10-10
                            v-29.625C512,440.014,488.298,413.095,457.345,408.036z M65.92,348.468c0-9.632,7.836-17.468,17.468-17.468h34.692v12.179
                            c0,5.972-4.858,10.83-10.829,10.83H65.92V348.468z M65.92,374.008h41.331c3.81,0,7.458-0.699,10.829-1.969v9.051
                            c0,14.38-11.699,26.08-26.08,26.08s-26.08-11.7-26.08-26.08V374.008z M98.447,427.17L92,433.617l-6.447-6.447H98.447z
                            M134.552,461.736V492H20v-19.625c0-22.429,16.423-41.087,37.873-44.601l27.056,27.056c1.876,1.875,4.419,2.929,7.071,2.929
                            s5.195-1.054,7.071-2.929l27.064-27.065c4.78,0.778,9.377,2.319,13.661,4.573C136.408,441.504,134.552,451.407,134.552,461.736z
                            M256.001,376.707c-21.525,0-39.037-17.512-39.037-39.037v-13.217h59.764c6.627,0,12.867-1.693,18.31-4.667v17.884
                            C295.038,359.195,277.526,376.707,256.001,376.707z M273.432,396.706L256,414.138l-17.432-17.432H273.432z M216.962,293.332h0.001
                            c0-15.071,12.261-27.332,27.332-27.332h50.742v20.144c0,10.096-8.214,18.31-18.31,18.31h-59.765V293.332z M357.447,492H338H174
                            h-19.447v-20h65.114c5.522,0,10-4.477,10-10s-4.478-10-10-10h-64.383c4.286-28.421,27.036-50.856,55.599-54.695l38.046,38.046
                            c1.953,1.953,4.512,2.929,7.071,2.929s5.118-0.976,7.071-2.929l38.046-38.046c31.756,4.268,56.33,31.525,56.33,64.431V492z
                            M393.92,348.468c0-9.632,7.836-17.468,17.468-17.468h34.692v12.179c0,5.972-4.858,10.83-10.829,10.83H393.92V348.468z
                            M393.92,374.008h41.331c3.81,0,7.458-0.699,10.829-1.969v9.051c0,14.38-11.699,26.08-26.08,26.08s-26.08-11.7-26.08-26.08
                            V374.008z M426.447,427.17L420,433.617l-6.447-6.447H426.447z M377.447,492v-30.264c0-10.33-1.856-20.233-5.245-29.4
                            c4.282-2.256,8.878-3.796,13.659-4.573l27.067,27.067c1.876,1.875,4.419,2.929,7.071,2.929c2.652,0,5.195-1.054,7.071-2.929
                            l27.056-27.056c21.45,3.515,37.873,22.172,37.873,44.601V492H377.447z">
                        </path>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M305.284,65.338c-3.906-3.905-10.236-3.905-14.143,0l-49.07,49.071l-21.213-21.213
                            c-3.906-3.906-10.236-3.906-14.142-0.001c-3.905,3.905-3.905,10.237,0,14.143L235,135.622c1.876,1.875,4.419,2.929,7.071,2.929
                            c2.652,0,5.195-1.054,7.071-2.929l56.142-56.142C309.189,75.575,309.189,69.243,305.284,65.338z"></path>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M296.888,8.672c-5.043-2.249-10.956,0.016-13.206,5.06s0.016,10.957,5.06,13.206c28.999,12.933,47.737,41.8,47.737,73.542
                          c0,44.376-36.103,80.479-80.479,80.479c-44.376,0-80.479-36.103-80.479-80.479c0-31.578,18.603-60.385,47.393-73.388
                          c5.033-2.273,7.271-8.197,4.997-13.23c-2.273-5.034-8.2-7.271-13.229-4.998c-35.938,16.232-59.16,52.193-59.16,91.615
                          c-0.001,55.405,45.074,100.48,100.478,100.48s100.479-45.075,100.479-100.479C356.479,60.853,333.088,24.816,296.888,8.672z"></path>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M256.358,0H256c-5.522,0-10,4.477-10,10s4.478,10,10,10h0.264c0.016,0,0.031,0,0.048,0c5.501,0,9.973-4.446,9.999-9.953
                        C266.337,4.524,261.881,0.026,256.358,0z"></path>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M263.069,454.93C261.21,453.07,258.63,452,256,452s-5.21,1.07-7.07,2.93S246,459.37,246,462s1.069,5.21,2.93,7.07
                          c1.861,1.86,4.44,2.93,7.07,2.93s5.21-1.07,7.069-2.93c1.86-1.86,2.931-4.44,2.931-7.07S264.93,456.79,263.069,454.93z"></path>
                      </g>
                    </g>
                  </svg>
                </figure>
                <h2 className='text-[1.813rem] text-[#184ca1] font-[900] py-3'>Dedicated Hiring</h2>
                <p className='text-[1.125rem] text-[#4F545C] font-[400] leading-7'>Set up your top expert team to build the project in a minimal time frame. From project discovery to
                  continuous optimisation, avail the wide spectrum of roles
                  in one place.
                </p>
                <div className='mt-[2.25rem]'>
                  <Swiper
                    slidesPerView={2}
                    spaceBetween={40}
                    breakpoints={{
                      425: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                      1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                      },
                    }}
                    className="mySwiper-icon"
                  >
                    <SwiperSlide>
                      <img src='/react-icon.png' className='grayscale bg-transparent' />
                      <p>React</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/pytho-icon.png' className='grayscale bg-transparent' />
                      <p>Python</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/javascript-logo.png' className='grayscale bg-transparent' />
                      <p>JavaScript</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/Angular-icon.png' className='grayscale bg-transparent' />
                      <p>Angular</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/vue-icon.png' className='grayscale bg-transparent' />
                      <p>Vue.js</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/node-js.png' className='grayscale bg-transparent' />
                      <p>Node.js</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/django.png' className='grayscale bg-transparent' />
                      <p>Django</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/laravel.png' className='grayscale bg-transparent' />
                      <p>Laravel</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/php-logo.png' className='grayscale bg-transparent' />
                      <p>PHP</p>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='services-card border-[#d3d7d8] border-[1px] rounded-[1.5rem] p-[2.5rem]'>
                <figure className='w-[50px] h-[50px]'>
                  <svg viewBox="-49 179.1 512 435.9">
                    <g>
                      <path d="M249.4,401l-55.9-36.1c-3.3-2.1-7.4-2.3-10.8-0.4c-3.4,1.9-5.5,5.4-5.5,9.3v72.3c0,3.9,2.1,7.5,5.5,9.3
                    c1.6,0.9,3.3,1.3,5.1,1.3c2,0,4-0.6,5.8-1.7l55.9-36.1c3-2,4.9-5.3,4.9-8.9C254.2,406.3,252.4,403,249.4,401L249.4,401z M192.1,438
                    v-56.2l43.4,28.1L192.1,438z"></path>
                      <path d="M122.4,224.2h38.2c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5h-38.2c-4.1,0-7.5,3.4-7.5,7.5S118.3,224.2,122.4,224.2
                    L122.4,224.2z"></path>
                      <path d="M160.6,238.6H82.4c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h78.2c4.1,0,7.5-3.4,7.5-7.5S164.7,238.6,160.6,238.6z"></path>
                      <path d="M160.6,267.9H82.4c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h78.2c4.1,0,7.5-3.4,7.5-7.5S164.7,267.9,160.6,267.9z"></path>
                      <path d="M160.6,297.3H82.4c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h78.2c4.1,0,7.5-3.4,7.5-7.5S164.7,297.3,160.6,297.3z"></path>
                      <path d="M263,284.8l4.4,18.4c0.8,3.4,3.9,5.8,7.3,5.8c0.6,0,1.2-0.1,1.7-0.2c4-1,6.5-5,5.6-9l-3.4-14.1h1.1l26.6,10
                    c0.9,0.3,1.7,0.5,2.6,0.5c1.5,0,3-0.5,4.3-1.3c2-1.4,3.2-3.7,3.2-6.2v-52.8c0-2.5-1.2-4.8-3.2-6.2c-2-1.4-4.6-1.7-6.9-0.9l-26.6,10
                    h-10.6c-12.9,0-23.4,10.5-23.4,23.4C245.7,273,253,282.1,263,284.8L263,284.8z M301.5,277.7l-12.9-4.8v-21.5l12.9-4.8V277.7z
                    M269.1,253.7h4.4v16.9h-4.4c-4.7,0-8.4-3.8-8.4-8.4S264.5,253.7,269.1,253.7z"></path>
                      <path d="M330.9,269.7h5.1c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5h-5.1c-4.1,0-7.5,3.4-7.5,7.5S326.7,269.7,330.9,269.7z"></path>
                      <path d="M330.9,248.2c0.6,0,1.1-0.1,1.7-0.2l5-1.2c4-0.9,6.5-5,5.6-9c-0.9-4-5-6.5-9-5.6l-5,1.2c-4,0.9-6.5,5-5.6,9
                    C324.4,245.8,327.5,248.2,330.9,248.2z"></path>
                      <path d="M337.6,277.5l-5-1.2c-4-0.9-8.1,1.6-9,5.6c-0.9,4,1.6,8.1,5.6,9l5,1.2c0.6,0.1,1.1,0.2,1.7,0.2c3.4,0,6.5-2.3,7.3-5.8
                    C344.2,282.5,341.7,278.5,337.6,277.5z"></path>
                      <path d="M70.1,453.5H57.3c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h12.8c4.1,0,7.5-3.4,7.5-7.5S74.2,453.5,70.1,453.5z"></path>
                      <path d="M146.4,453.5H93.6c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h52.8c4.1,0,7.5-3.4,7.5-7.5S150.6,453.5,146.4,453.5z"></path>
                      <path d="M70.1,478.8H57.3c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h12.8c4.1,0,7.5-3.4,7.5-7.5S74.2,478.8,70.1,478.8z"></path>
                      <path d="M146.4,478.8H93.6c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h52.8c4.1,0,7.5-3.4,7.5-7.5S150.6,478.8,146.4,478.8z"></path>
                      <path d="M280.4,453.5h-12.8c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h12.8c4.1,0,7.5-3.4,7.5-7.5S284.5,453.5,280.4,453.5z"></path>
                      <path d="M356.7,453.5h-52.8c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h52.8c4.1,0,7.5-3.4,7.5-7.5S360.9,453.5,356.7,453.5z"></path>
                      <path d="M280.4,478.8h-12.8c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h12.8c4.1,0,7.5-3.4,7.5-7.5S284.5,478.8,280.4,478.8z"></path>
                      <path d="M356.7,478.8h-52.8c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h52.8c4.1,0,7.5-3.4,7.5-7.5S360.9,478.8,356.7,478.8z"></path>
                      <path d="M443,545.8h-13.2V289.9c0-17-13.8-30.8-30.8-30.8h-31.5v-66.8c0-7.3-5.9-13.2-13.2-13.2H230.7c-7.3,0-13.2,5.9-13.2,13.2
                        v66.8h-21.1v-66.8c0-7.3-5.9-13.2-13.2-13.2h-58.5c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h56.6v133.3h-74c-5.1,0-9.8,3-12,7.6
                        l-2.4,5.3l-2.4-5.3c-2.2-4.6-6.8-7.6-12-7.6h-17V194.1h33.2c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5h-35c-7.3,0-13.2,5.9-13.2,13.2
                        v66.8H15.1c-17,0-30.8,13.8-30.8,30.8v255.9H-29c-11,0-20,9-20,20v29c0,11,9,20,20,20h96.4c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5
                        H-29c-2.8,0-5-2.3-5-5v-29c0-2.8,2.3-5,5-5h181l7.8,21.6c1.8,5.1,6.7,8.5,12,8.5h70.3c5.4,0,10.2-3.4,12-8.5l7.8-21.6h181
                        c2.8,0,5,2.3,5,5v29c0,2.8-2.3,5-5,5H97.4c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5H443c11,0,20-9,20-20v-29
                        C463,554.8,454,545.8,443,545.8L443,545.8z M232.6,194.1h119.8v133.3h-74c-5.1,0-9.8,3-12,7.6l-2.4,5.3l-2.4-5.3
                        c-2.1-4.6-6.8-7.6-12-7.6h-17L232.6,194.1z M217.6,274.1v15h-21.1v-15H217.6z M240.6,575.9h-67.2l-5.4-15.1h78L240.6,575.9z
                        M-0.7,545.8V289.9c0-8.7,7.1-15.8,15.8-15.8h31.5v15H25.9c-6.4,0-11.7,5.2-11.7,11.7v218.4c0,6.4,5.2,11.7,11.7,11.7h362.1
                        c6.4,0,11.7-5.2,11.7-11.7V383.1c0-4.1-3.4-7.5-7.5-7.5s-7.5,3.4-7.5,7.5v132.7H29.3V304.1h17.3v25.1c0,7.3,5.9,13.2,13.2,13.2
                        h17.7l5.8,12.5c1.8,3.9,5.5,6.2,9.8,6.2s8-2.4,9.8-6.2l5.8-12.5h74.7c7.3,0,13.2-5.9,13.2-13.2v-25.1h21.1v25.1
                        c0,7.3,5.9,13.2,13.2,13.2h17.7l5.8,12.5c1.8,3.9,5.5,6.2,9.8,6.2c4.2,0,8-2.4,9.8-6.2l5.8-12.5h74.7c7.3,0,13.2-5.9,13.2-13.2
                        v-25.1h17.3v49c0,4.1,3.4,7.5,7.5,7.5s7.5-3.4,7.5-7.5v-52.4c0-6.4-5.2-11.7-11.7-11.7h-20.6v-15h31.5c8.7,0,15.8,7.1,15.8,15.8
                        v255.9L-0.7,545.8L-0.7,545.8z">
                      </path>
                    </g>
                  </svg>
                </figure>
                <h2 className='text-[1.813rem] text-[#184ca1] font-[900] py-3'>Digital Marketing</h2>
                <p className='text-[1.125rem] text-[#4F545C] font-[400] leading-7'>We employ our diverse team of strategists, performance marketers, and creative experts to deploy targeted strategies for brands to bring their unique vision to life.</p>
                <div className='mt-[2.25rem]'>
                  <Swiper
                    slidesPerView={2}
                    spaceBetween={40}
                    breakpoints={{
                      425: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                      1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                      },
                    }}
                    className="mySwiper-icon"
                  >
                    <SwiperSlide>
                      <img src='/react-icon.png' className='grayscale bg-transparent' />
                      <p>React</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/pytho-icon.png' className='grayscale bg-transparent' />
                      <p>Python</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/javascript-logo.png' className='grayscale bg-transparent' />
                      <p>JavaScript</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/Angular-icon.png' className='grayscale bg-transparent' />
                      <p>Angular</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/vue-icon.png' className='grayscale bg-transparent' />
                      <p>Vue.js</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/node-js.png' className='grayscale bg-transparent' />
                      <p>Node.js</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/django.png' className='grayscale bg-transparent' />
                      <p>Django</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/laravel.png' className='grayscale bg-transparent' />
                      <p>Laravel</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/php-logo.png' className='grayscale bg-transparent' />
                      <p>PHP</p>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div className='services-card border-[#d3d7d8] border-[1px] rounded-[1.5rem] p-[2.5rem]'>
                <figure className='w-[50px] h-[50px]'>
                  <svg viewBox="-49 141 512 472">
                    <path d="M45,477.3h-84c-5.5,0-10,4.5-10,10V603c0,5.5,4.5,10,10,10h84c5.5,0,10-4.5,10-10V487.3C55,481.8,50.5,477.3,45,477.3z
                    M35,593h-64v-95.7h64V593z"></path>
                    <path d="M180.7,353h-84c-5.5,0-10,4.5-10,10v240c0,5.5,4.5,10,10,10h84c5.5,0,10-4.5,10-10V363C190.7,357.5,186.2,353,180.7,353z
                    M170.7,593h-64V373h64V593z"></path>
                    <path d="M316.9,385h-84c-5.5,0-10,4.5-10,10v208c0,5.5,4.5,10,10,10h84c5.5,0,10-4.5,10-10V395C326.9,389.5,322.5,385,316.9,385z
                    M306.9,593h-64V405h64V593z"></path>
                    <path d="M3,439c23.2,0,42-18.8,42-42c0-7.3-1.9-14.2-5.2-20.2l75.5-69.2c6.7,4.5,14.7,7.1,23.3,7.1c16.3,0,30.4-9.3,37.4-22.9
                        l56.9,13.4c0.2,23,19,41.6,42,41.6c23.2,0,42-18.8,42-42c0-7.1-1.8-13.8-4.9-19.7l75.3-67.3c6.8,4.6,14.9,7.4,23.7,7.4
                        c23.2,0,42-18.8,42-42s-18.8-42-42-42s-42,18.8-42,42c0,7.1,1.8,13.8,4.9,19.7L298.7,270c-6.8-4.6-14.9-7.4-23.7-7.4
                        c-16.3,0-30.4,9.3-37.4,22.9l-56.9-13.4c-0.2-23-19-41.6-42-41.6c-23.2,0-42,18.8-42,42c0,7.3,1.9,14.2,5.2,20.2l-75.5,69.2
                        C19.6,357.6,11.6,355,3,355c-23.2,0-42,18.8-42,42S-20.2,439,3,439z M411,161c12.1,0,22,9.9,22,22s-9.9,22-22,22s-22-9.9-22-22
                        S398.9,161,411,161z M274.9,282.7c12.1,0,22,9.9,22,22c0,12.1-9.9,22-22,22c-12.1,0-22-9.9-22-22
                        C252.9,292.5,262.8,282.7,274.9,282.7z M138.7,250.7c12.1,0,22,9.9,22,22c0,12.1-9.9,22-22,22c-12.1,0-22-9.9-22-22
                        C116.7,260.5,126.5,250.7,138.7,250.7z M3,375c12.1,0,22,9.9,22,22s-9.9,22-22,22s-22-9.9-22-22S-9.1,375,3,375z"></path>
                    <path d="M453,263.3h-84c-5.5,0-10,4.5-10,10v119.8c0,5.5,4.5,10,10,10s10-4.5,10-10V283.3h64V593h-64V483.2c0-5.5-4.5-10-10-10
                      s-10,4.5-10,10V603c0,5.5,4.5,10,10,10h84c5.5,0,10-4.5,10-10V273.3C463,267.8,458.5,263.3,453,263.3z"></path>
                    <path d="M369,448.2c2.6,0,5.2-1.1,7.1-2.9c1.9-1.9,2.9-4.4,2.9-7.1c0-2.6-1.1-5.2-2.9-7.1c-1.9-1.9-4.4-2.9-7.1-2.9
                      s-5.2,1.1-7.1,2.9c-1.9,1.9-2.9,4.4-2.9,7.1c0,2.6,1.1,5.2,2.9,7.1C363.8,447.1,366.4,448.2,369,448.2z"></path>
                  </svg>
                </figure>
                <h2 className='text-[1.813rem] text-[#184ca1] font-[900] py-3'>Analytics</h2>
                <p className='text-[1.125rem] text-[#4F545C] font-[400] leading-7'>Armed with big data and Machine learning models, we are leveraging our analytics capabilities to help you predict and transform your business and scale growth.</p>
                <div className='mt-[2.25rem]'>
                  <Swiper
                    slidesPerView={2}
                    spaceBetween={40}
                    breakpoints={{
                      425: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                      1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                      },
                    }}
                    className="mySwiper-icon"
                  >
                    <SwiperSlide>
                      <img src='/react-icon.png' className='grayscale bg-transparent' />
                      <p>React</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/pytho-icon.png' className='grayscale bg-transparent' />
                      <p>Python</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/javascript-logo.png' className='grayscale bg-transparent' />
                      <p>JavaScript</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/Angular-icon.png' className='grayscale bg-transparent' />
                      <p>Angular</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/vue-icon.png' className='grayscale bg-transparent' />
                      <p>Vue.js</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/node-js.png' className='grayscale bg-transparent' />
                      <p>Node.js</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/django.png' className='grayscale bg-transparent' />
                      <p>Django</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/laravel.png' className='grayscale bg-transparent' />
                      <p>Laravel</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/php-logo.png' className='grayscale bg-transparent' />
                      <p>PHP</p>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='services-card border-[#d3d7d8] border-[1px] rounded-[1.5rem] p-[2.5rem]'>
                <figure className='w-[50px] h-[50px]'>
                  <svg height="30" viewBox="0 0 512 512" width="30">
                    <g>
                      <path d="m366.466 239.24c-46.332-38.681-72.068-91.322-85.5-128.67-8.518-23.688-42.021-23.723-50.554 0-13.431 37.348-39.166 89.988-85.5 128.67-15.146 12.646-17.178 35.071-4.433 49.969 35.05 40.966 45.011 90.275 45.687 93.806l14.91 120.217c.621 5.008 4.877 8.769 9.924 8.769h89.379c5.047 0 9.303-3.761 9.924-8.769l14.91-120.212c.687-3.587 10.654-52.865 45.686-93.81 12.725-14.875 10.737-37.305-4.433-49.97zm-74.923 252.76h-71.707l-12.466-100.515h96.639zm-35.854-193.818c-9.558 0-17.333-7.775-17.333-17.333s7.775-17.333 17.333-17.333 17.333 7.776 17.333 17.333-7.775 17.333-17.333 17.333zm100.012-21.975c-31.221 36.491-44.096 77.917-48.406 95.278h-41.605v-54.674c15.744-4.384 27.333-18.84 27.333-35.962 0-20.586-16.747-37.333-37.333-37.333s-37.333 16.748-37.333 37.333c0 17.122 11.589 31.578 27.333 35.962v54.674h-41.605c-4.312-17.361-17.187-58.787-48.407-95.278-5.556-6.493-4.452-16.184 2.054-21.614 49.776-41.557 77.233-97.577 91.502-137.255 2.186-6.078 10.72-6.1 12.913 0 14.27 39.678 41.728 95.699 91.502 137.255 6.498 5.426 7.615 15.112 2.052 21.614z"></path>
                      <path d="m463.281 6.567c-13.458 0-24.996 8.354-29.72 20.145h-141.16v-3.231c0-12.947-10.533-23.481-23.48-23.481h-26.463c-12.947 0-23.48 10.534-23.48 23.481v3.231h-140.539c-4.724-11.791-16.262-20.145-29.72-20.145-17.65 0-32.01 14.359-32.01 32.009s14.359 32.009 32.01 32.009c14.839 0 27.349-10.151 30.958-23.873h98.953c-36.357 18.141-64.455 48.114-80.513 83.743h-5.31c-12.947 0-23.48 10.534-23.48 23.481v26.462c0 12.947 10.533 23.481 23.48 23.481h26.463c12.947 0 23.48-10.534 23.48-23.481v-26.462c0-12.591-9.962-22.896-22.418-23.454 19.607-37.346 54.776-66.659 98.85-77.497 1.497 11.515 11.361 20.44 23.277 20.44h26.463c11.915 0 21.778-8.923 23.276-20.436 42.261 10.427 78.569 38.951 98.841 77.494-12.452.562-22.41 10.866-22.41 23.454v26.462c0 12.947 10.533 23.481 23.48 23.481h26.463c12.947 0 23.48-10.534 23.48-23.481v-26.462c0-12.947-10.533-23.481-23.48-23.481h-5.315c-15.76-34.961-43.499-65.277-80.503-83.743h99.569c3.609 13.722 16.119 23.873 30.958 23.873 17.65 0 32.01-14.359 32.01-32.009s-14.359-32.01-32.01-32.01zm-340.531 147.369v26.462c0 1.919-1.562 3.481-3.48 3.481h-26.463c-1.919 0-3.48-1.562-3.48-3.481v-26.462c0-1.919 1.562-3.481 3.48-3.481h26.463c1.918 0 3.48 1.561 3.48 3.481zm299.303 0v26.462c0 1.919-1.562 3.481-3.48 3.481h-26.463c-1.919 0-3.48-1.562-3.48-3.481v-26.462c0-1.919 1.562-3.481 3.48-3.481h26.463c1.918 0 3.48 1.561 3.48 3.481zm-373.334-103.351c-6.622 0-12.01-5.387-12.01-12.009s5.388-12.009 12.01-12.009 12.009 5.387 12.009 12.009-5.387 12.009-12.009 12.009zm223.682-.642c0 1.919-1.562 3.481-3.48 3.481h-26.463c-1.919 0-3.48-1.562-3.48-3.481v-26.462c0-1.919 1.562-3.481 3.48-3.481h26.463c1.919 0 3.48 1.562 3.48 3.481zm190.88.642c-6.622 0-12.009-5.387-12.009-12.009s5.387-12.009 12.009-12.009 12.01 5.387 12.01 12.009-5.388 12.009-12.01 12.009z"></path>
                      <path d="m243.176 188.904c-5.016-2.313-10.956-.124-13.27 4.891-18.128 39.292-48.653 61.115-49.126 61.449-4.521 3.16-5.63 9.386-2.475 13.914 3.156 4.53 9.388 5.645 13.922 2.486 1.432-.998 35.297-24.946 55.839-69.47 2.314-5.015.124-10.956-4.89-13.27z"></path>
                      <path d="m253 157.167c-5.522 0-10 4.477-10 10s4.478 10 10 10h.025c5.522 0 9.987-4.477 9.987-10s-4.49-10-10.012-10z"></path>
                    </g>
                  </svg>
                </figure>
                <h2 className='text-[1.813rem] text-[#184ca1] font-[900] py-3'>Product Design</h2>
                <p className='text-[1.125rem] text-[#4F545C] font-[400] leading-7'>We design experience by gathering your every requirement to create a pixel-perfect vision for your brand. We ensure validation of your ideas, test the solutions and optimise it.</p>
                <div className='mt-[2.25rem]'>
                  <Swiper
                    slidesPerView={2}
                    spaceBetween={40}
                    breakpoints={{
                      425: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                      1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                      },
                    }}
                    className="mySwiper-icon"
                  >
                    <SwiperSlide>
                      <img src='/react-icon.png' className='grayscale bg-transparent' />
                      <p>React</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/pytho-icon.png' className='grayscale bg-transparent' />
                      <p>Python</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/javascript-logo.png' className='grayscale bg-transparent' />
                      <p>JavaScript</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/Angular-icon.png' className='grayscale bg-transparent' />
                      <p>Angular</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/vue-icon.png' className='grayscale bg-transparent' />
                      <p>Vue.js</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/node-js.png' className='grayscale bg-transparent' />
                      <p>Node.js</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/django.png' className='grayscale bg-transparent' />
                      <p>Django</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/laravel.png' className='grayscale bg-transparent' />
                      <p>Laravel</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/php-logo.png' className='grayscale bg-transparent' />
                      <p>PHP</p>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='flex justify-center items-center mt-[3rem]'>
          <button className='hover-animation-btn'>Get a Quote</button>
        </div>
      </div>
    </section >
  )
}

export default Services