'use client'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="space-y-24">

      {/* Hero */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-4">About Chi Pressure Wash</h1>
          <p className="text-xl">Your trusted pressure washing service in Chicago since 2014</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
        <div>
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="mb-4 text-gray-700">
            Founded in 2014, Chi Pressure Wash has been serving the Chicagoland area with
            professional pressure washing services for both residential and commercial
            properties. Our journey began with a simple mission: to provide top‑quality
            exterior cleaning services that exceed our customers' expectations.
          </p>
          <p className="text-gray-700">
            As Chicago natives, we understand the unique challenges that our city's
            weather and environment present to property maintenance. From harsh winters
            to humid summers, we know exactly what it takes to keep your property
            looking its best year‑round.
          </p>
        </div>
        <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-80 relative">
          <Image
            src="/chi-pressure-wash.jpg"
            alt="Our Story"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">We strive for perfection in every job, using the best equipment and techniques.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">Honest pricing, transparent communication, and reliable service.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-2xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">Eco‑friendly cleaning solutions and water‑efficient practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 items-start text-center">
            <div>
              <div className="w-40 h-40 mx-auto relative rounded-full overflow-hidden bg-gray-100">
                <Image
                  src="/ceo-pressure-wash.jpg"
                  alt="Michael Johnson"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Michael Johnson</h3>
              <p className="text-gray-500">Founder & CEO</p>
            </div>
            <div>
              <div className="w-40 h-40 mx-auto relative rounded-full overflow-hidden bg-gray-100">
                <Image
                  src="/pressure-wash-opm.jpg"
                  alt="David Williams"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold">David Williams</h3>
              <p className="text-gray-500">Operations Manager</p>
            </div>
            <div>
              <div className="w-40 h-40 mx-auto relative rounded-full overflow-hidden bg-gray-100">
                <Image
                  src="/pressure-wash-sarah.jpg"
                  alt="Sarah Chen"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Sarah Chen</h3>
              <p className="text-gray-500">Customer Service Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Certifications */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Licensed</h3>
              <p className="text-gray-600">City of Chicago Business License</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Insured</h3>
              <p className="text-gray-600">Full liability coverage</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <h3 className="text-xl font-semibold mb-2">BBB Accredited</h3>
              <p className="text-gray-600">A+ Rating</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <h3 className="text-xl font-semibold mb-2">EPA Certified</h3>
              <p className="text-gray-600">Eco‑friendly practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Work with Us?</h2>
          <p className="mb-6 text-gray-700">Experience the Chi Pressure Wash difference today!</p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow hover:bg-blue-700 transition"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

    </main>
  )
} 