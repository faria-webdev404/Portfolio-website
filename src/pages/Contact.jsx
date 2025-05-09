import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Contact = () => {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Run animations only once
    });
  }, []);

  return (
    
      <section className="py-16 bg-gradient-to-br from-white via-teal-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-body" id="contact">

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Section Heading with AOS animation */}
        <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-4xl font-bold text-gray-800 font-heading font-semibold dark:text-white">
            Let's <span className="text-teal-500">Connect</span>
          </h2>
          <p className="text-gray-600 mt-2 dark:text-gray-300">
            I'd love to hear from you! Please fill out the form below.
          </p>
        </div>

        {/* Contact Form with AOS animation */}
        <form
          className="backdrop-blur-sm bg-white/70 p-8 rounded-2xl shadow-2xl space-y-6 border border-gray-200"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {/* Name */}
          <div data-aos="fade-up" data-aos-delay="500">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 font-heading">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-400 focus:border-blue-400 bg-white bg-opacity-80 font-body"
            />
          </div>

          {/* Email */}
          <div data-aos="fade-up" data-aos-delay="600">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 font-heading">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-400 focus:border-blue-400 bg-white bg-opacity-80 font-body"
            />
          </div>

          {/* Message */}
          <div data-aos="fade-up" data-aos-delay="700">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 font-heading">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-400 focus:border-blue-400 bg-white bg-opacity-80 font-body"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="800">
            <button
              type="submit"
              className="bg-teal-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-600 transition transform hover:scale-105 duration-200 font-heading"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
