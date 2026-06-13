import Image from 'next/image'
import { Phone, Mail } from 'lucide-react'

const QUICK_LINKS = [
  'Admission Process',
  'Fee Details',
  'Specializations',
  'Contact Us',
]

export default function Footer() {
  return (
    <footer className="bg-[#041e2e] border-t border-[#01507c]/30">

      {/* Main */}
      <div className="px-[5%] py-16 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">

        {/* Brand */}
        <div className="flex flex-col gap-5">
          <Image
            src="/logo.png"
            alt="IGNOU Online Logo"
            width={160}
            height={40}
            className="object-contain h brightness-0 invert"
          />

          <p className="text-sm text-[#b0c8d8] leading-relaxed">
            Providing world-class digital education for over 30 years. Empowering millions through accessible, flexible, and accredited degree programs.
          </p>

          <div>
            <p className="text-[11px] font-black text-[#f46f1a] tracking-widest uppercase mb-2">Office Location</p>
            <p className="text-sm text-[#b0c8d8] leading-relaxed font-medium">
              EduCollege Counseling Hub, Dadri,<br />Uttar Pradesh, India – 203207
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-[11px] font-black text-[#f46f1a] tracking-widest uppercase mb-5">Quick Links</p>
          <ul className="flex flex-col gap-3">
            {QUICK_LINKS.map((link) => (
              <li key={link}>
                <a                
                  href="#"
                  className="text-sm text-[#b0c8d8] hover:text-white font-medium transition-colors duration-150"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        {/* <div>
          <p className="text-[11px] font-black text-[#f46f1a] tracking-widest uppercase mb-5">Contact Support</p>
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-center gap-3 text-sm text-[#b0c8d8] hover:text-white font-medium transition-colors duration-150"
              >
                <Phone size={15} className="text-[#01507c] shrink-0" />
                +91-XXXX-XXXXXX
              </a>
            </li>
            <li>
              <a
                href="mailto:admissions@ignou-online.in"
                className="flex items-center gap-3 text-sm text-[#b0c8d8] hover:text-white font-medium transition-colors duration-150"
              >
                <Mail size={15} className="text-[#01507c] shrink-0" />
                admissions@ignou-online.in
              </a>
            </li>
          </ul>
        </div> */}

      </div>

      {/* Disclaimer */}
      <div className="border-t border-[#01507c]/20 px-[5%] py-6 max-w-6xl mx-auto">
        <p className="text-xs text-[#b0c8d8]/60 leading-relaxed">
          Disclaimer: EduCollege is an independent counseling platform and is not the official website of IGNOU. We provide professional counseling services to help students navigate the admission process for IGNOU Online programs. All final admission decisions and degree certifications are handled exclusively by Indira Gandhi National Open University. For direct applications, please visit the official university portal.
        </p>
      </div>

      {/* Bottom Bar */}
      {/* <div className="border-t border-[#01507c]/20 px-[5%] py-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-[#b0c8d8]/50 font-medium uppercase tracking-wide">
            © 2024 IGNOU Online powered by EduCollege. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Use', 'Disclaimer'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[11px] text-[#b0c8d8]/50 hover:text-white font-semibold uppercase tracking-wide transition-colors duration-150"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div> */}

    </footer>
  )
}