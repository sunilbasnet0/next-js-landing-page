"use client"

import React, { useEffect, useRef } from 'react'
import "../styles/about.css"
import { HiOutlineArrowLongRight } from "react-icons/hi2";


const page = () => {

  const ctaTeamRef = useRef(null);


  useEffect(() => {
    if (ctaTeamRef.current) {
      const handleScroll = () => {
        const { top } = ctaTeamRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight) {
          ctaTeamRef.current.classList.add('slide-in-bottom');
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [ctaTeamRef.current]);


  return (
    <main>
      <section className='pt-[6rem]'>
        <div className='containers max-w-[900px] mx-auto'>
          <h3 className='text-[1rem] font-semibold text-[#FFA63D] uppercase text-center pt-[5rem]'>Who we are</h3>
          <h2 className='text-[3rem] text-[#184f9e] font-semibold text-center py-[1rem]'>We are Digital Success</h2>
          <p className='text-[#000] text-[1.25rem] text-center'>Founded in the Silicon Slopes of Utah, Amply is a fully-distributed team of Webflow, branding, and B2B design experts. We love partnering with brands that are looking for an extension of their own team to help them get to the stars. 🚀
          </p>
          <div className="main-container">
            <div className="main">
              <div className="big-circle">
                <div className="icon-block">
                  <img src='https://assets-global.website-files.com/63f3c83933b2e96042f898cc/64026d0327be9bef4ba60c75_team-09.png' />
                </div>
                <div className="icon-block">
                  <img src="https://assets-global.website-files.com/63f3c83933b2e96042f898cc/64026d038ff339500c08482a_team-08.png" alt="game design icon" />
                </div>
                <div className="icon-block">
                  <img src="https://assets-global.website-files.com/63f3c83933b2e96042f898cc/64026d03fff8cde8d24b485c_team-05.png" alt="game dev icon" />
                </div>
                <div className="icon-block">
                  <img src="https://assets-global.website-files.com/63f3c83933b2e96042f898cc/64026d0349d23fecfde0b304_team-03.png" alt="ui-ux icon" />
                </div>
              </div>
              <div className="circle">
                <div className="icon-block">
                  <img src='https://assets-global.website-files.com/63f3c83933b2e96042f898cc/64026d0327be9bef4ba60c75_team-09.png' />
                </div>
                <div className="icon-block">
                  <img src="https://assets-global.website-files.com/63f3c83933b2e96042f898cc/64026d038ff339500c08482a_team-08.png" alt="game design icon" />
                </div>
                <div className="icon-block">
                  <img src="https://assets-global.website-files.com/63f3c83933b2e96042f898cc/64026d03fff8cde8d24b485c_team-05.png" alt="game dev icon" />
                </div>
                <div className="icon-block">
                  <img src="https://assets-global.website-files.com/63f3c83933b2e96042f898cc/64026d0349d23fecfde0b304_team-03.png" alt="ui-ux icon" />
                </div>
              </div>

              <div className="small-circle">
                <div className="icon-block">
                  <img src='https://assets-global.website-files.com/63f3c83933b2e96042f898cc/64026d0327be9bef4ba60c75_team-09.png' />
                </div>
                <div className="icon-block">
                  <img src="https://assets-global.website-files.com/63f3c83933b2e96042f898cc/64026d038ff339500c08482a_team-08.png" alt="game design icon" />
                </div>
                <div className="icon-block">
                  <img src="https://assets-global.website-files.com/63f3c83933b2e96042f898cc/64026d03fff8cde8d24b485c_team-05.png" alt="game dev icon" />
                </div>
                <div className="icon-block">
                  <img src="https://assets-global.website-files.com/63f3c83933b2e96042f898cc/64026d0349d23fecfde0b304_team-03.png" alt="ui-ux icon" />
                </div>
              </div>
              <div className='logo-circle'>
                <div className="center-logo">
                  <img src="site-logo.svg" alt="artificial intelligence icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-[3rem] xs:py-[1.5rem]'>
        <div className='containers'>
          <h3 className='text-[1rem] font-semibold text-[#FFA63D] uppercase text-center pt-[5rem]'>WE ❤️ OUR CLIENTS</h3>
          <h2 className='text-[3rem] text-[#184f9e] font-semibold text-center py-[1rem]'>Client Stats</h2>

          <div className='grid xl:grid-cols-3 gap-[2rem] md:grid-cols-2'>
            <div className='grid gap-[2rem] xl:pt-[3rem]'>
              <div className='bg-[#221f41] xs:py-[2rem] xs:px-[0] p-[2.5rem] flex flex-col xs:items-center xs:justifiy-center gap-5 rounded-[2rem]'>
                <h3 className='text-[1.5rem] text-[#ffff] font-semibold'>Seed</h3>
                <h3 className='text-[3rem] text-[#FFA63D] font-bold '>$25M</h3>
                <img src='https://assets-global.website-files.com/63f3c83933b2e96042f898cc/642077787894bf3a18299052_endor-labs-logo.svg' className='w-[140px]' />
              </div>
              <div className='bg-[#221f41] xs:py-[2rem] xs:px-[0] p-[2.5rem] flex flex-col xs:items-center xs:justifiy-center gap-5 rounded-[2rem]'>
                <h3 className='text-[1.5rem] text-[#ffff] font-semibold'>Seed</h3>
                <h3 className='text-[3rem] text-[#FFA63D] font-bold '>$25M</h3>
                <img src='https://assets-global.website-files.com/63f3c83933b2e96042f898cc/642077787894bf3a18299052_endor-labs-logo.svg' className='w-[140px]' />
              </div>
            </div>
            <div className='grid gap-[2rem]'>
              <div className='bg-[#221f41] xs:py-[2rem] xs:px-[0] p-[2.5rem] flex flex-col xs:items-center xs:justifiy-center gap-5 rounded-[2rem]'>
                <h3 className='text-[1.5rem] text-[#ffff] font-semibold'>Seed</h3>
                <h3 className='text-[3rem] text-[#FFA63D] font-bold '>$25M</h3>
                <img src='https://assets-global.website-files.com/63f3c83933b2e96042f898cc/642077787894bf3a18299052_endor-labs-logo.svg' className='w-[140px]' />
              </div>
              <div className='bg-[#221f41] xs:py-[2rem] xs:px-[0] p-[2.5rem] flex flex-col xs:items-center xs:justifiy-center gap-5 rounded-[2rem]'>
                <h3 className='text-[1.5rem] text-[#ffff] font-semibold'>Utah's fasting growing tech company
                </h3>
                <h3 className='text-[3rem] text-[#FFA63D] font-bold '>10x <br />
                  Conversion
                </h3>
                <img src='https://assets-global.website-files.com/63f3c83933b2e96042f898cc/6453dc33e6cd291050ee96d7_kenetc-logo-white.png' className='w-[140px]' />
              </div>
            </div>
            <div className='grid gap-[2rem] xl:pt-[5rem] md:grid-cols-2 md:col-span-2 xl:grid-cols-1 xl:col-span-1'>
              <div className='bg-[#221f41] xs:py-[2rem] xs:px-[0] p-[2.5rem] flex flex-col xs:items-center xs:justifiy-center gap-5 rounded-[2rem]'>
                <h3 className='text-[1.5rem] text-[#ffff] font-semibold'>Seed</h3>
                <h3 className='text-[3rem] text-[#FFA63D] font-bold '>$18.5M</h3>
                <img src='https://assets-global.website-files.com/63f3c83933b2e96042f898cc/6453db8bc4d81fbb380df432_mosaic---the-first-strategic-finance-platform.svg' className='w-[140px]' />
              </div>
              <div className='bg-[#221f41] xs:py-[2rem] xs:px-[0] p-[2.5rem] flex flex-col xs:items-center xs:justifiy-center gap-5 rounded-[2rem]'>
                <h3 className='text-[3rem] text-[#FFA63D] font-bold '>YC W22</h3>
                <img src='https://assets-global.website-files.com/63f3c83933b2e96042f898cc/642123d5af7ac8e205fcd5db_lovage.svg' className='w-[140px]' />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-[3rem] xs:py-[1.5rem]'>
        <div className='containers'>
          <div className=' max-w-[500px] mx-auto'>
            <h2 className='text-[3rem] text-[#184f9e] font-semibold text-center py-[1rem]'>Our Values</h2>
            <p className='text-[1rem] font-normal text-[#000] text-center'>
              We strive to provide value through our expertise and process to B2B brands wherever possible—and if we have a little fun along the way? Even better!
            </p>
          </div>
          <div className='grid sm:grid-cols-7 gap-[2rem] mt-[4rem] grid-cols-4'>
            <div className='col-span-4 bg-[#18171d] rounded-[2rem]'>
              <div className='flex flex-col gap-[1rem] items-center justify-center py-[4rem] max-w-[300px] mx-auto'>
                <img src='https://assets-global.website-files.com/63f3c83933b2e96042f898cc/64398dbf37fc89ef345c0db8_client-first--2.png' className='w-[200px]' />
                <h3 className='text-[1.5rem] text-[#fff] font-semibold'>Client-First</h3>
                <p className='text-[1rem] text-center text-white font-normal'>We put you and your goals first in everything that we do.</p>
              </div>
            </div>
            <div className='col-span-4 sm:col-span-3 bg-[#18171d] rounded-[2rem]'>
              <div className='flex flex-col gap-[1rem] items-center justify-center py-[4rem] max-w-[300px] mx-auto'>
                <img src='https://assets-global.website-files.com/63f3c83933b2e96042f898cc/64398dcdf64f975613b4cd25_user-centric--2.png' />
                <h3 className='text-[1.5rem] text-[#fff] font-semibold'>User-Centric</h3>
                <p className='text-[1rem] text-center text-white font-normal'>We keep the user experience in mind when creating our sites.</p>
              </div>
            </div>
            <div className='col-span-4 sm:col-span-3 bg-[#18171d] rounded-[2rem]'>
              <div className='flex flex-col gap-[1rem] items-center justify-center py-[4rem] max-w-[300px] mx-auto'>
                <img src='https://assets-global.website-files.com/63f3c83933b2e96042f898cc/64399240a585bf67041d98ad_result-driven--2.png' />
                <h3 className='text-[1.5rem] text-[#fff] font-semibold'>Result-Driven</h3>
                <p className='text-[1rem] text-center text-white font-normal'>We ensure that we deliver according to your goals.</p>
              </div>
            </div>
            <div className='col-span-4 bg-[#18171d] rounded-[2rem]'>
              <div className='flex flex-col gap-[1rem] items-center justify-center py-[4rem] max-w-[300px] mx-auto'>
                <img src='https://assets-global.website-files.com/63f3c83933b2e96042f898cc/6439925442eb935b4aefb876_integrated--2.png' />
                <h3 className='text-[1.5rem] text-[#fff] font-semibold'>Integrated</h3>
                <p className='text-[1rem] text-center text-white font-normal'>We act as an extension of your internal team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-[3rem] xs:py-[1.5rem]'>
        <div className='containers'>
          <div className='relative z-20'>
            <h3 className='text-[1rem] font-semibold text-[#FFA63D] uppercase text-center pt-[5rem]'>WANT TO JOIN THE AMPLY TEAM</h3>
            <h2 className='text-[3rem] text-[#184f9e] font-semibold text-center py-[1rem]'>
              Based in Utah <br />
              Work from anywhere
            </h2>
            <button className='bg-transparent text-[#184f9e] border-[#184f9e] border-[2px] flex items-center justify-center gap-2 xs:w-[200px] w-[300px] mx-auto mt-[1rem]'>Get In Touch <HiOutlineArrowLongRight size={30} /></button>
          </div>

          <div className='cta-component bg-[#17142d] mt-[3rem] rounded-3xl pt-[4rem] overflow-hidden relative'>
            <div className='relative z-20'>
              <h2 className='text-[3rem] text-[#fff] font-semibold text-center py-[1rem]'>Let's work together!</h2>
              <p className='text-[1rem] font-normal text-[#fff] text-center'>
                Schedule a call with us to start your brand's trip to the <br />stars...or maybe just to talk shop 😉
              </p>
              <button className='bg-[#ffff] text-[#000] xs:text-[0.75rem] text-[1rem] font-normal flex items-center justify-center gap-2 xs:w-[200px] w-[400px] mx-auto mt-[1.75rem]'>Book a Call With the Founders <HiOutlineArrowLongRight size={30} className='xs:w-[30px]' /></button>
            </div>
            <div className='cta-team-member flex mt-[4rem] items-center justify-center gap-5 overflow-hidden relative z-20' ref={ctaTeamRef}>
              <div className='cta-team-card cta-team-card-1 slide-in-bottom '>
                <img src='https://assets-global.website-files.com/63f3c83933b2e96042f898cc/6400ecd485f0db678282c591_cade-biegel.png' alt='image' />
                <h3 className='text-[1.25rem] text-[#57336f] font-semibold pt-[1rem]'>Cade Biegel</h3>
                <p className='text-[1rem] text-white font-normal pt-2'>Co-founder @ Amply</p>
              </div>
              <div className='cta-team-card cta-team-card-2 slide-in-bottom '>
                <img src='https://assets-global.website-files.com/63f3c83933b2e96042f898cc/64010c89590f68529072b84f_luke-lewis.png' alt='image' />
                <h3 className='text-[1.25rem] text-[#57336f] font-semibold pt-[1rem]'>Luke Lewis</h3>
                <p className='text-[1rem] text-white font-normal pt-2'>Co-founder @ Amply</p>
              </div>
            </div>

            <div>
              <div className='absolute top-[5rem] left-0 bg-gradient'>
                <div>
                  <svg width="519" height="496" viewBox="0 0 519 496" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M507.008 211.738C481.102 270.462 450.38 315.866 414.84 347.95C379.301 380.035 327.689 419.798 260.004 467.242C192.32 514.685 139.64 502.593 101.964 430.965C64.2891 359.337 33.5209 284.195 9.65971 205.538C-14.2015 126.882 10.7921 69.6557 84.6404 33.8607C158.489 -1.93425 224.401 -8.73305 282.376 13.4643C340.351 35.6617 398.761 59.5756 457.603 85.2059C516.446 110.836 532.915 153.014 507.008 211.738Z" fill="url(#paint0_linear_51_883)"></path>
                    <defs>
                      <linearGradient id="paint0_linear_51_883" x1="-17.5" y1="212" x2="512.5" y2="128.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FA5765" stopOpacity="0.4"></stop>
                        <stop offset="0.472479" stopColor="#8651DB" stopOpacity="0.8"></stop>
                        <stop offset="0.735391" stopColor="#5470DE" stopOpacity="0.8"></stop>
                        <stop offset="1" stopColor="#2D8DE0" stopOpacity="0.9"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className='absolute top-[5rem] right-0 bg-gradient'>
                <div>
                  <svg width="519" height="496" viewBox="0 0 519 496" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M507.008 211.738C481.102 270.462 450.38 315.866 414.84 347.95C379.301 380.035 327.689 419.798 260.004 467.242C192.32 514.685 139.64 502.593 101.964 430.965C64.2891 359.337 33.5209 284.195 9.65971 205.538C-14.2015 126.882 10.7921 69.6557 84.6404 33.8607C158.489 -1.93425 224.401 -8.73305 282.376 13.4643C340.351 35.6617 398.761 59.5756 457.603 85.2059C516.446 110.836 532.915 153.014 507.008 211.738Z" fill="url(#paint0_linear_51_883)"></path>
                    <defs>
                      <linearGradient id="paint0_linear_51_883" x1="-17.5" y1="212" x2="512.5" y2="128.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FA5765" stopOpacity="0.4"></stop>
                        <stop offset="0.472479" stopColor="#8651DB" stopOpacity="0.8"></stop>
                        <stop offset="0.735391" stopColor="#5470DE" stopOpacity="0.8"></stop>
                        <stop offset="1" stopColor="#2D8DE0" stopOpacity="0.9"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page