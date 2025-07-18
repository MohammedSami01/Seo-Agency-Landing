import React from 'react';

const CTA = () => {
  return (
    <section className="bg-black text-white py-20 rounded-t-[40px] relative z-0">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Customized Solution to <br />
          Your Business Goals
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Our experienced team works closely with you to analyze your specific needs, challenges, and aspirations.
        </p>
        <button className="bg-lime-400 text-black px-8 py-3 rounded-full font-medium hover:bg-lime-500 transition-colors">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default CTA;
