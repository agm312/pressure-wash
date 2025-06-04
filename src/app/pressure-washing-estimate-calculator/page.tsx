import type { Metadata } from 'next';
import PressureWashingCalculator from '@/components/PressureWashingCalculator';

export const metadata: Metadata = {
  title: 'Pressure Washing Estimate Calculator | Get Your Instant Quote',
  description: 'Use our pressure washing estimate calculator to get an instant quote based on your surface type and square footage. Quick, free & easy.',
  openGraph: {
    title: 'Pressure Washing Estimate Calculator | Get Your Instant Quote',
    description: 'Use our pressure washing estimate calculator to get an instant quote based on your surface type and square footage. Quick, free & easy.',
    images: ['/images/pre-wash-calc.png'],
  },
};

export default function PressureWashingEstimateCalculatorPage() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">Pressure Washing Estimate Calculator</h1>
        <p className="text-lg text-gray-700 mb-4">Get an instant quote for your pressure washing project. Choose your surface, enter your square footage, and see your estimate in seconds!</p>
        <div className="flex justify-center mb-4">
          <img src="/images/pre-wash-calc.png" alt="Pressure washing estimate calculator graphic" className="w-32 h-32 object-contain" loading="lazy" />
        </div>
      </header>
      <PressureWashingCalculator />
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">How the Pressure Washing Estimate Calculator Works</h2>
        <p className="mb-2">Our pressure washing estimate calculator uses average industry rates for each surface type. Enter your square footage, select your surface, and add extra grime if needed. The calculator gives you a realistic price range and cleaning method recommendation.</p>
        <ul className="list-disc pl-5">
          <li>Driveway: $0.15/sq ft (Pressure Wash)</li>
          <li>Siding: $0.20/sq ft (Soft Wash)</li>
          <li>Deck: $0.25/sq ft (Soft Wash)</li>
          <li>Roof: $0.30/sq ft (Soft Wash)</li>
          <li>Extra grime/mold adds 25% to the estimate</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Why Get an Estimate First?</h2>
        <ul className="list-disc pl-5 mb-2">
          <li>Plan your budget and avoid surprises</li>
          <li>Compare prices and services</li>
          <li>Streamline booking with accurate info</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">FAQs About Pressure Washing Costs</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h3 className="text-lg font-semibold text-blue-800 mb-1">How accurate is this quote?</h3>
            <p className="text-gray-600">Our pressure washing estimate calculator uses industry averages. Your actual price may vary based on location, access, and job complexity.</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h3 className="text-lg font-semibold text-blue-800 mb-1">Do prices vary by region?</h3>
            <p className="text-gray-600">Yes, regional labor and material costs can affect your estimate. Enter your zip code for a more tailored quote in the future.</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h3 className="text-lg font-semibold text-blue-800 mb-1">What if I don't know my square footage?</h3>
            <p className="text-gray-600">You can estimate by measuring length × width, or contact us for a free on-site assessment.</p>
          </div>
        </div>
      </section>
    </article>
  );
} 