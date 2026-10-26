import React from 'react';
import { X, Clock, Award, ArrowRight, Sparkles, Check } from 'lucide-react';
import { Course } from '../../data/courses';
import { getCourseTheme } from '../../data/courseThemes';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onOpenAdmission: (courseId?: string) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onOpenAdmission,
}) => {
  if (!course) return null;

  const theme = getCourseTheme(course.id, course.category);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-slate-200/90 shadow-2xl relative overflow-hidden flex flex-col">
        {/* Visual Hero Header with Frosted Overlay */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950 shrink-0">
          <img
            src={theme.image}
            alt={course.title}
            className="w-full h-full object-cover opacity-90 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-900/30" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full border border-white/20 transition-all cursor-pointer z-20"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Floating glass badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white bg-slate-950/70 backdrop-blur-md border border-white/20 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              {course.level}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-white bg-slate-950/60 backdrop-blur-md border border-white/15">
              <Clock className="w-3.5 h-3.5 text-cyan-300" />
              {course.duration}
            </span>
          </div>

          {/* Title & Domain Tag in banner */}
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <div className="inline-block text-[10px] font-bold tracking-wider text-cyan-300 bg-cyan-950/80 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-cyan-500/30 uppercase mb-1.5">
              {theme.tag}
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight text-balance drop-shadow-sm">
              {course.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 flex-1">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              Program Overview
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {course.overview}
            </p>
          </div>

          {/* Quick Metrics Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-slate-50/90 rounded-xl border border-slate-200">
              <span className="text-[11px] text-slate-500 block">Lab Practice</span>
              <strong className="text-sm font-bold text-slate-900 tabular-nums">
                {course.practicalHours}+ Hours
              </strong>
            </div>
            <div className="p-3 bg-slate-50/90 rounded-xl border border-slate-200">
              <span className="text-[11px] text-slate-500 block">Stipend Status</span>
              <strong className="text-sm font-bold text-emerald-700">
                {course.stipendEligible ? 'Eligible' : 'Full Project'}
              </strong>
            </div>
            <div className="p-3 bg-slate-50/90 rounded-xl border border-slate-200">
              <span className="text-[11px] text-slate-500 block">Target Audience</span>
              <strong className="text-xs font-semibold text-slate-900 capitalize">
                {course.targetAudience.join(', ')}
              </strong>
            </div>
            <div className="p-3 bg-slate-50/90 rounded-xl border border-slate-200">
              <span className="text-[11px] text-slate-500 block">Fee Structure</span>
              <strong className="text-xs font-semibold text-slate-900">{course.feeEstimate}</strong>
            </div>
          </div>

          {/* Eligibility & Certification */}
          <div className="space-y-3 bg-blue-50/60 border border-blue-100 rounded-xl p-4 text-xs">
            <div>
              <strong className="text-[#0e3c6a]">Eligibility Criteria:</strong>
              <span className="text-slate-700 ml-1.5">{course.eligibility}</span>
            </div>
            <div>
              <strong className="text-[#0e3c6a]">Certification & Council Alignment:</strong>
              <span className="text-slate-700 ml-1.5">{course.certification}</span>
            </div>
            {course.stipendAmount && (
              <div className="flex items-center gap-1.5 text-emerald-800 font-medium pt-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span><strong>Paid Apprenticeship Detail:</strong> {course.stipendAmount}</span>
              </div>
            )}
          </div>

          {/* Full Syllabus Modules */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Core Curriculum & Syllabus Modules
            </h4>
            <div className="space-y-2">
              {course.modules.map((mod, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50/80 border border-slate-100 text-xs text-slate-800"
                >
                  <span className="font-bold text-[#0e3c6a] tabular-nums shrink-0">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <span>{mod}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Career Opportunities */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Designated Employment Roles
            </h4>
            <div className="flex flex-wrap gap-2">
              {course.careerOpportunities.map((career, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-100/90 text-slate-800 rounded-lg text-xs font-medium border border-slate-200"
                >
                  {career}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Sticky Footer */}
        <div className="p-4 px-6 border-t border-slate-100 bg-white sticky bottom-0 z-10 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer py-2 px-3 rounded-lg hover:bg-slate-100 transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenAdmission(course.id);
            }}
            className="px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#0e3c6a] to-[#164e87] hover:from-[#0a2e52] hover:to-[#0e3c6a] rounded-xl transition-all shadow-sm hover:shadow-md flex items-center gap-1.5 cursor-pointer"
          >
            <span>Apply for this Course</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
