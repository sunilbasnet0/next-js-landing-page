import React from 'react'

const Overview = () => {
  return (
    <section id='overview' className='py-[3rem] border-b-[1px] border-[#d3d7d8]'>
      <div className='containers'>
        <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-1 gap-4 mx-auto max-md:max-w-[500px]">
          <div className="text-start p-4 xs:text-center">
            <h3 className="text-[2.5rem] font-bold text-[#20396e] md:text-[3rem] lg:text-[4rem]"><span>25</span>+</h3>
            <h6 className="text-[1.125rem] font-medium text-[#292c30] md:text-[1.25rem] lg:text-[2rem] leading-none">Years</h6>
          </div>
          <div className="text-start p-4 xs:text-center">
            <h3 className="text-[2.5rem] font-bold text-[#20396e] md:text-[3rem] lg:text-[4rem]"><span>850</span>+</h3>
            <h6 className="text-[1.125rem] font-medium text-[#292c30] md:text-[1.25rem] lg:text-[2rem] leading-none">Solution Experts</h6>
          </div>
          <div className="text-start p-4 xs:text-center">
            <h3 className="text-[2.5rem] font-bold text-[#20396e] md:text-[3rem] lg:text-[4rem]"><span>500</span>+</h3>
            <h6 className="text-[1.125rem] font-medium text-[#292c30] md:text-[1.25rem] lg:text-[2rem] leading-none">Happy Clients</h6>
          </div>
          <div className="text-start p-4 xs:text-center">
            <h3 className="text-[2.5rem] font-bold text-[#20396e] md:text-[3rem] lg:text-[4rem]"><span>10</span></h3>
            <h6 className="text-[1.125rem] font-medium text-[#292c30] md:text-[1.25rem] lg:text-[2rem] leading-none">Offices Worldwide</h6>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview