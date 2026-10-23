import React, { useState } from 'react';
import { ShieldCheck, Search, CheckCircle2, AlertCircle, FileCheck, Award } from 'lucide-react';
import { VERIFIED_RECORDS, StudentVerificationRecord } from '../data/centers';

export const VerificationPortal: React.FC = () => {
  const [rollInput, setRollInput] = useState<string>('');
  const [searchedRecord, setSearchedRecord] = useState<StudentVerificationRecord | null | undefined>(undefined);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = rollInput.trim().toUpperCase();
    if (!clean) return;

    setHasSearched(true);
    const result = VERIFIED_RECORDS[clean];
    setSearchedRecord(result || null);
  };

  const setSample = (sampleId: string) => {
    setRollInput(sampleId);
    setHasSearched(true);
    setSearchedRecord(VERIFIED_RECORDS[sampleId]);
  };

  return (
    <section className="py-14 bg-slate-50 border-b border-slate-200" id="verification">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Online Student Enrollment & Certificate Verification Desk
              </h2>
              <p className="text-xs text-slate-500">
                Official verification portal for corporate employers, council authorities, and academic institutions.
              </p>
            </div>
          </div>

          <form onSubmit={handleVerify} className="flex flex-col sm:flex-row gap-3 mt-6">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={rollInput}
                onChange={(e) => setRollInput(e.target.value)}
                placeholder="Enter Enrollment or Certificate ID (e.g. CNAP-2026-AS01)"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono uppercase focus:outline-none focus:ring-2 focus:ring-[#0e3c6a] transition-all"
                required
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2.5 text-xs font-bold text-white bg-[#0e3c6a] hover:bg-[#0a2e52] rounded-lg transition-colors cursor-pointer shrink-0"
            >
              Verify Credential
            </button>
          </form>

          {/* Quick sample buttons */}
          <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-slate-500">
            <span>Try sample IDs:</span>
            <button
              type="button"
              onClick={() => setSample('CNAP-2026-AS01')}
              className="text-[#0e3c6a] font-mono hover:underline bg-slate-100 px-2 py-0.5 rounded cursor-pointer"
            >
              CNAP-2026-AS01
            </button>
            <button
              type="button"
              onClick={() => setSample('CNAP-2026-DH04')}
              className="text-[#0e3c6a] font-mono hover:underline bg-slate-100 px-2 py-0.5 rounded cursor-pointer"
            >
              CNAP-2026-DH04
            </button>
            <button
              type="button"
              onClick={() => setSample('CNAP-2026-HR09')}
              className="text-[#0e3c6a] font-mono hover:underline bg-slate-100 px-2 py-0.5 rounded cursor-pointer"
            >
              CNAP-2026-HR09
            </button>
          </div>

          {/* Verification Results */}
          {hasSearched && (
            <div className="mt-6 pt-6 border-t border-slate-200">
              {searchedRecord ? (
                <div className="bg-emerald-50/50 border border-emerald-200 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>OFFICIALLY VERIFIED RECORD</span>
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      {searchedRecord.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-500">Student Name:</span>
                      <div className="font-bold text-slate-900 text-sm">{searchedRecord.studentName}</div>
                    </div>
                    <div>
                      <span className="text-slate-500">Enrollment Number:</span>
                      <div className="font-mono font-bold text-slate-900">{searchedRecord.enrollmentNo}</div>
                    </div>
                    <div>
                      <span className="text-slate-500">Program / Qualification:</span>
                      <div className="font-semibold text-slate-900">{searchedRecord.courseName}</div>
                    </div>
                    <div>
                      <span className="text-slate-500">Framework Level:</span>
                      <div className="font-semibold text-slate-900">{searchedRecord.nsqfLevel}</div>
                    </div>
                    <div>
                      <span className="text-slate-500">Assigned Training Center:</span>
                      <div className="font-medium text-slate-800">{searchedRecord.centerLocation}</div>
                    </div>
                    <div>
                      <span className="text-slate-500">Grade / Performance:</span>
                      <div className="font-bold text-emerald-700">{searchedRecord.gradeScore}</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-emerald-200/60 text-[11px] text-slate-500 flex items-center justify-between">
                    <span>Issued: {searchedRecord.issueDate} · Ladli Ju Welfare Trust Registrar</span>
                    <span className="text-emerald-700 font-medium">Digital Signature Valid</span>
                  </div>
                </div>
              ) : (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3 text-xs text-amber-900">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">Record Not Found</div>
                    <p className="mt-0.5 text-amber-800">
                      No matching record found for "{rollInput}". Please check the spelling or contact the admissions office at +91 97161 11113.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
