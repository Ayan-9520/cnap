import React, { useState } from 'react';
import { Calendar, Download, FileText, CheckCircle2, ChevronRight, Layers, ExternalLink } from 'lucide-react';

interface ProposalRoadmapProps {
  onOpenProposal: () => void;
}

export const ProposalRoadmap: React.FC<ProposalRoadmapProps> = ({ onOpenProposal }) => {
  const [activePhase, setActivePhase] = useState<'phase1' | 'phase2' | 'phase3'>('phase1');

  return (
    <section className="py-16 bg-slate-100 border-b border-slate-200" id="roadmap">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with proposal context */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold text-[#0e3c6a] uppercase tracking-wider mb-2">
              Strategic Roadmap & Council Masterplan
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900" style={{ textWrap: 'balance' }}>
              Rollout Plan: 2027 to 2030
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl">
              Phased, demand-driven implementation designed by Ladli Ju Welfare Trust in proposal to the Dima Hasao Autonomous Council (DHAC).
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="/assets/aistudio/Ladli_Ju_Skill_Development_Proposal_Powerful_21b4d8e2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-xs font-bold text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors flex items-center gap-2 shadow-2xs"
            >
              <Download className="w-3.5 h-3.5 text-[#0e3c6a]" />
              <span>Download Proposal PDF</span>
            </a>
            <button
              onClick={onOpenProposal}
              className="px-4 py-2.5 text-xs font-bold text-white bg-[#0e3c6a] hover:bg-[#0a2e52] rounded-lg transition-colors flex items-center gap-2 shadow-2xs cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Interactive Viewer</span>
            </button>
          </div>
        </div>

        {/* 4 Pillars Timeline at a Glance */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          <button
            onClick={() => setActivePhase('phase1')}
            className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
              activePhase === 'phase1'
                ? 'bg-[#0e3c6a] border-[#0e3c6a] text-white shadow-md'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${activePhase === 'phase1' ? 'text-amber-300' : 'text-[#0e3c6a]'}`}>
              Jan – Jun 2027
            </div>
            <div className="text-base font-bold mb-1">Skills First (Phase 1)</div>
            <p className={`text-xs ${activePhase === 'phase1' ? 'text-slate-200' : 'text-slate-500'}`}>
              Cybersecurity, CAD/SolidWorks, Automation & Entrepreneurship.
            </p>
          </button>

          <button
            onClick={() => setActivePhase('phase2')}
            className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
              activePhase === 'phase2'
                ? 'bg-[#0e3c6a] border-[#0e3c6a] text-white shadow-md'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${activePhase === 'phase2' ? 'text-amber-300' : 'text-[#0e3c6a]'}`}>
              Jul – Dec 2027
            </div>
            <div className="text-base font-bold mb-1">Degrees Begin (Phase 2A)</div>
            <p className={`text-xs ${activePhase === 'phase2' ? 'text-slate-200' : 'text-slate-500'}`}>
              Commerce, BCA, B.Tech CS, Hospitality Management & Media.
            </p>
          </button>

          <button
            onClick={() => setActivePhase('phase2')}
            className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
              activePhase === 'phase2'
                ? 'bg-[#0e3c6a] border-[#0e3c6a] text-white shadow-md'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${activePhase === 'phase2' ? 'text-amber-300' : 'text-[#0e3c6a]'}`}>
              2028 Onwards
            </div>
            <div className="text-base font-bold mb-1">Degrees Expand (Phase 2B)</div>
            <p className={`text-xs ${activePhase === 'phase2' ? 'text-slate-200' : 'text-slate-500'}`}>
              Agriculture Sciences, Legal Studies (LL.B), Yoga & Sports.
            </p>
          </button>

          <button
            onClick={() => setActivePhase('phase3')}
            className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
              activePhase === 'phase3'
                ? 'bg-[#0e3c6a] border-[#0e3c6a] text-white shadow-md'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${activePhase === 'phase3' ? 'text-amber-300' : 'text-[#0e3c6a]'}`}>
              2028 – 2030
            </div>
            <div className="text-base font-bold mb-1">Doctoral Research</div>
            <p className={`text-xs ${activePhase === 'phase3' ? 'text-slate-200' : 'text-slate-500'}`}>
              Ph.D. programmes across 10 specialized fields under UGC guidelines.
            </p>
          </button>
        </div>

        {/* Phase Details Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          {activePhase === 'phase1' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2">
                <div>
                  <span className="text-xs font-bold uppercase text-[#0e3c6a] tracking-wider">
                    Phase 1 (2027): Job-Ready Skills from Day One
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Direct Hands-On Vocational Excellence & Certifications
                  </h3>
                </div>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-md">
                  Target: 1,200+ Regional Youth Enrolled
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">
                    1A: Cybersecurity and IT (Jan–Mar 2027)
                  </div>
                  <p className="text-xs text-slate-600 mb-2">
                    Cybersecurity & Digital Forensics; Ethical Hacking; SOC Analysis; Cloud & App Security; GRC Auditing; AI Tools.
                  </p>
                  <div className="text-[11px] text-slate-500 italic">
                    Key Activity: Finalize curricula, appoint trainers, establish computer labs & certification partnerships.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">
                    1B: Design, Engineering & Manufacturing (Jan–Jun 2027)
                  </div>
                  <p className="text-xs text-slate-600 mb-2">
                    Product Design & Development; SolidWorks; AutoCAD & 3D Design; Machine Design; Fabrication Design.
                  </p>
                  <div className="text-[11px] text-slate-500 italic">
                    Key Activity: Arrange CAD workstations, appoint mechanical faculty & initiate live industrial simulations.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">
                    1C: Technical Trades & Automation (Apr–Jun 2027)
                  </div>
                  <p className="text-xs text-slate-600 mb-2">
                    Industrial Automation; PLC and HMI; Construction Electrician; Robotics & Mechatronics; HVAC & Food Processing.
                  </p>
                  <div className="text-[11px] text-slate-500 italic">
                    Key Activity: Practical workshops, safety gear setup, and capital goods skill council integration.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">
                    1D: Entrepreneurship & Business Development (Apr–Jun 2027)
                  </div>
                  <p className="text-xs text-slate-600 mb-2">
                    Startup modules, bankable DPR preparation, business planning workshops, local enterprise & market linkages.
                  </p>
                  <div className="text-[11px] text-slate-500 italic">
                    Key Activity: Mentorship by enterprise founders, PMEGP credit linkages, and seed venture pitches.
                  </div>
                </div>
              </div>
            </div>
          )}

          {activePhase === 'phase2' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2">
                <div>
                  <span className="text-xs font-bold uppercase text-[#0e3c6a] tracking-wider">
                    Phase 2 (2027–2028): Formal University Degrees & Specialized Disciplines
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    UGC Recognized Undergraduate & Postgraduate Degree Streams
                  </h3>
                </div>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-md">
                  State & Central University Affiliations
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">
                    Commerce & Management
                  </div>
                  <p className="text-xs text-slate-600 mb-2">
                    BBA, B.Com, BHM, MBA, M.Com, MHM, and Diploma in Hotel Management with corporate specializations.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">
                    Computer Science & Tech
                  </div>
                  <p className="text-xs text-slate-600 mb-2">
                    BCA, B.Tech Computer Science, Diploma in CS, and integrated Cloud Computing specializations.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">
                    Agriculture & Science
                  </div>
                  <p className="text-xs text-slate-600 mb-2">
                    B.Sc. (Hons.) Agriculture, M.Sc. Agriculture, Rural Agribusiness and regional mountain organic farming.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">
                    Legal Studies
                  </div>
                  <p className="text-xs text-slate-600 mb-2">
                    BA LL.B., B.Com. LL.B., 3-Year LL.B., and Master of Laws (LL.M.) with dedicated moot court facilities.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">
                    Hospitality & Hotel Admin
                  </div>
                  <p className="text-xs text-slate-600 mb-2">
                    B.Sc. HHA, Culinary Arts, Food & Beverage, Tourism, Aviation and Cruise Hospitality management.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">
                    Humanities, Arts & Media
                  </div>
                  <p className="text-xs text-slate-600 mb-2">
                    Bachelor of Design (B.Des), BJMC Journalism & Mass Media, and regional developmental humanities.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activePhase === 'phase3' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2">
                <div>
                  <span className="text-xs font-bold uppercase text-[#0e3c6a] tracking-wider">
                    Phase 3 (2028–2030): Research & Doctoral Excellence
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Ph.D. Fellowships across 10 Fields of Applied Research
                  </h3>
                </div>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-md">
                  UGC Research Regulations Compliant
                </span>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  Ph.D. programmes mapped across: <strong>Commerce and Management, Science, Humanities and Arts, Agriculture, Yoga & Sports, Law, Media, Computer Science, Engineering, and Cybersecurity</strong>.
                </p>
                <div className="text-xs text-slate-600">
                  Doctoral research will prioritize local biodiversity, agro-economic empowerment, regional governance, and tribal heritage documentation alongside high-tech applications.
                </div>
              </div>
            </div>
          )}

          {/* Six Steps from Proposal OCR */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Proposal Methodology: From Assessment to Sustainable Employment (6 Steps)
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                <span className="font-bold text-[#0e3c6a]">01.</span> Assess local skill gaps & council needs
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                <span className="font-bold text-[#0e3c6a]">02.</span> Identify priority courses & student demand
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                <span className="font-bold text-[#0e3c6a]">03.</span> Arrange certified trainers & practical labs
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                <span className="font-bold text-[#0e3c6a]">04.</span> Develop industry linkages & certifications
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                <span className="font-bold text-[#0e3c6a]">05.</span> Structured career counselling & mentorship
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                <span className="font-bold text-[#0e3c6a]">06.</span> Monitor completion, employment & enterprise
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
