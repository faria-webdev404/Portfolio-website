import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMui,
  SiTypescript,
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const skills = [
  { icon: <FaHtml5 className="text-orange-600" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS3" },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
  { icon: <FaReact className="text-blue-400" />, name: "React JS" },
  { icon: <FaBootstrap className="text-purple-600" />, name: "Bootstrap" },
  { icon: <SiTailwindcss className="text-cyan-500" />, name: "Tailwind CSS" },
  { icon: <SiMui className="text-indigo-700" />, name: "Material UI" },
  { icon: <FaNodeJs className="text-green-600" />, name: "Node JS" },
  { icon: <SiNextdotjs className="text-black" />, name: "Next JS" },
];

const Skills = () => {
   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
     <section
        id="skills"
        
        className="py-20 px-4 bg-gray-100 dark:bg-gray-900"
        data-aos="fade-up"
      >
      {/* Section Heading */}
       <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="100">
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        {/* Text Description */}
        <div className="md:w-1/2 text-center md:text-left mr-10">
         <h2
          className="text-5xl font-bold text-gray-800 dark:text-white mb-12 font-heading font-semibold"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          My <span className="text-teal-500 ml-2">Tech Stack</span>
        </h2>
          <p className="text-gray-700 mt-8 dark:text-white text-xl font-opensans leading-relaxed">
            I specialize in crafting responsive and user-friendly web interfaces using modern technologies. Whether it’s building layouts with HTML/CSS, designing elegant components with Tailwind or Material UI, or developing dynamic web apps using React and Node.js—I'm passionate about bringing ideas to life through code.
          </p>
        </div>

        {/* Skill Icons Grid */}
         <div className="md:w-1/2 flex justify-center ml-8" data-aos="zoom-in-up" data-aos-delay="300">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-4 flex justify-center items-center rounded-xl shadow-md"
                style={{ width: "130px", height: "130px" }}
              >
                <div className="text-5xl">{skill.icon}</div>
              </div>
            ))}
          </div>
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

export default Skills;
