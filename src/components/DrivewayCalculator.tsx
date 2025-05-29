'use client'

import { useState } from 'react'

interface CalculatorInputs {
  squareFootage: number
  material: 'concrete' | 'asphalt' | 'pavers'
  grime: 'light' | 'moderate' | 'heavy'
  location: 'urban' | 'suburban' | 'rural'
}

const BASE_COST = 0.25
const MATERIAL_MULTIPLIER = {
  concrete: 1,
  asphalt: 1.1,
  pavers: 1.3,
}
const GRIME_MULTIPLIER = {
  light: 1,
  moderate: 1.2,
  heavy: 1.5,
}
const LOCATION_MULTIPLIER = {
  urban: 1.2,
  suburban: 1,
  rural: 0.8,
}

export default function DrivewayCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    squareFootage: 600,
    material: 'concrete',
    grime: 'light',
    location: 'suburban',
  })
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null)

  const calculateCost = () => {
    const { squareFootage, material, grime, location } = inputs
    const totalCost =
      squareFootage *
      BASE_COST *
      MATERIAL_MULTIPLIER[material] *
      GRIME_MULTIPLIER[grime] *
      LOCATION_MULTIPLIER[location]
    setEstimatedCost(totalCost)
  }

  const resetForm = () => {
    setInputs({
      squareFootage: 600,
      material: 'concrete',
      grime: 'light',
      location: 'suburban',
    })
    setEstimatedCost(null)
  }

  const handleInputChange = (
    field: keyof CalculatorInputs,
    value: string | number
  ) => {
    setInputs((prev) => ({
      ...prev,
      [field]: field === 'squareFootage' ? Number(value) : value,
    }))
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="squareFootage" className="block text-sm font-medium text-gray-700 mb-1">
              Square Footage
            </label>
            <input
              type="number"
              id="squareFootage"
              value={inputs.squareFootage}
              onChange={(e) => handleInputChange('squareFootage', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="100"
              step="50"
            />
          </div>
          <div>
            <label htmlFor="material" className="block text-sm font-medium text-gray-700 mb-1">
              Driveway Material
            </label>
            <select
              id="material"
              value={inputs.material}
              onChange={(e) => handleInputChange('material', e.target.value as CalculatorInputs['material'])}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="concrete">Concrete</option>
              <option value="asphalt">Asphalt</option>
              <option value="pavers">Pavers</option>
            </select>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="grime" className="block text-sm font-medium text-gray-700 mb-1">
              Grime Level
            </label>
            <select
              id="grime"
              value={inputs.grime}
              onChange={(e) => handleInputChange('grime', e.target.value as CalculatorInputs['grime'])}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="light">Light</option>
              <option value="moderate">Moderate</option>
              <option value="heavy">Heavy</option>
            </select>
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <select
              id="location"
              value={inputs.location}
              onChange={(e) => handleInputChange('location', e.target.value as CalculatorInputs['location'])}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="urban">Urban</option>
              <option value="suburban">Suburban</option>
              <option value="rural">Rural</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-center space-x-4">
        <button
          onClick={calculateCost}
          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
        >
          Calculate Cost
        </button>
        <button
          onClick={resetForm}
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
        >
          Reset
        </button>
      </div>
      {estimatedCost !== null && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg text-center">
          <p className="text-lg font-semibold text-blue-900">
            Estimated Cost: ${estimatedCost.toFixed(2)}
          </p>
          <p className="text-sm text-gray-600 mt-1">
            This is an estimate based on your inputs. Contact us for a detailed quote.
          </p>
        </div>
      )}
    </div>
  )
} 