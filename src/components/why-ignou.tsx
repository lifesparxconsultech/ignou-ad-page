import { Award, IndianRupee, Monitor } from 'lucide-react'

const CARDS = [
  {
    icon: Award,
    title: 'ACADEMIC EXCELLENCE',
    desc: 'NAAC A+ ranking and UGC-DEB approval ensure your degree is globally recognized by employers and government bodies.',
  },
  {
    icon: IndianRupee,
    title: 'TRUE AFFORDABILITY',
    desc: 'Quality education at the most competitive price in India, with flexible EMI options starting as low as ₹999/month.',
  },
  {
    icon: Monitor,
    title: '100% DIGITAL DELIVERY',
    desc: 'From registration to exams, everything is online. Use the advanced LMS to study anytime, anywhere at your own pace.',
  },
]

export default function WhyIgnou() {
  return (
    <section className="bg-white py-20 px-[5%]">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-black text-[#01507c] mb-3">Why IGNOU Online?</h2>
          <div className="w-12 h-1 bg-[#f46f1a] rounded-full mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="bg-[#f7fafc] border border-[#e2edf5] rounded-2xl p-7 flex flex-col gap-4"
              >
                <div className="w-12 h-12 bg-[#e8f3fa] rounded-xl flex items-center justify-center">
                  <Icon className="text-[#01507c]" size={22} />
                </div>
                <h3 className="text-sm font-black text-[#013a5e] tracking-wide">{card.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}