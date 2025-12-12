import React from 'react';
import { SOCIAL_LINKS } from '../data';
import { Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white border-y border-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image Section */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 relative group">
              <img 
                src="/images/team.jpeg" 
                alt="Coding Session" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-india-blue/20 mix-blend-overlay"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-india-saffron/10 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-india-green/10 rounded-full blur-xl"></div>
          </div>

          {/* Content Section */}
          <div>
            <h2 className="font-clash text-4xl font-bold mb-6 text-primary">
              The <span className="text-india-saffron">Backstory.</span>
            </h2>

            <div className="space-y-6 text-lg text-secondary leading-relaxed font-medium">
              <p>
                From my childhood days, I’ve been fascinated by{" "}
                <span className="text-primary font-bold">technology and computers</span>.
              </p>

              <p>
                I’m a <span className="text-primary font-bold">Computer Science graduate</span> from SKIT, Jaipur.  
                I’ve always been a little <span className="text-primary font-bold">delusional</span> — dreaming of building something meaningful for{" "}
                <span className="text-india-green font-bold">India</span>.
              </p>

              <p className="p-4 bg-gray-50 border-l-4 border-india-green rounded-r-xl italic text-base">
                Manifesting to revolutionize Indian healthcare.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                className="p-3 bg-gray-100 hover:bg-black hover:text-white rounded-full transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                className="p-3 bg-gray-100 hover:bg-[#0077b5] hover:text-white rounded-full transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="p-3 bg-gray-100 hover:bg-india-saffron hover:text-white rounded-full transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
