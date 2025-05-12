import Image from 'next/image';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';

const services = [
  {
    title: 'Driveway Cleaning',
    description: 'Professional driveway cleaning in Chicago. Remove stubborn stains, oil, and winter salt damage.',
    price: 'Starting from $100. Per square foot pricing available for larger areas.',
  },
  {
    title: 'House Siding Cleaning',
    description: 'Expert house washing for Chicago homes. Safe for vinyl, brick, and aluminum siding.',
    price: 'Starting from $250. Pricing varies based on size and siding material.',
  },
  {
    title: 'Deck & Patio Cleaning',
    description: 'Restore your Chicago deck or patio. Perfect for spring cleaning and summer preparation.',
    price: 'Starting from $100. Pricing varies based on size and material.',
  },
  {
    title: 'Fence Cleaning',
    description: 'Cleans wood or vinyl fences, removes mold or dirt',
    price: 'Starting from $150. Pricing varies based on size and material.',
  },
  {
    title: 'Sidewalk/Walkway Cleaning',
    description: 'Clears dirt, gum, and stains from concrete or brick',
    price: 'Starting from $80. Pricing varies based on size.',
  },
  {
    title: 'Vehicle Cleaning',
    description: 'Cleans cars, trucks, RVs, or boats (gentle PSI)',
    price: 'Flat Rate: $50 - $350 per vehicle. Pricing varies based on size and material.',
  },
];

const reviews = [
  {
    name: "John D.",
    location: "Lincoln Park",
    text: "Best pressure washing service in Chicago! They completely transformed my driveway and deck.",
    rating: 5
  },
  {
    name: "Sarah M.",
    location: "Wicker Park",
    text: "Professional, punctual, and perfect results. Highly recommend for any Chicago homeowner.",
    rating: 5
  },
  {
    name: "Mike R.",
    location: "Oak Park",
    text: "Great service! They removed years of Chicago winter grime from my siding.",
    rating: 5
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Chicago's Premier Pressure Washing Service
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Professional pressure washing for homes and businesses throughout Chicagoland
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get a Free Quote
            </Link>
            <Link href="/services" className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
              View Services
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>5-Star Rated on Google</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>10+ Years in Chicago</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>100% Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Services Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-center text-gray-600 mb-12">Professional pressure washing services for Chicago's homes and businesses</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="border-t pt-4 mb-4">
                {service.price.split('. ').map((sentence, idx) => (
                  idx === 0 ? (
                    <span key={idx} className="text-lg font-medium text-blue-600">
                      {sentence.trim()}
                      {sentence.trim().endsWith('.') ? '' : '.'}
                    </span>
                  ) : (
                    <span key={idx} className="block text-sm text-black mt-1" style={{ fontSize: '0.95em' }}>
                      ({sentence.trim()})
                    </span>
                  )
                ))}
              </div>
              <Link href="/contact" className="w-full block bg-blue-600 text-white py-2 px-4 rounded-md font-semibold text-center hover:bg-blue-700 transition-colors duration-300 mb-4">
                Get a Free Quote
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/services" className="text-blue-600 font-semibold hover:text-blue-800">
            View All Services →
          </Link>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Chi Pressure Wash</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p className="text-gray-600">Chicago-based team with knowledge of local weather conditions and cleaning challenges</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💧</div>
              <h3 className="text-xl font-semibold mb-2">Advanced Equipment</h3>
              <p className="text-gray-600">State-of-the-art pressure washing equipment and eco-friendly cleaning solutions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">100% satisfaction guarantee on all our work in Chicago and suburbs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">What Our Customers Say</h2>
        <p className="text-center text-gray-600 mb-12">Read reviews from satisfied customers throughout Chicago</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {"★".repeat(review.rating)}
              </div>
              <p className="text-gray-600 mb-4">"{review.text}"</p>
              <div className="text-sm">
                <p className="font-semibold">{review.name}</p>
                <p className="text-gray-500">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Property?</h2>
          <p className="text-xl mb-8">Get a free quote for your Chicago property today!</p>
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300">
            Get Your Free Quote
          </Link>
        </div>
      </div>
    </main>
  );
} 