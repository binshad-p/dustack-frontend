import React from "react";

import { company_logo_1,company_logo_2,company_logo_3,company_logo_4,company_logo_5 } from "@/public";
import Image from "next/image";
const companies = [
  { src: company_logo_1, alt: "ExxonMobil" },
  { src: company_logo_2, alt: "Palantir" },
  { src: company_logo_3, alt: "Pfizer" },
  { src: company_logo_4, alt: "Caterpillar" },
  { src: company_logo_5, alt: "Freeza" },
];

const CompaniesSection = () => {
  return (
    <section className="w-full md:py-20 py-16 bg-white flex flex-col items-center justify-center padding-x">
      <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl   font-bold text-center mb-8">
        <span className="text-secondary">Trusted by more than<br /> <span className="text-primary">100+ companies</span> around the world</span>
      </h2>
      <div className="flex flex-wrap justify-center items-center md:gap-10 gap-5 w-full  mx-auto">
        {companies.map((company, idx) => (
          <div key={idx} className="flex items-center justify-center xl:max-w-[170px] max-w-[150px] " >
            <Image
              src={company.src}
              alt={company.alt}
              width={180}
              height={80}
              className="h-14 md:h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompaniesSection;
