'use client'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="space-y-16">

      {/* Hero */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            About Chi Pressure Wash
          </h1>
          <p className="text-xl">
            Your trusted pressure washing service in Chicago since 2014
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Our Story
          </h2>
          <p className="mb-4 text-gray-700">
            Founded in 2014, Chi Pressure Wash has been serving the Chicagoland area
            with professional pressure washing services for both residential and
            commercial properties. Our journey began with a simple mission: to provide
            top-quality exterior cleaning services that exceed our customers' expectations.
          </p>
          <p className="text-gray-700">
            As Chicago natives, we understand the unique challenges that our city's
            weather and environment present to property maintenance. From harsh
            winters to humid summers, we know exactly what it takes to keep your
            property looking its best year-round.
          </p>
        </div>
        <div className="w-full h-64 relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/our-story.jpg"
            alt="Our Story - Pressure Washing"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Founder & CEO */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto relative rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/ceo-pressure-wash.jpg"
                  alt="Founder & CEO"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="mt-4 font-semibold">Alex Martinez</h3>
              <p className="text-sm text-gray-500">Founder & CEO</p>
            </div>

            {/* Owner */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto relative rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/chi-pressure-wash.jpg"
                  alt="Owner"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="mt-4 font-semibold">Chi Williams</h3>
              <p className="text-sm text-gray-500">Owner</p>
            </div>

            {/* Operations Manager */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto relative rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/pressure-wash-opm.jpg"
                  alt="Operations Manager"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="mt-4 font-semibold">Morgan Lee</h3>
              <p className="text-sm text-gray-500">Operations Manager</p>
            </div>

            {/* Lead Technician */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto relative rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/pressure-wash-sarah.jpg"
                  alt="Lead Technician"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="mt-4 font-semibold">Sarah Johnson</h3>
              <p className="text-sm text-gray-500">Lead Technician</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
} 