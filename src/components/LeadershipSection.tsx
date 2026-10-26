import React from 'react';
import { LEADERSHIP_TEAM } from '../data/leadership';
import { Award, Briefcase, GraduationCap, ShieldCheck } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200" id="council">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold text-[#0e3c6a] uppercase tracking-wider mb-2">
            Governance & Academic Direction
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900" style={{ textWrap: 'balance' }}>
            A Team Built for Real Impact
          </h2>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Led by distinguished veterans spanning higher education, corporate brand strategy, public policy, EV mechanical engineering, and admissions counseling.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERSHIP_TEAM.map((member, idx) => (
            <div
              key={idx}
              className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-5 flex flex-col justify-between hover:border-blue-300 hover:bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div>
                {/* Clean avatar initials with group hover glow */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0e3c6a] to-[#082b4d] text-white flex items-center justify-center font-bold text-base mb-4 shadow-sm group-hover:scale-105 group-hover:shadow-blue-900/20 transition-all duration-300">
                  {member.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                </div>

                <h3 className="text-sm font-bold text-slate-900 mb-0.5 group-hover:text-[#0e3c6a] transition-colors">
                  {member.name}
                </h3>

                <div className="text-xs font-medium text-[#0e3c6a] mb-2 leading-tight">
                  {member.role}
                </div>

                {/* Highlight banner */}
                <div className="text-[11px] font-semibold text-slate-700 bg-white border border-slate-200 rounded px-2 py-1 mb-3">
                  {member.affiliationHighlight}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {member.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 text-[11px] text-slate-500 space-y-1">
                <div>
                  <strong className="text-slate-700">Experience:</strong> {member.experience.split('in')[0]}
                </div>
                <div className="line-clamp-1">
                  <strong className="text-slate-700">Specialty:</strong> {member.specialty}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
