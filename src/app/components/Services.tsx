import React from 'react';

const Services = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-5xl font-semibold text-gray-900 mb-4 leading-tight">
              Targeted Traffic <br className="hidden md:block" /> and Conversion
            </h2>
          </div>
          <div className="max-w-md text-center lg:text-left">
            <p className="text-gray-600 text-lg mb-4">
              Let's delve into the significance of targeted traffic and how it's the key to boosting conversions.
            </p>
            <button className="bg-lime-400 text-black px-6 py-2.5 rounded-full font-semibold hover:bg-lime-500 transition-colors shadow-md hover:shadow-lg">
              Get Started
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* On-Page Optimization */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4 text-purple-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                  viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a9 9 0 11-9 9M12 4.354V12h7.646" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">On-Page Optimization</h3>
            <p className="text-gray-600 text-sm">
              Optimize your website's on-page elements, including titles, meta descriptions, headers, and content, using these keywords naturally.
            </p>
          </div>

          {/* Quality Content Creation */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4 text-purple-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                  viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20l9-5-9-5-9 5 9 5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Content Creation</h3>
            <p className="text-gray-600 text-sm">
              Produce high-quality, informative, and engaging content that addresses the needs and pain points of your target audience.
            </p>
          </div>

          {/* Conversion Rate Optimization */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4 text-purple-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                  viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Conversion Rate Optimization</h3>
            <p className="text-gray-600 text-sm">
              Analyze user behavior using tools like Google Analytics and heatmaps to identify conversion bottlenecks.
            </p>
          </div>

          {/* Link Building */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4 text-purple-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                  viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 14L21 3m0 0l-6.5 0m6.5 0v6.5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Link Building</h3>
            <p className="text-gray-600 text-sm">
              Guest posting, influencer outreach, and participating in relevant online communities can help you acquire valuable links.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
