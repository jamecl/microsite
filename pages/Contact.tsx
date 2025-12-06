import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import ChatAssistant from '../components/ChatAssistant';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get a free, no-obligation case evaluation. We are available 24/7 to answer your questions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
             <h2 className="text-3xl font-serif font-bold text-navy-900 mb-8">Get In Touch</h2>
             <p className="text-gray-600 mb-8 leading-relaxed">
               If you or a loved one has been injured, time is of the essence. Evidence disappears and deadlines approach. Contact us immediately for a free consultation.
             </p>

             <div className="space-y-6 mb-12">
               <div className="flex items-start gap-4">
                 <div className="bg-gold-100 p-3 rounded-full text-gold-600">
                   <Phone size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-navy-900 text-lg">Phone</h3>
                   <p className="text-gray-600">Available 24/7 for new clients</p>
                   <a href="tel:4785550123" className="text-xl font-bold text-gold-600 hover:text-gold-700">(478) 555-0123</a>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="bg-gold-100 p-3 rounded-full text-gold-600">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-navy-900 text-lg">Office Location</h3>
                   <p className="text-gray-600">555 Cherry Street, Suite 200</p>
                   <p className="text-gray-600">Macon, GA 31201</p>
                   <a href="https://www.google.com/maps" target="_blank" rel="noreferrer" className="text-gold-600 font-bold text-sm hover:underline mt-1 inline-block">Get Directions</a>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="bg-gold-100 p-3 rounded-full text-gold-600">
                   <Mail size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-navy-900 text-lg">Email</h3>
                   <a href="mailto:info@maconpersonalinjury.com" className="text-gray-600 hover:text-gold-600">info@maconpersonalinjury.com</a>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="bg-gold-100 p-3 rounded-full text-gold-600">
                   <Clock size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-navy-900 text-lg">Hours</h3>
                   <p className="text-gray-600">Mon-Fri: 8:00 AM - 6:00 PM</p>
                   <p className="text-gray-600">Sat-Sun: By Appointment</p>
                   <p className="text-gold-600 font-bold text-sm mt-1">Phones Answered 24/7</p>
                 </div>
               </div>
             </div>

             {/* Map Placeholder */}
             <div className="rounded-xl overflow-hidden shadow-md h-64 bg-gray-200 relative">
                <img 
                  src="https://picsum.photos/800/400?random=map" 
                  alt="Map Location" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-lg text-navy-900 font-bold text-sm shadow-lg">
                      Macon Personal Injury Attorneys
                   </div>
                </div>
             </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">Send Us a Message</h3>
            <ContactForm light={true} />
          </div>
        </div>
      </div>
      <ChatAssistant />
    </div>
  );
};

export default Contact;