import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

const servicesData = [
  {
    icon: '💻',
    title: 'Web Development',
    description:
      'Creating fast, modern, and functional websites using HTML, CSS, JavaScript, and frameworks like React.',
  },
  {
    icon: '🧊',
    title: '3D Design',
    description:
      'Designing interactive and creative 3D visual elements that enhance user engagement and interface aesthetics.',
  },
  {
    icon: '🎯',
    title: 'Design Trends',
    description:
      'Staying updated with the latest UI/UX design trends to create visually appealing and modern layouts.',
  },
  {
    icon: '⚛️',
    title: 'React Development',
    description:
      'Building interactive and component-based user interfaces with React.js for seamless frontend experiences.',
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    description:
      'Ensuring all websites look great and function perfectly on desktops, tablets, and mobile devices.',
  },
  {
    icon: '⚙️',
    title: 'Code Optimization',
    description:
      'Improving code structure, minimizing load time, and enhancing SEO with clean and efficient code practices.',
  },
];

const Services = () => {
  useEffect(() => {
    // Initialize AOS animations when the component is mounted
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Run the animation only once
    });
  }, []);

  return (
    <section id='services'  className="py-16 bg-gray-100 dark:bg-gray-900 font-body">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Section Heading */}
        <h2
  className="text-4xl font-bold text-gray-800 dark:text-white mb-10 text-left ml-8 font-heading font-semibold"
  data-aos="fade-up"
  data-aos-delay="200"
>
  My <span className="text-teal-500 ml-2">Services</span>
</h2>

        {/* Services Grid */}
        <div className="grid gap-10 md:grid-cols-3 justify-items-center">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-xs group hover:shadow-xl hover:bg-teal-500 dark:hover:bg-teal-500 transition-all duration-300 transform group-hover:scale-105 group-hover:translate-y-3 ease-in-out"
              data-aos="fade-up" // AOS animation
              data-aos-delay={`${index * 100}`} // Delay for each card (stagger effect)
            >
              <div className="text-teal-500 text-4xl mb-4 group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 font-heading group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-white font-body">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
