
import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Contact Information */}
      <section className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-4">We would love to hear from you! Reach out to us using the contact details below or visit us at our campus.</p>
        <p className="text-lg mb-2">Address: Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
        <p className="text-lg mb-2">Phone: +1 (123) 456-7890</p>
        <p className="text-lg mb-2">Email: <a href="mailto:info@springdale.edu" className="text-blue-500 hover:underline">info@springdale.edu</a></p>
      </section>

      {/* Contact Form */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Send Us a Message</h2>
        <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full p-2 border border-gray-300 rounded" required></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Send</button>
        </form>
      </section>

      {/* Google Map */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-center">Find Us Here</h2>
        <div className="relative w-full h-64">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.170766831872!2d-122.08084968461294!3d37.38605197982565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb6bdc8e74ad7%3A0x23816d81a3b7a16!2sGoogleplex!5e0!3m2!1sen!2sus!4v1625215165393!5m2!1sen!2sus"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
