import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  priceRange: string;
  pricingMetric: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  priceRange,
  pricingMetric,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="border-t pt-4">
        <p className="text-lg font-medium text-blue-600">{priceRange}</p>
        <p className="text-sm text-gray-500">{pricingMetric}</p>
      </div>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
        Book Now
      </button>
    </div>
  );
};

export default ServiceCard; 