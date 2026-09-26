import React from 'react';
import { Language, DistrictId } from '../types';
import { MAHARASHTRA_DISTRICTS } from '../data/districts';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  selectedDistrict: DistrictId | 'all';
  onDistrictChange: (district: DistrictId | 'all') => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  selectedDistrict,
  onDistrictChange,
  activeTab,
  onTabChange
}) => {
  return (
    <header className="bg-white border-b border-green-200 sticky top-0 z-30 shadow-xs">
      {/* Top Green Bar with Free Helplines */}
      <div className="bg-green-700 text-white px-3 py-1.5 text-xs">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-3 sm:gap-6 font-medium text-[11px] sm:text-xs">
            <span className="font-bold bg-green-800 px-1.5 py-0.5 rounded">
              मोफत हेल्पलाइन:
            </span>
            <a href="tel:18001801551" className="hover:underline">
              किसान कॉल सेंटर: <strong>1800-180-1551</strong>
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="tel:1962" className="hover:underline hidden sm:inline">
              पशु रुग्णवाहिका व डॉक्टर: <strong>1962</strong>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onTabChange(activeTab === 'admin' ? 'schemes' : 'admin')}
              className={`px-2 py-0.5 rounded text-xs font-bold border transition-colors ${
                activeTab === 'admin'
                  ? 'bg-amber-400 text-gray-900 border-amber-500'
                  : 'bg-green-800 text-white hover:bg-green-900 border-green-600'
              }`}
            >
              {activeTab === 'admin' ? 'शेतकरी पोर्टल पहा' : 'ॲडमिन डॅशबोर्ड'}
            </button>

            <button
              onClick={() => onLanguageChange(currentLang === 'mr' ? 'en' : 'mr')}
              className="bg-white text-green-800 hover:bg-green-50 px-2 py-0.5 rounded text-xs font-bold border border-green-300"
            >
              {currentLang === 'mr' ? 'English' : 'मराठी'}
            </button>
          </div>
        </div>
      </div>

      {/* Title & District Select */}
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-gray-100">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-green-900">
              कृषीमित्र - शेतकरी सेवा केंद्र
            </h1>
            <p className="text-xs text-gray-600">
              पशुवैद्यकीय डॉक्टर, माती परीक्षण केंद्र, सेतू केंद्र व शासकीय शेतकरी योजना
            </p>
          </div>

          {/* Simple District Dropdown */}
          <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded border border-green-200 self-start sm:self-auto">
            <label htmlFor="district" className="text-xs font-bold text-green-900">
              जिल्हा:
            </label>
            <select
              id="district"
              value={selectedDistrict}
              onChange={(e) => onDistrictChange(e.target.value as DistrictId | 'all')}
              className="bg-white text-gray-800 text-xs font-semibold rounded px-2 py-1 border border-green-300 cursor-pointer"
            >
              <option value="all">सर्व जिल्हे (महाराष्ट्र)</option>
              {MAHARASHTRA_DISTRICTS.map((d) => (
                <option key={d.id} value={d.id}>
                  {currentLang === 'mr' ? d.nameMr : d.nameEn}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 5 Clean Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-3 text-xs">
          <button
            onClick={() => onTabChange('doctors')}
            className={`py-2 px-2 rounded-md font-bold text-center border transition-colors ${
              activeTab === 'doctors'
                ? 'bg-green-600 text-white border-green-600 shadow-xs'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-green-50'
            }`}
          >
            १. पशु डॉक्टर
          </button>

          <button
            onClick={() => onTabChange('soil')}
            className={`py-2 px-2 rounded-md font-bold text-center border transition-colors ${
              activeTab === 'soil'
                ? 'bg-green-600 text-white border-green-600 shadow-xs'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-green-50'
            }`}
          >
            २. माती परीक्षण
          </button>

          <button
            onClick={() => onTabChange('setu')}
            className={`py-2 px-2 rounded-md font-bold text-center border transition-colors ${
              activeTab === 'setu'
                ? 'bg-green-600 text-white border-green-600 shadow-xs'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-green-50'
            }`}
          >
            ३. सेतू केंद्र
          </button>

          <button
            onClick={() => onTabChange('schemes')}
            className={`py-2 px-2 rounded-md font-bold text-center border transition-colors ${
              activeTab === 'schemes'
                ? 'bg-green-600 text-white border-green-600 shadow-xs'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-green-50'
            }`}
          >
            ४. शासकीय योजना
          </button>

          <button
            onClick={() => onTabChange('admin')}
            className={`py-2 px-2 rounded-md font-bold text-center border transition-colors col-span-2 sm:col-span-1 ${
              activeTab === 'admin'
                ? 'bg-green-800 text-white border-green-800 shadow-xs'
                : 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100'
            }`}
          >
            ५. ॲडमिन डॅशबोर्ड
          </button>
        </div>
      </div>
    </header>
  );
};
