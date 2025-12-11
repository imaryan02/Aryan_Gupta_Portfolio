import React from 'react';
import { motion } from 'framer-motion';
import { STORIES } from '../data';
import { ArrowUpRight, BookOpen, Linkedin } from 'lucide-react';

const Stories = () => {
  return (
    <section id="stories" className="py-32 px-6 bg-surface border-t border-subtle relative">
       <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-24 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-india-blue/5 border border-india-blue/10 mb-6">
                  <BookOpen size={16} className="text-india-blue" />
                  <span className="text-xs font-bold text-india-blue uppercase tracking-widest">The Journal</span>
              </div>
              <h2 className="font-clash text-5xl md:text-6xl font-bold text-primary mb-6">
                  The <span className="text-india-saffron">Chronicles.</span>
              </h2>
              <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
                  Real stories from the field. From the rigorous training grounds of Infosys to the high-pressure hackathons and corporate boardrooms.
              </p>
          </div>

          {/* Spacious List Layout */}
          <div className="space-y-20">
              {STORIES.map((story, idx) => (
                  <motion.div 
                    key={story.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.7 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="group bg-white rounded-[2.5rem] p-6 border border-subtle hover:border-india-blue/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                  >
                      <div className="flex flex-col lg:flex-row gap-10 items-stretch">
                          
                          {/* Image Section */}
                          <div className="w-full lg:w-2/5 relative shrink-0 overflow-hidden rounded-[2rem]">
                              <img 
                                  src={story.imageUrl} 
                                  alt={story.title} 
                                  className="w-full h-full min-h-[300px] object-cover transition-transform duration-1000 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                              
                              <div className="absolute top-4 left-4 flex gap-2">
                                {story.tags.slice(0, 2).map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-bold text-primary uppercase tracking-wide shadow-sm">
                                        {tag}
                                    </span>
                                ))}
                              </div>
                          </div>

                          {/* Content Section */}
                          <div className="flex-1 flex flex-col py-4 pr-4">
                              <div className="mb-6">
                                  <div className="flex items-center gap-3 text-sm font-bold text-secondary mb-3">
                                      <span className="text-india-blue">{story.company}</span>
                                      <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                      <span>{story.date}</span>
                                  </div>
                                  <h3 className="font-clash text-3xl md:text-4xl font-bold text-primary leading-tight group-hover:text-india-blue transition-colors">
                                      {story.title}
                                  </h3>
                              </div>
                              
                              <p className="text-secondary text-base leading-loose font-medium mb-8 line-clamp-5 lg:line-clamp-none">
                                  {story.description}
                              </p>

                              <div className="mt-auto pt-8 border-t border-subtle flex items-center justify-between">
                                  <span className="text-xs font-bold text-primary tracking-widest uppercase">
                                    {story.role}
                                  </span>
                                  
                                  <a 
                                    href={story.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-india-blue transition-colors group/btn shadow-lg shadow-primary/20 hover:shadow-india-blue/30"
                                  >
                                      <Linkedin size={18} />
                                      Read on LinkedIn
                                      <ArrowUpRight size={18} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                  </a>
                              </div>
                          </div>

                      </div>
                  </motion.div>
              ))}
          </div>
       </div>
    </section>
  );
};

export default Stories;