'use client';

import Image from 'next/image';
import { useState } from 'react';

const faqs = [
  {
    question: 'What kind of support do you offer?',
    answer:
      'We offer 24/7 support via live chat, email, and phone to ensure your operations run smoothly.',
  },
  {
    question: 'Do you offer custom integrations?',
    answer: 'Yes, we provide custom integrations tailored to your business needs.',
  },
  {
    question: 'Is Dustack suitable for small teams as well as large operations?',
    answer:
      'Absolutely! Dustack is designed to scale with your business, whether you are a small team or a large enterprise.',
  },
  {
    question: 'Does Dustack show low-stock items?',
    answer: 'Yes, our platform provides real-time alerts for low-stock items.',
  },
  {
    question: 'Can supervisors track who used which resources?',
    answer:
      'Yes, supervisors can track resource usage and user activity in detail.',
  },
];

const supportOptions = [
  {
    icon: '/live_chat.svg',
    label: 'Live Chat',
    desc: 'Available 24/7',
  },
  {
    icon: '/email.svg',
    label: 'Email Us',
    desc: 'support@dustack.com',
  },
  {
    icon: '/call.svg',
    label: 'Call Sales',
    desc: '+91 - 7892327839',
  },
];

export default function FAQSection() {
  // First FAQ open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#f7fafd] md:py-16 py-10 padding-x">
      <div className="mx-auto flex flex-col md:flex-row lg:gap-10 gap-5 lg:items-center md:items-start">
        {/* FAQ LIST */}
        <div className=" lg:w-[70%] md:w-[60%] w-full">
          <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold mb-2 text-center md:text-left">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-[#4D595D] mb-8 xl:text-xl text-lg">
            Everything you need to know about Dustack
          </p>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
                  onClick={() =>
                    setOpenIndex(openIndex === idx ? null : idx)
                  }
                >
                  <span className="font-medium lg:text-xl text-lg">
                    {faq.question}
                  </span>

                  {/* Plus → Cross */}
                  <span
                    className={`ml-4 text-2xl text-gray-400 transition-transform duration-300 ${
                      openIndex === idx ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Animated Answer */}
                <div
                  className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === idx
                      ? 'max-h-40 opacity-100 pb-4'
                      : 'max-h-0 opacity-0 pb-0'
                  }`}
                >
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SUPPORT CARD */}
        <div className="bg-linear-to-br from-[#01212F] to-[#5479F7] rounded-xl xl:p-10 p-5 text-white shadow-lg lg:w-[30%] md:w-[40%] w-full">
          <h3 className="xl:text-2xl lg:text-xl font-semibold mb-2">
            Still have questions?
          </h3>
          <p className="mb-6 text-sm opacity-90">
            Our team is here to help. Reach out through your preferred channel
            and we’ll get back to you quickly.
          </p>

          <div className="space-y-5 mb-6">
            {supportOptions.map((option, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="lg:w-16 lg:h-16 w-10 h-10 bg-[#FFFFFF33] lg:p-4 p-2 rounded-md flex items-center justify-center">
                  <Image
                    src={option.icon}
                    alt={option.label}
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <div className="lg:text-xl text-base">{option.label}</div>
                  <div className="  opacity-80">
                    {option.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full bg-white text-black font-semibold py-2 rounded-lg shadow hover:bg-blue-50 transition">
            Contact Support Team
          </button>
        </div>
      </div>
    </section>
  );
}
