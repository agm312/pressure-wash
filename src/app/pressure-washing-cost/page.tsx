import { Metadata } from 'next'
import PressureWashingCalculator from '@/components/PressureWashingCalculator'
import CostTable from '@/components/CostTable'
import FAQSection from '@/components/FAQSection'
import TestimonialSection from '@/components/TestimonialSection'
import TableOfContents from '@/components/TableOfContents'

export const metadata: Metadata = {
  title: 'How Much to Pressure Wash a House in 2025: Complete Cost Guide',
  description: 'Learn how much to pressure wash a house in 2025. Get average costs, factors affecting prices, and use our free calculator to estimate your project!',
  openGraph: {
    title: 'How Much to Pressure Wash a House in 2025',
    description: 'Discover the cost to pressure wash a house, including a free calculator to estimate your project.',
    images: ['/lincoln-park-after.jpg'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to pressure wash a house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The average cost to pressure wash a house ranges from $250 to $600 for a 2,000 sq. ft. home, or $0.10 to $0.44 per square foot. Factors like house size, number of stories, siding material, and grime level affect the final price.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to pressure wash a house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It typically takes 2-6 hours to pressure wash a house, depending on the size and grime level. A professional crew can complete a standard 2,000 sq. ft. home in about 3-4 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it better to DIY or hire a professional for pressure washing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While DIY pressure washing can save money (rental costs $35-$175/day), hiring a professional is recommended for safety, proper equipment, and expertise. Professionals can prevent damage to siding and ensure thorough cleaning.',
      },
    },
  ],
}

export default function PressureWashingCostPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          How Much to Pressure Wash a House in 2025: Complete Cost Guide
        </h1>
        <img
          src="/lincoln-park-after.jpg"
          alt="Clean house after professional pressure washing in Lincoln Park"
          className="w-full h-auto rounded-lg shadow-lg mb-6"
          loading="lazy"
        />
        <p className="text-lg text-gray-700">
          Wondering <strong>how much to pressure wash a house</strong>? In 2025, costs typically range from $250 to $600 for a 2,000 sq. ft. home. This guide breaks down average prices, factors affecting costs, and includes a free calculator to estimate your project. Whether you're considering DIY or hiring a pro, we've got you covered!
        </p>
      </header>

      <TableOfContents />

      <main className="prose prose-lg max-w-none">
        <section id="average-costs" className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Average Cost to Pressure Wash a House
          </h2>
          <CostTable />
        </section>

        <section id="calculator" className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Pressure Washing Cost Calculator
          </h2>
          <PressureWashingCalculator />
        </section>

        <section id="factors" className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Factors Affecting Pressure Washing Costs
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">House Size</h3>
              <p>Larger homes require more time and resources, increasing the overall cost.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Number of Stories</h3>
              <p>Multi-story homes require special equipment and safety measures, adding to the cost.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Siding Material</h3>
              <p>Different materials require different pressure settings and cleaning methods.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Grime Level</h3>
              <p>Heavy buildup requires more time and specialized cleaning solutions.</p>
            </div>
          </div>
        </section>

        <section id="diy-vs-pro" className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            DIY vs. Professional Pressure Washing
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">DIY Pressure Washing</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Rental cost: $35-$175 per day</li>
                <li>Cleaning solutions: $20-$50</li>
                <li>Safety equipment: $30-$100</li>
                <li>Time investment: 4-8 hours</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Professional Service</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Complete service: $250-$600</li>
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
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Ready to Transform Your Home?
          </h2>
          <p className="mb-6">
            Get a free, no-obligation quote from our professional pressure washing experts.
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Get a Free Quote Today!
          </a>
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </article>
  )
} 