import React, { useState } from 'react';
import { User, Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div 
          className="flex items-center space-x-2 group cursor-pointer"
          onClick={() => navigate('/')}
        >
          <div className="text-2xl font-bold text-teal-600 group-hover:text-teal-700 transition-colors duration-300">
            <div className="text-sm transform group-hover:scale-105 transition-transform duration-300">THE</div>
            <div className="text-xl transform group-hover:scale-105 transition-transform duration-300">OCEANSCAPE</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => handleNavigation('/')}
            className={`relative group ${
              location.pathname === '/' ? 'text-teal-600 font-semibold' : 'text-gray-600 hover:text-teal-600'
            } transition-colors duration-300`}
          >
            ROOM
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button 
            onClick={() => handleNavigation('/activities')}
            className="text-gray-600 hover:text-teal-600 transition-colors duration-300 relative group"
          >
            ACTIVITIES
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button 
            onClick={() => handleNavigation('/about')}
            className="text-gray-600 hover:text-teal-600 transition-colors duration-300 relative group"
          >
            ABOUT
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
          </button>
        </nav>

        {/* User Icons */}
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <User className="w-6 h-6 text-teal-600 cursor-pointer group-hover:text-teal-700 transition-colors duration-300 transform group-hover:scale-110" />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Sign In
            </div>
          </div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-teal-600" />
            ) : (
              <Menu className="w-6 h-6 text-teal-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-8 py-4 space-y-4">
            <button 
              onClick={() => handleNavigation('/')}
              className={`block py-2 rounded-lg px-3 transition-colors duration-300 w-full text-left ${
                location.pathname === '/' ? 'text-teal-600 font-semibold bg-teal-50' : 'text-gray-600 hover:text-teal-600 hover:bg-gray-50'
              }`}
            >
              ROOM
            </button>
            <button 
              onClick={() => handleNavigation('/activities')}
              className="block text-gray-600 py-2 hover:text-teal-600 hover:bg-gray-50 rounded-lg px-3 transition-colors duration-300 w-full text-left"
            >
              ACTIVITIES
            </button>
            <button 
              onClick={() => handleNavigation('/about')}
              className="block text-gray-600 py-2 hover:text-teal-600 hover:bg-gray-50 rounded-lg px-3 transition-colors duration-300 w-full text-left"
            >
              ABOUT
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 