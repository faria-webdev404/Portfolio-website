import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle('dark');
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const navLinks = ['Home', 'About', 'Services', 'Projects', 'Experience', 'Contact'];

  // Variants for animations
  const navVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    })
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
  };

  return (
    <>
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="bg-white dark:bg-gray-900 shadow-md text-gray-800 dark:text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center mr-6 space-x-2">
              <i className="fas fa-laptop text-3xl text-teal-500"></i>
              <a href="#" className="text-3xl font-bold text-teal-500 hover:text-teal-600 transition duration-300 font-heading">FARIA</a>
            </div>

            {/* Center Nav Links */}
            <div className="hidden md:flex flex-grow justify-center space-x-4">
              {navLinks.map((link, index) => (
                <motion.div key={index} custom={index} initial="hidden" animate="visible" variants={linkVariants}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="font-heading text-gray-700 dark:text-white border-2 border-transparent rounded-md px-4 py-2 hover:bg-teal-500 hover:text-white transition duration-300">
                    {link}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <div className="hidden md:flex items-center space-x-4">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked={isDark} onChange={toggleTheme} />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:bg-teal-500 transition-all duration-300">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                </div>
              </label>
            </div>

            {/* Mobile menu toggle */}
            <div className="md:hidden flex items-center space-x-3">
              <button onClick={toggleMobileMenu} className="text-gray-700 dark:text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu animated */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              className="md:hidden px-4 pb-4 space-y-2"
            >
              {navLinks.map((link) => (
                <Link
                  key={link}
                  to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                  className="font-heading block text-gray-700 dark:text-white border-2 border-transparent rounded-md px-4 py-2 hover:bg-teal-500 dark:hover:bg-teal-600 hover:text-white transition duration-300"
                >
                  {link}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Font styling */}
      <style>{`
        .font-heading {
          font-family: 'Poppins', sans-serif;
        }
        .font-body {
          font-family: 'Open Sans', sans-serif;
        }
      `}</style>
    </>
  );
};

export default Header;
