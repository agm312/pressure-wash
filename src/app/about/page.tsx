'use client'

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <div className="w-full h-[500px] bg-gray-100 flex items-center justify-center">
        <img
          src="/ceo-pressure-wash.jpg"
          alt="CEO - Pressure Washing"
          className="object-cover w-full h-full"
          style={{ maxHeight: 500 }}
        />
      </div>
      <div className="w-full h-[500px] bg-gray-100 flex items-center justify-center">
        <img
          src="/pressure-wash-opm.jpg"
          alt="Operations Manager - Pressure Washing"
          className="object-cover w-full h-full"
          style={{ maxHeight: 500 }}
        />
      </div>
      <div className="w-full h-[500px] bg-gray-100 flex items-center justify-center">
        <img
          src="/pressure-wash-sarah.jpg"
          alt="Office Team Member"
          className="object-cover w-full h-full"
          style={{ maxHeight: 500 }}
        />
      </div>
      <div className="w-full h-[500px] bg-gray-100 flex items-center justify-center">
        <img
          src="/chi-pressure-wash.jpg"
          alt="Team working in downtown Chicago"
          className="object-cover w-full h-full"
          style={{ maxHeight: 500 }}
        />
      </div>
    </div>
  )
} 