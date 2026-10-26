import React from 'react';
import { GraduationCap, Briefcase, Building2, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

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
    <section className="bg-gradient-to-r from-blue-50/70 via-white to-blue-50/70 border-b border-slate-200/80 py-2.5 px-4 sm:px-6 lg:px-8 relative z-20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
        
        {/* Left: Audience Segment Selector */}
        <div className="flex items-center gap-2.5 w-full md:w-auto">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider hidden lg:inline whitespace-nowrap">
            Personalize View For:
          </span>
          
          <div className="flex items-center bg-white/90 backdrop-blur-md p-1 rounded-xl border border-slate-200/90 shadow-2xs w-full sm:w-auto overflow-x-auto">
            <button
              onClick={() => onSelectAudience('student')}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                currentAudience === 'student'
                  ? 'bg-gradient-to-r from-[#0e3c6a] to-[#174d82] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Students & Youth</span>
            </button>

            <button
              onClick={() => onSelectAudience('teacher')}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                currentAudience === 'teacher'
                  ? 'bg-gradient-to-r from-[#0e3c6a] to-[#174d82] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Teachers & Trainers</span>
            </button>

            <button
              onClick={() => onSelectAudience('center')}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                currentAudience === 'center'
                  ? 'bg-gradient-to-r from-[#0e3c6a] to-[#174d82] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Admission Centers & Partners</span>
            </button>
          </div>
        </div>

        {/* Right: Quick Contextual Action for Current Role */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end text-xs">
          {currentAudience === 'student' && (
            <>
              <span className="text-slate-600 hidden sm:flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Stipend-backed internships & 100% placement track
              </span>
              <button
                onClick={onOpenAdmission}
                className="flex items-center gap-1 text-[#0e3c6a] font-extrabold hover:underline cursor-pointer group"
              >
                <span>Student Application Portal</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </>
          )}

          {currentAudience === 'teacher' && (
            <>
              <span className="text-slate-600 hidden sm:flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Empaneling Master Trainers in AI, CAD, SOC & ECCE
              </span>
              <button
                onClick={onOpenTrainerModal}
                className="flex items-center gap-1 text-[#0e3c6a] font-extrabold hover:underline cursor-pointer group"
              >
                <span>Faculty Empanelment Desk</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </>
          )}

          {currentAudience === 'center' && (
            <>
              <span className="text-slate-600 hidden sm:flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Affiliation & Franchise Allotment for 2026–2027
              </span>
              <button
                onClick={onOpenAffiliationModal}
                className="flex items-center gap-1 text-[#0e3c6a] font-extrabold hover:underline cursor-pointer group"
              >
                <span>Center Affiliation Desk</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </>
          )}
        </div>

      </div>
    </section>
  );
};
