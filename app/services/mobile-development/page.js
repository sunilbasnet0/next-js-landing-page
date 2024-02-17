import React from 'react'
import "../../styles/mobileDevelopment.css"

const page = () => {
  return (
    <main className='py-[7rem] '>
      <section className='hero-section py-[3rem]'>
        <div className='containers'>
          <div className='flex flex-col items-center justify-center'>
            <p className='bg-white px-[1.25rem] capitalize text-[1rem] font-bold border-[2px] border-[#000] py-[0.75rem] rounded-[2rem]'>Mobile Development</p>
            <h3 className='pt-[3rem] text-[2.75rem] text-white font-bold text-center max-w-[900px] mx-auto leading-[3rem] '>
              Diffco specializes in native <br />
              and cross-platform mobile application
              development for iOS and Android
            </h3>
            <p className='pt-[2rem] text-[1.125rem] text-white font-normal text-center max-w-[750px] mx-auto leading-[2rem] '>
              Our mobile development team is fluent in the mobile guidelines, UI standards, and best practices of Apple and Google. With our extensive experience, we see to every detail to make your apps powerful, user-friendly, and successful.</p>
            <button className='bg-[#2642be] rounded-xl mt-[2rem] px-[2rem]'>Let's Chat</button>
            <div className='mt-[2rem] flex items-center gap-[2rem]'>
              <div className='flex items-center gap-3'>
                <img src='https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/ios.svg' />
                <p className='text-white text-[1.125rem] font-medium'>Native iOS</p>
              </div>
              <hr className='w-[1px] h-[32px] bg-[#6b5e91] border-none' />
              <div className='flex items-center gap-3'>
                <img src='https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/android.svg' />
                <p className='text-white text-[1.125rem] font-medium'>Native Android</p>
              </div>
              <hr className='w-[2px] h-[30px] bg-[#6b5e91] border-none' />
              <div className='flex items-center gap-3'>
                <img src='https://diffco.us/wp-content/themes/diffconew/static-template/build/images/service/react-native.svg' />
                <p className='text-white text-[1.125rem] font-medium'>Native iOS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default page