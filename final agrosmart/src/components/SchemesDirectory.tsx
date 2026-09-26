import React, { useState, useMemo } from 'react';
import { GovtScheme, Language } from '../types';
import { SchemeDatabase } from '../services/schemeDatabase';
import { Search, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface SchemesDirectoryProps {
  currentLang: Language;
}

export const SchemesDirectory: React.FC<SchemesDirectoryProps> = ({ currentLang }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Read schemes from the SchemeDatabase
  const schemesList = useMemo(() => {
    return SchemeDatabase.getAll().filter(s => s.isActive ?? true);
  }, []);

  const filteredSchemes = useMemo(() => {
    if (searchTerm.trim() === '') return schemesList;
    const term = searchTerm.toLowerCase();
    return schemesList.filter((scheme) => {
      const matchTitle = scheme.titleMr.toLowerCase().includes(term) || scheme.titleEn.toLowerCase().includes(term);
      const matchSummary = scheme.shortSummaryMr.toLowerCase().includes(term) || scheme.shortSummaryEn.toLowerCase().includes(term);
      return matchTitle || matchSummary;
    });
  }, [schemesList, searchTerm]);

  return (
    <div className="space-y-3">
      {/* Search */}
      <div className="bg-white p-3 rounded-lg border border-green-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-2.5 top-2.5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="योजना शोधा (उदा. सोलर पंप, शेततळे, विमा)..."
            className="w-full pl-8 pr-3 py-1.5 bg-white border border-gray-300 rounded text-xs focus:outline-none focus:border-green-600"
          />
        </div>

        <span className="text-xs text-gray-600 font-semibold self-start sm:self-auto">
          उपलब्ध योजना: <strong className="text-green-800">{filteredSchemes.length}</strong>
        </span>
      </div>

      {/* Schemes Cards */}
      <div className="space-y-3">
        {filteredSchemes.map((scheme) => {
          const isExpanded = expandedId === scheme.id;

          return (
            <div
              key={scheme.id}
              className="bg-white rounded-lg border border-green-200 p-4 shadow-xs space-y-2.5"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[11px] font-semibold text-green-800 bg-green-50 px-2 py-0.5 rounded border border-green-200 inline-block mb-1">
                    विभाग: {currentLang === 'mr' ? scheme.departmentMr : scheme.departmentEn}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">
                    {currentLang === 'mr' ? scheme.titleMr : scheme.titleEn}
                  </h3>
                </div>

                <span className="bg-green-50 text-green-900 border border-green-300 text-xs font-bold px-2.5 py-1 rounded self-start sm:self-auto">
                  लाभ: {currentLang === 'mr' ? scheme.subsidyBenefitMr : scheme.subsidyBenefitEn}
                </span>
              </div>

              {/* Summary */}
              <p className="text-xs text-gray-700 leading-relaxed">
                {currentLang === 'mr' ? scheme.shortSummaryMr : scheme.shortSummaryEn}
              </p>

              {/* Expanded details */}
              {isExpanded && (
                <div className="pt-2 border-t border-gray-100 space-y-2.5 text-xs text-gray-700">
                  {/* Eligibility */}
                  <div className="bg-gray-50 p-2.5 rounded">
                    <strong className="text-green-900 font-bold block mb-1">१. कोणाला लाभ मिळतो? (पात्रता):</strong>
                    <ul className="list-disc pl-4 space-y-0.5">
                      {(currentLang === 'mr' ? scheme.eligibilityCriteriaMr : scheme.eligibilityCriteriaEn).map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Documents */}
                  <div className="bg-gray-50 p-2.5 rounded">
                    <strong className="text-green-900 font-bold block mb-1">२. आवश्यक कागदपत्रे:</strong>
                    <p>{(currentLang === 'mr' ? scheme.requiredDocumentsMr : scheme.requiredDocumentsEn).join(', ')}</p>
                  </div>

                  {/* How to apply */}
                  <div className="bg-green-50/60 p-2.5 rounded border border-green-100">
                    <strong className="text-green-900 font-bold block mb-1">३. अर्ज कसा करावा?:</strong>
                    {(currentLang === 'mr' ? scheme.applicationProcessStepsMr : scheme.applicationProcessStepsEn).map((step, idx) => (
                      <p key={idx} className="mb-0.5">• {step}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setExpandedId(isExpanded ? null : scheme.id)}
                  className="text-xs font-semibold text-green-800 bg-green-50 hover:bg-green-100 px-3 py-1.5 rounded border border-green-300 flex items-center gap-1"
                >
                  <span>{isExpanded ? 'माहिती बंद करा' : 'सविस्तर माहिती वाचा'}</span>
                  {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                <a
                  href={scheme.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold text-xs py-1.5 px-3 rounded flex items-center gap-1"
                >
                  <span>अधिकृत वेबसाईट</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
