import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-tr from-gray-800 to-black text-white py-16 font-body">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">

            {/* About Me */}
            <div>
              <h4 className="text-2xl font-bold mb-5 text-teal-400 font-heading font-semibold">About Me</h4>
              <p className="text-gray-300 text-base leading-loose">
                I'm a passionate front-end developer on a journey of growth and creativity.
                Dive into my projects and feel free to connect!
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-2xl font-bold mb-5 text-teal-400 font-heading font-semibold">Quick Links</h4>
              <ul className="space-y-3 text-base">
                <li><a href="#home" className="text-gray-300 hover:text-white transition duration-300 font-heading">Home</a></li>
                <li><a href="#projects" className="text-gray-300 hover:text-white transition duration-300 font-heading">Projects</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition duration-300 font-heading">Services</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition duration-300 font-heading">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-2xl font-bold mb-5 text-teal-400 font-heading font-semibold">Contact</h4>
              <p className="text-gray-300 text-base mb-3">
                Email: <a href="mailto:fariaabid473@gamil.com" className="text-teal-300 hover:text-white font-heading">fariaabid473@gamil.com</a>
              </p>
              <p className="text-gray-300 text-base mb-3">Phone: +123 456 789</p>
              <p className="text-gray-300 text-base">Location: Islamabad, Pakistan</p>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-2xl font-bold mb-5 text-teal-400 font-heading font-semibold">Follow Me</h4>
              <div className="flex space-x-6">
                 <a
  href="https://github.com/faria-webdev404"  // ← Replace with your GitHub username
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-teal-400 transition text-4xl font-heading"
>
  <i className="fab fa-github"></i>
</a>
<a
  href="https://www.linkedin.com/in/faria-abid"   // ← Replace with your GitHub username
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-teal-400 transition text-4xl font-heading"
>
   <i className="fab fa-linkedin"></i>
</a>
    
              </div>
            </div>

          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-gray-950 text-center py-5 text-base text-gray-400 tracking-wide font-body">
        &copy; 2025 <span className="text-white font-semibold font-heading">Faria Abid</span>. All Rights Reserved.
      </div>
    </>
  );
}

export default Footer;
