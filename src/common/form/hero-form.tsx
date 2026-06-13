'use client'

import { useState, ChangeEvent } from 'react'
import { useRouter } from 'next/navigation'

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzVJ0oDvDX_TriYCYDnYfgcWgHRN6VIMZxQ-rCIKcUFJycwN7D365tpEOcO_8Clk2d-/exec'

const PROGRAMS = ['Online MBA', 'Online BBA', 'Online MCA', 'Online BCA']
const QUALIFICATIONS = ['12th / HSC', 'Diploma', 'Graduate', 'Post Graduate']

const phoneRegex = /^[6-9]\d{9}$/

interface FormData {
  fullName: string
  phone: string
  cityState: string
  program: string
  qualification: string
}

interface FormErrors {
  fullName?: string
  phone?: string
  cityState?: string
  program?: string
  qualification?: string
}

export default function HeroForm() {
  const router = useRouter()

  const [form, setForm] = useState<FormData>({
    fullName: '', phone: '', cityState: '', program: '', qualification: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10)
      setForm((prev) => ({ ...prev, phone: digitsOnly }))
    } else {
      setForm((prev) => ({ ...prev, [name]: value }))
    }
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  function validate(): boolean {
    const e: FormErrors = {}
    if (form.fullName.trim().length < 2) e.fullName = 'Full name is required.'
    if (!phoneRegex.test(form.phone)) e.phone = 'Enter a valid 10-digit Indian mobile number.'
    if (!form.cityState.trim()) e.cityState = 'City / State is required.'
    if (!form.program) e.program = 'Please select a program.'
    if (!form.qualification) e.qualification = 'Please select your qualification.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit() {
    if (!validate()) return
    setStatus('loading')
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          fullName: form.fullName,
          phone: form.phone,
          cityState: form.cityState,
          program: form.program,
          qualification: form.qualification,
          source: 'Hero Form',
        }),
      })
      router.push('/thank-you')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div id="hero-form" className="bg-white rounded-2xl shadow-2xl shadow-black/30 overflow-hidden">

      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-100 px-6 py-4 flex items-center gap-2">
        <div className="w-4 h-4 bg-[#f46f1a] rounded flex items-center justify-center">
          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-bold text-[#041e2e] text-base">Book Your Free Session</h3>
      </div>

      <div className="px-6 py-6 space-y-4">

        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Full Name</label>
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`w-full border rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:border-transparent transition-all ${errors.fullName ? 'border-red-400 focus:ring-red-400' : 'border-gray-200 focus:ring-[#01507c]'}`}
            />
          </div>
          {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName}</p>}
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Mobile Number</label>
          <div className="relative flex items-center">
            <span className="absolute left-3 text-sm text-gray-500 font-semibold select-none">+91</span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="98765 43210"
              maxLength={10}
              inputMode="numeric"
              className={`w-full border rounded-lg pl-12 pr-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:border-transparent transition-all ${errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-gray-200 focus:ring-[#01507c]'}`}
            />
          </div>
          {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
        </div>

        {/* City / State */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">City / State</label>
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <input
              type="text"
              name="cityState"
              value={form.cityState}
              onChange={handleChange}
              placeholder="e.g. Delhi, Maharashtra"
              className={`w-full border rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:border-transparent transition-all ${errors.cityState ? 'border-red-400 focus:ring-red-400' : 'border-gray-200 focus:ring-[#01507c]'}`}
            />
          </div>
          {errors.cityState && <p className="text-red-500 text-xs">{errors.cityState}</p>}
        </div>

        {/* Program */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Select Program</label>
          <select
            name="program"
            value={form.program}
            onChange={handleChange}
            className={`w-full border rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:border-transparent transition-all appearance-none cursor-pointer ${form.program ? 'text-gray-800' : 'text-gray-400'} ${errors.program ? 'border-red-400 focus:ring-red-400' : 'border-gray-200 focus:ring-[#01507c]'}`}
          >
            <option value="" disabled>Select a program</option>
            {PROGRAMS.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
          {errors.program && <p className="text-red-500 text-xs">{errors.program}</p>}
        </div>

        {/* Qualification */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Highest Qualification</label>
          <select
            name="qualification"
            value={form.qualification}
            onChange={handleChange}
            className={`w-full border rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:border-transparent transition-all appearance-none cursor-pointer ${form.qualification ? 'text-gray-800' : 'text-gray-400'} ${errors.qualification ? 'border-red-400 focus:ring-red-400' : 'border-gray-200 focus:ring-[#01507c]'}`}
          >
            <option value="" disabled>Select qualification</option>
            {QUALIFICATIONS.map((q) => <option key={q} value={q}>{q}</option>)}
          </select>
          {errors.qualification && <p className="text-red-500 text-xs">{errors.qualification}</p>}
        </div>

        {/* Error */}
        {status === 'error' && (
          <p className="text-red-500 text-xs text-center">Something went wrong. Please try again.</p>
        )}

        {/* Submit */}
        <div className="space-y-3 pt-1">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={status === 'loading'}
            className="w-full bg-[#f46f1a] hover:bg-[#d95e0d] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-xl font-black text-sm transition-all duration-150 flex items-center justify-center gap-2 group shadow-md hover:-translate-y-0.5"
          >
            {status === 'loading' ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Submitting...
              </>
            ) : (
              <>
                Talk to a Counsellor — It's Free
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </>
            )}
          </button>

          <div className="bg-[#f0f6fb] border border-[#d4e3ec] rounded-lg py-2 px-3 text-center">
            <p className="text-[11px] text-[#01507c] font-semibold">
              🔒 Your data is 100% secure. No spam ever.
            </p>
          </div>
        </div>

        <p className="text-xs text-gray-400 text-center leading-relaxed">
          By clicking, you agree to our privacy policy and to receive program updates.
        </p>

      </div>
    </div>
  )
}