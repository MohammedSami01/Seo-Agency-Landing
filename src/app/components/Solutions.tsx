import React from 'react';

const Solutions = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          <h2 className="text-5xl font-semibold text-gray-900 leading-tight">
            Precision Solutions <br className="hidden md:block" /> for Business Goals
          </h2>
          <div className="max-w-md text-center lg:text-left">
            <p className="text-gray-600 text-lg mb-4">
              In the fast-paced and competitive landscape of today&apos;s business world, having a clear vision is just the beginning.
            </p>
            <button className="bg-lime-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-lime-500 transition-colors shadow-md hover:shadow-lg">
              Get Started
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Cards (Accordion Style on Hover) */}
          <div className="space-y-4">
            {[
              {
                title: "Focused Efforts",
                description:
                  "Every effort is laser-focused on advancing your business goals, minimizing wasted resources and maximizing results.",
              },
              {
                title: "Efficiency",
                description:
                  "Streamlined processes and strategies that boost productivity and eliminate wasteful efforts.",
              },
              {
                title: "Measurable Outcomes",
                description:
                  "Results you can track, analyze, and optimize to meet your business goals with clarity.",
              },
              {
                title: "Adaptability",
                description:
                  "Quickly pivot and respond to changes in your industry, market, or customer behavior.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white p-6 rounded-2xl shadow-sm transition-all hover:bg-[#6B46C1] hover:shadow-md"
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-900 group-hover:text-white transition-colors">
                    {item.title}
                  </span>
                  <span className="text-xl text-gray-400 group-hover:text-white transition-transform transform group-hover:rotate-180">
                    ⌄
                  </span>
                </div>
                <p className="text-sm mt-2 text-gray-600 group-hover:text-white opacity-0 max-h-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Chart + Stats */}
          <div className="flex flex-col gap-6">
            {/* Line Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-sm relative">
              <div className="text-sm text-gray-400 mb-2">Website Graphic</div>
              <div className="w-full h-40 relative">
                {/* Fake line chart using SVG */}
                <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                  <polyline
                    fill="none"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    points="0,40 20,20 40,30 60,10 80,35 100,15"
                  />
                </svg>
                {/* Chart Tooltip */}
                <div className="absolute top-8 right-6 bg-black text-white text-xs px-3 py-1.5 rounded-xl shadow-lg">
                  <div className="text-gray-400">Visitors</div>
                  <div className="text-lime-300 font-bold text-base">183.203</div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">300+</div>
                <p className="text-sm text-gray-600">
                  Some big companies that we work with, and trust us very much.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
                <p className="text-sm text-gray-600">
                  The client is very satisfied with the results of our work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
