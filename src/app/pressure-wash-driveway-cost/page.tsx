import { Metadata } from 'next';
import DrivewayCalculator from '@/components/DrivewayCalculator';
import DrivewayCostTable from '@/components/DrivewayCostTable';
import FAQSection from '@/components/DrivewayFAQSection';
import TestimonialSection from '@/components/DrivewayTestimonialSection';
import TableOfContents from '@/components/DrivewayTableOfContents';

export const metadata: Metadata = {
  title: 'Cost to Pressure Wash Driveway in 2025: Prices & Calculator',
  description: 'Discover the cost to pressure wash a driveway in 2025. Average prices range from $100–$240. Use our free calculator to estimate your driveway pressure washing cost!',
  openGraph: {
    title: 'Cost to Pressure Wash Driveway in 2025',
    description: 'Find out the cost to pressure wash a driveway with average prices and a free calculator.',
    images: ['/driveway-pressure-washing.jpg'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does it take to pressure wash a driveway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It typically takes 1–3 hours to pressure wash a driveway, depending on size and grime level.',
      },
    },
  ],
};

export default function DrivewayCostPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Cost to Pressure Wash a Driveway in 2025: Prices & Calculator
        </h1>
        <img
          src="/Pressure%20wash%20driveway.png"
          alt="Clean concrete driveway after pressure washing"
          className="w-full h-auto rounded-lg shadow-lg mb-6"
          loading="lazy"
        />
        <p className="text-lg text-gray-700">
          Curious about the <strong>cost to pressure wash a driveway</strong>? In 2025, prices typically range from $100 to $240 for a standard 600 sq. ft. driveway. This guide breaks down average costs, factors that impact pricing, and includes a free calculator to estimate your project. Whether you're hiring a professional or considering DIY, we've got all the details you need!
        </p>
      </header>
      <TableOfContents />
      <main className="prose prose-lg max-w-none">
        <section id="average-costs" className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Average Cost to Pressure Wash a Driveway</h2>
          <DrivewayCostTable />
        </section>
        <section id="factors" className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Factors Affecting Driveway Pressure Washing Costs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Driveway Size</h3>
              <p>Larger driveways cost more. Expect $0.20–$0.40 per sq. ft.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Driveway Material</h3>
              <p>Pavers are pricier to clean than concrete due to their delicate nature.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Grime Level</h3>
              <p>Heavy buildup requires more time and specialized cleaning solutions.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Location</h3>
              <p>Urban areas may have higher prices due to demand and travel costs.</p>
            </div>
          </div>
        </section>
        <section id="calculator" className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Driveway Pressure Washing Cost Calculator</h2>
          <DrivewayCalculator />
        </section>
        <section id="diy-vs-pro" className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">DIY vs. Professional Pressure Washing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">DIY Pressure Washing</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Rental cost: $35-$175 per day</li>
                <li>Cleaning solutions: $20-$50</li>
                <li>Time investment: 2-4 hours</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Professional Service</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Complete service: $100-$240</li>
                <li>Professional equipment</li>
                <li>Insurance coverage</li>
                <li>Expert knowledge</li>
              </ul>
            </div>
          </div>
        </section>
        <TestimonialSection />
        <FAQSection />
        <section className="bg-blue-50 p-8 rounded-lg text-center mt-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Get a Free Quote for Your Driveway Today!</h2>
          <a href="/contact" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">Contact Us</a>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </article>
  );
} 