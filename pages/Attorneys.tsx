import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowRight, Award, GraduationCap } from 'lucide-react';
import { ATTORNEYS } from '../constants';
import ChatAssistant from '../components/ChatAssistant';

const Attorneys: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Hero Section */}
      <div className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Meet Our Attorneys</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experienced, local, and dedicated to Macon. Our team has the resources and the reputation to take on the biggest insurance companies in Georgia.
          </p>
        </div>
      </div>

      {/* Attorneys Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ATTORNEYS.map((attorney) => (
            <div key={attorney.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group flex flex-col h-full border border-gray-100">
              
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[3/4]">
                <img 
                  src={attorney.image} 
                  alt={attorney.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <a href={`mailto:${attorney.email}`} className="text-white flex items-center gap-2 mb-2 hover:text-gold-400">
                    <Mail size={16} /> Email Attorney
                  </a>
                  <a href="tel:4785550123" className="text-white flex items-center gap-2 mb-4 hover:text-gold-400">
                    <Phone size={16} /> (478) 555-0123
                  </a>
                  <Link 
                    to="/contact" 
                    className="bg-gold-600 hover:bg-gold-500 text-white text-sm font-bold py-2 px-4 rounded text-center transition-colors w-full shadow-lg"
                  >
                    Free Consultation
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-serif font-bold text-navy-900">{attorney.name}</h3>
                  <p className="text-gold-600 font-bold text-xs uppercase tracking-widest mt-1">{attorney.role}</p>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {attorney.bio}
                </p>

                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <GraduationCap size={14} className="text-navy-400" /> 
                    <span className="font-medium">{attorney.education}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {attorney.practiceFocus.slice(0, 2).map((focus, i) => (
                      <span key={i} className="text-[10px] bg-navy-50 text-navy-700 px-2 py-1 rounded border border-navy-100">
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Block */}
      <div className="bg-white py-20 border-t border-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-navy-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
               <div className="md:w-1/2">
                  <div className="inline-flex items-center gap-2 text-gold-600 font-bold tracking-wide uppercase text-sm mb-4">
                    <Award size={18} /> Why Hire Macon Personal Injury Attorneys?
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">We Don't Pass You Off to Case Managers</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    At many large TV firms, you meet your attorney once and then never speak to them again. At Macon Personal Injury Attorneys, your attorney handles your case from start to finish. We give every client our direct cell phone numbers because we believe communication is key to a successful outcome.
                  </p>
                  <Link to="/contact" className="text-navy-900 font-bold flex items-center hover:text-gold-600 transition-colors">
                    Schedule Your Free Consultation <ArrowRight size={20} className="ml-2" />
                  </Link>
               </div>
               <div className="md:w-1/2 grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                    <div className="text-4xl font-bold text-navy-900 mb-2">100+</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">Years Combined Experience</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                    <div className="text-4xl font-bold text-navy-900 mb-2">$50M</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">Recovered for Clients</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm text-center col-span-2">
                    <div className="text-4xl font-bold text-gold-600 mb-2">Top 100</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">National Trial Lawyers</div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <ChatAssistant />
    </div>
  );
};

export default Attorneys;