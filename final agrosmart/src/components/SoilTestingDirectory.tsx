import React, { useState, useMemo } from 'react';
import { SoilTestingCenter, Language, DistrictId } from '../types';
import { SOIL_TESTING_CENTERS } from '../data/soilCenters';
import { MAHARASHTRA_DISTRICTS } from '../data/districts';
import { Search } from 'lucide-react';

interface SoilTestingDirectoryProps {
  currentLang: Language;
  selectedDistrict: DistrictId | 'all';
  onDistrictChange: (district: DistrictId | 'all') => void;
}

export const SoilTestingDirectory: React.FC<SoilTestingDirectoryProps> = ({
  currentLang,
  selectedDistrict
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCenters = useMemo(() => {
    return SOIL_TESTING_CENTERS.filter((center) => {
      if (selectedDistrict !== 'all' && center.district !== selectedDistrict) {
        return false;
      }
      if (searchTerm.trim() !== '') {
        const term = searchTerm.toLowerCase();
        const matchName = center.nameMr.toLowerCase().includes(term) || center.nameEn.toLowerCase().includes(term);
        const matchTaluka = center.talukaMr.toLowerCase().includes(term) || center.talukaEn.toLowerCase().includes(term);
        const matchAddress = center.addressMr.toLowerCase().includes(term) || center.addressEn.toLowerCase().includes(term);
        if (!matchName && !matchTaluka && !matchAddress) {
          return false;
        }
      }
      return true;
    });
  }, [selectedDistrict, searchTerm]);

  return (
    <div className="space-y-3">
      {/* Search & Count */}
      <div className="bg-white p-3 rounded-lg border border-green-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-2.5 top-2.5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="प्रयोगशाळा किंवा तालुका शोधा..."
            className="w-full pl-8 pr-3 py-1.5 bg-white border border-gray-300 rounded text-xs focus:outline-none focus:border-green-600"
          />
        </div>

        <span className="text-xs text-gray-600 font-semibold self-start sm:self-auto">
          उपलब्ध प्रयोगशाळा: <strong className="text-green-800">{filteredCenters.length}</strong>
        </span>
      </div>

      {/* 3-Bullet Quick Soil Sampling Note */}
      <div className="bg-green-50 p-3 rounded border border-green-200 text-xs text-green-950 space-y-1">
        <strong className="block text-green-900 font-bold">मातीचा नमुना कसा काढावा? (सोप्या ३ पायऱ्या):</strong>
        <p>१. पिकाची काढणी झाल्यानंतर शेतातून इंग्रजी 'V' आकाराचा १५ सें.मी. खोल खड्डा करून बाजूची माती गोळा करा.</p>
        <p>२. शेतातून ८ ते १० ठिकाणची माती एकत्र मिसळून त्यातून अर्धा किलो माती कापडी पिशवीत भरा.</p>
        <p>३. पिशवीवर नाव, मोबाईल नंबर व पुढील पीक लिहून खालीलपैकी जवळच्या प्रयोगशाळेत जमा करा.</p>
      </div>

      {/* Centers Cards */}
      {filteredCenters.length === 0 ? (
        <div className="bg-white p-6 text-center rounded-lg border border-green-200 text-gray-500 text-xs">
          कोणतेही माती परीक्षण केंद्र सापडले नाही. कृपया वरील जिल्हा तपासा.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filteredCenters.map((center) => {
            const districtObj = MAHARASHTRA_DISTRICTS.find(d => d.id === center.district);
            const districtName = districtObj ? (currentLang === 'mr' ? districtObj.nameMr : districtObj.nameEn) : center.district;
            const talukaName = currentLang === 'mr' ? center.talukaMr : center.talukaEn;

            return (
              <div 
                key={center.id}
                className="bg-white rounded-lg border border-green-200 p-3.5 shadow-xs space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-green-800 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                    तालुका: {talukaName} ({districtName})
                  </span>
                  <span className="text-[11px] text-gray-700 bg-gray-50 px-2 py-0.5 rounded border border-gray-200">
                    तपासणी शुल्क: <strong>{currentLang === 'mr' ? center.testingFeeMr : center.testingFeeEn}</strong>
                  </span>
                </div>

                <h3 className="text-base font-bold text-gray-900 leading-snug">
                  {currentLang === 'mr' ? center.nameMr : center.nameEn}
                </h3>

                <p className="text-xs text-gray-600 bg-gray-50 p-2 rounded">
                  <strong>पत्ता:</strong> {currentLang === 'mr' ? center.addressMr : center.addressEn}
                  <br />
                  <span className="text-[11px] text-gray-500">खूण: {currentLang === 'mr' ? center.landmarkMr : center.landmarkEn}</span>
                </p>

                <p className="text-xs text-gray-600">
                  प्रयोगशाळा प्रमुख: <strong>{currentLang === 'mr' ? center.inchargeMr : center.inchargeEn}</strong>
                </p>

                <div className="pt-2 border-t border-gray-100">
                  <a
                    href={`tel:${center.phone.replace(/[^0-9]/g, '')}`}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-xs py-2 px-3 rounded flex items-center justify-center gap-1.5"
                  >
                    <span>कॉल करा: <strong className="font-mono text-sm">{center.phone}</strong></span>
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
