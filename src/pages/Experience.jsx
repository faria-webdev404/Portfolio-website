import { motion } from "framer-motion";

const experiences = [
  {
    position: "Frontend Developer",
    company: "EcodeCamp (Pvt.) Ltd",
    duration: "Sep 2024 – Oct 2024",
    location: "Lahore, Pakistan",
    type: "Remote",
    projects: [
      {
        name: "Portfolio Website",
        description: "Personal branding with sections like hero, about, and contact.",
      },
      {
        name: "EchoNews",
        description: "Responsive news portal with filterable categories.",
      },
      {
        name: "Furry Friend Finder",
        description: "Pet adoption platform with search, blog, and lost & found features.",
      },
    ],
  },
  {
    position: "Frontend Developer Intern",
    company: "Ineffable Devs",
    duration: "Nov 2024 – Dec 2024",
    location: "Islamabad, Pakistan",
    type: "Onsite",
    projects: [
      {
        name: "Responsive Web Page",
        description:
          "Design a fully responsive web page using CSS media queries and responsive design principles to ensure cross-browser compatibility.",
      },
      {
        name: "Library Management System",
        description:
          "Make a simple JavaScript-based system that fetches book data from Goodreads API, allows users to search and save books in local storage.",
      },
      {
        name: "Advanced Library Management System (React.js)",
        description:
          "Develop a React-based system using Redux for state management and Axios for API integration featuring search, books listing, and detailed view component.",
      },
    ],
  },
];

const Experience = () => {
  return (
    <section className="bg-gradient-to-br from-teal-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-8 lg:px-24 font-[Open_Sans,sans-serif]">
      <h2 className="text-4xl font-semibold text-teal-500 mb-12 text-center font-[Poppins,sans-serif]">
        Experience
      </h2>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border-l-4 border-teal-500 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 max-w-4xl mx-auto"
          >
            <div className="flex flex-col space-y-2">
              <h3 className="text-2xl text-teal-700 dark:text-teal-500 font-[Poppins,sans-serif] font-semibold">
                {exp.position}
              </h3>
              <p className="text-gray-800 dark:text-gray-100">{exp.company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-200">
                {exp.duration} • {exp.location}
                <span className="ml-2 inline-block bg-teal-100 text-teal-700 dark:bg-teal-700 dark:text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {exp.type}
                </span>
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-gray-700 dark:text-gray-200 mb-3">
                Projects
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 text-sm ml-1">
                {exp.projects.map((project, idx) => (
                  <li key={idx}>
                    <span className="font-medium text-gray-800 dark:text-gray-100">
                      {project.name}
                    </span>{" "}
                    – {project.description}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
