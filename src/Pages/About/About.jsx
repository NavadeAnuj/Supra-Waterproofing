import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          About Us
        </h1>
        <p className="text-center text-gray-700 text-lg mb-12">
          Welcome to Supra Waterproofing! We are committed to delivering
          top-notch waterproofing solutions to ensure your safety and comfort.
        </p>

        {/* Section: Who We Are */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
            Who We Are
          </h2>
          <p className="text-gray-700 text-center max-w-2xl mx-auto">
            At Supra Waterproofing, we specialize in innovative and reliable
            waterproofing services for homes, businesses, and industrial spaces.
            Our team of experts is dedicated to providing solutions that last,
            protecting your property from leaks, moisture, and structural
            damage.
          </p>
        </section>

        {/* Section: Our Mission */}
        <section className="mb-12">
          <div className="bg-blue-600 text-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Our Mission
            </h2>
            <p className="text-center max-w-2xl mx-auto">
              To be the leading waterproofing service provider, offering
              exceptional quality, innovation, and sustainability in every
              project we undertake.
            </p>
          </div>
        </section>

        {/* Section: Meet Our Team */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Jane Smith
              </h3>
              <p className="text-gray-600">Operations Manager</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Alex Johnson
              </h3>
              <p className="text-gray-600">Lead Engineer</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
