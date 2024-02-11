"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileNavbar = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <header className='pt-2 bg-white w-full lg:h-[7.5rem] fixed z-40 py-2 lg:py-0 '>
      <nav className='containers relative flex items-center gap-x-[3rem] gap-y-1'>
        <Link href="/" className='flex items-center gap-2'>
          <img src='/site-logo.png' alt='logo' width="80px" height="60px" className='min-w-fit' />
          <div className='hidden text-[0.75rem] font-medium leading-none whitespace-nowrap lg:block'>
            <p href='/'>We Deliver</p>
            <p href='/'>#Digital Success</p>
          </div>
        </Link>
        <div className='w-full flex items-center gap-x-[1rem] gap-y-[1rem] xs:gap-x-4'>
          <Navbar />
          {isOpen && <MobileNavbar isOpen={isOpen} toggleMobileNavbar={toggleMobileNavbar} />}
          <div className='flex-grow flex items-center justify-end gap-5 xs:gap-1'>
            <button className='gradient-btn'>Let’s Connect</button>
            <button className='hover-animation-btn'>Book a Call</button>
          </div>
          <div className='lg:hidden block toggle-btn' onClick={toggleMobileNavbar}>
            {!isOpen && <GiHamburgerMenu size={35} color='#1a50a1' />}
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Header