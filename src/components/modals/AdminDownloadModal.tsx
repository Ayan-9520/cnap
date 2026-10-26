import React, { useState } from 'react';
import {
  X,
  Lock,
  Unlock,
  Download,
  FileText,
  ExternalLink,
  Printer,
  ShieldCheck,
  Key,
  CheckCircle2,
  Copy,
  AlertCircle
} from 'lucide-react';

interface AdminDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminDownloadModal: React.FC<AdminDownloadModalProps> = ({ isOpen, onClose }) => {
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin.trim() === 'admin2026' || pin.trim() === 'cnap2026' || pin.trim() === '9716111113') {
      setIsAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Incorrect Admin PIN. Please enter admin2026');
    }
  };

  const handleCopyLink = () => {
    const directUrl = `${window.location.origin}/CNAP_Project_Dossier_2026.pdf`;
    navigator.clipboard.writeText(directUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrintWebpage = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-[#0a2544] via-[#0d3158] to-[#071c35] text-white border border-blue-400/30 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-5">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Close Admin Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center shadow-lg shrink-0">
            {isAuthenticated ? <Unlock className="w-6 h-6" /> : <Lock className="w-6 h-6" />}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-black tracking-tight text-white">
                Admin Project Dossier & PDF Hub
              </h2>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-amber-400/20 text-amber-300 border border-amber-400/30">
                Authorized
              </span>
            </div>
            <p className="text-xs text-blue-200/80 font-medium">
              Confidential Institutional Documentation · Direct Download
            </p>
          </div>
        </div>

        {!isAuthenticated ? (
          /* Authentication Screen */
          <form onSubmit={handleVerify} className="space-y-4 pt-2">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-blue-100/90 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-amber-300">
                <ShieldCheck className="w-4 h-4" />
                <span>Admin Clearance Required</span>
              </div>
              <p className="text-[11px] text-slate-300">
                This document is strictly restricted from regular site visitors. Enter the administrator passcode to download the full 1.7 MB project proposal PDF.
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-200 mb-1.5">
                Admin Passcode (Default: <code className="text-amber-300 bg-white/10 px-1.5 py-0.5 rounded">admin2026</code>)
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={pin}
                  onChange={(e) => {
                    setPin(e.target.value);
                    setErrorMsg('');
                  }}
                  placeholder="Enter PIN..."
                  autoFocus
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-blue-400/40 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm tracking-wider"
                />
                <Key className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5" />
              </div>
              {errorMsg && (
                <div className="text-red-400 text-xs font-semibold mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errorMsg}</span>
                </div>
              )}
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                type="submit"
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Unlock className="w-4 h-4" />
                <span>Unlock & Access Files</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-300 font-bold text-xs transition-colors cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          /* Download Options (Authorized) */
          <div className="space-y-4 pt-1">
            <div className="p-3.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <span className="font-bold block text-white">Administrator Access Granted</span>
                <span className="text-[11px] text-emerald-300/90">
                  Ready to download the official project proposal and archive.
                </span>
              </div>
            </div>

            {/* File 1: Official Proposal PDF */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-400/40 flex items-center justify-center text-red-400 shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-extrabold text-sm text-white flex items-center gap-2">
                      <span>CNAP_Project_Dossier_2026.pdf</span>
                      <span className="text-[10px] bg-red-500/20 text-red-300 px-2 py-0.5 rounded-full font-bold">
                        PDF · 1.7 MB
                      </span>
                    </div>
                    <div className="text-[11px] text-blue-200/80">
                      Official Ladli Ju Welfare Trust & CNAP Skills Project Proposal
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons for File 1 */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <a
                  href="/CNAP_Project_Dossier_2026.pdf"
                  download="CNAP_Project_Dossier_2026.pdf"
                  className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>

                <a
                  href="/CNAP_Project_Dossier_2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer border border-white/10"
                >
                  <ExternalLink className="w-4 h-4 text-cyan-300" />
                  <span>Open in Tab</span>
                </a>
              </div>
            </div>

            {/* Direct URL Method */}
            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-blue-400/20 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="font-bold flex items-center gap-1 text-amber-300">
                  <Key className="w-3.5 h-3.5" /> Direct URL for Admin:
                </span>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="text-[11px] text-cyan-300 hover:text-white font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copied ? 'Copied!' : 'Copy Direct Link'}</span>
                </button>
              </div>
              <div className="text-[11px] font-mono text-slate-300 bg-black/40 p-2 rounded-lg break-all select-all border border-white/5">
                {window.location.origin}/CNAP_Project_Dossier_2026.pdf
              </div>
            </div>

            {/* File 2: Live Website Print to PDF */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-bold text-white block">Save Entire Live Site as PDF</span>
                <span className="text-[11px] text-slate-400">
                  Using your browser's print engine (Ctrl + P)
                </span>
              </div>
              <button
                type="button"
                onClick={handlePrintWebpage}
                className="py-2 px-3 rounded-xl bg-cyan-600/30 hover:bg-cyan-600/50 text-cyan-200 border border-cyan-400/30 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Site PDF</span>
              </button>
            </div>

            {/* Close */}
            <div className="pt-1 text-center">
              <button
                type="button"
                onClick={onClose}
                className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer py-1"
              >
                Close Admin Console
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
