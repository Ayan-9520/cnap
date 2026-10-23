import React from 'react';
import { FileText, ArrowRight, CheckCircle2, ShieldCheck, Compass, Sparkles, UserCheck } from 'lucide-react';
import { AudienceType } from './AudienceSwitcher';

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
    <section className="relative overflow-hidden bg-white text-slate-900 pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-200">
      {/* Subtle geometric dot matrix background */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(14, 60, 106, 0.08) 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Subtitle / Regional Trust Bar */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600 mb-6">
          <span className="text-[#0e3c6a] bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded uppercase tracking-wider text-[11px] font-bold">
            Strategic Initiative
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Ladli Ju Welfare Trust & CNAP Skills</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>In Partnership with Dima Hasao Autonomous Council (DHAC)</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight"
              style={{ textWrap: 'balance' }}
            >
              {currentAudience === 'student' && (
                <>
                  Skills for Employment. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0e3c6a] via-blue-700 to-indigo-800">
                    Real Careers for Next-Gen Youth.
                  </span>
                </>
              )}
              {currentAudience === 'teacher' && (
                <>
                  Empowering Educators. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0e3c6a] via-blue-700 to-indigo-800">
                    Master Faculty & Trainer Empanelment.
                  </span>
                </>
              )}
              {currentAudience === 'center' && (
                <>
                  Establish an Authorized <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0e3c6a] via-blue-700 to-indigo-800">
                    CNAP Skill & Admission Center.
                  </span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
              Bridging the gap between education and sustainable employment through industry-relevant
              vocational certifications, university degrees, and Learn-Work-Earn hospitality apprenticeships.
              Starting in Dima Hasao, Assam, and expanding nationwide.
            </p>

            {/* CNAP 4-Tenet Principle Grid */}
            <div className="pt-3 pb-3 border-y border-slate-200">
              <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2.5">
                The CNAP Foundation Framework
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-blue-50/70 border border-blue-100">
                  <span className="w-7 h-7 rounded bg-[#0e3c6a] text-white font-bold flex items-center justify-center shrink-0 text-xs shadow-2xs">C</span>
                  <div>
                    <div className="font-bold text-slate-900">Communication</div>
                    <div className="text-[11px] text-slate-500">English & Soft Skills</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-sky-50/70 border border-sky-100">
                  <span className="w-7 h-7 rounded bg-sky-700 text-white font-bold flex items-center justify-center shrink-0 text-xs shadow-2xs">N</span>
                  <div>
                    <div className="font-bold text-slate-900">Navigation</div>
                    <div className="text-[11px] text-slate-500">Career Guidance</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-emerald-50/70 border border-emerald-100">
                  <span className="w-7 h-7 rounded bg-emerald-700 text-white font-bold flex items-center justify-center shrink-0 text-xs shadow-2xs">A</span>
                  <div>
                    <div className="font-bold text-slate-900">Accessibility</div>
                    <div className="text-[11px] text-slate-500">Inclusive Reach</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-amber-50/70 border border-amber-100">
                  <span className="w-7 h-7 rounded bg-amber-600 text-white font-bold flex items-center justify-center shrink-0 text-xs shadow-2xs">P</span>
                  <div>
                    <div className="font-bold text-slate-900">Profiling</div>
                    <div className="text-[11px] text-slate-500">Industry Matching</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onOpenAdmission}
                className="px-6 py-3 text-xs font-bold text-white bg-[#0e3c6a] hover:bg-[#0a2e52] active:scale-[0.98] transition-all rounded-lg shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Enroll for 2026–2027 Admissions</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenProposal}
                className="px-5 py-3 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-2xs"
              >
                <FileText className="w-4 h-4 text-[#0e3c6a]" />
                <span>View Council Proposal (PDF)</span>
              </button>

              <button
                onClick={onExplorePrograms}
                className="px-3 py-3 text-xs font-semibold text-[#0e3c6a] hover:text-[#0a2e52] transition-colors underline underline-offset-4 cursor-pointer"
              >
                Browse All 20+ Skill Tracks
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-600 pt-1">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>NSDC / NSQF Aligned Curricula</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>UGC University Degrees Linkage</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Stipends up to ₹18,000 / month</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase Card (Refined Light Blue Theme) */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-[#f2f7fc] to-[#e4effa] border border-blue-200/90 rounded-2xl p-6 shadow-xl relative space-y-5">
              {/* Card Header with CNAP Logo */}
              <div className="flex items-center justify-between border-b border-blue-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-950 p-1 border border-blue-200 shadow-2xs shrink-0 flex items-center justify-center">
                    <img
                      src="/assets/aistudio/image_ffda20d2.png"
                      alt="CNAP Logo Mark"
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-[#0e3c6a] tracking-wide">CNAP SKILL SYSTEM</div>
                    <div className="text-xs text-slate-600 font-medium">Communication · Navigation · Accessibility · Profiling</div>
                  </div>
                </div>
                <span className="text-[11px] font-mono font-bold text-[#0e3c6a] bg-blue-100/90 px-2 py-0.5 rounded border border-blue-300/60">
                  EST. 2027 ROLLOUT
                </span>
              </div>

              {/* Verified Visual representation with official emblem */}
              <div className="space-y-3">
                <div className="relative rounded-xl overflow-hidden border border-blue-300/80 bg-[#0e3c6a] group shadow-md">
                  <img
                    src="/assets/aistudio/image_33697ea2.png"
                    alt="CNAP - Communication Navigation Accessibility Profiling Official Emblem"
                    className="w-full h-52 sm:h-56 object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex flex-col justify-end p-4 pointer-events-none">
                    <div className="text-[11px] font-bold text-amber-300 tracking-wide uppercase">
                      Official Skill Architecture Emblem
                    </div>
                    <div className="text-sm font-bold text-white flex items-center justify-between">
                      <span>CNAP Framework</span>
                      <span className="text-xs font-normal text-slate-200">Communication · Navigation · Accessibility · Profiling</span>
                    </div>
                  </div>
                </div>

                {/* Director Quick Contact Strip */}
                <div className="p-3 bg-white rounded-xl border border-blue-200/80 shadow-2xs flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#0e3c6a] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                      NG
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 leading-tight">Naresh Kr. Gautam</div>
                      <div className="text-[11px] text-slate-500">Strategic Director & Operations Lead</div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <a
                      href="tel:9716111113"
                      className="font-bold text-[#0e3c6a] hover:underline tabular-nums text-xs block"
                    >
                      +91 97161 11113
                    </a>
                    <a
                      href="mailto:nareshgautam1981@gmail.com"
                      className="text-[11px] text-slate-600 hover:text-[#0e3c6a] truncate block max-w-[140px] sm:max-w-none"
                    >
                      nareshgautam1981@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* 4 Quantitative Metrics (Proposal at a Glance) */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-white border border-blue-100 shadow-2xs">
                  <div className="text-2xl font-extrabold text-[#0e3c6a] tabular-nums">20+</div>
                  <div className="text-xs font-bold text-slate-800">Skill Programmes</div>
                  <div className="text-[11px] text-slate-500">Launching 2027 in Dima Hasao</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-blue-100 shadow-2xs">
                  <div className="text-2xl font-extrabold text-[#0e3c6a] tabular-nums">7</div>
                  <div className="text-xs font-bold text-slate-800">University Degree Streams</div>
                  <div className="text-[11px] text-slate-500">From 2027 to 2028</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-blue-100 shadow-2xs">
                  <div className="text-2xl font-extrabold text-emerald-700 tabular-nums">10</div>
                  <div className="text-xs font-bold text-slate-800">Ph.D. Research Fields</div>
                  <div className="text-[11px] text-slate-500">UGC Compliant by 2030</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-blue-100 shadow-2xs">
                  <div className="text-2xl font-extrabold text-amber-600 tabular-nums">7+</div>
                  <div className="text-xs font-bold text-slate-800">Distinguished Leaders</div>
                  <div className="text-[11px] text-slate-500">SRM, Amity, RICS, IIM Alum</div>
                </div>
              </div>

              {/* Quote / Mission commitment */}
              <p className="text-xs text-slate-700 italic border-l-2 border-[#0e3c6a] pl-3 py-1 bg-white/70 rounded-r-lg">
                "Train • Counsel • Employ • Empower. Prioritizing local youth and building a self-reliant generation."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
