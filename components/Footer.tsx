import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICE_AREAS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-2xl font-bold text-white mb-4">MACON PERSONAL INJURY ATTORNEYS</h2>
            <p className="mb-4 max-w-md text-sm leading-relaxed">
              Dedicated to fighting for the rights of accident victims in Macon and Middle Georgia. 
              If you've been injured due to negligence, we are here to help you rebuild your life.
            </p>
            <div className="text-gold-500 font-bold text-xl">
              (478) 555-0123
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-gold-500">Macon (HQ)</Link></li>
              {SERVICE_AREAS.map(area => (
                <li key={area.id}>
                  <Link to={`/area/${area.id}`} className="hover:text-gold-500">{area.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>Car Accidents</li>
              <li>Truck Accidents</li>
              <li>Wrongful Death</li>
              <li className="pt-2">
                <Link to="/attorneys" className="text-gold-500 hover:text-white font-medium">
                  Our Attorneys
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gold-500 hover:text-white font-medium">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gold-500 hover:text-white font-medium">
                  Legal Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8 text-xs text-gray-500 text-center">
          <p className="mb-2">&copy; {new Date().getFullYear()} Macon Personal Injury Attorneys. All rights reserved.</p>
          <p>
            The information on this website is for general information purposes only. 
            Nothing on this site should be taken as legal advice for any individual case or situation. 
            <Link to="/disclaimer" className="ml-1 text-gold-600 hover:underline">Read full disclaimer.</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;