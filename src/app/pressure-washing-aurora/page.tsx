export const metadata = {
  title: "Top-Rated Pressure Washing in Aurora | Free Quotes & Fast Service",
  description: "Expert pressure washing, power washing, and exterior cleaning in Aurora. Fast response, free quotes, and satisfaction guarantee. Call today!",
};

export default function AuroraPressureWashing() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">
          Top-Rated Pressure Washing in Aurora
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Power Washing & Exterior Cleaning Services
        </h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Looking for pressure washing in Aurora? Our professional team offers power washing, exterior cleaning, and driveway & siding wash for homes and businesses. We use advanced equipment and eco-friendly products for a pristine finish.
        </p>
        <ul className="mb-8 space-y-2">
          <li className="bg-white rounded shadow p-4">• Driveway & Walkway Cleaning</li>
          <li className="bg-white rounded shadow p-4">• House Siding & Brick Wash</li>
          <li className="bg-white rounded shadow p-4">• Deck & Patio Power Washing</li>
          <li className="bg-white rounded shadow p-4">• Commercial Exterior Cleaning</li>
        </ul>
        <p className="text-md text-gray-700 mb-8 text-center">
          Enjoy fast response, free quotes, and a satisfaction guarantee. Aurora residents trust us for reliable, high-quality service!
        </p>
        <section className="bg-blue-100 rounded-lg p-8 text-center shadow mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-2">Get Your Free Quote in Aurora</h2>
          <p className="text-lg text-gray-800 mb-4">
            Call
            <a
              href="tel:555-123-4567"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-2 rounded ml-2 hover:bg-blue-700 transition"
            >
              555-123-4567
            </a>
            <br />
            or request a quote online. Serving all of Aurora.
          </p>
          <div className="text-gray-500 italic">[Service area map placeholder]</div>
        </section>
      </div>
    </main>
  );
} 