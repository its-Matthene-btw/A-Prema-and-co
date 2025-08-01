"use client";

import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Later, we will add the logic to send this data to our API endpoint.
    console.log({ name, email, phone, message });
    alert("Form submitted! (Check console for data)");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Full Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition"
          placeholder="Your Name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">Phone Number</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition"
          placeholder="Your Contact Number"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Your Message</label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition"
          placeholder="Please describe your legal concern briefly..."
        ></textarea>
      </div>
      <button type="submit" className="bg-[#D4AF37] hover:bg-[#c19e30] text-white font-bold px-8 py-3 rounded-md text-lg transition duration-300 w-full">Send Message</button>
    </form>
  );
};

export default ContactForm;