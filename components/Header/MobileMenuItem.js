"use client"

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link';
import Dropdown from './Dropdown';
import { IoIosArrowDown } from "react-icons/io";

const MobileMenuItem = ({ items }) => {

  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };
  return (
    <li
      className='menu-items'
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.href && items.dropdownItems ? (
        <>
          <div
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={toggleDropdown}
            className="flex items-center gap-2 relative"
          >
            <Link href={items.href} className="text-[#244a6d] xl:text-[1.125rem] lg:text-[0.9rem] font-[900] lg:py-[2.5rem] whitespace-nowrap  hover:border-b-[#244a6d] border-b-[2px] border-b-[#ffff]">{items.label}</Link>
            <IoIosArrowDown />
          </div>
          <Dropdown dropdownItems={items.dropdownItems} dropdown={dropdown} />
        </>
      ) : (
        <Link href={items.href} className='text-[#244a6d] xl:text-[1.125rem] lg:text-[0.9rem] font-[900] lg:py-[2.5rem] hover:border-b-[#244a6d] hover:border-b-[2px] whitespace-nowrap'>{items.label}</Link>
      )}
    </li>
  )
};

export default MobileMenuItem
