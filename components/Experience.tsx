import React from 'react';
import { EXPERIENCE } from '../data';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-clash text-4xl font-bold mb-16 text-primary text-center">The <span className="text-india-blue">Journey</span></h2>
        
        <div className="relative border-l-2 border-dashed border-gray-300 ml-3 space-y-12">
          {EXPERIENCE.map((exp, index) => (
            <div key={exp.id} className="relative pl-12">
              {/* Timeline Node - Ashoka Chakra Style */}
              <div className="absolute left-[-11px] top-1.5 w-[24px] h-[24px] bg-white border-2 border-india-blue rounded-full flex items-center justify-center z-10 shadow-sm">
                 <div className="w-2 h-2 bg-india-blue rounded-full"></div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                <span className="px-3 py-1 bg-white border border-subtle rounded-full text-xs font-bold text-india-blue shadow-sm">{exp.period}</span>
              </div>
              
              <div className="text-base font-semibold text-secondary mb-3">{exp.company}</div>
              
              <ul className="space-y-2">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="text-secondary text-sm leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;