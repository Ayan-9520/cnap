import React, { useState } from 'react';
import { Search, ArrowRight, BookOpen, Clock, Award, Check, Sparkles, Compass } from 'lucide-react';
import { COURSES_DATA, Course } from '../data/courses';
import { getCourseTheme } from '../data/courseThemes';

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
    <section className="py-20 bg-gradient-to-b from-slate-50 via-blue-50/25 to-slate-50 border-b border-slate-200/80 relative overflow-hidden" id="programs">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-indigo-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#0e3c6a] bg-blue-100/70 border border-blue-200/60 uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5 text-[#0e3c6a]" />
              Academic & Vocational Offerings
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900" style={{ textWrap: 'balance' }}>
              Industry-Aligned Programs & Degree Streams
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Curricula designed by top academic leaders from Amity, SRM, and RICS alongside EV battery & industrial manufacturing heads.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses, skills, tools..."
              className="w-full pl-9 pr-4 py-2.5 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#0e3c6a] focus:border-transparent transition-all shadow-sm placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-2xl mb-10 overflow-x-auto shadow-2xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#0e3c6a] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Premium Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredCourses.map((course) => {
            const theme = getCourseTheme(course.id, course.category);

            return (
              <div
                key={course.id}
                className="group relative rounded-2xl overflow-hidden border border-slate-200/90 hover:border-[#0e3c6a]/50 bg-white/85 backdrop-blur-xl shadow-md hover:shadow-2xl hover:shadow-blue-950/15 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* 1. Underlying Blurred Domain Image for atmospheric background depth */}
                <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                  <img
                    src={theme.image}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover filter blur-3xl scale-150 opacity-20 group-hover:opacity-35 group-hover:scale-175 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white/95 backdrop-blur-xs" />
                </div>

                {/* 2. Top Shimmer Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-[#0e3c6a] to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30" />

                {/* 3. High-Fidelity Themed Visual Header with Floating Glass Badges */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-900 shrink-0">
                  <img
                    src={theme.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Subtle dark gradient overlay to guarantee text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-black/25" />

                  {/* Top Floating Glass Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold text-white bg-slate-950/65 backdrop-blur-md border border-white/20 shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      {course.level}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium text-white/95 bg-slate-950/55 backdrop-blur-md border border-white/15">
                      <Clock className="w-3 h-3 text-cyan-300" />
                      <span className="tabular-nums">{course.duration}</span>
                    </span>
                  </div>

                  {/* Bottom Floating Tag & Stipend Indicator */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                    <span className="text-[10px] font-bold tracking-wider text-blue-200 bg-[#0e3c6a]/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-blue-400/30 uppercase">
                      {theme.tag}
                    </span>
                    {course.stipendEligible && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-300 bg-emerald-950/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-emerald-500/35 shadow-xs">
                        <Sparkles className="w-3 h-3 text-emerald-400" />
                        Stipend Backed
                      </span>
                    )}
                  </div>
                </div>

                {/* 4. Card Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between relative z-10">
                  <div>
                    {/* Primary Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0e3c6a] transition-colors leading-snug line-clamp-2">
                      {course.title}
                    </h3>

                    {/* Overview snippet */}
                    <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed">
                      {course.overview}
                    </p>

                    {/* Glass Metric Matrix Strip */}
                    <div className="mt-4 p-3 rounded-xl bg-white/70 backdrop-blur-md border border-slate-200/70 space-y-2 shadow-2xs">
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <Clock className="w-3.5 h-3.5 text-[#0e3c6a] shrink-0" />
                        <span>
                          Lab Practice: <strong className="text-slate-900 tabular-nums">{course.practicalHours}+ Hours</strong>
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span className="truncate">{course.certification}</span>
                      </div>
                      {course.stipendEligible && (
                        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 pt-0.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{course.stipendAmount || 'Stipend Backed Internship'}</span>
                        </div>
                      )}
                    </div>

                    {/* Key Modules Preview */}
                    <div className="mt-4">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Curriculum Highlights:
                      </div>
                      <ul className="text-xs text-slate-600 space-y-1.5">
                        {course.modules.slice(0, 3).map((mod, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#0e3c6a] font-black leading-none mt-0.5">›</span>
                            <span className="line-clamp-1">{mod}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* 5. Luxury Action Footer */}
                  <div className="pt-4 mt-5 border-t border-slate-200/80 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectCourse(course)}
                      className="text-xs font-bold text-slate-700 hover:text-[#0e3c6a] transition-colors cursor-pointer py-1.5 px-2 rounded-lg hover:bg-blue-50/80 flex items-center gap-1 group/view"
                    >
                      <span>View Syllabus</span>
                      <ArrowRight className="w-3 h-3 text-slate-400 group-hover/view:text-[#0e3c6a] group-hover/view:translate-x-0.5 transition-all" />
                    </button>
                    <button
                      onClick={() => onOpenAdmission(course.id)}
                      className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#0e3c6a] via-[#11487d] to-[#164e87] hover:from-[#0a2e52] hover:to-[#0e3c6a] rounded-xl shadow-xs hover:shadow-md hover:shadow-blue-900/20 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer group/btn"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16 bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl shadow-sm">
            <BookOpen className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <div className="text-sm font-bold text-slate-800">No courses match your query</div>
            <div className="text-xs text-slate-500 mt-1">Try searching for keywords like "Cyber", "Hotel", "Degree", or "CAD".</div>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 text-xs font-bold text-white bg-[#0e3c6a] hover:bg-[#0a2e52] rounded-xl transition-colors cursor-pointer shadow-xs"
            >
              Reset Search & Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
