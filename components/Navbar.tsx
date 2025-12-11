import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../data';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Handle Scroll Effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  // Smooth Scroll Function
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (href === '#home') {
       window.scrollTo({ top: 0, behavior: 'smooth' });
       return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Journey', href: '#experience' },
    { name: 'Stories', href: '#stories' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-[50] transition-all duration-500 border-b ${
            scrolled 
                ? 'bg-white/90 backdrop-blur-xl border-gray-200/50 py-3 shadow-sm' 
                : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
            
            {/* Logo */}
            <a 
                href="#home" 
                onClick={(e) => scrollToSection(e, '#home')}
                className="relative z-50 flex items-center gap-2 group"
            >
                <div className="relative w-8 h-8 flex items-center justify-center overflow-hidden rounded-lg bg-primary text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="font-clash font-bold text-lg relative z-10">A</span>
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="font-clash font-bold text-xl tracking-tight text-primary">
                    ARYAN
                    <span className="text-india-saffron">.</span>
                </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 bg-gray-100/50 p-1 rounded-full border border-black/5 backdrop-blur-sm">
                {navLinks.map((link, index) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => scrollToSection(e, link.href)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="relative px-5 py-2 text-sm font-bold text-secondary transition-colors hover:text-primary z-10"
                    >
                        {hoveredIndex === index && (
                            <motion.span
                                layoutId="nav-pill"
                                className="absolute inset-0 bg-white rounded-full shadow-sm border border-black/5 -z-10"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        {link.name}
                    </a>
                ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
                 <a 
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-full text-xs font-bold overflow-hidden transition-transform active:scale-95 hover:shadow-lg hover:shadow-primary/20"
                >
                    <span className="relative z-10 flex items-center gap-2 uppercase tracking-wider">
                        Let's Talk <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-india-blue via-primary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 </a>
            </div>

            {/* Mobile Toggle Button */}
            <button 
                className="md:hidden relative z-50 p-2 text-primary bg-white/80 backdrop-blur-md rounded-xl border border-gray-200 active:scale-90 transition-all hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Menu"
            >
                <Menu size={24} />
            </button>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div 
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-india-saffron via-india-blue to-india-green origin-left"
            style={{ scaleX }}
        />
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex justify-end"
                onClick={() => setMobileMenuOpen(false)}
            >
                {/* Drawer Content */}
                <motion.div 
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", damping: 30, stiffness: 300 }}
                    className="w-[85%] max-w-sm h-full bg-white shadow-2xl flex flex-col relative overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Decorative Background Blob */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-india-saffron/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    {/* Header */}
                    <div className="p-6 flex justify-between items-center border-b border-gray-100">
                        <span className="font-clash font-bold text-xl text-primary">
                            ARYAN<span className="text-india-saffron">.</span>
                        </span>
                        <button 
                            onClick={() => setMobileMenuOpen(false)}
                            className="p-2 bg-gray-50 text-primary rounded-full hover:bg-red-50 hover:text-red-500 transition-colors border border-gray-100"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Links */}
                    <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-2">
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + (i * 0.05) }}
                                className="group flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100 active:scale-[0.98]"
                            >
                                <span className="font-clash text-2xl font-bold text-primary group-hover:text-india-blue transition-colors">
                                    {link.name}
                                </span>
                                <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center group-hover:bg-india-blue group-hover:border-india-blue transition-colors">
                                    <ArrowUpRight className="text-gray-300 group-hover:text-white transition-colors" size={16}/>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                    
                    {/* Footer */}
                    <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                        <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-4">Connect</p>
                        <div className="flex gap-4 mb-6">
                             <a href={SOCIAL_LINKS.github} target="_blank" className="p-3 bg-white border border-gray-200 rounded-xl hover:border-black hover:text-black transition-colors text-secondary">
                                <Github size={20} />
                             </a>
                             <a href={SOCIAL_LINKS.linkedin} target="_blank" className="p-3 bg-white border border-gray-200 rounded-xl hover:border-[#0077b5] hover:text-[#0077b5] transition-colors text-secondary">
                                <Linkedin size={20} />
                             </a>
                             <a href={`mailto:${SOCIAL_LINKS.email}`} className="p-3 bg-white border border-gray-200 rounded-xl hover:border-india-saffron hover:text-india-saffron transition-colors text-secondary">
                                <Mail size={20} />
                             </a>
                        </div>
                        <a 
                            href={`mailto:${SOCIAL_LINKS.email}`}
                            className="block w-full py-4 bg-primary text-white text-center rounded-xl font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform text-sm"
                        >
                            Let's Work Together
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;