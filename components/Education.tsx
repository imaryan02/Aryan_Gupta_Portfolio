import React from 'react';
import { EDUCATION } from '../data';
import { GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-white border-t border-subtle relative z-20">
       <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
                <div className="p-3 bg-orange-50 rounded-xl border border-orange-100">
                    <GraduationCap className="text-india-saffron" size={24} />
                </div>
                <h2 className="font-clash text-4xl font-bold text-primary">
                    Academic <span className="text-india-saffron">Foundation.</span>
                </h2>
          </div>

          <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="group relative bg-surface hover:bg-white border border-subtle p-8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-india-blue/20"
                  >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                              <h3 className="text-2xl font-clash font-bold text-primary mb-2 group-hover:text-india-blue transition-colors">
                                  {edu.institution}
                              </h3>
                              <p className="text-secondary font-medium text-lg">
                                  {edu.degree}
                              </p>
                          </div>
                          
                          <div className="flex flex-col md:items-end gap-2 shrink-0">
                              <span className="px-4 py-1.5 bg-white border border-subtle rounded-full text-xs font-bold text-secondary shadow-sm">
                                  {edu.period}
                              </span>
                              <div className="flex items-center gap-2 text-india-green font-bold text-sm bg-green-50 px-3 py-1 rounded-lg border border-green-100">
                                  <Award size={16} />
                                  <span>{edu.grade}</span>
                              </div>
                          </div>
                      </div>
                      
                      {/* Decorative Corner */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                           <div className="w-2 h-2 bg-india-saffron rounded-full shadow-lg shadow-india-saffron/50"></div>
                      </div>
                  </motion.div>
              ))}
          </div>
       </div>
    </section>
  );
};

export default Education;