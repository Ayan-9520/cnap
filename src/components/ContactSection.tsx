import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, User, PhoneCall } from 'lucide-react';
import { CONTACT_INFO } from '../data/leadership';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    role: 'Student / Parent',
    location: '',
    message: '',
  });

  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const ticketId = `CNAP-INQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedTicket(ticketId);
  };

  return (
    <section className="py-16 bg-slate-900 text-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Office Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                Official Liaison & Helpdesk
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white" style={{ textWrap: 'balance' }}>
                Connect with the CNAP Executive Desk
              </h2>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Direct outreach for student admissions, teacher empanelment, institutional council tie-ups, and center affiliations.
              </p>
            </div>

            {/* Direct Leader Card */}
            <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#0e3c6a] border border-blue-400/40 flex items-center justify-center font-bold text-xl text-white">
                  NG
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{CONTACT_INFO.directorName}</h3>
                  <div className="text-xs text-blue-300 font-medium">Strategic Director & CNAP Operations</div>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs border-t border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Direct Phone & WhatsApp:</span>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="font-bold text-amber-300 hover:underline tabular-nums text-sm"
                    >
                      {CONTACT_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded bg-sky-500/20 text-sky-300 flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Official Email:</span>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="font-medium text-slate-200 hover:text-white"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Desk Hours:</span>
                    <span className="text-slate-200">{CONTACT_INFO.workingHours}</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-2">
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-xs font-bold text-white transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Regional Addresses */}
            <div className="space-y-4 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Dima Hasao Regional Skill Center:</strong>
                  <span>{CONTACT_INFO.regionalOffice}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Corporate & Admissions Liaison:</strong>
                  <span>{CONTACT_INFO.corporateLiaison}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Northern Vocational Partner Hub:</strong>
                  <span>{CONTACT_INFO.partnerNetworkHub}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-800 border border-slate-700 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white mb-1">
              Send an Official Inquiry or Application Request
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Our regional counseling and administrative desk will respond within 24 business hours.
            </p>

            {submittedTicket ? (
              <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-xl p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Inquiry Successfully Registered</h4>
                <p className="text-xs text-emerald-200 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your inquiry has been forwarded to Naresh Kr. Gautam and the regional admissions team.
                </p>
                <div className="text-xs font-mono font-bold text-amber-300 bg-black/40 py-2 px-4 rounded-lg inline-block border border-white/10">
                  Reference Ticket: {submittedTicket}
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedTicket(null);
                      setFormData({ name: '', phone: '', email: '', role: 'Student / Parent', location: '', message: '' });
                    }}
                    className="mt-2 text-xs font-semibold text-slate-300 hover:text-white underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile number"
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 tabular-nums"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">I am Inquiring As</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Student / Parent">Student / Parent (Admission)</option>
                      <option value="Teacher / Faculty">Teacher / Trainer (Empanelment)</option>
                      <option value="Admission Center / College">Admission Center / College Partner</option>
                      <option value="Government / Council Official">Council / Government Stakeholder</option>
                      <option value="Corporate Employer">Corporate Employer / Placement Partner</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">City & State</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Haflong, Assam / Hisar, Haryana"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Message or Specific Requirement</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe course of interest, center requirements, or questions..."
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry to CNAP Desk</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
