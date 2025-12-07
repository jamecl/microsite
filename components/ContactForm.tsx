import React, { useState } from 'react';
import { Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

const ContactForm: React.FC<{ light?: boolean }> = ({ light = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    description: ''
  });
  
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    email?: string;
    description?: string;
  }>({});

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const validate = () => {
    const newErrors: typeof errors = {};
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const emailRegex = /\S+@\S+\.\S+/;

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please provide a brief description of your case';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', description: '' });
      setErrors({});
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (status === 'success') {
    return (
      <div className={`text-center p-8 rounded-xl ${light ? 'bg-white' : 'bg-navy-800'} border border-green-500/30 h-full flex flex-col justify-center items-center`}>
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
          <CheckCircle size={32} />
        </div>
        <h3 className={`text-2xl font-bold mb-2 ${light ? 'text-navy-900' : 'text-white'}`}>Message Received</h3>
        <p className={`mb-6 text-base ${light ? 'text-gray-600' : 'text-gray-300'}`}>
          Thank you for contacting Macon Personal Injury Attorneys. An attorney will review your information and contact you shortly (usually within 1 hour).
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-gold-500 font-bold hover:underline text-lg"
        >
          Send another message
        </button>
      </div>
    );
  }

  // Increased font size from text-xs to text-sm for labels
  const labelClass = `block text-sm uppercase tracking-wider font-bold mb-2 ${light ? 'text-navy-900' : 'text-gray-400'}`;
  
  const getInputClass = (fieldName: keyof typeof errors) => {
    const hasError = !!errors[fieldName];
    // Explicitly set text-base to prevent iOS zoom (requires 16px)
    let className = "w-full px-4 py-3 rounded-lg border focus:outline-none transition-colors text-base ";
    
    if (hasError) {
      if (light) {
        className += "bg-red-50 border-red-500 text-red-900 placeholder-red-300 focus:ring-2 focus:ring-red-200";
      } else {
        className += "bg-navy-800 border-red-500 text-white placeholder-red-300 focus:ring-1 focus:ring-red-500";
      }
    } else {
      if (light) {
        className += "bg-gray-50 border-gray-200 text-navy-900 focus:bg-white focus:ring-2 focus:ring-gold-500";
      } else {
        className += "bg-navy-800 border-navy-700 text-white focus:border-navy-600 focus:ring-2 focus:ring-gold-500 placeholder-gray-500";
      }
    }
    return className;
  };

  const ErrorMessage = ({ message }: { message?: string }) => {
    if (!message) return null;
    return (
      <div className="flex items-center gap-1 mt-1.5 text-red-500 text-sm font-bold animate-pulse">
        <AlertCircle size={14} />
        <span>{message}</span>
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-5 ${light ? '' : 'text-left'}`} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={getInputClass('name')}
            placeholder="John Doe"
          />
          <ErrorMessage message={errors.name} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={getInputClass('phone')}
            placeholder="(478) 555-0123"
          />
          <ErrorMessage message={errors.phone} />
        </div>
      </div>
      
      <div>
        <label htmlFor="email" className={labelClass}>Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={getInputClass('email')}
          placeholder="john@example.com"
        />
        <ErrorMessage message={errors.email} />
      </div>

      <div>
        <label htmlFor="description" className={labelClass}>Tell Us What Happened</label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={formData.description}
          onChange={handleChange}
          className={getInputClass('description')}
          placeholder="I was in a car accident on I-75..."
        ></textarea>
        <ErrorMessage message={errors.description} />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-gold-600 hover:bg-gold-500 text-white font-bold py-4 rounded-lg shadow-lg transform transition hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send size={24} /> Get Free Case Evaluation
          </>
        )}
      </button>
      {/* Increased disclaimer text size */}
      <p className={`text-xs text-center mt-4 ${light ? 'text-gray-500' : 'text-gray-400'}`}>
        By submitting this form, you agree to be contacted by our firm. Your information is confidential.
      </p>
    </form>
  );
};

export default ContactForm;