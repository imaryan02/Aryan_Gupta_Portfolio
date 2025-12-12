import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Content */}
        <div className="order-2 lg:order-1 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 pl-1.5 pr-4 py-1.5 rounded-full border border-india-saffron/20 bg-orange-50/50 backdrop-blur-sm mb-8"
          >
            <div className="w-5 h-5 rounded-full bg-white border border-india-blue/20 flex items-center justify-center shadow-sm">
              <div className="w-2 h-2 bg-india-blue rounded-full animate-pulse" />
            </div>
            <span className="text-xs font-bold tracking-widest text-india-saffron uppercase">Building for Bharat 🇮🇳</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-clash font-bold text-6xl md:text-8xl leading-[1] tracking-tight text-primary mb-6"
          >
            VISIONARY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-india-saffron via-india-blue to-india-green">BUILDER.</span>
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1.5 bg-gradient-to-r from-india-saffron to-india-green rounded-full mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-secondary mb-10 max-w-lg leading-relaxed font-medium"
          >
            I build real, live digital products for India — from healthcare platforms to AI-driven wellness tools — with a deep focus on purpose-driven work that genuinely improves people’s lives at scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a href="#projects" className="group relative px-8 py-4 rounded-full bg-primary text-white font-bold overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <span className="relative z-10 flex items-center gap-2 tracking-wide">
                View My Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-india-blue via-primary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <button className="group px-8 py-4 rounded-full border border-subtle bg-white text-primary font-bold hover:border-india-saffron hover:text-india-saffron transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md">
              Download Resume <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md aspect-[4/5]">
            {/* Decorative Backdrops */}
            <div className="absolute top-[-20px] right-[-20px] w-full h-full border-2 border-india-saffron/20 rounded-[2rem] z-0"></div>
            <div className="absolute bottom-[-20px] left-[-20px] w-full h-full border-2 border-india-green/20 rounded-[2rem] z-0"></div>

            {/* Main Image Container */}
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl z-10 bg-gray-100">
              <img
                src="/images/aryan.jpg"
                alt="Aryan Gupta"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />

              {/* Glass Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 glass p-4 rounded-xl border border-white/40 flex justify-between items-end">
                <div>
                  <p className="font-clash font-bold text-lg text-primary">Aryan Gupta</p>
                  <p className="text-xs font-semibold text-india-blue uppercase tracking-wider">Software Engineer</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                  <span className="text-xs font-bold">IN</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -right-6 top-12 glass p-3 rounded-2xl shadow-xl border border-white/50 animate-float z-20">
              <div className="w-8 h-8 bg-india-saffron/10 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-india-saffron rounded-full"></div>
              </div>
            </div>
            <div className="absolute -left-6 bottom-32 glass p-3 rounded-2xl shadow-xl border border-white/50 animate-float z-20" style={{ animationDelay: '1.5s' }}>
              <div className="w-8 h-8 bg-india-green/10 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-india-green rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;