import React, { useState } from 'react';
import { Language } from '../types/portfolio.ts';
import { WORK_EXPERIENCES } from '../data/portfolioData.ts';
import {
  Briefcase,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';

interface ExperienceSectionProps {
  language: Language;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ language }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>('hevora-technologies');

  const filterOptions = [
    {
      id: 'all',
      label: language === 'id' ? 'Semua Pengalaman' : 'All Roles',
    },
    {
      id: 'ai-finance',
      label: language === 'id' ? 'HEVORA AI (Aktif)' : 'HEVORA AI (Active)',
    },
    {
      id: 'ai-eval',
      label: language === 'id' ? 'Evaluasi AI (Outlier)' : 'AI Evaluation (Outlier)',
    },
    {
      id: 'data-admin',
      label: language === 'id' ? 'Sistem & Data' : 'Data & Systems',
    },
    {
      id: 'lms-instruction',
      label: language === 'id' ? 'LMS & Edukasi' : 'LMS & EdTech',
    },
  ];

  const filteredExperiences = WORK_EXPERIENCES.filter((exp) => {
    if (selectedFilter === 'all') return true;
    return exp.category === selectedFilter;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-medium mb-2">
          {language === 'id' ? 'Riwayat Karier Profesional' : 'Professional Work History'}
        </p>
        <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight" style={{ textWrap: 'balance' }}>
          {language === 'id'
            ? 'Pengalaman Kerja & Tanggung Jawab Nyata'
            : 'Work Experience & Quantifiable Impact'}
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
          {language === 'id'
            ? 'Rekam jejak spesifik dalam rekayasa AI di HEVORA Technologies, evaluasi model Speech-to-Speech di Outlier AI, integritas sistem data kearsipan, dan media pembelajaran interaktif.'
            : 'Demonstrated track record spanning AI Engineering at HEVORA Technologies, Speech-to-Speech LLM evaluation at Outlier AI, data systems integrity, and interactive learning media.'}
        </p>
      </div>

      {/* Segmented Filter Control */}
      <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/60 rounded-xl border border-slate-800/80 w-fit mb-12">
        {filterOptions.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => setSelectedFilter(opt.id)}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
              selectedFilter === opt.id
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Timeline List */}
      <div className="relative border-l border-slate-800 ml-4 sm:ml-8 md:ml-24 space-y-8">
        {filteredExperiences.map((exp) => {
          const isExpanded = expandedId === exp.id;
          const isCurrentHevora = exp.id === 'hevora-technologies';

          return (
            <div key={exp.id} className="relative pl-6 sm:pl-8 group">
              {/* Dot marker on timeline */}
              <div
                className={`absolute -left-[13px] top-6 w-6 h-6 rounded-full border-2 border-slate-950 flex items-center justify-center transition-colors ${
                  isCurrentHevora
                    ? 'bg-emerald-400 text-slate-950'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                <div className="w-2 h-2 rounded-full bg-current" />
              </div>

              {/* Experience Card */}
              <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 hover:border-slate-700 transition-colors">
                <div className="p-6 sm:p-7">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div>
                      {/* Quiet unboxed kicker */}
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1.5">
                        <span className={isCurrentHevora ? 'text-emerald-400 font-semibold' : 'text-slate-400'}>
                          {exp.company}
                        </span>
                        {exp.badge && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="text-slate-500">{exp.badge}</span>
                          </>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {exp.role[language]}
                      </h3>

                      {exp.projectRefUrl && (
                        <div className="mt-1">
                          <a
                            href={exp.projectRefUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                          >
                            <span>
                              {language === 'id' ? 'Buka Proyek HEVORA (https://hevora.app/)' : 'View HEVORA Project (https://hevora.app/)'}
                            </span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Metadata: Period & Location */}
                    <div className="flex flex-col sm:items-end text-xs text-slate-400 gap-1 font-mono">
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.period[language]}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                    {exp.summary[language]}
                  </p>

                  {/* Skills tags and Expand Button */}
                  <div className="mt-5 pt-4 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.slice(0, 4).map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/60 text-slate-300 border border-slate-700/60"
                        >
                          {skill}
                        </span>
                      ))}
                      {exp.skills.length > 4 && (
                        <span className="text-[11px] font-mono text-slate-500 self-center">
                          +{exp.skills.length - 4}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleExpand(exp.id)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                      aria-expanded={isExpanded}
                    >
                      <span>
                        {isExpanded
                          ? language === 'id'
                            ? 'Sembunyikan Rincian'
                            : 'Hide Details'
                          : language === 'id'
                          ? 'Lihat Rincian Tugas'
                          : 'View Responsibilities'}
                      </span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Detailed Responsibilities */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-4 border-t border-slate-800/80 bg-slate-950/40 rounded-b-2xl space-y-4">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      {language === 'id'
                        ? 'Tanggung Jawab Utama:'
                        : 'Core Responsibilities:'}
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.bulletPoints.map((bp, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{bp[language]}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                        {language === 'id'
                          ? 'Kompetensi & Teknologi Terkait:'
                          : 'Applied Technologies & Competencies:'}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
