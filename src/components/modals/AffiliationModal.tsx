import React, { useState } from 'react';
import { X, CheckCircle2, Send, Building2 } from 'lucide-react';
import { CONTACT_INFO } from '../../data/leadership';
import { useToast } from '../../context/ToastContext';

interface AffiliationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AffiliationModal: React.FC<AffiliationModalProps> = ({ isOpen, onClose }) => {
  const { success } = useToast();
  const [formData, setFormData] = useState({
    institutionName: '',
    contactPerson: '',
    phone: '',
    email: '',
    cityState: '',
    proposedStreams: ['Vocational & Hotel Management'],
    availableCarpetAreaSqFt: '2,500 - 5,000 sq.ft.',
    currentInfrastructure: 'Classrooms & Basic Computers',
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `CNAP-AFF-${Math.floor(10000 + Math.random() * 90000)}`;
    setSubmittedRef(ref);

    success(
      'Affiliation Request Received!',
      `Partner Ref #${ref} created for ${formData.institutionName || 'your center'}. Regional partnership team will review infrastructure.`
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
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Center Affiliation & MoU Request</h3>
              <p className="text-xs text-slate-500">Partner with CNAP & Ladli Ju Welfare Trust</p>
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
              <h4 className="text-lg font-bold text-slate-900">Affiliation Request Logged</h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for your institutional interest. Our Director of Operations, <strong>{CONTACT_INFO.directorName}</strong>,
                and the center evaluation committee will review your proposal and share the draft MoU and lab setup specs.
              </p>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 inline-block font-mono text-sm font-bold text-[#0e3c6a]">
                Proposal Docket: {submittedRef}
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
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Institution / Center / Company Name *</label>
                <input
                  type="text"
                  required
                  value={formData.institutionName}
                  onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                  placeholder="e.g. Apex Institute of Vocational Studies"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e3c6a]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Lead Contact Person / Director *</label>
                  <input
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    placeholder="Full Name & Designation"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e3c6a]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Direct Phone / Mobile *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e3c6a] tabular-nums"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Official Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="director@institute.org"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e3c6a]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Proposed Center City & State *</label>
                  <input
                    type="text"
                    required
                    value={formData.cityState}
                    onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                    placeholder="e.g. Silchar, Assam / Rohtak, Haryana"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e3c6a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Premises Carpet Area</label>
                  <select
                    value={formData.availableCarpetAreaSqFt}
                    onChange={(e) => setFormData({ ...formData, availableCarpetAreaSqFt: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg"
                  >
                    <option value="1,500 - 2,500 sq.ft.">1,500 - 2,500 sq.ft. (Standard Center)</option>
                    <option value="2,500 - 5,000 sq.ft.">2,500 - 5,000 sq.ft. (Hub Center)</option>
                    <option value="5,000+ sq.ft.">5,000+ sq.ft. (Full Campus / College)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Existing Setup</label>
                  <select
                    value={formData.currentInfrastructure}
                    onChange={(e) => setFormData({ ...formData, currentInfrastructure: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg"
                  >
                    <option value="Classrooms & Basic Computers">Classrooms & Basic Computers</option>
                    <option value="Advanced Computer Lab">Advanced Computer Lab (30+ PCs)</option>
                    <option value="Commercial Kitchen / Hospitality Setup">Commercial Kitchen / Hospitality Setup</option>
                    <option value="Greenfield Space Ready for Fitout">Greenfield Space Ready for Fitout</option>
                  </select>
                </div>
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
                  <span>Submit Partnership Proposal</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
