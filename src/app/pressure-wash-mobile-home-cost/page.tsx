import { Metadata } from 'next';
import FAQSection from '@/components/FAQSection';
import TestimonialSection from '@/components/TestimonialSection';
import MobileHomeCalculator from '@/components/MobileHomeCalculator';

export const metadata: Metadata = {
  title: 'How Much Does It Cost to Pressure Wash a Mobile Home? | 2025 Pricing',
  description: 'How much does it cost to pressure wash a mobile home? See 2025 prices, cost factors, regional differences, and get a free quote for your mobile home today.',
  openGraph: {
    title: 'How Much Does It Cost to Pressure Wash a Mobile Home?',
    description: 'See the 2025 cost to pressure wash a mobile home. Get average prices, cost breakdowns, and a free quote for your mobile home.',
    images: ['/images/mobile-home-pressure-wash.jpg'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to pressure wash a mobile home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The average cost to pressure wash a mobile home ranges from $80 to $250, depending on size, region, and grime level. Most homeowners pay around $0.15–$0.30 per sq. ft.'
      },
    },
    {
      '@type': 'Question',
      name: 'What factors affect mobile home pressure washing costs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Key factors include home size, siding material, grime level, location, and whether you choose DIY or professional service.'
      },
    },
    {
      '@type': 'Question',
      name: 'Is it cheaper to pressure wash a mobile home yourself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DIY can be cheaper if you already own equipment, but professionals ensure a thorough, safe clean and can prevent damage.'
      },
    },
  ],
};

const pricingData = [
  { region: 'National Average', low: 80, high: 250 },
  { region: 'Midwest', low: 90, high: 200 },
  { region: 'South', low: 80, high: 180 },
  { region: 'Northeast', low: 100, high: 250 },
  { region: 'West', low: 110, high: 260 },
];

export default function MobileHomeCostPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          How Much Does It Cost to Pressure Wash a Mobile Home?
        </h1>
        <div className="flex justify-center">
          <img
            src="/images/mobile-home-pre-wash.png"
            alt="Pressure washing a mobile home"
            className="w-full max-w-2xl max-h-96 object-cover rounded-lg shadow-lg mb-4"
            loading="lazy"
          />
        </div>
        <p className="text-lg text-gray-700">
          Wondering <strong>how much does it cost to pressure wash a mobile home</strong>? In 2025, most homeowners pay between <b>$80 and $250</b> depending on size, region, and grime level. This guide breaks down average prices, cost factors, and includes a free quote option for your mobile home.
        </p>
      </header>
      <nav className="bg-blue-50 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-blue-900 mb-4">Table of Contents</h2>
        <ul className="space-y-2">
          <li><a href="#average-costs" className="text-blue-600 hover:text-blue-800 hover:underline">Average Cost to Pressure Wash a Mobile Home</a></li>
          <li><a href="#factors" className="text-blue-600 hover:text-blue-800 hover:underline">Factors Affecting Mobile Home Washing Costs</a></li>
          <li><a href="#regional-costs" className="text-blue-600 hover:text-blue-800 hover:underline">Cost Comparison by Region</a></li>
          <li><a href="#diy-vs-pro" className="text-blue-600 hover:text-blue-800 hover:underline">DIY vs Professional Cost Breakdown</a></li>
          <li><a href="#faqs" className="text-blue-600 hover:text-blue-800 hover:underline">Frequently Asked Questions</a></li>
        </ul>
      </nav>
      <main className="prose prose-lg max-w-none">
        <section id="average-costs" className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Average Cost to Pressure Wash a Mobile Home</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-blue-800">Home Size</th>
                  <th className="px-4 py-2 text-left text-blue-800">Low</th>
                  <th className="px-4 py-2 text-left text-blue-800">High</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">Single-wide (600–1,000 sq. ft.)</td>
                  <td className="px-4 py-2">$80</td>
                  <td className="px-4 py-2">$150</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Double-wide (1,000–2,000 sq. ft.)</td>
                  <td className="px-4 py-2">$120</td>
                  <td className="px-4 py-2">$250</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-600 text-sm">*Prices vary by region, home condition, and local rates.</p>
          <div className="my-10">
            <MobileHomeCalculator />
          </div>
        </section>
        <section id="factors" className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Factors Affecting Mobile Home Washing Costs</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><b>Home size:</b> Larger mobile homes cost more to wash.</li>
            <li><b>Siding material:</b> Vinyl, aluminum, and wood have different cleaning needs and risks.</li>
            <li><b>Grime level:</b> Heavy buildup or mold may require extra cleaning steps.</li>
            <li><b>Location:</b> Urban and coastal areas may have higher rates.</li>
            <li><b>Accessibility:</b> Skirting, decks, or tight spaces can increase labor time.</li>
            <li><b>DIY vs. professional:</b> Pros charge more but deliver safer, more thorough results.</li>
          </ul>
        </section>
        <section id="regional-costs" className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Cost Comparison by Region</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-blue-800">Region</th>
                  <th className="px-4 py-2 text-left text-blue-800">Low</th>
                  <th className="px-4 py-2 text-left text-blue-800">High</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row) => (
                  <tr key={row.region}>
                    <td className="px-4 py-2">{row.region}</td>
                    <td className="px-4 py-2">${row.low}</td>
                    <td className="px-4 py-2">${row.high}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-600 text-sm">*Regional prices are estimates. Always request a local quote for the most accurate pricing.</p>
        </section>
        <section id="diy-vs-pro" className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">DIY vs Professional Cost Breakdown</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">DIY Pressure Washing</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Pressure washer rental: $40–$120 per day</li>
                <li>Cleaning solution: $15–$30</li>
                <li>Time investment: 2–5 hours</li>
                <li>Risk of damage to siding or skirting</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Professional Service</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Complete service: $80–$250</li>
                <li>Professional equipment and insurance</li>
                <li>Expertise with mobile home materials</li>
                <li>Faster, safer, and more thorough cleaning</li>
              </ul>
            </div>
          </div>
        </section>
        <TestimonialSection />
        <section id="faqs" className="mt-12">
          <FAQSection />
        </section>
        <section className="bg-blue-50 p-8 rounded-lg text-center mt-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Get Your Free Mobile Home Quote!</h2>
          <a href="/contact" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">Contact Us</a>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </article>
  );
} 