import React from 'react';
import { EVENTS } from '../data';
import { MapPin, Ticket, ScanBarcode } from 'lucide-react';
import { motion } from 'framer-motion';

const Events = () => {
  return (
    <section className="py-32 px-6 bg-white border-t border-subtle relative overflow-hidden">
      {/* Background Decor - Technical Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      {/* Decorative Blur Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-india-green/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-india-green/10 text-india-green border border-india-green/20 mb-4">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-india-green opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-india-green"></span>
                    </span>
                    <span className="text-xs font-bold tracking-widest uppercase">Live Intel</span>
                </div>
                <h2 className="font-clash text-5xl md:text-6xl font-bold text-primary leading-tight">
                    In The <span className="text-transparent bg-clip-text bg-gradient-to-r from-india-green to-emerald-600">Field.</span>
                </h2>
            </div>
            <p className="text-secondary max-w-sm text-right md:text-left font-medium text-lg leading-relaxed">
                Direct insights from ground zero. Conferences, hackathons, and summits where the future is being debated.
            </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {EVENTS.map((event, idx) => (
            <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="group relative bg-white border border-subtle rounded-[2rem] overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
                {/* Decorative Top Bar */}
                <div className={`h-1.5 w-full ${idx === 0 ? 'bg-india-saffron' : idx === 1 ? 'bg-india-blue' : 'bg-india-green'}`}></div>
                
                <div className="p-8 flex-1 flex flex-col relative">
                    {/* Watermark Icon */}
                    <div className="absolute right-0 top-20 -mr-6 opacity-[0.03] rotate-12 pointer-events-none">
                         <Ticket size={180} />
                    </div>

                    {/* Badge Header */}
                    <div className="flex justify-between items-start mb-8 relative z-10">
                        <div className="p-3.5 bg-gray-50 rounded-2xl border border-subtle group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                            <Ticket size={24} />
                        </div>
                        <div className="text-right">
                             <div className="font-mono text-[10px] font-bold text-secondary/70 uppercase tracking-widest mb-1">Timeline</div>
                             <div className="font-clash text-xl font-bold text-primary">{event.year}</div>
                        </div>
                    </div>

                    {/* Title & Location */}
                    <div className="mb-6 relative z-10">
                        <h3 className="text-2xl font-clash font-bold text-primary mb-3 leading-tight group-hover:text-india-green transition-colors">
                            {event.name}
                        </h3>
                        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary bg-surface px-3 py-1.5 rounded-full border border-subtle">
                             <MapPin size={12} className="text-india-saffron" />
                             {event.location}
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-secondary leading-relaxed mb-8 flex-1 font-medium relative z-10">
                        {event.description}
                    </p>

                    {/* Perforation Effect */}
                    <div className="relative w-[calc(100%+4rem)] -ml-8 h-px border-b-2 border-dashed border-gray-200 mb-8">
                        <div className="absolute left-0 -top-2 w-4 h-4 rounded-full bg-surface"></div>
                        <div className="absolute right-0 -top-2 w-4 h-4 rounded-full bg-surface"></div>
                    </div>

                    {/* Takeaway / Intel Section */}
                    <div className="relative z-10">
                         <div className="flex items-center gap-2 mb-3">
                            <ScanBarcode size={16} className="text-primary/40" />
                            <span className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.2em]">Key Intel Acquired</span>
                         </div>
                         <div className="bg-gray-50 p-5 rounded-2xl border border-subtle group-hover:border-india-green/20 group-hover:bg-india-green/5 transition-colors relative overflow-hidden">
                            <div className="absolute left-0 top-0 w-1 h-full bg-india-green/20"></div>
                            <p className="text-sm font-semibold text-primary italic leading-relaxed">
                                "{event.takeaway}"
                            </p>
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

export default Events;