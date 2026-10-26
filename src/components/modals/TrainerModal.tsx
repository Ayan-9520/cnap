import React, { useState } from 'react';
import { X, CheckCircle2, Send, Briefcase, Award } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

interface TrainerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrainerModal: React.FC<TrainerModalProps> = ({ isOpen, onClose }) => {
  const { success } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    domainSpecialization: 'Cybersecurity & SOC',
    yearsExperience: '5–10 Years',
    highestDegree: 'M.Tech / ME / MCA',
    preferredMode: 'Hybrid (Classroom + Labs)',
    notes: '',
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `CNAP-FAC-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedRef(ref);

    success(
      'Faculty Profile Empaneled!',
      `Dossier Ref #${ref} registered for Prof. ${formData.name}. Academic Advisory Board will evaluate credentials.`
    );
  };

  const handleReset = () => {
    setSubmittedRef(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-100 text-[#0e3c6a] flex items-center justify-center font-bold">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Faculty & Trainer Empanelment Desk</h3>
              <p className="text-xs text-slate-500">Join CNAP National Master Trainer Pool</p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submittedRef ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Empanelment Application Received</h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Your profile has been forwarded to the Academic Direction Committee.
                We will schedule an online pedagogical evaluation and curriculum walkthrough.
              </p>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 inline-block font-mono text-sm font-bold text-[#0e3c6a]">
                Dossier ID: {submittedRef}
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 text-xs font-bold text-white bg-[#0e3c6a] rounded-lg cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Prof. / Dr. / Er. Full Name"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e3c6a]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e3c6a] tabular-nums"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="faculty@domain.com"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e3c6a]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Subject / Domain Expertise *</label>
                  <select
                    value={formData.domainSpecialization}
                    onChange={(e) => setFormData({ ...formData, domainSpecialization: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e3c6a]"
                  >
                    <option value="Cybersecurity & SOC">Cybersecurity, Forensics & SOC Operations</option>
                    <option value="SolidWorks & 3D CAD">Mechanical CAD, SolidWorks & 3D Design</option>
                    <option value="Industrial Automation & PLC">Industrial Automation, PLC & Mechatronics</option>
                    <option value="Hotel Management & Culinary">Culinary Arts & Hotel Management</option>
                    <option value="Early Childhood ECCE">Pre-School Facilitation & ECCE (NEP 2020)</option>
                    <option value="Career Counselling">Psychometric Career & Stream Counseling</option>
                    <option value="Agribusiness & Sciences">B.Sc Agriculture & Crop Sciences</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Industry / Teaching Experience</label>
                  <select
                    value={formData.yearsExperience}
                    onChange={(e) => setFormData({ ...formData, yearsExperience: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg"
                  >
                    <option value="2–5 Years">2 – 5 Years</option>
                    <option value="5–10 Years">5 – 10 Years</option>
                    <option value="10+ Years">10+ Years (Senior Trainer)</option>
                    <option value="20+ Years">20+ Years (Master Fellow)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Highest Academic Qualification</label>
                  <input
                    type="text"
                    value={formData.highestDegree}
                    onChange={(e) => setFormData({ ...formData, highestDegree: e.target.value })}
                    placeholder="e.g. B.Tech / MBA / Ph.D."
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Brief Profile / Certifications Summary</label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mention any certifications (CEH, SolidWorks, UGC-NET, TOT) or notable institutions taught at..."
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg"
                />
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold text-white bg-[#0e3c6a] hover:bg-[#0a2e52] rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Faculty Application</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
