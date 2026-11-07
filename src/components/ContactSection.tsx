import React, { useState } from 'react';
import { Language } from '../types/portfolio.ts';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { buildWhatsAppUrl, buildMailtoUrl } from '../utils/evaluation.ts';
import {
  Mail,
  Linkedin,
  Github,
  MessageCircle,
  FileText,
  Check,
  Copy,
  ExternalLink,
} from 'lucide-react';

interface ContactSectionProps {
  language: Language;
  onOpenCvModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  language,
  onOpenCvModal,
}) => {
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [inquiryType, setInquiryType] = useState('recruitment');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const whatsappMessage =
    language === 'id'
      ? `Halo ${PERSONAL_INFO.shortName},\nNama: ${senderName || '[Nama Anda]'}\nInstansi: ${senderOrg || '[Instansi]'}\nTopik: ${inquiryType}\nPesan: ${senderMessage || 'Tertarik berdiskusi peluang kerja sama.'}`
      : `Hello ${PERSONAL_INFO.shortName},\nName: ${senderName || '[Your Name]'}\nOrganization: ${senderOrg || '[Organization]'}\nTopic: ${inquiryType}\nMessage: ${senderMessage || 'Interested in discussing opportunities.'}`;

  const waUrl = buildWhatsAppUrl(PERSONAL_INFO.phone, whatsappMessage);

  const mailSubject = `[Portfolio Inquiry - ${inquiryType.toUpperCase()}] ${senderName || 'Recruiter'}`;
  const mailBody = `Halo ${PERSONAL_INFO.fullName},\n\nNama: ${senderName || '[Nama]'}\nOrganisasi: ${senderOrg || '[Organisasi]'}\n\nPesan:\n${senderMessage || 'Saya ingin mendiskusikan peluang kerja / kolaborasi AI Engineering & Evaluation.'}\n\nSalam,\n${senderName || ''}`;
  const mailtoUrl = buildMailtoUrl(PERSONAL_INFO.email, mailSubject, mailBody);

  return (
    <section id="contact" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
      {/* Header */}
      <div className="max-w-3xl mb-14">
        <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-medium mb-2">
          {language === 'id' ? 'Komunikasi & Konsultasi' : 'Professional Inquiries'}
        </p>
        <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight" style={{ textWrap: 'balance' }}>
          {language === 'id'
            ? 'Mari Berkolaborasi & Terhubung'
            : 'Let\'s Connect & Discuss Opportunities'}
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
          {language === 'id'
            ? 'Terbuka untuk posisi AI Engineer, AI Evaluation Specialist, dan evaluasi kualitas model. Siap berdiskusi secara langsung melalui WhatsApp, Email, atau LinkedIn.'
            : 'Available for AI Engineering and AI Evaluation Specialist opportunities. Connect directly via WhatsApp, Email, or LinkedIn.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (5 cols): Direct Channels */}
        <div className="lg:col-span-5 space-y-4">
          {/* WhatsApp Card */}
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400">
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                WhatsApp Direct
              </span>
              <span>Fast Response</span>
            </div>

            <p className="text-lg font-mono font-bold text-white mb-1">
              {PERSONAL_INFO.displayPhone}
            </p>
            <p className="text-xs text-slate-400 mb-4">
              {language === 'id'
                ? 'Kanal tercepat untuk wawancara, penawaran posisi, atau jadwal diskusi.'
                : 'Fastest channel for recruitment interviews or opportunity briefings.'}
            </p>

            <div className="flex items-center gap-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>{language === 'id' ? 'Chat WhatsApp Langsung' : 'Chat via WhatsApp'}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="p-2.5 rounded-xl border border-slate-800 bg-slate-900 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Salin Nomor"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between mb-2 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                Email Profesional
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Disalin' : 'Salin'}</span>
              </button>
            </div>
            <p className="text-base font-mono font-medium text-white mb-3">
              {PERSONAL_INFO.email}
            </p>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-medium transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{language === 'id' ? 'Kirim Surel' : 'Send Email'}</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 flex items-center gap-3 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-emerald-400" />
              <div>
                <div className="text-xs font-semibold text-white">LinkedIn</div>
                <div className="text-[11px] text-slate-400">iwangdana7</div>
              </div>
            </a>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 flex items-center gap-3 transition-colors"
            >
              <Github className="w-4 h-4 text-emerald-400" />
              <div>
                <div className="text-xs font-semibold text-white">GitHub</div>
                <div className="text-[11px] text-slate-400">iwangdana7</div>
              </div>
            </a>
          </div>

          {/* View ATS CV Card */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <FileText className="w-4 h-4 text-emerald-400" />
              <div>
                <div className="text-xs font-semibold text-slate-200">
                  {language === 'id' ? 'Curriculum Vitae (ATS)' : 'ATS-Optimized CV'}
                </div>
                <div className="text-[11px] text-slate-400">
                  PDF Resmi Muchammad Yusuf Iwang Pradana
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={onOpenCvModal}
              className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors cursor-pointer"
            >
              {language === 'id' ? 'Buka' : 'View'}
            </button>
          </div>
        </div>

        {/* Right Column (7 cols): Quick Message Composer */}
        <div className="lg:col-span-7 rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6 sm:p-8">
          <div className="mb-6 pb-4 border-b border-slate-800/80">
            <h3 className="text-base font-semibold text-white">
              {language === 'id' ? 'Tulis Pesan Cepat' : 'Quick Message Composer'}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {language === 'id'
                ? 'Kirimkan pesan langsung ke WhatsApp atau Email dengan format terstruktur.'
                : 'Dispatch formatted message directly to WhatsApp or Email.'}
            </p>
          </div>

          <div className="space-y-4">
            {/* Inquiry Type Radio */}
            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 font-medium mb-2">
                {language === 'id' ? 'Topik Pembahasan:' : 'Inquiry Topic:'}
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'recruitment', label: language === 'id' ? 'Peluang Kerja / Rekrutmen' : 'Job / Recruitment' },
                  { id: 'ai-consulting', label: language === 'id' ? 'Evaluasi AI & QA' : 'AI Eval & QA' },
                  { id: 'networking', label: language === 'id' ? 'Kolaborasi / Diskusi' : 'General Dialogue' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setInquiryType(item.id)}
                    className={`py-1.5 px-3 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      inquiryType === item.id
                        ? 'bg-slate-800 text-white'
                        : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Name & Org Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">
                  {language === 'id' ? 'Nama Anda / Recruiter:' : 'Your Name / Recruiter:'}
                </label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder={language === 'id' ? 'Contoh: Budi Santoso' : 'e.g. John Doe'}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-slate-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">
                  {language === 'id' ? 'Perusahaan / Lembaga:' : 'Organization / Company:'}
                </label>
                <input
                  type="text"
                  value={senderOrg}
                  onChange={(e) => setSenderOrg(e.target.value)}
                  placeholder={language === 'id' ? 'Contoh: Tech Corp' : 'e.g. Acme Inc'}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-slate-600 transition-colors"
                />
              </div>
            </div>

            {/* Message Body */}
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">
                {language === 'id' ? 'Isi Pesan:' : 'Message Content:'}
              </label>
              <textarea
                rows={4}
                value={senderMessage}
                onChange={(e) => setSenderMessage(e.target.value)}
                placeholder={
                  language === 'id'
                    ? 'Tuliskan deskripsi peran, proyek, atau jadwal wawancara yang ingin didiskusikan...'
                    : 'Describe the role, project, or schedule an interview...'
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-slate-600 transition-colors"
              />
            </div>

            {/* Dispatch Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{language === 'id' ? 'Kirim via WhatsApp' : 'Dispatch via WhatsApp'}</span>
              </a>

              <a
                href={mailtoUrl}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-200 font-medium text-xs transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>{language === 'id' ? 'Kirim via Email' : 'Dispatch via Email'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
