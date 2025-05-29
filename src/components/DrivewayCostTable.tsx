export default function DrivewayCostTable() {
  const costData = [
    { size: '400', cost: '$80–$160', perSqFt: '$0.20–$0.40' },
    { size: '600', cost: '$100–$240', perSqFt: '$0.20–$0.40' },
    { size: '1,000', cost: '$200–$400', perSqFt: '$0.20–$0.40' },
  ];
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driveway Size (sq. ft.)</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Cost Range</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost per Square Foot</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {costData.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.size}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.cost}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.perSqFt}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-sm text-gray-600">* Prices are estimates based on national averages. Actual costs may vary based on location, material, and specific requirements.</p>
    </div>
  );
} 