import React from 'react';
import { SOCIAL_LINKS } from '../data';
import { Github, Linkedin, Mail, Instagram, ArrowUpRight } from 'lucide-react';

const Contact = () => {
    return (
        <footer id="contact" className="bg-black text-white py-24 relative overflow-hidden">
            {/* Background Gradients/Noise */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-india-saffron/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left: Heading & Context */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-sm font-bold tracking-widest text-gray-400 uppercase">Open to Opportunities</span>
                        </div>

                        <h2 className="font-clash font-bold text-6xl md:text-8xl leading-[0.9] mb-8">
                            Let's build <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-india-saffron to-white">
                                the future.
                            </span>
                        </h2>

                        <p className="text-xl text-gray-400 max-w-lg leading-relaxed mb-12">
                            From delusional ideas to real, live products.
                            Building purpose-driven technology for India.
                        </p>

                        {/* Email Card */}
                        <div className="group relative inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-2 pr-6 hover:bg-white/10 transition-all cursor-pointer">
                            <div className="w-12 h-12 bg-india-saffron rounded-xl flex items-center justify-center text-black shadow-lg shadow-india-saffron/20">
                                <Mail size={24} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Drop a mail</span>
                                <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-lg md:text-xl font-bold font-clash text-white group-hover:text-india-saffron transition-colors">
                                    {SOCIAL_LINKS.email}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Social Grid */}
                    <div className="grid gap-4 mt-8 lg:mt-0">
                        <p className="text-lg font-medium text-white mb-2">Connect on Socials</p>

                        {/* LinkedIn */}
                        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <Linkedin size={28} className="text-gray-400 group-hover:text-white transition-colors" />
                                <span className="text-2xl font-clash font-bold text-gray-300 group-hover:text-white">LinkedIn</span>
                            </div>
                            <ArrowUpRight className="text-gray-500 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        </a>

                        {/* Instagram */}
                        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-pink-600 hover:border-pink-600 transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <Instagram size={28} className="text-gray-400 group-hover:text-white transition-colors" />
                                <div>
                                    <span className="text-2xl font-clash font-bold text-gray-300 group-hover:text-white block">Instagram</span>
                                    <span className="text-xs font-mono text-gray-500 group-hover:text-pink-100 uppercase tracking-widest">@imaryan02</span>
                                </div>
                            </div>
                            <ArrowUpRight className="text-gray-500 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        </a>

                        {/* GitHub */}
                        <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:border-white transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <Github size={28} className="text-gray-400 group-hover:text-black transition-colors" />
                                <span className="text-2xl font-clash font-bold text-gray-300 group-hover:text-black">GitHub</span>
                            </div>
                            <ArrowUpRight className="text-gray-500 group-hover:text-black group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        </a>

                    </div>
                </div>

                <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© 2025 Aryan Gupta. All rights reserved.</p>
                    <div className="flex items-center gap-2">
                        <span className="text-gray-600 text-sm font-bold tracking-widest uppercase">Built For Bharat</span>
                        <div className="flex gap-1.5 ml-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-india-saffron"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-india-green"></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;