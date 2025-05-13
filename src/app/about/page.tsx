'use client'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900 px-4 md:px-16 py-12 space-y-16">
      <section className="text-center">
        <h1 className="text-4xl font-extrabold text-blue-600">About Chi Pressure Wash</h1>
        <p className="mt-4 text-xl font-medium">
          Your trusted pressure washing service in Chicago since 2014
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-base leading-relaxed">
            Founded in 2014, Chi Pressure Wash has been serving the Chicagoland area with professional
            pressure washing services for both residential and commercial properties. Our journey began
            with a simple mission: to provide top-quality exterior cleaning services that exceed our
            customers' expectations.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            As Chicago natives, we understand the unique challenges that our city's weather and environment
            present to property maintenance. From harsh winters to humid summers, we know exactly what it
            takes to keep your property looking its best year-round.
          </p>
        </div>
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-gray-100">
          <Image
            src="/chi-pressure-wash.jpg"
            alt="Our Story - Pressure Washing"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-gray-100">
          <Image
            src="/ceo-pressure-wash.jpg"
            alt="CEO - Pressure Washing"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-gray-100">
          <Image
            src="/pressure-wash-opm.jpg"
            alt="Operations Manager - Pressure Washing"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-gray-100">
          <Image
            src="/pressure-wash-sarah.jpg"
            alt="Office Team Member"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-gray-100">
          <Image
            src="/chi-pressure-wash.jpg"
            alt="Team working in downtown Chicago"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>
    </div>
  )
} 