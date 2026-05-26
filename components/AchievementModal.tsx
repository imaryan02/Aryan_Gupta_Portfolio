import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, Expand, ExternalLink, Github, MapPin, Medal, X } from 'lucide-react';
import { Achievement } from '../types';

interface AchievementModalProps {
  achievement: Achievement;
  onClose: () => void;
}

const AchievementModal: React.FC<AchievementModalProps> = ({ achievement, onClose }) => {
  const [activeImage, setActiveImage] = useState(achievement.images[0]);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const expandedSlideRefs = useRef<Array<HTMLDivElement | null>>([]);

  const activeImageIndex = Math.max(0, achievement.images.indexOf(activeImage));

  useEffect(() => {
    setActiveImage(achievement.images[0]);
  }, [achievement]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    if (expandedIndex !== null) {
      expandedSlideRefs.current[expandedIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [expandedIndex]);

  const modal = (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-4 lg:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-primary/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.article
        initial={{ y: 60, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 60, opacity: 0, scale: 0.96 }}
        transition={{ type: 'spring', damping: 24, stiffness: 260 }}
        className="relative w-full max-w-6xl h-[calc(100dvh-1rem)] sm:h-[calc(100dvh-2rem)] lg:h-[min(760px,calc(100dvh-3rem))] bg-white rounded-[1.25rem] sm:rounded-[1.5rem] lg:rounded-3xl shadow-2xl overflow-y-auto lg:overflow-hidden flex flex-col lg:grid lg:grid-cols-[47%_53%]"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 p-2.5 sm:p-3 bg-white/95 backdrop-blur-xl rounded-full text-primary border border-subtle hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all shadow-lg"
          aria-label="Close achievement"
        >
          <X size={22} />
        </button>

        <div className="bg-primary p-3 sm:p-4 lg:p-5 flex flex-col gap-3 sm:gap-4 h-[52dvh] min-h-[360px] max-h-[520px] shrink-0 lg:h-full lg:max-h-none lg:min-h-0">
          <div className={`relative flex-1 min-h-0 rounded-2xl overflow-hidden bg-black ${
            achievement.imageShape === 'square' ? 'aspect-square lg:aspect-auto' : ''
          }`}>
            <img
              src={activeImage}
              alt={achievement.title}
              className="w-full h-full object-cover lg:object-contain"
            />
            <button
              onClick={() => setExpandedIndex(activeImageIndex)}
              className="absolute top-3 left-3 z-10 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-xs font-bold text-primary shadow-lg hover:bg-white"
              aria-label="Open image carousel"
            >
              <Expand size={14} />
              View photos
            </button>
            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 to-transparent">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/95 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                <Medal size={14} className="text-india-saffron" />
                {achievement.rank}
              </span>
            </div>
          </div>

          {achievement.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2 sm:gap-3 shrink-0">
              {achievement.images.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setActiveImage(image)}
                  className={`h-20 sm:h-24 lg:aspect-square lg:h-auto rounded-xl overflow-hidden border-2 bg-black transition-all ${
                    activeImage === image ? 'border-india-saffron opacity-100' : 'border-white/10 opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`Show image ${index + 1}`}
                >
                  <img src={image} alt={`${achievement.title} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="overflow-visible lg:overflow-y-auto custom-scrollbar p-5 sm:p-7 lg:p-10 xl:p-12">
          <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-5 sm:mb-6 pr-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-india-blue/5 text-india-blue text-xs font-bold border border-india-blue/10 uppercase tracking-wider">
              <Calendar size={14} />
              {achievement.date}
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-india-green text-xs font-bold border border-green-100 uppercase tracking-wider">
              <MapPin size={14} />
              {achievement.location}
            </span>
          </div>

          <p className="text-[11px] sm:text-xs font-black text-india-saffron uppercase tracking-[0.22em] mb-3 sm:mb-4 leading-relaxed">
            {achievement.event}
          </p>
          <h2 className="font-clash text-[1.85rem] sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-primary leading-[1.04] mb-4 sm:mb-5 max-w-none break-words">
            {achievement.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-secondary font-semibold leading-relaxed border-l-4 border-india-saffron pl-4 sm:pl-5 mb-6 sm:mb-8">
            {achievement.subtitle}
          </p>

          <div className="flex flex-wrap gap-2 mb-7 sm:mb-9">
            {achievement.tags.map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-lg bg-surface border border-subtle text-xs font-bold text-secondary">
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-4 sm:space-y-5 text-secondary leading-8 sm:leading-loose font-medium text-[15px] sm:text-base">
            {achievement.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {achievement.links?.github && (
            <div className="mt-10 pt-8 border-t border-subtle">
              <a
                href={achievement.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-india-blue transition-colors"
              >
                <Github size={18} />
                View GitHub
                <ExternalLink size={16} />
              </a>
            </div>
          )}
        </div>
      </motion.article>

      {expandedIndex !== null && (
        <div className="fixed inset-0 z-[160] bg-black/95 p-3 sm:p-6">
          <button
            onClick={() => setExpandedIndex(null)}
            className="fixed top-4 right-4 z-20 rounded-full bg-white p-3 text-primary shadow-xl"
            aria-label="Close image carousel"
          >
            <X size={22} />
          </button>

          {achievement.images.length > 1 && (
            <>
              <button
                onClick={() => setExpandedIndex((current) => current === null ? 0 : (current - 1 + achievement.images.length) % achievement.images.length)}
                className="fixed left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/90 p-3 text-primary shadow-xl sm:block"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => setExpandedIndex((current) => current === null ? 0 : (current + 1) % achievement.images.length)}
                className="fixed right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/90 p-3 text-primary shadow-xl sm:block"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <div
            className="flex h-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden rounded-2xl bg-black [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onScroll={(event) => {
              const element = event.currentTarget;
              const nextIndex = Math.round(element.scrollLeft / Math.max(1, element.clientWidth));
              if (nextIndex !== expandedIndex && nextIndex >= 0 && nextIndex < achievement.images.length) {
                setExpandedIndex(nextIndex);
              }
            }}
          >
            {achievement.images.map((image, index) => (
              <div
                key={image}
                ref={(element) => {
                  expandedSlideRefs.current[index] = element;
                }}
                className={`flex h-full w-full shrink-0 snap-center items-center justify-center overflow-auto p-2 ${
                  index === expandedIndex ? 'block' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`${achievement.title} ${index + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>

          <div className="fixed bottom-4 left-1/2 z-20 flex max-w-[calc(100vw-2rem)] -translate-x-1/2 gap-2 overflow-x-auto rounded-2xl bg-white/10 p-2 backdrop-blur">
            {achievement.images.map((image, index) => (
              <button
                key={image}
                onClick={() => setExpandedIndex(index)}
                className={`h-14 w-14 shrink-0 overflow-hidden rounded-xl border-2 bg-black ${
                  index === expandedIndex ? 'border-india-saffron' : 'border-white/20 opacity-70'
                }`}
                aria-label={`Open image ${index + 1}`}
              >
                <img src={image} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return createPortal(modal, document.body);
};

export default AchievementModal;
