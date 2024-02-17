import React from 'react'
import MenuItems from './MenuItems';

const Navbar = () => {
  const depthLevel = 0;
  const navLink = [
    {
      href: '/services',
      // key: 'services',
      label: 'Services',
      dropdownItems: [
        {
          label: 'Blockchain Development',
          href: 'blockchainDevelopment'
        },
        {
          label: 'Web Development',
          href: '/services/web-development'
        },
        {
          label: 'Mobile Development',
          href: '/services/mobile-development'
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
      href: 'industries',
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
      href: 'company',
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
  return (
    <ul className="menus relative lg:flex justify-between gap-3 items-center w-full xl:w-[60%] z-50">
      {navLink.map((menu, index) => {
        return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
      })}
    </ul>
  )
}

export default Navbar