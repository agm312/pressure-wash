'use client';
import React, { useState } from 'react';

const regions = [
  { name: 'National Average', low: 0.15, high: 0.30 },
  { name: 'Midwest', low: 0.13, high: 0.25 },
  { name: 'South', low: 0.12, high: 0.22 },
  { name: 'Northeast', low: 0.16, high: 0.32 },
  { name: 'West', low: 0.17, high: 0.33 },
];

const grimeLevels = [
  { label: 'Light', multiplier: 1 },
  { label: 'Moderate', multiplier: 1.1 },
  { label: 'Heavy', multiplier: 1.25 },
];

export default function MobileHomeCalculator() {
  const [size, setSize] = useState(800);
  const [region, setRegion] = useState(regions[0]);
  const [grime, setGrime] = useState(grimeLevels[0]);

  const min = Math.round(size * region.low * grime.multiplier);
  const max = Math.round(size * region.high * grime.multiplier);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-xl mx-auto">
      <h3 className="text-xl font-bold text-blue-900 mb-4">Mobile Home Pressure Washing Cost Calculator</h3>
      <form className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Home Size (sq. ft.)</label>
          <input
            type="number"
            min={400}
            max={2500}
            value={size}
            onChange={e => setSize(Number(e.target.value))}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Region</label>
          <select
            value={region.name}
            onChange={e => setRegion(regions.find(r => r.name === e.target.value) || regions[0])}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {regions.map(r => (
              <option key={r.name} value={r.name}>{r.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-1">Grime Level</label>
          <select
            value={grime.label}
            onChange={e => setGrime(grimeLevels.find(g => g.label === e.target.value) || grimeLevels[0])}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {grimeLevels.map(g => (
              <option key={g.label} value={g.label}>{g.label}</option>
            ))}
          </select>
        </div>
      </form>
      <div className="mt-6 text-center">
        <div className="text-lg font-semibold text-blue-800 mb-2">Estimated Cost Range:</div>
        <div className="text-2xl font-bold text-green-700 mb-4">${min} – ${max}</div>
        <a href="/contact" className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">Get Your Free Mobile Home Quote</a>
      </div>
    </div>
  );
} 