import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Scale, ChevronDown } from 'lucide-react';
import { SERVICE_AREAS, PRACTICE_AREAS } from '../constants';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-navy-900 text-white sticky top-0 z-40 shadow-xl border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gold-500 to-gold-700 rounded-lg flex items-center justify-center shadow-lg border border-gold-400/20 group-hover:shadow-gold-500/30 transition-all duration-300 transform group-hover:scale-105">
                 <Scale className="text-white w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight leading-none group-hover:text-gold-500 transition-colors">
                  MACON
                </span>
                <span className="text-[10px] sm:text-xs text-gold-500 font-bold uppercase tracking-[0.15em] leading-tight mt-0.5">
                  Personal Injury Attorneys
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 lg:space-x-8">
              <Link to="/" className="hover:text-gold-500 transition-colors px-3 py-2 rounded-md font-medium text-sm lg:text-base">Home</Link>
              
              {/* Practice Areas Dropdown */}
              <div className="relative group">
                <button className="hover:text-gold-500 transition-colors px-3 py-2 rounded-md font-medium inline-flex items-center text-sm lg:text-base gap-1">
                  Practice Areas <ChevronDown size={14} />
                </button>
                <div className="absolute left-0 mt-0 w-64 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform z-50 border-t-2 border-gold-500">
                  {PRACTICE_AREAS.map(area => (
                    <Link
                      key={area.id}
                      to={`/practice/${area.id}`}
                      className="block px-4 py-3 text-base text-navy-900 hover:bg-navy-50 hover:text-gold-600 border-b border-gray-50 last:border-0"
                    >
                      {area.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Service Areas Dropdown */}
              <div className="relative group">
                <button className="hover:text-gold-500 transition-colors px-3 py-2 rounded-md font-medium inline-flex items-center text-sm lg:text-base gap-1">
                  Service Areas <ChevronDown size={14} />
                </button>
                <div className="absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform z-50 border-t-2 border-gold-500">
                  {SERVICE_AREAS.map(area => (
                    <Link
                      key={area.id}
                      to={`/area/${area.id}`}
                      className="block px-4 py-3 text-base text-navy-900 hover:bg-navy-50 hover:text-gold-600 border-b border-gray-50 last:border-0"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/attorneys" className="hover:text-gold-500 transition-colors px-3 py-2 rounded-md font-medium text-sm lg:text-base">Attorneys</Link>
              <Link to="/contact" className="hover:text-gold-500 transition-colors px-3 py-2 rounded-md font-medium text-sm lg:text-base">Contact</Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a href="tel:4785550123" className="bg-gold-600 hover:bg-gold-500 text-white px-5 py-2.5 rounded-md font-bold transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2 border border-gold-500">
              <Phone size={18} className="fill-current" />
              (478) 555-0123
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-navy-800 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy-800 border-t border-navy-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gold-500">Home</Link>
            
            <div className="px-3 py-2 text-gold-500 text-xs uppercase font-bold tracking-wider mt-2">Practice Areas</div>
            {PRACTICE_AREAS.map(area => (
              <Link
                key={area.id}
                to={`/practice/${area.id}`}
                onClick={closeMenu}
                className="block pl-6 pr-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-navy-700"
              >
                {area.title}
              </Link>
            ))}

            <div className="px-3 py-2 text-gold-500 text-xs uppercase font-bold tracking-wider mt-2">Areas We Serve</div>
            {SERVICE_AREAS.map(area => (
              <Link
                key={area.id}
                to={`/area/${area.id}`}
                onClick={closeMenu}
                className="block pl-6 pr-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-navy-700"
              >
                {area.name}
              </Link>
            ))}
            
            <Link to="/attorneys" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gold-500 mt-2">Attorneys</Link>
            <Link to="/contact" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gold-500">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;