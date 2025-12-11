import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Calendar, User, Building2 } from 'lucide-react';
import { Story } from '../types';

interface StoryModalProps {
  story: Story;
  onClose: () => void;
}

const StoryModal: React.FC<StoryModalProps> = ({ story, onClose }) => {
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pt-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-primary/80 backdrop-blur-md"
        onClick={onClose}
      />
      
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
      >
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-white/50 backdrop-blur rounded-full hover:bg-red-50 hover:text-red-500 transition-colors"
        >
            <X size={24} />
        </button>

        {/* Hero Image */}
        <div className="h-64 shrink-0 relative">
            <img 
                src={story.imageUrl} 
                alt={story.title} 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                <div className="flex gap-2 mb-2">
                    {story.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold bg-white/20 text-white backdrop-blur px-2 py-1 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
                <h2 className="text-3xl font-clash font-bold text-white shadow-sm">{story.title}</h2>
            </div>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto custom-scrollbar">
            {/* Metadata */}
            <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-subtle text-secondary text-sm">
                <div className="flex items-center gap-2">
                    <User size={16} className="text-india-saffron" />
                    <span className="font-semibold">{story.role}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Building2 size={16} className="text-india-blue" />
                    <span className="font-semibold">{story.company}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-india-green" />
                    <span>{story.date}</span>
                </div>
            </div>

            {/* Story Text */}
            <article className="prose prose-lg max-w-none text-secondary">
                <p className="mb-4 leading-relaxed font-medium text-primary/80">
                    {story.description}
                </p>
            </article>

            {/* Quote/Signoff */}
            <div className="mt-12 pt-8 border-t border-dashed border-subtle">
                <p className="font-clash text-xl font-bold text-primary italic">
                    "Every milestone is just a stepping stone to the next big build."
                </p>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StoryModal;