import { ShieldCheck, Home, CalendarCheck, PhoneCall, IndianRupee, Briefcase } from 'lucide-react'
import HeroForm from "../common/form/hero-form"

const BADGES = [
  { label: 'UGC-DEB Approved', active: false },
  { label: 'NAAC A+ Accredited', active: false },
  { label: '40 Lakh+ Students', active: false },
  { label: '2026 Admissions Open', active: true },
]

const FEATURES = [
  { Icon: ShieldCheck, text: 'UGC recognition as per latest guidelines' },
  { Icon: Home, text: 'No campus visit required for admission or exams' },
  { Icon: CalendarCheck, text: 'Flexible exams conducted in online mode' },
  { Icon: PhoneCall, text: 'Instant counsellor callback for admission help' },
  { Icon: IndianRupee, text: "Avail No Cost EMI's" },
  { Icon: Briefcase, text: 'Placement Assistance' },
]

const TRUST_PILLS = ['40L+ Students', 'NAAC A+', 'UGC-DEB', 'Affordable Fees', 'EMI Option']

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] bg-gradient-to-br from-[#01507c] via-[#01345e] to-[#011e38] grid grid-cols-1 lg:grid-cols-[1fr_430px] gap-10 items-center px-[5%] py-16 overflow-hidden">

      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center opacity-[0.12]"
        aria-hidden="true"
      />

      {/* Watermark */}
      <span className="absolute bottom-[-40px] left-[-20px] text-[220px] font-black text-white/5 select-none pointer-events-none leading-none tracking-tighter">
        IGNOU
      </span>

      {/* Left */}
      <div className="relative z-10">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-7">
          {BADGES.map((b) => (
            <span
              key={b.label}
              className={`px-3.5 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase border ${
                b.active
                  ? 'bg-[#f46f1a] border-[#f46f1a] text-white'
                  : 'border-white/30 text-[#b0d8ee]'
              }`}
            >
              {b.label}
            </span>
          ))}
        </div>

        {/* Headline */}
        <h1 className="text-4xl lg:text-6xl font-black text-white leading-[1.1] mb-2">
          IGNOU Online MBA,<br />BBA, MCA &amp; BCA
        </h1>
        <h2 className="text-4xl lg:text-6xl font-black text-[#f46f1a] leading-[1.1] mb-6">
          UGC-DEB Approved<br />Degrees
        </h2>

        <p className="text-[#b0d8ee] text-base font-medium leading-relaxed mb-8">
          <strong className="text-white">100% online. No campus visit.</strong> Study while you work.<br />
          EMI from <strong className="text-white">₹999/month</strong> — flexible exams, instant support.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {FEATURES.map((f) => (
            <div key={f.text} className="flex items-start gap-3">
              <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                <f.Icon size={16} className="text-white" />
              </div>
              <span className="text-[13.5px] text-[#c4dfee] font-medium leading-snug pt-1">{f.text}</span>
            </div>
          ))}
        </div>

        {/* Trust Pills */}
        <div className="flex flex-wrap gap-2">
          {TRUST_PILLS.map((p) => (
            <span
              key={p}
              className="bg-white/10 border border-white/20 text-[#b0d8ee] text-xs font-semibold px-3.5 py-1.5 rounded-md"
            >
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* Form */}
      <div className="relative z-10">
        <HeroForm />
      </div>
    </section>
  )
}
