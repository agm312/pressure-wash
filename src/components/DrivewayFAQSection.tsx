export default function DrivewayFAQSection() {
  const faqs = [
    {
      question: 'How much does it cost to pressure wash a driveway?',
      answer: 'The average cost to pressure wash a driveway ranges from $100 to $240 for a 600 sq. ft. driveway, or $0.20 to $0.40 per square foot.'
    },
    {
      question: 'How long does it take to pressure wash a driveway?',
      answer: 'It typically takes 1–3 hours to pressure wash a driveway, depending on size and grime level.'
    },
    {
      question: 'Is it better to DIY or hire a professional for driveway pressure washing?',
      answer: 'DIY can save money, but professionals have the right equipment and experience to avoid damage and ensure a thorough clean.'
    },
    {
      question: 'What factors affect the cost of driveway pressure washing?',
      answer: 'Key factors include driveway size, material, grime level, location, and any additional services like stain removal.'
    },
    {
      question: 'How often should I pressure wash my driveway?',
      answer: 'Most driveways benefit from pressure washing every 1-2 years, or more often in areas with heavy grime or tree cover.'
    },
    {
      question: 'Do I need to be home during driveway pressure washing?',
      answer: 'It\'s not required, but it\'s helpful to be available for questions or to move vehicles.'
    },
  ];
  return (
    <section id="faqs" className="mt-12">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 