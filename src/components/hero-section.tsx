import HeroForm from "../common/form/hero-form"


const BADGES = [
  { label: 'UGC-DEB Approved', active: false },
  { label: 'NAAC A+ Accredited', active: false },
  { label: '40 Lakh+ Students', active: false },
  { label: '2024 Admissions Open', active: true },
]

const FEATURES = [
  { icon: '✅', text: 'UGC recognition as per latest guidelines' },
  { icon: '🏛️', text: 'No campus visit required for admission or exams' },
  { icon: '📅', text: 'Flexible exams conducted in online mode' },
  { icon: '📞', text: 'Instant counsellor callback for admission help' },
]

const TRUST_PILLS = ['40L+ Students', 'NAAC A+', 'UGC-DEB', 'Affordable Fees', 'EMI Option']

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] bg-gradient-to-br from-[#041e2e] via-[#012035] to-[#01344f] grid grid-cols-1 lg:grid-cols-[1fr_430px] gap-10 items-center px-[5%] py-16 overflow-hidden">

      {/* Watermark */}
      <span className="absolute bottom-[-40px] left-[-20px] text-[220px] font-black text-[#01507c]/10 select-none pointer-events-none leading-none tracking-tighter">
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
                  : 'border-[#01507c]/60 text-[#b0c8d8]'
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

        <p className="text-[#b0c8d8] text-base font-medium leading-relaxed mb-8">
          <strong className="text-white">100% online. No campus visit.</strong> Study while you work.<br />
          EMI from <strong className="text-white">₹999/month</strong> — flexible exams, instant support.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {FEATURES.map((f) => (
            <div key={f.text} className="flex items-start gap-3">
              <div className="w-9 h-9 bg-[#01507c]/25 rounded-lg flex items-center justify-center shrink-0 text-base">
                {f.icon}
              </div>
              <span className="text-[13.5px] text-[#c8dde9] font-medium leading-snug pt-1">{f.text}</span>
            </div>
          ))}
        </div>

        {/* Trust Pills */}
        <div className="flex flex-wrap gap-2">
          {TRUST_PILLS.map((p) => (
            <span
              key={p}
              className="bg-[#01507c]/20 border border-[#01507c]/40 text-[#90b8cc] text-xs font-semibold px-3.5 py-1.5 rounded-md"
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