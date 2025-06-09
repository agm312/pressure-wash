'use client';

import { useState } from 'react';

const services = [
  {
    id: 'driveway',
    title: 'Driveway Cleaning',
    description: 'Cleans concrete/asphalt, removes oil and grime',
    details: [
      'Removes oil stains and tire marks',
      'Eliminates dirt and grime buildup',
      'Restores original appearance',
      'Improves curb appeal',
      'Prevents long-term damage'
    ]
  },
  {
    id: 'siding',
    title: 'House Siding Cleaning',
    description: 'Cleans vinyl, brick, or aluminum siding (1–2 stories)',
    details: [
      'Removes mold and mildew',
      'Cleans dirt and debris',
      'Safe for all siding types',
      'Improves home appearance',
      'Prevents damage from buildup'
    ]
  },
  {
    id: 'deck',
    title: 'Deck or Patio Cleaning',
    description: 'Restores wood, composite, or concrete surfaces',
    details: [
      'Removes mold and mildew',
      'Cleans dirt and debris',
      'Prepares for staining/sealing',
      'Extends deck life',
      'Improves safety'
    ]
  },
  {
    id: 'fence',
    title: 'Fence Cleaning',
    description: 'Cleans wood or vinyl fences, removes mold or dirt',
    details: [
      'Removes mold and mildew',
      'Cleans dirt and debris',
      'Safe for all fence types',
      'Improves appearance',
      'Extends fence life'
    ]
  },
  {
    id: 'sidewalk',
    title: 'Sidewalk/Walkway Cleaning',
    description: 'Clears dirt, gum, and stains from concrete or brick',
    details: [
      'Removes gum and stains',
      'Cleans dirt and debris',
      'Improves safety',
      'Enhances appearance',
      'Prevents slip hazards'
    ]
  },
  {
    id: 'vehicle',
    title: 'Vehicle Cleaning',
    description: 'Cleans cars, trucks, RVs, or boats (gentle PSI)',
    details: [
      'Safe for all vehicle types',
      'Removes dirt and grime',
      'Cleans hard-to-reach areas',
      'Improves appearance',
      'Protects paint and finish'
    ]
  },
  {
    id: 'roof',
    title: 'Roof Pressure Washing',
    description: 'Safely cleans shingle, tile, or metal roofs; removes moss, algae, and debris',
    details: [
      'Removes moss, algae, and lichen',
      'Safe for shingles, tile, and metal roofs',
      'Soft wash method prevents damage',
      'Improves roof appearance and longevity',
      'Prevents costly repairs from buildup'
    ]
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                {selectedService === service.id ? 'Hide Details' : 'Show Details'}
              </button>
              {selectedService === service.id && (
                <div className="mt-4 pt-4 border-t">
                  <h3 className="font-semibold mb-2">Service Includes:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {service.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                  <button
                    onClick={() => window.location.href = '/contact'}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300 mb-4"
                  >
                    Get a Free Quote
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 