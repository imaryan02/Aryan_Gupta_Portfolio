
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Code2, Github, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    // Updated container: Added padding and adjusted alignment
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center sm:p-4 md:p-6">
      
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <motion.div 
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        // Height reduced to h-[85vh] (mobile) and h-[80vh] (desktop) to guarantee it doesn't touch the navbar
        className="relative w-full max-w-6xl h-[85vh] md:h-[80vh] bg-white rounded-t-[2rem] md:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
      >
        
        {/* Floating Close Button - Positioned safely inside the modal for mobile */}
        <button 
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-[60] p-3 md:p-2.5 bg-white/90 backdrop-blur-xl rounded-full text-primary border border-subtle hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all shadow-lg cursor-pointer"
            aria-label="Close modal"
        >
            <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* --- LEFT COLUMN: SCROLLABLE CONTENT --- */}
        <div className="w-full md:w-[60%] h-full overflow-y-auto custom-scrollbar bg-white order-2 md:order-1 relative">
             
             {/* Mobile Image Banner (Visible only on Mobile) */}
             <div className="md:hidden w-full h-64 relative shrink-0">
                {project.imageUrl ? (
                    <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <span className="text-3xl font-clash font-bold text-gray-300">{project.title[0]}</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
             </div>

             <div className="p-6 md:p-12 pb-32 md:pb-12">
                 {/* Header Tags */}
                 <div className="flex flex-wrap items-center gap-3 mb-6">
                     <span className="px-4 py-1.5 rounded-full bg-india-blue/5 text-india-blue text-xs font-bold border border-india-blue/10 uppercase tracking-wider">
                        {project.nature}
                     </span>
                     <span className="flex items-center gap-1.5 text-sm text-secondary font-mono bg-gray-50 px-3 py-1.5 rounded-full border border-subtle">
                        <Calendar size={14} /> {project.date}
                     </span>
                 </div>

                 {/* Title & Hook */}
                 <h2 className="text-3xl md:text-5xl font-clash font-bold text-primary mb-6 leading-[1.1]">
                    {project.title}
                 </h2>
                 <p className="text-lg md:text-xl text-secondary font-medium leading-relaxed mb-8 border-l-4 border-india-saffron pl-6">
                    {project.hook}
                 </p>

                 {/* Action Buttons */}
                 <div className="flex flex-wrap gap-4 mb-12">
                     {project.links.demo && (
                         <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none min-w-[160px] group flex items-center justify-center gap-2 bg-gradient-to-r from-india-saffron via-orange-500 to-red-500 text-white py-4 px-6 rounded-xl font-bold shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all">
                             <span className="flex items-center gap-2">Live Demo <ExternalLink size={18} /></span>
                         </a>
                     )}
                     {project.links.github && (
                         <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none min-w-[160px] flex items-center justify-center gap-2 bg-white border-2 border-subtle text-primary py-4 px-6 rounded-xl font-bold hover:border-primary hover:bg-primary hover:text-white transition-all">
                             <Github size={18} /> Source Code
                         </a>
                     )}
                 </div>

                 {/* Deep Dive Content */}
                 <div className="space-y-10">
                    
                    {/* Problem / Solution Grid */}
                    <div className="grid gap-6">
                        <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100">
                            <h3 className="font-clash text-lg font-bold text-red-900 mb-2 flex items-center gap-2">
                                The Problem
                            </h3>
                            <p className="text-red-900/70 leading-relaxed">{project.modalContent.problem}</p>
                        </div>
                        <div className="bg-green-50/50 p-6 rounded-2xl border border-green-100">
                             <h3 className="font-clash text-lg font-bold text-green-900 mb-2 flex items-center gap-2">
                                The Solution
                            </h3>
                            <p className="text-green-900/70 leading-relaxed">{project.modalContent.solution || project.modalContent.impact}</p>
                        </div>
                    </div>

                    {/* Features List */}
                    <div>
                         <h3 className="font-clash text-2xl font-bold text-primary mb-6">Key Features</h3>
                         <div className="grid md:grid-cols-2 gap-4">
                             {project.modalContent.features.map((feature, i) => (
                                 <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-subtle hover:border-india-blue/30 transition-colors">
                                     <CheckCircle2 size={20} className="text-india-blue mt-0.5 shrink-0" />
                                     <span className="text-sm font-medium text-secondary">{feature}</span>
                                 </div>
                             ))}
                         </div>
                    </div>

                    {/* Technical Specs */}
                    <div className="border-t border-subtle pt-8">
                         <h3 className="font-clash text-xl font-bold text-primary mb-4 flex items-center gap-2">
                             <Code2 size={20} className="text-primary"/> Under the Hood
                         </h3>
                         <p className="text-secondary leading-relaxed mb-6">
                             {project.modalContent.technicalDetails}
                         </p>
                         <div className="flex flex-wrap gap-2">
                             {project.techStack.map(tech => (
                                 <span key={tech} className="text-xs font-bold px-3 py-1.5 bg-primary text-white rounded-lg shadow-sm">
                                     {tech}
                                 </span>
                             ))}
                         </div>
                    </div>
                 </div>
             </div>
        </div>

        {/* --- RIGHT COLUMN: STICKY IMAGE (Desktop Only) --- */}
        <div className="hidden md:block w-[40%] bg-gray-100 h-full relative order-1 md:order-2 overflow-hidden">
             {project.imageUrl ? (
                 <>
                    <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-[2000ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                        <div className="w-12 h-1 bg-india-saffron mb-6"></div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-3">Impact Statement</p>
                        <p className="text-xl font-medium leading-relaxed font-clash">
                            "{project.modalContent.impact || "Engineering robust solutions for the next billion users."}"
                        </p>
                    </div>
                 </>
             ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-300">
                    <Code2 size={64} />
                </div>
             )}
        </div>

      </motion.div>
    </div>
  );
};

export default ProjectModal;
