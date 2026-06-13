'use client'

import { useState } from 'react'
import { CheckCircle, Circle } from 'lucide-react'

const PROGRAMS = [
  {
    tab: 'Online MBA',
    title: 'Master of Business Administration',
    approval: 'UGC & AICTE APPROVED',
    price: '₹14,000 / Sem',
    overview: 'Designed for working professionals. Choose from 5 specializations including Marketing, Finance, and HR. 2 Years duration with up to 4 years flexibility.',
    eligibility: ['Any Graduate with 50% Marks', 'No Entrance Exam Required'],
    highlights: ['Industry-relevant Curriculum', 'Live Interactive Sessions', 'Digital Study Material', 'Global Alumni Network'],
  },
  {
    tab: 'Online BBA',
    title: 'Bachelor of Business Administration',
    approval: 'UGC & DEB APPROVED',
    price: '₹5,000 / Sem',
    overview: 'A comprehensive undergraduate business program. 3 Years duration with up to 6 years flexibility. Covers management, finance, marketing and more.',
    eligibility: ['Class 12th Pass (Any Stream)', 'No Entrance Exam Required'],
    highlights: ['Case-Based Learning', 'Industry Mentors', 'Digital Study Material', 'Placement Assistance'],
  },
  {
    tab: 'Online MCA',
    title: 'Master of Computer Applications',
    approval: 'UGC & AICTE APPROVED',
    price: '₹12,000 / Sem',
    overview: 'Advanced computing and software program for tech professionals. 2 Years with up to 4 years flexibility. Covers Cloud, AI, and modern development.',
    eligibility: ['BCA / B.Sc / B.Tech Graduate', 'No Entrance Exam Required'],
    highlights: ['Modern Tech Curriculum', 'Live Coding Sessions', 'Cloud & AI Modules', 'Career Support'],
  },
  {
    tab: 'Online BCA',
    title: 'Bachelor of Computer Applications',
    approval: 'UGC & DEB APPROVED',
    price: '₹7,500 / Sem',
    overview: 'Entry-level computer applications degree for aspiring tech professionals. 3 Years with up to 6 years flexibility.',
    eligibility: ['Class 12th Pass (Any Stream)', 'No Entrance Exam Required'],
    highlights: ['Programming Fundamentals', 'Web & App Development', 'Digital Study Material', 'Internship Support'],
  },
]

export default function ProgramGuide() {
  const [active, setActive] = useState(0)
  const program = PROGRAMS[active]

  return (
    <section className="bg-[#f7fafc] py-20 px-[5%]">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-black text-[#041e2e] text-center mb-12">
          Detailed Program Guide
        </h2>

        <div className="flex flex-col lg:flex-row gap-6">

          {/* Tabs */}
          <div className="flex flex-row lg:flex-col gap-3 lg:w-52 shrink-0">
            {PROGRAMS.map((p, i) => (
              <button
                key={p.tab}
                onClick={() => setActive(i)}
                className={`w-full text-left px-5 py-3.5 rounded-xl font-bold text-sm transition-all duration-150 ${
                  active === i
                    ? 'bg-[#f46f1a] text-white shadow-md'
                    : 'bg-white border border-[#e2edf5] text-[#041e2e] hover:border-[#01507c]'
                }`}
              >
                {p.tab}
              </button>
            ))}
          </div>

          {/* Detail Card */}
          <div className="flex-1 bg-white rounded-2xl border border-[#e2edf5] p-8">

            {/* Title + Price */}
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <h3 className="text-xl font-black text-[#041e2e] mb-1">{program.title}</h3>
                <span className="text-xs font-black text-[#f46f1a] tracking-widest">{program.approval}</span>
              </div>
              <div className="shrink-0 bg-[#f7fafc] border border-[#e2edf5] rounded-xl px-4 py-2 text-center">
                <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-0.5">Starting From</p>
                <p className="text-base font-black text-[#041e2e]">{program.price}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Left: Overview + Eligibility */}
              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-[10px] font-black text-gray-400 tracking-widest uppercase mb-2">Overview</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{program.overview}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 tracking-widest uppercase mb-2">Eligibility</p>
                  <ul className="flex flex-col gap-2">
                    {program.eligibility.map((e) => (
                      <li key={e} className="flex items-center gap-2 text-sm text-[#041e2e] font-semibold">
                        <CheckCircle size={16} className="text-[#f46f1a] shrink-0" />
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Key Highlights */}
              <div className="bg-[#f7fafc] rounded-xl p-5">
                <p className="text-[10px] font-black text-gray-400 tracking-widest uppercase mb-3">Key Highlights</p>
                <ul className="flex flex-col gap-2.5">
                  {program.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-[#041e2e] font-medium">
                      <Circle size={7} className="text-[#f46f1a] fill-[#f46f1a] shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* CTA */}
            <a
              href="#hero-form"
              className="block w-full mt-7 py-4 bg-[#f46f1a] hover:bg-[#d95e0d] text-white font-black text-sm tracking-widest rounded-xl transition-all duration-150 text-center"
            >
              CHECK FULL FEE STRUCTURE &amp; SPECIALS
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}