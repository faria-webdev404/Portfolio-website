import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Correct import for React Router
import Hero from './pages/Hero'; 
import ProjectsPage from './pages/ProjectsPage';              // Home page
import About from './pages/About';  
 import Skills from './pages/Skills';          // About page
import Services from './pages/Services';       // Services page
import Projects from './pages/Projects';       // Projects page
import Experience from './pages/Experience';   // Experience page
import Contact from './pages/Contact';         // Contact page
import Header from './components/Header';      // Navigation header
import Footer from './components/Footer';
      // Footer
import "./App.css";                           // App styles

function App() {
  return (
    <>
      <Header />
      
      <Routes>
        {/* Show all components on the home page */}
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Skills />
            <Services />
           
            <Projects limit={3}  />
            <Contact />
          </>
        } />
        
        {/* Optional: Add specific routes for each individual page */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
         <Route path="/project" element={<ProjectsPage />} />
       
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
