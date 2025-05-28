export default function CostTable() {
  const costData = [
    { size: '1,000', cost: '$100–$250', perSqFt: '$0.10–$0.25' },
    { size: '1,500', cost: '$150–$350', perSqFt: '$0.10–$0.23' },
    { size: '2,000', cost: '$250–$600', perSqFt: '$0.13–$0.30' },
    { size: '2,500', cost: '$300–$750', perSqFt: '$0.12–$0.30' },
    { size: '3,000', cost: '$400–$900', perSqFt: '$0.13–$0.30' },
    { size: '3,500', cost: '$500–$1,050', perSqFt: '$0.14–$0.30' },
    { size: '4,000', cost: '$600–$1,200', perSqFt: '$0.15–$0.30' },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              House Size (sq. ft.)
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Total Cost Range
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Cost per Square Foot
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {costData.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {row.size}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.cost}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.perSqFt}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-sm text-gray-600">
        * Prices are estimates based on national averages. Actual costs may vary based on location,
        condition, and specific requirements.
      </p>
    </div>
  )
} 