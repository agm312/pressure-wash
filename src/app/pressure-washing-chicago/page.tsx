export const metadata = {
  title: "Top-Rated Pressure Washing in Chicago | Free Quotes & Fast Service",
  description: "Professional pressure washing, power washing, and exterior cleaning in Chicago. Fast response, free quotes, and satisfaction guarantee. Call today!",
};

export default function ChicagoPressureWashing() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">
          Top-Rated Pressure Washing in Chicago
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Professional Power Washing & Exterior Cleaning
        </h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Looking for the best pressure washing in Chicago? Our expert team delivers top-quality power washing, exterior cleaning, and driveway & siding wash services for homes and businesses throughout Chicago. We use state-of-the-art equipment and eco-friendly solutions to restore your property's curb appeal.
        </p>
        <ul className="mb-8 space-y-2">
          <li className="bg-white rounded shadow p-4">• Driveway & Sidewalk Cleaning</li>
          <li className="bg-white rounded shadow p-4">• House Siding & Brick Wash</li>
          <li className="bg-white rounded shadow p-4">• Deck & Patio Power Washing</li>
          <li className="bg-white rounded shadow p-4">• Commercial Exterior Cleaning</li>
        </ul>
        <p className="text-md text-gray-700 mb-8 text-center">
          We offer fast response times, free quotes, and a 100% satisfaction guarantee. Our local Chicago team is ready to help you make your property shine!
        </p>
        <section className="bg-blue-100 rounded-lg p-8 text-center shadow mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-2">Get Your Free Quote in Chicago</h2>
          <p className="text-lg text-gray-800 mb-4">
            Call us at
            <a
              href="tel:555-123-4567"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-2 rounded ml-2 hover:bg-blue-700 transition"
            >
              555-123-4567
            </a>
            <br />
            or request a quote online. Serving all neighborhoods in Chicago.
          </p>
          <div className="text-gray-500 italic">[Service area map placeholder]</div>
        </section>
      </div>
    </main>
  );
} 