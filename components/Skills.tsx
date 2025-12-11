import React from 'react';
import { SKILLS } from '../data';

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-clash text-4xl font-bold mb-12 text-primary text-center">Technical <span className="text-india-blue">Arsenal</span></h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((category, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-subtle hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 mb-4 rounded-lg bg-gray-50 flex items-center justify-center border border-subtle">
                 <div className={`w-3 h-3 rounded-full ${idx === 0 ? 'bg-india-saffron' : idx === 1 ? 'bg-india-blue' : idx === 2 ? 'bg-india-green' : 'bg-primary'}`}></div>
              </div>
              
              <h3 className="text-lg font-bold text-primary mb-2">{category.title}</h3>
              <p className="text-xs text-secondary mb-4 min-h-[32px]">{category.summary}</p>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-2.5 py-1 bg-gray-50 border border-gray-200 rounded text-[11px] font-semibold text-secondary hover:bg-black hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;