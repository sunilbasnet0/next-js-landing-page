"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import Chatbox from './Chatbox';

const Footer = () => {

  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisibility(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const services = [
    { label: 'Blockchain Development', href: '/blockchain-development' },
    { label: 'Web Development', href: '/web-development' },
    { label: 'Mobile Development', href: '/mobile-development' },
    { label: 'Digital Marketing', href: '/digital-marketing' },
    { label: 'Creative Services', href: '/creative-services' },
    { label: 'Analytics', href: '/analytics' },
    { label: 'Testing & QA', href: '/testing-qa' },
    { label: 'Process Outsourcing', href: '/process-outsourcing' },
    { label: 'Cloud Infra Management', href: '/cloud-infra-management' },
    { label: 'Dedicated Hiring', href: '/dedicated-hiring' }
  ];
  const industries = [
    { label: 'Banking', href: '/banking' },
    { label: 'Insurance', href: '/insurance' },
    { label: 'Financial Services', href: '/financial-services' },
    { label: 'Healthcare', href: '/healthcare' },
    { label: 'Ed Tech', href: '/ed-tech' },
    { label: 'Retail', href: '/retail' },
    { label: 'MPE', href: '/mpe' },
    { label: 'Real Estate', href: '/real-estate' },
    { label: 'Government', href: '/government' }
  ];

  const company = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Team', href: '/team' },
    { label: 'Awards', href: '/awards' },
    { label: 'Buzz', href: '/buzz' },
    { label: 'Resources', href: '/resources' },
    { label: 'News Room', href: '/news-room' },
    { label: 'Events & Talk', href: '/events-talk' },
    { label: 'Career', href: '/career' },
  ];
  return (
    <footer className='bg-[#f3f3f3]  lg:py-[6rem] md:py-[4rem]  py-[3rem]'>
      <div className='containers'>
        <div className='footer-top flex flex-wrap lg:flex-nowrap gap-y-[3rem]'>
          <div className='lg:w-[350px] w-[50%] xs:w-full'>
            <Link href="/" className='flex items-center gap-2'>
              <img src='/site-logo.png' alt='logo' width="100px" height="1600px" className='min-w-fit' />
              <div className='text-[1.15rem] font-medium leading-none whitespace-nowrap text-[#3464a8] '>
                <p href='/'>We Deliver</p>
                <p href='/'>#Digital Success</p>
              </div>
            </Link>
            <div className='flex items-center gap-6 mt-5'>
              <FaFacebookF size={30} className='cursor-pointer grayscale' />
              <FaTwitter size={30} className='cursor-pointer' />
              <FaLinkedin size={30} className='cursor-pointer' />
              <FaYoutube size={30} className='cursor-pointer' />
            </div>
          </div>
          <ul className='px-8 lg:w-[350px]  w-[50%] xs:w-full'>
            <h3 className='text-[1.25rem] text-[#111010] font-semibold pb-2'>Services</h3>
            {services.map((item, index) => (
              <li key={index} className='py-2'>
                <Link href={item.href} className='text-[#111010] text-[1rem] font-normal'>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className='px-8 lg:w-[230px]  w-[50%] xs:w-full'>
            <h3 className='text-[1.25rem] text-[#111010] font-semibold pb-2'>Industries</h3>
            {industries.map((item, index) => (
              <li key={index} className='py-2'>
                <Link href={item.href} className='text-[#111010] text-[1rem] font-normal'>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className='px-8 lg:w-[200px] w-[50%] xs:w-full'>
            <h3 className='text-[1.25rem] text-[#111010] font-semibold pb-2'>Company</h3>
            {company.map((item, index) => (
              <li key={index} className='py-2'>
                <Link href={item.href} className='text-[#111010] text-[1rem] font-normal'>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className='px-8'>
            <h3 className='text-[1.25rem] text-[#111010] font-semibold pb-2'> Let’s Connect</h3>
            <div className='flex items-center gap-5'>
              <img src='india-png-image.png' className='w-[60px] h-[50px]' />
              <p>+91-8047092630</p>
            </div>
          </div>
        </div>
        <div className='footer-bottom border-y-[1px] border-y-[#555555] mt-[4rem] py-4 grid lg:grid-cols-2 xs:px-[1rem] px-[3rem] lg:gap-11 justify-items-center gap-3'>
          <div className='flex items-center gap-x-5 gap-y-2 flex-wrap justify-center'>
            <p className='xs:text-[0.65rem] lg:text-[0.625rem] xl:text-[0.9rem] text-[#000] font-normal'>CIN: U72100WB2007PLC115875</p>
            <p className='xs:text-[0.65rem]  lg:text-[0.625rem] xl:text-[0.9rem] text-[#000] font-normal'>© Copyright 1997 - , INT. All rights reserved.</p>
          </div>
          <ul className='flex lg:items-center lg:justify-between gap-3 lg:flex-nowrap flex-wrap justify-center whitespace-nowrap'>
            <li className='border-r-[1px] border-r-[#555555] lg:pr-6 pr-3'>
              <Link className='text-[0.625rem]  xl:text-[0.9rem] text-[#000] font-normal hover:text-[#1a509e]' href="/contact-us" title='Contact Us'>
                Contact Us
              </Link>
            </li>
            <li className='border-r-[1px] border-r-[#555555] lg:pr-6 pr-3'>
              <Link className='text-[0.625rem] xl:text-[0.9rem] text-[#000] font-normal hover:text-[#1a509e]' href="/terms-of-use" title='Terms of Use'>
                Terms of Use
              </Link>
            </li>
            <li className='border-r-[1px] border-r-[#555555] lg:pr-6 pr-3'>
              <Link className='text-[0.625rem] xl:text-[0.9rem] text-[#000] font-normal hover:text-[#1a509e]' href="/privacy-policy" title='Privacy Policy'>
                Privacy Policy
              </Link>
            </li>
            <li className='border-r-[1px] border-r-[#555555] lg:pr-6 pr-3'>
              <Link className='text-[0.625rem] xl:text-[0.9rem] text-[#000] font-normal hover:text-[#1a509e]' href="/cookie-policy" title='Cookie Policy'>
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link className='text-[0.625rem] xl:text-[0.9rem] text-[#000] font-normal hover:text-[#1a509e]' href="/site-map" title='Site Map'>
                Site Map
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Back to Top button */}
      <div className='back-to-top'>
        <button
          className='bg-[#184ca1] hover:bg-[#e9cd02] hover:text-[#000] text-white font-bold p-3 rounded fixed top-[35rem] right-[3rem] z-[9999]'
          onClick={scrollToTop}
          style={{ display: visibility ? 'inline-block' : 'none' }}
        >
          <IoIosArrowUp />
        </button>
      </div>
    </footer>
  )
}

export default Footer