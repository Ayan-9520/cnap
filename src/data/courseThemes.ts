export interface CourseTheme {
  image: string;
  tag: string;
  gradient: string;
}

export const COURSE_THEMES: Record<string, CourseTheme> = {
  'cyber-soc': {
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    tag: 'Cyber Defense & SOC',
    gradient: 'from-blue-600/30 via-cyan-500/10 to-transparent',
  },
  'ai-prompt-tools': {
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    tag: 'Generative AI & Cloud',
    gradient: 'from-indigo-600/30 via-purple-500/10 to-transparent',
  },
  'cad-solidworks': {
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    tag: 'SolidWorks 3D CAD',
    gradient: 'from-sky-600/30 via-blue-500/10 to-transparent',
  },
  'industrial-automation-plc': {
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
    tag: 'Robotics & PLC SCADA',
    gradient: 'from-amber-600/30 via-orange-500/10 to-transparent',
  },
  'electrical-refrigeration-trades': {
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    tag: 'Solar PV & Cold-Chain',
    gradient: 'from-emerald-600/30 via-teal-500/10 to-transparent',
  },
  'hospitality-learn-work-earn': {
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    tag: '5-Star Hotel Dual Track',
    gradient: 'from-rose-600/30 via-amber-500/10 to-transparent',
  },
  'bca-computer-science': {
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    tag: 'BCA & Cloud Systems',
    gradient: 'from-blue-600/30 via-indigo-500/10 to-transparent',
  },
  'bba-commerce-management': {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    tag: 'BBA Enterprise Retail',
    gradient: 'from-slate-600/30 via-blue-500/10 to-transparent',
  },
  'bsc-agriculture-allied': {
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80',
    tag: 'B.Sc. Smart Agriculture',
    gradient: 'from-emerald-600/30 via-lime-500/10 to-transparent',
  },
  'teacher-preschool-facilitator': {
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    tag: 'ECCE Child Education',
    gradient: 'from-violet-600/30 via-pink-500/10 to-transparent',
  },
  'career-counsellor-certification': {
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    tag: 'Career Guidance Council',
    gradient: 'from-blue-600/30 via-purple-500/10 to-transparent',
  },
  'entrepreneurship-incubation': {
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    tag: 'Venture Incubation Hub',
    gradient: 'from-cyan-600/30 via-teal-500/10 to-transparent',
  },
};

export const DEFAULT_CATEGORY_THEMES: Record<string, CourseTheme> = {
  'cyber-it': {
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    tag: 'IT & Cyber Security',
    gradient: 'from-blue-600/30 via-cyan-500/10 to-transparent',
  },
  'degrees': {
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    tag: 'University Degree Track',
    gradient: 'from-indigo-600/30 via-blue-500/10 to-transparent',
  },
  'hospitality': {
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    tag: 'Hospitality & Tourism',
    gradient: 'from-rose-600/30 via-amber-500/10 to-transparent',
  },
  'trades': {
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    tag: 'Engineering & Automation',
    gradient: 'from-amber-600/30 via-orange-500/10 to-transparent',
  },
  'teacher-training': {
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    tag: 'Teacher Facilitator',
    gradient: 'from-purple-600/30 via-pink-500/10 to-transparent',
  },
  'management': {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    tag: 'Management & Incubation',
    gradient: 'from-slate-600/30 via-blue-500/10 to-transparent',
  },
};

export function getCourseTheme(courseId: string, category: string): CourseTheme {
  return COURSE_THEMES[courseId] || DEFAULT_CATEGORY_THEMES[category] || {
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    tag: 'Vocational Credential',
    gradient: 'from-blue-600/30 via-indigo-500/10 to-transparent',
  };
}
