'use client'

import { useState } from 'react'

const baseRates = {
  driveway: 0.15,
  siding: 0.20,
  deck: 0.25,
  roof: 0.30,
}

const surfaceLabels = {
  driveway: 'Driveway',
  siding: 'Siding',
  deck: 'Deck',
  roof: 'Roof',
}

const cleaningMethods = {
  driveway: 'Pressure Wash',
  siding: 'Soft Wash',
  deck: 'Soft Wash',
  roof: 'Soft Wash',
}

export default function PressureWashingCalculator() {
  const [surface, setSurface] = useState('driveway')
  const [sqft, setSqft] = useState(500)
  const [extraGrime, setExtraGrime] = useState(false)
  const [zip, setZip] = useState('')
  const [estimate, setEstimate] = useState<{min: number, max: number, method: string} | null>(null)

  function calculateEstimate() {
    let rate = baseRates[surface as keyof typeof baseRates]
    if (extraGrime) rate *= 1.25
    const min = Math.round(sqft * rate * 0.9)
    const max = Math.round(sqft * rate * 1.1)
    setEstimate({
      min,
      max,
      method: cleaningMethods[surface as keyof typeof cleaningMethods],
    })
  }

  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-10">
      <form className="space-y-4" onSubmit={e => {e.preventDefault(); calculateEstimate()}}>
        <div>
          <label className="block font-semibold mb-1">Surface Type</label>
          <select
            value={surface}
            onChange={e => setSurface(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {Object.entries(surfaceLabels).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-1">Square Footage</label>
          <input
            type="number"
            min={50}
            max={10000}
            value={sqft}
            onChange={e => setSqft(Number(e.target.value))}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="extraGrime"
            checked={extraGrime}
            onChange={e => setExtraGrime(e.target.checked)}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="extraGrime" className="font-medium">Extra grime/mold buildup</label>
        </div>
        <div>
          <label className="block font-semibold mb-1">Zip Code <span className="text-gray-400 text-sm">(optional)</span></label>
          <input
            type="text"
            maxLength={10}
            value={zip}
            onChange={e => setZip(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g. 60601"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg mt-2"
        >
          Calculate My Estimate
        </button>
      </form>
      {estimate && (
        <div className="mt-8 bg-blue-50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Your Estimated Price Range</h3>
          <div className="text-2xl font-bold text-green-700 mb-2">${estimate.min} – ${estimate.max}</div>
          <div className="mb-2 text-gray-700">Suggested Cleaning Method: <span className="font-semibold">{estimate.method}</span></div>
          <a href="/contact" className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors mt-4">Book a Free Consultation</a>
        </div>
      )}
    </section>
  )
} 