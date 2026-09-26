import { GovtScheme } from '../types';
import { GOVT_SCHEMES } from '../data/schemes';

const STORAGE_KEY = 'krishimitra_schemes_db';

// Helper to seed initial budget and beneficiary target numbers for realism
const seedInitialData = (): GovtScheme[] => {
  const budgetMap: Record<string, { budget: number; target: number; deadline: string }> = {
    'namo-pm-kisan': { budget: 3200, target: 9500000, deadline: 'निरंतर (चालू वर्ष)' },
    'one-rupee-crop-insurance': { budget: 1850, target: 8200000, deadline: '३१ जुलै (खरीप) / ३१ डिसेंबर (रब्बी)' },
    'magel-tyala-solar-pump': { budget: 1200, target: 250000, deadline: '३१ मार्च २०२५' },
    'magel-tyala-shet-tale': { budget: 650, target: 120000, deadline: 'निरंतर योजना' },
    'mahadbt-tractor-machinery': { budget: 950, target: 180000, deadline: 'लॉटरी पद्धतीनुसार दरमहा' },
    'drip-sprinkler-subsidy': { budget: 850, target: 450000, deadline: '३१ मार्च २०२५' },
    'kamdhenu-cow-buffalo-subsidy': { budget: 420, target: 85000, deadline: 'अर्ज चालू' },
    'bhausaheb-phundkar-orchard': { budget: 380, target: 95000, deadline: 'पावसाळा पूर्व' }
  };

  return GOVT_SCHEMES.map(s => ({
    ...s,
    isActive: true,
    budgetCrores: budgetMap[s.id]?.budget || 250,
    beneficiaryTarget: budgetMap[s.id]?.target || 50000,
    applicationDeadline: budgetMap[s.id]?.deadline || 'चालू आर्थिक वर्ष',
    createdAt: new Date().toISOString()
  }));
};

export const SchemeDatabase = {
  // 1. Get all schemes from localStorage or default
  getAll: (): GovtScheme[] => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Error reading schemes database from localStorage', e);
    }
    const initial = seedInitialData();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    return initial;
  },

  // 2. Get scheme by ID
  getById: (id: string): GovtScheme | undefined => {
    const list = SchemeDatabase.getAll();
    return list.find(s => s.id === id);
  },

  // 3. Add a new scheme
  create: (data: Partial<GovtScheme>): GovtScheme => {
    const list = SchemeDatabase.getAll();
    const newId = data.id || 'scheme-' + Date.now();
    const newScheme: GovtScheme = {
      id: newId,
      titleMr: data.titleMr || 'नवीन योजना',
      titleEn: data.titleEn || 'New Scheme',
      departmentMr: data.departmentMr || 'कृषी विभाग, महाराष्ट्र शासन',
      departmentEn: data.departmentEn || 'Department of Agriculture, GoM',
      category: data.category || 'financial_support',
      subsidyBenefitMr: data.subsidyBenefitMr || 'शासकीय अनुदानानुसार',
      subsidyBenefitEn: data.subsidyBenefitEn || 'As per Govt norms',
      shortSummaryMr: data.shortSummaryMr || '',
      shortSummaryEn: data.shortSummaryEn || '',
      overviewMr: data.overviewMr || data.shortSummaryMr || '',
      overviewEn: data.overviewEn || data.shortSummaryEn || '',
      benefitsListMr: data.benefitsListMr && data.benefitsListMr.length > 0 ? data.benefitsListMr : ['थेट बँक खात्यात अनुदान'],
      benefitsListEn: data.benefitsListEn && data.benefitsListEn.length > 0 ? data.benefitsListEn : ['Direct subsidy benefit'],
      eligibilityCriteriaMr: data.eligibilityCriteriaMr && data.eligibilityCriteriaMr.length > 0 ? data.eligibilityCriteriaMr : ['महाराष्ट्रातील शेतकरी असणे आवश्यक'],
      eligibilityCriteriaEn: data.eligibilityCriteriaEn && data.eligibilityCriteriaEn.length > 0 ? data.eligibilityCriteriaEn : ['Must be resident farmer of Maharashtra'],
      requiredDocumentsMr: data.requiredDocumentsMr && data.requiredDocumentsMr.length > 0 ? data.requiredDocumentsMr : ['आधार कार्ड, ७/१२ उतारा, बँक पासबुक'],
      requiredDocumentsEn: data.requiredDocumentsEn && data.requiredDocumentsEn.length > 0 ? data.requiredDocumentsEn : ['Aadhaar Card, 7/12 excerpt, Bank passbook'],
      applicationProcessStepsMr: data.applicationProcessStepsMr && data.applicationProcessStepsMr.length > 0 ? data.applicationProcessStepsMr : ['महाडीबीटी किंवा संबंधित पोर्टलवर ऑनलाईन अर्ज करावा.'],
      applicationProcessStepsEn: data.applicationProcessStepsEn && data.applicationProcessStepsEn.length > 0 ? data.applicationProcessStepsEn : ['Apply online on MahaDBT portal.'],
      portalName: data.portalName || 'महाडीबीटी पोर्टल',
      portalUrl: data.portalUrl || 'https://mahadbt.maharashtra.gov.in',
      helplineNumber: data.helplineNumber || '1800-180-1551',
      isPopular: data.isPopular ?? true,
      tagsMr: data.tagsMr || ['शेतकरी योजना'],
      tagsEn: data.tagsEn || ['Farmer Scheme'],
      isActive: data.isActive ?? true,
      budgetCrores: data.budgetCrores || 100,
      beneficiaryTarget: data.beneficiaryTarget || 25000,
      applicationDeadline: data.applicationDeadline || '३१ मार्च २०२५',
      createdAt: new Date().toISOString()
    };

    const updatedList = [newScheme, ...list];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
    return newScheme;
  },

  // 4. Update an existing scheme
  update: (id: string, updates: Partial<GovtScheme>): GovtScheme | null => {
    const list = SchemeDatabase.getAll();
    const index = list.findIndex(s => s.id === id);
    if (index === -1) return null;

    const updatedScheme = { ...list[index], ...updates };
    list[index] = updatedScheme;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    return updatedScheme;
  },

  // 5. Delete a scheme
  delete: (id: string): boolean => {
    const list = SchemeDatabase.getAll();
    const filtered = list.filter(s => s.id !== id);
    if (filtered.length === list.length) return false;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return true;
  },

  // 6. Toggle Active / Inactive status
  toggleStatus: (id: string): boolean => {
    const list = SchemeDatabase.getAll();
    const index = list.findIndex(s => s.id === id);
    if (index === -1) return false;
    list[index].isActive = !(list[index].isActive ?? true);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    return true;
  },

  // 7. Reset to factory default data
  reset: (): GovtScheme[] => {
    const defaults = seedInitialData();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaults));
    return defaults;
  },

  // 8. Generate standard MySQL database schema & SQL dump for XAMPP
  generateSqlDump: (): string => {
    const list = SchemeDatabase.getAll();
    
    let sql = `-- ========================================================\n`;
    sql += `-- AgroSmart KrishiMitra - Schemes Database Schema & Dump\n`;
    sql += `-- For MySQL / MariaDB (XAMPP phpMyAdmin)\n`;
    sql += `-- Generated on: ${new Date().toLocaleString()}\n`;
    sql += `-- ========================================================\n\n`;
    sql += `CREATE DATABASE IF NOT EXISTS \`agrosmart_db\` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;\n`;
    sql += `USE \`agrosmart_db\`;\n\n`;

    sql += `-- --------------------------------------------------------\n`;
    sql += `-- Table structure for table \`schemes\`\n`;
    sql += `-- --------------------------------------------------------\n`;
    sql += `DROP TABLE IF EXISTS \`schemes\`;\n`;
    sql += `CREATE TABLE \`schemes\` (\n`;
    sql += `  \`id\` varchar(64) NOT NULL,\n`;
    sql += `  \`title_mr\` varchar(255) NOT NULL,\n`;
    sql += `  \`title_en\` varchar(255) NOT NULL,\n`;
    sql += `  \`department_mr\` varchar(255) NOT NULL,\n`;
    sql += `  \`department_en\` varchar(255) NOT NULL,\n`;
    sql += `  \`category\` varchar(64) NOT NULL,\n`;
    sql += `  \`subsidy_benefit_mr\` varchar(255) NOT NULL,\n`;
    sql += `  \`short_summary_mr\` text NOT NULL,\n`;
    sql += `  \`portal_name\` varchar(128) NOT NULL,\n`;
    sql += `  \`portal_url\` varchar(255) NOT NULL,\n`;
    sql += `  \`helpline_number\` varchar(64) DEFAULT NULL,\n`;
    sql += `  \`budget_crores\` decimal(10,2) DEFAULT '0.00',\n`;
    sql += `  \`beneficiary_target\` int(11) DEFAULT '0',\n`;
    sql += `  \`is_active\` tinyint(1) DEFAULT '1',\n`;
    sql += `  \`created_at\` datetime DEFAULT CURRENT_TIMESTAMP,\n`;
    sql += `  PRIMARY KEY (\`id\`)\n`;
    sql += `) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;\n\n`;

    sql += `-- --------------------------------------------------------\n`;
    sql += `-- Dumping data for table \`schemes\`\n`;
    sql += `-- --------------------------------------------------------\n`;
    
    list.forEach(s => {
      const escape = (str?: string) => (str ? str.replace(/'/g, "''").replace(/\\/g, '\\\\') : '');
      const isActiveVal = (s.isActive ?? true) ? 1 : 0;
      const budget = s.budgetCrores || 0;
      const target = s.beneficiaryTarget || 0;

      sql += `INSERT INTO \`schemes\` (\`id\`, \`title_mr\`, \`title_en\`, \`department_mr\`, \`department_en\`, \`category\`, \`subsidy_benefit_mr\`, \`short_summary_mr\`, \`portal_name\`, \`portal_url\`, \`helpline_number\`, \`budget_crores\`, \`beneficiary_target\`, \`is_active\`) VALUES (\n`;
      sql += `  '${escape(s.id)}',\n`;
      sql += `  '${escape(s.titleMr)}',\n`;
      sql += `  '${escape(s.titleEn)}',\n`;
      sql += `  '${escape(s.departmentMr)}',\n`;
      sql += `  '${escape(s.departmentEn)}',\n`;
      sql += `  '${escape(s.category)}',\n`;
      sql += `  '${escape(s.subsidyBenefitMr)}',\n`;
      sql += `  '${escape(s.shortSummaryMr)}',\n`;
      sql += `  '${escape(s.portalName)}',\n`;
      sql += `  '${escape(s.portalUrl)}',\n`;
      sql += `  '${escape(s.helplineNumber || '1800-180-1551')}',\n`;
      sql += `  ${budget},\n`;
      sql += `  ${target},\n`;
      sql += `  ${isActiveVal}\n`;
      sql += `);\n`;
    });

    return sql;
  }
};
