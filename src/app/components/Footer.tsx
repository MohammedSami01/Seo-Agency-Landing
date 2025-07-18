import React from 'react';

const Footer = () => {
  return (
    <footer className="-mt-16 relative z-10 bg-white rounded-[40px] shadow-xl ring-1 ring-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Column 1 */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">OptiRank</h3>
            <p className="text-gray-600 text-sm mb-2">
              Exploring their inner workings, applications, and impact on various fields.
            </p>
            <p className="text-gray-700 text-sm">hello.optirank@gmail.com</p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold text-black mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Home</a></li>
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-black">Services</a></li>
              <li><a href="#" className="hover:text-black">Careers</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold text-black mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Customers</a></li>
              <li><a href="#" className="hover:text-black">Blog</a></li>
              <li><a href="#" className="hover:text-black">FAQ</a></li>
              <li><a href="#" className="hover:text-black">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold text-black mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Instagram</a></li>
              <li><a href="#" className="hover:text-black">Facebook</a></li>
              <li><a href="#" className="hover:text-black">X (Twitter)</a></li>
              <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} OptiRank. All Rights Reserved © Moon.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
