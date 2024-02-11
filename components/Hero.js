import React from 'react'

const Hero = () => {
  return (
    <section className='relative py-8 pb-[3.2rem] lg:py-15 mt-[6rem] lg:mt-[7rem]'>
      <div className='hero-image'>
      </div>
      <div className='containers relative top-0 left-0'>
        <div className='hero-content max-w-[750px]'>
          <h2 className='text-[2rem] sm:text-[2.55rem] lg:text-[3.25rem] font-[900] text-[#20396e] mb-6'>Digital, Business, &
            Technology Partners for
            Success</h2>
          <p className='text-[1.125rem] sm:text-[1.25rem] lg:text-[1.75rem] font-[600] text-[#151719] text-left'>We simplify the digital
            transformation journeys of
            businesses through smart and
            innovative software solutions.</p>
          <button className='hover-animation-btn bg-[#184ca1] after:bg-[#059a82] mt-5 px-[2rem]'>Contact Our Experts</button>
        </div>
      </div>
      <a href="#">
        <div className="arrow-down">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </div>
      </a>

    </section>
  )
}

export default Hero