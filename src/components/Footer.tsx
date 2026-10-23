import React from 'react';
import { CONTACT_INFO } from '../data/leadership';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Wordmark & Purpose */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/image_ffda20d2.png"
                alt="CNAP Logo"
                className="h-10 w-auto object-contain mix-blend-screen"
                referrerPolicy="no-referrer"
              />
              <span className="text-base font-extrabold text-white">
                CNAP <span className="font-normal text-slate-400">Academy</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              Communication · Navigation · Accessibility · Profiling.
              Delivering industry-oriented skills, university degrees, and Learn-Work-Earn programs with Ladli Ju Welfare Trust.
            </p>
            <div className="text-[11px] text-slate-500">
              Assam Regional Center: Haflong, Dima Hasao – 788819
            </div>
          </div>

          {/* Col 2: Academic Programs */}
          <div>
            <div className="text-white font-semibold mb-3">Academic & Vocational</div>
            <ul className="space-y-2">
              <li><a href="#programs" className="hover:text-white transition-colors">Cybersecurity & SOC Operations</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Hospitality & Learn-Work-Earn</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">SolidWorks & Mechanical CAD</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Industrial Automation & PLC</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">University Degrees (BCA, BBA, B.Sc Ag)</a></li>
            </ul>
          </div>

          {/* Col 3: Stakeholder Portals */}
          <div>
            <div className="text-white font-semibold mb-3">Stakeholders</div>
            <ul className="space-y-2">
              <li><a href="#audiences" className="hover:text-white transition-colors">Students & Aspirants Desk</a></li>
              <li><a href="#audiences" className="hover:text-white transition-colors">Teachers & Master Trainers</a></li>
              <li><a href="#centers" className="hover:text-white transition-colors">Admission Centers & Franchise</a></li>
              <li><a href="#verification" className="hover:text-white transition-colors">Online Student Verification</a></li>
              <li><a href="#roadmap" className="hover:text-white transition-colors">Council Proposal & Roadmap</a></li>
            </ul>
          </div>

          {/* Col 4: Official Contacts */}
          <div>
            <div className="text-white font-semibold mb-3">Admissions & Liaison</div>
            <div className="space-y-2 text-xs">
              <div>
                <span className="block text-slate-500">Director of Operations:</span>
                <span className="text-white font-medium">{CONTACT_INFO.directorName}</span>
              </div>
              <div>
                <span className="block text-slate-500">Admissions Helpline:</span>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-amber-400 font-bold hover:underline tabular-nums">
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </div>
              <div>
                <span className="block text-slate-500">Email:</span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} CNAP Skills & Ladli Ju Welfare Trust. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="/assets/aistudio/Ladli_Ju_Skill_Development_Proposal_Powerful_21b4d8e2.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">
              Official Proposal PDF
            </a>
            <span>·</span>
            <span>UGC & NSQF Aligned</span>
            <span>·</span>
            <span>Dima Hasao Council Collaboration</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
