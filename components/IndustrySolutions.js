import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const IndustrySolutions = () => {
  return (
    <section id='industry-solutions' className='py-[2rem] lg:py-[4rem]'>
      <div className='containers'>
        <h2 className='text-center text-[2rem] md:text-[2.5rem] lg:text-[2.813rem] text-[#20396e] font-[900]'>Our Industry Experience</h2>
        <p className='text-center text-[1rem] md:text-[1.125rem] lg:text-[1.5rem] text-[#292c30] font-[500] md:max-w-[1100px] mx-auto mt-5'>
          We provide industry-specific solutions to help enterprises and fast-growing organizations
          succeed in today’s digital-first world.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-[2rem] lg:my-[3.5rem]'>
          <div className='relative min-h-[275px] overflow-hidden cursor-pointer'>
            <img src='/banking-industry.png' className='card-image absolute top-0 left-0 w-full h-full object-cover' />
            <div className='card-content relative top-[13rem] left-[3rem] z-[11]'>
              <p className='text-[1.25rem] md:text-[1.5rem] lg:text-[2.18rem] text-white font-[500]'>Banking</p>
              <a className='text-[1rem] font-[400] hidden'><span>Explore more</span> <MdKeyboardDoubleArrowRight /></a>
            </div>
          </div>
          <div className='relative min-h-[275px] overflow-hidden cursor-pointer'>
            <img src='/insurance-industry.png' className='card-image absolute top-0 left-0 w-full h-full object-cover' />
            <div className='card-content relative top-[13rem] left-[3rem] z-[11]'>
              <p className='text-[1.25rem] md:text-[1.5rem] lg:text-[2.18rem] text-[#ffff] font-[500]'>Insurance</p>
              <a className='text-[1rem] font-[400] hidden'><span>Explore more</span> <MdKeyboardDoubleArrowRight /></a>
            </div>
          </div>
          <div className='relative min-h-[275px] overflow-hidden cursor-pointer'>
            <img src='/financial-service-industry.png' className='card-image absolute top-0 left-0 w-full h-full object-cover' />
            <div className='card-content relative top-[13rem] left-[3rem] z-[11]'>
              <p className='text-[1.25rem] md:text-[1.5rem] lg:text-[2.18rem] text-[#ffff] font-[500]'>Financial Service</p>
              <a className='text-[1rem] font-[400] hidden'><span>Explore more</span> <MdKeyboardDoubleArrowRight /></a>
            </div>
          </div>

          <div className='relative min-h-[275px] overflow-hidden cursor-pointer'>
            <img src='/healthcare-industry.png' className='card-image absolute top-0 left-0 w-full h-full object-cover' />
            <div className='card-content relative top-[13rem] left-[3rem] z-[11]'>
              <p className='text-[1.25rem] md:text-[1.5rem] lg:text-[2.18rem] text-[#ffff] font-[500]'>Healthcare</p>
              <a className='text-[1rem] font-[400] hidden'><span>Explore more</span> <MdKeyboardDoubleArrowRight /></a>
            </div>
          </div>

          <div className='relative min-h-[275px] overflow-hidden cursor-pointer'>
            <img src='/ed-tech-industry.png' className='card-image absolute top-0 left-0 w-full h-full object-cover' />
            <div className='card-content relative top-[13rem] left-[3rem] z-[11]'>
              <p className='text-[1.25rem] md:text-[1.5rem] lg:text-[2.18rem] text-[#ffff] font-[500]'>Ed-Tech</p>
              <a className='text-[1rem] font-[400] hidden'><span>Explore more</span> <MdKeyboardDoubleArrowRight /></a>
            </div>
          </div>

          <div className='relative min-h-[275px] overflow-hidden cursor-pointer'>
            <img src='/others-industry.png' className='card-image absolute top-0 left-0 w-full h-full object-cover' />
            <div className='card-content relative top-[13rem] left-[3rem] z-[11]'>
              <p className='text-[1.25rem] md:text-[1.5rem] lg:text-[2.18rem] text-[#ffff] font-[500]'>Others</p>
              <a className='text-[1rem] font-[400] hidden'><span>Explore more</span> <MdKeyboardDoubleArrowRight /></a>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <button className='hover-animation-btn'>Get a Quote</button>
        </div>
      </div>
    </section>
  )
}

export default IndustrySolutions