import React from "react";
import img from "./img.jpg";
const HomePage = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/background/20240424/pngtree-workers-are-applying-waterproofing-with-a-brush-the-roof-system-of-image_15667636.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold animate-fadeIn">
          Welcome to <span className="text-blue-400">Supra Waterproofing</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mt-4 max-w-2xl animate-slideUp">
          Your trusted partner in advanced waterproofing solutions. Reliable,
          efficient, and durable services for all your needs.
        </p>
        <a
          href="#services"
          className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white text-lg font-semibold rounded-full shadow-lg transition-all animate-bounce"
        >
          Explore Our Services
        </a>
      </div>
    </div>
  );
};

export default HomePage;
