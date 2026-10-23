import React, { useState } from 'react';
import { Calculator, Banknote, Briefcase, Check, ArrowRight, ShieldCheck, Hotel, Sparkles } from 'lucide-react';

interface LearnWorkEarnCalculatorProps {
  onOpenAdmission: (courseId?: string) => void;
}

export const LearnWorkEarnCalculator: React.FC<LearnWorkEarnCalculatorProps> = ({ onOpenAdmission }) => {
  const [selectedTrack, setSelectedTrack] = useState<'hospitality' | 'cyber' | 'automation'>('hospitality');
  const [programDurationMonths, setProgramDurationMonths] = useState<number>(12);
  const [internshipTier, setInternshipTier] = useState<'4star' | '5star'>('5star');

  // Calculations
  const getCalculation = () => {
    let baseMonthlyStipend = 12000;
    let labHours = 350;
    let startingJobSalary = '₹25,000 – ₹38,000 / month';

    if (selectedTrack === 'hospitality') {
      baseMonthlyStipend = internshipTier === '5star' ? 16000 : 12000;
      labHours = programDurationMonths === 6 ? 250 : programDurationMonths === 12 ? 550 : 1200;
      startingJobSalary = '₹22,000 – ₹45,000 / month + Gratuity';
    } else if (selectedTrack === 'cyber') {
      baseMonthlyStipend = 18000;
      labHours = programDurationMonths === 6 ? 320 : 640;
      startingJobSalary = '₹35,000 – ₹65,000 / month';
    } else if (selectedTrack === 'automation') {
      baseMonthlyStipend = 14000;
      labHours = programDurationMonths === 6 ? 300 : 600;
      startingJobSalary = '₹24,000 – ₹42,000 / month';
    }

    const internshipMonths = Math.max(3, Math.floor(programDurationMonths * 0.5));
    const totalStipendEarned = baseMonthlyStipend * internshipMonths;

    return {
      monthlyStipend: baseMonthlyStipend,
      internshipMonths,
      totalStipendEarned,
      labHours,
      startingJobSalary,
    };
  };

  const calc = getCalculation();

  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden" id="learn-earn">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-400/10 border border-amber-400/20 rounded-full px-3.5 py-1 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vemosa-Inspired Learn, Work & Earn Model</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white" style={{ textWrap: 'balance' }}>
            Earn While You Learn. Graduate with Experience.
          </h2>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            Eliminate student debt. CNAP's dual-track vocational pedagogy combines state-of-the-art classroom labs with paid corporate apprenticeships.
          </p>
        </div>

        {/* Interactive Calculator Shell */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Inputs Section */}
          <div className="lg:col-span-6 bg-slate-800/80 border border-slate-700 rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                1. Select Vocational Stream
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedTrack('hospitality')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedTrack === 'hospitality'
                      ? 'bg-[#0e3c6a] border-blue-400 text-white shadow-md'
                      : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <Hotel className="w-5 h-5 mb-1.5 text-amber-400" />
                  <div className="text-xs font-bold">Hospitality & Hotel</div>
                  <div className="text-[10px] text-slate-400">Star-Hotel Training</div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedTrack('cyber')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedTrack === 'cyber'
                      ? 'bg-[#0e3c6a] border-blue-400 text-white shadow-md'
                      : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <Briefcase className="w-5 h-5 mb-1.5 text-sky-400" />
                  <div className="text-xs font-bold">Cyber & SOC Ops</div>
                  <div className="text-[10px] text-slate-400">Tech Forensics</div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedTrack('automation')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedTrack === 'automation'
                      ? 'bg-[#0e3c6a] border-blue-400 text-white shadow-md'
                      : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <Calculator className="w-5 h-5 mb-1.5 text-emerald-400" />
                  <div className="text-xs font-bold">Robotics & Trades</div>
                  <div className="text-[10px] text-slate-400">PLC Automation</div>
                </button>
              </div>
            </div>

            {/* Duration Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  2. Program Duration
                </label>
                <span className="text-xs font-mono font-bold text-amber-300">
                  {programDurationMonths} Months ({Math.floor(programDurationMonths / 12)} Yr {programDurationMonths % 12 ? `${programDurationMonths % 12} Mos` : ''})
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[6, 12, 36].map((months) => (
                  <button
                    key={months}
                    type="button"
                    onClick={() => setProgramDurationMonths(months)}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                      programDurationMonths === months
                        ? 'bg-amber-400 text-slate-950 border-amber-300 font-bold'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {months === 6 ? '6 Mos (Fast-Track)' : months === 12 ? '1 Year (Diploma)' : '3 Years (Degree)'}
                  </button>
                ))}
              </div>
            </div>

            {/* Partner Tier (if hospitality) */}
            {selectedTrack === 'hospitality' && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  3. Apprenticeship Tier
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setInternshipTier('4star')}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border text-left cursor-pointer ${
                      internshipTier === '4star'
                        ? 'bg-[#0e3c6a] border-blue-400 text-white'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300'
                    }`}
                  >
                    <div>Premium 4-Star Chains</div>
                    <div className="text-[10px] text-slate-400">₹12,000 / month approx</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setInternshipTier('5star')}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border text-left cursor-pointer ${
                      internshipTier === '5star'
                        ? 'bg-[#0e3c6a] border-blue-400 text-white'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300'
                    }`}
                  >
                    <div>Luxury 5-Star & Resorts</div>
                    <div className="text-[10px] text-slate-400">₹16,000 / month approx</div>
                  </button>
                </div>
              </div>
            )}

            {/* Highlights bullet checklist */}
            <div className="pt-2 border-t border-slate-700/60 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Duty meals, uniform allowance & hotel insurance covered during on-job training</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct transition to full-time permanent roles upon successful completion</span>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#0e3c6a] to-[#08233f] border border-blue-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between border-b border-blue-400/20 pb-4 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-blue-200 font-semibold">
                    Simulated Financial Benefits
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">
                    Estimated Student Earnings
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                  <Banknote className="w-5 h-5" />
                </div>
              </div>

              {/* Big Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-black/20 rounded-xl p-4 border border-white/10">
                  <div className="text-xs text-blue-200 mb-1">Monthly On-Job Stipend</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 tabular-nums">
                    ₹{calc.monthlyStipend.toLocaleString('en-IN')}
                    <span className="text-xs text-slate-300 font-normal"> / mo</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">Paid directly to student bank</div>
                </div>

                <div className="bg-black/20 rounded-xl p-4 border border-white/10">
                  <div className="text-xs text-blue-200 mb-1">Total Stipend in Track</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-300 tabular-nums">
                    ₹{calc.totalStipendEarned.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">Over {calc.internshipMonths} months apprenticeship</div>
                </div>
              </div>

              {/* Secondary Details */}
              <div className="space-y-3 bg-black/20 rounded-xl p-4 border border-white/10 text-xs mb-6">
                <div className="flex justify-between items-center text-slate-200">
                  <span>Hands-on Lab & Workshop Hours:</span>
                  <span className="font-bold text-white tabular-nums">{calc.labHours} Hours</span>
                </div>
                <div className="flex justify-between items-center text-slate-200">
                  <span>Target Post-Training Salary:</span>
                  <span className="font-bold text-amber-300">{calc.startingJobSalary}</span>
                </div>
                <div className="flex justify-between items-center text-slate-200">
                  <span>Placement Assistance:</span>
                  <span className="font-bold text-emerald-400">100% Dedicated Placement Cell</span>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="pt-4 border-t border-blue-400/20 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-blue-200">
                Admissions open for January 2027 batch & upcoming sessions.
              </span>
              <button
                onClick={() => onOpenAdmission(selectedTrack === 'hospitality' ? 'hospitality-learn-work-earn' : undefined)}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow"
              >
                <span>Apply for Learn-Work-Earn</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
