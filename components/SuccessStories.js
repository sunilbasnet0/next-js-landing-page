"use client"
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

const SuccessStories = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabVaule, setTabVaule] = useState(0)
  const handleClick = (index) => {
    setActiveTab(index);
    setTabVaule(index)
  };

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const tabData = [
    {
      label: (<img src="/logo-ageas.png" alt="ageas logo" className="w-full cursor-pointer" />),
      heading: "ageas",
      title: "End-to-end Digital Ecosystem for Superior Broker & Customer Management.",
      desc: `INT. provides 360-degree digital transformation of the internal
      operational platform of internationally renowned insurance group,
      Aegeas to enable superior broker and customer experience with the
      direct, broker, and partner channels.`,
    },
    {
      label: (<img src="/logo-cashpoint.png" alt="cashpoint logo" className="w-full cursor-pointer" />),
      heading: "cashpoint",
      title: "Smart Terminals transforming Europe’s leading and fastest growing online betting platform.",
      desc: `Enhanced reach and experience by offering software product engineering through remote teams. Building the product from scratch, regular upgrades using sprint-based planning and deployment.`,
    },
    {
      label: (<img src="/logo-cipla.png" alt="cipla logo" className="w-full cursor-pointer" />),
      heading: "cipla",
      title: "Smart & Multifaceted Doctor friendly platform Ciplamed.",
      desc: `Cipla was able to employ multiple skills in tandem to support the launch of their new age doctor-friendly platform Ciplamed. The platform was smart and agile enough for driving digital success for Cipla.`,
    },
    {
      label: (<img src="/logo-guulpay.png" alt="guulpay logo" className="w-full cursor-pointer" />),
      heading: "Guulpay",
      title: "Smart mobile wallet with cross border payment system.",
      desc: `Finnish Fin-Tech venture teamed up with INT. to deliver an new age mobile &
      web app that could allow its users to recharge with ease, pay bills, receive and send
       money across borders, while allowing users the convenience of IBAN account opening.`,
    },
    {
      label: (<img src="/logo-indusind.png" alt="indusind logo" className="w-full cursor-pointer" />),
      heading: "IndusInd Bank",
      title: "Simplifying Customer Lending Journey by minimizing silos.",
      desc: `An integrated virtual digital platform to streamline core banking with API-Fication of the
       assets and transforming forex transactions, credit card, and loan approval processes.
        The goal is to improve both the customers’ and the bankers’ experience.`,
    },
    {
      label: (<img src="/logo-somax.png" alt="somax logo" className="w-full cursor-pointer" />),
      heading: "Somax Inc",
      title: "Faster Time to Market by Building IoT Based Scalable Solution on Cloud.",
      desc: `INT. provides 360-degree digital transformation of the internal
      operational platform of internationally renowned insurance group,
      Aegeas to enable superior broker and customer experience with the
      direct, broker, and partner channels.`,
    },
  ];

  console.log("Active Tab:", activeTab);
  console.log("tabVaule Tab:", tabVaule);
  return (
    <section id='success-stories' className='py-[2rem] lg:py-[4rem]'>
      <div className='containers'>
        <h2 className='text-center text-[2rem] md:text-[2.5rem] lg:text-[2.813rem] text-[#20396e] font-[900]'>Success Stories</h2>
        <div className='stories-tabs mt-8 hidden md:block'>
          <div className="tabs mx-auto max-w-[1100px]">
            <div className="tab-buttons flex items-center justify-between gap-5">
              {tabData.map((tab, index) => (
                <div
                  key={index}
                  className={`${index === activeTab ? 'active' : ''}`}
                  onClick={() => handleClick(index)}
                >
                  {tab.label}
                </div>
              ))}
            </div>
            <div className="tab-content min-h-[400px] mt-[3rem] border-[#d7dbdb] border-[1px] rounded-[1.5rem] flex md:py-[2rem] md:px-[3rem] lg:py-[3rem] lg:px-[5rem] gap-[2rem]">
              <div className='w-[600px] flex justify-center items-center'>
                {tabData[activeTab].label}
              </div>
              <div className='border-l-[2px] border-l-[#d7dbdb] ml-[4rem] pl-8'>
                <h2 className='capitalize xs:text-[1.25rem] text-[1.625rem] font-[700] text-[#184ca1]'> {tabData[activeTab].heading}</h2>
                <h3 className='xs:text-[1.125rem] text-[1.25rem] font-[500] my-5 text-[#000000]'> {tabData[activeTab].title}</h3>
                <p className='text-[1rem] font-[400] leading-7'>{tabData[activeTab].desc}</p>
                <button className='bg-transparent text-[#000000] text-[1.125rem] font-[400] leading-7 mt-4 p-0'>Know More</button>
              </div>
            </div>
          </div>
        </div>

        {/* tab for mobile devies  */}

        <div className="accordion my-[3rem] md:hidden">
          {tabData.map((data, index) => (
            <div className="accordion-item" key={index}>
              <div
                className='accordion-button'
                aria-expanded={index === expandedIndex}
                onClick={() => toggleAccordion(index)}
              >
                <div>{data.label}</div>
                <span className={`icon ${index === expandedIndex ? 'icon-rotate' : ''}`} aria-hidden="true">
                  <IoIosArrowDown size={40} color='#1a509e' />
                </span>
              </div>
              <div className={`accordion-content ${index === expandedIndex ? 'expanded' : ''}`}>
                <h2 className='capitalize pt-[1rem] xs:text-[1.25rem] text-[1.625rem] font-[700] text-[#184ca1]'> {tabData[activeTab].heading}</h2>
                <h3 className='xs:text-[1.125rem] text-[1.25rem] font-[500] my-5 text-[#000000]'> {tabData[activeTab].title}</h3>
                <p className='text-[1rem] font-[400] leading-7'>{tabData[activeTab].desc}</p>
                <button className='bg-transparent text-[#000000] text-[1.125rem] font-[400] leading-7 mt-4 p-0 mb-[1rem]'>Know More</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default SuccessStories