import React from "react";
import { ToastContainer } from "react-toastify";
import { FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 mt-auto py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About / Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-2">CS -- Ticket System</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
              nam eaque obcaecati in et quia dignissimos tempore deleniti id
              dolor, sunt dolorum voluptates consequatur alias doloremque
              quisquam reiciendis aperiam atque.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#mission" className="hover:underline">Our Mission</a></li>
              <li><a href="#sales" className="hover:underline">Contact Sales</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="hover:underline">Product & Services</a></li>
              <li><a href="#stories" className="hover:underline">Customer Stories</a></li>
              <li><a href="#apps" className="hover:underline">Download Apps</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Social Links</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FaTwitter className="text-blue-500" /> twitter @CS-Ticket System
              </li>
              <li className="flex items-center gap-2">
                <FaFacebook className="text-blue-700" /> facebook @CS-Ticket System
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-gray-400 text-center text-xs mt-8 border-t border-gray-700 pt-4">
          © 2025 Customer Support Zone. All rights reserved.
        </div>
      </footer>

      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
};

export default Footer;
