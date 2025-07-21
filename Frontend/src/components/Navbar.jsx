import React, { useState } from "react";
import { X, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                HotelBook
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-red-500 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-red-500 transition-colors"
              >
                Hotels
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-red-500 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-red-500 transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-700 dark:text-gray-300 hover:text-red-500 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                Signup
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-4">
                <a
                  href="#"
                  className="text-gray-700 dark:text-gray-300 hover:text-red-500 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-700 dark:text-gray-300 hover:text-red-500 transition-colors"
                >
                  Hotels
                </a>
                <a
                  href="#"
                  className="text-gray-700 dark:text-gray-300 hover:text-red-500 transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-700 dark:text-gray-300 hover:text-red-500 transition-colors"
                >
                  Contact
                </a>
                <div className="flex space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => setIsLoginModalOpen(true)}
                    className="text-gray-700 dark:text-gray-300 hover:text-red-500 transition-colors"
                  >
                    Login
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
