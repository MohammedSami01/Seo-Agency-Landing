import Image from "next/image";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
            Dominating<br />Search<br />Algorithms
          </h1>
          <p className="text-gray-600 text-base mb-6 max-w-lg">
            This comprehensive guide delves into the world of Dominating Search Algorithms,
            exploring their inner workings, applications, and impact on various fields.
          </p>

          {/* Get Started Button */}
          <button className="bg-lime-400 text-black px-8 py-3 rounded-full font-medium hover:bg-lime-500 transition-colors">
            Get Started
          </button>

          {/* Purple notification card */}
          <div className="mt-8 bg-black text-white p-6 rounded-xl max-w-sm shadow-lg">
            <p className="text-sm text-gray-300 mb-2">Maximizing Traffic for Profits</p>
            <p className="text-xl font-semibold">Boosting Traffic,<br />Amplifying Sales</p>
            <div className="mt-4 flex space-x-1">
              <div className="w-4 h-8 bg-purple-700 rounded-sm"></div>
              <div className="w-4 h-12 bg-purple-600 rounded-sm"></div>
              <div className="w-4 h-16 bg-purple-500 rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative">
          {/* Woman image (Unsplash) */}
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
            alt="Professional Woman"
            className="w-full rounded-xl object-cover"
          />

          {/* Search Results Overlay */}
          <div className="absolute top-4 right-4 bg-white shadow-lg rounded-xl w-64 p-4 z-20 border border-gray-200">
            <div className="text-sm font-medium mb-2 text-gray-800 flex items-center gap-2">
              <span className="bg-gray-100 rounded-full px-2 py-1 text-xs">1.</span>
              <span className="text-purple-600">Seo Landing Page</span>
            </div>
            <div className="text-xs text-gray-500 mb-2 pl-6">www.mmoon.com</div>

            <div className="text-sm font-medium mb-2 text-gray-800 flex items-center gap-2">
              <span className="bg-gray-100 rounded-full px-2 py-1 text-xs">2.</span>
              Another Website
            </div>
            <div className="text-xs text-gray-500 mb-2 pl-6">www.anotherwebsite.com</div>

            <div className="text-sm font-medium text-gray-800 flex items-center gap-2">
              <span className="bg-gray-100 rounded-full px-2 py-1 text-xs">3.</span>
              Another Website
            </div>
            <div className="text-xs text-gray-500 pl-6">www.anotherwebsite.com</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
