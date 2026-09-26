import React, { useState, useMemo } from 'react';
import { SetuCenter, Language, DistrictId } from '../types';
import { SETU_CENTERS } from '../data/setuKendras';
import { MAHARASHTRA_DISTRICTS } from '../data/districts';
import { Search } from 'lucide-react';

interface SetuHelpdeskDirectoryProps {
  currentLang: Language;
  selectedDistrict: DistrictId | 'all';
  onDistrictChange: (district: DistrictId | 'all') => void;
}

export const SetuHelpdeskDirectory: React.FC<SetuHelpdeskDirectoryProps> = ({
  currentLang,
  selectedDistrict
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCenters = useMemo(() => {
    return SETU_CENTERS.filter((kendra) => {
      if (selectedDistrict !== 'all' && kendra.district !== selectedDistrict) {
        return false;
      }
      if (searchTerm.trim() !== '') {
        const term = searchTerm.toLowerCase();
        const matchName = kendra.nameMr.toLowerCase().includes(term) || kendra.nameEn.toLowerCase().includes(term);
        const matchOperator = kendra.operatorNameMr.toLowerCase().includes(term) || kendra.operatorNameEn.toLowerCase().includes(term);
        const matchTaluka = kendra.talukaMr.toLowerCase().includes(term) || kendra.talukaEn.toLowerCase().includes(term);
        if (!matchName && !matchOperator && !matchTaluka) {
          return false;
        }
      }
      return true;
    });
  }, [selectedDistrict, searchTerm]);

  return (
    <div className="space-y-3">
      {/* 4 Main Helpline Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
        <a href="tel:18001801551" className="p-2.5 bg-white border border-green-200 rounded text-center hover:bg-green-50">
          <span className="text-gray-500 block text-[11px]">किसान कॉल सेंटर</span>
          <strong className="text-green-800 font-bold block text-sm">1800-180-1551</strong>
        </a>
        <a href="tel:1962" className="p-2.5 bg-white border border-green-200 rounded text-center hover:bg-green-50">
          <span className="text-gray-500 block text-[11px]">पशु डॉक्टर / ॲम्ब्युलन्स</span>
          <strong className="text-green-800 font-bold block text-sm">1962</strong>
        </a>
        <a href="tel:14447" className="p-2.5 bg-white border border-green-200 rounded text-center hover:bg-green-50">
          <span className="text-gray-500 block text-[11px]">पीक विमा तक्रार</span>
          <strong className="text-green-800 font-bold block text-sm">14447</strong>
        </a>
        <a href="tel:02249150800" className="p-2.5 bg-white border border-green-200 rounded text-center hover:bg-green-50">
          <span className="text-gray-500 block text-[11px]">महाडीबीटी शेतकरी कक्ष</span>
          <strong className="text-green-800 font-bold block text-sm">022-49150800</strong>
        </a>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-3 rounded-lg border border-green-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-2.5 top-2.5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="सेतू केंद्र किंवा चालक शोधा..."
            className="w-full pl-8 pr-3 py-1.5 bg-white border border-gray-300 rounded text-xs focus:outline-none focus:border-green-600"
          />
        </div>

        <span className="text-xs text-gray-600 font-semibold self-start sm:self-auto">
          उपलब्ध केंद्रे: <strong className="text-green-800">{filteredCenters.length}</strong>
        </span>
      </div>

      {/* Centers Cards */}
      {filteredCenters.length === 0 ? (
        <div className="bg-white p-6 text-center rounded-lg border border-green-200 text-gray-500 text-xs">
          कोणतेही सेतू केंद्र सापडले नाही. कृपया वरील जिल्हा तपासा.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filteredCenters.map((kendra) => {
            const districtObj = MAHARASHTRA_DISTRICTS.find(d => d.id === kendra.district);
            const districtName = districtObj ? (currentLang === 'mr' ? districtObj.nameMr : districtObj.nameEn) : kendra.district;
            const talukaName = currentLang === 'mr' ? kendra.talukaMr : kendra.talukaEn;

            return (
              <div 
                key={kendra.id}
                className="bg-white rounded-lg border border-green-200 p-3.5 shadow-xs space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-green-800 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                    तालुका: {talukaName} ({districtName})
                  </span>
                  <span className="text-[11px] text-gray-700 bg-gray-50 px-2 py-0.5 rounded border border-gray-200">
                    चालक: <strong>{currentLang === 'mr' ? kendra.operatorNameMr : kendra.operatorNameEn}</strong>
                  </span>
                </div>

                <h3 className="text-base font-bold text-gray-900 leading-snug">
                  {currentLang === 'mr' ? kendra.nameMr : kendra.nameEn}
                </h3>

                <p className="text-xs text-gray-600 bg-gray-50 p-2 rounded">
                  <strong>पत्ता:</strong> {currentLang === 'mr' ? kendra.addressMr : kendra.addressEn}
                </p>

                <div className="text-xs text-gray-700">
                  <span className="font-bold text-gray-500 block mb-0.5">उपलब्ध सेवा:</span>
                  <p>{(currentLang === 'mr' ? kendra.servicesMr : kendra.servicesEn).join(', ')}</p>
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <a
                    href={`tel:${kendra.phone.replace(/[^0-9]/g, '')}`}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-xs py-2 px-3 rounded flex items-center justify-center gap-1.5"
                  >
                    <span>कॉल करा: <strong className="font-mono text-sm">{kendra.phone}</strong></span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
