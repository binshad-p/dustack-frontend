import React from 'react'
import { dashboard } from "@/public";
import Image from 'next/image';


const HeroSection = () => {
  return (
    <section className="relative w-full  flex flex-col items-center justify-center bg-gradient-to-br from-[#e6f0ff] via-[#f7fafd] to-[#fffbe6] overflow-hidden ">
        <div className='mt-12'>

      <div className="relative z-20 flex flex-col items-center mt-20 mb-10 px-4 text-center max-w-3xl">
        <span className="bg-[#A6F4C5] border flex justify-center items-center gap-2 border-green-700 rounded-full px-4 py-2 text-[#1B2022] text-[15px]   shadow-sm mb-4"> <Image src="/tick.svg" alt="icon" width={25} height={25}  /> Powering 100+ business worldwide</span>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-2">
          Your <span className="text-blue-500">Digital Backbone</span> for<br />
          Smarter Operations
        </h1>
        <p className="text-secondary text-lg md:text-2xl ">
          A modern, AI-ready software suite designed to streamline operations for engineering and manufacturing teams of any size.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <button className="bg-primary hover:bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow transition-all duration-300 cursor-pointer">
            Request A Demo
          </button>
          <button className="bg-white cursor-pointer text-secondary hover:bg-blue-50 text-lg font-semibold   px-6 py-3 rounded-lg shadow transition-all">
            Platform Overview
          </button>
        </div>
      </div>
        </div>
    
      <div className="relative z-10 flex justify-center  mt-16">
        <div style={{ marginBottom: '-60px' }}>
          <Image
            src={dashboard}
            alt="Dashboard Preview"
            width={1200}
            height={600}
            className="w-175  rounded-2xl shadow-2xl border border-gray-200"
            priority
          />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="absolute left-0 top-0 w-full h-full" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80%" cy="10%" r="180" fill="#e6f0ff" fillOpacity="0.3" />
          <circle cx="10%" cy="90%" r="120" fill="#fffbe6" fillOpacity="0.3" />
        </svg>
      </div>
    </section>
  );
}

export default HeroSection