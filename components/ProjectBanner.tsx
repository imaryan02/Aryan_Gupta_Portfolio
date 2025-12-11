import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const ProjectBanner = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        const offset = 100;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = projectsSection.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  };

  return (
    <section 
        className="bg-black py-16 lg:py-20 relative overflow-hidden group cursor-pointer border-y-4 border-india-saffron" 
        onClick={scrollToProjects}
    >
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      {/* Scrolling Background Text - Marquee Effect */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full overflow-hidden opacity-10 select-none pointer-events-none">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="whitespace-nowrap flex gap-12 text-[12vw] leading-none font-clash font-black text-white"
        >
            <span>SHIP FAST</span>
            <span>BUILD STUFF</span>
            <span>BREAK THINGS</span>
            <span>SHIP FAST</span>
            <span>BUILD STUFF</span>
            <span>BREAK THINGS</span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Text Content */}
        <div className="text-left relative">
            <div className="flex items-center gap-2 mb-3">
                <Sparkles className="text-india-saffron animate-pulse" size={20} />
                <span className="text-india-saffron font-bold tracking-[0.2em] text-xs uppercase">Highly Recommended</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-clash font-bold text-white leading-[0.9]">
                Talk is cheap. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-india-saffron to-yellow-500">
                    Show me the code.
                </span>
            </h2>
            <p className="text-gray-400 font-medium max-w-lg mt-4 text-lg">
                Don't just scroll. Witness the engineering behind the claims.
            </p>
        </div>

        {/* Massive CTA Button */}
        <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="shrink-0 px-10 py-6 bg-india-saffron text-black rounded-full font-black text-xl flex items-center gap-4 shadow-[0_0_50px_-10px_rgba(255,153,51,0.5)] hover:shadow-[0_0_80px_-10px_rgba(255,153,51,0.8)] hover:bg-white transition-all duration-300 group/btn"
        >
            CHECKOUT MY PROJECTS 
            <div className="bg-black text-white p-2 rounded-full group-hover/btn:rotate-45 transition-transform duration-300">
                <ArrowRight size={24} />
            </div>
        </motion.button>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-india-saffron/20 rounded-full blur-[100px] pointer-events-none"></div>

    </section>
  );
};

export default ProjectBanner;