import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import code from '../assets/images/about3.png';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <>
      <section id="about" className="py-12 bg-white dark:bg-gray-900" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 flex justify-center md:justify-start"
            >
                 <img
                src={code}
                alt="About Me"
                  className="w-full max-w-sm h-[60vh] mt-10 ml-0 md:ml-20 object-cover bg-transparent"
/>
            
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="w-full md:w-1/2 mt-6 text-center md:text-left"
            >
              <motion.h6
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-teal-600 font-bold text-xl sm:text-2xl mb-4 font-body font-semibold"
              >
                Who am I?
              </motion.h6>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-5 font-heading font-semibold"
              >
                I'm Faria Abid, a visual UX/UI <span className='mt-20 mb-30'>Designer</span> <br className="hidden sm:block" />
                and <span className="mt-200">Web <span className='text-teal-500'>Developer</span></span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-lg sm:text-xl mb-6 max-w-2xl text-gray-600 dark:text-gray-300 font-body"
              >
                I'm a dedicated and detail-oriented Frontend Developer with a strong passion for designing clean,
                modern, and responsive web interfaces. I focus on building web applications that are not only visually
                appealing but also optimized for performance and accessibility. My goal is to continuously learn and
                grow while contributing to meaningful and impactful projects that make a difference.
              </motion.p>

              <motion.a
               href="/Faria Abid.pdf"
               download="Faria Abid"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="inline-block"
              >
                <button className="bg-teal-500 text-white px-6 py-3 rounded hover:bg-teal-600 transition font-heading text-lg sm:text-xl">
                  Download CV
                </button>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

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

export default About;
