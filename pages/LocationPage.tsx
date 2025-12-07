import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, ArrowLeft, AlertTriangle, Building2, Gavel, ArrowRight, CheckCircle, FileText, Map, HelpCircle, ChevronDown } from 'lucide-react';
import { SERVICE_AREAS } from '../constants';
import ChatAssistant from '../components/ChatAssistant';
import ContactForm from '../components/ContactForm';

const LocationPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const area = SERVICE_AREAS.find(a => a.id === id);

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!area) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy-900 mb-4">Location Not Found</h1>
          <Link to="/" className="text-gold-600 hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('location-contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Location Hero */}
      <div className="relative h-[400px] bg-navy-900 overflow-hidden">
         <div className="absolute inset-0">
            <img 
              src={area.image} 
              alt={`Personal Injury Lawyer in ${area.name}`} 
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent"></div>
         </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
            <div className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded shadow-lg mb-6">
              <MapPin size={20} className="text-gold-600 shrink-0" />
              <span className="text-navy-900 font-bold text-sm uppercase tracking-widest">Serving {area.county} County</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 max-w-4xl leading-tight">
              {area.name} Personal Injury Attorneys
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Dedicated legal representation for accident victims in {area.name}, just {area.distance} from our Macon headquarters.
            </p>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-gray-500 hover:text-navy-900 mb-8 transition-colors group text-base font-medium">
          <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            
            {/* Intro */}
            <div className="bg-white p-8 rounded-2xl shadow-sm mb-12 border-t-4 border-gold-500">
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
                Accident Lawyers Serving {area.name}, GA
              </h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p className="mb-4">
                  Residents of <strong>{area.name}</strong> deserve top-tier legal representation. Macon Personal Injury Attorneys has successfully represented hundreds of clients from {area.county} County. You shouldn't have to fight insurance adjusters alone while you are recovering from your injuries.
                </p>
                <p className="mb-4">
                  {area.fullDescription}
                </p>
                <p>
                  If you live in zip codes {area.zipCodes.join(', ')} or surrounding areas, we are your local legal advocates. We handle everything from evidence collection to negotiating with hospital billing departments.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
                <div className="flex items-center gap-2 text-navy-900 font-bold text-base">
                  <CheckCircle size={22} className="text-green-500" /> Free Consultations
                </div>
                <div className="flex items-center gap-2 text-navy-900 font-bold text-base">
                  <CheckCircle size={22} className="text-green-500" /> Home & Hospital Visits
                </div>
                <div className="flex items-center gap-2 text-navy-900 font-bold text-base">
                  <CheckCircle size={22} className="text-green-500" /> No Recovery, No Fee
                </div>
                <div className="flex items-center gap-2 text-navy-900 font-bold text-base">
                  <CheckCircle size={22} className="text-green-500" /> Local Court Knowledge
                </div>
              </div>
            </div>

            {/* Local Risks Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center">
                <AlertTriangle className="text-gold-500 mr-2" />
                High-Risk Accident Areas in {area.name}
              </h3>
              <p className="text-gray-600 mb-6 text-base">
                Our investigators frequently handle cases involving accidents at these dangerous {area.name} locations. We know exactly what evidence to look for at these specific sites:
              </p>
              <div className="grid grid-cols-1 gap-4">
                {area.accidentHotspots.map((spot, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-navy-800">
                    <div className="flex items-start">
                      <MapPin className="text-red-500 mr-3 mt-1 shrink-0" size={24} />
                      <div>
                        <h4 className="font-bold text-navy-900 text-lg mb-2">{spot.name}</h4>
                        <p className="text-gray-600 text-base">{spot.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Accident Reports Section (New SEO Content) */}
            <div className="mb-12 bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center">
                <FileText className="text-navy-700 mr-2" />
                Obtaining Your {area.name} Accident Report
              </h3>
              <p className="text-gray-600 mb-6 text-base">
                To file a claim, you need an official accident report. In {area.name}, these are typically handled by the following agencies. We can request these on your behalf.
              </p>
              <div className="grid grid-cols-1 gap-6">
                {area.localPolice.map((dept, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-navy-900 text-lg">{dept.name}</h4>
                    <p className="text-gray-500 text-base mb-2">{dept.address}</p>
                    <a href={`tel:${dept.phone}`} className="text-gold-600 font-bold text-base hover:underline block mb-2">{dept.phone}</a>
                    <p className="text-gray-600 text-base italic">"{dept.description}"</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Medical & Legal Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center">
                  <Building2 className="text-blue-500 mr-3" size={28} /> Local Medical Care
                </h3>
                <p className="text-gray-600 mb-6 flex-grow text-base">
                  Seeking immediate medical attention is critical. We work with:
                </p>
                <div className="space-y-4">
                  {area.medicalFacilities.map((hospital, i) => (
                    <div key={i} className="bg-slate-50 p-5 rounded-lg border-l-4 border-blue-500 shadow-sm">
                      <div className="font-bold text-navy-900 text-lg mb-1">{hospital.name}</div>
                      <div className="text-gray-600 text-base leading-relaxed">{hospital.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center">
                  <Gavel className="text-navy-800 mr-3" size={28} /> Legal Proceedings
                </h3>
                <p className="text-gray-600 mb-6 flex-grow text-base">
                  Cases in {area.name} are typically heard at:
                </p>
                <div className="bg-slate-50 p-5 rounded-lg border-l-4 border-navy-800 shadow-sm">
                  <div className="font-bold text-navy-900 text-lg mb-1">{area.courtInfo.name}</div>
                  <div className="text-gray-600 text-base leading-relaxed">{area.courtInfo.description}</div>
                </div>
              </div>
            </div>

             {/* Directions Section (New SEO Content) */}
            <div className="mb-12 bg-navy-50 p-8 rounded-xl border border-navy-100">
              <h3 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                <Map className="text-gold-600 mr-2" />
                Visiting Our Office from {area.name}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-base">
                {area.directionsFrom}
              </p>
              <div className="flex gap-4">
                 <a 
                   href={`https://www.google.com/maps/dir/${area.name},+GA/555+Cherry+St,+Macon,+GA+31201`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-base font-bold text-navy-900 hover:text-gold-600 flex items-center"
                 >
                   Get Turn-by-Turn Directions <ArrowRight size={18} className="ml-1" />
                 </a>
              </div>
            </div>

            {/* Local FAQs (New SEO Content) */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center">
                <HelpCircle className="text-gold-500 mr-2" />
                Common Questions from {area.name} Clients
              </h3>
              <div className="space-y-4">
                {area.localFAQs.map((faq, idx) => (
                  <details key={idx} className="bg-white rounded-lg shadow-sm border border-gray-100 group">
                    <summary className="list-none flex justify-between items-center p-6 cursor-pointer">
                      <span className="font-bold text-navy-900 text-lg">{faq.question}</span>
                      <span className="transition group-open:rotate-180">
                        <ChevronDown className="text-gold-500" size={24} />
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-700 leading-relaxed text-base border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* CTA / Contact Form specific to location */}
            <div id="location-contact" className="bg-navy-900 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-gold-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 font-serif">Injured in {area.name}?</h3>
                  <p className="mb-6 text-gray-300 text-lg">
                    We can meet you at your home, at the hospital, or at our Macon office. Don't sign anything until you speak with us.
                  </p>
                  <div className="flex items-center gap-3 text-gold-500 font-bold mb-3 text-base">
                    <CheckCircle size={22} /> Fastest Response Time
                  </div>
                   <div className="flex items-center gap-3 text-gold-500 font-bold text-base">
                    <CheckCircle size={22} /> Free Case Review
                  </div>
                </div>
                <div className="bg-navy-800 p-6 rounded-xl border border-navy-700 shadow-xl">
                  <ContactForm />
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-lg sticky top-24 border border-gray-100">
              <div className="text-center mb-6">
                 <div className="inline-flex items-center justify-center w-14 h-14 bg-gold-100 text-gold-600 rounded-full mb-3">
                   <Phone size={28} />
                 </div>
                 <h3 className="text-xl font-bold text-navy-900">24/7 Legal Help</h3>
                 <p className="text-gray-500 text-base">We answer calls day and night.</p>
              </div>
              
              <a 
                href="#location-contact"
                onClick={scrollToContact}
                className="flex items-center justify-center w-full bg-navy-900 hover:bg-navy-800 text-white font-bold py-4 rounded-lg mb-6 transition-colors shadow-md hover:shadow-lg cursor-pointer text-lg"
              >
                Get Free Case Review
              </a>
              
              <div className="space-y-8">
                 <div>
                    <h4 className="font-bold text-navy-900 mb-3 text-sm uppercase tracking-wider">Practice Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Car Accidents', 'Truck Accidents', 'Motorcycle', 'Wrongful Death', 'Slip & Fall'].map(tag => (
                        <span key={tag} className="text-sm bg-slate-100 text-slate-700 px-3 py-1.5 rounded font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                 </div>

                <div>
                  <h4 className="font-bold text-navy-900 mb-3 text-sm uppercase tracking-wider">Nearby Areas</h4>
                  <ul className="space-y-3">
                    {SERVICE_AREAS.filter(a => a.id !== id).map(other => (
                      <li key={other.id}>
                        <Link 
                          to={`/area/${other.id}`}
                          className="flex justify-between items-center text-gray-600 hover:text-gold-600 text-base group"
                        >
                          <span>{other.name}</span>
                          <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <ChatAssistant />
    </div>
  );
};

export default LocationPage;