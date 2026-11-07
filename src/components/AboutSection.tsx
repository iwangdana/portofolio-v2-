import React from 'react';
import { Language } from '../types/portfolio.ts';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import {
  SearchCheck,
  Code2,
  Database,
  AlertOctagon,
  CheckCircle,
  Cpu,
  ExternalLink,
} from 'lucide-react';

interface AboutSectionProps {
  language: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const pillars = [
    {
      title: {
        id: 'Evaluasi Perilaku & Penalaran Model AI',
        en: 'AI Behavior & Reasoning Evaluation',
      },
      description: {
        id: 'Merancang skenario pengujian ketat untuk menguji penalaran model Gemini di bawah kondisi pasar volatil dan sentimen berita padat derau.',
        en: 'Designing rigorous test scenarios to probe Gemini model reasoning under volatile market regimes and noisy sentiment feeds.',
      },
      icon: SearchCheck,
    },
    {
      title: {
        id: 'Rekayasa Prompt & Skema Terstruktur',
        en: 'Prompt Engineering & Schema Enforcement',
      },
      description: {
        id: 'Menyusun instruksi sistem dengan batasan ketat (negative constraints) dan ekstraktor JSON deterministik untuk memaksakan keluaran terstruktur.',
        en: 'Crafting strict system instructions, negative constraints, and deterministic JSON schemas to enforce structured analytical outputs.',
      },
      icon: Code2,
    },
    {
      title: {
        id: 'Validasi & Grounding Data Keuangan',
        en: 'Financial Data Grounding & Verification',
      },
      description: {
        id: 'Mengaudit integritas numerik pakan data, memastikan bahwa setiap angka makroekonomi (Actual vs Forecast vs Previous) sesuai dengan sumber resmi.',
        en: 'Auditing numerical feeds, verifying that every macroeconomic metric (Actual vs Forecast vs Previous) matches official documented releases.',
      },
      icon: Database,
    },
    {
      title: {
        id: 'Mitigasi Halusinasi & Kontrol Risiko',
        en: 'Hallucination Mitigation & Risk Controls',
      },
      description: {
        id: 'Menerapkan rangkaian evaluasi adversarial untuk mendeteksi klaim harga tanpa bukti dan memaksakan pernyataan ketidakpastian saat data tidak lengkap.',
        en: 'Deploying adversarial evaluation suites to catch unwarranted causal claims and mandating explicit uncertainty flags when data is missing.',
      },
      icon: AlertOctagon,
    },
    {
      title: {
        id: 'Evaluasi Linguistik AI Suara (S2S)',
        en: 'Speech-to-Speech (S2S) Acoustic QA',
      },
      description: {
        id: 'Pengalaman 72 asesmen turn-level pada model S2S bahasa Indonesia di Outlier AI dengan skor rata-rata 3.13 (melampaui target kualitas 2.00).',
        en: 'Proven track record of 72 turn-level assessments on Indonesian S2S models at Outlier AI with an average QA score of 3.13 (exceeding the 2.00 target).',
      },
      icon: CheckCircle,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#07090E] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-medium mb-2">
            {language === 'id' ? 'Profil & Fokus Rekayasa AI' : 'Profile & AI Engineering Focus'}
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight" style={{ textWrap: 'balance' }}>
            {language === 'id'
              ? 'Kontribusi pada HEVORA Technologies & Evaluasi AI'
              : 'Contributions to HEVORA Technologies & AI Evaluation'}
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            {PERSONAL_INFO.summary[language]}
          </p>
        </div>

        {/* 5 Core Pillars Grid + HEVORA Terminal card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-800/60 text-emerald-400 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {pillar.title[language]}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {pillar.description[language]}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Model Specification & HEVORA Platform Card */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-700/80 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-emerald-400 flex items-center justify-center mb-5">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                HEVORA Technologies
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {language === 'id'
                  ? 'Sistem intelijen pasar bertenaga Gemini yang beroperasi dengan validasi data ketat dan protokol data basi teruji.'
                  : 'Gemini-powered institutional market intelligence operating under strict data grounding and missing-data verification protocols.'}
              </p>
            </div>

            <a
              href={PERSONAL_INFO.currentProjectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>{language === 'id' ? 'Buka Platform HEVORA' : 'Explore HEVORA Platform'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Confidentiality Notice */}
        <div className="p-5 rounded-xl bg-slate-900/30 border border-slate-800/60 text-xs text-slate-400 leading-relaxed">
          <span className="font-semibold text-slate-300 block mb-1">
            {language === 'id' ? 'Pemberitahuan Kerahasiaan (NDA):' : 'Confidentiality Notice (NDA):'}
          </span>
          {PERSONAL_INFO.confidentialityNotice[language]}
        </div>

      </div>
    </section>
  );
};
