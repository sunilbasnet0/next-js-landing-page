"use client"
import React, { useEffect, useState } from 'react'
import { Select, Option } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";


const Contact = () => {

  return (
    <section id='contact' className='bg-[#11459a] py-[2rem] sm:py-[5rem] md:py-[8rem]'>
      <div className='containers grid grid-cols-1 md:grid-cols-2 gap-[3rem]'>
        <div className='md:mt-[5rem]'>
          <h3 className='text-[#ffff] text-[2rem] md:text-[2.75rem] lg:text-[3.75rem] font-[400]'>Let's <b>Solve</b> Your <b>Business Problems</b></h3>
          <ul className='mt-[2rem] md:mt-[5rem]'>
            <li className='flex items-center gap-3 pb-5'>
              <img src='tick.png' alt='tick icon' />
              <p className='text-[#ffff] text-[1.125rem]'>We would love to know what you need for the next level of growth for your business</p>
            </li>
            <li className='flex items-center gap-3 pb-5'>
              <img src='tick.png' alt='tick icon' />

              <p className='text-[#ffff] text-[1.125rem]'>Telling us more about your business challenges will allow us to provide a better response</p>
            </li>
            <li className='flex items-center gap-3 pb-5'>
              <img src='tick.png' alt='tick icon' />

              <p className='text-[#ffff] text-[1.125rem]'>Our expert team will get back to you within 24 hour for free consultation</p>
            </li>
            <li className='flex items-center gap-3 pb-5'>
              <img src='tick.png' alt='tick icon' />

              <p className='text-[#ffff] text-[1.125rem]'>All information provided is kept confidential and under NDA</p>
            </li>
          </ul>
        </div>
        <div className='lg:w-[90%] lg:ml-auto'>
          <form className='flex flex-col gap-[1.5rem] bg-white p-[2rem] rounded-sm'>
            <div className='w-full flex gap-8 xs:flex-wrap md:flex-wrap lg:flex-wrap xl:flex-nowrap'>
              <div className='flex flex-col gap-2 w-full'>
                <label>Name</label>
                <Input label="Username" />
              </div>
              <div className='flex flex-col gap-2 w-full'>
                <label>Email</label>
                <Input label="Email" />
              </div>
            </div>
            <div className='flex flex-col gap-4 w-full'>
              <label>Phone number</label>
              <div className='flex gap-4 xs:flex-wrap lg:flex-wrap md:flex-wrap '>
                <div className="w-72 ">
                  <Select label="Select country" >
                    <Option>Nepal</Option>
                    <Option>USAt</Option>
                    <Option>India</Option>
                    <Option>Austraila</Option>
                    <Option>Japan</Option>
                  </Select>
                </div>
                <div className='w-full'>
                  <Input label="Phone number" />
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-4 w-full'>
              <label>Industry Type</label>
              <Select label="Industry Type*" >
                <Option value="Banking Sector">Banking Sector</Option>
                <Option value="Insurance Sector">Insurance Sector</Option>
                <Option value="Financial Services Sector">Financial Services Sector</Option>
                <Option value="Others">Others</Option>
              </Select>
            </div>
            <div className='flex flex-col gap-4 w-full'>
              <label>What can we help you with?</label>
              <Select label="Request for Services" >
                <Option value="Dedicated Hiring">Dedicated Hiring</Option>
                <Option value="Business Consulting">Business Consulting</Option>
                <Option value="Product Engineering">Product Engineering</Option>
                <Option value="Web/App Development">Web/App Development</Option>
                <Option value="Digital Marketing">Digital Marketing</Option>
                <Option value="Cloud Services">Cloud Services</Option>
                <Option value="Data Analytics">Data Analytics</Option>
                <Option value="Maintenance &amp; Support">Maintenance &amp; Support </Option>
                <Option value="Media Query">Media Query</Option>
                <Option value="Job Enquiry">Job Enquiry</Option>
              </Select>
            </div>

            <p className='text-[0.75rem] leading-6'>
              INT. needs the contact information you provide to us to contact you about our products and services. By submitting the form you agree to INT's <a href='#' className='text-[#0000ee] border-b-[1px] border-b-[#0000ee]'>Privacy Policy</a> and <a href='#' className='text-[#0000ee] border-b-[1px] border-b-[#0000ee]'>Cookies & Internet Advertising</a>. Don't worry, our privacy practices and commitment to protecting your privacy always.
            </p>
          </form>
          <img src='captacha-logo.png' className='my-[2rem]' />
          <button className='bg-[#ff7a59]'>Let’s Connect</button>
        </div>

      </div >

    </section >
  )
}

export default Contact