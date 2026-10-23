import React, { useState } from 'react';
import { Compass, Sparkles, ArrowRight, BookOpen, Banknote, Clock, Award } from 'lucide-react';
import { COURSES_DATA, Course } from '../data/courses';

interface PathwayFinderProps {
  onSelectCourse: (course: Course) => void;
  onOpenAdmission: (courseId?: string) => void;
}

export const PathwayFinder: React.FC<PathwayFinderProps> = ({ onSelectCourse, onOpenAdmission }) => {
  const [educationLevel, setEducationLevel] = useState<string>('12th');
  const [interestArea, setInterestArea] = useState<string>('cyber');

  // Match recommendation
  const getRecommendation = (): Course => {
    if (interestArea === 'cyber') {
      return COURSES_DATA.find((c) => c.id === 'cyber-soc') || COURSES_DATA[0];
    }
    if (interestArea === 'hospitality') {
      return COURSES_DATA.find((c) => c.id === 'hospitality-learn-work-earn') || COURSES_DATA[0];
    }
    if (interestArea === 'engineering') {
      return COURSES_DATA.find((c) => c.id === 'cad-solidworks') || COURSES_DATA[0];
    }
    if (interestArea === 'trades') {
      return COURSES_DATA.find((c) => c.id === 'industrial-automation-plc') || COURSES_DATA[0];
    }
    if (interestArea === 'degrees') {
      return COURSES_DATA.find((c) => c.id === 'bca-computer-science') || COURSES_DATA[0];
    }
    if (interestArea === 'teacher') {
      return COURSES_DATA.find((c) => c.id === 'teacher-preschool-facilitator') || COURSES_DATA[0];
    }
    return COURSES_DATA[0];
  };

  const rec = getRecommendation();

  return (
    <section className="py-14 bg-white border-b border-slate-200" id="pathway-finder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0e3c6a] bg-blue-50 border border-blue-200/60 rounded-full px-3 py-1 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Student Career Compass</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900" style={{ textWrap: 'balance' }}>
            Find Your Fast-Track Career Pathway
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Match your present qualifications with industry demand and guaranteed internship tracks.
          </p>
        </div>

        {/* Interactive Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Box */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Step 1: Qualification */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  1. Current Highest Qualification
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: '10th', label: '10th Standard' },
                    { id: '12th', label: '10+2 / High School' },
                    { id: 'iti', label: 'ITI / Technical Dip.' },
                    { id: 'grad', label: 'Graduate / Degree' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setEducationLevel(item.id)}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg text-left transition-all border cursor-pointer ${
                        educationLevel === item.id
                          ? 'bg-[#0e3c6a] text-white border-[#0e3c6a] shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Interest Field */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  2. Priority Aspirations & Domain
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'cyber', label: 'Cybersecurity & SOC' },
                    { id: 'hospitality', label: 'Hotel & Culinary (Earn)' },
                    { id: 'engineering', label: '3D CAD & Mechanical' },
                    { id: 'trades', label: 'Robotics & Automation' },
                    { id: 'degrees', label: 'BCA / BBA Degrees' },
                    { id: 'teacher', label: 'Teaching & Counseling' },
                  ].map((field) => (
                    <button
                      key={field.id}
                      type="button"
                      onClick={() => setInterestArea(field.id)}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg text-left transition-all border cursor-pointer ${
                        interestArea === field.id
                          ? 'bg-[#0e3c6a] text-white border-[#0e3c6a] shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {field.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
              <span>All tracks include CNAP Communication & Placement Mentoring</span>
              <Sparkles className="w-4 h-4 text-amber-500" />
            </div>
          </div>

          {/* Recommendation Output Card */}
          <div className="lg:col-span-7 bg-white border-2 border-[#0e3c6a]/20 rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between gap-4 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  Recommended Pathway
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {rec.duration} · {rec.level}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                {rec.title}
              </h3>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                {rec.overview}
              </p>

              {/* Pathway Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#0e3c6a]" />
                    <span>Practical Training</span>
                  </div>
                  <div className="text-base font-bold text-slate-900 tabular-nums">
                    {rec.practicalHours}+ Hours
                  </div>
                  <div className="text-[11px] text-slate-400">Live Lab Projects</div>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                    <Banknote className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Internship Stipend</span>
                  </div>
                  <div className="text-base font-bold text-slate-900">
                    {rec.stipendEligible ? 'Eligible' : 'Full-Time Project'}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {rec.stipendAmount ? rec.stipendAmount.split('(')[0] : 'Skill Stipend Available'}
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    <span>Certification</span>
                  </div>
                  <div className="text-xs font-bold text-slate-900 line-clamp-1">
                    {rec.certification}
                  </div>
                  <div className="text-[11px] text-slate-400">Industry & Council Linkage</div>
                </div>
              </div>

              {/* Roles */}
              <div className="mb-6">
                <div className="text-xs font-semibold text-slate-700 mb-2">Immediate Career Outcomes:</div>
                <div className="flex flex-wrap gap-2">
                  {rec.careerOpportunities.map((role, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-slate-700 bg-slate-100 px-2.5 py-1 rounded font-medium border border-slate-200"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => onOpenAdmission(rec.id)}
                className="px-5 py-2.5 text-xs font-bold text-white bg-[#0e3c6a] rounded-lg hover:bg-[#0a2e52] transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Enroll in This Pathway</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onSelectCourse(rec)}
                className="px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                View Complete Syllabus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
