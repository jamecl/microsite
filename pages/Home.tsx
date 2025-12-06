import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Shield, CheckCircle, ArrowRight, Star, ChevronDown, Award, Scale, DollarSign, Building, Users, BookOpen } from 'lucide-react';
import { SERVICE_AREAS, PRACTICE_AREAS, TESTIMONIALS, FAQS, CASE_RESULTS } from '../constants';
import ChatAssistant from '../components/ChatAssistant';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Hero Section */}
      <section className="relative bg-navy-900 h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Macon Courthouse and Downtown" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full pt-16">
          <div className="inline-flex items-center gap-2 bg-white border-2 border-gold-500 shadow-xl rounded-full px-6 py-2 w-fit mb-8 transition-transform hover:scale-105">
            <MapPin size={20} className="text-gold-600 shrink-0" /> 
            <span className="text-navy-900 font-bold text-sm tracking-widest uppercase">Serving Bibb County & Middle Georgia</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight max-w-4xl">
            Injured in Macon? <br/>
            <span className="text-gold-500">We Fight For Justice.</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            From I-75 truck accidents to slip and falls in downtown Macon, our attorneys have recovered millions for our neighbors. We handle the legal fight so you can focus on healing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              onClick={scrollToSection('contact')}
              className="bg-gold-600 hover:bg-gold-500 text-white px-8 py-4 rounded-md font-bold text-lg transition-transform hover:-translate-y-1 text-center cursor-pointer"
            >
              Free Case Evaluation
            </a>
            <a 
              href="#practice-areas" 
              onClick={scrollToSection('practice-areas')}
              className="border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 rounded-md font-bold text-lg transition-colors text-center flex items-center justify-center cursor-pointer"
            >
              Our Practice Areas
            </a>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-gray-400 text-sm font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={18} /> No Win, No Fee
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={18} /> Available 24/7
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={18} /> Free Consultations
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={18} /> Local to Macon
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
            <div>
              <p className="text-3xl font-bold text-navy-900">$50M+</p>
              <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Recovered for Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-navy-900">25+</p>
              <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-navy-900">500+</p>
              <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Cases Won</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-navy-900">24/7</p>
              <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Emergency Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Results Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4">Our Recent Case Results</h2>
              <div className="w-24 h-1 bg-gold-500 mb-4"></div>
              <p className="text-gray-300 max-w-xl">We let our track record speak for itself. While past results don't guarantee future outcomes, they show our commitment to maximizing value for our clients.</p>
            </div>
            <a 
              href="#contact" 
              onClick={scrollToSection('contact')}
              className="hidden md:flex items-center text-gold-500 font-bold hover:text-white transition-colors mt-4 md:mt-0 cursor-pointer"
            >
              Review Your Case <ArrowRight size={20} className="ml-2" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CASE_RESULTS.map((result, idx) => (
              <div key={idx} className="bg-navy-800 border border-navy-700 p-6 rounded-lg hover:border-gold-600 transition-colors">
                <div className="bg-gold-600/20 text-gold-500 p-3 rounded-full w-fit mb-4">
                  <DollarSign size={24} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{result.amount}</h3>
                <p className="text-gold-500 font-medium text-sm uppercase tracking-wide mb-3">{result.type}</p>
                <div className="flex items-center text-gray-400 text-xs mb-3">
                  <MapPin size={12} className="mr-1" /> {result.location}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section (Expanded & SEO Heavy) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-gold-600 font-bold tracking-wide uppercase text-sm mb-4">
                <Scale size={18} /> About Our Firm
              </div>
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-8">Not Just Lawyers. Neighbors Fighting for Macon.</h2>
              
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  At <strong>Macon Personal Injury Attorneys</strong>, we believe that personal injury law is about more than just settlements—it's about restoring dignity to members of our community who have been wronged. Unlike massive "call center" law firms based in Atlanta or Florida that treat clients like case numbers, we are deeply rooted here in Middle Georgia.
                </p>
                
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Our Local Courtroom Advantage</h3>
                  <p>
                    Insurance companies know which lawyers settle for quick cash and which ones are prepared to go to trial. We have spent decades building a reputation for excellence in the <strong>Bibb County Superior Court</strong>, <strong>Bibb County State Court</strong>, and surrounding judicial circuits including Houston, Jones, and Monroe counties. We know the judges, we understand the local jury pools, and we use this local insight to build stronger cases for our clients.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Fighting the Big Insurance Giants</h3>
                  <p>
                    When you are up against a billion-dollar insurance carrier, the playing field isn't level. They have teams of adjusters trained to deny your claim. We level that playing field. From investigating crash sites on <strong>Eisenhower Parkway</strong> to deposing negligent property owners in downtown Macon, we leave no stone unturned.
                  </p>
                </div>

                <div className="bg-slate-50 border-l-4 border-gold-500 p-6 my-6 italic text-navy-800">
                  "We don't just take cases to settle them. We take cases to win them. If the insurance company won't pay what is fair, we are ready to let a jury decide."
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Link to="/attorneys" className="bg-navy-900 text-white px-8 py-4 rounded-md font-bold hover:bg-navy-800 transition-colors inline-flex items-center shadow-lg">
                  Meet Your Attorneys <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -inset-4 bg-gold-500/10 rounded-xl transform rotate-2"></div>
                <img 
                  src="https://picsum.photos/800/600?random=10" 
                  alt="Attorney Meeting with Client in Macon Office" 
                  className="relative rounded-xl shadow-lg w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-6 rounded-lg shadow-xl border-l-4 border-gold-600">
                   <div className="flex items-center gap-3 mb-2">
                     <Users className="text-gold-600" size={24} />
                     <p className="text-navy-900 font-bold text-lg">Client-First Philosophy</p>
                   </div>
                  <p className="text-gray-600 text-sm">Every client gets our personal cell phone numbers. You are never left in the dark about your case status.</p>
                </div>
              </div>

              <div className="bg-navy-50 p-8 rounded-xl border border-navy-100">
                <h3 className="font-bold text-navy-900 text-lg mb-4 flex items-center">
                  <Building className="mr-2 text-gold-600" /> Community Involvement
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  We are proud sponsors of the Macon Cherry Blossom Festival and support local high school athletics throughout Bibb and Houston counties. We are dedicated to making our roads safer not just through litigation, but through community education and advocacy.
                </p>
                <div className="flex gap-2">
                  <span className="bg-white px-3 py-1 rounded-full text-xs font-bold text-navy-700 shadow-sm">Cherry Blossom Sponsor</span>
                  <span className="bg-white px-3 py-1 rounded-full text-xs font-bold text-navy-700 shadow-sm">Macon Bar Association</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas (Expanded & Detailed) */}
      <section id="practice-areas" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">Areas of Practice</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We focus exclusively on personal injury law. This specialization allows us to master the complex medical and legal issues that affect our clients' lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRACTICE_AREAS.map((area, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col h-full">
                <div className="p-8 flex-grow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-navy-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-navy-900 transition-colors shrink-0">
                      <div className="text-navy-900 group-hover:text-gold-500 transition-colors">
                        <Shield size={28} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors">{area.title}</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {area.fullDescription}
                  </p>

                  <div className="bg-slate-50 rounded-lg p-5 border-l-4 border-gold-400">
                    <div className="flex items-center gap-2 mb-2 text-navy-900 font-bold text-sm uppercase tracking-wide">
                      <BookOpen size={16} className="text-gold-600" /> Recent Case Example
                    </div>
                    <p className="text-sm text-gray-600 italic">
                      "{area.exampleCase}"
                    </p>
                  </div>
                </div>
                <div className="bg-navy-50 px-8 py-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">Free Consultation</span>
                  <a 
                    href="#contact" 
                    onClick={scrollToSection('contact')}
                    className="text-gold-600 text-sm font-bold flex items-center group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-2">Serving All of Middle Georgia</h2>
              <p className="text-gray-600">We travel to you if you cannot come to us.</p>
            </div>
            <Link to="/area/warner-robins" className="hidden md:flex items-center text-gold-600 font-bold hover:text-gold-800">
              View All Locations <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_AREAS.slice(0, 3).map(area => (
              <Link key={area.id} to={`/area/${area.id}`} className="group block relative h-72 rounded-xl overflow-hidden shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent opacity-80 z-10" />
                <img src={area.image} alt={area.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-between">
                    {area.name}
                    <span className="text-xs bg-gold-600 px-2 py-1 rounded text-white font-normal">{area.distance}</span>
                  </h3>
                  <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                    {area.shortDescription}
                  </p>
                  <span className="inline-flex items-center text-gold-400 text-sm font-bold group-hover:text-white transition-colors">
                    View Local Info <ArrowRight size={16} className="ml-2" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-navy-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Client Success Stories</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-navy-800 p-8 rounded-xl relative">
                <div className="text-gold-500 mb-4 flex">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-bold text-white">{t.author}</p>
                  <p className="text-sm text-gold-500">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="bg-white rounded-lg shadow-sm group">
                <summary className="list-none flex justify-between items-center p-6 cursor-pointer">
                  <span className="font-bold text-navy-900 text-lg">{faq.question}</span>
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="text-gold-500" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
             <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Ready to Discuss Your Case?</h2>
                <p className="text-lg text-gray-300 mb-8">
                  The consultation is free. The advice is priceless. Fill out the form below or call us today.
                </p>
                
                <ContactForm />

             </div>
             <div className="md:w-1/2 relative h-[500px] md:h-auto min-h-[500px]">
               <img src="https://picsum.photos/800/800?random=map" alt="Map of Macon" className="w-full h-full object-cover opacity-50" />
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="bg-white/95 backdrop-blur p-8 rounded-xl text-center shadow-2xl border-l-4 border-gold-600 max-w-sm mx-4">
                   <MapPin className="mx-auto text-gold-600 mb-4" size={32} />
                   <p className="font-bold text-navy-900 text-xl mb-1">Macon Personal Injury Attorneys</p>
                   <p className="text-gray-600">555 Cherry Street, Suite 200</p>
                   <p className="text-gray-600 mb-4">Macon, GA 31201</p>
                   <p className="font-bold text-gold-600 text-lg">(478) 555-0123</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      <ChatAssistant />
    </div>
  );
};

export default Home;