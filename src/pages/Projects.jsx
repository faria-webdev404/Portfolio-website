import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import images
import project1Image from '../assets/images/project1.png';
import project2Image from '../assets/images/project2.png';
import project3Image from '../assets/images/project3.png';
import project4Image from '../assets/images/project4.png';
import project5Image from '../assets/images/project5.png';
import project6Image from '../assets/images/project6.png';





const projectsData = [
   {
    title: 'Contact Form',
    description:
      'A responsive contact form using React and Node.js that allows users to submit data which are then securely stored in local files on the server.',
    image: project1Image,
    link: 'https://github.com/faria-webdev404/react-node-contact-form.git',
  },
  
  {
    title: 'SwiftCart E-commerce',
    description:
      'An e-commerce website designed for a seamless shopping experience. Includes product listings, cart system, and checkout flow using HTML, CSS, JavaScript, and Bootstrap.',
    image: project2Image,
    link: 'https://github.com/faria-webdev404/EcodeCamp_Internships.git',
  },
 
  {
    title: 'Todo List App',
    description:
      'A To-Do List app built with React and Redux Toolkit for efficient state management. Add, edit, and delete tasks with ease, demonstrating full CRUD functionality.',
    image: project3Image,
    link: 'https://github.com/faria-webdev404/todo-list-react-redux-toolkit.git',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'A responsive and modern portfolio website built with HTML, CSS, JavaScript, and Bootstrap to showcase my skills, projects, and experience as a front-end developer.',
    image: project4Image,
    link: 'https://github.com/faria-webdev404/EcodeCamp_Internships.git',
  },
  {
    title: 'EchoNews',
    description:
      'A dynamic news website built with HTML, CSS, JavaScript, and Bootstrap, featuring categorized news sections, a login form, responsive design, and an engaging user interface.',
    image: project5Image,
    link: 'https://github.com/faria-webdev404/EcodeCamp_Internships.git',
  },
  {
    title: 'Furry Friend Finder',
    description:
      'A pet adoption platform that connects pet lovers with available pets. Built using HTML, CSS, JavaScript, PHP, and MySQL, featuring adoption forms, filters, and a lost & found module.',
    image: project6Image,
    link: '#',
  },
];

const Projects = ({ limit }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  // ✅ Apply limit if provided
  const displayedProjects = limit ? projectsData.slice(0, limit) : projectsData;

  return (
    <section className="py-16 bg-white font-body dark:bg-gray-900" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-4xl font-bold text-gray-800 dark:text-white mb-12 font-heading font-semibold"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          My <span className="text-teal-500 ml-2">Projects</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md dark:bg-gray-800"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <img src={project.image} alt={project.title} className="w-full" />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 font-heading dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 font-body dark:text-gray-300">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-block bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition font-heading"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
