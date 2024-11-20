import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, Users, Home, UserCircle } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1A1A1A] border-b border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">
              The Alliance
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-blue-400 flex items-center">
              <Home className="w-5 h-5 mr-1" />
              Home
            </Link>
            <Link to="/community" className="text-white hover:text-blue-400 flex items-center">
              <Users className="w-5 h-5 mr-1" />
              Community
            </Link>
            <Link to="/profile" className="text-white hover:text-blue-400 flex items-center">
              <UserCircle className="w-5 h-5 mr-1" />
              Profile
            </Link>
            <button className="text-white hover:text-blue-400">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-white hover:bg-blue-900 rounded-md"
              >
                Home
              </Link>
              <Link
                to="/community"
                className="block px-3 py-2 text-white hover:bg-blue-900 rounded-md"
              >
                Community
              </Link>
              <Link
                to="/profile"
                className="block px-3 py-2 text-white hover:bg-blue-900 rounded-md"
              >
                Profile
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}