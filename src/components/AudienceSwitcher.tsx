import React from 'react';
import { GraduationCap, Briefcase, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';

export type AudienceType = 'student' | 'teacher' | 'center';

interface AudienceSwitcherProps {
  currentAudience: AudienceType;
  onSelectAudience: (aud: AudienceType) => void;
  onOpenAdmission: () => void;
  onOpenTrainerModal: () => void;
  onOpenAffiliationModal: () => void;
}

export const AudienceSwitcher: React.FC<AudienceSwitcherProps> = ({
  currentAudience,
  onSelectAudience,
  onOpenAdmission,
  onOpenTrainerModal,
  onOpenAffiliationModal,
}) => {
  return (
    <section className="bg-slate-100/80 border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Audience Segment Selector */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider hidden sm:inline whitespace-nowrap">
            Personalize View For:
          </span>
          <div className="flex items-center bg-white p-1 rounded-lg border border-slate-200 shadow-xs w-full sm:w-auto overflow-x-auto">
            <button
              onClick={() => onSelectAudience('student')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-all cursor-pointer ${
                currentAudience === 'student'
                  ? 'bg-[#0e3c6a] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Students & Youth</span>
            </button>
            <button
              onClick={() => onSelectAudience('teacher')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-all cursor-pointer ${
                currentAudience === 'teacher'
                  ? 'bg-[#0e3c6a] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Teachers & Trainers</span>
            </button>
            <button
              onClick={() => onSelectAudience('center')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-all cursor-pointer ${
                currentAudience === 'center'
                  ? 'bg-[#0e3c6a] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Admission Centers & Partners</span>
            </button>
          </div>
        </div>

        {/* Right: Quick Contextual Action for Current Role */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end text-xs">
          {currentAudience === 'student' && (
            <>
              <span className="text-slate-600 hidden sm:flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Stipend-backed internships & 100% placement track
              </span>
              <button
                onClick={onOpenAdmission}
                className="flex items-center gap-1 text-[#0e3c6a] font-bold hover:underline cursor-pointer"
              >
                <span>Student Application Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </>
          )}

          {currentAudience === 'teacher' && (
            <>
              <span className="text-slate-600 hidden sm:flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Empaneling Master Trainers in AI, CAD, SOC & ECCE
              </span>
              <button
                onClick={onOpenTrainerModal}
                className="flex items-center gap-1 text-[#0e3c6a] font-bold hover:underline cursor-pointer"
              >
                <span>Faculty Empanelment Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </>
          )}

          {currentAudience === 'center' && (
            <>
              <span className="text-slate-600 hidden sm:flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Authorized franchise, district MoUs & verified leads
              </span>
              <button
                onClick={onOpenAffiliationModal}
                className="flex items-center gap-1 text-[#0e3c6a] font-bold hover:underline cursor-pointer"
              >
                <span>Center Affiliation Request</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
