import React from 'react';
import { PhoneCall, Mail, MapPin, ShieldCheck, ArrowRight, Sparkles, ExternalLink, CheckCircle, Lock } from 'lucide-react';
import { CONTACT_INFO } from '../data/leadership';

interface FooterProps {
  onOpenProposal?: () => void;
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenProposal, onOpenAdmin }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/90 text-xs relative overflow-hidden">
      {/* Decorative ambient glow orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Advisory Strip */}
      <div className="border-b border-slate-800/80 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <strong className="text-white font-semibold">2026–2027 Admissions Open:</strong>
            <span className="text-slate-400 hidden md:inline">
              University Degree Streams, Vocational Certifications & Learn-Work-Earn Hospitality Tracks.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="font-bold text-amber-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-amber-400" />
              <span>Hotline: {CONTACT_INFO.phoneDisplay}</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-slate-300 hover:text-white hidden sm:flex items-center gap-1 transition-colors"
            >
              <Mail className="w-3 h-3 text-cyan-400" />
              <span>{CONTACT_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Col 1: Wordmark, Brand Identity & Trust Stamps (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-xl bg-white/10 border border-white/20">
                <img
                  src="/assets/aistudio/image_ffda20d2.png"
                  alt="CNAP Logo"
                  className="h-10 w-auto object-contain mix-blend-screen"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-lg font-black tracking-tight text-white block">
                  CNAP <span className="font-light text-cyan-300 text-base">Academy</span>
                </span>
                <span className="text-[10px] text-blue-200/80 font-bold uppercase tracking-wider block">
                  Skills & Vocational Council
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              <strong>Communication · Navigation · Accessibility · Profiling.</strong>
              {' '}Empowering youth across Assam, Northeast India, and the Northern plains with accredited vocational qualifications, UGC university degrees, and paid star-hotel apprenticeships in strategic collaboration with Ladli Ju Welfare Trust.
            </p>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div className="text-[11px] font-bold text-amber-300 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Regional Authority Alignment</span>
              </div>
              <div className="text-[11px] text-slate-300">
                Haflong Regional Center, Near District Council Complex, Dima Hasao, Assam – 788819
              </div>
            </div>
          </div>

          {/* Col 2: Academic & Vocational Programs (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-white font-extrabold uppercase tracking-wider text-[11px] border-b border-slate-800 pb-2">
              Academic & Vocational
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#programs" className="hover:text-amber-300 hover:translate-x-0.5 inline-block transition-all">
                  Cybersecurity & SOC Operations
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-300 hover:translate-x-0.5 inline-block transition-all">
                  AI Tools, Cloud Security & Automation
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-300 hover:translate-x-0.5 inline-block transition-all">
                  SolidWorks 3D CAD & Mechanical
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-300 hover:translate-x-0.5 inline-block transition-all">
                  Industrial Automation, PLC & Robotics
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-300 hover:translate-x-0.5 inline-block transition-all">
                  Solar PV Systems & HVAC Trades
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-300 hover:translate-x-0.5 inline-block transition-all">
                  Hospitality Dual Track (Learn, Work & Earn)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-300 hover:translate-x-0.5 inline-block transition-all">
                  University Degrees (BCA, BBA, B.Sc Ag)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Stakeholders & Verification (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-white font-extrabold uppercase tracking-wider text-[11px] border-b border-slate-800 pb-2">
              Stakeholders
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#audiences" className="hover:text-amber-300 hover:translate-x-0.5 inline-block transition-all">
                  Students & Aspirants
                </a>
              </li>
              <li>
                <a href="#audiences" className="hover:text-amber-300 hover:translate-x-0.5 inline-block transition-all">
                  Teachers & Trainers
                </a>
              </li>
              <li>
                <a href="#centers" className="hover:text-amber-300 hover:translate-x-0.5 inline-block transition-all">
                  Training Centers Locator
                </a>
              </li>
              <li>
                <a href="#verification" className="hover:text-amber-300 hover:translate-x-0.5 inline-block transition-all">
                  Online Verification
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-amber-300 hover:translate-x-0.5 inline-block transition-all">
                  Council Strategic Roadmap
                </a>
              </li>
              <li>
                <a href="#council" className="hover:text-amber-300 hover:translate-x-0.5 inline-block transition-all">
                  Academic Leadership
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Executive Admissions & Helpdesk (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-white font-extrabold uppercase tracking-wider text-[11px] border-b border-slate-800 pb-2">
              Executive Liaison
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400">Director of Operations:</span>
                <span className="text-white font-bold text-sm">{CONTACT_INFO.directorName}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400">Direct Helpline:</span>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-amber-300 hover:text-white font-extrabold text-sm tabular-nums tracking-wide block"
                >
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400">Official Email:</span>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-slate-200 hover:text-cyan-300 transition-colors text-xs font-medium block truncate"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-[11px] font-bold text-white transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Accreditation Seals Strip */}
        <div className="pt-6 pb-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center sm:justify-between gap-3 text-[11px] text-slate-400">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 font-semibold flex items-center gap-1.5">
              <CheckCircle className="w-3 h-3 text-emerald-400" />
              NSDC & NSQF Aligned
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 font-semibold flex items-center gap-1.5">
              <CheckCircle className="w-3 h-3 text-cyan-400" />
              UGC Recognized Degrees
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 font-semibold flex items-center gap-1.5">
              <CheckCircle className="w-3 h-3 text-amber-400" />
              Dima Hasao Council Collaboration
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 font-semibold flex items-center gap-1.5">
              <CheckCircle className="w-3 h-3 text-purple-400" />
              NCVET Skill Ecosystem
            </span>
          </div>

          <div className="text-[11px] text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Portal Status: Systems Operational</span>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} CNAP Skills & Ladli Ju Welfare Trust. All rights reserved.
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            {onOpenProposal ? (
              <button
                onClick={onOpenProposal}
                className="text-amber-400 font-bold hover:underline cursor-pointer"
              >
                Council Strategic Blueprint
              </button>
            ) : (
              <a href="#roadmap" className="text-amber-400 font-bold hover:underline">
                Council Strategic Blueprint
              </a>
            )}
            <span>·</span>
            <a href="#contact" className="hover:text-slate-300 transition-colors">
              Admission Regulations
            </a>
            <span>·</span>
            <a href="#verification" className="hover:text-slate-300 transition-colors">
              Certificate Registry
            </a>
            <span>·</span>
            <a href="#contact" className="hover:text-slate-300 transition-colors">
              Student Privacy
            </a>
            {onOpenAdmin && (
              <>
                <span>·</span>
                <button
                  type="button"
                  onClick={onOpenAdmin}
                  className="hover:text-amber-400 transition-colors inline-flex items-center gap-1 cursor-pointer opacity-40 hover:opacity-100"
                  title="Admin Clearance Portal (Ctrl+Shift+A)"
                >
                  <Lock className="w-2.5 h-2.5" />
                  <span>Admin Clearance</span>
                </button>
              </>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};
