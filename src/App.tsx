/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './types/portfolio.ts';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { MetricsStrip } from './components/MetricsStrip.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ExperienceSection } from './components/ExperienceSection.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { AiEvaluationSandbox } from './components/AiEvaluationSandbox.tsx';
import { TechnicalResponsibilities } from './components/TechnicalResponsibilities.tsx';
import { TechnicalCaseStudies } from './components/TechnicalCaseStudies.tsx';
import { QaMethodology } from './components/QaMethodology.tsx';
import { SkillsMatrix } from './components/SkillsMatrix.tsx';
import { EducationCertifications } from './components/EducationCertifications.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { CvViewerModal } from './components/CvViewerModal.tsx';
import { ChevronDown, ChevronUp, Terminal } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('id');
  const [isCvModalOpen, setIsCvModalOpen] = useState<boolean>(false);
  const [isHevoraLabExpanded, setIsHevoraLabExpanded] = useState<boolean>(true);

  // Sync HTML lang attribute
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/25 selection:text-emerald-300">
      {/* 1. Global Navigation Bar */}
      <Navbar
        language={language}
        onToggleLanguage={() => setLanguage((prev) => (prev === 'id' ? 'en' : 'id'))}
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          language={language}
          onOpenCvModal={() => setIsCvModalOpen(true)}
        />

        {/* 3. Metrics Strip */}
        <MetricsStrip language={language} />

        {/* 4. About Section */}
        <AboutSection language={language} />

        {/* 5. Experience Section */}
        <ExperienceSection language={language} />

        {/* 6. Featured Projects */}
        <ProjectsSection
          language={language}
          onOpenSandbox={() => {
            const sandboxEl = document.getElementById('sandbox');
            if (sandboxEl) {
              sandboxEl.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />

        {/* 7. Interactive AI Evaluation Sandbox */}
        <AiEvaluationSandbox language={language} />

        {/* 8. HEVORA Institutional Engineering & QA Lab */}
        <section id="hevora-lab" className="py-14 bg-[#080B12] border-t border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>HEVORA Technologies · Evaluation Suite</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {language === 'id'
                    ? 'Protokol Pengujian Pasar Institusional & Metodologi QA'
                    : 'Institutional Market Intelligence Protocols & QA Methodology'}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
                  {language === 'id'
                    ? 'Eksplorasi mendalam 5 studi kasus evaluasi data keuangan (penanganan data basi, indikator makro, grounding) dan 6 tahap pipeline QA.'
                    : 'Deep exploration of 5 financial evaluation case studies (stale data, macro prints, grounding) and the 6-stage QA pipeline.'}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsHevoraLabExpanded(!isHevoraLabExpanded)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors shrink-0 cursor-pointer"
              >
                <span>
                  {isHevoraLabExpanded
                    ? language === 'id'
                      ? 'Sembunyikan Lab HEVORA'
                      : 'Collapse Lab Details'
                    : language === 'id'
                    ? 'Buka Rincian Lab HEVORA'
                    : 'Expand Lab Details'}
                </span>
                {isHevoraLabExpanded ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {isHevoraLabExpanded && (
            <div className="mt-8 space-y-4">
              <TechnicalResponsibilities />
              <TechnicalCaseStudies />
              <QaMethodology />
            </div>
          )}
        </section>

        {/* 9. Skills Matrix */}
        <SkillsMatrix language={language} />

        {/* 10. Education & Certifications */}
        <EducationCertifications language={language} />

        {/* 11. Contact Section */}
        <ContactSection
          language={language}
          onOpenCvModal={() => setIsCvModalOpen(true)}
        />
      </main>

      {/* 12. Footer */}
      <Footer
        language={language}
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      {/* 13. ATS CV Viewer Modal */}
      <CvViewerModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        language={language}
      />
    </div>
  );
}
