'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What areas of Chicago do you serve?",
    answer: "We serve the entire Chicago metropolitan area, including all neighborhoods within the city limits and surrounding suburbs such as Oak Park, Evanston, Naperville, Schaumburg, and Aurora. Contact us to confirm service availability in your specific location."
  },
  {
    question: "How do you handle Chicago's winter weather?",
    answer: "We monitor weather conditions closely and typically provide services when temperatures are above freezing. For winter months, we recommend scheduling services during milder days to ensure optimal results. We also use special techniques and solutions that are effective in colder temperatures when necessary."
  },
  {
    question: "Are you licensed and insured in Chicago?",
    answer: "Yes, we are fully licensed by the City of Chicago and carry comprehensive insurance coverage, including general liability and workers' compensation. We're happy to provide proof of insurance upon request."
  },
  {
    question: "What's your pricing structure?",
    answer: "Our pricing is based on the size of the area to be cleaned and the type of service required. We provide detailed, written quotes before beginning any work. We offer both per-square-foot pricing and flat rates depending on the service. Contact us for a free quote tailored to your specific needs."
  },
  {
    question: "How do you protect my landscaping during pressure washing?",
    answer: "We take great care to protect your landscaping by using eco-friendly cleaning solutions and appropriate pressure levels. We also pre-wet surrounding plants and cover sensitive areas when necessary to ensure they're protected during the cleaning process."
  },
  {
    question: "Do you work year-round in Chicago?",
    answer: "Yes, we operate year-round, weather permitting. However, we recommend scheduling exterior cleaning services during warmer months (March through November) for optimal results. We do offer certain services during winter months when conditions allow."
  },
  {
    question: "What type of equipment and cleaning solutions do you use?",
    answer: "We use professional-grade pressure washing equipment with adjustable PSI levels suitable for different surfaces. Our cleaning solutions are environmentally friendly and effective at removing Chicago's unique combination of urban grime, winter salt residue, and organic growth."
  },
  {
    question: "How long does a typical pressure washing job take?",
    answer: "Job duration varies depending on the size and complexity of the project. A typical driveway might take 1-2 hours, while a full house exterior could take 4-6 hours. We'll provide a time estimate during your quote."
  },
  {
    question: "Do you offer any guarantees?",
    answer: "Yes, we offer a 100% satisfaction guarantee on all our services. If you're not completely satisfied with our work, we'll return to address any areas of concern at no additional cost."
  },
  {
    question: "How often should I have my property pressure washed in Chicago?",
    answer: "In Chicago's climate, we recommend annual cleaning for most surfaces. However, high-traffic areas like driveways or properties near construction might benefit from more frequent cleaning. We can help you develop a maintenance schedule based on your specific situation."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Common questions about our pressure washing services in Chicago
        </p>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">{faq.question}</h2>
                  <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl mb-6">Still have questions?</p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
} 