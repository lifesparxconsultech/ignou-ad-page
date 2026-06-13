const PROGRAMS = [
  {
    name: 'Online MBA',
    duration: '2 Years (Max 4 Yrs)',
    eligibility: 'Graduation (Any Stream)',
    fee: '₹62,000 Total',
  },
  {
    name: 'Online BBA',
    duration: '3 Years (Max 6 Yrs)',
    eligibility: 'Class 12th Pass',
    fee: '₹30,000 Total',
  },
  {
    name: 'Online MCA',
    duration: '2 Years (Max 4 Yrs)',
    eligibility: 'BCA/B.Sc/B.Tech',
    fee: '₹48,000 Total',
  },
  {
    name: 'Online BCA',
    duration: '3 Years (Max 6 Yrs)',
    eligibility: 'Class 12th Pass',
    fee: '₹45,000 Total',
  },
]

const HEADERS = ['Program', 'Duration', 'Eligibility', 'Approx. Fee']

export default function ProgramsTable() {
  return (
    <section className="bg-white py-20 px-[5%]">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-black text-[#01507c] text-center mb-12">
          4 Programs at a Glance
        </h2>

        {/* Table */}
        <div className="rounded-2xl overflow-hidden border border-[#e2edf5]">
          <table className="w-full text-sm">

            {/* Header */}
            <thead>
              <tr className="bg-[#01507c]">
                {HEADERS.map((h) => (
                  <th
                    key={h}
                    className="text-left px-6 py-4 text-[11px] font-black text-white tracking-widest uppercase"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Rows */}
            <tbody>
              {PROGRAMS.map((p, i) => (
                <tr
                  key={p.name}
                  className={`border-t border-[#e2edf5] ${i % 2 === 0 ? 'bg-white' : 'bg-[#f7fafc]'}`}
                >
                  <td className="px-6 py-5 font-bold text-[#f46f1a]">{p.name}</td>
                  <td className="px-6 py-5 text-[#013a5e] font-medium">{p.duration}</td>
                  <td className="px-6 py-5 text-[#013a5e] font-medium">{p.eligibility}</td>
                  <td className="px-6 py-5 font-bold text-[#013a5e]">{p.fee}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </section>
  )
}