import React, { useState } from 'react';
import { Language } from '../types/portfolio.ts';
import {
  PERSONAL_INFO,
  WORK_EXPERIENCES,
  EDUCATION_ITEMS,
} from '../data/portfolioData.ts';
import {
  X,
  Download,
  ExternalLink,
  FileText,
  CheckCircle,
  Copy,
  MapPin,
  Mail,
  Phone,
  Linkedin,
} from 'lucide-react';

interface CvViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const CvViewerModal: React.FC<CvViewerModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const [viewMode, setViewMode] = useState<'interactive' | 'pdf'>('interactive');
  const [copiedSummary, setCopiedSummary] = useState(false);

  if (!isOpen) return null;

  const handleCopySummary = () => {
    const text = `MUCHAMMAD YUSUF IWANG PRADANA
Lamongan, Jawa Timur | 0889 8906 5312 | iwangdana1@gmail.com | linkedin.com/in/iwangdana7

SUMMARY
Indonesian Language and AI Evaluation professional with hands-on experience in Speech-to-Speech and conversational AI evaluation. Skilled in evaluating Indonesian language quality, conversational naturalness, fluency, tone, context, factuality, and multi-turn consistency. Experienced in identifying linguistic and model-response issues and providing structured, evidence-based feedback at turn- and timestamp-level. Strong analytical and technical background in AI evaluation, data annotation, and quality assurance, with experience achieving an average QA score of 3.13 against a 2.00 target across 72 ratings.

EXPERIENCE
- AI Engineer | HEVORA Technologies (September 25, 2026 – Present)
  * Contributing to Gemini-powered institutional market intelligence systems, focusing on data grounding, prompt engineering, and risk-aware AI behavior.
- AI Speech & Conversation Evaluator | Outlier AI (February 2026 – August 2026)
  * Maintained an average QA score of 3.13 across 72 ratings, exceeding the 2.00 quality target and demonstrating consistent annotation and evaluation quality.
- Secretary (Administration and Data System) | Koperasi Desa Merah Putih Karanggeneng (May 2025 – Present)
  * Streamlined administrative processes, boosting efficiency by 30%.
- Automotive Instructor (Digital Learning Support) | LKP Jendela Otomotif (January 2024 – December 2025)
  * Enhanced learner engagement by 30% through interactive modules.

EDUCATION
- Sarjana Komputer (S.Kom) in Informatics Engineering (2016 – 2022), Universitas Muhammadiyah Malang | GPA: 3.00 / 4.00
- Vocational High School – Light Vehicle Engineering (2013 – 2016), SMKN 1 Kalitengah, Lamongan

LANGUAGES
- Indonesian: Native / Fluent
- Javanese: Native / Fluent
- English: Professional Working Proficiency

CERTIFICATIONS
- Automotive Electric System Instructor – Bintang Racing Team (2025)
- Cloud Computing Service – Alibaba Cloud (2022)`;

    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
    >
      <div className="relative w-full max-w-4xl h-[92vh] flex flex-col bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Modal Top Header Bar */}
        <div className="p-4 sm:px-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-slate-800 text-emerald-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="cv-modal-title" className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>CV Muchammad Yusuf Iwang Pradana</span>
                <span className="hidden sm:inline-block text-[10px] font-mono font-medium text-emerald-400">
                  ATS Verified
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                {language === 'id' ? 'Format ATS Friendly Standar Internasional' : 'International ATS Standard Format'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="hidden sm:flex bg-slate-850 p-0.5 rounded-lg border border-slate-800 text-xs font-medium">
              <button
                type="button"
                onClick={() => setViewMode('interactive')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  viewMode === 'interactive'
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {language === 'id' ? 'Tampilan Teks' : 'ATS Text'}
              </button>
              <button
                type="button"
                onClick={() => setViewMode('pdf')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  viewMode === 'pdf'
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                PDF View
              </button>
            </div>

            {/* Copy Plain Text Summary */}
            <button
              type="button"
              onClick={handleCopySummary}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 text-xs font-medium text-slate-200 hover:text-white hover:bg-slate-700 transition-colors"
              title="Salin teks ATS lengkap"
            >
              {copiedSummary ? <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden md:inline">{copiedSummary ? 'Tersalin' : 'Salin Teks'}</span>
            </button>

            {/* Download PDF button */}
            <a
              href={PERSONAL_INFO.cvPdfUrl}
              download="CV_Muchammad_Yusuf_Iwang_Pradana_ATS.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-semibold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{language === 'id' ? 'Unduh PDF' : 'Download'}</span>
            </a>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
              aria-label="Tutup jendela CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 bg-slate-950/95 overflow-y-auto p-4 sm:p-8">
          {viewMode === 'interactive' ? (
            <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-10 shadow-2xl space-y-6 text-slate-200 font-sans">
              
              {/* ATS Header */}
              <div className="text-center border-b border-slate-800 pb-5 space-y-2">
                <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">
                  {PERSONAL_INFO.fullName}
                </h1>
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    {PERSONAL_INFO.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    {PERSONAL_INFO.phone}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-emerald-400" />
                    {PERSONAL_INFO.email}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Linkedin className="w-3.5 h-3.5 text-emerald-400" />
                    linkedin.com/in/iwangdana7
                  </span>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800 pb-1 font-mono">
                  SUMMARY
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {PERSONAL_INFO.summary.en}
                </p>
              </div>

              {/* Experience */}
              <div className="space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800 pb-1 font-mono">
                  EXPERIENCE
                </h2>

                {WORK_EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between text-xs sm:text-sm">
                      <div className="font-semibold text-white">
                        {exp.role.en} <span className="text-slate-500">|</span> <span className="text-slate-300">{exp.company}</span>
                      </div>
                      <div className="text-slate-500 font-mono text-xs">
                        {exp.period.en}
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {exp.bulletPoints[0].en}
                    </p>

                    {exp.bulletPoints.length > 1 && (
                      <div className="pl-3 border-l border-slate-700 text-xs text-slate-400 py-0.5">
                        • {exp.bulletPoints[1].en}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800 pb-1 font-mono">
                  EDUCATION
                </h2>

                {EDUCATION_ITEMS.map((edu, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between text-xs sm:text-sm">
                    <div>
                      <div className="font-semibold text-white">
                        {edu.degree.en}
                      </div>
                      <div className="text-slate-400 text-xs">
                        {edu.institution} {edu.gpa ? `| GPA: ${edu.gpa}` : ''}
                      </div>
                    </div>
                    <div className="text-slate-500 font-mono text-xs mt-1 sm:mt-0">
                      {edu.period}
                    </div>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800 pb-1 font-mono">
                  SKILLS & EXPERTISE
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
                  <div className="space-y-1">
                    <div>• Indonesian Language Evaluation</div>
                    <div>• Speech-to-Speech (S2S) AI Evaluation</div>
                    <div>• Multi-turn Conversation Evaluation</div>
                    <div>• Naturalness & Prosody Analysis</div>
                    <div>• AI Model Evaluation & Comparison</div>
                    <div>• Indonesian Grammar & Semantics</div>
                  </div>
                  <div className="space-y-1">
                    <div>• Indonesian Linguistic Quality Assessment</div>
                    <div>• Factuality & Hallucination Detection</div>
                    <div>• Quality Assurance & Data Annotation</div>
                    <div>• Voice Quality Assessment</div>
                    <div>• Robotic Speech & Artifact Detection</div>
                    <div>• Indonesian Linguistic Judgment</div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800 pb-1 font-mono">
                  CERTIFICATIONS AND LICENSES
                </h2>
                <div className="text-xs text-slate-400 space-y-1">
                  <div>• Automotive Electric System Instructor – Bintang Racing Team (2025)</div>
                  <div>• Cloud Computing Service – Alibaba Cloud (2022)</div>
                </div>
              </div>

            </div>
          ) : (
            <div className="h-full flex flex-col">
              <iframe
                src={`${PERSONAL_INFO.cvPdfUrl}#view=FitH`}
                title="Curriculum Vitae Muchammad Yusuf Iwang Pradana"
                className="w-full flex-1 min-h-[500px] border border-slate-800 rounded-xl"
              />
            </div>
          )}
        </div>

        {/* Footer Bar */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 shrink-0 px-6">
          <span className="text-slate-400">
            Dokumen CV ATS Terverifikasi
          </span>
          <a
            href={PERSONAL_INFO.cvPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline flex items-center gap-1 font-medium"
          >
            <span>Buka PDF di Tab Baru</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </div>
  );
};
