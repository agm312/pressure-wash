import FAQSection from '@/components/FAQSection';
import TestimonialSection from '@/components/TestimonialSection';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does It Cost to Pressure Wash a Commercial Building',
  description: 'How much does it cost to pressure wash a commercial building? See average prices, cost factors, and get a free quote for your business property.',
  openGraph: {
    title: 'How Much Does It Cost to Pressure Wash a Commercial Building',
    description: 'See the cost to pressure wash a commercial building. Get average prices, cost breakdowns, and a free quote for your business.',
    images: ['/images/commercial-pressure-wash-placeholder.jpg'],
  },
};

const pricingTable = [
  { type: 'Small Retail Store (1,000 sq ft)', low: 200, high: 400 },
  { type: 'Office Building (5,000 sq ft)', low: 800, high: 1_500 },
  { type: 'Warehouse (20,000 sq ft)', low: 2_500, high: 5_000 },
  { type: 'Parking Garage (per level, 10,000 sq ft)', low: 1_000, high: 2_000 },
];

const faqData = [
  {
    question: 'How long does it take to pressure wash a commercial building?',
    answer: 'Most jobs take 1–2 days, depending on size, dirt level, and weather. Large or multi-story buildings may require more time.'
  },
  {
    question: 'Do I need to shut down my business during cleaning?',
    answer: 'Not always. Many contractors work after hours or on weekends to minimize disruption. Discuss scheduling with your provider.'
  },
  {
    question: 'Can pressure washing damage windows or signs?',
    answer: 'Professional contractors use the right PSI and techniques to avoid damage. Fragile areas are protected or cleaned by hand.'
  },
];

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Chi Pressure Wash',
  image: 'https://chipressurewash.com/images/commercial-pressure-wash-placeholder.jpg',
  url: 'https://chipressurewash.com',
  telephone: '+1-312-555-0199',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Main St',
    addressLocality: 'Chicago',
    addressRegion: 'IL',
    postalCode: '60601',
    addressCountry: 'US',
  },
  priceRange: '$$',
  description: 'Professional commercial pressure washing services for buildings, offices, warehouses, and retail in Chicago.',
};

export default function CommercialBuildingCostPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          How Much Does It Cost to Pressure Wash a Commercial Building
        </h1>
        <div className="flex justify-center mb-4">
          <Image
            src="/images/commercial-pre-wash-compressed.jpg"
            alt="Commercial pressure washing in progress"
            width={700}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full max-w-2xl max-h-96"
            priority
          />
        </div>
        <p className="text-lg text-gray-700">
          Wondering <strong>how much does it cost to pressure wash a commercial building</strong>? This guide covers average prices, key cost factors, and tips to get the best value for your business property. Get a free quote from our Chicago experts today!
        </p>
      </header>
      <nav className="bg-blue-50 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-blue-900 mb-4">Table of Contents</h2>
        <ul className="space-y-2">
          <li><a href="#factors" className="text-blue-600 hover:text-blue-800 hover:underline">Factors That Affect Commercial Pressure Washing Costs</a></li>
          <li><a href="#pricing" className="text-blue-600 hover:text-blue-800 hover:underline">Typical Pricing Examples</a></li>
          <li><a href="#vs-residential" className="text-blue-600 hover:text-blue-800 hover:underline">Commercial vs Residential Power Washing</a></li>
          <li><a href="#tips" className="text-blue-600 hover:text-blue-800 hover:underline">Tips to Get the Best Price</a></li>
          <li><a href="#faqs" className="text-blue-600 hover:text-blue-800 hover:underline">FAQ</a></li>
        </ul>
      </nav>
      <main className="prose prose-lg max-w-none">
        <section id="factors" className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Factors That Affect Commercial Pressure Washing Costs</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><b>Surface area (sq ft):</b> Larger buildings cost more. Most companies charge per square foot.</li>
            <li><b>Height and accessibility:</b> Multi-story buildings or hard-to-reach areas require special equipment and increase labor costs.</li>
            <li><b>Dirt level and buildup:</b> Heavy grime, oil, or mold may require extra cleaning steps or stronger solutions.</li>
            <li><b>Water availability:</b> Onsite water access can reduce costs. If water must be trucked in, expect higher prices.</li>
          </ul>
        </section>
        <section id="pricing" className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Typical Pricing Examples</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-blue-800">Building Type</th>
                  <th className="px-4 py-2 text-left text-blue-800">Low</th>
                  <th className="px-4 py-2 text-left text-blue-800">High</th>
                </tr>
              </thead>
              <tbody>
                {pricingTable.map((row) => (
                  <tr key={row.type}>
                    <td className="px-4 py-2">{row.type}</td>
                    <td className="px-4 py-2">${row.low}</td>
                    <td className="px-4 py-2">${row.high}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-600 text-sm">*Prices are estimates. Request a custom quote for your building.</p>
        </section>
        <section id="vs-residential" className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Commercial vs Residential Power Washing</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><b>Scale:</b> Commercial jobs are larger and require more powerful equipment.</li>
            <li><b>Complexity:</b> Commercial buildings may have signage, glass, or sensitive areas needing special care.</li>
            <li><b>Pricing:</b> Commercial rates are usually higher per sq ft, but bulk discounts may apply for large jobs.</li>
            <li><b>Scheduling:</b> Commercial work is often done after hours to avoid business disruption.</li>
          </ul>
        </section>
        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Tips to Get the Best Price</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Ask about <b>bulk discounts</b> for multiple buildings or regular service.</li>
            <li>Consider a <b>maintenance contract</b> for lower per-visit rates.</li>
            <li>Schedule during <b>off-peak seasons</b> for possible savings.</li>
            <li>Get multiple quotes and check contractor reviews.</li>
          </ul>
          <div className="text-center mt-8">
            <a href="/contact" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">Get a Free Quote</a>
          </div>
        </section>
        <section id="faqs" className="mt-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">FAQ</h2>
          <div className="space-y-6">
            {faqData.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
        <TestimonialSection />
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
    </article>
  );
} 