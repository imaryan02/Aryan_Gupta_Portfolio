
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../data';
import ProjectModal from './ProjectModal';
import { ArrowUpRight, Github, ExternalLink, Calendar, Layers, Sparkles } from 'lucide-react';
import { Project } from '../types';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const majorProjects = PROJECTS.filter(p => p.type === 'Flagship');
  const otherProjects = PROJECTS.filter(p => p.type !== 'Flagship');

  return (
    <section id="projects" className="py-32 px-6 relative bg-white overflow-hidden">
      {/* Background Elements - Technical Grid */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      {/* Indian Flag Theme Texture - Subtle Background Blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-india-saffron/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-india-green/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4"></div>
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-india-blue/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="relative">
             <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute -top-6 left-0 h-1 bg-gradient-to-r from-india-saffron via-white to-india-green"
             />
             <h2 className="font-clash text-5xl md:text-7xl font-bold text-primary leading-[0.9]">
               SELECTED <br/> <span className="text-india-saffron">WORKS.</span>
             </h2>
          </div>
          <p className="text-lg text-secondary max-w-sm text-right md:text-left font-medium leading-relaxed">
             Flagship engineering efforts. <br/>
             <span className="text-india-blue font-bold">Deep Tech</span> meeting <span className="text-india-green font-bold">Real Utility</span>.
          </p>
        </div>

        {/* --- MAJOR PROJECTS (Dark Premium Cards) --- */}
        <div className="space-y-20 mb-32">
          {majorProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="group relative bg-primary rounded-[2.5rem] overflow-hidden border border-primary shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500"
            >
               <div className="flex flex-col lg:flex-row min-h-[500px]">
                  
                  {/* Image Section - Takes up half on desktop */}
                  <div 
                    className={`relative w-full lg:w-[55%] min-h-[300px] overflow-hidden cursor-pointer ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
                    onClick={() => setSelectedProject(project)}
                  >
                      {/* Image */}
                      {project.imageUrl ? (
                        <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                            <Layers className="text-gray-600 w-20 h-20" />
                        </div>
                      )}
                      
                      {/* Dark Gradient Overlay for better contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent lg:bg-gradient-to-r lg:from-primary/60 lg:via-transparent lg:to-transparent opacity-80"></div>

                      {/* Floating Badge */}
                      <div className="absolute top-8 left-8 flex gap-2">
                           <span className="bg-black/30 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                               {project.nature}
                           </span>
                      </div>
                  </div>

                  {/* Content Section - Dark Theme */}
                  <div className={`relative w-full lg:w-[45%] p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                      {/* Decorative Background Number */}
                      <span className="absolute top-4 right-4 md:top-8 md:right-8 font-clash font-bold text-8xl md:text-9xl text-white/[0.03] select-none pointer-events-none">
                          0{index + 1}
                      </span>

                      <div className="relative z-10">
                          {/* Timeline/Type */}
                          <div className="flex items-center gap-3 mb-6">
                              <span className="w-8 h-[2px] bg-india-saffron"></span>
                              <span className="text-india-saffron font-bold tracking-widest text-xs uppercase">
                                  {project.date} • {project.type}
                              </span>
                          </div>

                          <h3 
                             className="text-4xl md:text-5xl font-clash font-bold text-white mb-6 leading-[1.1] cursor-pointer hover:text-india-saffron transition-colors"
                             onClick={() => setSelectedProject(project)}
                          >
                              {project.title}
                          </h3>

                          <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-2 border-white/10 pl-6">
                              {project.hook}
                          </p>

                          {/* Tech Stack Pills - HUD Style */}
                          <div className="flex flex-wrap gap-2 mb-10">
                              {project.techStack.map(tech => (
                                  <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-xs font-bold hover:border-india-blue/50 hover:text-white transition-colors cursor-default">
                                      {tech}
                                  </span>
                              ))}
                          </div>

                          {/* Actions - High Visibility */}
                          <div className="flex flex-wrap gap-4">
                               <button 
                                  onClick={() => setSelectedProject(project)}
                                  className="flex-1 sm:flex-none px-8 py-4 bg-white text-primary rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-india-saffron hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-india-saffron/40"
                               >
                                  View Case Study <ArrowUpRight size={18} />
                               </button>

                               {project.links.demo && (
                                   <a 
                                      href={project.links.demo} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="flex-1 sm:flex-none px-6 py-4 border border-white/20 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/40 transition-all"
                                   >
                                      Live Demo <ExternalLink size={18} />
                                   </a>
                               )}
                          </div>
                      </div>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>

        {/* --- ARCHIVE SECTION (Clean Grid) --- */}
        <div className="relative pt-12 border-t border-subtle">
            <div className="flex items-center gap-4 mb-16">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
                    <Layers className="text-primary" size={24} />
                </div>
                <div>
                    <h3 className="text-3xl font-clash font-bold text-primary uppercase">Engineering Archive</h3>
                    <p className="text-secondary text-sm">Experiments, Client Work & Hackathons</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherProjects.map((project, idx) => (
                    <motion.div 
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="group bg-surface hover:bg-white border border-subtle hover:border-india-blue/30 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                    >
                        {/* Image Header */}
                        <div 
                            className="h-56 overflow-hidden relative cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            {project.imageUrl ? (
                                <img 
                                    src={project.imageUrl} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                    <Sparkles className="text-gray-400" />
                                </div>
                            )}
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                            
                             <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-white/95 backdrop-blur rounded-lg text-[10px] font-bold text-primary uppercase tracking-wide border border-white/20 shadow-sm">
                                    {project.nature}
                                </span>
                             </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-1">
                             <div className="flex justify-between items-start mb-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-2 text-xs font-bold text-secondary">
                                        <Calendar size={12} className="text-india-saffron" /> 
                                        {project.date}
                                    </div>
                                    <h4 
                                        className="text-xl font-bold text-primary leading-tight group-hover:text-india-blue transition-colors cursor-pointer"
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        {project.title}
                                    </h4>
                                </div>
                             </div>

                             <p className="text-secondary text-sm leading-relaxed mb-6 line-clamp-2">
                                 {project.hook}
                             </p>

                             {/* Footer */}
                             <div className="mt-auto pt-4 border-t border-gray-200 flex items-center justify-between">
                                  {/* Tech Tag */}
                                  <span className="text-[10px] font-bold bg-gray-100 text-secondary px-2 py-1 rounded border border-gray-200 uppercase">
                                      {project.techStack[0]}
                                  </span>

                                  {/* Links */}
                                  <div className="flex gap-2">
                                      {project.links.github && (
                                         <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 rounded-full transition-colors text-secondary hover:text-black" title="View Code">
                                            <Github size={18} />
                                         </a>
                                      )}
                                      {project.links.demo && (
                                         <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 rounded-full transition-colors text-secondary hover:text-india-saffron" title="Live Demo">
                                            <ExternalLink size={18} />
                                         </a>
                                      )}
                                      <button onClick={() => setSelectedProject(project)} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-secondary hover:text-india-blue" title="Details">
                                          <ArrowUpRight size={18} />
                                      </button>
                                  </div>
                             </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
