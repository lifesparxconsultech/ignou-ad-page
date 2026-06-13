const TESTIMONIALS = [
  {
    initials: 'AK',
    name: 'Ankit Kapoor',
    role: 'MBA Student, Marketing',
    quote:
      'Choosing IGNOU Online MBA was the best career move. The flexibility allowed me to handle my job responsibilities while gaining strategic management skills. The degree is highly respected in the industry.',
  },
  {
    initials: 'SP',
    name: 'Sanjana Pandey',
    role: 'MCA Graduate',
    quote:
      'As a tech professional, the Online MCA program fit my schedule perfectly. The curriculum is modern and covers everything from Cloud Computing to AI. Very impressed with the digital resources provided.',
  },
  {
    initials: 'RV',
    name: 'Rahul Verma',
    role: 'BBA Student',
    quote:
      'I completed my BBA while managing my family business. The affordability and IGNOU\'s reputation are unmatched. The counselor callback service made my admission process effortless.',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-[#f7fafc] py-20 px-[5%]">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-black text-[#041e2e] text-center mb-12">
          What Our Students Say
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl border border-[#e2edf5] p-7 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-[#f46f1a] text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-[#e2edf5]">
                <div className="w-9 h-9 rounded-full bg-[#01507c] flex items-center justify-center text-white text-xs font-black shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#041e2e]">{t.name}</p>
                  <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wide">{t.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}