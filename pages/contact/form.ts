import React from 'react';

const ContactForm = () => {
  return (
    <form action="https://formsubmit.co/el/xuvovi" method="POST" className="max-w-md">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">Name</label>
        <input type="text" id="name" name="name" required className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">Email</label>
        <input type="email" id="email" name="email" required className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2">Message</label>
        <textarea id="message" name="message" required className="w-full p-2 border rounded" rows={4}></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send Message</button>
    </form>
  );
};

export default ContactForm;