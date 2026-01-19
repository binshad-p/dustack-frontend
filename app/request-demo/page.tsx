import Image from 'next/image';

const testimonials = [
  {
    text: 'Tracking consumables and reusable assets separately has helped us plan better and avoid last-minute shortages. Operations feel far more controlled now.',
    name: 'Michael Thomas',
    company: 'SteelCore Manufacturing Services',
    avatar: '/person_1.svg',
  },
  {
    text: 'Dustack has finally given us visibility into how materials are used. We no longer depend on Excel to understand what’s happening inside projects.',
    name: 'Anita George',
    company: 'Torque Dynamics Industries',
    avatar: '/person_2.svg',
  },
];

export default function RequestDemo() {
  return (
    <div className="bg-[#f7fafd] min-h-screen py-10 px-2">
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm mb-6 text-[#4D595D]">
          <span>Home</span> <span className="mx-1">&gt;</span> <span className="text-primary font-medium">Request Demo</span>
        </nav>
        <h1 className="text-4xl font-bold text-center mb-2 text-[#01212F]">Request a Demo</h1>
        <p className="text-center text-[#4D595D] mb-10 text-lg">See how Dustack can help your team improve visibility, reduce waste, and gain control over operations.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#e9f0ff] rounded-lg p-6 relative">
                <div className="text-3xl text-[#114366] mb-2">“</div>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, idx) => (
                    <svg key={idx} className="w-5 h-5 text-[#FFD600]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/></svg>
                  ))}
                </div>
                <p className="mb-4 text-[#01212F]">{t.text}</p>
                <div className="flex items-center gap-3 mt-4">
                  <Image src={t.avatar} alt={t.name} width={40} height={40} className="rounded-full" />
                  <div>
                    <div className="font-semibold text-[#01212F]">{t.name}</div>
                    <div className="text-xs text-[#4D595D]">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <form className="bg-white rounded-lg p-8 flex flex-col gap-4 shadow" method="POST" action="/api/request-demo">
            <input name="name" type="text" required placeholder="Full Name" className="border border-[#D1D5DB] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
            <input name="email" type="email" required placeholder="Work Email" className="border border-[#D1D5DB] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
            <input name="company" type="text" required placeholder="Company Name" className="border border-[#D1D5DB] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
            <input name="role" type="text" required placeholder="Job Role / Title" className="border border-[#D1D5DB] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
            <textarea name="message" required placeholder="Tell us brief about your requirement" className="border border-[#D1D5DB] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary min-h-[80px]" />
            <button type="submit" className="bg-[#009CF9] text-white font-semibold py-2 rounded hover:bg-[#007dc1] transition">Schedule My Demo</button>
            <div className="text-xs text-center text-[#4D595D] mt-2">No Spam. Our team will reach out within 24–48 hours</div>
          </form>
        </div>
      </div>
    </div>
  );
}
