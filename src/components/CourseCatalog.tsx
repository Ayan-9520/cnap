import React, { useState } from 'react';
import { Search, ArrowRight, BookOpen, Clock, Award, Check } from 'lucide-react';
import { COURSES_DATA, Course } from '../data/courses';

interface CourseCatalogProps {
  onSelectCourse: (course: Course) => void;
  onOpenAdmission: (courseId?: string) => void;
}

export const CourseCatalog: React.FC<CourseCatalogProps> = ({ onSelectCourse, onOpenAdmission }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Curricula (20+)' },
    { id: 'cyber-it', label: 'Cybersecurity & AI' },
    { id: 'degrees', label: 'University Degrees' },
    { id: 'hospitality', label: 'Learn & Earn (Hospitality)' },
    { id: 'trades', label: 'CAD, Trades & Automation' },
    { id: 'teacher-training', label: 'Educator & Facilitator' },
  ];

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesCat = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.modules.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-bold text-[#0e3c6a] uppercase tracking-wider mb-2">
              Academic & Vocational Offerings
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900" style={{ textWrap: 'balance' }}>
              Industry-Aligned Programs & Degree Streams
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl">
              Curricula designed by top academic leaders from Amity, SRM, and RICS alongside EV battery & industrial manufacturing heads.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses, skills, tools..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#0e3c6a] focus:border-transparent transition-all shadow-2xs"
            />
          </div>
        </div>

        {/* Filter Tabs (Interactive filter buttons allowed with clean segmented design) */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-200/60 rounded-xl mb-8 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all group"
            >
              <div>
                {/* Clean unboxed metadata kicker */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-[#0e3c6a]">{course.level}</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">{course.duration}</span>
                </div>

                {/* Primary Title */}
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#0e3c6a] transition-colors leading-snug">
                  {course.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                  {course.overview}
                </p>

                {/* Unboxed Metadata Strip */}
                <div className="text-xs text-slate-500 space-y-1.5 py-3 border-y border-slate-100 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Lab Practice: <strong className="text-slate-700 tabular-nums">{course.practicalHours}+ Hours</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{course.certification}</span>
                  </div>
                  {course.stipendEligible && (
                    <div className="flex items-center gap-2 text-emerald-700 font-medium">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{course.stipendAmount || 'Stipend Backed Internship'}</span>
                    </div>
                  )}
                </div>

                {/* Key modules preview */}
                <div className="mb-4">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                    Curriculum Highlights:
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {course.modules.slice(0, 3).map((mod, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#0e3c6a] font-bold">›</span>
                        <span className="line-clamp-1">{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectCourse(course)}
                  className="text-xs font-semibold text-slate-700 hover:text-[#0e3c6a] underline underline-offset-4 cursor-pointer"
                >
                  View Details & Syllabus
                </button>
                <button
                  onClick={() => onOpenAdmission(course.id)}
                  className="px-3.5 py-1.5 text-xs font-bold text-white bg-[#0e3c6a] hover:bg-[#0a2e52] rounded-md transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Apply</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16 bg-white border border-slate-200 rounded-xl">
            <BookOpen className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <div className="text-sm font-bold text-slate-800">No courses match your query</div>
            <div className="text-xs text-slate-500 mt-1">Try searching for keywords like "Cyber", "Hotel", "Degree", or "CAD".</div>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-white bg-[#0e3c6a] rounded-lg"
            >
              Reset Search & Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
