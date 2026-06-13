'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'Is the IGNOU Online Degree valid for Govt Jobs?',
    a: 'Yes, absolutely. All IGNOU Online degrees are UGC-DEB approved. As per UGC notification, degrees obtained through online mode are at par with degrees from regular campus-based universities for all employment and higher education purposes.',
  },
  {
    q: 'Do I need to visit any study center for exams?',
    a: 'No. All exams are conducted in online mode. You can appear for your exams from the comfort of your home using a laptop or desktop with a stable internet connection.',
  },
  {
    q: 'Is there an entrance exam for MBA?',
    a: 'No entrance exam is required for admission to IGNOU Online MBA. Any graduate with 50% marks is eligible to apply directly.',
  },
  {
    q: 'What is the fee payment process?',
    a: 'Fees can be paid online through the IGNOU portal via net banking, UPI, debit/credit card. EMI options starting from ₹999/month are also available through select payment partners.',
  },
  {
    q: 'Can I study while working full-time?',
    a: 'Yes, that is the primary advantage of IGNOU Online programs. All study material is available 24/7 on the LMS and live sessions are recorded, so you can study at your own pace around your work schedule.',
  },
  {
    q: 'Are there any live sessions?',
    a: 'Yes. Live interactive sessions are conducted regularly by experienced faculty. All sessions are also recorded and available on the LMS so you never miss out.',
  },
  {
    q: 'What support will I get from EduCollege?',
    a: 'EduCollege provides end-to-end admission assistance, document verification support, dedicated counsellor callbacks, and ongoing academic guidance throughout your program.',
  },
  {
    q: 'When does the next batch start?',
    a: 'IGNOU admissions are open twice a year — January and July sessions. The current 2026 session is open. Contact our counsellors immediately to secure your seat.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-white py-20 px-[5%]">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-black text-[#01507c] text-center mb-12">
          Questions We Hear Every Day
        </h2>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="border border-[#e2edf5] rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-[#f7fafc] hover:bg-[#eef4f9] transition-colors duration-150"
              >
                <span className="text-sm font-bold text-[#013a5e]">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-[#01507c] shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>

              {open === i && (
                <div className="px-6 py-4 bg-white border-t border-[#e2edf5]">
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}