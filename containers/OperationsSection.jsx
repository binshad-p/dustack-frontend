import React from "react";
import Image from "next/image";

const OperationsSection = () => {
  return (
    <section className="w-full padding-x py-20 bg-[#F7FAFC] flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-3 text-secondary md:leading-16">
        Everything You Need to Run
        <br />
        Smarter Operations
      </h2>
      <p className="text-[#6A7A7F] text-2xl text-center mb-12 max-w-3xl">
        Powerful features designed to help your team work smarter, not harder
      </p>
      <div className="w-full  flex flex-col gap-8 mt-10">
        <div className="flex flex-row gap-7 w-full">
          <div
            className="bg-[#DEE2FF]    rounded-2xl  p-6 flex flex-col shadow-sm"
            style={{ width: "60%" }}
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
                className="w-full h-[100px] absolute bottom-0 left-0 
  bg-gradient-to-t
  from-[#DEE2FF]
  via-[#DEE2FFC0]
  to-[#f7fafc44]
  rounded-b-2xl"
              />
            </div>
            <h3 className="text-black font-semibold text-2xl mb-1 pt-10">
              Consumable and Capital resource management
            </h3>
            <p className="text-gray-600 text-sm">
              Manage reusable assets and consumable materials with clear
              visibility across inventory and projects, ensuring accurate
              tracking and better control.
            </p>
          </div>

          <div
            className="bg-[#D0E5FE]  rounded-2xl p-6 flex flex-col shadow-sm"
            style={{ width: "40%" }}
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
                className="w-full h-[100px] absolute bottom-0 left-0 
  bg-gradient-to-t 
  from-[#D0E5FE] 
  via-[#d4e3f8e0] 
  to-[#f7fafc44] 
  rounded-b-2xl"
              />
            </div>
            <h3 className="text-black font-semibold text-2xl mb-1 pt-10">
              Project Management
            </h3>
            <p className="text-gray-600 text-sm">
              Plan and track active projects by monitoring assigned mechanics,
              resource usage, and overall project costs from start to
              completion.
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-7 w-full">
          <div
            className="bg-[#FEF2D0]  rounded-2xl p-6 flex flex-col shadow-sm"
            style={{ width: "40%" }}
          >
            <div className="relative">
              <Image
                src="/supplier management.png"
                alt="Supplier Management"
                width={540}
                height={300}
                className="w-full h-[300px] object-cover rounded-xl rounded-b-none mb-4 object-left object-top"
              />
              <div className="w-full h-[100px] absolute bottom-0 left-0 bg-gradient-to-t from-[#FEF2D0] via-[#FEF2D0C0] to-[#f7fafc44] rounded-b-2xl" />
            </div>
            <h3 className="text-black font-semibold text-2xl mb-1 pt-10">
              Supplier Management
            </h3>
            <p className="text-gray-600 text-sm">
              Maintain a structured list of suppliers and link resources
              directly to them for improved traceability and smoother
              procurement processes.
            </p>
          </div>

          <div
            className="bg-[#D8FFDE]  rounded-2xl p-6 flex flex-col shadow-sm"
            style={{ width: "60%" }}
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
                className="w-full h-[100px] absolute bottom-0 left-0
            bg-gradient-to-t
  from-[#D8FFDE]
  via-[#D8FFDEC0]
  to-[#f7fafc44]
  rounded-b-2xl"
              />
            </div>
            <h3 className="text-black font-semibold text-2xl mb-1 pt-10">
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
