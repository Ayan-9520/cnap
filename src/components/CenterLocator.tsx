import React, { useState } from 'react';
import { MapPin, Phone, Mail, Building, PlusCircle, CheckCircle, Search } from 'lucide-react';
import { ADMISSION_CENTERS, AdmissionCenter } from '../data/centers';

interface CenterLocatorProps {
  onOpenAffiliationModal: () => void;
}

export const CenterLocator: React.FC<CenterLocatorProps> = ({ onOpenAffiliationModal }) => {
  const [selectedZone, setSelectedZone] = useState<string>('all');
  const [searchCity, setSearchCity] = useState<string>('');

  const filteredCenters = ADMISSION_CENTERS.filter((c) => {
    const matchesZone = selectedZone === 'all' || c.zone === selectedZone;
    const matchesSearch =
      c.city.toLowerCase().includes(searchCity.toLowerCase()) ||
      c.state.toLowerCase().includes(searchCity.toLowerCase()) ||
      c.name.toLowerCase().includes(searchCity.toLowerCase());
    return matchesZone && matchesSearch;
  });

  return (
    <section className="py-16 bg-white border-b border-slate-200" id="centers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-bold text-[#0e3c6a] uppercase tracking-wider mb-2">
              Pan-India Institutional Reach
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900" style={{ textWrap: 'balance' }}>
              Authorized Admission & Skill Centers
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl">
              Locate authorized admission desks, regional practical labs, or submit a proposal to establish an official CNAP Center in your territory.
            </p>
          </div>

          <button
            onClick={onOpenAffiliationModal}
            className="px-4 py-2.5 text-xs font-bold text-white bg-[#0e3c6a] hover:bg-[#0a2e52] rounded-lg transition-colors flex items-center gap-2 shrink-0 cursor-pointer shadow-xs"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Apply to Open a Center</span>
          </button>
        </div>

        {/* Filter controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg overflow-x-auto">
            {['all', 'North-East', 'North'].map((zone) => (
              <button
                key={zone}
                onClick={() => setSelectedZone(zone)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  selectedZone === zone
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {zone === 'all' ? 'All Centers' : `${zone} Region`}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
              placeholder="Filter by city or state..."
              className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-[#0e3c6a]"
            />
          </div>
        </div>

        {/* Centers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCenters.map((center) => (
            <div
              key={center.id}
              className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-slate-300 transition-all hover:shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-[#0e3c6a]">
                    {center.city}, {center.state}
                  </span>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${
                      center.status === 'Active'
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-blue-50 text-blue-700 border-blue-200'
                    }`}
                  >
                    {center.status}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                  {center.name}
                </h3>

                <p className="text-xs text-slate-600 flex items-start gap-1.5 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>{center.address}</span>
                </p>

                <div className="text-xs text-slate-500 space-y-1.5 pt-3 border-t border-slate-100 mb-4">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <a href={`tel:${center.phone}`} className="hover:text-[#0e3c6a] tabular-nums">
                      {center.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <a href={`mailto:${center.email}`} className="hover:text-[#0e3c6a] truncate">
                      {center.email}
                    </a>
                  </div>
                </div>

                {/* Facilities */}
                <div>
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                    Equipped Facilities:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {center.facilities.map((fac, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] text-slate-700 bg-slate-100 px-2 py-0.5 rounded"
                      >
                        {fac}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs">
                <span className="text-slate-500">Coord: {center.leadCoordinator.split('/')[0]}</span>
                <a
                  href={`tel:${center.phone}`}
                  className="font-bold text-[#0e3c6a] hover:underline"
                >
                  Contact Desk
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
