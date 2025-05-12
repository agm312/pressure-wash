'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: "Historic Lincoln Park Home",
    description: "Complete exterior cleaning of a historic Chicago brownstone",
    category: "Residential",
    location: "Lincoln Park, Chicago",
    beforeImage: "/lincoln-park-before.jpg",
    afterImage: "/lincoln-park-after.jpg",
  },
  {
    title: "Commercial Plaza",
    description: "Sidewalk and facade cleaning for a downtown business complex",
    category: "Commercial",
    location: "Loop, Chicago",
    beforeImage: "/dt-before.jpg",
    afterImage: "/dt-after.jpg",
  },
  {
    title: "Modern Townhouse Development",
    description: "Multi-unit townhouse exterior cleaning project",
    category: "Residential",
    location: "West Loop, Chicago",
    beforeImage: "/townhouse-before.jpg",
    afterImage: "/townhouse-after.jpg",
  },
  {
    title: "Restaurant Patio",
    description: "Deep cleaning of outdoor dining area",
    category: "Commercial",
    location: "River North, Chicago",
    beforeImage: "/restaurant-before.jpg",
    afterImage: "/restaurant-after.jpg",
  },
  {
    title: "Victorian Home Restoration",
    description: "Detailed cleaning of ornate Victorian architecture",
    category: "Residential",
    location: "Oak Park, IL",
    beforeImage: "/victorian-home-before.jpg",
    afterImage: "/victorian-home-after.jpg",
  },
  {
    title: "Retail Shopping Center",
    description: "Complete exterior cleaning of shopping center walkways and facade",
    category: "Commercial",
    location: "Schaumburg, IL",
    beforeImage: "/retail-shopping-center-before.jpg",
    afterImage: "/retail-shopping-center-after.jpg",
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category.toLowerCase() === filter);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Project Gallery</h1>
        <p className="text-xl text-gray-600 text-center mb-8">
          Before and after transformations from our Chicago pressure washing projects
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-md ${
              filter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('residential')}
            className={`px-6 py-2 rounded-md ${
              filter === 'residential'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            Residential
          </button>
          <button
            onClick={() => setFilter('commercial')}
            className={`px-6 py-2 rounded-md ${
              filter === 'commercial'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            Commercial
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-200"
              onClick={() => setSelectedProject(index)}
            >
              <div className="relative h-64">
                {project.beforeImage && project.afterImage ? (
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 relative">
                      <img
                        src={project.beforeImage}
                        alt={`Before cleaning - ${project.title}`}
                        width={600}
                        height={400}
                        loading="eager"
                        style={{
                          objectFit: "cover",
                          objectPosition: "left center",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                      <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 text-sm rounded">
                        Before
                      </div>
                    </div>
                    <div className="w-1/2 relative">
                      <img
                        src={project.afterImage}
                        alt={`After cleaning - ${project.title}`}
                        width={600}
                        height={400}
                        loading="eager"
                        style={{
                          objectFit: "cover",
                          objectPosition: "left center",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                      <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 text-sm rounded">
                        After
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-600">{project.category}</span>
                  <span className="text-sm text-gray-500">{project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Property?</h2>
          <p className="text-gray-600 mb-8">
            Get professional pressure washing services for your Chicago property
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
} 