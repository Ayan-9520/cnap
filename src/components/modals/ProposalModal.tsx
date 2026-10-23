import React from 'react';
import { X, Download, FileText, ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAdmission: () => void;
  onOpenPdfExport?: () => void;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({
  isOpen,
  onClose,
  onOpenAdmission,
  onOpenPdfExport,
}) => {
  if (!isOpen) return null;

  const pdfPath = '/assets/aistudio/Ladli_Ju_Skill_Development_Proposal_Powerful_21b4d8e2.pdf';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0e3c6a] flex items-center justify-center font-bold">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Official Business & Academic Proposal
              </h3>
              <p className="text-xs text-slate-500">
                Ladli Ju Welfare Trust · Proposal to Dima Hasao Autonomous Council (DHAC)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Executive Summary Card */}
          <div className="bg-slate-900 text-white rounded-xl p-5 space-y-3">
            <div className="text-xs font-mono text-amber-300 uppercase tracking-wider">
              Strategic Executive Brief
            </div>
            <h4 className="text-lg font-bold text-white">
              Skills for Employment. Careers for Dima Hasao.
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              "Building a skilled, self-reliant generation of youth in Dima Hasao, Assam.
              Train • Counsel • Employ • Empower. Prioritizing eligible local youth, bridging industry skill gaps,
              and connecting education with sustainable regional livelihoods."
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="bg-slate-800 text-slate-200 px-2.5 py-1 rounded border border-slate-700">
                20+ Skill Programs Launching 2027
              </span>
              <span className="bg-slate-800 text-slate-200 px-2.5 py-1 rounded border border-slate-700">
                7 Degree Streams (2027–2028)
              </span>
              <span className="bg-slate-800 text-slate-200 px-2.5 py-1 rounded border border-slate-700">
                10 Ph.D. Fields by 2030
              </span>
            </div>
          </div>

          {/* Ten Core Objectives Summary */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              The 10 Council Objectives
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                <strong>1. Skill Development:</strong> Vocational, technical, digital & professional training.
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                <strong>2. Employment Generation:</strong> Industry partnerships & job-oriented training.
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                <strong>3. Structured Career Guidance:</strong> Counselling on education & career selection.
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                <strong>4. Entrepreneurship Promotion:</strong> Training, mentoring & micro-credit linkages.
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                <strong>5. Local Youth Empowerment:</strong> Priority for eligible youth in Dima Hasao.
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                <strong>6. Industry & Institutional Collaboration:</strong> MoUs with councils & corporate leaders.
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                <strong>7. Digital Literacy:</strong> Modern AI tools, communication & workplace readiness.
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                <strong>8. Inclusive Development:</strong> Equitable access for underserved youth.
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                <strong>9. Sustainable Livelihoods:</strong> Market-oriented economic independence.
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                <strong>10. Regional Development:</strong> Retaining local human resources in Assam.
              </div>
            </div>
          </div>

          {/* Actions Bar */}
          <div className="bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-[#0e3c6a]">
                CNAP Academy Official Presentation & Proposal PDF
              </div>
              <div className="text-[11px] text-slate-600">
                Identical color theme, CNAP framework, course matrices, and leadership contacts.
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {onOpenPdfExport && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenPdfExport();
                  }}
                  className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-1.5 shadow-xs whitespace-nowrap cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download CNAP Proposal PDF (Same Color)</span>
                </button>
              )}
              <a
                href={pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-xs font-semibold text-[#0e3c6a] hover:bg-white/80 border border-blue-300 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Original Council PDF</span>
              </a>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-slate-100 flex items-center justify-between gap-4 bg-slate-50 rounded-b-2xl">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenAdmission();
            }}
            className="px-5 py-2 text-xs font-bold text-white bg-[#0e3c6a] rounded-lg cursor-pointer"
          >
            Apply for Programs
          </button>
        </div>
      </div>
    </div>
  );
};
