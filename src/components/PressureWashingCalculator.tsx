'use client'

import { useState } from 'react'

interface CalculatorInputs {
  squareFootage: number
  stories: number
  sidingMaterial: 'vinyl' | 'brick' | 'stucco' | 'wood'
  grimeLevel: 'light' | 'moderate' | 'heavy'
}

const BASE_COST = 0.20
const STORIES_MULTIPLIER = {
  1: 1,
  2: 1.2,
  3: 1.5,
}
const SIDING_MULTIPLIER = {
  vinyl: 1,
  brick: 1.1,
  stucco: 1.2,
  wood: 1.3,
}
const GRIME_MULTIPLIER = {
  light: 1,
  moderate: 1.2,
  heavy: 1.5,
}

export default function PressureWashingCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    squareFootage: 2000,
    stories: 1,
    sidingMaterial: 'vinyl',
    grimeLevel: 'light',
  })
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null)

  const calculateCost = () => {
    const { squareFootage, stories, sidingMaterial, grimeLevel } = inputs
    const totalCost =
      squareFootage *
      BASE_COST *
      STORIES_MULTIPLIER[stories as keyof typeof STORIES_MULTIPLIER] *
      SIDING_MULTIPLIER[sidingMaterial] *
      GRIME_MULTIPLIER[grimeLevel]
    setEstimatedCost(totalCost)
  }

  const resetForm = () => {
    setInputs({
      squareFootage: 2000,
      stories: 1,
      sidingMaterial: 'vinyl',
      grimeLevel: 'light',
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
            <label
              htmlFor="squareFootage"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Square Footage
            </label>
            <input
              type="number"
              id="squareFootage"
              value={inputs.squareFootage}
              onChange={(e) => handleInputChange('squareFootage', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="100"
              step="100"
            />
          </div>

          <div>
            <label
              htmlFor="stories"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Number of Stories
            </label>
            <select
              id="stories"
              value={inputs.stories}
              onChange={(e) => handleInputChange('stories', Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={1}>1 Story</option>
              <option value={2}>2 Stories</option>
              <option value={3}>3 Stories</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="sidingMaterial"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Siding Material
            </label>
            <select
              id="sidingMaterial"
              value={inputs.sidingMaterial}
              onChange={(e) =>
                handleInputChange('sidingMaterial', e.target.value as CalculatorInputs['sidingMaterial'])
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="vinyl">Vinyl</option>
              <option value="brick">Brick</option>
              <option value="stucco">Stucco</option>
              <option value="wood">Wood</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="grimeLevel"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Grime Level
            </label>
            <select
              id="grimeLevel"
              value={inputs.grimeLevel}
              onChange={(e) =>
                handleInputChange('grimeLevel', e.target.value as CalculatorInputs['grimeLevel'])
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="light">Light</option>
              <option value="moderate">Moderate</option>
              <option value="heavy">Heavy</option>
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