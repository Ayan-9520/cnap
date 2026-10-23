import React, { useRef, useState } from 'react';
import { X, Download, Printer, CheckCircle2, Loader2, FileText, Sparkles, Phone, Mail, MapPin } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CONTACT_INFO, LEADERSHIP_TEAM } from '../data/leadership';
import { COURSES_DATA } from '../data/courses';

interface PdfExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PdfExportModal: React.FC<PdfExportModalProps> = ({ isOpen, onClose }) => {
  const documentRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownloadPdf = async () => {
    if (!documentRef.current) return;
    setIsGenerating(true);
    setDownloadSuccess(false);

    try {
      // Find all pages in the document container
      const pageElements = documentRef.current.querySelectorAll<HTMLElement>('.pdf-page-container');
      
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4', // 297 x 210 mm
      });

      const pdfWidth = 297;
      const pdfHeight = 210;

      for (let i = 0; i < pageElements.length; i++) {
        const pageEl = pageElements[i];
        
        // Render page with html2canvas
        const canvas = await html2canvas(pageEl, {
          scale: 2, // high DPI
          useCORS: true,
          logging: false,
          backgroundColor: '#0e3c6a',
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.95);

        if (i > 0) {
          pdf.addPage([pdfWidth, pdfHeight], 'landscape');
        }

        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      }

      // Save PDF file
      pdf.save('CNAP_Academy_Official_Proposal_2027_2030.pdf');
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 5000);
    } catch (err) {
      console.error('Failed to generate PDF:', err);
      // Fallback: trigger print
      window.print();
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-sm">
      <div className="bg-slate-900 rounded-2xl max-w-5xl w-full max-h-[96vh] flex flex-col border border-slate-700 shadow-2xl overflow-hidden">
        {/* Top Control Bar */}
        <div className="p-4 bg-[#0a2542] border-b border-blue-900/60 flex items-center justify-between text-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0e3c6a] border border-blue-400/40 flex items-center justify-center">
              <FileText className="w-4 h-4 text-amber-300" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span>CNAP Official Proposal PDF Document</span>
                <span className="text-[10px] font-mono bg-amber-400 text-slate-950 px-2 py-0.5 rounded font-bold">
                  SAME COLOR & DESIGN
                </span>
              </h3>
              <p className="text-[11px] text-blue-200">
                Print-ready 6-page comprehensive presentation with high-resolution graphics and verified data.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPdf}
              disabled={isGenerating}
              className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 rounded-lg transition-all flex items-center gap-1.5 shadow-md cursor-pointer"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Generating PDF...</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF File</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Print Document"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {downloadSuccess && (
          <div className="bg-emerald-600 text-white text-xs px-4 py-2 flex items-center justify-between font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>PDF downloaded successfully! Filename: CNAP_Academy_Official_Proposal_2027_2030.pdf</span>
            </div>
            <button onClick={() => setDownloadSuccess(false)} className="text-white hover:underline text-xs">
              Dismiss
            </button>
          </div>
        )}

        {/* Scrollable Document Preview Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-950 space-y-6">
          <div ref={documentRef} className="max-w-[850px] mx-auto space-y-8">
            
            {/* PAGE 1: COVER SLIDE */}
            <div className="pdf-page-container w-full aspect-[297/210] bg-[#0e3c6a] text-white p-8 sm:p-10 rounded-xl shadow-2xl relative flex flex-col justify-between overflow-hidden border border-blue-400/30">
              {/* Background gradient decorative glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

              {/* Cover Top */}
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/aistudio/image_ffda20d2.png"
                    alt="CNAP Logo"
                    className="h-14 w-auto object-contain mix-blend-screen"
                  />
                  <div>
                    <div className="text-xl font-extrabold tracking-tight text-white leading-none">
                      CNAP ACADEMY
                    </div>
                    <div className="text-[10px] text-blue-200 uppercase tracking-widest mt-1">
                      Communication · Navigation · Accessibility · Profiling
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-mono font-bold text-slate-950 bg-amber-400 px-3 py-1 rounded-md">
                    OFFICIAL PROPOSAL 2027–2030
                  </span>
                  <div className="text-[10px] text-blue-200 mt-1">Ladli Ju Welfare Trust</div>
                </div>
              </div>

              {/* Cover Main Title */}
              <div className="space-y-4 my-auto relative z-10 max-w-2xl">
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  Strategic Vocational & Higher Education Masterplan
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
                  Skills for Employment. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-sky-200 to-amber-200">
                    Real Careers for Next-Gen Youth.
                  </span>
                </h1>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed max-w-xl">
                  Industry-oriented skill development, university degree streams, Learn-Work-Earn hospitality apprenticeships, and entrepreneurship support.
                </p>
                <div className="text-xs text-amber-300 font-semibold pt-1">
                  Submitted to the Dima Hasao Autonomous Council (DHAC), Assam
                </div>
              </div>

              {/* Cover Bottom Footer */}
              <div className="pt-4 border-t border-blue-400/30 flex items-center justify-between text-xs text-blue-200 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white">Naresh Kr. Gautam</span>
                  <span>·</span>
                  <span>Strategic Director (+91 97161 11113)</span>
                </div>
                <div className="text-[11px]">
                  Haflong, Assam · Delhi NCR · Hisar Network
                </div>
              </div>
            </div>

            {/* PAGE 2: THE CNAP FOUNDATION & METRICS */}
            <div className="pdf-page-container w-full aspect-[297/210] bg-white text-slate-900 p-8 sm:p-10 rounded-xl shadow-2xl relative flex flex-col justify-between overflow-hidden border border-slate-200">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-[#0e3c6a] flex items-center justify-center p-1">
                    <img src="/assets/aistudio/image_ffda20d2.png" alt="CNAP" className="w-full h-full object-contain mix-blend-screen" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0e3c6a]">CNAP SKILLS & VOCATIONAL ACADEMY</div>
                    <div className="text-[10px] text-slate-500">Executive Summary & Strategic Framework</div>
                  </div>
                </div>
                <div className="text-xs font-mono font-bold text-slate-500">PAGE 02 // VISION & METRICS</div>
              </div>

              {/* Core 4 Tenets */}
              <div className="space-y-4 my-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0e3c6a]">
                  The 4-Tenet Principle Foundation
                </div>
                <div className="grid grid-cols-4 gap-3">
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <span className="w-6 h-6 rounded bg-[#0e3c6a] text-white font-bold flex items-center justify-center text-xs mb-2">C</span>
                    <div className="font-bold text-slate-900 text-xs">Communication</div>
                    <p className="text-[10px] text-slate-600 mt-1">Workplace English, global customer etiquette, and team soft skills.</p>
                  </div>
                  <div className="p-3 bg-sky-50 border border-sky-200 rounded-lg">
                    <span className="w-6 h-6 rounded bg-sky-700 text-white font-bold flex items-center justify-center text-xs mb-2">N</span>
                    <div className="font-bold text-slate-900 text-xs">Navigation</div>
                    <p className="text-[10px] text-slate-600 mt-1">Structured career guidance, stream mapping, and personal mentoring.</p>
                  </div>
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                    <span className="w-6 h-6 rounded bg-emerald-700 text-white font-bold flex items-center justify-center text-xs mb-2">A</span>
                    <div className="font-bold text-slate-900 text-xs">Accessibility</div>
                    <p className="text-[10px] text-slate-600 mt-1">Inclusive outreach prioritizing regional Assam and tribal youth.</p>
                  </div>
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                    <span className="w-6 h-6 rounded bg-amber-600 text-white font-bold flex items-center justify-center text-xs mb-2">P</span>
                    <div className="font-bold text-slate-900 text-xs">Profiling</div>
                    <p className="text-[10px] text-slate-600 mt-1">Psychometric skill profiling matching students directly to employers.</p>
                  </div>
                </div>
              </div>

              {/* 4 Quantitative Pillars */}
              <div className="grid grid-cols-4 gap-3 bg-gradient-to-r from-[#0e3c6a] to-[#0a2542] text-white p-4 rounded-xl">
                <div>
                  <div className="text-2xl font-extrabold text-amber-300">20+</div>
                  <div className="text-xs font-semibold">Skill Programmes</div>
                  <div className="text-[10px] text-blue-200">Launching Jan 2027</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-sky-300">7</div>
                  <div className="text-xs font-semibold">Degree Streams</div>
                  <div className="text-[10px] text-blue-200">UGC Aligned 2027-28</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-emerald-300">10</div>
                  <div className="text-xs font-semibold">Ph.D. Fields</div>
                  <div className="text-[10px] text-blue-200">UGC Research by 2030</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-purple-300">7+</div>
                  <div className="text-xs font-semibold">Advisory Leaders</div>
                  <div className="text-[10px] text-blue-200">SRM, Amity, RICS Alum</div>
                </div>
              </div>

              {/* Mission & Commitment */}
              <div className="text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200 flex justify-between items-center">
                <span><strong>Core Commitment:</strong> Build a practical bridge between education, technical skills, and permanent employment with DHAC.</span>
                <span className="font-bold text-[#0e3c6a] whitespace-nowrap">Train • Counsel • Employ • Empower</span>
              </div>
            </div>

            {/* PAGE 3: TEN OBJECTIVES & 6 STEPS */}
            <div className="pdf-page-container w-full aspect-[297/210] bg-white text-slate-900 p-8 sm:p-10 rounded-xl shadow-2xl relative flex flex-col justify-between overflow-hidden border border-slate-200">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-[#0e3c6a] flex items-center justify-center p-1">
                    <img src="/assets/aistudio/image_ffda20d2.png" alt="CNAP" className="w-full h-full object-contain mix-blend-screen" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0e3c6a]">TEN COUNCIL OBJECTIVES & EXECUTION METHODOLOGY</div>
                    <div className="text-[10px] text-slate-500">Proposal to the Dima Hasao Autonomous Council</div>
                  </div>
                </div>
                <div className="text-xs font-mono font-bold text-slate-500">PAGE 03 // OBJECTIVES</div>
              </div>

              {/* 10 Objectives Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 bg-slate-50 rounded border border-slate-200">
                  <strong className="text-[#0e3c6a]">01. Skill Development:</strong> Vocational, technical, digital & professional training aligned with industry needs.
                </div>
                <div className="p-2 bg-slate-50 rounded border border-slate-200">
                  <strong className="text-[#0e3c6a]">02. Employment Generation:</strong> Industry partnerships, placement assistance & apprenticeships.
                </div>
                <div className="p-2 bg-slate-50 rounded border border-slate-200">
                  <strong className="text-[#0e3c6a]">03. Structured Career Guidance:</strong> Counselling on education, skill pathways & career selection.
                </div>
                <div className="p-2 bg-slate-50 rounded border border-slate-200">
                  <strong className="text-[#0e3c6a]">04. Entrepreneurship Promotion:</strong> Mentoring, micro-credit linkages, PMEGP & DPR structuring.
                </div>
                <div className="p-2 bg-slate-50 rounded border border-slate-200">
                  <strong className="text-[#0e3c6a]">05. Local Youth Empowerment:</strong> Priority for eligible youth in Dima Hasao and surrounding districts.
                </div>
                <div className="p-2 bg-slate-50 rounded border border-slate-200">
                  <strong className="text-[#0e3c6a]">06. Institutional Collaboration:</strong> MoUs with government departments, councils & employers.
                </div>
                <div className="p-2 bg-slate-50 rounded border border-slate-200">
                  <strong className="text-[#0e3c6a]">07. Digital & Professional Literacy:</strong> Modern AI tools, communication & workplace readiness.
                </div>
                <div className="p-2 bg-slate-50 rounded border border-slate-200">
                  <strong className="text-[#0e3c6a]">08. Inclusive Development:</strong> Equitable access for underserved and remote tribal youth.
                </div>
                <div className="p-2 bg-slate-50 rounded border border-slate-200">
                  <strong className="text-[#0e3c6a]">09. Sustainable Livelihoods:</strong> Market-oriented skills ensuring long-term financial independence.
                </div>
                <div className="p-2 bg-slate-50 rounded border border-slate-200">
                  <strong className="text-[#0e3c6a]">10. Regional Development:</strong> Retaining local human talent and connecting youth to opportunities.
                </div>
              </div>

              {/* 6 Steps Methodology */}
              <div className="pt-3 border-t border-slate-200">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#0e3c6a] mb-1.5">
                  The 6-Step Implementation Cycle
                </div>
                <div className="grid grid-cols-6 gap-2 text-[10px] text-slate-700">
                  <div className="p-1.5 bg-blue-50 border border-blue-200 rounded text-center">
                    <strong className="block text-[#0e3c6a]">Step 1</strong>
                    <span>Skill Gap Assessment</span>
                  </div>
                  <div className="p-1.5 bg-blue-50 border border-blue-200 rounded text-center">
                    <strong className="block text-[#0e3c6a]">Step 2</strong>
                    <span>Course Priority Mapping</span>
                  </div>
                  <div className="p-1.5 bg-blue-50 border border-blue-200 rounded text-center">
                    <strong className="block text-[#0e3c6a]">Step 3</strong>
                    <span>Certified Labs Setup</span>
                  </div>
                  <div className="p-1.5 bg-blue-50 border border-blue-200 rounded text-center">
                    <strong className="block text-[#0e3c6a]">Step 4</strong>
                    <span>Industry Linkages</span>
                  </div>
                  <div className="p-1.5 bg-blue-50 border border-blue-200 rounded text-center">
                    <strong className="block text-[#0e3c6a]">Step 5</strong>
                    <span>Student Mentorship</span>
                  </div>
                  <div className="p-1.5 bg-blue-50 border border-blue-200 rounded text-center">
                    <strong className="block text-[#0e3c6a]">Step 6</strong>
                    <span>Jobs & Enterprise</span>
                  </div>
                </div>
              </div>
            </div>

            {/* PAGE 4: PHASE 1 CURRICULUM & LEARN-WORK-EARN */}
            <div className="pdf-page-container w-full aspect-[297/210] bg-white text-slate-900 p-8 sm:p-10 rounded-xl shadow-2xl relative flex flex-col justify-between overflow-hidden border border-slate-200">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-[#0e3c6a] flex items-center justify-center p-1">
                    <img src="/assets/aistudio/image_ffda20d2.png" alt="CNAP" className="w-full h-full object-contain mix-blend-screen" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0e3c6a]">PHASE 1 (2027): JOB-READY SKILLS & LEARN-WORK-EARN</div>
                    <div className="text-[10px] text-slate-500">NSDC Aligned Certifications & Practical Workshops</div>
                  </div>
                </div>
                <div className="text-xs font-mono font-bold text-slate-500">PAGE 04 // VOCATIONAL TRACKS</div>
              </div>

              {/* Course Catalog Table */}
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <div className="font-bold text-[#0e3c6a] text-sm">1A. Cybersecurity, Digital Forensics & SOC</div>
                    <div className="text-[11px] text-slate-600 mt-1">Ethical Hacking, SOC Incident Response, Cloud Security, GRC Auditing, AI Tools.</div>
                    <div className="text-[10px] font-semibold text-emerald-700 mt-2">Stipend: ₹12,000–₹18,000/mo (Phase 2) · 320 Lab Hours</div>
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <div className="font-bold text-[#0e3c6a] text-sm">1B. Product Design & SolidWorks 3D CAD</div>
                    <div className="text-[11px] text-slate-600 mt-1">AutoCAD 2D/3D, SolidWorks Part & Assembly, DFM, FEA Stress Testing, EV Enclosures.</div>
                    <div className="text-[10px] font-semibold text-emerald-700 mt-2">Internship Stipend: ₹10,000–₹15,000/mo · 280 Lab Hours</div>
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <div className="font-bold text-[#0e3c6a] text-sm">1C. Industrial Automation, PLC & Robotics</div>
                    <div className="text-[11px] text-slate-600 mt-1">Siemens/Allen-Bradley PLC programming, SCADA, HMI, Mechatronics, Food Processing lines.</div>
                    <div className="text-[10px] font-semibold text-emerald-700 mt-2">Stipend: ₹11,000–₹16,000/mo · 350 Lab Hours</div>
                  </div>

                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="font-bold text-[#0e3c6a] text-sm">1D. Hospitality & Culinary (Learn, Work & Earn)</div>
                    <div className="text-[11px] text-slate-600 mt-1">Star-Hotel operations, culinary arts kitchen labs, F&B guest service, cruise/aviation host.</div>
                    <div className="text-[10px] font-bold text-[#0e3c6a] mt-2">Paid Star-Hotel Apprenticeship: ₹10,000–₹22,000/mo · 650 Practical Hours</div>
                  </div>
                </div>

                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs">
                  <div className="font-bold text-amber-900">Teacher & Facilitator Certification Modules:</div>
                  <div className="text-[11px] text-amber-800">
                    Pre-School & ECCE Facilitator (NEP 2020) · Certified Career & Vocational Guidance Counsellor · Train-The-Trainer (ToT) NSDC Accreditation.
                  </div>
                </div>
              </div>

              {/* Bottom strip */}
              <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200 flex justify-between">
                <span>NSQF Level 4 to Level 6 Accredited</span>
                <span>Placement Cell with 100% Apprenticeship Linkages</span>
              </div>
            </div>

            {/* PAGE 5: PHASE 2 DEGREES & PHASE 3 RESEARCH */}
            <div className="pdf-page-container w-full aspect-[297/210] bg-white text-slate-900 p-8 sm:p-10 rounded-xl shadow-2xl relative flex flex-col justify-between overflow-hidden border border-slate-200">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-[#0e3c6a] flex items-center justify-center p-1">
                    <img src="/assets/aistudio/image_ffda20d2.png" alt="CNAP" className="w-full h-full object-contain mix-blend-screen" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0e3c6a]">PHASE 2 DEGREES (2027–2028) & PHASE 3 RESEARCH (2028–2030)</div>
                    <div className="text-[10px] text-slate-500">UGC Recognized University Degrees & Doctoral Fellowships</div>
                  </div>
                </div>
                <div className="text-xs font-mono font-bold text-slate-500">PAGE 05 // DEGREES & RESEARCH</div>
              </div>

              {/* Degree Streams */}
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <div className="font-bold text-[#0e3c6a]">Commerce & Management</div>
                  <div className="text-[11px] text-slate-600 mt-1">BBA, B.Com, BHM, MBA, M.Com, MHM, Diploma in Hotel Management.</div>
                  <div className="text-[10px] text-slate-500 mt-2">Duration: 3 Years · Corporate Internships</div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <div className="font-bold text-[#0e3c6a]">Computer Science & Tech</div>
                  <div className="text-[11px] text-slate-600 mt-1">BCA, B.Tech Computer Science, Diploma in CS, Cloud & AI Engineering.</div>
                  <div className="text-[10px] text-slate-500 mt-2">Duration: 3-4 Years · 720+ Lab Hours</div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <div className="font-bold text-[#0e3c6a]">Agriculture Sciences</div>
                  <div className="text-[11px] text-slate-600 mt-1">B.Sc. (Hons.) Agriculture, M.Sc. Agriculture, Mountain Agribusiness.</div>
                  <div className="text-[10px] text-slate-500 mt-2">Duration: 4 Years · RAWE Field Projects</div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <div className="font-bold text-[#0e3c6a]">Legal Studies</div>
                  <div className="text-[11px] text-slate-600 mt-1">BA LL.B., B.Com. LL.B., 3-Year LL.B., Master of Laws (LL.M.).</div>
                  <div className="text-[10px] text-slate-500 mt-2">Approved Legal Education Curriculum</div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <div className="font-bold text-[#0e3c6a]">Hospitality & Hotel Admin</div>
                  <div className="text-[11px] text-slate-600 mt-1">B.Sc. HHA, Culinary Arts, F&B Service, Aviation & Cruise Hospitality.</div>
                  <div className="text-[10px] text-slate-500 mt-2">5-Star Hotel Training & Placement</div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <div className="font-bold text-[#0e3c6a]">Humanities, Media & Design</div>
                  <div className="text-[11px] text-slate-600 mt-1">Bachelor of Design (B.Des), BJMC Journalism & Mass Media, BA Arts.</div>
                  <div className="text-[10px] text-slate-500 mt-2">Modern Media Studios & Laboratories</div>
                </div>
              </div>

              {/* Phase 3 Research Box */}
              <div className="p-4 bg-gradient-to-r from-[#0e3c6a] to-[#0a2542] text-white rounded-xl text-xs space-y-1">
                <div className="font-bold text-amber-300">Phase 3 (2028–2030): Research & Doctoral Fellowships</div>
                <p className="text-[11px] text-blue-100 leading-relaxed">
                  Ph.D. programmes across 10 specialized fields: Commerce & Management, Science, Humanities, Agriculture, Yoga & Sports, Law, Media, Computer Science, Engineering, and Cybersecurity under UGC regulations.
                </p>
              </div>

              {/* Bottom strip */}
              <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200 flex justify-between">
                <span>Degrees awarded in affiliation with UGC State & Central Universities</span>
                <span>Annual Intake: 2,500+ Students</span>
              </div>
            </div>

            {/* PAGE 6: LEADERSHIP & CONTACT DESK */}
            <div className="pdf-page-container w-full aspect-[297/210] bg-[#0e3c6a] text-white p-8 sm:p-10 rounded-xl shadow-2xl relative flex flex-col justify-between overflow-hidden border border-blue-400/30">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-blue-400/30 pb-3">
                <div className="flex items-center gap-2.5">
                  <img src="/assets/aistudio/image_ffda20d2.png" alt="CNAP" className="h-8 w-auto object-contain mix-blend-screen" />
                  <div>
                    <div className="text-sm font-bold text-white">GOVERNING COUNCIL & CONTACT DIRECTORY</div>
                    <div className="text-[10px] text-blue-200">Ladli Ju Welfare Trust & CNAP Regional Skill Centre</div>
                  </div>
                </div>
                <div className="text-xs font-mono font-bold text-amber-300">PAGE 06 // LEADERSHIP</div>
              </div>

              {/* Leaders Grid */}
              <div className="grid grid-cols-4 gap-2 text-[10px]">
                {LEADERSHIP_TEAM.map((l, i) => (
                  <div key={i} className="p-2 bg-slate-900/80 border border-slate-700/80 rounded-lg">
                    <div className="font-bold text-white text-[11px] truncate">{l.name}</div>
                    <div className="text-blue-300 truncate">{l.role.split('–')[0]}</div>
                    <div className="text-slate-400 text-[9px] mt-1 line-clamp-2">{l.affiliationHighlight}</div>
                  </div>
                ))}
              </div>

              {/* Executive Contact Spotlight */}
              <div className="p-4 bg-slate-900 border border-blue-400/30 rounded-xl flex items-center justify-between text-xs">
                <div className="space-y-1">
                  <div className="text-[11px] text-amber-300 font-bold uppercase tracking-wider">Executive Liaison Desk</div>
                  <div className="text-base font-bold text-white">Naresh Kr. Gautam</div>
                  <div className="text-[11px] text-blue-200">Strategic Director & Operations Lead</div>
                </div>

                <div className="text-right space-y-1">
                  <div className="font-bold text-amber-300 text-sm tabular-nums">+91 97161 11113</div>
                  <div className="text-[11px] text-blue-200">nareshgautam1981@gmail.com</div>
                  <div className="text-[10px] text-slate-400">Haflong, Dima Hasao, Assam – 788819</div>
                </div>
              </div>

              {/* Final Footer */}
              <div className="pt-3 border-t border-blue-400/30 flex items-center justify-between text-[11px] text-blue-200">
                <span>© {new Date().getFullYear()} CNAP Skills & Ladli Ju Welfare Trust.</span>
                <span>Train • Counsel • Employ • Empower</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
