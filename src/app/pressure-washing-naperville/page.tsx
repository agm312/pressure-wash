export const metadata = {
  title: "Top-Rated Pressure Washing in Naperville | Free Quotes & Fast Service",
  description: "Expert pressure washing, power washing, and exterior cleaning in Naperville. Fast response, free quotes, and satisfaction guarantee. Call today!",
};

export default function NapervillePressureWashing() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">
          Top-Rated Pressure Washing in Naperville
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Power Washing & Driveway/Siding Cleaning
        </h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Looking for pressure washing in Naperville? Our skilled team offers power washing, exterior cleaning, and driveway & siding wash for homes and businesses. We use advanced equipment and eco-friendly products for a spotless finish.
        </p>
        <ul className="mb-8 space-y-2">
          <li className="bg-white rounded shadow p-4">• Driveway & Walkway Cleaning</li>
          <li className="bg-white rounded shadow p-4">• House Siding & Brick Wash</li>
          <li className="bg-white rounded shadow p-4">• Deck & Patio Power Washing</li>
          <li className="bg-white rounded shadow p-4">• Commercial Exterior Cleaning</li>
        </ul>
        <p className="text-md text-gray-700 mb-8 text-center">
          Enjoy fast response, free quotes, and a satisfaction guarantee. Naperville residents trust us for reliable, high-quality service!
        </p>
        <section className="bg-blue-100 rounded-lg p-8 text-center shadow mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-2">Get Your Free Quote in Naperville</h2>
          <p className="text-lg text-gray-800 mb-4">
            Call
            <a
              href="tel:404-955-7869"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-2 rounded ml-2 hover:bg-blue-700 transition"
            >
              404-955-7869
            </a>
            <br />
            or request a quote online. Serving all of Naperville.
          </p>
          <div className="text-gray-500 italic">[Service area map placeholder]</div>
        </section>
      </div>
    </main>
  );
} 