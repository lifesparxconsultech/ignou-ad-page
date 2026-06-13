import { PhoneCall, FileCheck, CreditCard } from 'lucide-react'

const STEPS = [
  {
    icon: PhoneCall,
    title: 'Free Counseling',
    desc: 'Talk to our experts to find the right program and specialization for your career goals.',
  },
  {
    icon: FileCheck,
    title: 'Document Verification',
    desc: 'Upload your academic documents on the IGNOU portal for swift verification and approval.',
  },
  {
    icon: CreditCard,
    title: 'Fee Payment & Confirm',
    desc: 'Pay your course fee online through secure channels and receive your enrollment details.',
  },
]

export default function AdmissionProcess() {
  return (
    <section className="bg-[#01507c] py-20 px-[5%]">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-black text-white text-center mb-16">
          3-Step Admission Process
        </h2>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row items-start gap-10 md:gap-0">

          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-[2px] bg-[#01507c]/40 z-0" />

          {STEPS.map((step, i) => (
            <div key={step.title} className="relative z-10 flex flex-col items-center text-center flex-1 px-6">

              {/* Number circle */}
              <div className="w-16 h-16 rounded-full bg-[#f46f1a] flex items-center justify-center text-white font-black text-2xl mb-5 shadow-lg">
                {i + 1}
              </div>

              <h3 className="text-white font-black text-base mb-2">{step.title}</h3>
              <p className="text-[#b0c8d8] text-sm leading-relaxed">{step.desc}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}