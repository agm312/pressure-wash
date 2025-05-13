'use client'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <div className="relative w-full h-[500px]">
        <Image
          src="/ceo-pressure-wash.jpg"
          alt="CEO - Pressure Washing"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative w-full h-[500px]">
        <Image
          src="/pressure-wash-opm.jpg"
          alt="Operations Manager - Pressure Washing"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative w-full h-[500px]">
        <Image
          src="/pressure-wash-sarah.jpg"
          alt="Office Team Member"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative w-full h-[500px]">
        <Image
          src="/chi-pressure-wash.jpg"
          alt="Team working in downtown Chicago"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
} 