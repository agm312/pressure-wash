export default function TableOfContents() {
  const sections = [
    { id: 'average-costs', title: 'Average Cost to Pressure Wash a House' },
    { id: 'factors', title: 'Factors Affecting Pressure Washing Costs' },
    { id: 'calculator', title: 'Pressure Washing Cost Calculator' },
    { id: 'diy-vs-pro', title: 'DIY vs. Professional Pressure Washing' },
    { id: 'faqs', title: 'Frequently Asked Questions' },
  ]

  return (
    <nav className="bg-blue-50 rounded-lg p-6 mb-8">
      <h2 className="text-lg font-semibold text-blue-900 mb-4">
        Table of Contents
      </h2>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-blue-600 hover:text-blue-800 hover:underline flex items-center"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
} 