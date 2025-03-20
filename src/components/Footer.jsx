import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">© 2025 Wobb. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="/terms" className="text-sm text-gray-500 hover:text-indigo-600">Terms</a>
            <a href="/privacy" className="text-sm text-gray-500 hover:text-indigo-600">Privacy</a>
            <a href="/help-center" className="text-sm text-gray-500 hover:text-indigo-600">Help Center</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
