"use client";

import { useState } from "react";

const BASE_RATE = 0.3; // $0.30 per sq ft
const GRIME_MULTIPLIER = 1.25; // heavy algae/moss
const STEEP_MULTIPLIER = 1.15; // steep/sloped

const ROOF_TYPES = [
  { value: "asphalt", label: "Asphalt shingles" },
  { value: "tile", label: "Tile" },
  { value: "metal", label: "Metal" },
];

export default function RoofCalculator() {
  const [size, setSize] = useState(1000);
  const [roofType, setRoofType] = useState("asphalt");
  const [steep, setSteep] = useState(false);
  const [grime, setGrime] = useState(false);
  const [zip, setZip] = useState("");
  const [result, setResult] = useState<null | { min: number; max: number; summary: string }>(null);

  const calculate = () => {
    let multiplier = 1;
    let factors: string[] = [];
    if (steep) {
      multiplier *= STEEP_MULTIPLIER;
      factors.push("steep/sloped roof");
    }
    if (grime) {
      multiplier *= GRIME_MULTIPLIER;
      factors.push("heavy algae/moss buildup");
    }
    let est = size * BASE_RATE * multiplier;
    // Show a range: ±7.5%
    const min = Math.round(est * 0.925);
    const max = Math.round(est * 1.075);
    let summary = `Estimated cost to pressure wash your ${size.toLocaleString()} sq ft roof: $${min} – $${max}`;
    if (factors.length) {
      summary += `\nIncludes adjustments for ${factors.join(" and ")}.`;
    }
    setResult({ min, max, summary });
  };

  return (
    <section className="my-10">
      <div className="bg-blue-50 rounded-lg p-6 shadow-md max-w-xl mx-auto">
        <h3 className="text-xl font-bold text-blue-900 mb-2 text-center">Roof Pressure Washing Calculator</h3>
        <p className="text-gray-700 mb-4 text-center">Use our quick calculator to estimate your roof pressure washing cost in seconds!</p>
        <form
          className="grid gap-4"
          onSubmit={e => {
            e.preventDefault();
            calculate();
          }}
        >
          <div>
            <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">Roof Size (sq ft)</label>
            <input
              id="size"
              type="number"
              min={100}
              step={10}
              value={size}
              onChange={e => setSize(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="roofType" className="block text-sm font-medium text-gray-700 mb-1">Roof Type</label>
            <select
              id="roofType"
              value={roofType}
              onChange={e => setRoofType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {ROOF_TYPES.map(rt => (
                <option key={rt.value} value={rt.value}>{rt.label}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center">
            <input
              id="steep"
              type="checkbox"
              checked={steep}
              onChange={e => setSteep(e.target.checked)}
              className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="steep" className="text-sm text-gray-700">Steep/Sloped Roof? <span className="text-xs text-gray-500">(+15%)</span></label>
          </div>
          <div className="flex items-center">
            <input
              id="grime"
              type="checkbox"
              checked={grime}
              onChange={e => setGrime(e.target.checked)}
              className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="grime" className="text-sm text-gray-700">Heavy Algae or Moss Buildup? <span className="text-xs text-gray-500">(+25%)</span></label>
          </div>
          <div>
            <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">Zip Code <span className="text-xs text-gray-400">(optional)</span></label>
            <input
              id="zip"
              type="text"
              value={zip}
              onChange={e => setZip(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              maxLength={10}
              placeholder="e.g. 60616"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-2 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors font-semibold"
          >
            Calculate
          </button>
        </form>
        {result && (
          <div className="mt-6 p-4 bg-white rounded-lg text-center border border-blue-100">
            <p className="text-lg font-semibold text-blue-900 mb-1">Estimated Price Range: <span className="text-green-700">${result.min} – ${result.max}</span></p>
            <p className="text-gray-700 whitespace-pre-line">{result.summary}</p>
            <p className="text-xs text-gray-500 mt-2">*Actual price may vary by location, access, and job details.</p>
            <a
              href={`/contact?service=roof&message=${encodeURIComponent(result.summary)}`}
              className="inline-block mt-4 bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Book This Estimate / Contact Us
            </a>
          </div>
        )}
      </div>
    </section>
  );
} 