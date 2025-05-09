import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 py-12 h-screen  dark:bg-gray-900" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col-reverse md:flex-row items-center justify-center h-full">

            {/* Centered Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 text-center  flex flex-col items-center justify-center mt-8 md:mt-0"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl font-bold mb-4 font-heading font-semibold dark:text-white"
              >
                Hi, I'm Faria Abid
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl mb-6 max-w-2xl mx-auto font-body dark:text-white"
              >
                "Crafting seamless digital experiences with cutting-edge technologies, I specialize in bringing your ideas to life with modern, responsive, and user-centric websites. Let's create something amazing together!"
              </motion.p>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="inline-block bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition duration-300 font-heading text-lg"
              >
                Explore My Work
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tailwind CSS for Font Styling */}
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

export default Hero;
