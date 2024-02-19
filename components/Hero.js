import React from 'react';

const Hero = () => {
  return (
    <section className='relative py-15  mt-[4rem] xs:mt-[5rem]'>
      {/* <div className='hero-image'></div> */}
      <div className='w-full h-full mx-auto'>
        <video className="w-full h-full" loop autoPlay muted>
          <source src="hero-section-video.mp4" type="video/mp4" className='w-full' />
        </video>
      </div>
      {/* <a href="#">
        <div className="arrow-down">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </div>
      </a> */}
    </section>
  );
}

export default Hero;
