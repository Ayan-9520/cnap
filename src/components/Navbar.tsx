import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ArrowRight, MessageSquare, ShieldCheck, GraduationCap, Building2 } from 'lucide-react';
import { CONTACT_INFO } from '../data/leadership';

interface NavbarProps {
  onOpenAdmission: () => void;
  onOpenProposal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmission, onOpenProposal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a2544]/95 backdrop-blur-xl border-b border-blue-900/80 shadow-2xl shadow-blue-950/30'
          : 'bg-[#0e3c6a] border-b border-blue-900/60 shadow-lg'
      }`}
    >
      {/* Top micro gold & cyan gradient shimmer line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-amber-400 via-cyan-400 to-amber-500 animate-shimmer" />

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between gap-4">
          
          {/* Brand Logo & Wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 shrink-0 group focus:outline-none"
            title="CNAP Skills & Vocational Academy"
          >
            <div className="relative flex items-center justify-center p-1.5 rounded-xl bg-white/10 border border-white/20 group-hover:border-amber-400/50 group-hover:bg-white/15 transition-all shadow-sm">
              <img
                src="/assets/aistudio/image_ffda20d2.png"
                alt="CNAP Official Logo"
                className="h-11 w-auto object-contain mix-blend-screen group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-lg sm:text-xl font-black tracking-tight text-white flex items-center gap-1.5 leading-none">
                <span></span>
                <span className="text-cyan-300 font-dark text-base tracking-normal">Academy</span>
              </div>
              <div className="text-[9px] sm:text-[10px] text-blue-200/85 font-semibold tracking-wider uppercase mt-1">
                Skills · Degrees · Placement
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links (with strict whitespace-nowrap to prevent text wrapping) */}
          <nav className="hidden xl:flex items-center gap-3 xl:gap-3.5 2xl:gap-5 text-xs uppercase tracking-wider font-bold text-blue-100 shrink-0">
            <a
              href="#programs"
              className="hover:text-amber-300 transition-colors py-1 whitespace-nowrap relative group"
            >
              Programs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#audiences"
              className="hover:text-amber-300 transition-colors py-1 whitespace-nowrap relative group"
            >
              Audiences
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#learn-earn"
              className="hover:text-amber-300 transition-colors py-1 whitespace-nowrap relative group inline-flex items-center gap-1"
            >
              <span>Learn & Earn</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#roadmap"
              className="hover:text-amber-300 transition-colors py-1 whitespace-nowrap relative group"
            >
              Roadmap
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#centers"
              className="hover:text-amber-300 transition-colors py-1 whitespace-nowrap relative group"
            >
              Centers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#council"
              className="hover:text-amber-300 transition-colors py-1 whitespace-nowrap relative group"
            >
              Leadership
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#contact"
              className="hover:text-amber-300 transition-colors py-1 whitespace-nowrap relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          {/* Right Action Suite (Responsive & Unclipped) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Live Admissions Pulsing Indicator (Desktop only) */}
            <div className="hidden 2xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/70 border border-blue-400/30 text-[11px] text-cyan-200 font-semibold shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>2026–2027 Admissions Open</span>
            </div>

            {/* Direct Helpline Button */}
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-amber-300 hover:text-white bg-white/5 hover:bg-white/10 border border-amber-400/40 hover:border-amber-300 transition-all whitespace-nowrap shadow-xs"
              title={`Call Director Naresh Kr. Gautam: ${CONTACT_INFO.phoneDisplay}`}
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400 animate-pulse shrink-0" />
              <span className="tabular-nums tracking-tight">{CONTACT_INFO.phoneDisplay}</span>
            </a>

            {/* Apply for Admission CTA */}
            <button
              onClick={onOpenAdmission}
              className="px-4 sm:px-5 py-2.5 text-xs font-black text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-200 active:scale-95 transition-all rounded-xl shadow-md hover:shadow-amber-400/30 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap cursor-pointer"
            >
              <GraduationCap className="w-4 h-4 text-slate-900 shrink-0" />
              <span className="hidden sm:inline">Apply for Admission</span>
              <span className="sm:hidden">Apply</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-900 shrink-0" />
            </button>

            {/* Mobile / Tablet Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-white hover:text-amber-300 bg-white/10 hover:bg-white/15 rounded-xl border border-white/15 transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Fully responsive, luxury frosted glass) */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#09223d]/98 backdrop-blur-2xl border-t border-b border-blue-900/90 px-4 sm:px-6 py-6 space-y-4 animate-in slide-in-from-top-3 duration-200 shadow-2xl">
          {/* Quick status pill */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-blue-950/80 border border-blue-400/20 text-xs">
            <div className="flex items-center gap-2 text-cyan-200 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Admissions 2026–2027 Open</span>
            </div>
            <span className="text-[11px] text-amber-300 font-bold">NSDC & UGC Aligned</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-1 text-sm font-semibold text-blue-100">
            <a
              href="#programs"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-white/10 hover:text-amber-300 transition-colors flex items-center justify-between"
            >
              <span>Academic & Vocational Programs</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#audiences"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-white/10 hover:text-amber-300 transition-colors flex items-center justify-between"
            >
              <span>Portals: Students, Teachers & Centers</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#learn-earn"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-white/10 hover:text-amber-300 transition-colors flex items-center justify-between"
            >
              <span>Learn, Work & Earn Dual Track</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#roadmap"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-white/10 hover:text-amber-300 transition-colors flex items-center justify-between"
            >
              <span>Council Strategic Roadmap (2027–2030)</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#centers"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-white/10 hover:text-amber-300 transition-colors flex items-center justify-between"
            >
              <span>Authorized Training Centers Locator</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#council"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-white/10 hover:text-amber-300 transition-colors flex items-center justify-between"
            >
              <span>Academic Advisory Board & Leadership</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-white/10 hover:text-amber-300 transition-colors flex items-center justify-between"
            >
              <span>Official Executive Liaison Desk</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Mobile Direct Action Buttons */}
          <div className="pt-3 border-t border-blue-900/80 grid grid-cols-2 gap-3">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="py-2.5 px-3 rounded-xl text-xs font-bold text-amber-300 bg-white/5 border border-amber-400/40 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Helpline</span>
            </a>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmission();
              }}
              className="w-full py-3 rounded-xl text-xs font-black text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <GraduationCap className="w-4 h-4 text-slate-900" />
              <span>Submit Admission Application</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-900" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
