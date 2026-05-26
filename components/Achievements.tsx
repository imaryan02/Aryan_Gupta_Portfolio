import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeftRight, ArrowUpRight, Calendar, Images, MapPin, Medal, Trophy } from 'lucide-react';
import { ACHIEVEMENTS } from '../data';
import { Achievement } from '../types';
import AchievementModal from './AchievementModal';

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const accentStyles = [
    {
      border: 'hover:border-india-saffron/40',
      text: 'text-india-saffron',
      bg: 'bg-india-saffron/10',
      ring: 'ring-india-saffron/20',
    },
    {
      border: 'hover:border-india-blue/40',
      text: 'text-india-blue',
      bg: 'bg-india-blue/10',
      ring: 'ring-india-blue/20',
    },
    {
      border: 'hover:border-india-green/40',
      text: 'text-india-green',
      bg: 'bg-india-green/10',
      ring: 'ring-india-green/20',
    },
  ];

  return (
    <section id="achievements" className="py-14 md:py-16 xl:py-20 px-5 sm:px-6 bg-[#FBFCFF] border-t border-subtle relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-india-saffron via-india-blue to-india-green" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="mb-8 md:mb-10 grid lg:grid-cols-[1.05fr_0.95fr] lg:items-end gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-india-saffron/25 shadow-sm mb-4">
              <Trophy size={16} className="text-india-saffron" />
              <span className="text-xs font-bold text-india-saffron uppercase tracking-widest">Achievements</span>
            </div>
            <h2 className="font-clash text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-primary leading-[0.95] tracking-normal">
              Wins, Finals <br className="sm:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-india-blue to-india-green">
                & Milestones.
              </span>
            </h2>
          </div>
          <div className="lg:justify-self-end max-w-xl">
            <p className="text-sm md:text-base text-secondary font-medium leading-relaxed mb-4">
              Hackathon moments, community milestones, and builder stories from Google Cloud and OpenAI events.
            </p>
            <div className="hidden sm:grid grid-cols-3 gap-2 sm:gap-3">
              {[
                ['3000+', 'Google APL participants'],
                ['Top 80', 'National finalist'],
                ['Top 10', 'OpenAI Codex team'],
              ].map(([value, label]) => (
                <div key={value} className="rounded-2xl border border-subtle bg-white/80 px-3 py-3 shadow-sm">
                  <div className="font-clash text-lg sm:text-xl font-bold text-primary leading-none">{value}</div>
                  <div className="mt-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wide text-secondary leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:hidden mb-4 flex items-center justify-between rounded-2xl border border-india-saffron/25 bg-gradient-to-r from-orange-50 via-white to-blue-50 px-3 py-3 shadow-lg shadow-orange-500/5">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-md">
              <ArrowLeftRight size={16} />
            </span>
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-primary">Swipe to explore</p>
              <p className="text-[10px] font-bold text-secondary">3 achievement stories</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-white px-2 py-1 shadow-inner">
            {ACHIEVEMENTS.map((achievement, index) => (
              <span key={achievement.id} className={`h-2 rounded-full ${index === 0 ? 'w-8 bg-india-saffron' : 'w-2 bg-gray-300'}`} />
            ))}
          </div>
        </div>

        <div className="-mx-5 grid grid-flow-col auto-cols-[100%] snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-5 [scrollbar-width:none] md:mx-0 md:grid-flow-row md:auto-cols-auto md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-3 md:gap-6 lg:gap-8 [&::-webkit-scrollbar]:hidden">
          {ACHIEVEMENTS.map((achievement, index) => {
            const accent = accentStyles[index % accentStyles.length];
            const mediaClass = achievement.images.length > 1
              ? 'relative h-[35rem] sm:h-[39rem] md:h-auto md:aspect-[16/9] lg:aspect-auto lg:h-[clamp(190px,15vw,285px)] overflow-hidden text-left bg-primary'
              : 'relative h-[35rem] sm:h-[39rem] md:h-auto md:aspect-[4/3] lg:aspect-auto lg:h-[clamp(190px,15vw,285px)] overflow-hidden text-left bg-primary';

            return (
            <motion.article
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`group w-full snap-center bg-white border border-subtle ${accent.border} rounded-[1.5rem] md:rounded-[1.75rem] overflow-hidden shadow-xl shadow-primary/10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col md:shadow-sm`}
            >
              <button
                onClick={() => setSelectedAchievement(achievement)}
                className={mediaClass}
                aria-label={`Read ${achievement.title}`}
              >
                {achievement.images.length > 1 ? (
                  <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1 bg-primary p-1">
                    {achievement.images.slice(0, 4).map((image, imageIndex) => (
                      <div
                        key={image}
                        className={`relative overflow-hidden bg-black ${
                          imageIndex === 0 ? 'rounded-tl-[1.35rem]' : ''
                        } ${imageIndex === 1 ? 'rounded-tr-[1.35rem]' : ''} ${
                          imageIndex === 2 ? 'rounded-bl-md' : ''
                        } ${imageIndex === 3 ? 'rounded-br-md' : ''}`}
                      >
                        <img
                          src={image}
                          alt={achievement.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {imageIndex === 3 && achievement.images.length > 4 && (
                          <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px] flex items-center justify-center text-white font-clash text-3xl font-bold">
                            +{achievement.images.length - 4}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-primary">
                    <img
                      src={achievement.images[0]}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover opacity-30 blur-md scale-110"
                    />
                    <div className={`absolute inset-0 lg:inset-4 lg:rounded-[1.35rem] overflow-hidden bg-black lg:bg-white/5 lg:ring-1 ${accent.ring}`}>
                      <img
                        src={achievement.images[0]}
                        alt={achievement.title}
                        className="w-full h-full object-cover lg:object-contain group-hover:scale-[1.03] transition-transform duration-700"
                      />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-primary/10 md:from-primary/55 pointer-events-none" />
                <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur rounded-full text-[10px] font-bold text-primary uppercase tracking-wide shadow-sm">
                    <Medal size={12} className="text-india-saffron" />
                    {achievement.rank}
                  </span>
                  {achievement.images.length > 1 && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/35 backdrop-blur rounded-full text-[10px] font-bold text-white uppercase tracking-wide border border-white/15">
                      <Images size={12} />
                      {achievement.images.length} Photos
                    </span>
                  )}
                </div>
              </button>

              <div className="p-5 md:p-4 xl:p-5 flex flex-col flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3 md:mb-2.5">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-2 md:py-1.5 rounded-full ${accent.bg} ${accent.text} text-[11px] font-black uppercase tracking-widest`}>
                    <MapPin size={13} />
                    {achievement.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary bg-white border border-subtle px-3 py-2 md:py-1.5 rounded-full">
                    <Calendar size={13} />
                    {achievement.date}
                  </span>
                </div>

                <p className={`text-[11px] md:text-[10px] font-black ${accent.text} uppercase tracking-[0.18em] md:tracking-[0.16em] leading-snug mb-2.5 md:mb-2 line-clamp-1`}>
                    {achievement.event}
                </p>

                <h3 className="font-clash text-[1.65rem] sm:text-3xl md:text-2xl lg:text-xl xl:text-2xl font-bold text-primary leading-[1.04] md:leading-[1.08] mb-2.5 md:mb-2 group-hover:text-india-blue transition-colors">
                  {achievement.title}
                </h3>

                <p className="text-sm sm:text-base md:text-sm font-bold text-primary/75 leading-relaxed mb-3 md:mb-2.5 line-clamp-2">
                  {achievement.subtitle}
                </p>

                <p className="text-sm md:text-sm text-secondary leading-relaxed font-medium mb-4 md:mb-3 line-clamp-3 md:line-clamp-2">
                  {achievement.summary}
                </p>

                <div className="hidden 2xl:flex flex-wrap gap-2 mb-4">
                  {achievement.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-white border border-gray-200 rounded text-[11px] font-bold text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedAchievement(achievement)}
                  className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 md:py-2.5 bg-primary text-white rounded-xl font-black hover:bg-india-blue transition-colors shadow-lg shadow-primary/10"
                >
                  Read Full Story
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </motion.article>
          )})}
        </div>
      </div>

      <AnimatePresence>
        {selectedAchievement && (
          <AchievementModal
            achievement={selectedAchievement}
            onClose={() => setSelectedAchievement(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
