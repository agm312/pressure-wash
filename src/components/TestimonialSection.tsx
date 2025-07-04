export default function TestimonialSection() {
  const testimonials = [
    {
      quote: 'PressurePro made my home look brand new! Their team was professional, thorough, and reasonably priced. The difference is night and day.',
      author: 'John D.',
      location: 'Lincoln Park, Chicago, IL',
      rating: 5,
    },
    {
      quote: 'I was amazed at how quickly they transformed my dirty siding. The price was exactly what they quoted, and the service was exceptional.',
      author: 'Sarah M.',
      location: 'Wicker Park, Chicago, IL',
      rating: 5,
    },
    {
      quote: 'After years of DIY attempts, I finally hired professionals. Worth every penny! My house hasn\'t looked this good since we moved in.',
      author: 'Michael R.',
      location: 'Oak Park, IL',
      rating: 5,
    },
  ];

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">What Our Customers Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
            <div className="flex items-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-gray-600 mb-4">"{testimonial.quote}"</blockquote>
            <div className="text-sm text-gray-500">
              <p className="font-semibold text-gray-900">{testimonial.author}</p>
              <p>{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 