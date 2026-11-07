import React from 'react';
import { Language } from '../types/portfolio.ts';
import { Award, Zap, Users, ShieldCheck } from 'lucide-react';

interface MetricsStripProps {
  language: Language;
}

export const MetricsStrip: React.FC<MetricsStripProps> = ({ language }) => {
  const metrics = [
    {
      id: 'qa-score',
      icon: Award,
      value: '3.13',
      target: '/ 4.00',
      delta: '+56.5% vs Target',
      label: {
        id: 'Skor QA AI Speech-to-Speech',
        en: 'Speech-to-Speech AI QA Score',
      },
      detail: {
        id: '72 asesmen turn-level di Outlier AI (target kualitas: 2.00).',
        en: '72 turn-level ratings at Outlier AI (quality target: 2.00).',
      },
    },
    {
      id: 'hevora-status',
      icon: ShieldCheck,
      value: 'HEVORA',
      target: 'AI Eng.',
      delta: 'Active Role',
      label: {
        id: 'Market Intelligence & QA',
        en: 'Market Intelligence & QA',
      },
      detail: {
        id: 'Evaluasi Gemini AI untuk data finansial & mitigasi halusinasi.',
        en: 'Gemini AI evaluation for financial feeds & hallucination controls.',
      },
    },
    {
      id: 'admin-efficiency',
      icon: Zap,
      value: '+30%',
      target: 'Efficiency',
      delta: 'Terverifikasi',
      label: {
        id: 'Efisiensi Alur Administrasi',
        en: 'Administrative Workflow Lift',
      },
      detail: {
        id: 'Standarisasi basis data anggota & sistem kearsipan Koperasi.',
        en: 'Standardized member database & digital archival records for Koperasi.',
      },
    },
    {
      id: 'student-engagement',
      icon: Users,
      value: '+30%',
      target: 'Engagement',
      delta: 'Terverifikasi',
      label: {
        id: 'Keterlibatan Belajar Digital',
        en: 'Digital Learning Engagement',
      },
      detail: {
        id: 'Modul pelatihan interaktif & pendampingan LMS di LKP.',
        en: 'Interactive digital modules & LMS platform support at LKP.',
      },
    },
  ];

  return (
    <section className="py-10 bg-[#090C14] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.id}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-5 h-5 text-emerald-400" />
                    <span className="text-xs font-mono text-slate-400">
                      {metric.delta}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span className="text-3xl font-bold font-mono tracking-tight text-white tabular-nums">
                      {metric.value}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {metric.target}
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold text-slate-200 mb-1">
                    {metric.label[language]}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-800/60 mt-2">
                  {metric.detail[language]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
