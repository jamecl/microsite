import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRACTICE_AREAS } from '../constants';
import { Shield, CheckCircle, ArrowRight, ArrowLeft, BookOpen, AlertTriangle, Phone, ChevronDown, MapPin, Activity, DollarSign } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import ChatAssistant from '../components/ChatAssistant';

const PracticePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const practice = PRACTICE_AREAS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!practice) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy-900 mb-4">Practice Area Not Found</h1>
          <Link to="/" className="text-gold-600 hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  const { content } = practice;

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Hero Section */}
      <div className="bg-navy-900 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center text-gold-500 hover:text-white mb-6 transition-colors text-base font-bold uppercase tracking-wider">
             <ArrowLeft size={18} className="mr-2" /> Back to Home
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Macon {practice.title} Attorneys
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {practice.description} We fight for maximum compensation for victims in Bibb County and across Middle Georgia.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Intro */}
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="lead text-xl text-navy-900 font-medium leading-relaxed">
                {content.intro}
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-gold-500">
              <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">Why Choose Our Firm?</h3>
              <p className="text-gray-700 leading-relaxed text-lg">{content.whyChooseUs}</p>
            </div>

            {/* Key Issues */}
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-6 flex items-center">
                <AlertTriangle className="text-gold-600 mr-3" /> Common Causes & Issues
              </h2>
              <div className="grid gap-6">
                {content.keyIssues.map((issue, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="text-xl font-bold text-navy-900 mb-2">{issue.title}</h4>
                    <p className="text-gray-600 text-lg">{issue.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Injuries (New Section) */}
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-6 flex items-center">
                <Activity className="text-blue-500 mr-3" /> Common Injuries in These Cases
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                We work with medical experts to document the full extent of your injuries, ensuring you are compensated for both current and future medical needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {content.commonInjuries?.map((injury, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-navy-900 text-base mb-2">{injury.title}</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{injury.description}</p>
                  </div>
                )) || <p>Information available upon request.</p>}
              </div>
            </div>

            {/* Compensation Types (New Section) */}
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-6 flex items-center">
                <DollarSign className="text-green-600 mr-3" /> Compensation You Can Recover
              </h2>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="divide-y divide-gray-100">
                  {content.compensationTypes?.map((type, idx) => (
                    <div key={idx} className="p-6 hover:bg-slate-50 transition-colors">
                      <h4 className="font-bold text-navy-900 text-lg mb-1">{type.title}</h4>
                      <p className="text-gray-700 text-base leading-relaxed">{type.description}</p>
                    </div>
                  )) || <p className="p-6">Contact us for a case evaluation.</p>}
                </div>
              </div>
            </div>

            {/* Local Relevance (New Section) */}
            <div className="bg-navy-50 p-8 rounded-xl border border-navy-100">
               <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center">
                 <MapPin className="text-gold-600 mr-2" /> Local Legal Experience in Macon
               </h3>
               <p className="text-gray-700 leading-relaxed text-lg">
                 {content.localRelevance}
               </p>
            </div>

            {/* Statute Info */}
            <div className="bg-slate-800 text-white rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-gold-500" size={24} />
                <h3 className="text-2xl font-bold">Georgia Law Explained</h3>
              </div>
              <div className="bg-slate-900/50 p-5 rounded-lg border border-slate-600 mb-6">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Relevant Statute</span>
                <p className="text-xl font-serif font-bold text-gold-500 mt-1">{content.statuteInfo.code}</p>
                <p className="text-white font-bold text-lg mt-1">{content.statuteInfo.title}</p>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                {content.statuteInfo.description}
              </p>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {content.faqs.map((faq, idx) => (
                  <details key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 group">
                    <summary className="list-none flex justify-between items-center p-6 cursor-pointer">
                      <span className="font-bold text-navy-900 text-lg">{faq.question}</span>
                      <span className="transition group-open:rotate-180">
                        <ChevronDown className="text-gold-500" size={24} />
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-50 pt-4 text-base">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              
              {/* Form Card */}
              <div className="bg-navy-900 rounded-2xl p-6 shadow-xl text-white">
                <h3 className="text-2xl font-bold mb-2">Get A Free Case Review</h3>
                <p className="text-gray-300 text-base mb-6">Tell us what happened. We'll tell you if you have a case.</p>
                <ContactForm />
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                 <div className="w-14 h-14 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                   <Phone size={28} />
                 </div>
                 <h4 className="font-bold text-navy-900 text-xl mb-1">Questions? Call Us.</h4>
                 <p className="text-gray-600 text-base mb-4">Available 24/7 for free advice.</p>
                 <a href="tel:4785550123" className="text-2xl font-bold text-navy-900 hover:text-gold-600 block transition-colors">
                   (478) 555-0123
                 </a>
              </div>

              {/* Other Practice Areas */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h4 className="font-bold text-navy-900 mb-4 uppercase text-sm tracking-wider">Other Practice Areas</h4>
                <ul className="space-y-2">
                  {PRACTICE_AREAS.filter(p => p.id !== id).map(p => (
                    <li key={p.id}>
                      <Link to={`/practice/${p.id}`} className="flex items-center justify-between p-3 rounded hover:bg-slate-50 text-gray-700 hover:text-gold-600 transition-colors group">
                        <span className="text-base font-medium">{p.title}</span>
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
      <ChatAssistant />
    </div>
  );
};

export default PracticePage;