import React, { useState } from 'react';
import { Language, FeaturedProject } from '../types/portfolio.ts';
import { FEATURED_PROJECTS } from '../data/portfolioData.ts';
import {
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  X,
  Target,
  Layers,
  Terminal,
} from 'lucide-react';

interface ProjectsSectionProps {
  language: Language;
  onOpenSandbox: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  language,
  onOpenSandbox,
}) => {
  const [activeProject, setActiveProject] = useState<FeaturedProject | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#090C14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-medium mb-2">
            {language === 'id' ? 'Koleksi Portofolio Unggulan' : 'Featured Case Studies & Systems'}
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight" style={{ textWrap: 'balance' }}>
            {language === 'id'
              ? 'Proyek Unggulan & Studi Kasus Terapan'
              : 'Featured Projects & Applied Case Studies'}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            {language === 'id'
              ? 'Implementasi nyata dari evaluasi AI pasar finansial institusional di HEVORA, audit Speech-to-Speech LLM di Outlier AI, infrastruktur data kearsipan, dan modul edukasi interaktif.'
              : 'Applied engineering case studies spanning institutional financial AI at HEVORA, Speech-to-Speech LLM auditing at Outlier AI, rural data infrastructure, and interactive courseware engines.'}
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURED_PROJECTS.map((project) => {
            const isHevora = project.id === 'hevora-intelligence';
            const isAiEval = isHevora || project.id === 'speech-to-speech-eval';

            return (
              <div
                key={project.id}
                className="group rounded-2xl border border-slate-800/80 bg-slate-900/40 hover:border-slate-700 p-7 sm:p-8 flex flex-col justify-between transition-colors"
              >
                <div>
                  {/* Clean unboxed category & status */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                    <span className={isHevora ? 'text-emerald-400 font-semibold' : 'text-slate-400'}>
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className="text-slate-500">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {project.title[language]}
                  </h3>

                  {/* Overview */}
                  <p className="text-slate-300 text-sm leading-relaxed mt-3 mb-6 line-clamp-3">
                    {project.overview[language]}
                  </p>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-6">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <div className="text-xs sm:text-sm font-mono font-bold text-emerald-400 truncate">
                          {metric.value}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate mt-0.5">
                          {metric.label[language]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/60 text-slate-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Row */}
                  <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-800/80">
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                    >
                      <span>{language === 'id' ? 'Detail Kasus & Metrik' : 'Case Study Details'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
                        >
                          <span>{language === 'id' ? 'Buka HEVORA' : 'Live HEVORA'}</span>
                          <ExternalLink className="w-3 h-3 text-slate-400" />
                        </a>
                      )}

                      {isAiEval && !project.link && (
                        <button
                          type="button"
                          onClick={onOpenSandbox}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-emerald-400 text-xs font-medium transition-colors cursor-pointer"
                        >
                          <Terminal className="w-3.5 h-3.5" />
                          <span>{language === 'id' ? 'Uji Sandbox' : 'Sandbox Demo'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal: Deep Dive Project Case Study */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div
              className="relative w-full max-w-3xl rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
              role="dialog"
              aria-modal="true"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Category & Title */}
              <div className="mb-4 pr-10">
                <span className="text-xs font-mono text-emerald-400 block mb-1">
                  {activeProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white leading-snug">
                  {activeProject.title[language]}
                </h3>
              </div>

              {/* Modal Overview */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-300 text-sm leading-relaxed mb-6">
                {activeProject.overview[language]}
              </div>

              {/* Metrics Grid */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-emerald-400" />
                  <span>{language === 'id' ? 'Metrik Performa Kunci:' : 'Key Performance Metrics:'}</span>
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {activeProject.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center"
                    >
                      <div className="text-base font-bold text-emerald-400 font-mono">
                        {m.value}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {m.label[language]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Methodology */}
              <div className="mb-6 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <span>{language === 'id' ? 'Metodologi & Pendekatan Teknis:' : 'Engineering Methodology:'}</span>
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800">
                  {activeProject.methodology[language]}
                </p>
              </div>

              {/* Impact */}
              <div className="mb-6 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{language === 'id' ? 'Dampak Nyata:' : 'Measurable Impact:'}</span>
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800">
                  {activeProject.impact[language]}
                </p>
              </div>

              {/* Tags & Action Link */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {activeProject.link && (
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors"
                    >
                      <span>{language === 'id' ? 'Kunjungi Web HEVORA' : 'Visit Live HEVORA'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setActiveProject(null)}
                    className="px-4 py-2 rounded-xl border border-slate-700 bg-slate-800 text-slate-200 text-xs font-medium hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    {language === 'id' ? 'Tutup' : 'Close'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
