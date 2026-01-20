import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";

const testimonials = [
  {
    text: "Tracking consumables and reusable assets separately has helped us plan better and avoid last-minute shortages. Operations feel far more controlled now.",
    name: "Michael Thomas",
    company: "SteelCore Manufacturing Services",
    avatar: "/person_1.svg",
  },
  {
    text: "Dustack has finally given us visibility into how materials are used. We no longer depend on Excel to understand what’s happening inside projects.",
    name: "Anita George",
    company: "Torque Dynamics Industries",
    avatar: "/person_2.svg",
  },
];


const Testimonials = () => (
  <div className=" flex justify-center items-center md:py-20 py-10">
    <div className="h-full w-full ">
      <div className="flex justify-center items-center">
        <span className="bg-[#1B2022] flex items-center justify-center gap-2 text-center rounded-full py-2 px-4 text-[#fff] text-[15px] shadow-sm mb-4">
          {" "}
          <Image src="/star.svg" alt="icon" width={25} height={25} />
          Rated 4.5/5 by 100+ users
        </span>
      </div>

      <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-center tracking-[-0.03em] px-6 text-pretty">
        Hear From Our Happy Customers..!!
      </h2>

      <div className="mt-14 relative">
        <div className="z-10 absolute left-0 inset-y-0 w-[15%] bg-linear-to-r from-background to-transparent" />
        <div className="z-10 absolute right-0 inset-y-0 w-[15%] bg-linear-to-l from-background to-transparent" />
        <Marquee pauseOnHover className="[--duration:60s]">
          <TestimonialList />
        </Marquee>
        <Marquee pauseOnHover reverse className="mt-0 [--duration:60s]">
          <TestimonialList />
        </Marquee>
      </div>
    </div>
  </div>
);

const TestimonialList = () => (
  <div className="flex gap-6">
    {testimonials.map((t, i) => (
      <div
        key={i}
        className={`rounded-md p-6 w-[400px] relative bg-gray-100`}
      >
        <div className="text-[#114366] mb-2">
          <Image src="/coma.svg" alt="icon" width={20} height={20} />
        </div>

        <div className="flex items-center my-5">
          {[...Array(5)].map((_, idx) => (
            <svg
              key={idx}
              className="w-5 h-5 text-[#FFD600]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
            </svg>
          ))}
        </div>

        <p className="mb-4 text-[#01212F]">{t.text}</p>

        <div className="flex items-center gap-3 mt-10">
          <Image
            src={t.avatar}
            alt={t.name}
            width={40}
            height={40}
            className="rounded-md"
          />
          <div>
            <div className="font-semibold text-[#01212F]">{t.name}</div>
            <div className="text-xs text-[#4D595D]">{t.company}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);




export default Testimonials;
