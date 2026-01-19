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
    <section className="w-full py-20 bg-white flex flex-col items-center justify-center">
      <h2 className="text-[48px] font-bold text-center mb-8">
        <span className="text-secondary">Trusted by more than<br /> <span className="text-primary">100+ companies</span> around the world</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 justify-items-center items-center w-full max-w-5xl mx-auto">
        {companies.map((company, idx) => (
          <div key={idx} className="flex items-center justify-center w-full" style={{ maxWidth: "180px" }}>
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
