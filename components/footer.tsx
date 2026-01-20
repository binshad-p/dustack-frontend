import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#01212F] text-white pt-16 pb-8 padding-x ">
      <div className="grid md:grid-cols-5 gap-10 items-start">
        <div>
          <h4 className="font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-[#A3B3BC] text-sm">
            <li>Home</li>
            <li>Products</li>
            <li>How It Works</li>
            <li>Pricing</li>
            <li>Request Demo</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-[#A3B3BC] text-sm">
            <li>FAQ</li>
            <li>Support</li>
            <li>Features</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-[#A3B3BC] text-sm">
            <li>Email Us</li>
            <li>Call Us</li>
            <li>Location</li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start col-span-2">
          <Image src="/logo_white.svg" alt="Dustack Logo" width={120} height={40} className="lg:mb-14 mb-6" />
          <div className="bg-[#003049] rounded-lg p-4 w-full ">
            <h5 className="font-semibold mb-4 text-2xl">Dustack Pvt Ltd.</h5>
            <p className="text-sm text-[#A3B3BC]">A modern operational software platform built for engineering and manufacturing teams to manage projects, inventory, and resources with clarity and control.</p>
          </div>
        </div>
      </div>
      <hr className="my-12 border-[#1B3A4B]" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[#A3B3BC]">
        <span className="text-xs">© Dustack Pvt Ltd. All rights reserved.</span>
        <div className="flex gap-8 text-xs">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Cookies</span>
        </div>
        <div className="flex gap-4">
          <a href="#" aria-label="LinkedIn" className="hover:text-white"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.102-.021-2.521-1.537-2.521-1.537 0-1.773 1.201-1.773 2.441v4.684h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v4.729z"/></svg></a>
          <a href="#" aria-label="Facebook" className="hover:text-white"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.713c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.314h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.593 1.325-1.326v-21.349c0-.733-.592-1.326-1.325-1.326z"/></svg></a>
          <a href="#" aria-label="Twitter" className="hover:text-white"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.924 2.206-4.924 4.924 0 .386.044.763.127 1.124-4.09-.205-7.713-2.165-10.141-5.144-.424.729-.666 1.577-.666 2.483 0 1.713.872 3.229 2.197 4.117-.809-.026-1.57-.248-2.236-.616v.062c0 2.393 1.702 4.393 3.965 4.846-.415.113-.853.174-1.304.174-.319 0-.626-.031-.928-.089.627 1.956 2.444 3.377 4.6 3.417-1.685 1.32-3.808 2.107-6.115 2.107-.398 0-.79-.023-1.175-.069 2.179 1.397 4.768 2.215 7.557 2.215 9.054 0 14.009-7.504 14.009-14.009 0-.213-.005-.425-.014-.636z"/></svg></a>
        </div>
      </div>
    </footer>
  );
}
