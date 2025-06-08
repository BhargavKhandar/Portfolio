import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-gray-400">Made with</span>
            <Heart className="w-4 h-4 text-red-500 mx-2 animate-pulse" />
            <span className="text-gray-400">and</span>
            <Code className="w-4 h-4 text-blue-400 mx-2" />
            <span className="text-gray-400">by Bhargav Khandar</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Bhargav Khandar. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;