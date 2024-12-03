import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Contact Us
        </h1>
        <p className="text-center text-gray-700 text-lg mb-12">
          Have questions or need assistance? Reach out to us!
        </p>

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Type your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-600 text-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <ul className="space-y-4">
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@supra.com" className="hover:underline">
                  info@supra.com
                </a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:+1234567890" className="hover:underline">
                  +1 234 567 890
                </a>
              </li>
              <li>
                <strong>Address:</strong> <br />
                123 Vejalpur Lane, <br />
                Ahmedabad, Gujarat.
              </li>
            </ul>
            <h3 className="text-lg font-semibold mt-6 mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.google.com" className="hover:text-gray-300">
                🌐 Website
              </a>
              <a
                href="https://www.facebook.com"
                className="hover:text-gray-300"
              >
                📘 Facebook
              </a>
              <a
                href="https://www.instagram.com"
                className="hover:text-gray-300"
              >
                📸 Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
