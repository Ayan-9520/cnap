import React from 'react';
import { GraduationCap, Briefcase, Building2, CheckCircle2, ArrowRight, ShieldCheck, Download, Award, Users } from 'lucide-react';
import { AudienceType } from './AudienceSwitcher';

interface AudiencePortalsProps {
  currentAudience: AudienceType;
  onOpenAdmission: () => void;
  onOpenTrainerModal: () => void;
  onOpenAffiliationModal: () => void;
  onOpenVerificationModal: () => void;
}

export const AudiencePortals: React.FC<AudiencePortalsProps> = ({
  currentAudience,
  onOpenAdmission,
  onOpenTrainerModal,
  onOpenAffiliationModal,
  onOpenVerificationModal,
}) => {
  return (
    <section className="py-16 bg-white border-b border-slate-200" id="audiences">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold text-[#0e3c6a] uppercase tracking-wider mb-2">
            Tailored Engagement Framework
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900" style={{ textWrap: 'balance' }}>
            Built for Students, Teachers & Partner Centers
          </h2>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Every stakeholder is supported with specialized resources, institutional governance, and dedicated operations desks.
          </p>
        </div>

        {/* 3 Major Audience Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Students */}
          <div
            className={`rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
              currentAudience === 'student'
                ? 'border-[#0e3c6a] ring-2 ring-[#0e3c6a]/20 bg-blue-50/30 shadow-lg'
                : 'border-slate-200/90 bg-white hover:border-blue-300 shadow-xs'
            }`}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0e3c6a] flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                For Students & Youth
              </h3>
              <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                Transform from high-school or degree learner to industry-demanded professional through structured career guidance, hands-on lab training, and corporate stipends.
              </p>

              <div className="space-y-3 text-xs text-slate-700 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Learn, Work & Earn:</strong> Monthly stipends up to ₹18,000 during hotel & technical apprenticeships.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>NSDC & Degree Linkage:</strong> Government-recognized NSQF certifications and UGC university degrees.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>100% Placement Cell:</strong> Dedicated career counselling led by former SRM & corporate placement leaders.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Regional Hostel & Lab Access:</strong> Dedicated student facilities in Dima Hasao, Assam.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200/80 space-y-2">
              <button
                onClick={onOpenAdmission}
                className="w-full py-2.5 text-xs font-bold text-white bg-[#0e3c6a] hover:bg-[#0a2e52] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Student Admission Application</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onOpenVerificationModal}
                className="w-full py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer text-center"
              >
                Online Certificate & Roll Verification
              </button>
            </div>
          </div>

          {/* Card 2: Teachers & Trainers */}
          <div
            className={`rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
              currentAudience === 'teacher'
                ? 'border-[#0e3c6a] ring-2 ring-[#0e3c6a]/20 bg-blue-50/30 shadow-lg'
                : 'border-slate-200/90 bg-white hover:border-blue-300 shadow-xs'
            }`}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-[#0e3c6a] flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                For Teachers & Trainers
              </h3>
              <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                Join our national academic and vocational faculty. We invite master trainers, engineers, and educational counsellors to conduct NSQF-aligned courses.
              </p>

              <div className="space-y-3 text-xs text-slate-700 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>Faculty Empanelment:</strong> Master trainer openings across Cybersecurity, SolidWorks, Automation, & ECCE.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>Train-The-Trainer (ToT):</strong> NSDC certified pedagogical and lab simulation modules.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>Standardized Lesson Plans:</strong> Digital smart classroom decks, lab equipment guides, and assessment rubrics.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>Competitive Honorariums:</strong> Attractive session-based and permanent monthly remuneration packages.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200/80 space-y-2">
              <button
                onClick={onOpenTrainerModal}
                className="w-full py-2.5 text-xs font-bold text-white bg-[#0e3c6a] hover:bg-[#0a2e52] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Join Faculty / Empanel as Trainer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="#council"
                className="block w-full py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-center"
              >
                View Academic Advisory Board
              </a>
            </div>
          </div>

          {/* Card 3: Admission Centers & Institutional Partners */}
          <div
            className={`rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
              currentAudience === 'center'
                ? 'border-[#0e3c6a] ring-2 ring-[#0e3c6a]/20 bg-blue-50/30 shadow-lg'
                : 'border-slate-200/90 bg-white hover:border-blue-300 shadow-xs'
            }`}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                For Admission Centers & Partners
              </h3>
              <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                Become an authorized CNAP Skill Development & Admission Center. Partner with colleges, schools, and training institutes across India and the North-East.
              </p>

              <div className="space-y-3 text-xs text-slate-700 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Turnkey Center Setup:</strong> Detailed hardware specifications, lab setups, and branding kits.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Student Admission CRM:</strong> Direct student inquiries, regional marketing campaigns, and lead assistance.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>University & NSDC Linkages:</strong> Formal MoUs under Ladli Ju Welfare Trust and authorized bodies.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Sustainable Revenue Model:</strong> High-yield institutional revenue sharing on course & degree enrollments.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200/80 space-y-2">
              <button
                onClick={onOpenAffiliationModal}
                className="w-full py-2.5 text-xs font-bold text-white bg-[#0e3c6a] hover:bg-[#0a2e52] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Request Center Affiliation & MoU</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="#centers"
                className="block w-full py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-center"
              >
                Explore Authorized Centers Directory
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
