"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        e.currentTarget,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your inquiry. We will contact you soon!'
        });
        formRef.current?.reset();
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 py-16 sm:py-24" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Get in touch with us to discuss your container home needs. We're here to help turn your vision into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
          {/* Contact Information */}
          <div className="lg:col-span-4 lg:mt-8">
            <dl className="space-y-6 text-base leading-7 text-gray-600">
              <div className="flex items-center gap-x-4 rounded-lg bg-white p-6 shadow-sm">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <svg className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </dt>
                <dd>
                  <a className="font-semibold text-blue-600 hover:text-blue-500" href="mailto:admin@innoau.com.au">
                    admin@innoau.com.au
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                      Name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      id="name"
                      required
                      placeholder="Your name"
                      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="user_phone"
                      id="phone"
                      required
                      placeholder="Your phone number"
                      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="requirements" className="block text-sm font-medium leading-6 text-gray-900">
                    Requirements
                  </label>
                  <textarea
                    name="message"
                    id="requirements"
                    rows={6}
                    required
                    placeholder="Please describe your requirements..."
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
                
                {submitStatus.type && (
                  <div className={`rounded-md p-4 ${
                    submitStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                  }`}>
                    <p className="text-sm">{submitStatus.message}</p>
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-md bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}