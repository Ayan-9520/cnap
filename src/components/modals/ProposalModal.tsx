import React, { useState } from 'react';
import { X, FileText, CheckCircle2, ShieldCheck, Sparkles, Building, Layers, Users, PhoneCall, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../../data/leadership';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAdmission: () => void;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({
  isOpen,
  onClose,
  onOpenAdmission,
}) => {
  const [activeTab, setActiveTab] = useState<'objectives' | 'matrix' | 'governance'>('objectives');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col border border-slate-200 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-[#0e3c6a] to-[#082b4d] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center font-bold text-amber-300">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>Council Strategic Masterplan & Blueprint</span>
                <span className="text-[10px] font-mono uppercase bg-amber-400 text-slate-950 px-2 py-0.5 rounded font-bold">
                  2027–2030
                </span>
              </h3>
              <p className="text-xs text-blue-200">
                Ladli Ju Welfare Trust · Strategic Initiative for Dima Hasao Autonomous Council (DHAC) & Assam
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 text-blue-200 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3 gap-2 overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('objectives')}
            className={`pb-3 px-3 text-xs font-bold transition-all relative whitespace-nowrap cursor-pointer ${
              activeTab === 'objectives' ? 'text-[#0e3c6a]' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Executive Summary & 10 Objectives
            {activeTab === 'objectives' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0e3c6a]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('matrix')}
            className={`pb-3 px-3 text-xs font-bold transition-all relative whitespace-nowrap cursor-pointer ${
              activeTab === 'matrix' ? 'text-[#0e3c6a]' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Skill, Degree & Ph.D. Roadmap
            {activeTab === 'matrix' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0e3c6a]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('governance')}
            className={`pb-3 px-3 text-xs font-bold transition-all relative whitespace-nowrap cursor-pointer ${
              activeTab === 'governance' ? 'text-[#0e3c6a]' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Governance & Regional Council Tie-up
            {activeTab === 'governance' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0e3c6a]" />
            )}
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'objectives' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Executive Mission Banner */}
              <div className="p-5 rounded-xl bg-gradient-to-r from-slate-900 to-[#0e3c6a] text-white space-y-3 shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 font-bold">
                    Official Strategic Mission
                  </span>
                  <span className="text-xs text-blue-200">Target Rollout: 2027</span>
                </div>
                <h4 className="text-base sm:text-lg font-extrabold text-white">
                  "Train • Counsel • Employ • Empower"
                </h4>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Building a skilled, self-reliant generation of youth in Dima Hasao, Assam.
                  Prioritizing eligible local youth, bridging industry skill gaps with NSDC/NSQF certifications,
                  and connecting classroom learning directly to sustainable regional livelihoods.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs">
                  <div className="bg-white/10 p-2 rounded-lg border border-white/10">
                    <span className="block font-bold text-amber-300 text-sm">20+</span>
                    <span className="text-[11px] text-slate-300">Skill Certifications</span>
                  </div>
                  <div className="bg-white/10 p-2 rounded-lg border border-white/10">
                    <span className="block font-bold text-amber-300 text-sm">7 Streams</span>
                    <span className="text-[11px] text-slate-300">University Degrees</span>
                  </div>
                  <div className="bg-white/10 p-2 rounded-lg border border-white/10">
                    <span className="block font-bold text-emerald-300 text-sm">100%</span>
                    <span className="text-[11px] text-slate-300">Placement Assistance</span>
                  </div>
                  <div className="bg-white/10 p-2 rounded-lg border border-white/10">
                    <span className="block font-bold text-sky-300 text-sm">₹18,000</span>
                    <span className="text-[11px] text-slate-300">Monthly Stipends</span>
                  </div>
                </div>
              </div>

              {/* 10 Objectives Grid */}
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                  The 10 Council Strategic Objectives
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 hover:bg-blue-50/50 rounded-xl border border-slate-200 transition-colors">
                    <strong className="text-slate-900 block mb-1">1. Skill Development</strong>
                    <p className="text-slate-600">Vocational, technical, digital, and professional training aligned with NSDC/NSQF standards.</p>
                  </div>
                  <div className="p-3 bg-slate-50 hover:bg-blue-50/50 rounded-xl border border-slate-200 transition-colors">
                    <strong className="text-slate-900 block mb-1">2. Employment Generation</strong>
                    <p className="text-slate-600">Corporate partnerships, recruitment drives, and direct job-oriented industrial training.</p>
                  </div>
                  <div className="p-3 bg-slate-50 hover:bg-blue-50/50 rounded-xl border border-slate-200 transition-colors">
                    <strong className="text-slate-900 block mb-1">3. Structured Career Guidance</strong>
                    <p className="text-slate-600">Continuous career counseling on higher education pathways and industry trends.</p>
                  </div>
                  <div className="p-3 bg-slate-50 hover:bg-blue-50/50 rounded-xl border border-slate-200 transition-colors">
                    <strong className="text-slate-900 block mb-1">4. Entrepreneurship Promotion</strong>
                    <p className="text-slate-600">Enterprise training, business incubation, and micro-credit linkages for startups.</p>
                  </div>
                  <div className="p-3 bg-slate-50 hover:bg-blue-50/50 rounded-xl border border-slate-200 transition-colors">
                    <strong className="text-slate-900 block mb-1">5. Local Youth Empowerment</strong>
                    <p className="text-slate-600">First-priority access for eligible tribal and rural youth of Dima Hasao and Assam.</p>
                  </div>
                  <div className="p-3 bg-slate-50 hover:bg-blue-50/50 rounded-xl border border-slate-200 transition-colors">
                    <strong className="text-slate-900 block mb-1">6. Industry & Institutional Collaboration</strong>
                    <p className="text-slate-600">MoUs with universities, sector skill councils, and corporate employers.</p>
                  </div>
                  <div className="p-3 bg-slate-50 hover:bg-blue-50/50 rounded-xl border border-slate-200 transition-colors">
                    <strong className="text-slate-900 block mb-1">7. Digital Literacy & Modern Tools</strong>
                    <p className="text-slate-600">Practical computing, AI productivity tools, communication, and workplace readiness.</p>
                  </div>
                  <div className="p-3 bg-slate-50 hover:bg-blue-50/50 rounded-xl border border-slate-200 transition-colors">
                    <strong className="text-slate-900 block mb-1">8. Inclusive Development</strong>
                    <p className="text-slate-600">Equitable opportunities for underserved and marginalized youth across all districts.</p>
                  </div>
                  <div className="p-3 bg-slate-50 hover:bg-blue-50/50 rounded-xl border border-slate-200 transition-colors">
                    <strong className="text-slate-900 block mb-1">9. Sustainable Livelihoods</strong>
                    <p className="text-slate-600">Economic independence through market-linked wages and hospitality apprenticeships.</p>
                  </div>
                  <div className="p-3 bg-slate-50 hover:bg-blue-50/50 rounded-xl border border-slate-200 transition-colors">
                    <strong className="text-slate-900 block mb-1">10. Regional Development</strong>
                    <p className="text-slate-600">Retaining regional human talent within Assam to foster economic self-reliance.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'matrix' && (
            <div className="space-y-6 animate-in fade-in duration-300 text-xs">
              <div className="border border-blue-200 rounded-xl p-5 bg-blue-50/60">
                <h4 className="text-sm font-bold text-[#0e3c6a] mb-2">Phase 1: Skill Certifications (Jan – Jun 2027)</h4>
                <p className="text-slate-600 mb-3">
                  Vocational programs in Cybersecurity SOC, SolidWorks Mechanical CAD, Industrial Automation PLC, Solar PV Tech, Drone Piloting, and Pre-School ECCE Facilitation.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
                  <span className="p-2 bg-white rounded border border-blue-200">Cybersecurity Analyst (6 Mos)</span>
                  <span className="p-2 bg-white rounded border border-blue-200">Mechanical CAD / SolidWorks (6 Mos)</span>
                  <span className="p-2 bg-white rounded border border-blue-200">PLC Industrial Automation (6 Mos)</span>
                  <span className="p-2 bg-white rounded border border-blue-200">ECCE Child Educator (12 Mos)</span>
                  <span className="p-2 bg-white rounded border border-blue-200">Solar & Renewable Tech (6 Mos)</span>
                  <span className="p-2 bg-white rounded border border-blue-200">Hospitality Dual Track (12 Mos)</span>
                </div>
              </div>

              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
                <h4 className="text-sm font-bold text-slate-900 mb-2">Phase 2: UGC University Degrees (2027 – 2028)</h4>
                <p className="text-slate-600 mb-3">
                  Undergraduate & postgraduate degree programs in Commerce, Computer Applications, Agricultural Science, Business Administration, and Media Studies.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
                  <span className="p-2 bg-white rounded border border-slate-200">BCA (Cloud & AI Specialization)</span>
                  <span className="p-2 bg-white rounded border border-slate-200">BBA (Retail & Entrepreneurship)</span>
                  <span className="p-2 bg-white rounded border border-slate-200">B.Sc. Agriculture (4-Year ICAR)</span>
                  <span className="p-2 bg-white rounded border border-slate-200">BHM Hospitality Management</span>
                  <span className="p-2 bg-white rounded border border-slate-200">B.A. Journalism & Mass Media</span>
                  <span className="p-2 bg-white rounded border border-slate-200">M.Sc. Information Technology</span>
                </div>
              </div>

              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
                <h4 className="text-sm font-bold text-slate-900 mb-2">Phase 3: Ph.D. Research Fellowships (2028 – 2030)</h4>
                <p className="text-slate-600">
                  Doctoral research across 10 specialized disciplines under UGC guidelines: Commerce, Management, Science, Humanities, Agriculture, Sports Science, Law, Media, Computer Science, and Cybersecurity.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'governance' && (
            <div className="space-y-5 animate-in fade-in duration-300 text-xs">
              <div className="p-4 bg-slate-900 text-white rounded-xl space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Institutional Framework & MoUs</span>
                </h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  The initiative operates under the auspices of Ladli Ju Welfare Trust in direct coordination with the Dima Hasao Autonomous Council (DHAC), Haflong, Assam.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <h5 className="font-bold text-slate-900">Regional Executive Desk</h5>
                  <div className="text-slate-600 space-y-1">
                    <div><strong>Operations Lead:</strong> {CONTACT_INFO.directorName}</div>
                    <div><strong>Helpline:</strong> {CONTACT_INFO.phoneDisplay}</div>
                    <div><strong>Email:</strong> {CONTACT_INFO.email}</div>
                    <div><strong>Office:</strong> Haflong, Dima Hasao, Assam – 788819</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <h5 className="font-bold text-slate-900">Advisory Council Affiliation</h5>
                  <p className="text-slate-600 leading-relaxed">
                    Governed by a council of academic directors, former deans, and senior researchers from SRM, Amity, RICS, and IIM alum networks.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="text-[#0e3c6a] font-bold hover:underline flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call Helpline: {CONTACT_INFO.phoneDisplay}</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenAdmission();
              }}
              className="px-6 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#0e3c6a] to-[#0a2e52] hover:from-[#0a2e52] hover:to-[#071c33] active:scale-[0.98] rounded-xl shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>Enroll for 2026–2027 Admissions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
