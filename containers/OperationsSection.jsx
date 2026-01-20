import React from "react";
import Image from "next/image";

const OperationsSection = () => {
  return (
    <section className="w-full padding-x md:py-20 py-16 bg-[#F7FAFC] flex flex-col items-center justify-center">
      <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-center mb-3 text-secondary xl:leading-16 lg:leading-12">
        Everything You Need to Run
        <br />
        Smarter Operations
      </h2>
      <p className="text-[#6A7A7F] xl:xl:text-2xl lg:text-xl  text-center mb-12 max-w-3xl">
        Powerful features designed to help your team work smarter, not harder
      </p>
      <div className="w-full  flex flex-col xl:gap-8 gap-5 xl:mt-10 lg:mt-6">
        <div className="flex md:flex-row flex-col xl:gap-7 gap-5  w-full">
          <div
            className="bg-[#DEE2FF]    rounded-2xl  xl:p-6 md:p-4 p-5 flex flex-col shadow-sm md:w-[60%] w-full"
          >
            <div className="relative">
              <Image
                src="/resources_management.png"
                alt="Consumable and Capital resource management"
                width={540}
                height={300}
                className="w-full h-[300px] object-cover rounded-xl rounded-b-none  mb-4 object-left object-top"
              />
              <div
                className="w-full xl:h-[100px] md:h-[80px] h-[50px] absolute bottom-0 left-0 
  bg-gradient-to-t
  from-[#DEE2FF]
  via-[#DEE2FFC0]
  to-[#f7fafc44]
  rounded-b-2xl"
              />
            </div>
            <h3 className="text-black font-semibold xl:text-2xl lg:text-xl  mb-1 xl:pt-10 lg:pt-5">
              Consumable and Capital resource management
            </h3>
            <p className="text-gray-600 text-sm">
              Manage reusable assets and consumable materials with clear
              visibility across inventory and projects, ensuring accurate
              tracking and better control.
            </p>
          </div>

          <div
            className="bg-[#D0E5FE]  rounded-2xl xl:p-6 md:p-4 p-5 flex flex-col shadow-sm md:w-[40%] w-full"
          >
            <div className="relative">
              <Image
                src="/project_management.png"
                alt="Project Management"
                width={540}
                height={300}
                className="w-full h-[300px] object-cover rounded-xl rounded-b-none mb-4 object-left object-top"
              />
              <div
                className="w-full xl:h-[100px] md:h-[80px] h-[50px] absolute bottom-0 left-0 
  bg-gradient-to-t 
  from-[#D0E5FE] 
  via-[#d4e3f8e0] 
  to-[#f7fafc44] 
  rounded-b-2xl"
              />
            </div>
            <h3 className="text-black font-semibold xl:text-2xl lg:text-xl mb-1 xl:pt-10 lg:pt-5">
              Project Management
            </h3>
            <p className="text-gray-600 text-sm">
              Plan and track active projects by monitoring assigned mechanics,
              resource usage, and overall project costs from start to
              completion.
            </p>
          </div>
        </div>

        <div className="flex md:flex-row flex-col xl:gap-7 gap-5 w-full">
          <div
            className="bg-[#FEF2D0]  rounded-2xl xl:p-6 md:p-4 p-5 flex flex-col shadow-sm md:w-[40%] w-full"
          >
            <div className="relative">
              <Image
                src="/supplier management.png"
                alt="Supplier Management"
                width={540}
                height={300}
                className="w-full h-[300px] object-cover rounded-xl rounded-b-none mb-4 object-left object-top"
              />
              <div className="w-full xl:h-[100px] md:h-[80px] h-[50px] absolute bottom-0 left-0 bg-gradient-to-t from-[#FEF2D0] via-[#FEF2D0C0] to-[#f7fafc44] rounded-b-2xl" />
            </div>
            <h3 className="text-black font-semibold xl:text-2xl lg:text-xl mb-1 xl:pt-10 lg:pt-5">
              Supplier Management
            </h3>
            <p className="text-gray-600 text-sm">
              Maintain a structured list of suppliers and link resources
              directly to them for improved traceability and smoother
              procurement processes.
            </p>
          </div>

          <div
            className="bg-[#D8FFDE]  rounded-2xl xl:p-6 md:p-4 p-5 flex flex-col shadow-sm md:w-[60%] w-full"
          >
            <div className="relative">
              <Image
                src="/report.png"
                alt="Intelligent Reporting"
                width={540}
                height={300}
                className="w-full h-[300px] object-cover rounded-xl rounded-b-none mb-4 object-left object-top"
              />
              <div
                className="w-full xl:h-[100px] md:h-[80px] h-[50px] absolute bottom-0 left-0
            bg-gradient-to-t
  from-[#D8FFDE]
  via-[#D8FFDEC0]
  to-[#f7fafc44]
  rounded-b-2xl"
              />
            </div>
            <h3 className="text-black font-semibold xl:text-2xl lg:text-xl mb-1 xl:pt-10 lg:pt-5">
              Intelligent Reporting
            </h3>
            <p className="text-gray-600 text-sm">
              Generate meaningful reports on inventory movement, project costs,
              and resource utilization to support informed decision-making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsSection;
