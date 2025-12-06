import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, FileText, Scale, ArrowLeft } from 'lucide-react';
import ChatAssistant from '../components/ChatAssistant';

const Disclaimer: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-navy-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Legal Disclaimer</h1>
          <p className="text-gray-300 text-lg">Important information regarding the use of this website.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-gold-600 hover:text-gold-800 font-bold mb-8 transition-colors group">
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Return to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-12">
          
          {/* No Attorney-Client Relationship */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="text-navy-900" size={28} />
              <h2 className="text-2xl font-serif font-bold text-navy-900">No Attorney-Client Relationship</h2>
            </div>
            <div className="prose text-gray-600 leading-relaxed">
              <p>
                The information contained on the Macon Personal Injury Attorneys website is provided for educational and informational purposes only. It is not intended to be legal advice. 
              </p>
              <p className="mt-4 font-bold text-navy-800">
                Viewing this website, submitting a contact form, chatting with our AI assistant, or sending an email to our firm does NOT create an attorney-client relationship.
              </p>
              <p className="mt-4">
                An attorney-client relationship is only established after a written engagement letter has been signed by both you and a representative of Macon Personal Injury Attorneys. Until such a relationship is established, please withhold sending any confidential information to us.
              </p>
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* Not Legal Advice */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-navy-900" size={28} />
              <h2 className="text-2xl font-serif font-bold text-navy-900">Not Legal Advice</h2>
            </div>
            <div className="prose text-gray-600 leading-relaxed">
              <p>
                The content on this site covers general legal topics and may not reflect the most current legal developments, verdicts, or settlements. Laws vary by state and are subject to change. The information provided here should not be used as a substitute for competent legal advice from a licensed professional attorney in your state.
              </p>
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* Past Results Disclaimer */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-navy-900" size={28} />
              <h2 className="text-2xl font-serif font-bold text-navy-900">Past Results Do Not Guarantee Future Outcomes</h2>
            </div>
            <div className="prose text-gray-600 leading-relaxed">
              <p>
                Our website describes past cases handled by our attorneys and the outcomes of those cases (verdicts and settlements). These descriptions are illustrative only.
              </p>
              <div className="bg-slate-50 border-l-4 border-gold-500 p-4 my-4 text-sm">
                <p className="font-bold text-navy-900 mb-1">Please Note:</p>
                <p>Every case is different and must be judged on its own merits. Past success in similar cases does not guarantee a similar result in your case.</p>
              </div>
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* AI Assistant Disclaimer */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="text-gold-600" size={28} />
              <h2 className="text-2xl font-serif font-bold text-navy-900">AI Assistant Disclaimer</h2>
            </div>
            <div className="prose text-gray-600 leading-relaxed">
              <p>
                This website utilizes an automated Artificial Intelligence (AI) chat assistant ("JusticeBot") to provide general information and assist with navigation.
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>The AI assistant is <strong>NOT</strong> an attorney.</li>
                <li>Conversations with the AI assistant do not constitute legal advice.</li>
                <li>While we strive for accuracy, the AI may occasionally provide incomplete or incorrect information.</li>
                <li>Do not rely solely on the AI's responses for legal deadlines (such as Statutes of Limitations). Always verify dates with a licensed attorney.</li>
              </ul>
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* Jurisdiction */}
          <section>
            <h2 className="text-xl font-bold text-navy-900 mb-4">Jurisdiction</h2>
            <p className="text-gray-600 leading-relaxed">
              The attorneys at Macon Personal Injury Attorneys are licensed to practice law in the State of Georgia. Our website is intended to comply with all ethical rules of the State Bar of Georgia. We do not seek to represent anyone based upon their viewing of this website in a state where this website fails to comply with all laws and ethical rules of that state.
            </p>
          </section>

        </div>
      </div>
      <ChatAssistant />
    </div>
  );
};

export default Disclaimer;