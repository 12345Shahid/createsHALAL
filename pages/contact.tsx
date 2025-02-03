import React from 'react';
import Head from 'next/head';
import { APP_NAME } from '../config/settings';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Contact Us - {APP_NAME}</title>
        <meta name="description" content="Get in touch with us for any questions or feedback about our Halal AI Chat Assistant." />
      </Head>

      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <div className="mb-8">
        <p>We'd love to hear from you! Please use the form below to get in touch with us.</p>
      </div>

      <div className="embed-responsive aspect-ratio-4/3">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSdAc9FXhsVKwbIQlxIxRXCbXlObfpQgvWELHRV9wWVokmbNIg/viewform?embedded=true" 
          width="100%" 
          height="721" 
          frameBorder="0" 
          marginHeight="0" 
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Contact;