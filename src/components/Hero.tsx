import React from 'react';
import { Language } from '../types/portfolio.ts';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { buildWhatsAppUrl } from '../utils/evaluation.ts';
import {
  FileText,
  MessageCircle,
  Linkedin,
  Mail,
  ExternalLink,
  Award,
  Terminal,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

interface HeroProps {
  language: Language;
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOpenCvModal }) => {
  const waUrl = buildWhatsAppUrl(
    PERSONAL_INFO.phone,
    language === 'id'
      ? `Halo ${PERSONAL_INFO.shortName}, saya melihat portofolio Anda dan ingin berdiskusi mengenai posisi AI Engineer / Evaluasi model.`
      : `Hello ${PERSONAL_INFO.shortName}, I reviewed your portfolio and would like to discuss AI Engineering and Evaluation opportunities.`
  );

  return (
    <section id="top" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-[#07090E]">
      {/* Subtle architectural grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (7 cols): Identity, Role, Narrative, Action Buttons */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Clean Unboxed Metadata Kicker (Zero-Pill Discipline) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono text-slate-400">
              <span className="text-emerald-400 font-semibold">HEVORA Technologies</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>AI Engineer</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>LLM & S2S Evaluation</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>S.Kom Informatika</span>
            </div>

            {/* Headline */}
            <div>
              <p className="text-xs sm:text-sm font-mono tracking-wider text-slate-400 mb-2">
                {PERSONAL_INFO.fullName}
              </p>
              <h1
                className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight"
                style={{ textWrap: 'balance' }}
              >
                {language === 'id' ? (
                  <>
                    AI Engineer <span className="text-slate-400 font-light">&</span> Indonesian AI Evaluation Specialist
                  </>
                ) : (
                  <>
                    AI Engineer <span className="text-slate-400 font-light">&</span> Indonesian AI Evaluation Specialist
                  </>
                )}
              </h1>
            </div>

            {/* Concise Summary Narrative */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {language === 'id'
                ? 'Berkontribusi di HEVORA Technologies dalam pengujian dan validasi sistem kecerdasan pasar finansial institusional bertenaga Gemini—dengan fokus pada data grounding ketat, mitigasi halusinasi, dan analitis berbasis bukti. Memiliki rekam jejak terbukti di Outlier AI dalam evaluasi model AI suara (Speech-to-Speech) berbahasa Indonesia dengan rata-rata skor QA 3.13 (melampaui target 2.00).'
                : 'Contributing at HEVORA Technologies to evaluate institutional market intelligence systems powered by Gemini models—focusing on strict data grounding, hallucination mitigation, and risk-aware AI behavior. Demonstrated track record at Outlier AI evaluating Indonesian Speech-to-Speech AI with an average QA score of 3.13 (exceeding the 2.00 target).'}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              {/* Primary: View ATS CV Modal */}
              <button
                type="button"
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-sm shadow-emerald-500/20"
              >
                <FileText className="w-4 h-4 text-slate-950" />
                <span>{language === 'id' ? 'Lihat CV ATS Lengkap' : 'View Full ATS CV'}</span>
              </button>

              {/* HEVORA Web Link */}
              <a
                href={PERSONAL_INFO.currentProjectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm transition-colors whitespace-nowrap shrink-0"
              >
                <span>{language === 'id' ? 'Kunjungi Web HEVORA' : 'Explore HEVORA Platform'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              {/* AI Sandbox Jump */}
              <a
                href="#sandbox"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-950 hover:bg-slate-900 text-slate-300 hover:text-white font-medium text-sm transition-colors whitespace-nowrap shrink-0"
              >
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>{language === 'id' ? 'Uji Sandbox AI' : 'Test AI Sandbox'}</span>
              </a>
            </div>

            {/* Direct Verified Communication Channels */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-slate-400 border-t border-slate-800/80">
              <span className="font-semibold text-slate-300">
                {language === 'id' ? 'Kanal Terverifikasi:' : 'Verified Channels:'}
              </span>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 font-medium transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-current" />
                <span>{PERSONAL_INFO.displayPhone}</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 font-medium transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 font-medium transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-slate-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column (5 cols): Portrait with Architectural Framing & Integrated Proof */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-sm">
              
              {/* Photo Container */}
              <div className="relative rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl">
                <img
                  src={PERSONAL_INFO.photoUrl}
                  alt={PERSONAL_INFO.fullName}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover aspect-[4/5] object-top"
                />

                {/* Overlaid Bottom Caption Bar */}
                <div className="p-4 bg-slate-950/95 border-t border-slate-800/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold text-sm">
                        {PERSONAL_INFO.fullName}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">
                        AI Engineer · HEVORA Technologies
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-400 text-xs font-mono font-medium">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Verified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Integrated Benchmark Proof Card (No awkward overlapping floating clutter) */}
              <div className="mt-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-300">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Outlier AI Benchmark</span>
                  </div>
                  <span className="font-mono text-emerald-400 text-[11px] font-semibold">
                    +56.5% vs Target
                  </span>
                </div>
                <div className="flex items-baseline justify-between pt-1 border-t border-slate-800/60">
                  <div className="flex items-baseline gap-1 font-mono">
                    <span className="text-2xl font-bold text-white tabular-nums">3.13</span>
                    <span className="text-xs text-slate-500">/ 4.00</span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    {language === 'id' ? '72 asesmen turn-level' : '72 turn ratings'}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
