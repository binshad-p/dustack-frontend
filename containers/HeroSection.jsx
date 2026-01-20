"use client";

import React from "react";
import Image from "next/image";
import { dashboard } from "@/public";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden padding-x">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#92D9FF] via-[#C5E2FF] via-[#FFEEB400] to-[#ffe28155]" />

      {/* Decorative Vectors */}
      <Image
        src="/vector_1.svg"
        alt="background curve"
        width={600}
        height={600}
        className="absolute left-0 xl:bottom-0 md:-bottom-[150px] bottom-[-200px]  z-0"
      />
      <Image
        src="/vector_1.svg"
        alt="background curve"
        width={400}
        height={400}
        className="absolute left-0 xl:bottom-0 z-0 md:-bottom-[100px] bottom-[-150px] "
      />

      <Image
        src="/vector_2.svg"
        alt="background curve"
        width={700}
        height={700}
        className="absolute right-0 xl:bottom-0 z-0 md:-bottom-[80px] bottom-[-50px]"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto pt-32 pb-16 px-4">
        
        {/* Badge */}
        <span className="bg-[#A6F4C5] border border-green-700 rounded-full px-4 py-1 md:py-2 flex items-center gap-2 text-[#1B2022] text-xs md:text-sm shadow-sm mb-6">
          <Image src="/tick.svg" alt="tick" width={18} height={18} />
          Powering 100+ business worldwide
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl  xl:text-6xl font-bold leading-tight mb-4 text-[#0B1C2D]">
          Your <span className="text-primary">Digital Backbone</span> for&nbsp;
          <br className=""/>
           Smarter Operations
        </h1>

        {/* Description */}
        <p className="text-[#475569] text-base md:text-lg xl:text-xl max-w-3xl">
          A modern, AI-ready software suite designed to streamline operations for
          engineering and manufacturing teams of any size.
        </p>

        {/* Buttons */}
        <div className="flex gap-2 md:gap-4 mt-8 md:mt-12">
          <button className="bg-primary hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition-all md:text-base text-sm">
            Request A Demo
          </button>

          <button className="bg-white hover:bg-blue-50 text-[#0B1C2D] font-semibold px-6 py-3 rounded-lg shadow transition-all">
            Platform Overview
          </button>
        </div>
      </div>

      {/* Dashboard Image */}
 <div className="relative z-10 flex justify-center lg:mt-16 md:mt-10 sm:mt-8 mt-6 "> <div className='md:mb-[-60px] mb-[-10px]' > <Image src={dashboard} alt="Dashboard Preview" width={1200} height={600} className="w-175 rounded-2xl shadow-2xl border border-gray-200" priority /> </div> </div>
    </section>
  );
};

export default HeroSection;
