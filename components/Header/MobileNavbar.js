'use client'

import Link from 'next/link';
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const MobileNavbar = ({ isOpen, toggleMobileNavbar }) => {
  const navLink = [
    {
      href: '',
      // key: 'services',
      label: 'Services',
      dropdownItems: [
        {
          label: 'Blockchain Development',
          href: '/blockchainDevelopment'
        },
        {
          label: 'Web Development',
          href: 'webDevelopment'
        },
        {
          label: 'Mobile Development',
          href: 'MobileDevelopment'
        },
        {
          label: 'Digital Marketing',
          href: 'digitalDevelopment'
        },
        {
          label: 'Analytics',
          href: 'analyticsDevelopment'
        },
        {
          label: 'Dedicated Hiring',
          href: 'dedicatedDevelopment'
        },
        {
          label: 'Creative Services',
          href: 'creativeDevelopment'
        },
      ]
    },
    {
      href: '',
      // key: 'industries',
      label: 'Industries',
      dropdownItems: [
        {
          label: 'Banking',
          href: 'Banking'
        },
        {
          label: 'Insurance',
          href: 'Insurance'
        },
        {
          label: 'Financial Services',
          href: 'Financial Services'
        },
        {
          label: 'Healthcare',
          href: 'Healthcare'
        },
        {
          label: 'Ed Tech',
          href: 'EdTech'
        },
      ]
    },
    {
      href: '',
      // key: 'Company',
      label: 'Company',
      dropdownItems: [
        {
          label: 'About Us',
          href: 'about-us'
        },
        {
          label: 'Team',
          href: 'team'
        },
        {
          label: 'Awards',
          href: 'awards'
        },
        {
          label: 'News Room',
          href: 'news-room'
        },
        {
          label: 'Events',
          href: 'events'
        },
        {
          label: 'Archives',
          href: 'archives'
        },
        {
          label: 'Governance',
          href: 'governance'
        },
        {
          label: 'Events',
          href: 'events'
        },
      ]
    },
    {
      href: 'career',
      key: 'career',
      label: 'Career'
    },
    {
      href: 'success-stories',
      // key: 'success Stories',
      label: 'Success Stories'
    },
    {
      href: 'contact-Us',
      // key: 'contact-Us',
      label: 'Contact Us'
    }
  ]


  const [collapsedMenu, setCollapsedMenu] = useState(() => {
    const initialState = {};
    // Initialize collapsedMenu with all menus set to true (collapsed)
    navLink.forEach((menu, index) => {
      if (menu.dropdownItems) {
        initialState[index] = true;
      }
    });
    return initialState;
  });

  const toggleMenu = (index) => {
    setCollapsedMenu((prevCollapsedMenu) => ({
      ...prevCollapsedMenu,
      [index]: !prevCollapsedMenu[index],
    }));
  };

  const toggleClose = () => {
    // Call the toggleMobileNavbar function passed from the parent
    toggleMobileNavbar();
  };
  return (
    <>
      <div className='mobile-navigation-overlay'></div>
      <div className='toggleClose' onClick={toggleClose}><IoClose color='#fff' size={45} /></div>
      <ul className="mobile-navigation">
        {navLink.map((menu, index) => (
          <li key={index}>
            {menu.dropdownItems ? (
              <Link href={menu.href} onClick={() => toggleMenu(index)} className='w-full flex justify-between items-center gap-2'>
                {menu.label}
                <IoIosArrowDown />
              </Link>
            ) : (
              <Link href={menu.href} className='w-full flex justify-between items-center gap-2'>
                {menu.label}
              </Link>
            )}
            {menu.dropdownItems && !collapsedMenu[index] && (
              <ul>
                {menu.dropdownItems.map((item, subIndex) => (
                  <li key={subIndex}>
                    <Link href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default MobileNavbar
