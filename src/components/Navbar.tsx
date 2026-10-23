import React, { useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { CONTACT_INFO } from '../data/leadership';

interface NavbarProps {
  onOpenAdmission: () => void;
  onOpenProposal: () => void;
  onOpenPdfExport?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmission, onOpenPdfExport }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0e3c6a] text-white border-b border-[#0b3157] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark element */}
        <a href="#" className="flex items-center gap-3 whitespace-nowrap shrink-0 group">
          <img
            src="/assets/aistudio/image_ffda20d2.png"
            alt="CNAP Logo"
            className="h-11 w-auto object-contain mix-blend-screen group-hover:scale-105 transition-transform drop-shadow-xs"
            referrerPolicy="no-referrer"
          />
          <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-amber-300 transition-colors">
            CNAP <span className="text-blue-200 font-normal">Academy</span>
          </span>
        </a>

        {/* Zone 2: 4-5 concise single-line nav links with hover underlines */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-blue-100">
          <a href="#programs" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Programs
          </a>
          <a href="#audiences" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Audiences
          </a>
          <a href="#learn-earn" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Learn & Earn
          </a>
          <a href="#centers" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Centers
          </a>
          <a href="#council" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Leadership
          </a>
          <a href="#contact" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action button + quick direct call helper */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {onOpenPdfExport && (
            <button
              onClick={onOpenPdfExport}
              className="px-3 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              title="Download exact-color PDF Proposal"
            >
              <span>Download PDF</span>
            </button>
          )}
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-amber-200 transition-colors whitespace-nowrap"
            title="Helpline: Naresh Kr. Gautam"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-300" />
            <span className="tabular-nums">{CONTACT_INFO.phoneDisplay}</span>
          </a>
          <button
            onClick={onOpenAdmission}
            className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 rounded-lg hover:bg-amber-300 active:scale-[0.98] transition-all shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            Apply for Admission
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenAdmission}
            className="px-3 py-1.5 text-xs font-bold text-slate-950 bg-amber-400 rounded-md sm:hidden"
          >
            Apply
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-blue-100 hover:text-white rounded-lg hover:bg-[#0b3157]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a2c4e] border-b border-[#08233e] px-4 pt-3 pb-6 space-y-3 text-white">
          <div className="flex flex-col gap-2 font-medium text-blue-100">
            <a
              href="#programs"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#0e3c6a]"
            >
              Academic & Vocational Programs
            </a>
            <a
              href="#audiences"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#0e3c6a]"
            >
              Stakeholder Portals (Students, Teachers, Centers)
            </a>
            <a
              href="#learn-earn"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#0e3c6a]"
            >
              Learn, Work & Earn Calculator
            </a>
            <a
              href="#centers"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#0e3c6a]"
            >
              Admission & Training Centers
            </a>
            <a
              href="#council"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#0e3c6a]"
            >
              Advisory Council & Leadership
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#0e3c6a]"
            >
              Direct Contact Desk
            </a>
          </div>
          <div className="pt-3 border-t border-blue-900 flex flex-col gap-2.5">
            {onOpenPdfExport && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPdfExport();
                }}
                className="w-full py-2 text-center text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg cursor-pointer"
              >
                Download Official Proposal PDF
              </button>
            )}
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-[#0e3c6a] text-xs font-semibold text-amber-300"
            >
              <PhoneCall className="w-4 h-4 text-amber-300" />
              Call Admissions: {CONTACT_INFO.phoneDisplay}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmission();
              }}
              className="w-full py-2.5 text-center text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow cursor-pointer"
            >
              Apply for 2026–2027 Admissions
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
