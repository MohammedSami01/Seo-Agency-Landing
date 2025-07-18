import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-start gap-16">
        {/* Left Section */}
        <div>
          <h2 className="text-5xl font-bold text-black leading-tight mb-6">
            Satisfied Client<br />Testimonials<br />About OptiRank
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            At OptiRank, our mission is to deliver exceptional SEO services that drive real results for our clients.
          </p>
          <button className="bg-lime-400 hover:bg-lime-500 text-black px-6 py-3 rounded-full font-medium transition-colors">
            Get Started
          </button>

          {/* Trusted Advocate Showcase */}
          <div className="flex items-center gap-2 mt-10">
            <div className="flex -space-x-2">
              <Image 
                src="https://randomuser.me/api/portraits/women/1.jpg" 
                alt="user1" 
                width={32} 
                height={32} 
                className="rounded-full border-2 border-white" 
              />
              <Image 
                src="https://randomuser.me/api/portraits/men/2.jpg" 
                alt="user2" 
                width={32} 
                height={32} 
                className="rounded-full border-2 border-white" 
              />
              <Image 
                src="https://randomuser.me/api/portraits/women/3.jpg" 
                alt="user3" 
                width={32} 
                height={32} 
                className="rounded-full border-2 border-white" 
              />
            </div>
            <span className="text-sm text-gray-700">Trusted Advocate Showcase.</span>
          </div>
        </div>

        {/* Right Section: Featured Testimonial */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-md">
          <p className="text-lg text-black mb-6 leading-relaxed">
            &quot;Choosing OptiRank was the best decision for our online business. They&apos;ve proven to be true experts in the field of SEO, delivering results beyond our expectations.&quot;
          </p>
          <div className="border-t border-gray-300 pt-4 flex items-center justify-between">
            <div>
              <div className="font-semibold text-black">Nabila Moela</div>
              <div className="text-sm text-gray-500">California</div>
            </div>
            <div className="flex text-yellow-400 text-xl">
              ★★★★★
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="flex items-center justify-center gap-6 mt-12 text-gray-800">
        <button className="text-2xl hover:text-black transition">&larr;</button>
        <span className="text-sm font-medium">01<span className="text-gray-400">/24</span></span>
        <button className="text-2xl hover:text-black transition">&rarr;</button>
      </div>
    </section>
  );
};

export default Testimonials;
