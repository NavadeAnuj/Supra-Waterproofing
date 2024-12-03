import React from "react";

const services = [
  {
    id: 1,
    title: "Roof Waterproofing",
    description:
      "Protect your roof from leaks and damage with our durable waterproofing solutions.",
    icon: "🏠",
  },
  {
    id: 2,
    title: "Basement Waterproofing",
    description:
      "Prevent water seepage and dampness in your basement with our advanced techniques.",
    icon: "🏢",
  },
  {
    id: 3,
    title: "Bathroom Waterproofing",
    description:
      "Ensure a leak-free and mold-resistant bathroom with our professional services.",
    icon: "🚿",
  },
  {
    id: 4,
    title: "Tank Waterproofing",
    description:
      "Protect your water tanks from leaks and cracks with our specialized coatings.",
    icon: "🛢️",
  },
  {
    id: 5,
    title: "Balcony Waterproofing",
    description:
      "Keep your balcony safe from water damage and seepage with our reliable solutions.",
    icon: "🌄",
  },
  {
    id: 6,
    title: "Swimming Pool Waterproofing",
    description:
      "Enhance your pool’s durability with our high-quality waterproofing services.",
    icon: "🏊‍♂️",
  },
];

const ServicePage = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Our Services
        </h1>
        <p className="text-center text-gray-700 text-lg mb-12">
          We provide a wide range of waterproofing solutions tailored to your
          needs.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl text-blue-600 mb-4 text-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mt-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
