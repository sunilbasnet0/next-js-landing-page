"use client"
import React, { useState } from 'react'
import "../../styles/webDevelopment.css"

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const page = () => {

  const [activeTab, setActiveTab] = useState(true);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  console.log(activeTab)
  return (
    <main className='pt-[2rem] pb-[3rem] relative'>
      <div className='wrapper absolute top-0 right-0 z-0' draggable='false'>
        <img src='/background-image.png' />
      </div>
      <section className='mt-[9rem] relative z-10 mb-[3rem]'>
        <div className='containers'>
          <div className=''>
            <p className='text-[#282828] text-[2.155rem] font-light xs:text-[1.5rem]'>We <b className='font-extrabold'>Deliver.</b></p>
            <h3 className='text-[#184ba0] text-[3.12rem] font-[200] xs:text-[2.25rem]'> OUTCOME DRIVEN</h3>
            <h3 className='text-[#184ba0] text-[3.12rem] font-[900] xs:text-[2.25rem]'>DEVELOPMENT.</h3>
          </div>
          <div className='text-center mt-[3rem]'>
            <h2 className='text-[#184ca1] text-[2.5rem] font-normal mb-[1.65rem] xs:text-[1.5rem]'>Innovative, Robust, Scalable, Fast & Secure</h2>
            <p className='text-[1.75rem] text-[#282828] font-normal xs:text-[1.25rem]'>We make stable, secure, and scrupulous applications for your business to work <br />flawlessly every time, for every user, in every situation.</p>
          </div>
        </div>
      </section>
      <section className='pt-[3rem]'>
        <div className='containers'>
          <div className='section-heading text-center max-w-[1070px] mx-auto'>
            <h2 className='text-[#184ba0] text-[3.12rem] font-[900] xs:text-[2.25rem]'>OUR SERVICES</h2>
            <hr className='w-[80px] h-[6px] bg-[#e9cd02] mx-auto mt-[1rem]' />
            <p className='text-[1.75rem] text-[#282828] font-normal mt-[1.75rem] xs:text-[1.25rem]'>Development is where we turn your idea into a reality, and in the end, you’ll have a live product ready for your team or your customers to use.</p>
          </div>
          <div className='grid grid-cols-2 xs:grid-cols-1 lg:grid-cols-3 gap-[2rem] mt-[5rem] justify-items-center'>
            <div className='services-card-item'>
              <div>
                <img src='https://intglobal.net/uploads/web-mobile-app-development_8a0486d458.svg' className='w-[80px] h-[80px]' />
                <h3 className='text-[1.315rem] font-bold text-[#000] max-w-[300px] mx-auto pt-[1rem]'>Web or Mobile Application Development</h3>
              </div>
              <div>
                <p className='text-[1.1rem] text-[#282828] cursor-default'>
                  Our interactive Web Application Development integrates your business to enhance the user experience (UX) that is engaging, efficient, and elegant.
                </p>
              </div>
            </div>
            <div className='services-card-item'>
              <div>
                <img src='https://intglobal.net/uploads/ecommerce-app-development_2d6f8498bd.svg' className='w-[80px] h-[80px]' />
                <h3 className='text-[1.315rem] font-bold text-[#000] max-w-[300px] mx-auto pt-[1rem]'>E-Commerce App Development</h3>
              </div>
              <div>
                <p className='text-[1.1rem] text-[#282828] cursor-default'>We provide companies with web &amp; mobile e-commerce solutions implemented with wallet solutions that are W3C compliant using the latest payment options.</p>
              </div>
            </div>
            <div className='services-card-item'>
              <div>
                <img src='https://intglobal.net/uploads/api-integration-development_333deb18ac.svg' className='w-[80px] h-[80px]' />
                <h3 className='text-[1.315rem] font-bold text-[#000] max-w-[270px] mx-auto pt-[1rem]'>API Integration Development</h3>
              </div>
              <div>
                <p className='text-[1.1rem] text-[#282828] cursor-default'>Our API Integration modifies existing software used in cross-platform solutions for desktop, mobile, and cloud configurations.</p>
              </div>
            </div>
            <div className='services-card-item'>
              <div>
                <img src='https://intglobal.net/uploads/cross-platform-app-services_5675c317e1.svg' className='w-[80px] h-[80px]' />
                <h3 className='text-[1.315rem] font-bold text-[#000] max-w-[300px] mx-auto pt-[1rem]'>Cross-Platform App Development Services</h3>
              </div>
              <div>
                <p className='text-[1.1rem] text-[#282828] cursor-default'>We offer the best app development solutions for mobile apps. We leverage native features for iOS, Android, and Windows for cross-platform development.</p>
              </div>
            </div>
            <div className='services-card-item'>
              <div>
                <img src='https://intglobal.net/uploads/enterprise-app-developers_b4f96b6fe1.svg' className='w-[80px] h-[80px]' />
                <h3 className='text-[1.315rem] font-bold text-[#000] max-w-[270px] mx-auto pt-[1rem]'>Enterprise App Developers</h3>
              </div>
              <div>
                <p className='text-[1.1rem] text-[#282828] cursor-default'>Our apps help automate workflows involving Enterprise Resource Planning (ERP), Customer Relationship Management (CRM), and Supply Chain Management (SCM).</p>
              </div>
            </div>
            <div className='services-card-item'>
              <div>
                <img src='https://intglobal.net/uploads/enterprise-software-integration-sol_b8f8df1f1b.svg' className='w-[80px] h-[80px]' />
                <h3 className='text-[1.315rem] font-bold text-[#000] max-w-[300px] mx-auto pt-[1rem]'>Enterprise Software Integration Solutions</h3>
              </div>
              <div>
                <p className='text-[1.1rem] text-[#282828] cursor-default'>Clean, organized back ends and dynamic, scalable front ends, developing web portals, enterprise automation apps, microsites, and e-commerce solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-[3rem]'>
        <div className='containers'>
          <div className='section-heading text-center max-w-[1070px] mx-auto'>
            <h2 className='text-[#184ba0] text-[3.12rem] font-[900] xs:text-[2.25rem]'>WHY US</h2>
            <hr className='w-[80px] h-[6px] bg-[#e9cd02] mx-auto mt-[1rem]' />
            <p className='text-[1.75rem] text-[#282828] font-normal mt-[1.75rem] xs:text-[1.25rem]'>We translate bold ideas into industry-leading software, mobile, and web applications that advance your business.</p>
          </div>
          <div className='grid grid-cols-2 xs:grid-cols-1 lg:grid-cols-3 gap-[2rem] mt-[5rem] justify-items-center'>
            <div className='services-card-item'>
              <div>
                <img src='https://intglobal.net/uploads/product-engineering-mindset_929ac91bbe.svg' className='w-[80px] h-[80px]' />
                <h3 className='text-[1.315rem] font-bold text-[#000] max-w-[300px] mx-auto pt-[1rem]'>Product Engineering Mindset</h3>
              </div>
              <div>
                <p className='text-[1.1rem] text-[#282828] cursor-default'>
                  We do iterative software development using cutting-edge technologies for robustness, security, and scale.
                </p>
              </div>
            </div>
            <div className='services-card-item'>
              <div>
                <img src='https://intglobal.net/uploads/seamless-experience_b8f3d08ee7.svg' className='w-[80px] h-[80px]' />
                <h3 className='text-[1.315rem] font-bold text-[#000] max-w-[300px] mx-auto pt-[1rem]'>Seamless Experience</h3>
              </div>
              <div>
                <p className='text-[1.1rem] text-[#282828] cursor-default'>We don't limit UI/UX to just your website or storefront. Our engineers deploy seamless experience through your responsive website, site architecture, payment system, Single-click Checkout.</p>
              </div>
            </div>
            <div className='services-card-item'>
              <div>
                <img src='https://intglobal.net/uploads/winning-devops-team_9d74420188.svg' className='w-[80px] h-[80px]' />
                <h3 className='text-[1.315rem] font-bold text-[#000] max-w-[270px] mx-auto pt-[1rem]'>Winning DevOps Team</h3>
              </div>
              <div>
                <p className='text-[1.1rem] text-[#282828] cursor-default'>Our team of technology Geeks, Product Experts, cloud architects & system administrators works in sync to power your application development.</p>
              </div>
            </div>
            <div className='services-card-item'>
              <div>
                <img src='https://intglobal.net/uploads/world-class-support_041d23d541.svg' className='w-[80px] h-[80px]' />
                <h3 className='text-[1.315rem] font-bold text-[#000] max-w-[300px] mx-auto pt-[1rem]'>World-Class Support</h3>
              </div>
              <div>
                <p className='text-[1.1rem] text-[#282828] cursor-default'>To keep your business working 24/7 through our world-class support team so that you can sit back and enjoy the increased operational output.</p>
              </div>
            </div>
            <div className='services-card-item'>
              <div>
                <img src='https://intglobal.net/uploads/remote-team_74057866ab.svg' className='w-[80px] h-[80px]' />
                <h3 className='text-[1.315rem] font-bold text-[#000] max-w-[270px] mx-auto pt-[1rem]'>Remote Team</h3>
              </div>
              <div>
                <p className='text-[1.1rem] text-[#282828] cursor-default'>Our remote team is quick to set up, with zero set-up fees providing you with efficient & effective execution.</p>
              </div>
            </div>
            <div className='services-card-item'>
              <div>
                <img src='https://intglobal.net/uploads/costs-timings-upfront_423539415a.svg' className='w-[80px] h-[80px]' />
                <h3 className='text-[1.315rem] font-bold text-[#000] max-w-[300px] mx-auto pt-[1rem]'>Costs and Timing Upfront</h3>
              </div>
              <div>
                <p className='text-[1.1rem] text-[#282828] cursor-default'>We build what you need on time while staying within budget, leveraging our flexible engagement models.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-[3rem]' id='process'>
        <div className='containers'>
          <div className='section-heading text-center max-w-[1070px] mx-auto'>
            <h2 className='text-[#184ba0] text-[3.12rem] font-[900] xs:text-[2.25rem]'>THE PROCESS</h2>
            <hr className='w-[80px] h-[6px] bg-[#e9cd02] mx-auto mt-[1rem]' />
          </div>
          <div className='grid grid-cols-2  sm:grid-cols-3 gap-[3.5rem] sm:max-w-[650px] mx-auto mt-[4rem] xs:grid-cols-1 xs:max-w-[200px]'>
            <div className='flex flex-col items-center justify-center bg-[#184ca1] rounded-[50%] py-[3rem] gap-3 '>
              <img src='https://intglobal.net/uploads/research_b29fabd0f5.svg' className='w-[50px] h-[50px]' />
              <p className='text-[1.1rem] text-white font-semibold text-center'>Research</p>
            </div>
            <div className='flex flex-col items-center justify-center bg-[#d71f27] rounded-[50%] py-[3rem] gap-3'>
              <img src='https://intglobal.net/uploads/strategy-plan_62a9087b77.svg' className='w-[50px] h-[50px]' />
              <p className='text-[1.1rem] text-white font-semibold text-center'>Strategy & Plan</p>
            </div>
            <div className='flex flex-col items-center justify-center bg-[#009c83] rounded-[50%] py-[3rem] gap-3'>
              <img src='https://intglobal.net/uploads/prototyping_fcfbfdc777.svg' className='w-[50px] h-[50px]' />
              <p className='text-[1.1rem] text-white font-semibold text-center'>Prototyping</p>
            </div>
            <div className='flex flex-col items-center justify-center bg-[#e04950] rounded-[50%] py-[2rem] gap-3'>
              <img src='https://intglobal.net/uploads/design-development_7b0d08d8cc.svg' className='w-[50px] h-[50px]' />
              <p className='text-[1.1rem] text-white font-semibold text-center'>Design & <br />Development</p>
            </div>
            <div className='flex flex-col items-center justify-center bg-[#0a6b59] rounded-[50%] py-[2rem] gap-3'>
              <img src='https://intglobal.net/uploads/testing-qa_c2b045fa37.svg' className='w-[50px] h-[50px]' />
              <p className='text-[1.1rem] text-white font-semibold text-center'>Testing & QA</p>
            </div>
            <div className='flex flex-col items-center justify-center bg-[#416cb0] rounded-[50%] py-[2rem] gap-3'>
              <img src='https://intglobal.net/uploads/deployment-launch_c5aaa849e0.svg' className='w-[50px] h-[50px]' />
              <p className='text-[1.1rem] text-white font-semibold text-center'>Deployment & <br /> Launch</p>
            </div>
          </div>
          <div className='h-[200px] mx-auto w-[40px] py-[5rem]'>
            <img src='https://www.intglobal.com/resources/images/process/application-development/process-arrow.png' className='animate-up-down' />
          </div>
          <div className='max-w-[500px] mx-auto grid grid-cols-3 my-[3rem] xs:grid-cols-1 gap-[1.5rem]'>
            <div className='flex flex-col items-center gap-3'>
              <img src='https://intglobal.net/uploads/growth_9f87869679.svg' className='w-[50px] h-[50px]' />
              <p className='text-[1.1rem] text-black font-semibold text-center'>Growth</p>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <img src='https://intglobal.net/uploads/maintenance_a75b457cea.svg' className='w-[50px] h-[50px]' />
              <p className='text-[1.1rem] text-black font-semibold text-center'>Maintenance</p>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <img src='https://intglobal.net/uploads/handover_70533d23bd.svg' className='w-[50px] h-[50px]' />
              <p className='text-[1.1rem] text-black font-semibold text-center'>Handover</p>
            </div>

          </div>
          <p className='max-w-[440px] mx-auto my-[3rem] text-[1.75rem] text-[#282828] font-normal text-center xs:text-[1.25rem]'>
            You decide what comes next:
            do we maintain, help you scale, or handover entirely?
          </p>
          <div className='flex items-center w-full justify-center'>
            <button className='hover-animation-btn px-[3rem] after:bg-[#e9cd02] bg-[#164599] uppercase xs:w-[190px] h-[50px] xs:text-[1.25rem]'>Let's Talk</button>
          </div>
        </div>
      </section>

      <section className='pt-[3rem]'>
        <div className='containers'>
          <div className='section-heading text-center max-w-[1070px] mx-auto'>
            <h2 className='text-[#184ba0] text-[3.12rem] font-[900] xs:text-[2.25rem]'>THE TECHNOLOGIES</h2>
            <hr className='w-[80px] h-[6px] bg-[#e9cd02] mx-auto mt-[1rem]' />
            <p className='text-[1.75rem] text-[#282828] font-normal mt-[1.75rem] xs:text-[1.25rem]'>We translate bold ideas into industry-leading software, mobile, and web applications that advance your business.</p>
          </div>
          <div className='my-[4rem] max-w-[1120px] mx-auto'>
            <div className='grid grid-cols-6 justify-items-start gap-y-[2rem] gap-5'>
              <img src='https://intglobal.net/uploads/laravel_887b142b91.webp' className='grayscale' />
              <img src='https://intglobal.net/uploads/cake-php_c9f29871b4.webp' className='grayscale' />
              <img src='https://intglobal.net/uploads/php_cadd0307a7.webp' className='grayscale' />
              <img src='https://intglobal.net/uploads/nette-framework_2e2365538e.webp' className='grayscale' />
              <img src='https://intglobal.net/uploads/codeigniter_fd3ab92c74.webp' className='grayscale' />
              <img src='https://intglobal.net/uploads/slim_489ae6c564.webp' className='grayscale' />
            </div>
            <div className='my-[2.5rem] grid grid-cols-5 justify-items-center gap-y-[2rem] gap-5 max-w-[1090px] mx-auto'>
              <img src='https://intglobal.net/uploads/zend-framework_9708aa1c85.webp' className='grayscale' />
              <img src='https://intglobal.net/uploads/phpixie_a9a32f04e0.webp' className='grayscale' />
              <img src='https://intglobal.net/uploads/asp-net_1eb76d6ee8.webp' className='grayscale' />
              <img src='https://intglobal.net/uploads/ajax-amsterdam_80f897842a.webp' className='grayscale' />
              <img src='https://intglobal.net/uploads/dev-express_6bac3594e8.webp' className='grayscale' />
            </div>
            <div className='my-[2.5rem] grid grid-cols-4 justify-items-center gap-y-[2rem] gap-5 max-w-[1040px] mx-auto'>
              <img src='https://intglobal.net/uploads/infragistics_583b7ba402.webp' className='grayscale' />
              <img src='https://intglobal.net/uploads/drupal_b1f4a7f5cd.webp' className='grayscale' />
              <img src='https://intglobal.net/uploads/asp-net_1eb76d6ee8.webp' className='grayscale' />
              <img src='https://intglobal.net/uploads/telerik_f74fec358d.webp' className='grayscale' />
            </div>
          </div>
        </div>
      </section>

      <section className='pt-[3rem]'>
        <div className='containers'>
          <div className='section-heading text-center max-w-[1070px] mx-auto'>
            <h2 className='text-[#184ba0] text-[3.12rem] font-[900] xs:text-[2.25rem]'>SPEAK TO OUR CONSULTANTS</h2>
            <hr className='w-[80px] h-[6px] bg-[#e9cd02] mx-auto mt-[1rem]' />
          </div>
          <div className='my-[3rem]'>
            <Swiper
              slidesPerView={1}
              spaceBetween={70}

              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              breakpoints={{
                550: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                748: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
                1090: {
                  slidesPerView: 4,
                  spaceBetween: 70,
                },
              }}
              className="awards-swiper"
            >
              <SwiperSlide>
                <div className='consultants-team-slider flex flex-col justify-center items-center'>
                  <div>
                    <img src='https://www.intglobal.com/_next/image?url=https%3A%2F%2Fintglobal.net%2Fuploads%2Fimg-ar_b77baa9186.webp&w=256&q=75' className='grayscale' />
                  </div>
                  <div className='flex flex-col justify-center items-center p-[2rem]'>
                    <h4 className='text-[1.564rem] font-bold text-[#184ba0] grayscale'>Abhishek Rungta</h4>
                    <h5 className='text-[1.24rem] font-bold text-[#727272] grayscale'>Inusurtech Expert</h5>
                    <p className='text-center text-[#6f6f6f] text-[1rem] font-normal py-[1rem] grayscale'>With over two decades of experience.</p>
                    <button className='hover-animation-btn px-[3rem] after:bg-[#e9cd02] bg-[#164599] uppercase text-[0.75rem]'>Schedule a Call</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='consultants-team-slider flex flex-col justify-center items-center'>
                  <div>
                    <img src='https://www.intglobal.com/_next/image?url=https%3A%2F%2Fintglobal.net%2Fuploads%2Fimg-ai_2c9d39c9d1.webp&w=256&q=75' className='grayscale' />
                  </div>
                  <div className='flex flex-col justify-center items-center p-[2rem]'>
                    <h4 className='text-[1.564rem] font-bold text-[#184ba0] grayscale'>Aji Issac Mathew</h4>
                    <h5 className='text-[1.24rem] font-bold text-[#727272] grayscale'>Digital Strategy Expert</h5>
                    <p className='text-center text-[#6f6f6f] text-[1rem] font-normal py-[1rem] grayscale'>With over three decades of experience.</p>
                    <button className='hover-animation-btn px-[3rem] after:bg-[#e9cd02] bg-[#164599] uppercase text-[0.75rem]'>Schedule a Call</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='consultants-team-slider flex flex-col justify-center items-center'>
                  <div>
                    <img src='https://www.intglobal.com/_next/image?url=https%3A%2F%2Fintglobal.net%2Fuploads%2Fimg-sc_c3676b159b.webp&w=256&q=75' className='grayscale' />
                  </div>
                  <div className='flex flex-col justify-center items-center p-[2rem]'>
                    <h4 className='text-[1.564rem] font-bold text-[#184ba0] grayscale'>Souvik Chaki</h4>
                    <h5 className='text-[1.24rem] font-bold text-[#727272] grayscale'>Fintech Expert</h5>
                    <p className='text-center text-[#6f6f6f] text-[1rem] font-normal py-[1rem] grayscale'>With over two decades of experience.</p>
                    <button className='hover-animation-btn px-[3rem] after:bg-[#e9cd02] bg-[#164599] uppercase text-[0.75rem]'>Schedule a Call</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='consultants-team-slider flex flex-col justify-center items-center'>
                  <div>
                    <img src='https://www.intglobal.com/_next/image?url=https%3A%2F%2Fintglobal.net%2Fuploads%2Fimg-bb_f24e1a8509.webp&w=256&q=75' className='grayscale' />
                  </div>
                  <div className='flex flex-col justify-center items-center p-[2rem]'>
                    <h4 className='text-[1.564rem] font-bold text-[#184ba0] grayscale'>Bharat Berlia</h4>
                    <h5 className='text-[1.24rem] font-bold text-[#727272] grayscale'>Business Solution Expert</h5>
                    <p className='text-center text-[#6f6f6f] text-[1rem] font-normal py-[1rem] grayscale'>With over two decades of experience.</p>
                    <button className='hover-animation-btn px-[3rem] after:bg-[#e9cd02] bg-[#164599] uppercase text-[0.75rem]'>Schedule a Call</button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section className='pt-[3rem]'>
        <div className='containers'>
          <div className='section-heading text-center max-w-[1070px] mx-auto'>
            <h2 className='text-[#184ba0] text-[3.12rem] font-[900] xs:text-[2.25rem]'>SUCCESS STORIES</h2>
            <hr className='w-[80px] h-[6px] bg-[#e9cd02] mx-auto mt-[1rem]' />
          </div>
          <div className='success-stories-tab'>
            <div className='flex items-center justify-center gap-5 mt-[3rem]'>
              <button onClick={() => handleTabClick(true)} className='bg-transparent xs:px-[0.75rem]'>
                <img src='https://intglobal.net/uploads/logo-dr-reddys_s_f7c901cfe9.webp' />
              </button>
              <button onClick={() => handleTabClick(false)} className='bg-transparent xs:px-[0.75rem]'>
                <img src='https://intglobal.net/uploads/SBC-logo_37deab56d4.png' />
              </button>
            </div>

            <div>
              {
                activeTab === true ?
                  (<div className="max-w-[990px] mx-auto min-h-[300px] mt-[3rem] flex flex-col sm:flex-row  py-[2rem] lg:py-[3rem] gap-[2rem] ">
                    <div className='flex justify-center items-center w-full'>
                      <img src='https://intglobal.net/uploads/logo-dr-reddys_s_f7c901cfe9.webp' className='w-[70%]' />
                    </div>
                    <div className='border-l-[2px] border-l-[#d7dbdb] pl-[2rem]'>
                      <h2 className='capitalize xs:text-[1.5rem] text-[1.625rem] font-[700] text-[#184ca1]'>Dr. Reddy’s</h2>
                      <h3 className='xs:text-[1.125rem] text-[1rem] font-[700] my-5 text-[#000000]'> Intuitive webportal helping pharma giant to enhance productivity</h3>
                      <p className='text-[0.8rem] font-[400] leading-7'>A customer collaboration portal with task management features. The tool helps the pharmacy giant manage its customers and tasks, process orders securely, and provide a seamless purchasing experience to its customers.</p>
                    </div>
                  </div>) : (
                    <>
                      <div className="max-w-[990px] mx-auto min-h-[300px] mt-[3rem] flex flex-col sm:flex-row  py-[2rem] lg:py-[3rem] gap-[2rem] ">
                        <div className='flex justify-center items-center w-full'>
                          <img src='https://intglobal.net/uploads/SBC-logo_37deab56d4.png' className='w-[70%]' />
                        </div>
                        <div className='border-l-[2px] border-l-[#d7dbdb] pl-[2rem]'>
                          <h2 className='capitalize xs:text-[1.5rem] text-[1.625rem] font-[700] text-[#184ca1]'>SBC</h2>
                          <h3 className='xs:text-[1.125rem] text-[1rem] font-[700] my-5 text-[#000000]'> Smart TV and Online Radio (OTT) making access easier</h3>
                          <p className='text-[0.8rem] font-[400] leading-7'>An inventive move of broadcasting, over-the-top application helped the citizen of Saudi to access 9 TV channels and 6 radio channels through the internet, anytime and anywhere without having to depend on cables..</p>
                        </div>
                      </div>
                      <div className='client-testimonial max-w-[1080px] mx-auto mt-[3rem]'>
                        <p>Though the project has yet to launch, the company is happy with the outcome. The team was well prepared in their project management. They made sure to understand the goals of the project as well as what the company needed.
                        </p>
                        <div className='flex items-center gap-4 justify-end my-[3rem] xs:flex-col-reverse'>
                          <div>
                            <h3 className='capitalize xs:text-[1.5rem] text-[1.625rem] font-[700] text-[#184ca1]'>Bosco Edwin</h3>
                            <p className='xs:text-[1.125rem] text-[1rem] font-[700]  text-[#000000]'>Director, Telecom Company</p>
                          </div>
                          <img src='https://www.intglobal.com/_next/image?url=https%3A%2F%2Fintglobal.net%2Fuploads%2Fno-image-clients_ddaaf39d15.jpeg&w=128&q=75' className='rounded-full' />
                        </div>
                      </div>
                    </>
                  )
              }
            </div>
          </div>
          <div className='flex items-center w-full justify-center'>
            <button className='hover-animation-btn px-[3rem] after:bg-[#e9cd02] bg-[#164599] uppercase xs:w-[190px] h-[50px] xs:text-[1.25rem]'>Let's Talk</button>
          </div>
        </div>
      </section>

      <section className='pt-[3rem]'>
        <div className='containers'>
          <div className='section-heading text-center max-w-[1070px] mx-auto'>
            <h2 className='text-[#184ba0] text-[3.12rem] font-[900] xs:text-[2.25rem]'>AWARDS & ACCOLADES</h2>
            <hr className='w-[80px] h-[6px] bg-[#e9cd02] mx-auto mt-[1rem]' />
          </div>
          <div className='my-[3rem]'>
            <Swiper
              slidesPerView={1}
              spaceBetween={70}

              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              breakpoints={{
                550: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                748: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
                1090: {
                  slidesPerView: 4,
                  spaceBetween: 70,
                },
              }}
              className="awards-swiper"
            >
              <SwiperSlide>
                <div className='awards-accolades-cards' onClick={handleCardClick}>
                  <h3>Deloitte Technology Fast 50 India in 2011, 2017</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='awards-accolades-cards'>
                  <h3>CIO Choice - Mobile Application Development under Enterprise Mobility, 2017</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='awards-accolades-cards'>
                  <h3>Deloitte Technology Fast 500 Asia Pacific in 2010, 2011, 2017</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='awards-accolades-cards'>
                  <h3>Dun & Bradstreet - SME Business Excellence Awards 2008</h3>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <p>{modalContent}</p>
            </div>
          </div>
        )}
      </section>

    </main >
  )
}

export default page