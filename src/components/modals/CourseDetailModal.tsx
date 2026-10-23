import React from 'react';
import { X, Clock, Award, CheckCircle2, ArrowRight, BookOpen, Banknote, Briefcase } from 'lucide-react';
import { Course } from '../../data/courses';

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl">
        {/* Sticky Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
          <div>
            <div className="text-xs font-bold uppercase text-[#0e3c6a] tracking-wider">
              {course.level} · {course.duration}
            </div>
            <h3 className="text-lg font-bold text-slate-900 mt-0.5 leading-snug">
              {course.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Program Overview</h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {course.overview}
            </p>
          </div>

          {/* Quick Metrics Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <span className="text-[11px] text-slate-500 block">Practical Labs</span>
              <strong className="text-sm font-bold text-slate-900 tabular-nums">{course.practicalHours}+ Hours</strong>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <span className="text-[11px] text-slate-500 block">Stipend Status</span>
              <strong className="text-sm font-bold text-emerald-700">
                {course.stipendEligible ? 'Eligible' : 'Full Project'}
              </strong>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <span className="text-[11px] text-slate-500 block">Target Audience</span>
              <strong className="text-xs font-semibold text-slate-900 capitalize">
                {course.targetAudience.join(', ')}
              </strong>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <span className="text-[11px] text-slate-500 block">Fee Structure</span>
              <strong className="text-xs font-semibold text-slate-900">{course.feeEstimate}</strong>
            </div>
          </div>

          {/* Eligibility & Certification */}
          <div className="space-y-3 bg-blue-50/50 border border-blue-100 rounded-xl p-4 text-xs">
            <div>
              <strong className="text-[#0e3c6a]">Eligibility Criteria:</strong>
              <span className="text-slate-700 ml-1">{course.eligibility}</span>
            </div>
            <div>
              <strong className="text-[#0e3c6a]">Certification & Council Alignment:</strong>
              <span className="text-slate-700 ml-1">{course.certification}</span>
            </div>
            {course.stipendAmount && (
              <div>
                <strong className="text-emerald-700">Paid Apprenticeship Detail:</strong>
                <span className="text-slate-700 ml-1">{course.stipendAmount}</span>
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
                  className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-800"
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
                  className="px-3 py-1 bg-slate-100 text-slate-800 rounded-md text-xs font-medium border border-slate-200"
                >
                  {career}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenAdmission(course.id);
              }}
              className="px-5 py-2 text-xs font-bold text-white bg-[#0e3c6a] hover:bg-[#0a2e52] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Apply for this Course</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
