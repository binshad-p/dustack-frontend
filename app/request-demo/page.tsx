import Image from "next/image";

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

export default function RequestDemo() {
  return (
    <div className="bg-[#f7fafd] min-h-screen pt-36 pb-16 padding-x ">
      <div className="">
        {/* <nav className="text-sm mb-6 text-[#4D595D]">
          <span>Home</span> <span className="mx-1">&gt;</span> <span className="text-primary font-medium">Request Demo</span>
        </nav> */}
        <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl   font-bold text-center mb-8">
          Request a Demo
        </h1>
        <p className="text-center text-[#4D595D] mb-10 text-lg">
          See how Dustack can help your team improve visibility, reduce waste,
          and gain control over operations.
        </p>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex flex-col h-full gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`rounded-md text-sm-lg p-8 h-full relative ${i === 0 ? "bg-[#EDEFFF]" : "bg-[#E6F2FF]"}`}
              >
                <div className="text-3xl text-[#114366] mb-2">
                  {" "}
                  <Image
                    src={"/coma.svg"}
                    alt={"icon"}
                    width={20}
                    height={20}
                  />
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
                    className="rounded-md text-sm-full"
                  />
                  <div>
                    <div className="font-semibold text-[#01212F]">{t.name}</div>
                    <div className="text-xs text-[#4D595D]">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <form
            className="bg-white rounded-md text-sm-lg p-8 flex flex-col gap-4 shadow"
            method="POST"
            action="/api/request-demo"
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm font-medium text-[#272727] mb-1">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your full name"
                className="border border-[#A9C2CA] rounded-md text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-medium text-[#272727] mb-1">Work Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your work email address"
                className="border border-[#A9C2CA] rounded-md text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="company" className="text-sm font-medium text-[#272727] mb-1">Company Name</label>
              <input
                id="company"
                name="company"
                type="text"
                required
                placeholder="Enter your company name"
                className="border border-[#A9C2CA] rounded-md text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="role" className="text-sm font-medium text-[#272727] mb-1">Job Role / Title</label>
              <input
                id="role"
                name="role"
                type="text"
                required
                placeholder="Enter your job role"
                className="border border-[#A9C2CA] rounded-md text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-sm font-medium text-[#272727] mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell us brief about your requirement"
                className="border border-[#A9C2CA] rounded-md text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary min-h-[80px]"
              />
            </div>
            <button
              type="submit"
              className="bg-[#03A3E5] text-white font-semibold py-2 rounded-md text-lg hover:bg-[#007dc1] transition"
            >
              Schedule My Demo
            </button>
            <div className="text-xs text-center text-[#4D595D] mt-2">
              No Spam. Our team will reach out within 24–48 hours
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
