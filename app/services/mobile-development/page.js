"use client"
import React, { useState } from 'react'
import "../../styles/mobileDevelopment.css"
import { BsPlusLg } from "react-icons/bs";
import { HiArrowLongRight } from "react-icons/hi2";

const page = () => {


  const faq = [
    {
      id: 1,
      question: "What is custom mobile app development?",
      answer: `Custom mobile app development is the process of building specialized, innovative mobile applications for specific use cases. The custom mobile app development service offered by Diffco begins with a discovery process, during which our experts collaborate with your business leaders to gain a deeper insight into the goals you want to accomplish with your application.

      We’ll learn what kind of audience you’re trying to reach with your mobile app, which features, and functionalities are necessary to create an MVP (Minimum Viable Product), and what kind of unique components you need to include in your project. Based on this knowledge, we develop a bespoke software, specially developed to suit the needs of your company and customers.
      
      Almost all of the top-selling apps in the mobile market are custom created. While some may include off-the-shelf integrated features, they’re designed to address a specific need and market demand. Our custom app development services ensure you can create the ultimate experience for your end users.`
    },
    {
      id: 2,
      question: "How much does it cost to create a custom mobile application?",
      answer: `The costs of any mobile application development project are variable. The exact amount you’ll pay to develop a custom app will depend on the features, functionality, and level of support you may need. The more advanced the app, the more you’re likely to pay for custom guidance and expertise.

      At Diffco, we offer a transparent pricing structure to eliminate the confusion and complexities of planning your budget. Our outsourced custom app development prices are based on the “Time and Materials” approach. This means we charge our clients according to the specific resources they need, and the time it takes to produce, maintain, and manage the app.
      
      We believe this is the best way to price custom app development for projects, because the best mobile apps often require flexible thinking, regular tweaks, and shifts in scope. With our quotes, you don’t pay for contingencies and extra features you don’t need either. See why Diffco is a trusted mobile application development company today.`

    },
    {
      id: 3,
      question: "How long does custom mobile application development take?",
      answer: `The time scale involved in developing a custom app can also differ based on a range of factors. Once again, the complexity of your application will usually determine how long it takes to create. Simple apps can be built in just 1-2 months, while others take several months to create.

      Fortunately, no matter how advanced your custom app might be, working with Diffco will ensure you can take a viable product to market as quickly as possible. At Diffco, we use an agile development process to design your solution as quickly as possible. We apply a nimble and responsive approach to incorporate your feedback during the development process, and adjust priorities as needed.
      
      Our agile approach means we can create a minimum viable product (MVP) for your app as quickly as possible before rolling out additional features and capabilities to improve the user experience.`
    },
    {
      id: 4,
      question: "What devices do you build custom apps for?",
      answer: `Our custom mobile app development services are suitable for all kinds of mobile applications. Our experienced team can fully develop, manage, and maintain apps for both iOS (Apple), Android, tablets, and various mobie devices. We can also work with your team on a joint development effort for a specific platform.

      Throughout our development process, we follow best practices and industry guidelines to ensure the architecture of your app remains clean and compliant. Our teams are committed to ensuring good documentation, code readability and design principles.
      
      We also follow principles pre-established by Google (such as style guides for Java, JavaScript, Typescript and Kotlin) and Apple (Swift and Objective-C) guides to ensure your app is more likely to be approved by your chosen app store.`
    },
    {
      id: 5,
      question: "How is Diffco different from other custom mobile app development companies?",
      answer: `Diffco makes custom mobile app development simple, seamless, and straightforward. Our agile approach to development helps you to bring your apps to market quickly, without compromising on user experience and scalability. With Diffco, you get access to:`
    }

  ]

  const [activeItems, setActiveItems] = useState(Array(faq.length).fill(false));

  const handleClick = (id) => {
    const newActiveItems = [...activeItems]; // Create a copy of activeItems array
    newActiveItems[id] = !newActiveItems[id]; // Toggle the active state for the clicked item
    setActiveItems(newActiveItems); // Update the state
  };

  return (
    <main className='lg:py-[7rem] py-[5rem] bg-[#131426]'>
      <section className='hero-section py-[3rem] min-h-[1000px]'>
        <div className='containers'>
          <div className='flex flex-col items-center justify-center'>
            <p className='bg-white px-[1.25rem] capitalize text-[1rem] font-bold border-[2px] border-[#000] py-[0.75rem] rounded-[2rem]'>Mobile Development</p>
            <h3 className='pt-[3rem] text-[1.75rem] sm:text-[2.75rem] text-white font-bold text-center max-w-[900px] mx-auto leading-[3rem] '>
              Diffco specializes in native <br />
              and cross-platform mobile application
              development for iOS and Android
            </h3>
            <p className='pt-[2rem] text-[1rem] sm:text-[1.125rem] text-white font-normal text-center max-w-[750px] mx-auto leading-[2rem] '>
              Our mobile development team is fluent in the mobile guidelines, UI standards, and best practices of Apple and Google. With our extensive experience, we see to every detail to make your apps powerful, user-friendly, and successful.</p>
            <button className='bg-[#2642be] rounded-xl mt-[2rem] px-[2rem]'>Let's Chat</button>
            <div className='mt-[2rem] flex items-center gap-[2rem]  xs:flex-col'>
              <div className='flex items-center gap-3'>
                <img src='https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/ios.svg' />
                <p className='text-white text-[1.125rem] font-medium'>Native iOS</p>
              </div>
              <hr className='w-[1px] h-[32px] bg-[#6b5e91] border-none xs:hidden' />
              <div className='flex items-center gap-3'>
                <img src='https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/android.svg' />
                <p className='text-white text-[1.125rem] font-medium'>Native Android</p>
              </div>
              <hr className='w-[1px] h-[32px] bg-[#6b5e91] border-none xs:hidden' />
              <div className='flex items-center gap-3'>
                <img src='https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/react-native.svg' />
                <p className='text-white text-[1.125rem] font-medium'>Native iOS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-[5rem] pb-[4rem] bg-[#131426]' id='project-approach'>
        <div className='containers'>
          <div className='text-center'>
            <h2 className='text-[2rem] text-white font-bold pt-[2rem]'>Project approaches</h2>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-[2rem] max-w-[1220px] mx-auto my-[4rem]'>
            <div className='flex items-center sm:items-start xl:items-center gap-[2rem] bg-[#1a1b31] p-[2.5rem] rounded-xl flex-col xl:flex-row'>
              <img src='https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/approach-1.svg' />
              <div>
                <h3 className='text-[1.25rem] text-white font-extrabold pb-[1rem] text-center sm:text-start'>Mobile-only</h3>
                <p className='text-white text-sm text-normal text-center sm:text-start'>Our team can fully develop and maintain your iOS and Android mobile applications, or we can collaborate with your project team in a joint development effort.</p>
              </div>
            </div>
            <div className='flex items-center sm:items-start xl:items-center gap-[2rem] bg-[#1a1b31] p-[2.5rem] rounded-xl flex-col xl:flex-row'>
              <img src='https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/approach-2.svg' />
              <div>
                <h3 className='text-[1.25rem] text-white font-extrabold pb-[1rem]  text-center sm:text-start'>Mobile + backend</h3>
                <p className='text-white text-sm text-normal text-center sm:text-start'>When you need to develop a backend solution to support your mobile app, our backend engineering team is ready to help.</p>
              </div>
            </div>
            <div className='flex items-center sm:items-start xl:items-center gap-[2rem] bg-[#1a1b31] p-[2.5rem] rounded-xl flex-col xl:flex-row'>
              <img src='https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/approach-3.svg' />
              <div>
                <h3 className='text-[1.25rem] text-white font-extrabold pb-[1rem]  text-center sm:text-start'>Web version</h3>
                <p className='text-white text-sm text-normal text-center sm:text-start'>will help you achieve your goals. If you need a web application along with your mobile app, our front-end team.</p>
              </div>
            </div>
            <div className='flex items-center sm:items-start xl:items-center gap-[2rem] bg-[#1a1b31] p-[2.5rem] rounded-xl flex-col xl:flex-row'>
              <img src='https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/approach-4.svg' />
              <div>
                <h3 className='text-[1.25rem] text-white font-extrabold pb-[1rem]  text-center sm:text-start'>Admin panel</h3>
                <p className='text-white text-sm text-normal text-center sm:text-start'>We design and develop easy-to-use admin panels for mobile and web apps, using popular UI solutions that are reliable and easy to support and extend.</p>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <button className='bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl mt-[2rem] px-[1.75rem] hover:bg-[#2f4ded] text-sm '>Let's Chat</button>
          </div>
        </div>
      </section>

      <section id='project-stage' className='py-[4rem]'>
        <div className='containers'>
          <div className='flex flex-col items-start gap-4 max-w-[600px] px-[1rem]'>
            <h2 className='text-[2rem] text-white font-bold pt-[2rem]'>Project Stages and Flow</h2>
            <p className='text-white text-sm text-normal'>Based on your current project stage, we will propose the most effective plan to achieve your objectives—within your timeframe and budget.</p>
            <button className='bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl px-[1.75rem] hover:bg-[#2f4ded] text-sm'>Let's Chat</button>
          </div>
          <h3 className='text-[1.5rem] text-white font-extrabold mt-[4rem] px-[1rem]'>Our typical project flow includes the following stages.</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-[2rem] my-[3rem]'>
            <div className='bg-[#13152757] py-[1.5rem] px-[2rem] hover:bg-[#1b2030]'>
              <h2 className='text-[2rem] text-[#f8b000] font-extrabold mb-4'>01</h2>
              <h3 className='text-[1.25rem] text-white font-extrabold mb-4'>Discovery stage</h3>
              <p className='text-white text-sm text-normal'>To efficiently plan and run your project, we start with discovery. In this four-step stage, we collaborate with you to align functionality, prioritize business goals, coordinate strategy, and prototype future products. During discovery, we also define your deadlines and budget.</p>
            </div>
            <div className='bg-[#13152757] py-[1.5rem] px-[2rem] hover:bg-[#1b2030]'>
              <h2 className='text-[2rem] text-[#f8b000] font-extrabold mb-4'>02</h2>
              <h3 className='text-[1.25rem] text-white font-extrabold mb-4'>Design stage</h3>
              <p className='text-white text-sm text-normal'>After developing a prototype wireframe, our design team starts to create your application style (the app’s “look and feel”). In this stage, we provide you with a full set of UI screens to use for further development.</p>
            </div>
            <div className='bg-[#13152757] py-[1.5rem] px-[2rem] hover:bg-[#1b2030]'>
              <h2 className='text-[2rem] text-[#f8b000] font-extrabold mb-4'>03</h2>
              <h3 className='text-[1.25rem] text-white font-extrabold mb-4'>Development stage</h3>
              <p className='text-white text-sm text-normal'>Product development typically evolves across multiple releases, including a minimum viable product (MVP) for the earliest possible release. To speed the process, we use Agile development with short sprints, and we run the development stage in parallel with design wireframes, documentation, and mockups.</p>
            </div>
            <div className='bg-[#13152757] py-[1.5rem] px-[2rem] hover:bg-[#1b2030]'>
              <h2 className='text-[2rem] text-[#f8b000] font-extrabold mb-4'>04</h2>
              <h3 className='text-[1.25rem] text-white font-extrabold mb-4'>Ongoing development, support, and maintenance stage</h3>
              <p className='text-white text-sm text-normal'>After releasing the MVP, our team performs new sprints to speed new releases with additional functionality. And we support and maintain the latest version of the launched app.</p>
            </div>

          </div>
        </div>
      </section>

      <section className='bg-[#131426]' id='discovery-stage'>
        <div className='containers'>
          <div className='relative bg-[#522980] xs:h-[340px] h-[270px] rounded-t-[1rem] md:h-auto md:bg-transparent md:rounded-none'>
            <img src='https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/discovery-stage@2x.png' className='hidden md:block' />
            <div className='flex flex-col items-start gap-4 max-w-[340px] absolute bottom-[4rem] left-[2rem] sm:left-[200px]'>
              <h2 className='text-[2rem] text-white font-bold pt-[2rem]'>Discovery Stage</h2>
              <p className='text-white text-sm text-normal'>In Diffco’s project flow, the critical discovery stage includes four segments.</p>
              <button className='bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl px-[1.75rem] hover:bg-[#2f4ded] text-sm'>Let's Chat</button>
            </div>
          </div>
          <div style={{ background: "linear-gradient(180deg,#e2e5ff 0,#fff 100%)" }} className='py-[2rem] px-[2.25rem] max-w-[1270px] mx-auto rounded-xl'>
            <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-[2rem] '>
              <div>
                <h2 className='text-[#afb5e2] text-[3rem] font-extrabold'>1.01</h2>
                <h3 className='text-[#131426] text-[1.25rem] font-extrabold pb-[0.75rem]'>PRD (Documentation)</h3>
                <p className='text-[#131426] text-sm font-normal'>The product requirements document is a comprehensive specification and plan for product creation. The PRD specifies your business needs, describes the associated technical requirements, and helps plan all stages of your product development.</p>
              </div>
              <div>
                <h2 className='text-[#afb5e2] text-[3rem] font-extrabold'>1.02</h2>
                <h3 className='text-[#131426] text-[1.25rem] font-extrabold pb-[0.75rem]'>Wireframes</h3>
                <p className='text-[#131426] text-sm font-normal'>A wireframe is a visual prototype of your product that shows all application screens and user flows. We can develop a dynamic prototype that you can test with project teams and alpha users., and demonstrate to your investors and business partners.</p>
              </div>
              <div>
                <h2 className='text-[#afb5e2] text-[3rem] font-extrabold'>1.03</h2>
                <h3 className='text-[#131426] text-[1.25rem] font-extrabold pb-[0.75rem]'>R&amp;D</h3>
                <p className='text-[#131426] text-sm font-normal'>If you need deeper technical research and analysis, more extensive testing of an existing solution, or ideation of a new solution, we will allocate the necessary resources for research and development.</p>
              </div>
              <div>
                <h2 className='text-[#afb5e2] text-[3rem] font-extrabold'>1.04</h2>
                <h3 className='text-[#131426] text-[1.25rem] font-extrabold pb-[0.75rem]'>Product strategy</h3>
                <p className='text-[#131426] text-sm font-normal'>If you are in the early stages of development, we can help you choose the best ideas to fulfill your product vision. Our team will brainstorm with you on functionality, define the solution scope and logic, develop a wireframe, plan the next stages of development, and schedule releases. Our process ensures that we mutually understand and agree on your product goals.</p>
              </div>
            </div>
            <hr className="border-t-2 border-dashed border-gray-300 my-[3rem] flex justify-center" />
            <div className='flex items-center justify-center'>
              <button className='bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl px-[3rem] hover:bg-[#2f4ded] text-sm '>Let's Chat</button>
            </div>
          </div>
        </div>
      </section>

      <section id="qa" className='py-[3rem]'>
        <div className='containers'>
          <div className='bg-[#1b2339] py-[4rem] max-w-[1270px] mx-auto rounded-xl'>
            <div className='flex items-center justify-center gap-[3rem] max-w-[970px] mx-auto flex-col md:flex-row px-[2rem]'>
              <div className='flex flex-col gap-2 items-center'>
                <img alt="PRD" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/qa-1.svg" />
              </div>
              <div>
                <h3 className='text-[1.5rem] text-white font-extrabold '>Q: Already have a PRD, wireframe, or initial design?</h3>
                <p className='text-white text-sm font-normal pt-[1rem]'>
                  A: <span className='text-[#f8b000]'>That’s great.</span>
                  Our design and engineering team will analyze your project to determine the remaining scope of work and suggest a vision for the next stages of development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='formats-billing'>
        <div className='containers'>
          <div className='text-center'>
            <h2 className='text-[2rem] text-white font-bold pt-[2rem]'>Development formats and billing</h2>
          </div>
          <div className='max-w-[1100px] mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-[2rem] items-center py-[5rem]'>
              <div className='order-2 sm:oder-1'>
                <h3 className='text-[1.5rem] text-white font-extrabold '>Time &amp; Materials</h3>
                <p className='text-white text-sm font-normal pt-[1rem] leading-6'>
                  For outsourced software development, a time-and-materials (T&amp;M) approach saves you money—and produces better results—than a fixed-price contract. That’s because the best software requires flexible thinking, tweaks to requirements, and shifts in scope. And because with fixed-price estimates, you always overpay for risk contingencies that you probably won’t need.
                  <a href="" className='text-[#f8b000]'>Read our blog for a full analysis</a>
                </p>
                <button className='bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl px-[1.15rem] hover:bg-[#2f4ded] text-sm mt-[2rem]'>Let's Chat</button>
              </div>
              <div className='flex flex-col gap-2 items-center order-1 sm:oder-2'>
                <img alt="Time &amp; Materials" className="b-lazy b-loaded" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/formats-1.svg" />
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-[2rem] items-center'>
              <div className='flex flex-col gap-2 items-center'>
                <img alt="Agile" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/formats-2.svg" />
              </div>
              <div>
                <h3 className='text-[1.5rem] text-white font-extrabold '>Agile</h3>
                <p className='text-white text-sm font-normal pt-[1rem] leading-6'>Agile software development involves a series of short sprints to ensure rapid, transparent progress toward your product goals. We apply this nimble, responsive approach to incorporate your feedback, adjust priorities as needed, and ensure your approval at every step. We use the Agile best practice because it is more flexible—and less risky—than the linear Waterfall development methodology.</p>
                <button className='bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl px-[1.15rem] hover:bg-[#2f4ded] text-sm mt-[2rem]'>Let's Chat</button>
              </div>
            </div>
          </div>


          <div className='my-[3rem] grid grid-cols-1 sm:grid-cols-2 gap-[2rem]'>

            <div className='bg-[#191e32] px-[2rem] py-[1rem] rounded-xl'>
              <div className='flex flex-col gap-2 items-center'>
                <img alt="UI/UX design, prototyping" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/formats-item-1.svg" />
              </div>
              <h3 className='text-[1.5rem] text-white font-extrabold mt-[1rem] text-center sm:text-start'>UI/UX design, prototyping</h3>
              <p className='text-[#9eaec1] text-sm font-normal pt-[1rem] leading-6 text-center sm:text-start'>Your user interface (UI) and user experience (UX) are keys to your success. Our UI development process is dynamic and iterative, based on prototypes, user feedback, and analytics that let us see your UI through your customers’ eyes. Our progressive UI development also saves you time and money, because it eliminates late, unexpected scope changes.</p>
            </div>


            <div className='bg-[#191e32] px-[2rem] py-[1rem] rounded-xl'>
              <div className='flex flex-col gap-2 items-center'>
                <img alt="Automated QA and testing" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/formats-item-2.svg" />
              </div>
              <h3 className='text-[1.5rem] text-white font-extrabold mt-[1rem] text-center sm:text-start'>Automated QA and testing</h3>
              <p className='text-[#9eaec1] text-sm font-normal pt-[1rem] leading-6 text-center sm:text-start'>Automated quality assurance and testing are best practices in software development. We implement QA automation solutions and testing tools because they yield significant advantages for our clients, including the highest product quality, lowest costs, and fastest releases.</p>
            </div>

            <div className='bg-[#191e32] px-[2rem] py-[1rem] rounded-xl'>
              <div className='flex flex-col gap-2 items-center'>
                <img alt="Adherence to industry best practices and technology standards" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/formats-item-3.svg" />
              </div>
              <h3 className='text-[1.5rem] text-white font-extrabold mt-[1rem] text-center sm:text-start'>Adherence to industry best practices and technology standards</h3>
              <p className='text-[#9eaec1] text-sm font-normal pt-[1rem] leading-6 text-center sm:text-start'>Throughout our software development process, we emphasize clean architecture, design patterns, code readability, and documentation. We follow principles established by Google (e.g., style guides for Javascript, Typescript, Java, and Kotlin) and Apple (e.g., guides for Swift and Objective-C). We also adhere to the general engineering principles of KISS, DRY, and SOLID.</p>
            </div>


            <div className='bg-[#191e32] px-[2rem] py-[1rem] rounded-xl'>
              <div className='flex flex-col gap-2 items-center'>
                <img alt="Compliance with security standards and policies" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/formats-item-4.svg" />
              </div>
              <h3 className='text-[1.5rem] text-white font-extrabold mt-[1rem] text-center sm:text-start'>Compliance with security standards and policies</h3>
              <p className='text-[#9eaec1] text-sm font-normal pt-[1rem] leading-6 text-center sm:text-start'>We follow industry best practices to meet each client’s security needs. We can help you comply with security standards and regulations such as SOC 2, PCI DSS, GDPR, and HIPAA. We also provide strict version control and automatic code and data backups to ensure product continuity and protect you against critical data loss.</p>
            </div>
          </div>

          <div className='bg-[#1e2644] my-[3rem] grid grid-cols-1 xl:grid-cols-2 gap-[2rem] p-[2.5rem]'>
            <div>
              <h2 className='text-[2rem] text-white font-bold pt-[2rem]'>Analytics and <br /> product optimization</h2>
              <p className='text-[#fff] text-sm font-normal pt-[1rem] leading-6'>
                To add greater value to your business, we use analytics to refine your product and maximize your return on investment. We make data-driven decisions on UI/UX impact, content, and process flow. And we could help your marketing team maximize conversions, revenue, and profits. Our engineers integrate your goals and metrics to build conversion funnels, going far beyond simple tracking pixels.
              </p>
              <button className='bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl px-[1.15rem] hover:bg-[#2f4ded] text-sm mt-[2rem]'>Let's Chat</button>
            </div>
            <div>
              <img alt="Analytics integration" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/analytics-art.png" />
            </div>
          </div>
        </div>
        <div className="request-consultation">
          <button className='border-none rounded-md bg-[#2f7ced]'> Request a free 15-minutes consultation</button>
        </div>
      </section>
      <section id="care">
        <div className="containers">
          <div className='grid grid-cols-1 md:grid-cols-2 relative py-[3rem]'>
            <div className='md:max-w-[500px] mx-auto flex flex-col justify-center items-start'>
              <h2 className='text-[2rem] text-white font-bold pt-[2rem]'>Our whole-solution approach</h2>
              <p className='text-[#fff] text-sm font-normal pt-[1rem] leading-6'>The Diffco development team doesn’t just code product functions. We give you our expertise and experience to help your solution succeed. We suggest ideas, build dynamically and flexibly, see you through the initial launch, and help you envision and evolve the future for your business.</p>
              <button className='bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl px-[1.15rem] hover:bg-[#2f4ded] text-sm mt-[2rem]'>Let's Chat</button>
            </div>
            <img src='https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/care-art@2x.png' />
          </div>
        </div>
      </section>
      <section id="our-stack" className='hidden sm:block'>
        <div className="containers pt-[12rem]">
          <div className='text-center'>
            <h2 className='text-[2rem] text-white font-bold pt-[2rem]'>Our stack</h2>
          </div>
          <div className='mt-[4rem]'>
            <div className='grid grid-cols-5 justify-items-center'>
              <div className='flex flex-col gap-2 items-center'>
                <img alt="Swift" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/stack-swift.svg" />
                <span className='text-white text-[1rem]'>Swift</span>
              </div>
              <div className='flex flex-col gap-2 items-center'>
                <img alt="Objective C" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/stack-apple.svg" />
                <span className='text-white text-[1rem]'>Objective C</span>
              </div>
              <div className='flex flex-col gap-2 items-center'>
                <img alt="iOS SDK" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/stack-apple.svg" />
                <span className='text-white text-[1rem]'>iOS SDK</span>
              </div>
              <div className='flex flex-col gap-2 items-center'>
                <img alt="Java" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/stack-java.svg" />
                <span className='text-white text-[1rem]'>Java</span>
              </div>
              <div className='flex flex-col gap-2 items-center'>
                <img alt="Kotlin" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/stack-kotlin.svg" />
                <span className='text-white text-[1rem]'>Kotlin</span>
              </div>
            </div>
            <div className='grid grid-cols-4 justify-items-center mt-[2rem]'>
              <div className='flex flex-col gap-2 items-center'>
                <img alt="C++" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/stack-cpp.svg" />
                <span className='text-white text-[1rem]'>C++</span>
              </div>
              <div className='flex flex-col gap-2 items-center'>
                <img alt="Android SDK/NDK" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/stack-android.svg" />
                <span className='text-white text-[1rem]'>Android SDK/NDK</span>
              </div>
              <div className='flex flex-col gap-2 items-center'>
                <img alt="React Native" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/stack-react-native.svg" />
                <span className='text-white text-[1rem]'>React Native</span>
              </div>
              <div className='flex flex-col gap-2 items-center'>
                <img alt="Typescript" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/stack-ts.svg" />
                <span className='text-white text-[1rem]'>Typescript</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="app-types" className='py-[4rem]'>
        <div className="containers">
          <div className='text-center'>
            <h2 className='text-[2rem] text-white font-bold pt-[2rem]'>Application types</h2>
          </div>
          <div className='max-w-[1220px] mx-auto mt-[3rem]'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2rem]'>
              <div className='flex items-center gap-[2rem] p-[1.5rem] bg-[#1e273f]'>
                <img alt="Fintech and banking" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/app-types-1.svg" />
                <h3 className='text-white text-[1rem] font-[800]'>Fintech and banking</h3>
              </div>
              <div className='flex items-center gap-[2rem] p-[1.5rem] bg-[#1e273f]'>
                <img alt="Marketplace" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/app-types-2.svg" />
                <h3 className='text-white text-[1rem] font-[800]'>Marketplace</h3>
              </div>
              <div className='flex items-center gap-[2rem] p-[1.5rem] bg-[#1e273f]'>
                <img alt="eCommerce" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/app-types-3.svg" />
                <h3 className='text-white text-[1rem] font-[800]'>eCommerce</h3>
              </div>
              <div className='flex items-center gap-[2rem] p-[1.5rem] bg-[#1e273f]'>
                <img alt="Delivery and taxi" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/app-types-4.svg" />
                <h3 className='text-white text-[1rem] font-[800]'>Delivery and taxi</h3>
              </div>
              <div className='flex items-center gap-[2rem] p-[1.5rem] bg-[#1e273f]'>
                <img alt="Health and medical" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/app-types-5.svg" />
                <h3 className='text-white text-[1rem] font-[800]'>Health and medical</h3>
              </div>
              <div className='flex items-center gap-[2rem] p-[1.5rem] bg-[#1e273f]'>
                <img alt="Business" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/app-types-6.svg" />
                <h3 className='text-white text-[1rem] font-[800]'>Business</h3>
              </div>
              <div className='flex items-center gap-[2rem] p-[1.5rem] bg-[#1e273f]'>
                <img alt="Fitness and lifestyle" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/app-types-7.svg" />
                <h3 className='text-white text-[1rem] font-[800]'>Fitness and lifestyle</h3>
              </div>
              <div className='flex items-center gap-[2rem] p-[1.5rem] bg-[#1e273f]'>
                <img alt="Entertainment" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/app-types-8.svg" />
                <h3 className='text-white text-[1rem] font-[800]'>Entertainment</h3>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2rem] mt-[2rem] items-center max-w-[990px] mx-auto'>
            <div className='flex items-center gap-[2rem] p-[1.5rem] bg-[#1e273f]'>
              <img alt="Social apps" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/app-types-9.svg" />
              <h3 className='text-white text-[1rem] font-[800]'>Social apps</h3>
            </div>
            <div className='flex items-center gap-[2rem] p-[1.5rem] bg-[#1e273f]'>
              <img alt="Communications" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/app-types-10.svg" />
              <h3 className='text-white text-[1rem] font-[800]'>Communications</h3>
            </div>
            <div className='flex items-center gap-[2rem] p-[1.5rem] bg-[#1e273f]'>
              <img alt="IoT" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/app-types-11.svg" />
              <h3 className='text-white text-[1rem] font-[800]'>IoT</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="launch">
        <div className="containers">
          <div className='xs:px-[1rem] px-[4rem]'>
            <div className='max-w-[600px] relative z-30'>
              <h2 className='text-[2rem] text-white font-bold pt-[2rem]'>Launch</h2>
              <p className='text-white text-[1rem] font-[400] py-[1rem]'>Launching your application is a critical task that requires careful, upfront planning. Many developers overlook crucial steps that can delay a launch. But launch support is one of Diffco’s core competencies and a vital value-added service.</p>
              <button className='bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl px-[1.75rem] hover:bg-[#2f4ded] text-sm mt-[2rem]'>Let's Chat</button>
            </div>
            <div className='mt-[4rem] grid grid-cols-1 lg:grid-cols-2 gap-[2rem] relative z-30'>
              <div className="flex flex-col md:flex-row md:items-start gap-[1rem] p-[1.5rem] rounded-xl items-center" style={{ background: "rgba(248,251,255,.04)" }}>
                <div className='md:w-[600px]'>
                  <img alt="Google play, App Store" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/launch-1.svg" />
                </div>
                <div>
                  <h3 className='text-[1.5rem] text-white font-extrabold mt-[1rem] text-center md:text-start'>Google Play/Apple App Store</h3>
                  <p className='text-[#b1a4a5] text-[1rem] font-[400] py-[1rem] text-center md:text-start'>We know how to organize and manage the entire launch process with Google and Apple. We help you prepare everything you need to publish your app, meet compliance requirements, set up the distribution infrastructure, and establish all necessary external accounts. We know how to get it right the first time, so you can focus on growing revenue instead of fixing launch issues.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-start gap-[1rem] p-[1.5rem] rounded-xl items-center" style={{ background: "rgba(248,251,255,.04)" }}>
                <div className='md:w-[600px]'>
                  <img alt="CI/CD for deployment" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/launch-2.svg" />
                </div>
                <div>
                  <h3 className='text-[1.5rem] text-white font-extrabold mt-[1rem] text-center md:text-start'>CI/CD for deployment</h3>
                  <p className='text-[#b1a4a5] text-[1rem] font-[400] py-[1rem] text-center md:text-start'>Product development doesn’t end with launch. We apply the best practice of continuous integration and continuous delivery (CI/CD) to optimize your ongoing product releases, incorporating what we learn along the way. The CI/CD process reduces the risk of product downtime and lowers the cost of new releases.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      <section id="faq" className='py-[5rem]'>
        <div className="containers">
          <div className='text-center'>
            <h2 className='text-[2rem] text-white font-bold pt-[2rem]'>FAQ</h2>
          </div>
          <div>
            <div className="faq-wrapper">
              {faq.map((item) => (
                <div key={item.id}>
                  <div className='question flex items-center justify-between gap-4 py-[2.5rem]'>
                    <h3 className='text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] text-white font-extrabold'>{item.question}</h3>
                    <button onClick={() => handleClick(item.id)} className='bg-transparent cursor-pointer'>
                      <BsPlusLg color='#f8b000' size={30} />
                    </button>
                  </div>
                  <div className={activeItems[item.id] ? 'answer active' : 'answer'}>
                    <p className='text-[1rem] text-white'>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="get-started">
        <div className='containers grid grid-cols-1 md:grid-cols-2 mt-[5rem] gap-[4rem]'>
          <div className='flex flex-col justify-around'>
            <div>
              <h3 className='text-[2.5rem] text-white font-extrabold'>
                Let’s build something <br />
                great together
              </h3>
              <p className='text-[1.125rem] text-white font-normal'>
                We believe in turning ideas into reality and we're ready to join your journey. Reach out to us and let's start discussing your project.
              </p>
            </div>
            <img alt="Diffco Logo" src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/solution-ai/diffco-logo-transparent.png" className='w-[100px] pt-[3rem]' />
          </div>
          <div>
            <form data-hs-cf-bound="true">
              <div className='grid xs:grid-cols-1 grid-cols-2 gap-[2rem]'>
                <div className='flex flex-col gap-2 items-start'>
                  <label className='text-[1rem] font-bold text-white' htmlFor="contact-name">First name</label>
                  <input className='w-full bg-transparent border-[#7795ff] border-[1px] p-[0.75rem] rounded-md' id="contact-name" name="name" placeholder="" type="text" />
                </div>
                <div className='flex flex-col gap-2 items-start'>
                  <label className='text-[1rem] font-bold text-white' htmlFor="contact-lastName">Last name</label>
                  <input className='w-full bg-transparent border-[#7795ff] border-[1px] p-[0.75rem] rounded-md' id="contact-lastName" name="lastName" placeholder="" type="text" />
                </div>
              </div>
              <div className='flex flex-col gap-2 items-start mt-[1rem]'>
                <label className='text-[1rem] font-bold text-white' htmlFor="contact-companyName">Company name (optional)</label>
                <input className='w-full bg-transparent border-[#7795ff] border-[1px] p-[0.75rem] rounded-md' id="contact-companyName" name="companyName" placeholder="" type="text" />
              </div>
              <div className='grid xs:grid-cols-1 grid-cols-2 gap-[2rem]'>
                <div className='flex flex-col gap-2 items-start'>
                  <label className='text-[1rem] font-bold text-white' htmlFor="contact-email">Work email</label>
                  <input className='w-full bg-transparent border-[#7795ff] border-[1px] p-[0.75rem] rounded-md' id="contact-email" name="email" placeholder="" type="text" />
                </div>
                <div className='flex flex-col gap-2 items-start'>
                  <label className='text-[1rem] font-bold text-white' htmlFor="contact-phone">Phone number</label>
                  <input className='w-full bg-transparent border-[#7795ff] border-[1px] p-[0.75rem] rounded-md' data-no-placeholder="true" id="contact-phone" name="phone" placeholder=" " type="tel" />
                </div>
              </div>
              <div className='flex flex-col gap-2 items-start mt-[1rem]'>
                <label className='text-[1rem] font-bold text-white' htmlFor="contact-story">Tell us about your project (optional)</label>
                <textarea id="contact-story" name="story" type="text" className='w-full bg-transparent border-[#7795ff] border-[1px] p-[0.75rem] rounded-md' />
              </div>
              <div className='flex items-center gap-4 mt-[2rem]'>
                <button type="submit" className='flex items-center justify-center gap-2 bg-white text-black w-[350px] rounded-[12px]'>Send request <HiArrowLongRight size={30} /></button>
                <div>
                  <p className='text-sm font-normal text-[#8d90f7] pl-[2rem]'>By sending this form I confirm that I have read and accept the Privacy Policy.</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main >
  )
}

export default page