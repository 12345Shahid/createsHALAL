import { useState } from 'react';
import Head from 'next/head';
import { APP_NAME } from '../config/settings';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here we would typically send the form data to an API endpoint
    // For now, we'll just simulate a successful submission
    setSubmitted(true);
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Contact Us - {APP_NAME}</title>
        <meta name="description" content="Get in touch with us" />
      </Head>

      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      {submitted ? (
        <p className="text-green-600">Thank you for your message. We'll get back to you soon!</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-2 border rounded"
              rows={5}
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;