import React, { useState } from 'react';
import { Language } from '../types/portfolio.ts';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { FileText, Menu, X, Globe, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/evaluation.ts';

interface NavbarProps {
  language: Language;
  onToggleLanguage: () => void;
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onToggleLanguage,
  onOpenCvModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      href: '#about',
      label: language === 'id' ? 'Tentang' : 'About',
    },
    {
      href: '#experience',
      label: language === 'id' ? 'Pengalaman' : 'Experience',
    },
    {
      href: '#projects',
      label: language === 'id' ? 'Proyek' : 'Projects',
    },
    {
      href: '#sandbox',
      label: language === 'id' ? 'Sandbox AI' : 'AI Sandbox',
    },
    {
      href: '#skills',
      label: language === 'id' ? 'Keahlian' : 'Skills',
    },
    {
      href: '#contact',
      label: language === 'id' ? 'Kontak' : 'Contact',
    },
  ];

  const waUrl = buildWhatsAppUrl(
    PERSONAL_INFO.phone,
    language === 'id'
      ? `Halo ${PERSONAL_INFO.shortName}, saya tertarik mendiskusikan peluang kerja / kolaborasi AI Engineering & Evaluation.`
      : `Hello ${PERSONAL_INFO.shortName}, I am interested in discussing AI Engineering & Evaluation opportunities.`
  );

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#080B11]/90 border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16 sm:h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#top"
            className="text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-emerald-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
            aria-label="Muchammad Yusuf Iwang Pradana"
          >
            {PERSONAL_INFO.fullName}
          </a>

          {/* Zone 2: 5-6 clean single-line text links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action + minimal language toggle */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              type="button"
              onClick={onToggleLanguage}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/80 text-xs font-mono font-medium text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer whitespace-nowrap shrink-0"
              title={language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
            >
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span>{language.toUpperCase()}</span>
            </button>

            {/* Primary Action Button: ATS CV */}
            <button
              type="button"
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-semibold tracking-wide transition-colors shadow-sm shadow-emerald-500/20 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{language === 'id' ? 'Lihat CV ATS' : 'View ATS CV'}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={onToggleLanguage}
              className="px-2.5 py-1.5 rounded-lg border border-slate-800 bg-slate-900 text-xs font-mono font-medium text-slate-300 cursor-pointer"
              aria-label="Toggle Language"
            >
              {language.toUpperCase()}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900 border border-slate-800 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#080B11]/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500 text-slate-950 text-sm font-semibold cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>{language === 'id' ? 'Buka Dokumen CV ATS' : 'View ATS CV Document'}</span>
            </button>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-800 bg-slate-900 text-slate-200 text-sm font-medium"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 fill-current" />
              <span>{language === 'id' ? 'Chat WhatsApp Langsung' : 'Chat via WhatsApp'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
