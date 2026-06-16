import Image from 'next/image'
import { Mail, MapPin } from 'lucide-react'
import Link from 'next/link'

const QUICK_LINKS = [
  { label: 'About Us', href: 'https://educollege.in/about' },
  { label: 'Contact Us', href: 'https://educollege.in/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#01345e] border-t border-white/10">

      {/* Main */}
      <div className="px-[5%] py-16 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">

        {/* Brand */}
        <div className="flex flex-col gap-5">
          <Image
            src="/logo-cloured.svg"
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
            {QUICK_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm text-[#b0c8d8] hover:text-white font-medium transition-colors duration-150"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[11px] font-black text-[#f46f1a] tracking-widest uppercase mb-5">Contact Support</p>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3 text-sm text-[#b0c8d8] font-medium">
              <MapPin size={15} className="text-[#01507c] shrink-0 mt-0.5" />
              <span>EduCollege Counseling Hub, Dadri,<br />Uttar Pradesh, India – 203207</span>
            </li>
            <li>
              <a
                href="mailto:info@educollge.in"
                className="flex items-center gap-3 text-sm text-[#b0c8d8] hover:text-white font-medium transition-colors duration-150"
              >
                <Mail size={15} className="text-[#01507c] shrink-0" />
                info@educollge.in
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Disclaimer */}
      <div className="border-t border-white/10 px-[5%] py-6 max-w-6xl mx-auto">
        <p className="text-xs text-[#b0c8d8]/60 leading-relaxed">
          Disclaimer: EduCollege is an independent, privately-owned counseling
          platform. We are NOT affiliated with, endorsed by, or sponsored by
          Indira Gandhi National Open University (IGNOU) or any government
          entity. Our services are limited to application guidance and
          document verification. We DO NOT guarantee admission, seat
          allocation, or degree approval—all final decisions rest solely with
          IGNOU. Our counseling fees are separate from the official IGNOU
          university application fee. For direct, free applications, please
          visit the official IGNOU portal at{" "}
          <a
            href="https://ignou.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#b0c8d8]"
          >
            ignou.ac.in
          </a>
          . By using our site, you agree to our{" "}
          <Link href="https://educollege.in/privacy-policy" className="underline hover:text-[#b0c8d8]">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="https://educollege.in/terms-of-service" className="underline hover:text-[#b0c8d8]">
            Terms of Service
          </Link>
          . See also our{" "}
          <Link href="https://educollege.in/refund-policy" className="underline hover:text-[#b0c8d8]">
            Refund Policy
          </Link>
          .
        </p>
      </div>

    </footer>
  )
}