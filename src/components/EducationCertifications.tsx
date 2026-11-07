import React from 'react';
import { Language } from '../types/portfolio.ts';
import { EDUCATION_ITEMS, CERTIFICATIONS } from '../data/portfolioData.ts';
import { GraduationCap, Award, Cloud, Zap, CheckCircle2 } from 'lucide-react';

interface EducationCertificationsProps {
  language: Language;
}

export const EducationCertifications: React.FC<EducationCertificationsProps> = ({ language }) => {
  return (
    <section id="education" className="py-20 md:py-28 bg-[#090C14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-medium mb-2">
            {language === 'id' ? 'Latar Belakang Pendidikan & Lisensi' : 'Education & Official Certifications'}
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight" style={{ textWrap: 'balance' }}>
            {language === 'id' ? 'Pendidikan Formal & Sertifikasi Resmi' : 'Formal Degrees & Verified Credentials'}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            {language === 'id'
              ? 'Pondasi akademik kuat dalam bidang Informatika dan teknologi komputasi awan yang diakui secara industri.'
              : 'Rigorous engineering foundation in Informatics and industry-certified credentials in Cloud Computing & Technical Systems.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column (6 cols): Formal Education */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-emerald-400" />
              <h3 className="text-xl font-bold text-white">
                {language === 'id' ? 'Pendidikan Formal' : 'Formal Education'}
              </h3>
            </div>

            <div className="space-y-4">
              {EDUCATION_ITEMS.map((edu, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 space-y-3 hover:border-slate-700 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono">
                    <span className="text-emerald-400 font-semibold">
                      {edu.period}
                    </span>
                    {edu.gpa && (
                      <span className="text-slate-400">
                        GPA: {edu.gpa}
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="text-base font-semibold text-white">
                      {edu.degree[language]}
                    </h4>
                    <p className="text-sm text-slate-300 mt-0.5">
                      {edu.institution}
                    </p>
                  </div>

                  <ul className="space-y-1.5 pt-3 border-t border-slate-800/80">
                    {edu.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{hl[language]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (6 cols): Certifications & Licenses */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-emerald-400" />
              <h3 className="text-xl font-bold text-white">
                {language === 'id' ? 'Sertifikasi & Lisensi Resmi' : 'Certifications & Official Licenses'}
              </h3>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 space-y-3 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-slate-800 text-emerald-400">
                        {cert.category === 'Cloud' ? <Cloud className="w-4 h-4" /> : <Zap className="w-4 h-4" />}
                      </div>
                      <span className="text-xs font-mono text-slate-300">
                        {cert.issuer}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {cert.year}
                    </span>
                  </div>

                  <h4 className="text-base font-semibold text-white">
                    {cert.name}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-800/80">
                    {cert.description[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
