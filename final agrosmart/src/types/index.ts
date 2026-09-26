export type Language = 'mr' | 'en';

export type DistrictId = 
  | 'pune'
  | 'ahmednagar'
  | 'nashik'
  | 'solapur'
  | 'kolhapur'
  | 'satara'
  | 'aurangabad'
  | 'jalgaon'
  | 'amravati'
  | 'nagpur'
  | 'nanded'
  | 'latur'
  | 'sangli'
  | 'beed'
  | 'buldhana';

export interface DistrictInfo {
  id: DistrictId;
  nameMr: string;
  nameEn: string;
  regionMr: string;
  regionEn: string;
  talukasMr: string[];
  talukasEn: string[];
}

export interface VetDoctor {
  id: string;
  nameMr: string;
  nameEn: string;
  designationMr: string;
  designationEn: string;
  hospitalNameMr: string;
  hospitalNameEn: string;
  hospitalType: 'govt_grade1' | 'govt_grade2' | 'poly_clinic' | 'mobile_clinic' | 'private_consultant';
  district: DistrictId;
  talukaMr: string;
  talukaEn: string;
  addressMr: string;
  addressEn: string;
  phone: string;
  alternatePhone?: string;
  timingMr: string;
  timingEn: string;
  is24x7Emergency: boolean;
  specializationMr: string[];
  specializationEn: string[];
  feeType: 'free_govt' | 'subsidized' | 'nominal';
}

export interface SoilTestingCenter {
  id: string;
  nameMr: string;
  nameEn: string;
  type: 'kvk' | 'govt_lab' | 'university' | 'cooperative';
  district: DistrictId;
  talukaMr: string;
  talukaEn: string;
  addressMr: string;
  addressEn: string;
  landmarkMr: string;
  landmarkEn: string;
  phone: string;
  email?: string;
  inchargeMr: string;
  inchargeEn: string;
  testingFeeMr: string;
  testingFeeEn: string;
  turnaroundDays: number;
  parametersTestedMr: string[];
  parametersTestedEn: string[];
  workingHoursMr: string;
  workingHoursEn: string;
  soilHealthCardSupported: boolean;
}

export interface SetuCenter {
  id: string;
  nameMr: string;
  nameEn: string;
  centerType: 'aaple_sarkar' | 'setu' | 'csc' | 'krishi_desk';
  district: DistrictId;
  talukaMr: string;
  talukaEn: string;
  addressMr: string;
  addressEn: string;
  operatorNameMr: string;
  operatorNameEn: string;
  phone: string;
  timingsMr: string;
  timingsEn: string;
  servicesMr: string[];
  servicesEn: string[];
  isVerified: boolean;
}

export interface Helpline {
  id: string;
  titleMr: string;
  titleEn: string;
  departmentMr: string;
  departmentEn: string;
  number: string;
  descriptionMr: string;
  descriptionEn: string;
  isTollFree: boolean;
  timingMr: string;
  timingEn: string;
  iconType: 'phone' | 'shield' | 'wheat' | 'stethoscope' | 'sun';
}

export type SchemeCategory = 
  | 'financial_support'
  | 'crop_insurance'
  | 'irrigation'
  | 'solar_energy'
  | 'machinery'
  | 'animal_husbandry'
  | 'horticulture'
  | 'special_welfare';

export interface GovtScheme {
  id: string;
  titleMr: string;
  titleEn: string;
  departmentMr: string;
  departmentEn: string;
  category: SchemeCategory;
  subsidyBenefitMr: string;
  subsidyBenefitEn: string;
  shortSummaryMr: string;
  shortSummaryEn: string;
  overviewMr: string;
  overviewEn: string;
  benefitsListMr: string[];
  benefitsListEn: string[];
  eligibilityCriteriaMr: string[];
  eligibilityCriteriaEn: string[];
  requiredDocumentsMr: string[];
  requiredDocumentsEn: string[];
  applicationProcessStepsMr: string[];
  applicationProcessStepsEn: string[];
  portalName: string;
  portalUrl: string;
  helplineNumber?: string;
  isPopular: boolean;
  tagsMr: string[];
  tagsEn: string[];
  isActive?: boolean;
  budgetCrores?: number;
  beneficiaryTarget?: number;
  applicationDeadline?: string;
  createdAt?: string;
}
