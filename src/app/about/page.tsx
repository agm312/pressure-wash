import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Chi Pressure Wash</h1>
          <p className="text-xl">Your trusted pressure washing service in Chicago since 2014</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2014, Chi Pressure Wash has been serving the Chicagoland area with professional pressure washing services for both residential and commercial properties. Our journey began with a simple mission: to provide top-quality exterior cleaning services that exceed our customers' expectations.
            </p>
            <p className="text-gray-600 mb-4">
              As Chicago natives, we understand the unique challenges that our city's weather and environment present to property maintenance. From harsh winters to humid summers, we know exactly what it takes to keep your property looking its best year-round.
            </p>
          </div>
          <div className="relative h-[400px] bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
            <Image
              src="/our-story-pressure-wash.jpg"
              alt="Our Story - Pressure Washing"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">We strive for perfection in every job, using the best equipment and techniques.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">Honest pricing, transparent communication, and reliable service.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">Eco-friendly cleaning solutions and water-efficient practices.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden relative">
                <Image
                  src="/ceo-pressure-wash.jpg"
                  alt="Michael Johnson - Founder & CEO"
                  fill
                  style={{ objectFit: 'cover', objectPosition: '0% center' }}
                  className="rounded-full"
                  priority
                />
              </div>
              <h3 className="text-xl font-semibold">Michael Johnson</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden relative">
                <Image
                  src="/pressure-wash-opm.jpg"
                  alt="David Williams - Operations Manager"
                  fill
                  style={{ objectFit: 'cover', objectPosition: '50% center' }}
                  className="rounded-full"
                  priority
                />
              </div>
              <h3 className="text-xl font-semibold">David Williams</h3>
              <p className="text-gray-600">Operations Manager</p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden relative">
                <Image
                  src="/pressure-wash-sarah.jpg"
                  alt="Sarah Chen - Customer Service Manager"
                  fill
                  style={{ objectFit: 'cover', objectPosition: '50% center' }}
                  className="rounded-full"
                  priority
                />
              </div>
              <h3 className="text-xl font-semibold">Sarah Chen</h3>
              <p className="text-gray-600">Customer Service Manager</p>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <h3 className="font-semibold mb-2">Licensed</h3>
              <p className="text-gray-600">City of Chicago Business License</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <h3 className="font-semibold mb-2">Insured</h3>
              <p className="text-gray-600">Full liability coverage</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <h3 className="font-semibold mb-2">BBB Accredited</h3>
              <p className="text-gray-600">A+ Rating</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <h3 className="font-semibold mb-2">EPA Certified</h3>
              <p className="text-gray-600">Eco-friendly practices</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-100 p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Us?</h2>
          <p className="text-xl text-gray-600 mb-8">Experience the Chi Pressure Wash difference today!</p>
          <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
} 