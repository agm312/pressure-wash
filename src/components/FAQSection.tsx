export default function FAQSection() {
  const faqs = [
    {
      question: 'How much does it cost to pressure wash a house?',
      answer:
        'The average cost to pressure wash a house ranges from $250 to $600 for a 2,000 sq. ft. home, or $0.10 to $0.44 per square foot. Factors like house size, number of stories, siding material, and grime level affect the final price.',
    },
    {
      question: 'How long does it take to pressure wash a house?',
      answer:
        'It typically takes 2-6 hours to pressure wash a house, depending on the size and grime level. A professional crew can complete a standard 2,000 sq. ft. home in about 3-4 hours.',
    },
    {
      question: 'Is it better to DIY or hire a professional for pressure washing?',
      answer:
        'While DIY pressure washing can save money (rental costs $35-$175/day), hiring a professional is recommended for safety, proper equipment, and expertise. Professionals can prevent damage to siding and ensure thorough cleaning.',
    },
    {
      question: 'What factors affect the cost of pressure washing?',
      answer:
        'Key factors include house size, number of stories, siding material, grime level, accessibility, and local market rates. Additional services like gutter cleaning or deck washing may also affect the total cost.',
    },
    {
      question: 'How often should I pressure wash my house?',
      answer:
        'Most homes benefit from pressure washing every 1-3 years, depending on climate, location, and environmental factors. Homes in humid or coastal areas may need more frequent cleaning.',
    },
    {
      question: 'Do I need to be home during pressure washing?',
      answer:
        'While you don't need to be home, it's recommended to be available for the initial walkthrough and to answer any questions. Make sure to secure pets and remove any outdoor furniture or decorations.',
    },
    {
      question: 'What's included in a professional pressure washing service?',
      answer:
        'A professional service typically includes pre-inspection, surface preparation, pressure washing of all exterior surfaces, cleaning solution application, and post-cleaning inspection. Some companies also offer additional services like gutter cleaning or deck washing.',
    },
  ]

  return (
    <section id="faqs" className="mt-12">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              {faq.question}
            </h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
} 