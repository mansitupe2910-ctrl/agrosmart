import React, { useState, useMemo } from 'react';
import { GovtScheme, Language, SchemeCategory } from '../types';
import { SchemeDatabase } from '../services/schemeDatabase';
import { 
  Search, 
  Plus, 
  Trash2, 
  Edit3, 
  Eye, 
  Download, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Database, 
  Layers, 
  Users, 
  DollarSign, 
  Copy, 
  Check, 
  X,
  Terminal
} from 'lucide-react';

interface AdminPortalProps {
  currentLang: Language;
  onRefreshPublicSchemes?: () => void;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({ currentLang, onRefreshPublicSchemes }) => {
  const [schemes, setSchemes] = useState<GovtScheme[]>(() => SchemeDatabase.getAll());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'active' | 'inactive'>('all');
  
  // Modals
  const [viewScheme, setViewScheme] = useState<GovtScheme | null>(null);
  const [editScheme, setEditScheme] = useState<GovtScheme | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSqlModalOpen, setIsSqlModalOpen] = useState(false);
  const [activeSqlTab, setActiveSqlTab] = useState<'cmd' | 'phpmyadmin' | 'sql_preview'>('cmd');
  const [copiedSql, setCopiedSql] = useState(false);
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  // Form State for Add / Edit
  const [formData, setFormData] = useState({
    titleMr: '',
    titleEn: '',
    departmentMr: 'कृषी विभाग, महाराष्ट्र शासन',
    departmentEn: 'Department of Agriculture, GoM',
    category: 'financial_support' as SchemeCategory,
    subsidyBenefitMr: '',
    subsidyBenefitEn: '',
    shortSummaryMr: '',
    budgetCrores: 100,
    beneficiaryTarget: 25000,
    portalName: 'महाडीबीटी पोर्टल',
    portalUrl: 'https://mahadbt.maharashtra.gov.in',
    helplineNumber: '1800-180-1551',
    eligibilityCriteriaMr: '',
    requiredDocumentsMr: ''
  });

  const reloadData = () => {
    const list = SchemeDatabase.getAll();
    setSchemes(list);
    if (onRefreshPublicSchemes) {
      onRefreshPublicSchemes();
    }
  };

  // Metrics
  const metrics = useMemo(() => {
    const total = schemes.length;
    const active = schemes.filter(s => s.isActive ?? true).length;
    const totalBudget = schemes.reduce((acc, s) => acc + (s.budgetCrores || 0), 0);
    const totalBeneficiaries = schemes.reduce((acc, s) => acc + (s.beneficiaryTarget || 0), 0);

    const depts = Array.from(new Set(schemes.map(s => s.departmentMr)));

    return {
      total,
      active,
      inactive: total - active,
      totalBudget,
      totalBeneficiaries,
      depts
    };
  }, [schemes]);

  // Filtered List
  const filteredSchemes = useMemo(() => {
    return schemes.filter(s => {
      // Search
      if (searchTerm.trim() !== '') {
        const term = searchTerm.toLowerCase();
        const matchTitle = s.titleMr.toLowerCase().includes(term) || s.titleEn.toLowerCase().includes(term);
        const matchDept = s.departmentMr.toLowerCase().includes(term) || s.departmentEn.toLowerCase().includes(term);
        if (!matchTitle && !matchDept) return false;
      }
      // Department filter
      if (selectedDept !== 'all' && s.departmentMr !== selectedDept) {
        return false;
      }
      // Status filter
      if (selectedStatus === 'active' && !(s.isActive ?? true)) return false;
      if (selectedStatus === 'inactive' && (s.isActive ?? true)) return false;

      return true;
    });
  }, [schemes, searchTerm, selectedDept, selectedStatus]);

  // Actions
  const handleToggleStatus = (id: string) => {
    SchemeDatabase.toggleStatus(id);
    reloadData();
  };

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`तुम्हाला खात्री आहे का की '${title}' ही योजना डेटाबेसमधून हटवायची आहे?`)) {
      SchemeDatabase.delete(id);
      reloadData();
    }
  };

  const handleResetData = () => {
    if (window.confirm('सर्व मूळ डीफॉल्ट योजना पुन्हा लोड करायच्या आहेत का? तुम्ही केलेले बदल नष्ट होतील.')) {
      SchemeDatabase.reset();
      reloadData();
    }
  };

  const handleOpenAddModal = () => {
    setFormData({
      titleMr: '',
      titleEn: '',
      departmentMr: 'कृषी विभाग, महाराष्ट्र शासन',
      departmentEn: 'Department of Agriculture, GoM',
      category: 'financial_support',
      subsidyBenefitMr: '',
      subsidyBenefitEn: '',
      shortSummaryMr: '',
      budgetCrores: 100,
      beneficiaryTarget: 25000,
      portalName: 'महाडीबीटी पोर्टल',
      portalUrl: 'https://mahadbt.maharashtra.gov.in',
      helplineNumber: '1800-180-1551',
      eligibilityCriteriaMr: '१. शेतकरी असणे आवश्यक\n२. ७/१२ उतारा स्वतःच्या नावावर असावा\n३. बँक खाते आधार लिंक असावे',
      requiredDocumentsMr: 'आधार कार्ड, ७/१२ उतारा, ८-अ, बँक पासबुक'
    });
    setEditScheme(null);
    setIsAddModalOpen(true);
  };

  const handleOpenEditModal = (scheme: GovtScheme) => {
    setEditScheme(scheme);
    setFormData({
      titleMr: scheme.titleMr,
      titleEn: scheme.titleEn,
      departmentMr: scheme.departmentMr,
      departmentEn: scheme.departmentEn,
      category: scheme.category,
      subsidyBenefitMr: scheme.subsidyBenefitMr,
      subsidyBenefitEn: scheme.subsidyBenefitEn,
      shortSummaryMr: scheme.shortSummaryMr,
      budgetCrores: scheme.budgetCrores || 100,
      beneficiaryTarget: scheme.beneficiaryTarget || 25000,
      portalName: scheme.portalName,
      portalUrl: scheme.portalUrl,
      helplineNumber: scheme.helplineNumber || '1800-180-1551',
      eligibilityCriteriaMr: scheme.eligibilityCriteriaMr ? scheme.eligibilityCriteriaMr.join('\n') : '',
      requiredDocumentsMr: scheme.requiredDocumentsMr ? scheme.requiredDocumentsMr.join(', ') : ''
    });
    setIsAddModalOpen(true);
  };

  const handleSaveForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.titleMr.trim()) {
      alert('कृपया योजनेचे शीर्षक टाका.');
      return;
    }

    const eligArray = formData.eligibilityCriteriaMr
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean);

    const docArray = formData.requiredDocumentsMr
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    if (editScheme) {
      // Update
      SchemeDatabase.update(editScheme.id, {
        titleMr: formData.titleMr,
        titleEn: formData.titleEn || formData.titleMr,
        departmentMr: formData.departmentMr,
        departmentEn: formData.departmentEn,
        category: formData.category,
        subsidyBenefitMr: formData.subsidyBenefitMr,
        subsidyBenefitEn: formData.subsidyBenefitEn || formData.subsidyBenefitMr,
        shortSummaryMr: formData.shortSummaryMr,
        budgetCrores: Number(formData.budgetCrores),
        beneficiaryTarget: Number(formData.beneficiaryTarget),
        portalName: formData.portalName,
        portalUrl: formData.portalUrl,
        helplineNumber: formData.helplineNumber,
        eligibilityCriteriaMr: eligArray,
        requiredDocumentsMr: docArray
      });
    } else {
      // Create
      SchemeDatabase.create({
        titleMr: formData.titleMr,
        titleEn: formData.titleEn || formData.titleMr,
        departmentMr: formData.departmentMr,
        departmentEn: formData.departmentEn,
        category: formData.category,
        subsidyBenefitMr: formData.subsidyBenefitMr,
        subsidyBenefitEn: formData.subsidyBenefitEn || formData.subsidyBenefitMr,
        shortSummaryMr: formData.shortSummaryMr,
        budgetCrores: Number(formData.budgetCrores),
        beneficiaryTarget: Number(formData.beneficiaryTarget),
        portalName: formData.portalName,
        portalUrl: formData.portalUrl,
        helplineNumber: formData.helplineNumber,
        eligibilityCriteriaMr: eligArray,
        requiredDocumentsMr: docArray
      });
    }

    setIsAddModalOpen(false);
    reloadData();
  };

  const handleDownloadSql = () => {
    const sql = SchemeDatabase.generateSqlDump();
    const blob = new Blob([sql], { type: 'text/sql' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'agrosmart_schemes.sql';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopySql = () => {
    const sql = SchemeDatabase.generateSqlDump();
    navigator.clipboard.writeText(sql);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Top Banner & Control Actions */}
      <div className="bg-white rounded-lg border border-green-200 p-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-[11px] font-bold text-green-800 bg-green-50 px-2 py-0.5 rounded border border-green-200">
            प्रशासकीय नियंत्रण कक्ष (Admin Portal)
          </span>
          <h2 className="text-xl font-bold text-green-950 mt-1">
            शासकीय योजना डेटाबेस व डॅशबोर्ड
          </h2>
          <p className="text-xs text-gray-600">
            योजनांची माहिती, मंजुरी, लाभार्थी लक्ष्य व्यवस्थापन आणि XAMPP MySQL डेटाबेस एकत्रीकरण
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleOpenAddModal}
            className="bg-green-600 hover:bg-green-700 text-white font-bold text-xs px-3 py-2 rounded flex items-center gap-1.5 shadow-xs"
          >
            <Plus className="w-4 h-4" />
            <span>नवीन योजना जोडा</span>
          </button>

          <button
            onClick={() => setIsSqlModalOpen(true)}
            className="bg-white hover:bg-green-50 text-green-800 border border-green-300 font-bold text-xs px-3 py-2 rounded flex items-center gap-1.5"
          >
            <Database className="w-4 h-4 text-green-700" />
            <span>XAMPP / MySQL डेटाबेस</span>
          </button>

          <button
            onClick={handleResetData}
            title="डीफॉल्ट डेटा पूर्ववत करा"
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs px-2.5 py-2 rounded border border-gray-300 flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>रिसेट</span>
          </button>
        </div>
      </div>

      {/* 4 Dashboard Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <div className="bg-white p-3.5 rounded-lg border border-green-200 shadow-xs">
          <div className="flex items-center justify-between text-gray-500 mb-1">
            <span className="text-xs font-semibold">एकूण योजना</span>
            <Layers className="w-4 h-4 text-green-700" />
          </div>
          <p className="text-2xl font-bold text-green-900">{metrics.total}</p>
          <span className="text-[11px] text-gray-500">डेटाबेसमध्ये नोंदणीकृत</span>
        </div>

        <div className="bg-white p-3.5 rounded-lg border border-green-200 shadow-xs">
          <div className="flex items-center justify-between text-gray-500 mb-1">
            <span className="text-xs font-semibold">सक्रिय योजना</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-2xl font-bold text-emerald-700">{metrics.active}</p>
          <span className="text-[11px] text-emerald-600">सध्या अर्ज सुरू आहेत</span>
        </div>

        <div className="bg-white p-3.5 rounded-lg border border-green-200 shadow-xs">
          <div className="flex items-center justify-between text-gray-500 mb-1">
            <span className="text-xs font-semibold">लाभार्थी उद्दिष्ट</span>
            <Users className="w-4 h-4 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-blue-900">
            {(metrics.totalBeneficiaries / 100000).toFixed(1)} लाख
          </p>
          <span className="text-[11px] text-gray-500">महाराष्ट्रातील शेतकरी लक्ष्य</span>
        </div>

        <div className="bg-white p-3.5 rounded-lg border border-green-200 shadow-xs">
          <div className="flex items-center justify-between text-gray-500 mb-1">
            <span className="text-xs font-semibold">एकूण मंजूर निधी</span>
            <DollarSign className="w-4 h-4 text-amber-600" />
          </div>
          <p className="text-2xl font-bold text-amber-900">
            ₹{metrics.totalBudget.toLocaleString()} कोटी
          </p>
          <span className="text-[11px] text-gray-500">शासकीय अनुदान बजेट</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-3 rounded-lg border border-green-200 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2.5">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-2.5 top-2.5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="योजना किंवा विभाग शोधा..."
            className="w-full pl-8 pr-3 py-1.5 bg-white border border-gray-300 rounded text-xs focus:outline-none focus:border-green-600"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Department Filter */}
          <select
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            className="bg-white text-xs border border-gray-300 rounded px-2.5 py-1.5 font-medium text-gray-700"
          >
            <option value="all">सर्व विभाग</option>
            {metrics.depts.map((d, idx) => (
              <option key={idx} value={d}>{d}</option>
            ))}
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value as any)}
            className="bg-white text-xs border border-gray-300 rounded px-2.5 py-1.5 font-medium text-gray-700"
          >
            <option value="all">सर्व स्थिती (Status)</option>
            <option value="active">फक्त चालू (Active)</option>
            <option value="inactive">फक्त स्थगित (Inactive)</option>
          </select>

          <span className="text-xs font-bold text-gray-600 ml-1">
            नोंदी: <span className="text-green-800">{filteredSchemes.length}</span>
          </span>
        </div>
      </div>

      {/* Schemes Database Table (Desktop & Mobile Friendly) */}
      <div className="bg-white rounded-lg border border-green-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-green-50/80 border-b border-green-200 text-green-950 font-bold">
              <tr>
                <th className="p-3">योजनेचे नाव व विभाग</th>
                <th className="p-3">अनुदान लाभ</th>
                <th className="p-3">अंदाजे निधी व उद्दिष्ट</th>
                <th className="p-3 text-center">स्थिती</th>
                <th className="p-3 text-right">कृती (Actions)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredSchemes.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-6 text-center text-gray-500">
                    कोणतीही योजना सापडली नाही.
                  </td>
                </tr>
              ) : (
                filteredSchemes.map((scheme) => {
                  const isActive = scheme.isActive ?? true;

                  return (
                    <tr key={scheme.id} className="hover:bg-green-50/30 transition-colors">
                      {/* Name & Dept */}
                      <td className="p-3 max-w-xs">
                        <div className="font-bold text-gray-900 text-sm">{scheme.titleMr}</div>
                        <div className="text-[11px] text-gray-500">{scheme.departmentMr}</div>
                        <div className="text-[10px] text-gray-400 font-mono mt-0.5">ID: {scheme.id}</div>
                      </td>

                      {/* Benefit */}
                      <td className="p-3 max-w-xs text-gray-700">
                        <div className="font-semibold text-green-800">{scheme.subsidyBenefitMr}</div>
                        <div className="text-[11px] text-gray-500 line-clamp-1">{scheme.shortSummaryMr}</div>
                      </td>

                      {/* Budget & Target */}
                      <td className="p-3 whitespace-nowrap">
                        <div className="font-bold text-gray-900">₹{scheme.budgetCrores || 0} कोटी</div>
                        <div className="text-[11px] text-gray-500">
                          {(scheme.beneficiaryTarget || 0).toLocaleString()} शेतकरी
                        </div>
                      </td>

                      {/* Status Toggle */}
                      <td className="p-3 text-center whitespace-nowrap">
                        <button
                          onClick={() => handleToggleStatus(scheme.id)}
                          title="स्थिती बदलण्यासाठी क्लिक करा"
                          className={`px-2 py-0.5 rounded text-[11px] font-bold border transition-colors ${
                            isActive
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100'
                              : 'bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200'
                          }`}
                        >
                          {isActive ? 'चालू (Active)' : 'स्थगित (Inactive)'}
                        </button>
                      </td>

                      {/* Actions */}
                      <td className="p-3 text-right whitespace-nowrap space-x-1">
                        <button
                          onClick={() => setViewScheme(scheme)}
                          title="माहिती पहा"
                          className="p-1.5 text-gray-600 hover:text-green-700 hover:bg-green-50 rounded"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleOpenEditModal(scheme)}
                          title="बदल करा (Edit)"
                          className="p-1.5 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(scheme.id, scheme.titleMr)}
                          title="डेटाबेसमधून हटवा"
                          className="p-1.5 text-gray-600 hover:text-red-700 hover:bg-red-50 rounded"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL 1: View Full Scheme Details */}
      {viewScheme && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-3">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-5 space-y-4 border border-green-200 shadow-xl">
            <div className="flex items-center justify-between border-b pb-2">
              <div>
                <span className="text-[11px] font-bold text-green-800 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                  {viewScheme.departmentMr}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-1">{viewScheme.titleMr}</h3>
                <p className="text-xs text-gray-500">{viewScheme.titleEn}</p>
              </div>
              <button 
                onClick={() => setViewScheme(null)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-gray-700">
              <div className="grid grid-cols-2 gap-2 bg-gray-50 p-3 rounded">
                <div>
                  <span className="text-gray-500 font-semibold block">अनुदान लाभ:</span>
                  <strong className="text-green-800 text-sm">{viewScheme.subsidyBenefitMr}</strong>
                </div>
                <div>
                  <span className="text-gray-500 font-semibold block">अंदाजे निधी व लक्ष्य:</span>
                  <strong>₹{viewScheme.budgetCrores} कोटी ({(viewScheme.beneficiaryTarget || 0).toLocaleString()} शेतकरी)</strong>
                </div>
              </div>

              <div>
                <strong className="text-gray-900 block font-bold mb-1">योजनेचा सारांश:</strong>
                <p className="bg-white border p-2.5 rounded text-gray-700 leading-relaxed">
                  {viewScheme.shortSummaryMr || viewScheme.overviewMr}
                </p>
              </div>

              {viewScheme.eligibilityCriteriaMr && viewScheme.eligibilityCriteriaMr.length > 0 && (
                <div>
                  <strong className="text-gray-900 block font-bold mb-1">पात्रता निकष:</strong>
                  <ul className="list-disc pl-5 space-y-1">
                    {viewScheme.eligibilityCriteriaMr.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {viewScheme.requiredDocumentsMr && viewScheme.requiredDocumentsMr.length > 0 && (
                <div>
                  <strong className="text-gray-900 block font-bold mb-1">आवश्यक कागदपत्रे:</strong>
                  <p className="bg-gray-50 p-2 rounded">
                    {viewScheme.requiredDocumentsMr.join(', ')}
                  </p>
                </div>
              )}

              <div className="pt-2 border-t flex items-center justify-between text-[11px] text-gray-500">
                <span>पोर्टल: <a href={viewScheme.portalUrl} target="_blank" rel="noreferrer" className="text-green-700 underline font-semibold">{viewScheme.portalName}</a></span>
                <span>हेल्पलाइन: <strong>{viewScheme.helplineNumber || '1800-180-1551'}</strong></span>
              </div>
            </div>

            <div className="pt-2 border-t flex justify-end">
              <button
                onClick={() => setViewScheme(null)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold px-4 py-1.5 rounded text-xs"
              >
                बंद करा
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Add / Edit Scheme Form */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-3">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-5 space-y-4 border border-green-200 shadow-xl">
            <div className="flex items-center justify-between border-b pb-2">
              <h3 className="text-lg font-bold text-gray-900">
                {editScheme ? 'योजनेत बदल करा (Edit Scheme)' : 'नवीन शासकीय योजना जोडा (Add New Scheme)'}
              </h3>
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveForm} className="space-y-3 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-gray-700 block mb-1">योजनेचे नाव (मराठी) *</label>
                  <input
                    type="text"
                    required
                    value={formData.titleMr}
                    onChange={(e) => setFormData({ ...formData, titleMr: e.target.value })}
                    placeholder="उदा. मागेल त्याला शेततळे योजना"
                    className="w-full border rounded px-2.5 py-1.5 focus:border-green-600 outline-none"
                  />
                </div>

                <div>
                  <label className="font-bold text-gray-700 block mb-1">योजनेचे नाव (English)</label>
                  <input
                    type="text"
                    value={formData.titleEn}
                    onChange={(e) => setFormData({ ...formData, titleEn: e.target.value })}
                    placeholder="e.g. Magel Tyala Shet Tale Scheme"
                    className="w-full border rounded px-2.5 py-1.5 focus:border-green-600 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-gray-700 block mb-1">विभाग (Department)</label>
                  <input
                    type="text"
                    value={formData.departmentMr}
                    onChange={(e) => setFormData({ ...formData, departmentMr: e.target.value })}
                    className="w-full border rounded px-2.5 py-1.5 focus:border-green-600 outline-none"
                  />
                </div>

                <div>
                  <label className="font-bold text-gray-700 block mb-1">वर्गवारी (Category)</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as SchemeCategory })}
                    className="w-full border rounded px-2.5 py-1.5 focus:border-green-600 outline-none bg-white"
                  >
                    <option value="financial_support">आर्थिक सहाय्य (Financial Support)</option>
                    <option value="crop_insurance">पीक विमा (Crop Insurance)</option>
                    <option value="solar_energy">सौर ऊर्जा व सोलर पंप (Solar Energy)</option>
                    <option value="irrigation">सिंचन व शेततळे (Irrigation)</option>
                    <option value="machinery">कृषी यांत्रिकीकरण (Machinery)</option>
                    <option value="animal_husbandry">पशुसंवर्धन (Animal Husbandry)</option>
                    <option value="horticulture">फळबाग लागवड (Horticulture)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">अनुदान व लाभ (Subsidy / Benefit) *</label>
                <input
                  type="text"
                  required
                  value={formData.subsidyBenefitMr}
                  onChange={(e) => setFormData({ ...formData, subsidyBenefitMr: e.target.value })}
                  placeholder="उदा. ५०% ते ७५% अनुदान किंवा ₹५०,०००"
                  className="w-full border rounded px-2.5 py-1.5 focus:border-green-600 outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">संक्षिप्त माहिती (Short Summary)</label>
                <textarea
                  rows={2}
                  value={formData.shortSummaryMr}
                  onChange={(e) => setFormData({ ...formData, shortSummaryMr: e.target.value })}
                  placeholder="योजनेचा संक्षिप्त उद्देश लिहा..."
                  className="w-full border rounded px-2.5 py-1.5 focus:border-green-600 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-gray-700 block mb-1">मंजूर बजेट (₹ कोटी मध्ये)</label>
                  <input
                    type="number"
                    value={formData.budgetCrores}
                    onChange={(e) => setFormData({ ...formData, budgetCrores: Number(e.target.value) })}
                    className="w-full border rounded px-2.5 py-1.5 focus:border-green-600 outline-none"
                  />
                </div>

                <div>
                  <label className="font-bold text-gray-700 block mb-1">लाभार्थी उद्दिष्ट (शेतकरी संख्या)</label>
                  <input
                    type="number"
                    value={formData.beneficiaryTarget}
                    onChange={(e) => setFormData({ ...formData, beneficiaryTarget: Number(e.target.value) })}
                    className="w-full border rounded px-2.5 py-1.5 focus:border-green-600 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-gray-700 block mb-1">अधिकृत पोर्टल लिंक (URL)</label>
                  <input
                    type="url"
                    value={formData.portalUrl}
                    onChange={(e) => setFormData({ ...formData, portalUrl: e.target.value })}
                    className="w-full border rounded px-2.5 py-1.5 focus:border-green-600 outline-none"
                  />
                </div>

                <div>
                  <label className="font-bold text-gray-700 block mb-1">हेल्पलाइन क्रमांक</label>
                  <input
                    type="text"
                    value={formData.helplineNumber}
                    onChange={(e) => setFormData({ ...formData, helplineNumber: e.target.value })}
                    className="w-full border rounded px-2.5 py-1.5 focus:border-green-600 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">पात्रता निकष (प्रत्येक ओळीवर १ निकष)</label>
                <textarea
                  rows={3}
                  value={formData.eligibilityCriteriaMr}
                  onChange={(e) => setFormData({ ...formData, eligibilityCriteriaMr: e.target.value })}
                  placeholder="१. शेतकरी असणे आवश्यक&#10;२. चालू वर्षाचा ७/१२ असावा"
                  className="w-full border rounded px-2.5 py-1.5 focus:border-green-600 outline-none font-sans"
                />
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">आवश्यक कागदपत्रे (स्वल्पविरामाने वेगळे करा)</label>
                <input
                  type="text"
                  value={formData.requiredDocumentsMr}
                  onChange={(e) => setFormData({ ...formData, requiredDocumentsMr: e.target.value })}
                  placeholder="आधार कार्ड, ७/१२ उतारा, बँक पासबुक, पासपोर्ट फोटो"
                  className="w-full border rounded px-2.5 py-1.5 focus:border-green-600 outline-none"
                />
              </div>

              <div className="pt-3 border-t flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded font-bold"
                >
                  रद्द करा
                </button>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded font-bold shadow-xs"
                >
                  {editScheme ? 'बदल सेव्ह करा' : 'योजना जोडा (Save Scheme)'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 3: XAMPP MySQL Database SQL Exporter & CMD Guide */}
      {isSqlModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-3">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-5 space-y-4 border border-green-200 shadow-xl">
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-green-700" />
                <h3 className="text-lg font-bold text-gray-900">
                  XAMPP MySQL डेटाबेस व्यवस्थापन
                </h3>
              </div>
              <button 
                onClick={() => setIsSqlModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sub-Tabs for CMD vs phpMyAdmin vs SQL Preview */}
            <div className="flex items-center gap-2 border-b border-gray-200 pb-2 text-xs">
              <button
                onClick={() => setActiveSqlTab('cmd')}
                className={`py-1.5 px-3 rounded font-bold flex items-center gap-1.5 transition-colors ${
                  activeSqlTab === 'cmd'
                    ? 'bg-gray-900 text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Terminal className="w-3.5 h-3.5 text-green-400" />
                <span>१. कमांड प्रॉम्प्ट (CMD) मार्गदर्शक</span>
              </button>

              <button
                onClick={() => setActiveSqlTab('sql_preview')}
                className={`py-1.5 px-3 rounded font-bold flex items-center gap-1.5 transition-colors ${
                  activeSqlTab === 'sql_preview'
                    ? 'bg-green-700 text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Database className="w-3.5 h-3.5" />
                <span>२. SQL स्क्रिप्ट व डाउनलोड</span>
              </button>

              <button
                onClick={() => setActiveSqlTab('phpmyadmin')}
                className={`py-1.5 px-3 rounded font-bold flex items-center gap-1.5 transition-colors ${
                  activeSqlTab === 'phpmyadmin'
                    ? 'bg-green-700 text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>३. phpMyAdmin (GUI)</span>
              </button>
            </div>

            {/* TAB 1: CMD Guide */}
            {activeSqlTab === 'cmd' && (
              <div className="space-y-3 text-xs">
                <div className="bg-gray-900 text-green-400 p-3 rounded-lg border border-gray-800 space-y-2 font-mono">
                  <div className="flex items-center justify-between text-gray-400 pb-1 border-b border-gray-800">
                    <span className="flex items-center gap-1 text-white font-bold font-sans">
                      <Terminal className="w-4 h-4 text-green-400" /> Windows Command Prompt (CMD) द्वारे MySQL चालवणे:
                    </span>
                    <span className="text-[11px] text-green-300">XAMPP MySQL Shell</span>
                  </div>

                  <p className="text-gray-300 font-sans text-xs">
                    आधी XAMPP Control Panel मध्ये <strong>MySQL 'Start'</strong> असल्याची खात्री करा. त्यानंतर Windows Command Prompt (cmd) उघडून खालील पायऱ्या वापरा:
                  </p>
                </div>

                {/* Step 1 */}
                <div className="border border-gray-200 rounded p-2.5 bg-gray-50 space-y-1">
                  <div className="flex items-center justify-between font-bold text-gray-800">
                    <span>पायरी १: MySQL च्या bin फोल्डरमध्ये जा</span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText('cd C:\\xampp\\mysql\\bin');
                        setCopiedCmd('step1');
                        setTimeout(() => setCopiedCmd(null), 1500);
                      }}
                      className="text-[11px] bg-white border border-gray-300 px-2 py-0.5 rounded text-gray-700 hover:bg-gray-100 flex items-center gap-1"
                    >
                      {copiedCmd === 'step1' ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedCmd === 'step1' ? 'कॉपी झाले!' : 'कॉपी करा'}</span>
                    </button>
                  </div>
                  <pre className="bg-gray-900 text-gray-100 p-2 rounded text-[11px] font-mono">
                    cd C:\xampp\mysql\bin
                  </pre>
                </div>

                {/* Step 2 */}
                <div className="border border-gray-200 rounded p-2.5 bg-gray-50 space-y-1">
                  <div className="flex items-center justify-between font-bold text-gray-800">
                    <span>पायरी २: MySQL मध्ये रूट युझर म्हणून लॉगिन करा</span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText('mysql -u root -p');
                        setCopiedCmd('step2');
                        setTimeout(() => setCopiedCmd(null), 1500);
                      }}
                      className="text-[11px] bg-white border border-gray-300 px-2 py-0.5 rounded text-gray-700 hover:bg-gray-100 flex items-center gap-1"
                    >
                      {copiedCmd === 'step2' ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedCmd === 'step2' ? 'कॉपी झाले!' : 'कॉपी करा'}</span>
                    </button>
                  </div>
                  <pre className="bg-gray-900 text-yellow-300 p-2 rounded text-[11px] font-mono">
                    mysql -u root -p
                  </pre>
                  <p className="text-[11px] text-gray-500">
                    *(टीप: पासवर्ड विचारल्यास पासवर्ड न टाकता थेट **Enter** दाबा, कारण XAMPP चा डीफॉल्ट पासवर्ड रिकामा असतो).*
                  </p>
                </div>

                {/* Step 3 */}
                <div className="border border-gray-200 rounded p-2.5 bg-gray-50 space-y-1">
                  <div className="flex items-center justify-between font-bold text-gray-800">
                    <span>पायरी ३: agrosmart_db डेटाबेस निवडा व टेबल्स तपासा</span>
                    <button
                      onClick={() => {
                        const sqlQueries = 'USE agrosmart_db;\nSHOW TABLES;\nSELECT id, title_mr, budget_crores, is_active FROM schemes;';
                        navigator.clipboard.writeText(sqlQueries);
                        setCopiedCmd('step3');
                        setTimeout(() => setCopiedCmd(null), 1500);
                      }}
                      className="text-[11px] bg-white border border-gray-300 px-2 py-0.5 rounded text-gray-700 hover:bg-gray-100 flex items-center gap-1"
                    >
                      {copiedCmd === 'step3' ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedCmd === 'step3' ? 'कॉपी झाले!' : 'सर्व SQL कॉपी करा'}</span>
                    </button>
                  </div>
                  <pre className="bg-gray-900 text-green-400 p-2.5 rounded text-[11px] font-mono space-y-1">
                    <div>USE agrosmart_db;</div>
                    <div>SHOW TABLES;</div>
                    <div>SELECT id, title_mr, budget_crores, is_active FROM schemes;</div>
                  </pre>
                </div>

                {/* Direct 1-Line Import via CMD */}
                <div className="bg-amber-50 border border-amber-200 p-2.5 rounded text-amber-900 space-y-1">
                  <strong className="block font-bold">शॉर्टकट (थेट .sql फाइल CMD द्वारे इम्पोर्ट करणे):</strong>
                  <p className="text-[11px]">
                    आधी वर **.sql फाइल डाउनलोड करा** आणि CMD मध्ये थेट खालील कमांड चालवा:
                  </p>
                  <pre className="bg-gray-900 text-amber-300 p-2 rounded text-[11px] font-mono">
                    C:\xampp\mysql\bin\mysql.exe -u root &lt; &quot;%USERPROFILE%\Downloads\agrosmart_schemes.sql&quot;
                  </pre>
                </div>
              </div>
            )}

            {/* TAB 2: SQL Script & Download */}
            {activeSqlTab === 'sql_preview' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-700">MySQL Schema & Seed Data:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopySql}
                      className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2.5 py-1 rounded border flex items-center gap-1 font-semibold"
                    >
                      {copiedSql ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedSql ? 'कॉपी झाले!' : 'SQL कॉपी करा'}</span>
                    </button>

                    <button
                      onClick={handleDownloadSql}
                      className="text-xs bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded font-bold flex items-center gap-1 shadow-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>.sql फाइल डाउनलोड करा</span>
                    </button>
                  </div>
                </div>

                <pre className="bg-gray-900 text-green-400 p-3 rounded text-[11px] font-mono overflow-x-auto max-h-72 leading-relaxed border border-gray-700">
                  {SchemeDatabase.generateSqlDump()}
                </pre>
              </div>
            )}

            {/* TAB 3: phpMyAdmin GUI */}
            {activeSqlTab === 'phpmyadmin' && (
              <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-xs text-green-950 space-y-2">
                <strong className="block text-green-900 font-bold text-sm">phpMyAdmin ब्राऊझरमध्ये कसे वापरावे?:</strong>
                <p>१. तुमच्या संगणकावर **XAMPP Control Panel** उघडून **Apache** आणि **MySQL** दोन्हींचे 'Start' बटण दाबा.</p>
                <p>२. तुमच्या ब्राऊझरमध्ये <strong>http://localhost/phpmyadmin</strong> उघडा.</p>
                <p>३. डाव्या मेनूमध्ये <strong>New</strong> वर क्लिक करून डेटाबेस नाव <code>agrosmart_db</code> तयार करा.</p>
                <p>४. वरील मेनूमधून <strong>Import</strong> टॅब निवडा, डाउनलोड केलेली <strong>agrosmart_schemes.sql</strong> फाइल निवडा आणि तळाशी असलेले <strong>Go</strong> किंवा <strong>Import</strong> दाबा.</p>
                <p className="text-gray-600 pt-2 border-t border-green-200">
                  सर्व योजनांचे टेबल्स आणि डेटा यशस्वीरीत्या तयार होईल.
                </p>
              </div>
            )}

            <div className="pt-2 border-t flex justify-end">
              <button
                onClick={() => setIsSqlModalOpen(false)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold px-4 py-1.5 rounded text-xs"
              >
                बंद करा
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
