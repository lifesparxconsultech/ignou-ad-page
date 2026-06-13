import { MessageCircle, PhoneCall } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="bg-[#ddeaf4] py-16 px-[5%]">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">

        <h2 className="text-2xl lg:text-3xl font-black text-[#01507c]">
          Still deciding? Our counsellors are here to help.
        </h2>

        <p className="text-sm text-gray-500 font-medium">
          Get a free personalized career roadmap and detailed course prospectus today.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#hero-form"
            className="flex items-center gap-2 bg-[#f46f1a] hover:bg-[#d95e0d] text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-150"
          >
            <PhoneCall size={16} />
            Request a Callback
          </a>

          <a
            href="#hero-form"
            className="flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-150"
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </section>
  )
}
