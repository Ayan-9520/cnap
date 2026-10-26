import React from 'react';
import {
  FileText,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  GraduationCap,
  Award,
  BookOpen,
  PhoneCall,
  Mail,
  MessageSquare,
  Check,
  Building,
  TrendingUp,
  Compass,
  Users
} from 'lucide-react';
import { AudienceType } from './AudienceSwitcher';
import { CONTACT_INFO } from '../data/leadership';

interface HeroProps {
  currentAudience: AudienceType;
  onOpenAdmission: () => void;
  onOpenProposal: () => void;
  onExplorePrograms: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentAudience,
  onOpenAdmission,
  onOpenProposal,
  onExplorePrograms,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8faff] via-white to-[#f0f5fb] text-slate-900 pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-slate-200/90">
      
      {/* Premium Ambient Background Lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-300/20 via-sky-200/15 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/3 left-[-100px] w-[500px] h-[500px] bg-gradient-to-tr from-amber-200/15 via-blue-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-gradient-to-tl from-cyan-200/15 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
      
      {/* Architectural Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.22] pointer-events-none -z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(14, 60, 106, 0.16) 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Strategic Authority Tagline */}
        <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xs mb-6 sm:mb-7">
          <span className="flex items-center gap-1.5 text-white bg-[#0e3c6a] px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3 h-3 text-amber-300" />
            Strategic Initiative
          </span>
          <span className="text-slate-800 font-bold">Ladli Ju Welfare Trust & CNAP Skills</span>
          <span className="text-slate-300 hidden sm:inline" aria-hidden="true">•</span>
          <span className="text-slate-600 hidden sm:inline">In Partnership with Dima Hasao Autonomous Council (DHAC)</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            <h1
              className="text-3xl sm:text-4xl lg:text-[3.25rem] font-black tracking-tight text-slate-900 leading-[1.14]"
              style={{ textWrap: 'balance' }}
            >
              {currentAudience === 'student' && (
                <>
                  Skills for Employment. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0e3c6a] via-[#1a5b9e] to-sky-700">
                    Real Careers for Next-Gen Youth.
                  </span>
                </>
              )}
              {currentAudience === 'teacher' && (
                <>
                  Empowering Educators. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0e3c6a] via-[#1a5b9e] to-sky-700">
                    Master Faculty & Trainer Empanelment.
                  </span>
                </>
              )}
              {currentAudience === 'center' && (
                <>
                  Establish an Authorized <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0e3c6a] via-[#1a5b9e] to-sky-700">
                    CNAP Skill & Admission Center.
                  </span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
              Bridging the gap between formal education and sustainable corporate employment through industry-relevant
              vocational certifications, UGC-recognized university degrees, and Learn-Work-Earn hospitality apprenticeships. Starting in Dima Hasao, Assam, and expanding nationwide.
            </p>

            {/* CNAP 4-Tenet Principle Framework */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-[#0e3c6a] font-extrabold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0e3c6a]" />
                  <span>The CNAP Foundation Framework</span>
                </span>
                <span className="text-[10px] text-slate-600 font-bold bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full">
                  NEP 2020 Aligned
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-xs">
                {/* C */}
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-50/90 to-white border border-blue-100 hover:border-blue-300 hover:shadow-xs transition-all group">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-6 h-6 rounded-lg bg-[#0e3c6a] text-white font-black flex items-center justify-center text-xs shadow-2xs group-hover:scale-105 transition-transform">
                      C
                    </span>
                    <strong className="text-slate-900 font-bold">Communication</strong>
                  </div>
                  <div className="text-[11px] text-slate-500 pl-8 leading-tight">English & Soft Skills</div>
                </div>

                {/* N */}
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-sky-50/90 to-white border border-sky-100 hover:border-sky-300 hover:shadow-xs transition-all group">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-6 h-6 rounded-lg bg-sky-700 text-white font-black flex items-center justify-center text-xs shadow-2xs group-hover:scale-105 transition-transform">
                      N
                    </span>
                    <strong className="text-slate-900 font-bold">Navigation</strong>
                  </div>
                  <div className="text-[11px] text-slate-500 pl-8 leading-tight">Career Guidance</div>
                </div>

                {/* A */}
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-50/90 to-white border border-emerald-100 hover:border-emerald-300 hover:shadow-xs transition-all group">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-6 h-6 rounded-lg bg-emerald-700 text-white font-black flex items-center justify-center text-xs shadow-2xs group-hover:scale-105 transition-transform">
                      A
                    </span>
                    <strong className="text-slate-900 font-bold">Accessibility</strong>
                  </div>
                  <div className="text-[11px] text-slate-500 pl-8 leading-tight">Inclusive Reach</div>
                </div>

                {/* P */}
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-50/90 to-white border border-amber-100 hover:border-amber-300 hover:shadow-xs transition-all group">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-6 h-6 rounded-lg bg-amber-600 text-white font-black flex items-center justify-center text-xs shadow-2xs group-hover:scale-105 transition-transform">
                      P
                    </span>
                    <strong className="text-slate-900 font-bold">Profiling</strong>
                  </div>
                  <div className="text-[11px] text-slate-500 pl-8 leading-tight">Industry Matching</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={onOpenAdmission}
                className="group px-6 py-3.5 text-xs font-black text-white bg-gradient-to-r from-[#0e3c6a] via-[#12497f] to-[#185a9d] hover:from-[#0a2e52] hover:to-[#0e3c6a] active:scale-[0.98] transition-all duration-300 rounded-xl shadow-lg shadow-blue-900/20 hover:shadow-blue-900/35 flex items-center gap-2 cursor-pointer"
              >
                <GraduationCap className="w-4 h-4 text-amber-300" />
                <span>Enroll for 2026–2027 Admissions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenProposal}
                className="group px-4.5 py-3.5 text-xs font-bold text-[#0e3c6a] bg-white/95 hover:bg-blue-50/90 border border-slate-300/90 hover:border-blue-400 rounded-xl transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-xs hover:shadow-md"
              >
                <FileText className="w-4 h-4 text-[#0e3c6a] group-hover:scale-110 transition-transform" />
                <span>Strategic Roadmap (2027–2030)</span>
              </button>

              <button
                onClick={onExplorePrograms}
                className="px-4 py-3.5 text-xs font-bold text-slate-700 hover:text-[#0e3c6a] bg-slate-100/80 hover:bg-slate-200/70 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                <span>Explore All 20+ Courses</span>
              </button>
            </div>

            {/* Trust Highlights Strip */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-6 text-xs text-slate-600 pt-2 border-t border-slate-200/80">
              <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>NSDC & NSQF Aligned</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>UGC University Degrees</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Stipends up to ₹18,000 / mo</span>
              </div>
            </div>

          </div>

          {/* Right Column: Ultra-Luxury Executive Showcase Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Outer Ambient Glow Ring */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-blue-400/25 via-sky-300/20 to-amber-300/20 rounded-3xl blur-2xl opacity-75 pointer-events-none" />

            <div className="relative bg-gradient-to-b from-white/95 via-sky-50/40 to-white/95 backdrop-blur-2xl border border-blue-200/90 rounded-3xl p-5 sm:p-6 shadow-2xl shadow-blue-950/10 space-y-4 transition-all duration-500">
              
              {/* Card Header with Logo & Live Rollout Badge */}
              <div className="flex items-center justify-between border-b border-blue-100 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0e3c6a] to-[#072445] p-1.5 border border-blue-300/40 shadow-sm shrink-0 flex items-center justify-center">
                    <img
                      src="/assets/aistudio/image_ffda20d2.png"
                      alt="CNAP Logo Mark"
                      className="w-full h-full object-contain mix-blend-screen"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-black text-[#0e3c6a] tracking-wide flex items-center gap-1">
                      <span>CNAP SKILL SYSTEM</span>
                      <Award className="w-3.5 h-3.5 text-amber-500" />
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">Council Framework & Degree Architecture</div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300/60 text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>2026–2027 OPEN</span>
                </div>
              </div>

              {/* MASTERPIECE CNAP EMBLEM ARCHITECTURE SHOWCASE (Zero Checkerboard - Pure High-Res Emblem & Visiting Card Pedigree) */}
              <div className="relative rounded-2xl overflow-hidden border border-blue-900/50 bg-gradient-to-br from-[#07213d] via-[#0d345e] to-[#09223d] shadow-xl group p-4 sm:p-5">
                {/* Background Cyber Mesh & Radial Atmosphere */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-400/15 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff0f_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                {/* Top Badge Overlay */}
                <div className="relative z-10 flex items-center justify-between gap-2 mb-3.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black text-amber-300 bg-black/40 backdrop-blur-md border border-amber-400/30 shadow-xs uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    Skill Architecture
                  </span>
                  <span className="text-[10px] font-bold text-cyan-200 bg-white/10 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-white/15">
                    DHAC Council Partner
                  </span>
                </div>

                {/* Center Showcase: Polished White Pearl Medallion + 4 Pillars Grid */}
                <div className="relative z-10 flex items-center gap-4 sm:gap-5">
                  {/* Left: The crisp high-res CNAP Vector Logo (using pristine image_3210ea1e.png on luxury white frosted card, ZERO checkerboard) */}
                  <div className="relative shrink-0 flex items-center justify-center p-2.5 sm:p-3 rounded-2xl bg-white shadow-2xl border-2 border-white/90 ring-4 ring-cyan-400/20 group-hover:scale-105 group-hover:ring-amber-400/40 transition-all duration-500">
                    <img
                      src="/assets/aistudio/image_3210ea1e.png"
                      alt="CNAP Official Architectural Emblem"
                      className="h-28 sm:h-32 w-auto object-contain drop-shadow-md"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute -bottom-2 px-2 py-0.5 rounded-md bg-[#0e3c6a] text-white text-[9px] font-black uppercase tracking-wider shadow-sm border border-white/40">
                      EMBLEM
                    </div>
                  </div>

                  {/* Right: The 4 Strategic Pillars rendered with executive typographic polish */}
                  <div className="space-y-1.5 flex-1 text-left min-w-0">
                    <div className="p-1.5 px-2 rounded-lg bg-white/10 backdrop-blur-xs border border-white/10 flex items-center gap-2 group-hover:bg-white/15 transition-colors">
                      <span className="w-4 h-4 rounded bg-cyan-400 text-slate-950 font-black text-[10px] flex items-center justify-center shrink-0 shadow-2xs">
                        C
                      </span>
                      <div className="min-w-0">
                        <div className="text-[11px] font-black text-white leading-none tracking-wide">COMMUNICATION</div>
                        <div className="text-[9px] text-cyan-200/90 font-medium truncate mt-0.5">English & Soft Skills</div>
                      </div>
                    </div>

                    <div className="p-1.5 px-2 rounded-lg bg-white/10 backdrop-blur-xs border border-white/10 flex items-center gap-2 group-hover:bg-white/15 transition-colors">
                      <span className="w-4 h-4 rounded bg-sky-400 text-slate-950 font-black text-[10px] flex items-center justify-center shrink-0 shadow-2xs">
                        N
                      </span>
                      <div className="min-w-0">
                        <div className="text-[11px] font-black text-white leading-none tracking-wide">NAVIGATION</div>
                        <div className="text-[9px] text-sky-200/90 font-medium truncate mt-0.5">Career Guidance & Direction</div>
                      </div>
                    </div>

                    <div className="p-1.5 px-2 rounded-lg bg-white/10 backdrop-blur-xs border border-white/10 flex items-center gap-2 group-hover:bg-white/15 transition-colors">
                      <span className="w-4 h-4 rounded bg-emerald-400 text-slate-950 font-black text-[10px] flex items-center justify-center shrink-0 shadow-2xs">
                        A
                      </span>
                      <div className="min-w-0">
                        <div className="text-[11px] font-black text-white leading-none tracking-wide">ACCESSIBILITY</div>
                        <div className="text-[9px] text-emerald-200/90 font-medium truncate mt-0.5">Inclusive Reach & Subsidies</div>
                      </div>
                    </div>

                    <div className="p-1.5 px-2 rounded-lg bg-white/10 backdrop-blur-xs border border-white/10 flex items-center gap-2 group-hover:bg-white/15 transition-colors">
                      <span className="w-4 h-4 rounded bg-amber-400 text-slate-950 font-black text-[10px] flex items-center justify-center shrink-0 shadow-2xs">
                        P
                      </span>
                      <div className="min-w-0">
                        <div className="text-[11px] font-black text-white leading-none tracking-wide">PROFILING</div>
                        <div className="text-[9px] text-amber-200/90 font-medium truncate mt-0.5">100% Industry Skill Matching</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Verified Strip */}
                <div className="relative z-10 mt-3 pt-2.5 border-t border-white/15 flex items-center justify-between text-[10px] text-blue-200">
                  <span className="font-bold text-white flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-cyan-300" />
                    Assam Regional Framework
                  </span>
                  <span className="text-cyan-300 font-semibold">NEP 2020 & NSDC Aligned</span>
                </div>
              </div>

              {/* Director Quick Contact Strip (Naresh Kr. Gautam Desk) */}
              <div className="p-3 bg-white/95 backdrop-blur-md rounded-2xl border border-blue-200/90 shadow-2xs hover:border-blue-400 transition-all flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0e3c6a] to-[#072445] text-white flex items-center justify-center font-extrabold text-xs shrink-0 shadow-xs">
                      NG
                    </div>
                    <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 leading-tight flex items-center gap-1">
                      <span>Naresh Kr. Gautam</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-600 inline" />
                    </div>
                    <div className="text-[10px] text-slate-500">Director of Operations · Desk Active</div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2">
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="p-2 rounded-lg bg-blue-50 text-[#0e3c6a] hover:bg-[#0e3c6a] hover:text-white transition-colors border border-blue-200"
                    title={`Call Director: ${CONTACT_INFO.phoneDisplay}`}
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors border border-emerald-200"
                    title="WhatsApp Director"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                  </a>
                  <div className="text-right shrink-0 hidden sm:block">
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="font-extrabold text-[#0e3c6a] hover:text-blue-700 tabular-nums text-xs block"
                    >
                      {CONTACT_INFO.phoneDisplay}
                    </a>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-[10px] text-slate-500 hover:text-[#0e3c6a] truncate block max-w-[130px]"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* 4 Quantitative Metrics */}
              <div className="grid grid-cols-2 gap-2.5 pt-0.5">
                <div className="p-2.5 rounded-xl bg-white/95 border border-blue-100 hover:border-blue-300 hover:shadow-xs transition-all group">
                  <div className="text-xl font-black text-[#0e3c6a] tabular-nums">20+</div>
                  <div className="text-xs font-bold text-slate-800">Skill Programmes</div>
                  <div className="text-[10px] text-slate-500">Industry & Trade Aligned</div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/95 border border-blue-100 hover:border-blue-300 hover:shadow-xs transition-all group">
                  <div className="text-xl font-black text-[#0e3c6a] tabular-nums">7</div>
                  <div className="text-xs font-bold text-slate-800">University Degrees</div>
                  <div className="text-[10px] text-slate-500">BCA, BBA, B.Sc Ag Streams</div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/95 border border-blue-100 hover:border-emerald-300 hover:shadow-xs transition-all group">
                  <div className="text-xl font-black text-emerald-700 tabular-nums">₹18k/mo</div>
                  <div className="text-xs font-bold text-slate-800">Paid Internship</div>
                  <div className="text-[10px] text-slate-500">Star Hotel & Tech Tracks</div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/95 border border-blue-100 hover:border-amber-300 hover:shadow-xs transition-all group">
                  <div className="text-xl font-black text-amber-600 tabular-nums">100%</div>
                  <div className="text-xs font-bold text-slate-800">Placement Support</div>
                  <div className="text-[10px] text-slate-500">Verified Employer Network</div>
                </div>
              </div>

              {/* Council Commitment Quote */}
              <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-slate-700 italic flex items-center gap-2">
                <span className="text-[#0e3c6a] font-black text-base not-italic leading-none">“</span>
                <span className="leading-snug text-[11px]">
                  Train • Counsel • Employ • Empower. Prioritizing youth and establishing self-reliant livelihoods.
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
