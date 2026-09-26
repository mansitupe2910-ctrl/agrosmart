import React, { useState } from 'react';
import { Language } from '../types';
import { Sprout, Calculator, FlaskConical, CheckCircle } from 'lucide-react';

interface FertilizerCalculatorProps {
  currentLang: Language;
}

interface CropFertilizerData {
  id: string;
  nameMr: string;
  nameEn: string;
  nPerAcre: number;
  pPerAcre: number;
  kPerAcre: number;
  ureaBagsPerAcre: number;
  dapBagsPerAcre: number;
  mopBagsPerAcre: number;
  complex102626Bags: number;
  stagesMr: string[];
  stagesEn: string[];
  organicAdviceMr: string;
  organicAdviceEn: string;
}

const CROPS_DATA: CropFertilizerData[] = [
  {
    id: 'cotton',
    nameMr: 'कापूस (बीटी कॉटन)',
    nameEn: 'Bt Cotton',
    nPerAcre: 48,
    pPerAcre: 24,
    kPerAcre: 24,
    ureaBagsPerAcre: 2,
    dapBagsPerAcre: 1,
    mopBagsPerAcre: 0.8,
    complex102626Bags: 2,
    stagesMr: [
      'पेरणीवेळी: १ गोणी १०:२६:२६ किंवा १ गोणी डीएपी + अर्धी गोणी पोटॅश',
      '३० दिवसांनी: अर्धी गोणी युरिया + ५ किलो झिंक सल्फेट',
      '६० दिवसांनी (बोंड भरताना): अर्धी गोणी युरिया + अर्धी गोणी पोटॅश'
    ],
    stagesEn: [
      'At Sowing: 1 bag 10:26:26 or 1 bag DAP + 0.5 bag MOP',
      'At 30 Days: 0.5 bag Urea + 5kg Zinc',
      'At 60 Days: 0.5 bag Urea + 0.5 bag MOP'
    ],
    organicAdviceMr: 'पेरणीपूर्वी एकरी ५ ट्रॉली चांगले कुजलेले शेणखत जमिनीत मिसळावे.',
    organicAdviceEn: 'Add 5 trolleys well-rotted FYM per acre.'
  },
  {
    id: 'soybean',
    nameMr: 'सोयाबीन',
    nameEn: 'Soybean',
    nPerAcre: 12,
    pPerAcre: 24,
    kPerAcre: 12,
    ureaBagsPerAcre: 0.5,
    dapBagsPerAcre: 1,
    mopBagsPerAcre: 0.4,
    complex102626Bags: 1,
    stagesMr: [
      'पेरणीच्या वेळी: १ गोणी डीएपी + १५ किलो पोटॅश किंवा १ गोणी १२:३२:१६',
      'सोयाबीन हवेतील नत्र शोषून घेते, त्यामुळे जास्त युरिया देऊ नये.',
      'फुलोरा अवस्थेत १९:१९:१९ ची फवारणी करावी.'
    ],
    stagesEn: [
      'At Sowing: 1 bag DAP + 15kg MOP',
      'Avoid excess urea as soybean fixes nitrogen.',
      '19:19:19 spray during early flowering.'
    ],
    organicAdviceMr: 'बीजप्रक्रिया करताना रायझोबियम जिवाणू संवर्धक २५ ग्रॅम प्रति किलो चोळावे.',
    organicAdviceEn: 'Rhizobium seed treatment @ 25g/kg.'
  },
  {
    id: 'sugarcane',
    nameMr: 'ऊस (सुरू / पूर्वहंगामी)',
    nameEn: 'Sugarcane',
    nPerAcre: 100,
    pPerAcre: 46,
    kPerAcre: 46,
    ureaBagsPerAcre: 4.5,
    dapBagsPerAcre: 2,
    mopBagsPerAcre: 1.5,
    complex102626Bags: 4,
    stagesMr: [
      'लागवडीवेळी: १ गोणी डीएपी + १ गोणी पोटॅश + अर्धी गोणी युरिया',
      '६ ते ८ आठवड्यांनी: १ गोणी युरिया + अर्धी गोणी पोटॅश',
      'मोठी बांधणी (४ महिने): २ गोणी युरिया + १ गोणी डीएपी + १ गोणी पोटॅश'
    ],
    stagesEn: [
      'At Planting: 1 bag DAP + 1 bag MOP + 0.5 bag Urea',
      'At 6-8 weeks: 1 bag Urea + 0.5 bag MOP',
      'Big Earthing Up: 2 bags Urea + 1 bag DAP + 1 bag MOP'
    ],
    organicAdviceMr: 'लागवडीवेळी १० टन शेणखत किंवा प्रेसमड जमिनीत टाकावे.',
    organicAdviceEn: 'Apply 10 tonnes FYM or pressmud.'
  },
  {
    id: 'onion',
    nameMr: 'कांदा (रब्बी व खरीप)',
    nameEn: 'Onion',
    nPerAcre: 40,
    pPerAcre: 20,
    kPerAcre: 20,
    ureaBagsPerAcre: 1.8,
    dapBagsPerAcre: 0.9,
    mopBagsPerAcre: 0.7,
    complex102626Bags: 1.5,
    stagesMr: [
      'पुनर्लागवडीवेळी: १ गोणी १०:२६:२६ + १० किलो गंधक (Sulphur)',
      '३० दिवसांनी: १ गोणी युरिया खुरपणीनंतर द्यावा.',
      'गंधकामुळे कांद्याची साठवण क्षमता वाढते.'
    ],
    stagesEn: [
      'At Transplanting: 1 bag 10:26:26 + 10kg Sulphur',
      'At 30 Days: 1 bag Urea',
      'Sulphur improves storage quality.'
    ],
    organicAdviceMr: 'ट्रायकोडर्मा युक्त गांडूळ खत उत्तम फायदेशीर ठरते.',
    organicAdviceEn: 'Trichoderma vermicompost prevents rot.'
  },
  {
    id: 'wheat',
    nameMr: 'गहू (रब्बी बागायत)',
    nameEn: 'Wheat',
    nPerAcre: 48,
    pPerAcre: 24,
    kPerAcre: 16,
    ureaBagsPerAcre: 2,
    dapBagsPerAcre: 1,
    mopBagsPerAcre: 0.5,
    complex102626Bags: 1.8,
    stagesMr: [
      'पेरणीवेळी: १ गोणी डीएपी + अर्धी गोणी पोटॅश + अर्धी गोणी युरिया',
      '२१ दिवसांनी (पहिले पाणी): १ गोणी युरिया',
      '४५ दिवसांनी (कांडी अवस्था): अर्धी गोणी युरिया'
    ],
    stagesEn: [
      'At Sowing: 1 bag DAP + 0.5 bag MOP + 0.5 bag Urea',
      'At 21 Days: 1 bag Urea',
      'At 45 Days: 0.5 bag Urea'
    ],
    organicAdviceMr: 'गव्हाच्या दाण्यांच्या भराव्यासाठी झिंक सल्फेट १० किलो द्यावे.',
    organicAdviceEn: 'Apply 10kg Zinc Sulphate at sowing.'
  }
];

export const FertilizerCalculator: React.FC<FertilizerCalculatorProps> = ({ currentLang }) => {
  const [selectedCropId, setSelectedCropId] = useState<string>('cotton');
  const [areaValue, setAreaValue] = useState<number>(1);
  const [areaUnit, setAreaUnit] = useState<'acre' | 'guntha'>('acre');

  const selectedCrop = CROPS_DATA.find(c => c.id === selectedCropId) || CROPS_DATA[0];

  const totalAcres = areaUnit === 'acre' ? areaValue : areaValue / 40;

  const totalN = Math.round(selectedCrop.nPerAcre * totalAcres);
  const totalP = Math.round(selectedCrop.pPerAcre * totalAcres);
  const totalK = Math.round(selectedCrop.kPerAcre * totalAcres);

  const totalUreaBags = (selectedCrop.ureaBagsPerAcre * totalAcres).toFixed(1);
  const totalDapBags = (selectedCrop.dapBagsPerAcre * totalAcres).toFixed(1);
  const totalMopBags = (selectedCrop.mopBagsPerAcre * totalAcres).toFixed(1);
  const total102626Bags = (selectedCrop.complex102626Bags * totalAcres).toFixed(1);

  return (
    <div className="space-y-4">
      {/* Banner */}
      <div className="bg-white p-4 sm:p-5 rounded-lg border border-green-200 shadow-xs">
        <div className="flex items-center gap-2 text-green-700 font-bold text-sm">
          <Calculator className="w-4 h-4" />
          <span>कृषी विद्यापीठ शिफारशीत खत मात्रा</span>
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-0.5">
          पिकांनुसार खत मात्रा कॅल्क्युलेटर (Fertilizer Calculator)
        </h2>
        <p className="text-xs text-gray-600 mt-0.5">
          आपल्या शेताच्या क्षेत्रानुसार खतांची अचूक मात्रा व गोण्यांची संख्या जाणून घ्या.
        </p>
      </div>

      {/* Inputs Card */}
      <div className="bg-white p-4 sm:p-5 rounded-lg border border-green-200 shadow-xs space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="text-xs font-semibold text-gray-700 block mb-1">
              १. पीक निवडा:
            </label>
            <select
              value={selectedCropId}
              onChange={(e) => setSelectedCropId(e.target.value)}
              className="w-full p-1.5 bg-white border border-gray-300 rounded text-xs text-gray-900 focus:outline-none focus:border-green-600"
            >
              {CROPS_DATA.map((c) => (
                <option key={c.id} value={c.id}>
                  {currentLang === 'mr' ? c.nameMr : c.nameEn}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-700 block mb-1">
              २. क्षेत्र (Area):
            </label>
            <input
              type="number"
              min="0.25"
              step="0.25"
              value={areaValue}
              onChange={(e) => setAreaValue(Math.max(0.1, parseFloat(e.target.value) || 1))}
              className="w-full p-1.5 bg-white border border-gray-300 rounded text-xs text-gray-900 focus:outline-none focus:border-green-600"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-700 block mb-1">
              ३. एकक (Unit):
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                type="button"
                onClick={() => setAreaUnit('acre')}
                className={`p-1.5 rounded text-xs font-semibold border ${
                  areaUnit === 'acre'
                    ? 'bg-green-600 text-white border-green-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                एकर (Acre)
              </button>
              <button
                type="button"
                onClick={() => setAreaUnit('guntha')}
                className={`p-1.5 rounded text-xs font-semibold border ${
                  areaUnit === 'guntha'
                    ? 'bg-green-600 text-white border-green-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                गुंठे (Gunthe)
              </button>
            </div>
          </div>
        </div>

        {/* Total Pure Nutrient Needed */}
        <div className="bg-green-50 p-3 rounded border border-green-200 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div>
            <span className="font-bold text-green-900 block">
              {areaValue} {areaUnit === 'acre' ? 'एकर' : 'गुंठे'} क्षेत्रासाठी शुद्ध अन्नद्रव्ये गरज:
            </span>
            <div className="flex gap-4 mt-0.5 text-gray-800 font-semibold">
              <span>नत्र (N): <strong className="text-green-800">{totalN} kg</strong></span>
              <span>स्फुरद (P): <strong className="text-green-800">{totalP} kg</strong></span>
              <span>पालाश (K): <strong className="text-green-800">{totalK} kg</strong></span>
            </div>
          </div>
          <span className="text-[11px] text-green-800 font-medium">MPKV राहुरी शिफारशीत</span>
        </div>

        {/* Bags Grid */}
        <div>
          <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
            अंदाजे खतांच्या ५० किलोच्या गोण्या (Estimated Bags):
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-3 bg-gray-50 border border-gray-200 rounded text-center">
              <span className="text-xs text-gray-500 block">युरिया</span>
              <strong className="text-lg text-green-800 block my-0.5">{totalUreaBags}</strong>
              <span className="text-[10px] text-gray-500">गोण्या</span>
            </div>

            <div className="p-3 bg-gray-50 border border-gray-200 rounded text-center">
              <span className="text-xs text-gray-500 block">डीएपी (DAP)</span>
              <strong className="text-lg text-green-800 block my-0.5">{totalDapBags}</strong>
              <span className="text-[10px] text-gray-500">गोण्या</span>
            </div>

            <div className="p-3 bg-gray-50 border border-gray-200 rounded text-center">
              <span className="text-xs text-gray-500 block">पोटॅश (MOP)</span>
              <strong className="text-lg text-green-800 block my-0.5">{totalMopBags}</strong>
              <span className="text-[10px] text-gray-500">गोण्या</span>
            </div>

            <div className="p-3 bg-green-50/70 border border-green-200 rounded text-center">
              <span className="text-xs text-green-800 block">किंवा 10:26:26</span>
              <strong className="text-lg text-green-900 block my-0.5">{total102626Bags}</strong>
              <span className="text-[10px] text-green-700">गोण्या</span>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="space-y-1.5 pt-1">
          <h4 className="text-xs font-bold text-gray-700">खते देण्याच्या अचूक वेळा:</h4>
          <div className="space-y-1 text-xs text-gray-700">
            {(currentLang === 'mr' ? selectedCrop.stagesMr : selectedCrop.stagesEn).map((stage, idx) => (
              <div key={idx} className="p-2 bg-gray-50 rounded border border-gray-100 flex items-start gap-1.5">
                <span className="text-green-700 font-bold">•</span>
                <span>{stage}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Organic Tip */}
        <p className="text-xs text-green-900 bg-green-50/80 p-2.5 rounded border border-green-200">
          <strong>टीप: </strong>
          {currentLang === 'mr' ? selectedCrop.organicAdviceMr : selectedCrop.organicAdviceEn}
        </p>
      </div>
    </div>
  );
};
