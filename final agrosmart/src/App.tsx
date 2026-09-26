/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language, DistrictId } from './types';
import { Header } from './components/Header';
import { VeterinaryDirectory } from './components/VeterinaryDirectory';
import { SoilTestingDirectory } from './components/SoilTestingDirectory';
import { SetuHelpdeskDirectory } from './components/SetuHelpdeskDirectory';
import { SchemesDirectory } from './components/SchemesDirectory';
import { AdminPortal } from './components/AdminPortal';
import { Footer } from './components/Footer';
import { MAHARASHTRA_DISTRICTS } from './data/districts';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('mr');
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictId | 'all'>('all');
  const [activeTab, setActiveTab] = useState<string>('doctors');

  const selectedDistrictName = selectedDistrict === 'all' 
    ? (currentLang === 'mr' ? 'सर्व महाराष्ट्र' : 'All Maharashtra')
    : (() => {
        const d = MAHARASHTRA_DISTRICTS.find(item => item.id === selectedDistrict);
        return d ? (currentLang === 'mr' ? d.nameMr : d.nameEn) : selectedDistrict;
      })();

  return (
    <div className="min-h-screen bg-[#f7faf7] text-gray-800 flex flex-col font-['Noto_Sans_Devanagari',sans-serif]">
      {/* Header */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        selectedDistrict={selectedDistrict}
        onDistrictChange={setSelectedDistrict}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-3 sm:px-4 py-4 space-y-3.5">
        {/* District Active Notice */}
        {selectedDistrict !== 'all' && (
          <div className="bg-white border border-green-200 rounded px-3 py-1.5 flex items-center justify-between text-xs text-gray-700">
            <span>
              निवडलेला जिल्हा: <strong className="text-green-800 font-bold">{selectedDistrictName}</strong>
            </span>
            <button
              onClick={() => setSelectedDistrict('all')}
              className="text-green-700 hover:underline font-semibold"
            >
              सर्व जिल्हे पहा (Reset)
            </button>
          </div>
        )}

        {/* Tab 1: Veterinary Doctors */}
        {activeTab === 'doctors' && (
          <VeterinaryDirectory
            currentLang={currentLang}
            selectedDistrict={selectedDistrict}
            onDistrictChange={setSelectedDistrict}
          />
        )}

        {/* Tab 2: Soil Testing Labs */}
        {activeTab === 'soil' && (
          <SoilTestingDirectory
            currentLang={currentLang}
            selectedDistrict={selectedDistrict}
            onDistrictChange={setSelectedDistrict}
          />
        )}

        {/* Tab 3: Setu & Help Desks */}
        {activeTab === 'setu' && (
          <SetuHelpdeskDirectory
            currentLang={currentLang}
            selectedDistrict={selectedDistrict}
            onDistrictChange={setSelectedDistrict}
          />
        )}

        {/* Tab 4: Schemes */}
        {activeTab === 'schemes' && (
          <SchemesDirectory currentLang={currentLang} />
        )}

        {/* Tab 5: Admin Portal & Schemes Database Dashboard */}
        {activeTab === 'admin' && (
          <AdminPortal currentLang={currentLang} />
        )}
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} onTabChange={setActiveTab} />
    </div>
  );
}
