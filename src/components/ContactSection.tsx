import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  ShieldCheck,
  User,
  ExternalLink,
  Building,
  Sparkles,
  PhoneCall,
  Check
} from 'lucide-react';
import { CONTACT_INFO } from '../data/leadership';
import { useToast } from '../context/ToastContext';

export const ContactSection: React.FC = () => {
  const { success } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    role: 'Student / Parent (Admission)',
    location: '',
    message: '',
  });

  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const ticketId = `CNAP-INQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedTicket(ticketId);

    success(
      'Inquiry Submitted Successfully!',
      `Ticket #${ticketId} registered for ${formData.name}. Forwarded to Director Naresh Kr. Gautam's desk.`
    );
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(CONTACT_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-[#0a233f] to-slate-950 text-white relative overflow-hidden" id="contact">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-amber-300 bg-amber-400/10 border border-amber-400/25 uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            Official Administrative Desk & Support
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white" style={{ textWrap: 'balance' }}>
            Connect with the CNAP Executive Desk
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2.5 leading-relaxed">
            Direct priority outreach for student admissions, teacher empanelment, institutional council tie-ups, and center affiliations across India.
          </p>
        </div>

        {/* Main 2-Column Suite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Director Desk & Quick Helpline */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Executive Officer Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-amber-400/40 rounded-3xl p-6 sm:p-7 shadow-2xl transition-all duration-300 relative overflow-hidden group">
              {/* Shimmer top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-cyan-400 to-amber-500 opacity-60 group-hover:opacity-100 transition-opacity" />

              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0e3c6a] to-[#1a5b9e] border-2 border-amber-400/50 flex items-center justify-center font-extrabold text-2xl text-white shadow-lg">
                    NG
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-900" title="Desk Active" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-black text-white">{CONTACT_INFO.directorName}</h3>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                      Director Desk
                    </span>
                  </div>
                  <div className="text-xs text-blue-200 font-medium mt-0.5">
                    Strategic Director & CNAP Operations
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Response SLA: Within 24 Business Hours</span>
                  </div>
                </div>
              </div>

              {/* Interactive Contact Actions */}
              <div className="space-y-3">
                {/* Phone Card */}
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/30 transition-all flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block font-medium">Direct Phone & WhatsApp</span>
                      <a
                        href={`tel:${CONTACT_INFO.phone}`}
                        className="text-sm font-extrabold text-amber-300 hover:text-white transition-colors tabular-nums tracking-wide"
                      >
                        {CONTACT_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer"
                  >
                    {copiedPhone ? 'Copied!' : 'Copy'}
                  </button>
                </div>

                {/* Email Card */}
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] text-slate-400 block font-medium">Official Liaison Email</span>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-xs sm:text-sm font-bold text-white hover:text-cyan-300 transition-colors truncate block"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Desk Timing */}
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Desk Working Hours</span>
                    <span className="text-xs font-semibold text-slate-200">
                      {CONTACT_INFO.workingHours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="mt-5">
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl text-xs font-extrabold text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect with Naresh Kr. Gautam on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Trust Assurance Badge */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
              <div className="text-xs text-slate-300">
                <strong className="text-white">Confidential & Verified:</strong> Inquiries are directly routed to the executive director’s office without third-party brokers.
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Glassmorphic Inquiry Form */}
          <div className="lg:col-span-7 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-400/30 rounded-3xl p-6 sm:p-9 shadow-2xl transition-all">
            <div className="flex items-center justify-between gap-4 mb-2">
              <h3 className="text-lg sm:text-xl font-black text-white">
                Official Inquiry & Application Desk
              </h3>
              <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30 shrink-0">
                2026–2027 Admissions
              </span>
            </div>
            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
              Fill in your details below. You will receive an official reference ticket and direct counseling assistance.
            </p>

            {submittedTicket ? (
              <div className="bg-emerald-950/70 border border-emerald-500/50 rounded-2xl p-7 text-center space-y-4 animate-in fade-in zoom-in-95">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-400/30">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-extrabold text-white">Inquiry Successfully Registered</h4>
                <p className="text-xs text-emerald-200 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry has been forwarded directly to Director Naresh Kr. Gautam’s desk.
                </p>
                <div className="text-sm font-mono font-bold text-amber-300 bg-black/60 py-2.5 px-5 rounded-xl inline-block border border-amber-400/30 shadow-inner">
                  Reference Ticket: {submittedTicket}
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedTicket(null);
                      setFormData({ name: '', phone: '', email: '', role: 'Student / Parent (Admission)', location: '', message: '' });
                    }}
                    className="mt-3 text-xs font-bold text-slate-300 hover:text-white underline cursor-pointer"
                  >
                    Submit another inquiry or application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5">
                      Full Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5">
                      Phone / WhatsApp Number <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile number"
                      className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all tabular-nums shadow-inner"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5">I am Inquiring As</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all shadow-inner cursor-pointer"
                    >
                      <option value="Student / Parent (Admission)">Student / Parent (Admission & Course)</option>
                      <option value="Teacher / Faculty (Empanelment)">Teacher / Trainer (Empanelment & Master Trainer)</option>
                      <option value="Admission Center / College Partner">Admission Center / College Partner</option>
                      <option value="Council / Government Stakeholder">Council / Government Stakeholder</option>
                      <option value="Corporate Employer (Placement)">Corporate Employer / Placement Partner</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-1.5">City & State</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Haflong, Assam / Hisar, Haryana / New Delhi"
                    className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-1.5">Message or Specific Requirement</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe program of interest, center affiliation questions, or council inquiries..."
                    className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all shadow-inner"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-black text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-200 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20 hover:shadow-amber-400/35 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Submit Official Inquiry to CNAP Desk</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* 3 Regional Office Cards Showcase */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <Building className="w-4 h-4 text-amber-400" />
                <span>Authorized Council Centers & Regional Hubs</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Physical training centers, executive administration, and regional coordination hubs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Center 1: Assam */}
            <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-amber-400/40 hover:bg-white/10 transition-all group">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  Assam Regional Hub
                </span>
                <MapPin className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">
                Dima Hasao Regional Skill Center
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {CONTACT_INFO.regionalOffice}
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-semibold text-amber-300 flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-amber-400" />
                <span>Council Complex & Practical Labs</span>
              </div>
            </div>

            {/* Center 2: Delhi */}
            <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 transition-all group">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                  National Capital Liaison
                </span>
                <MapPin className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">
                Corporate & Admissions Liaison
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {CONTACT_INFO.corporateLiaison}
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-semibold text-cyan-300 flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-cyan-400" />
                <span>University Partnerships & Strategy</span>
              </div>
            </div>

            {/* Center 3: Haryana */}
            <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-emerald-400/40 hover:bg-white/10 transition-all group">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                  North Zone Partner Desk
                </span>
                <MapPin className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">
                Northern Vocational Partner Hub
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {CONTACT_INFO.partnerNetworkHub}
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-semibold text-emerald-300 flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Franchise & Institutional Operations</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
