import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white flex items-center justify-between px-[5%] h-16">
      <Link href="/" className="flex items-center gap-3 no-underline">
        <Image
          src="/logo.png"
          alt="IGNOU Online Logo"
          width={120}
          height={40}
          className="object-contain h-12 w-auto"
          priority
        />
      </Link>

      <a
        href="#hero-form"
        className="bg-[#f46f1a] hover:bg-[#d95e0d] text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-all duration-150 whitespace-nowrap inline-block"
      >
        Talk to a Counsellor — Free
      </a>
    </nav>
  )
}
