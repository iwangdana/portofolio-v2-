import React from 'react';
import { Language } from '../types/portfolio.ts';
import { SKILL_CATEGORIES } from '../data/portfolioData.ts';
import { Brain, Terminal, Layers, Languages, CheckCircle2 } from 'lucide-react';

interface SkillsMatrixProps {
  language: Language;
}

export const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ language }) => {
  const iconMap: Record<string, any> = {
    Brain: Brain,
    Terminal: Terminal,
    Layers: Layers,
  };

  const languageProficiencies = [
    {
      name: 'Bahasa Indonesia',
      level: language === 'id' ? 'Penutur Asli / Fasih' : 'Native / Fluent',
      badge: 'Native',
    },
    {
      name: 'Bahasa Jawa',
      level: language === 'id' ? 'Penutur Asli / Fasih' : 'Native / Fluent',
      badge: 'Native Dialect',
    },
    {
      name: 'English (Bahasa Inggris)',
      level: language === 'id' ? 'Kemahiran Kerja Profesional' : 'Professional Working',
      badge: 'Professional',
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
      {/* Header */}
      <div className="max-w-3xl mb-14">
        <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-medium mb-2">
          {language === 'id' ? 'Matriks Kualifikasi & Kompetensi' : 'Skills & Core Competency Matrix'}
        </p>
        <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight" style={{ textWrap: 'balance' }}>
          {language === 'id'
            ? 'Keahlian Teknis, Linguistik & Sistem'
            : 'Technical, Linguistic & Systems Expertise'}
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
          {language === 'id'
            ? 'Kombinasi antara pemahaman semantik bahasa Indonesia yang mendalam, audit kualitas model suara AI, serta latar belakang formal Teknik Informatika.'
            : 'A unique synergy of deep Indonesian linguistic intuition, acoustic AI quality assurance, and formal Informatics Engineering fundamentals.'}
        </p>
      </div>

      {/* Grid of 3 Major Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {SKILL_CATEGORIES.map((cat, idx) => {
          const Icon = iconMap[cat.icon] || Brain;
          return (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-emerald-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {cat.title[language]}
                  </h3>
                </div>

                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-semibold text-slate-200">
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span className="text-[10px] font-mono text-emerald-400">
                            {skill.level}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        {skill.focus[language]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Language Proficiency Strip */}
      <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 sm:p-7">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-slate-800 text-emerald-400">
              <Languages className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">
                {language === 'id' ? 'Kemahiran Bahasa (Languages)' : 'Language Proficiencies'}
              </h3>
              <p className="text-xs text-slate-400">
                {language === 'id'
                  ? 'Kunci utama dalam evaluasi bahasa lokal, register dialek, dan komunikasi profesional.'
                  : 'Vital foundation for local vernacular auditing, regional dialects, and international collaboration.'}
              </p>
            </div>
          </div>
          <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <span>Indonesian Native</span>
            <span aria-hidden="true">·</span>
            <span>Javanese Native</span>
            <span aria-hidden="true">·</span>
            <span>Professional English</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {languageProficiencies.map((lang, lIdx) => (
            <div
              key={lIdx}
              className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between"
            >
              <div>
                <div className="text-sm font-semibold text-white">{lang.name}</div>
                <div className="text-xs text-slate-400 mt-0.5">{lang.level}</div>
              </div>
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
