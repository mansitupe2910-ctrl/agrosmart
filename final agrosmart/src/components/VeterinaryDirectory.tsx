import React, { useState, useMemo } from 'react';
import { VetDoctor, Language, DistrictId } from '../types';
import { VET_DOCTORS } from '../data/doctors';
import { MAHARASHTRA_DISTRICTS } from '../data/districts';
import { Search } from 'lucide-react';

interface VeterinaryDirectoryProps {
  currentLang: Language;
  selectedDistrict: DistrictId | 'all';
  onDistrictChange: (district: DistrictId | 'all') => void;
}

export const VeterinaryDirectory: React.FC<VeterinaryDirectoryProps> = ({
  currentLang,
  selectedDistrict
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDoctors = useMemo(() => {
    return VET_DOCTORS.filter((doc) => {
      if (selectedDistrict !== 'all' && doc.district !== selectedDistrict) {
        return false;
      }
      if (searchTerm.trim() !== '') {
        const term = searchTerm.toLowerCase();
        const matchName = doc.nameMr.toLowerCase().includes(term) || doc.nameEn.toLowerCase().includes(term);
        const matchHospital = doc.hospitalNameMr.toLowerCase().includes(term) || doc.hospitalNameEn.toLowerCase().includes(term);
        const matchTaluka = doc.talukaMr.toLowerCase().includes(term) || doc.talukaEn.toLowerCase().includes(term);
        if (!matchName && !matchHospital && !matchTaluka) {
          return false;
        }
      }
      return true;
    });
  }, [selectedDistrict, searchTerm]);

  return (
    <div className="space-y-3">
      {/* Simple Search */}
      <div className="bg-white p-3 rounded-lg border border-green-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-2.5 top-2.5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="डॉक्टर किंवा तालुका शोधा..."
            className="w-full pl-8 pr-3 py-1.5 bg-white border border-gray-300 rounded text-xs focus:outline-none focus:border-green-600"
          />
        </div>

        <span className="text-xs text-gray-600 font-semibold self-start sm:self-auto">
          उपलब्ध डॉक्टर संख्या: <strong className="text-green-800">{filteredDoctors.length}</strong>
        </span>
      </div>

      {/* Quick Helpline Note */}
      <div className="bg-green-50 p-2.5 rounded border border-green-200 text-xs text-green-900 flex items-center justify-between">
        <span>तातडीच्या जनावरांच्या उपचारासाठी मोफत पशु रुग्णवाहिका क्रमांक:</span>
        <a href="tel:1962" className="bg-green-600 text-white font-bold px-2.5 py-1 rounded text-xs">
          1962 कॉल करा
        </a>
      </div>

      {/* Doctor Cards */}
      {filteredDoctors.length === 0 ? (
        <div className="bg-white p-6 text-center rounded-lg border border-green-200 text-gray-500 text-xs">
          कोणताही डॉक्टर सापडला नाही. कृपया वरील जिल्हा तपासा.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filteredDoctors.map((doc) => {
            const districtObj = MAHARASHTRA_DISTRICTS.find(d => d.id === doc.district);
            const districtName = districtObj ? (currentLang === 'mr' ? districtObj.nameMr : districtObj.nameEn) : doc.district;
            const talukaName = currentLang === 'mr' ? doc.talukaMr : doc.talukaEn;

            return (
              <div 
                key={doc.id}
                className="bg-white rounded-lg border border-green-200 p-3.5 shadow-xs space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-green-800 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                    तालुका: {talukaName} ({districtName})
                  </span>
                  {doc.is24x7Emergency && (
                    <span className="text-[10px] font-bold text-red-700 bg-red-50 px-1.5 py-0.5 rounded border border-red-200">
                      २४ तास उपलब्ध
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-base font-bold text-gray-900">
                    {currentLang === 'mr' ? doc.nameMr : doc.nameEn}
                  </h3>
                  <p className="text-xs font-semibold text-green-700">
                    {currentLang === 'mr' ? doc.designationMr : doc.designationEn}
                  </p>
                  <p className="text-xs text-gray-600 mt-0.5">
                    दवाखाना: {currentLang === 'mr' ? doc.hospitalNameMr : doc.hospitalNameEn}
                  </p>
                </div>

                <p className="text-xs text-gray-600 bg-gray-50 p-2 rounded">
                  <strong>पत्ता:</strong> {currentLang === 'mr' ? doc.addressMr : doc.addressEn}
                </p>

                <p className="text-xs text-gray-500">
                  वेळ: {currentLang === 'mr' ? doc.timingMr : doc.timingEn}
                </p>

                <div className="pt-2 border-t border-gray-100">
                  <a
                    href={`tel:${doc.phone.replace(/[^0-9]/g, '')}`}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-xs py-2 px-3 rounded flex items-center justify-center gap-1.5"
                  >
                    <span>कॉल करा: <strong className="font-mono text-sm">{doc.phone}</strong></span>
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
