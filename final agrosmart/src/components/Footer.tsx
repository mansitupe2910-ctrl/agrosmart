import React from 'react';
import { Language } from '../types';

interface FooterProps {
  currentLang: Language;
  onTabChange: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onTabChange }) => {
  return (
    <footer className="bg-white border-t border-green-200 text-gray-600 mt-10 text-xs">
      <div className="max-w-4xl mx-auto px-4 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <h4 className="font-bold text-green-900 text-sm">कृषीमित्र - शेतकरी सेवा केंद्र</h4>
            <p className="text-gray-500 text-[11px] mt-0.5">
              पशुवैद्यकीय डॉक्टर, माती परीक्षण, सेतू केंद्र व शासकीय शेतकरी योजना माहिती
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-semibold text-gray-700">
            <button onClick={() => onTabChange('doctors')} className="hover:text-green-700">
              पशु डॉक्टर
            </button>
            <span>|</span>
            <button onClick={() => onTabChange('soil')} className="hover:text-green-700">
              माती परीक्षण
            </button>
            <span>|</span>
            <button onClick={() => onTabChange('setu')} className="hover:text-green-700">
              सेतू केंद्र
            </button>
            <span>|</span>
            <button onClick={() => onTabChange('schemes')} className="hover:text-green-700">
              शासकीय योजना
            </button>
            <span>|</span>
            <button onClick={() => onTabChange('admin')} className="hover:text-green-700 font-bold text-green-900">
              ॲडमिन डॅशबोर्ड
            </button>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 gap-1">
          <p>© {new Date().getFullYear()} कृषीमित्र शेतकरी माहिती पोर्टल (विद्यार्थी प्रकल्प).</p>
          <p>महाराष्ट्रातील शेतकरी बांधवांसाठी उपयुक्त माहिती</p>
        </div>
      </div>
    </footer>
  );
};
