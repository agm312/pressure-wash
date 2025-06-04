import TestimonialSection from '@/components/TestimonialSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roof Pressure Washing: Safe, Effective Cleaning for Your Roof',
  description: 'Roof pressure washing: Learn when, why, and how to clean your roof safely. See costs, benefits, and get a free quote for roof pressure washing.',
  openGraph: {
    title: 'Roof Pressure Washing: Safe, Effective Cleaning for Your Roof',
    description: 'Discover the benefits, safety tips, and costs of roof pressure washing. Get a free quote for your roof today!',
    images: ['/images/roof-pressure-wash.jpg'],
  },
};

const faqData = [
  {
    question: 'How often should I wash my roof?',
    answer: 'Most roofs benefit from washing every 2–3 years, or sooner if you notice moss, algae, or heavy debris.'
  },
  {
    question: 'Will pressure washing damage my roof?',
    answer: 'When done correctly (using soft wash methods), roof pressure washing is safe for shingles, tile, and metal. High-pressure washing can cause damage if not performed by a professional.'
  },
  {
    question: 'Do I need permits or HOA approval?',
    answer: 'Some HOAs require approval for exterior cleaning. Check your local regulations and HOA guidelines before scheduling service.'
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Roof Pressure Washing',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Chi Pressure Wash',
    areaServed: { '@type': 'City', name: 'Chicago, IL' },
    url: 'https://chipressurewash.com',
  },
  description: 'Professional roof pressure washing and soft wash services for shingle, tile, and metal roofs in Chicago.',
};

export default function RoofPressureWashingPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Roof Pressure Washing</h1>
        <div className="flex justify-center mb-4">
          <img
            src="/images/roofing-pre-wash.png"
            alt="Technician safely pressure washing a roof"
            className="rounded-lg shadow-lg object-cover w-full max-w-2xl max-h-96"
            width="700"
            height="400"
            loading="lazy"
          />
        </div>
        <p className="text-lg text-gray-700">
          Roof pressure washing is a specialized cleaning process that removes moss, algae, and debris from your roof. Learn when it's needed, how it's done safely, and why it's essential for your home's longevity and curb appeal.
        </p>
      </header>
      <nav className="bg-blue-50 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-blue-900 mb-4">Table of Contents</h2>
        <ul className="space-y-2">
          <li><a href="#safety" className="text-blue-600 hover:text-blue-800 hover:underline">Is Roof Pressure Washing Safe?</a></li>
          <li><a href="#benefits" className="text-blue-600 hover:text-blue-800 hover:underline">Benefits of Roof Pressure Washing</a></li>
          <li><a href="#timing" className="text-blue-600 hover:text-blue-800 hover:underline">When Should You Pressure Wash Your Roof?</a></li>
          <li><a href="#cost" className="text-blue-600 hover:text-blue-800 hover:underline">Roof Pressure Washing Cost Breakdown</a></li>
          <li><a href="#diy-vs-pro" className="text-blue-600 hover:text-blue-800 hover:underline">DIY vs Professional Roof Washing</a></li>
          <li><a href="#faqs" className="text-blue-600 hover:text-blue-800 hover:underline">Frequently Asked Questions</a></li>
        </ul>
      </nav>
      <main className="prose prose-lg max-w-none">
        <section id="safety" className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Is Roof Pressure Washing Safe?</h2>
          <p>
            Roof pressure washing can be safe when performed with the right technique. <b>Soft washing</b> uses low pressure and specialized cleaning solutions to remove stains without damaging shingles, tile, or metal. High-pressure washing is not recommended for most roofs, as it can strip granules from shingles or crack tiles. Always consult a professional for your specific roof type.
          </p>
        </section>
        <section id="benefits" className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Benefits of Roof Pressure Washing</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><b>Boost curb appeal:</b> A clean roof instantly improves your home's appearance.</li>
            <li><b>Extend roof life:</b> Removing moss and algae prevents premature wear and rot.</li>
            <li><b>Remove mold, moss, and debris:</b> Protects your family's health and your roof's structure.</li>
          </ul>
        </section>
        <section id="timing" className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">When Should You Pressure Wash Your Roof?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Visible moss, algae, or black streaks</li>
            <li>After heavy storms or falling debris</li>
            <li>Every 2–3 years for maintenance</li>
            <li>Before selling your home for maximum curb appeal</li>
          </ul>
        </section>
        <section id="cost" className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Roof Pressure Washing Cost Breakdown</h2>
          <p>
            The average cost for roof pressure washing ranges from <b>$250 to $700</b> for most homes. Factors affecting price include:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><b>Roof size:</b> Larger roofs cost more to clean.</li>
            <li><b>Pitch/steepness:</b> Steeper roofs require extra safety measures.</li>
            <li><b>Material:</b> Tile, metal, and shingle roofs have different cleaning needs.</li>
            <li><b>Debris/moss level:</b> Heavy buildup may increase cost.</li>
            <li><b>Accessibility:</b> Multi-story homes or hard-to-reach areas may cost more.</li>
          </ul>
        </section>
        <section id="diy-vs-pro" className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">DIY vs Professional Roof Washing</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><b>Safety risks:</b> Roof work is dangerous—falls are a leading cause of home injuries.</li>
            <li><b>Equipment needed:</b> Pros use safety harnesses, soft wash systems, and eco-friendly cleaners.</li>
            <li><b>Why hire a pro?</b> Professionals ensure a thorough, safe clean and protect your roof warranty.</li>
          </ul>
        </section>
        <section id="faqs" className="mt-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqData.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="text-center mt-12">
          <a href="/contact" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">Get a Free Roof Quote</a>
        </div>
        <TestimonialSection />
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </article>
  );
} 