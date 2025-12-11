import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectBanner from './components/ProjectBanner';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Stories from './components/Stories';
import Projects from './components/Projects';
import Events from './components/Events';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-main min-h-screen text-primary font-sans selection:bg-india-saffron selection:text-white overflow-x-hidden relative">
      
      {/* Ambient Animated Gradients (Replacing Smoke) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Saffron Blob - Top Left */}
        <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-india-saffron/15 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob"></div>
        
        {/* Green Blob - Bottom Right */}
        <div className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] bg-india-green/15 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-2000"></div>
        
        {/* Blue/White Center Blob */}
        <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-india-blue/5 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Subtle Grain Overlay for texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[10] bg-grain bg-repeat"></div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        {/* High Priority CTA Banner */}
        <ProjectBanner />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Stories />
        <Projects />
        <Events />
        <Contact />
      </main>
    </div>
  );
}

export default App;