import { GovtScheme } from '../types';

export const GOVT_SCHEMES: GovtScheme[] = [
  {
    id: 'namo-pm-kisan',
    titleMr: 'नमो शेतकरी महासन्मान निधी + पीएम किसान योजना',
    titleEn: 'Namo Shetkari Mahasanman Nidhi + PM Kisan Yojana',
    departmentMr: 'कृषी विभाग, महाराष्ट्र शासन व केंद्र सरकार',
    departmentEn: 'Department of Agriculture, GoM & Central Govt',
    category: 'financial_support',
    subsidyBenefitMr: 'दरवर्षी ₹१२,००० थेट बँक खात्यात (दर ४ महिन्यांनी ₹२,००० + ₹२,०००)',
    subsidyBenefitEn: '₹12,000 per year directly into bank account (₹2,000 each installment)',
    shortSummaryMr: 'महाराष्ट्र शासनाचे ₹६,००० आणि केंद्र शासनाचे ₹६,००० मिळून राज्यातील पात्र शेतकऱ्यांना दरवर्षी ₹१२,००० चा थेट आर्थिक आधार दिला जातो.',
    shortSummaryEn: 'Combined ₹6,000 from Maharashtra Govt and ₹6,000 from Central PM-Kisan totaling ₹12,000 direct benefit per year.',
    overviewMr: 'महाराष्ट्रातील भूधारक शेतकऱ्यांना शेतीसाठी खते, बियाणे आणि मशागतीचा खर्च भागवण्यासाठी ही योजना सुरू करण्यात आली आहे. केंद्र सरकारच्या पीएम किसान सन्मान निधी योजनेच्या पात्र लाभार्थ्यांना राज्य शासनामार्फत अतिरिक्त ६,००० रुपये (वर्षातून ३ हप्त्यांमध्ये प्रत्येकी २,००० रुपये) दिले जातात. यामुळे शेतकऱ्याला वर्षाला एकूण १२,००० रुपये डीबीटी द्वारे मिळतात.',
    overviewEn: 'Designed to support farmers for seeds, fertilizers, and field operations. Beneficiaries of PM-Kisan receive an additional ₹6,000 annually from the Maharashtra State Government in 3 equal installments, making the total ₹12,000 per year via DBT.',
    benefitsListMr: [
      'दर ४ महिन्यांनी बँक खात्यात ₹४,००० (पीएम किसान ₹२,००० + नमो शेतकरी ₹२,०००) जमा.',
      'वर्षभरात एकूण १२,००० रुपयांचे आर्थिक सहाय्य.',
      'थेट आधार संलग्न (Aadhaar Seeding) बँक खात्यात कोणतीही मध्यस्थी नसताना रक्कम जमा.',
      'लहान व अत्यल्प भूधारक शेतकऱ्यांसाठी हक्काचा आधार.'
    ],
    benefitsListEn: [
      '₹4,000 credited every 4 months (₹2,000 PM-Kisan + ₹2,000 Namo Shetkari).',
      'Total ₹12,000 annual financial security.',
      'Directly deposited into Aadhaar-seeded NPCI bank account with zero middlemen.',
      'Tremendous relief for small and marginal landholders.'
    ],
    eligibilityCriteriaMr: [
      'शेतकऱ्याच्या नावावर स्वतःची शेतजमीन (७/१२ उतारा) असणे आवश्यक.',
      'शेतकऱ्याचे बँक खाते आधार कार्डशी लिंक व NPCI मॅप असणे अनिवार्य.',
      'पीएम किसान पोर्टलवर लाभार्थी म्हणून नाव असणे व ई-केवायसी (eKYC) पूर्ण असणे गरजेचे.',
      'संवैधानिक पद धारण केलेले व्यक्ती, आजी/माजी आमदार/खासदार, आयकर भरणारे शेतकरी या योजनेस पात्र नाहीत.',
      'सरकारी सेवेतील चतुर्थ श्रेणी वगळता इतर कर्मचारी पात्र नाहीत.'
    ],
    eligibilityCriteriaEn: [
      'Must possess cultivable land holding in applicant\'s name (7/12 excerpt).',
      'Bank account must be active, Aadhaar-linked, and NPCI-seeded.',
      'Must have approved PM-Kisan status and completed eKYC.',
      'Income taxpayers, constitutional post holders, and ministers are ineligible.',
      'Govt employees (excluding Class IV) are excluded.'
    ],
    requiredDocumentsMr: [
      'चालू वर्षाचा डिजिटल स्वाक्षरीत ७/१२ व ८-अ उतारा',
      'आधार कार्ड व आधार लिंक मोबाईल क्रमांक',
      'बँक पासबुकच्या पहिल्या पानाची प्रत (IFSC कोड व खाते क्रमांक स्पष्ट असलेला)',
      'पीएम किसान नोंदणी क्रमांक (Registration Number)',
      'जमीन धारणा स्वयंघोषणा हमीपत्र'
    ],
    requiredDocumentsEn: [
      'Current Digitally Signed 7/12 & 8-A Record',
      'Aadhaar Card and linked mobile number',
      'Bank Passbook copy showing IFSC & Account No.',
      'PM-Kisan Farmer Registration Number',
      'Self-declaration of landholding'
    ],
    applicationProcessStepsMr: [
      '१. जर पीएम किसान नोंदणी नसेल, तर सर्वप्रथम pmkisan.gov.in किंवा जवळच्या सेतू केंद्रावर नोंदणी करा.',
      '२. मोबाईल ओटीपी किंवा सेतू केंद्रावर बायोमेट्रिक फिंगरप्रिंट देऊन ई-केवायसी (eKYC) पूर्ण करा.',
      '३. बँकेत जाऊन आधार सीडिंग (NPCI Mapping) झाले आहे का याची खात्री करा.',
      '४. पीएम किसानचे लाभार्थी आपोआप नमो शेतकरी योजनेसाठी पात्र ठरतात; वेगळा अर्ज करण्याची गरज नसते.',
      '५. महाडीबीटी किंवा कृषी विभागाच्या पोर्टलवर आपल्या हप्त्याची स्थिती तपासा.'
    ],
    applicationProcessStepsEn: [
      '1. If not yet registered under PM-Kisan, apply via pmkisan.gov.in or nearest CSC/Setu Kendra.',
      '2. Complete mandatory biometric or OTP-based eKYC.',
      '3. Ensure your active bank account is linked to NPCI mapper for DBT.',
      '4. Active PM-Kisan beneficiaries in Maharashtra are automatically enrolled into Namo Shetkari.',
      '5. Track installment status online anytime.'
    ],
    portalName: 'PM Kisan & MahaDBT Portal',
    portalUrl: 'https://pmkisan.gov.in',
    helplineNumber: '155261 / 1800-11-5526',
    isPopular: true,
    tagsMr: ['थेट मदत', 'वार्षिक ₹१२,०००', 'पीएम किसान', 'नमो शेतकरी', 'डीबीटी'],
    tagsEn: ['Direct Benefit', 'Annual ₹12,000', 'PM Kisan', 'Namo Shetkari', 'DBT']
  },
  {
    id: 'pm-fasal-bima-1rs',
    titleMr: 'सर्वसमावेशक १ रुपयात पीक विमा योजना (PMFBY)',
    titleEn: 'Comprehensive ₹1 Crop Insurance Scheme (PMFBY Maharashtra)',
    departmentMr: 'कृषी विभाग, महाराष्ट्र शासन',
    departmentEn: 'Department of Agriculture, Govt of Maharashtra',
    category: 'crop_insurance',
    subsidyBenefitMr: 'शेतकऱ्याला फक्त ₹१ भरून १००% पीक विमा संरक्षण (बाकी सर्व हप्ता सरकार भरते)',
    subsidyBenefitEn: 'Comprehensive crop insurance coverage for just ₹1 farmer premium (State bears balance)',
    shortSummaryMr: 'महाराष्ट्र शासनाने शेतकऱ्यांवरील विम्याचा बोजा दूर करून खरीप व रब्बी हंगामासाठी फक्त १ रुपयांत संपूर्ण पीक विमा उपलब्ध करून दिला आहे.',
    shortSummaryEn: 'Maharashtra Government enables farmers to insure their crops against natural calamities for just ₹1.',
    overviewMr: 'नैसर्गिक आपत्ती जसे की दुष्काळ, पूर, अतिवृष्टी, गारपीट, कीड व रोगांमुळे होणाऱ्या पीक नुकसानीपासून शेतकऱ्यांना आर्थिक संरक्षण मिळावे यासाठी ही योजना आहे. शेतकऱ्यांना फक्त ₹१ टोकन भरावे लागते, उर्वरित संपूर्ण शेतकरी हिस्सा राज्य शासन स्वतः उचलते. स्थानिक नैसर्गिक आपत्ती, काढणी पश्चात नुकसान आणि हंगाम प्रतिकूलतेवर भरपाई मिळते.',
    overviewEn: 'Protects farmers against financial loss due to unavoidable risks like drought, flood, pests, and unseasonal rainfall. Farmers pay just ₹1 per application, and the Maharashtra Government pays the entire remaining farmer share of the premium.',
    benefitsListMr: [
      'केवळ ₹१ भरून खरीप व रब्बी हंगामातील पिकांचे संपूर्ण संरक्षण.',
      'पेरणी न होणे, मध्यहंगामातील प्रतिकूल परिस्थिती, काढणी पश्चात नुकसान व स्थानिक आपत्ती यावर नुकसान भरपाई.',
      '७२ तासांच्या आत नुकसानीची पूर्वसूचना (Intimation) नोंदवण्याची सुलभ सोय.',
      'नुकसान भरपाई थेट शेतकऱ्यांच्या बँक खात्यात जमा.'
    ],
    benefitsListEn: [
      'Full protection for Kharif & Rabi crops for only ₹1.',
      'Covers prevented sowing, mid-season adversity, post-harvest losses & localized calamities.',
      'Easy 72-hour crop loss intimation via Crop Insurance App or 14447 helpline.',
      'Compensation credited directly to Aadhaar-linked bank accounts.'
    ],
    eligibilityCriteriaMr: [
      'महाराष्ट्रातील सर्व खातेदार शेतकरी आणि भाडेतत्त्वावर शेती करणारे शेतकरी पात्र आहेत.',
      'विहित मुदतीपूर्वी ई-पीक पाहणी (E-Peek Pahani) मोबाईल ॲपवर पिकाची नोंद केलेली असावी.',
      'ज्या अधिसूचित क्षेत्रासाठी अधिसूचित पिके घेतली आहेत ते सर्व शेतकरी पात्र.'
    ],
    eligibilityCriteriaEn: [
      'All landholder farmers and tenant farmers in Maharashtra.',
      'Crop must be recorded on the official E-Peek Pahani app.',
      'Applicable for notified crops in notified village/taluka clusters.'
    ],
    requiredDocumentsMr: [
      'नवीन ई-पीक पाहणी नोंद असलेला ७/१२ उतारा',
      '८-अ खाते उतारा',
      'आधार कार्ड',
      'बँक पासबुक किंवा रद्द केलेला चेक',
      'पिकाचे स्वयंघोषणा पत्र व पेरणी हमीपत्र'
    ],
    requiredDocumentsEn: [
      '7/12 excerpt updated with E-Peek Pahani crop entry',
      '8-A landholding summary',
      'Aadhaar Card',
      'Bank passbook or cancelled cheque',
      'Sowing self-declaration form'
    ],
    applicationProcessStepsMr: [
      '१. हंगाम सुरू झाल्यावर शेतात पेरणी करून ई-पीक पाहणी ॲपवर पिकाची अचूक नोंद करा.',
      '२. pmfby.gov.in या पोर्टलवर जा किंवा गावातील आपले सरकार/सेतू/सीएससी केंद्रावर जा.',
      '३. आपला ७/१२ नंबर, गट नंबर आणि पिकाचे क्षेत्र निवडून अर्ज भरा.',
      '४. केवळ ₹१ ऑनलाइन पेमेंट करा आणि विम्याची पावती (Receipt) जपून ठेवा.',
      '५. अतिवृष्टी किंवा नुकसान झाल्यास ७२ तासांच्या आत Crop Insurance App वरून फोटोसह तक्रार नोंदवा.'
    ],
    applicationProcessStepsEn: [
      '1. Sow the crop and register it immediately on the E-Peek Pahani App.',
      '2. Visit pmfby.gov.in or any CSC/Setu Kendra.',
      '3. Select district, taluka, village, 7/12 survey number, and crop area.',
      '4. Pay the ₹1 token fee and download the insurance confirmation receipt.',
      '5. If crop damage occurs, report within 72 hours via Crop Insurance App with photos.'
    ],
    portalName: 'PMFBY Portal & Crop Insurance App',
    portalUrl: 'https://pmfby.gov.in',
    helplineNumber: '14447',
    isPopular: true,
    tagsMr: ['१ रुपयात विमा', 'पीक नुकसान भरपाई', 'अतिवृष्टी मदत', 'हवामान विमा', 'शेतकरी संरक्षण'],
    tagsEn: ['₹1 Crop Insurance', 'Disaster Relief', 'Excess Rain Aid', 'Weather Insurance', 'Crop Protection']
  },
  {
    id: 'pm-kusum-solar-pump',
    titleMr: 'महाकृषी ऊर्जा अभियान - PM कुसुम सोलर कृषी पंप योजना',
    titleEn: 'Maha Krishi Urja Abhiyan - PM KUSUM Solar Agri Pump Scheme',
    departmentMr: 'महावितरण (MSEDCL) व महाऊर्जा (MEDA)',
    departmentEn: 'MSEDCL & Maharashtra Energy Development Agency (MEDA)',
    category: 'solar_energy',
    subsidyBenefitMr: 'सर्वसाधारण शेतकऱ्यांसाठी ९०% ते ९५% शासकीय अनुदान (शेतकऱ्याला फक्त ५% ते १०% हिस्सा)',
    subsidyBenefitEn: '90% to 95% Govt Subsidy (Farmer pays only 5% to 10% share)',
    shortSummaryMr: 'दिवसा सिंचनासाठी विहिरीवर किंवा बोअरवेलवर ३ HP, ५ HP किंवा ७.५ HP क्षमतेचा सौर कृषी पंप नाममात्र खर्चात बसवून मिळतो.',
    shortSummaryEn: 'Get 3 HP, 5 HP, or 7.5 HP off-grid solar agricultural pumps installed with up to 95% subsidy for daytime irrigation.',
    overviewMr: 'ग्रामीण भागातील विजेची समस्या, रात्रीच्या वेळी शेतात पाणी भरण्याचा त्रास आणि भारनियमनावर मात करण्यासाठी ही योजना वरदान ठरली आहे. पारंपरिक वीज जोडणी नसलेल्या शेतकऱ्यांना ३ ते ७.५ अश्वशक्तीचे (HP) सोलर पंप दिले जातात. SC/ST प्रवर्गातील शेतकऱ्यांना ९५% अनुदान, तर सर्वसाधारण प्रवर्गाला ९०% अनुदान मिळते. ५ वर्षांची मोफत दुरुस्ती व वॉरंटी कंपनीमार्फत दिली जाते.',
    overviewEn: 'Eliminates reliance on grid electricity and the hazard of night-time irrigation. Farmers without conventional electric connections receive 3 HP, 5 HP, or 7.5 HP solar water pumps. SC/ST beneficiaries get 95% subsidy; general category gets 90%. Includes 5 years of comprehensive warranty and maintenance.',
    benefitsListMr: [
      'दिवसा विनामूल्य सिंचनाची खात्रीशीर सोय, विजेच्या बिलातून कायमची मुक्ती.',
      '३ एचपी, ५ एचपी व ७.५ एचपी डीसी सोलर पंप, पॅनेल्स आणि संपूर्ण किट मोफत उभारणी.',
      'अनुसूचित जाती/जमाती शेतकऱ्यांना केवळ ५% हिस्सा, सर्वसाधारण शेतकऱ्यांना १०% हिस्सा भरावा लागतो.',
      '५ वर्षांची वॉरंटी व विमा संरक्षण कंपनीमार्फत उपलब्ध.'
    ],
    benefitsListEn: [
      'Reliable daytime irrigation; free from monthly electricity bills forever.',
      '3 HP, 5 HP, or 7.5 HP DC submersible/surface pump with panels & installation.',
      'Just 5% contribution for SC/ST farmers, 10% for General farmers.',
      '5 years comprehensive on-site warranty and insurance coverage.'
    ],
    eligibilityCriteriaMr: [
      'शेतात पाण्याचा शाश्वत स्त्रोत (विहीर, कूपनलिका/बोअरवेल, शेततळे, बारमाही ओढा) असावा.',
      'ज्या जागेवर सोलर पंप बसवायचा आहे तेथे पारंपरिक महावितरण वीज जोडणी नसावी.',
      'जमीन धारणा: २.५ एकरापर्यंत ३ HP, ५ एकरापर्यंत ५ HP, ५ एकरापेक्षा जास्त असल्यास ७.५ HP साठी पात्र.'
    ],
    eligibilityCriteriaEn: [
      'Must have an assured water source (Well, Borewell, Farm pond, or Perennial stream).',
      'The site must not already have conventional grid electricity connection.',
      'Landholding: Up to 2.5 acres (3 HP), up to 5 acres (5 HP), above 5 acres (7.5 HP).'
    ],
    requiredDocumentsMr: [
      'पाण्याचा स्त्रोत (विहीर/बोअरवेल) नोंद असलेला चालू ७/१२ उतारा व ८-अ',
      'सामाईक विहीर असल्यास इतर भागीदारांचे ना-हरकत प्रमाणपत्र (NOC)',
      'आधार कार्ड व शेतकरी ओळखपत्र',
      'जातीचे प्रमाणपत्र (SC/ST प्रवर्गाच्या अतिरिक्त अनुदानासाठी)',
      'बँक पासबुक'
    ],
    requiredDocumentsEn: [
      '7/12 excerpt with water source entry and 8-A excerpt',
      'NOC on stamp paper if well/borewell is shared among partners',
      'Aadhaar card and mobile number',
      'Caste certificate for SC/ST extra subsidy benefit',
      'Bank passbook copy'
    ],
    applicationProcessStepsMr: [
      '१. महावितरणच्या अधिकृत कुसुम पोर्टल (www.mahadiscom.in/solar) वर जा.',
      '२. नवीन शेतकरी नोंदणी करून आधार क्रमांक व मोबाईल नंबर टाका.',
      '३. पाण्याचा स्त्रोत, जमिनीचे क्षेत्र आणि लागणारा सोलर पंप (३, ५ किंवा ७.५ HP) निवडा.',
      '४. आवश्यक कागदपत्रे व विहिरीचा फोटो अपलोड करा.',
      '५. अर्ज मंजूर झाल्यावर आपला शेतकरी हिस्सा (५% किंवा १०%) ऑनलाइन भरा, त्यानंतर कंपनी जागेवर येऊन पंप बसवेल.'
    ],
    applicationProcessStepsEn: [
      '1. Visit MSEDCL official solar portal at mahadiscom.in/solar.',
      '2. Register using Aadhaar and mobile OTP.',
      '3. Select water source, land size, and desired pump capacity (3/5/7.5 HP).',
      '4. Upload 7/12, bank passbook, and photo of well.',
      '5. Once approved, pay your beneficiary share online. Vendor will install the system.'
    ],
    portalName: 'महावितरण सौर कृषी पंप पोर्टल (MSEDCL Solar)',
    portalUrl: 'https://www.mahadiscom.in/solar',
    helplineNumber: '1800-233-3435 / 1912',
    isPopular: true,
    tagsMr: ['सौर ऊर्जा', 'सोलर पंप', 'कुसुम योजना', '९०% अनुदान', 'दिवसा वीज', 'पाणी'],
    tagsEn: ['Solar Energy', 'Solar Pump', 'KUSUM Yojana', '90% Subsidy', 'Daytime Power', 'Water']
  },
  {
    id: 'magel-tyala-shettale',
    titleMr: 'मागेल त्याला शेततळे व सिंचन सुविधा (मुख्यमंत्री बळीराजा जलसंजीवनी)',
    titleEn: 'Magel Tyala Shettale (Farm Pond On Demand Scheme)',
    departmentMr: 'मृद व जलसंधारण विभाग / कृषी विभाग, महाराष्ट्र शासन',
    departmentEn: 'Soil & Water Conservation Dept, Govt of Maharashtra',
    category: 'irrigation',
    subsidyBenefitMr: 'शेततळे खोदकामासाठी ₹७५,००० पर्यंत थेट अनुदान आणि प्लास्टिक अस्तरीकरणासाठी ₹१,००,००० अनुदान',
    subsidyBenefitEn: 'Up to ₹75,000 subsidy for farm pond excavation and up to ₹1,00,000 for plastic lining',
    shortSummaryMr: 'पावसाचे पाणी साठवून दुष्काळी किंवा पावसाच्या खंडाच्या काळात पिकांना संरक्षित पाणी देण्यासाठी शासनामार्फत शेततळ्यासाठी भरीव अनुदान.',
    shortSummaryEn: 'Harvest rainwater to provide protective irrigation during drought spells with substantial state financial aid.',
    overviewMr: 'कोरडवाहू भागात पावसाच्या लहरीपणामुळे होणारे नुकसान टाळण्यासाठी महाराष्ट्र शासनाने मागेल त्याला शेततळे योजना आणली आहे. यात शेतकऱ्यांना त्यांच्या शेतात ३०x३०x३ मीटर किंवा वेगवेगळ्या आकाराचे शेततळे खोदण्यासाठी थेट बँक खात्यात अनुदान मिळते. याशिवाय शेततळ्यातून पाणी पाझरू नये म्हणून ५०० मायक्रॉन प्लास्टिक अस्तरीकरणासाठी (Lining) अतिरिक्त अनुदान दिले जाते.',
    overviewEn: 'A flagship scheme ensuring every willing farmer receives grant funding to dig a rainwater harvesting pond. It prevents crop failures during dry spells and recharges local groundwater. Subsidies cover both earthwork excavation and 500-micron UV-stabilized plastic lining.',
    benefitsListMr: [
      'शेततळे खोदकामासाठी जास्तीत जास्त ₹७५,००० थेट बँक खात्यात.',
      'शेततळे प्लास्टिक अस्तरीकरणासाठी (Lining) स्वतंत्र ₹१,००,००० अनुदान.',
      'पावसाच्या पाण्यावर रब्बी व उन्हाळी पिके घेण्याची क्षमता निर्माण होते.',
      'भूजल पातळीत लक्षणीय वाढ आणि विहिरींच्या पाणीपातळीत सुधारणा.'
    ],
    benefitsListEn: [
      'Direct DBT subsidy up to ₹75,000 for earthwork excavation.',
      'Additional subsidy up to ₹1,00,000 for 500-micron geomembrane plastic lining.',
      'Enables second crop in Rabi and Summer through stored rainwater.',
      'Substantially recharges groundwater and nearby open wells.'
    ],
    eligibilityCriteriaMr: [
      'शेतकऱ्याकडे किमान ०.५० हेक्टर (१.२५ एकर) शेतजमीन असावी.',
      'यापूर्वी शासकीय अनुदानातून शेततळे घेतलेले नसावे.',
      'शेततळ्याची जागा नैसर्गिक पाणी वाहून येणाऱ्या उतारावर असावी जेणेकरून पावसाचे पाणी साठू शकेल.'
    ],
    eligibilityCriteriaEn: [
      'Minimum landholding of 0.50 hectare (1.25 acres).',
      'Applicant should not have availed farm pond subsidy previously.',
      'Site should be technically feasible with suitable catchment slope.'
    ],
    requiredDocumentsMr: [
      '७/१२ व ८-अ उतारा',
      'जागेचा नकाशा (कच्चा आराखडा)',
      'आधार कार्ड व बँक पासबुक',
      'हमीपत्र (शेततळे स्वतः खोदण्याचे व सुरक्षिततेचे)'
    ],
    requiredDocumentsEn: [
      '7/12 & 8-A land records',
      'Rough layout map of proposed site',
      'Aadhaar card & bank passbook',
      'Affidavit / safety declaration'
    ],
    applicationProcessStepsMr: [
      '१. महाडीबीटी शेतकरी पोर्टल (mahadbt.maharashtra.gov.in) वर लॉगिन करा.',
      '२. "सिंचन साधने व सुविधा" या घटकामध्ये "शेततळे" हा पर्याय निवडा.',
      '३. शेततळ्याचा आकार (उदा. ३०x३०x३ मी.) निवडून अर्ज सबमिट करा.',
      '४. कृषी सहाय्यक जागेवर येऊन स्थळ पाहणी (Site Geo-tagging) करतील व पूर्वसंमती पत्र देतील.',
      '५. शेततळे पूर्ण झाल्यावर जिओ-टॅगिंग करून अनुदान थेट खात्यात वर्ग केले जाईल.'
    ],
    applicationProcessStepsEn: [
      '1. Login to MahaDBT Farmer Portal.',
      '2. Under "Irrigation Facilities", select "Farm Pond (Shettale)".',
      '3. Choose the pond dimension (e.g. 30x30x3 meters) and submit.',
      '4. Agri assistant conducts site verification and issues Pre-Sanction order.',
      '5. Complete excavation, geo-tag completed pond, and receive DBT grant directly.'
    ],
    portalName: 'MahaDBT Farmer Portal',
    portalUrl: 'https://mahadbt.maharashtra.gov.in',
    helplineNumber: '022-49150800',
    isPopular: true,
    tagsMr: ['शेततळे', 'पाणी साठा', 'सिंचन', '७५००० अनुदान', 'प्लास्टिक अस्तरीकरण', 'महाडीबीटी'],
    tagsEn: ['Farm Pond', 'Water Storage', 'Irrigation', '₹75k Subsidy', 'Plastic Lining', 'MahaDBT']
  },
  {
    id: 'krishi-yantrikikaran-smam',
    titleMr: 'कृषी यांत्रिकीकरण उपअभियान (ट्रॅक्टर व आधुनिक शेती औजारे)',
    titleEn: 'Sub-Mission on Agricultural Mechanization (SMAM - Tractor & Implements)',
    departmentMr: 'कृषी अभियांत्रिकी विभाग, महाराष्ट्र शासन',
    departmentEn: 'Agricultural Engineering, Dept of Agriculture, GoM',
    category: 'machinery',
    subsidyBenefitMr: 'ट्रॅक्टरसाठी ₹१,००,००० ते ₹१,२५,००० अनुदान; रोटाव्हेटर, नांगर, पेरणी यंत्रांवर ५०% पर्यंत अनुदान',
    subsidyBenefitEn: '₹1.00 Lakh to ₹1.25 Lakh subsidy on tractors; up to 50% subsidy on rotavators, seeders & plows',
    shortSummaryMr: 'मजूर टंचाईवर मात करण्यासाठी आणि शेतीचा उत्पादन खर्च कमी करण्यासाठी ट्रॅक्टर, पॉवर टिलर, रोटाव्हेटर, पेरणी यंत्रांवर ५०% पर्यंत थेट अनुदान.',
    shortSummaryEn: 'Mechanize farming operations to address labor shortage with up to 50% capital subsidy on tractors and high-tech implements.',
    overviewMr: 'शेतीची वेळेवर मशागत, पेरणी व काढणी व्हावी यासाठी केंद्र व राज्य शासन शेतकऱ्यांना आधुनिक अवजारे खरेदीसाठी ५०% पर्यंत (SC/ST/महिला व लहान शेतकऱ्यांना ५०% आणि सर्वसाधारण शेतकऱ्यांना ४०%) अनुदान देते. यामध्ये ट्रॅक्टर, पॉवर टिलर, रोटाव्हेटर, मळणी यंत्र, कटर-बाइंडर, लेझर लँड लेव्हलर आणि फवारणी पंपांचा समावेश आहे.',
    overviewEn: 'A mission to increase farm power availability. Provides 40% to 50% financial assistance for purchasing agricultural tractors, power tillers, rotavators, multi-crop seed drills, threshers, and drone sprayers, especially prioritizing small/marginal and women farmers.',
    benefitsListMr: [
      'ट्रॅक्टर खरेदीवर ₹१.२५ लाख पर्यंत अनुदान.',
      'रोटाव्हेटर, कल्टीव्हेटर, हायड्रॉलिक नांगर, बेड मेकरवर ₹३५,००० ते ₹६०,००० पर्यंत ५०% अनुदान.',
      'पॉवर टिलर, रीपर-बाइंडर, स्वयंचलित कापणी यंत्रांवर भरीव सवलत.',
      'शेतकऱ्यांची वेळेची आणि मजुरीच्या पैशांची मोठी बचत.'
    ],
    benefitsListEn: [
      'Up to ₹1.25 Lakh capital subsidy on new farm tractors.',
      'Up to 50% subsidy (₹35,000 to ₹60,000) on rotavators, MB plows, and bed makers.',
      'Generous support for power tillers, reapers, threshers, and harvesters.',
      'Saves immense manual labor cost and ensures timely crop sowing.'
    ],
    eligibilityCriteriaMr: [
      'अर्जदार शेतकऱ्याच्या नावे स्वतःची शेती असणे आवश्यक.',
      'एका अवजारासाठी कुटुंबातील एकाच सदस्याला पुढील १० वर्षांत एकदाच लाभ घेता येतो.',
      'ट्रॅक्टर अनुदानासाठी शेतकऱ्याकडे यापूर्वी स्वतःचा ट्रॅक्टर नसावा.'
    ],
    eligibilityCriteriaEn: [
      'Must possess cultivable land in applicant\'s name.',
      'Only one implement per family member once every 10 years.',
      'For tractor subsidy, applicant must not already own a registered tractor.'
    ],
    requiredDocumentsMr: [
      '७/१२ व ८-अ उतारा',
      'आधार कार्ड व बँक पासबुक',
      'जातीचे प्रमाणपत्र (लागू असल्यास)',
      'अधिकृत मान्यताप्राप्त विक्रेत्याचे अवजाराचे दरपत्रक (Quotation)',
      'ट्रॅक्टर चालवण्याचा परवाना (लागू असल्यास)'
    ],
    requiredDocumentsEn: [
      '7/12 & 8-A land record excerpts',
      'Aadhaar card & bank passbook',
      'Caste certificate (if applicable)',
      'Quotation from authorized implement dealer',
      'Driving license (if required for tractor)'
    ],
    applicationProcessStepsMr: [
      '१. महाडीबीटी पोर्टलवर (mahadbt.maharashtra.gov.in) शेतकरी लॉगीन करा.',
      '२. "कृषी यांत्रिकीकरण" हा घटक निवडून आपल्याला हवे असलेले अवजार किंवा ट्रॅक्टर निवडा.',
      '३. संगणकीय सोडत (Online Lottery) द्वारे निवड झाल्यावर मोबाईलवर SMS येतो.',
      '४. मान्यताप्राप्त डीलरकडून कोटेशन व कागदपत्रे पोर्टलवर अपलोड करा.',
      '५. पूर्वसंमती पत्र (Pre-Sanction) मिळाल्यावर अवजार खरेदी करून जीएसटी बिल अपलोड करा, अनुदान खात्यात जमा होईल.'
    ],
    applicationProcessStepsEn: [
      '1. Login to MahaDBT Farmer Portal.',
      '2. Select "Agricultural Mechanization" and pick the implement/tractor.',
      '3. Selections are made transparently via periodic online lotteries.',
      '4. Upload dealer quotation upon lottery selection notice.',
      '5. After pre-sanction letter is issued, purchase implement and upload GST invoice for DBT release.'
    ],
    portalName: 'MahaDBT Farmer Mechanization',
    portalUrl: 'https://mahadbt.maharashtra.gov.in',
    helplineNumber: '022-49150800',
    isPopular: true,
    tagsMr: ['ट्रॅक्टर अनुदान', 'रोटाव्हेटर', 'कृषी यांत्रिकीकरण', '५०% अनुदान', 'महाडीबीटी सोडत'],
    tagsEn: ['Tractor Subsidy', 'Rotavator', 'Mechanization', '50% Subsidy', 'MahaDBT Lottery']
  },
  {
    id: 'gopinath-munde-apghat-vima',
    titleMr: 'गोपीनाथ मुंडे शेतकरी अपघात सुरक्षा सानुग्रह अनुदान योजना',
    titleEn: 'Gopinath Munde Shetkari Apghat Suraksha Yojana',
    departmentMr: 'कृषी व महसूल विभाग, महाराष्ट्र शासन',
    departmentEn: 'Department of Agriculture & Revenue, GoM',
    category: 'special_welfare',
    subsidyBenefitMr: 'अपघाती मृत्यू किंवा कायमस्वरूपी दोन्ही अवयव निकामी झाल्यास ₹२,००,००० ची आर्थिक मदत',
    subsidyBenefitEn: '₹2,00,000 compensation for accidental death or permanent total disability',
    shortSummaryMr: 'शेती करताना अपघाती मृत्यू, विजेचा धक्का, सर्पदंश, विहिरीत पडून मृत्यू किंवा कायमचे अपंगत्व आल्यास पीडित शेतकरी कुटुंबाला ₹२ लाख मदत.',
    shortSummaryEn: 'Comprehensive financial relief of ₹2,00,000 to farmer families in case of accidental death, snakebite, electrocution, or drowning.',
    overviewMr: 'शेतकऱ्यांना शेती करताना अनेक नैसर्गिक व मानवनिर्मित अपघातांना सामोरे जावे लागते. विजेचा शॉक, विहिरीत पडणे, सर्पदंश, रस्त्यावरील अपघात, विषबाधा किंवा कीटकनाशके फवारताना विषबाधा होऊन मृत्यू झाल्यास अथवा दोन डोळे/दोन हात/दोन पाय निकामी झाल्यास ₹२ लाख, तर एक अवयव निकामी झाल्यास ₹१ लाख सानुग्रह अनुदान शासनाकडून थेट वारसदाराच्या बँक खात्यात दिले जाते.',
    overviewEn: 'Provides critical financial security to agricultural families. In the event of unfortunate accidental death (tractor accident, lightning, snakebite, well drowning, electrocution, chemical pesticide toxicity) or permanent dual-limb loss, ₹2 Lakhs is paid directly to legal heirs.',
    benefitsListMr: [
      'अपघाती मृत्यू झाल्यास वारसदारास ₹२,००,००० एकरकमी सानुग्रह अनुदान.',
      'अपघातात दोन्ही डोळे किंवा दोन्ही हात/पाय गमावल्यास ₹२,००,००० मदत.',
      'एक डोळा किंवा एक अवयव कायमस्वरूपी निकामी झाल्यास ₹१,००,००० मदत.',
      'शेतकऱ्याला कोणताही प्रीमियम भरावा लागत नाही, सर्व खर्च शासन करते.'
    ],
    benefitsListEn: [
      'Lump-sum compensation of ₹2,00,000 to legal nominee on accidental death.',
      '₹2,00,000 on loss of both eyes or both limbs.',
      '₹1,00,000 on loss of one eye or one limb.',
      '100% state-funded: farmer pays zero insurance premium.'
    ],
    eligibilityCriteriaMr: [
      'वय वर्षे १० ते ७५ दरम्यान असलेला महसुली ७/१२ वर नाव असलेला शेतकरी किंवा त्याच्या कुटुंबातील कोणताही एक सदस्य (आई, वडील, पती/पत्नी, मुलगा, अविवाहित मुलगी).',
      'अपघात झाल्याच्या तारखेपासून ३० दिवसांच्या आत तालुका कृषी अधिकारी किंवा तहसीलदारांकडे अर्ज सादर करणे आवश्यक.',
      'आत्महत्या, खून, मद्यधुंद अवस्थेतील अपघात यास सानुग्रह अनुदान मिळत नाही.'
    ],
    eligibilityCriteriaEn: [
      'Age between 10 and 75 years; must be a registered 7/12 landholder or family member.',
      'Application must be lodged within 30 days of the incident with Taluka Agri Officer / Tehsildar.',
      'Suicides, homicides, or drunk driving accidents are excluded.'
    ],
    requiredDocumentsMr: [
      'एफ.आय.आर. (FIR) व प्रथम माहिती अहवाल',
      'घटनास्थळ पंचनामा व इनक्वेस्ट पंचनामा',
      'शवविच्छेदन अहवाल (Post-Mortem Report) व मृत्यू दाखला',
      '७/१२ व ८-अ उतारा आणि कुटुंब वारसदार प्रमाणपत्र',
      'वारसदाराचे आधार कार्ड व बँक पासबुक प्रत'
    ],
    requiredDocumentsEn: [
      'First Information Report (FIR) from police station',
      'Spot Panchnama & Inquest Report',
      'Post-Mortem Report & Municipal Death Certificate',
      '7/12 & 8-A excerpt + Legal heir certificate',
      'Nominee\'s Aadhaar card and active bank passbook'
    ],
    applicationProcessStepsMr: [
      '१. अपघात घडल्यास तात्काळ स्थानिक पोलीस ठाण्यात नोंद करा व पंचनामा करून घ्या.',
      '२. शासकीय रुग्णालयातून शवविच्छेदन (PM) अहवाल प्राप्त करा.',
      '३. ३० दिवसांच्या आत तालुका कृषी अधिकारी (TAO) कार्यालयात किंवा सेतू केंद्रात विहित नमुन्यात अर्ज द्या.',
      '४. तहसीलदार यांच्या अध्यक्षतेखालील समिती अर्जाची छाननी करून मंजुरी देते.',
      '५. मंजूर रक्कम थेट वारसदाराच्या बँक खात्यात आरटीजीएस द्वारे जमा केली जाते.'
    ],
    applicationProcessStepsEn: [
      '1. File police report immediately and obtain spot Panchnama.',
      '2. Collect Post-Mortem report from the Govt Hospital.',
      '3. Submit claim dossier within 30 days to the Taluka Agriculture Office (TAO).',
      '4. Tehsil-level committee scrutinizes and sanctions the compensation.',
      '5. Sanctioned funds are disbursed directly into nominee\'s bank account via RTGS.'
    ],
    portalName: 'कृषी आयुक्तालय, महाराष्ट्र शासन',
    portalUrl: 'https://krishi.maharashtra.gov.in',
    helplineNumber: '020-26123383',
    isPopular: true,
    tagsMr: ['अपघात विमा', '२ लाख मदत', 'सर्पदंश मदत', 'विजेचा झटका', 'वारसदार अनुदान', 'गोपीनाथ मुंडे'],
    tagsEn: ['Accidental Insurance', '₹2 Lakh Aid', 'Snakebite Relief', 'Electrocution', 'Nominee Grant', 'Gopinath Munde']
  },
  {
    id: 'dr-ambedkar-krishi-swavalamban',
    titleMr: 'डॉ. बाबासाहेब आंबेडकर कृषी स्वावलंबन योजना',
    titleEn: 'Dr. Babasaheb Ambedkar Krishi Swavalamban Yojana',
    departmentMr: 'सामाजिक न्याय व कृषी विभाग, महाराष्ट्र शासन',
    departmentEn: 'Social Justice & Agriculture Dept, GoM',
    category: 'special_welfare',
    subsidyBenefitMr: 'नवीन विहिरीसाठी ₹२,५०,०००; जुनी विहीर दुरुस्ती ₹५०,०००; शेततळे ₹५०,०००; ठिबक व तुषार सिंचन १००% अनुदान',
    subsidyBenefitEn: 'New Open Well ₹2.50 Lakh; Well Repair ₹50,000; Farm Pond ₹50,000; Micro-Irrigation up to 100%',
    shortSummaryMr: 'अनुसूचित जाती (SC) व नवबौद्ध प्रवर्गातील शेतकऱ्यांना शेतात नवीन विहीर खोदण्यासाठी ₹२.५० लाख व सिंचन साधनांसाठी १००% पर्यंत अनुदान.',
    shortSummaryEn: 'Dedicated water infrastructure scheme for SC & Neo-Buddhist farmers with up to ₹2.5 Lakh grant for new open irrigation wells.',
    overviewMr: 'अनुसूचित जातीच्या शेतकऱ्यांचे राहणीमान उंचावण्यासाठी आणि त्यांच्या शेतीला कायमस्वरूपी सिंचनाची सुविधा देण्यासाठी ही विशेष योजना राबवली जाते. यात नवीन विहीर खोदणे, इनवेल बोअरिंग, जुनी विहीर दुरुस्ती, पंप संच खरेदी, वीज जोडणी आकार, पाईपलाईन आणि सूक्ष्म सिंचन (ठिबक/तुषार) या सर्व घटकांसाठी स्वतंत्र व घसघशीत अनुदान दिले जाते.',
    overviewEn: 'Enables Scheduled Caste and Neo-Buddhist farming families to establish permanent irrigation infrastructure. Provides dedicated grants for new open wells, well deepening, in-well borewells, electric pump sets, pipeline laying, and micro-irrigation systems.',
    benefitsListMr: [
      'नवीन विहीर खोदकामासाठी थेट ₹२,५०,००० पर्यंत अनुदान.',
      'जुनी विहीर दुरुस्तीसाठी ₹५०,००० आणि इनवेल बोअरिंगसाठी ₹२०,०००.',
      'विद्युत पंप किंवा सौर पंप संचासाठी ₹२५,०००.',
      'शेतात एचडीपीई/पीव्हीसी पाईपलाईन टाकण्यासाठी ₹३०,०००.',
      'ठिबक व तुषार सिंचनासाठी १००% पर्यंत कमाल अनुदान.'
    ],
    benefitsListEn: [
      'Direct grant up to ₹2,50,000 for digging a new irrigation open well.',
      '₹50,000 for repairing existing open well and ₹20,000 for in-well boring.',
      '₹25,000 for electric or solar motor pump sets.',
      '₹30,000 for farm PVC/HDPE irrigation pipelines.',
      'Up to 100% micro-irrigation subsidy for drip and sprinkler units.'
    ],
    eligibilityCriteriaMr: [
      'शेतकरी अनुसूचित जाती (SC) किंवा नवबौद्ध प्रवर्गातील असावा व जातीचे वैध प्रमाणपत्र असावे.',
      'शेतकऱ्याकडे स्वतःच्या नावे किमान ०.२० हेक्टर (अर्धा एकर) ते कमाल ६ हेक्टर शेतजमीन असावी.',
      'शेतकऱ्याचे वार्षिक कौटुंबिक उत्पन्न ₹१,५०,००० पेक्षा कमी असावे (दारिद्र्यरेषेखालील कुटुंबांना प्राधान्य).',
      'दोन विहिरींमध्ये किमान १५० मीटर अंतर असणे भूजल नियमानुसार आवश्यक.'
    ],
    eligibilityCriteriaEn: [
      'Applicant must belong to Scheduled Caste (SC) / Neo-Buddhist community with valid caste certificate.',
      'Landholding between 0.20 hectare (0.5 acre) and 6.00 hectares.',
      'Annual family income ceiling below ₹1,50,000 (BPL preferred).',
      'Distance of at least 150m between existing water sources as per GSDA norms.'
    ],
    requiredDocumentsMr: [
      'सक्षम अधिकाऱ्याने दिलेले जातीचे प्रमाणपत्र',
      '७/१२, ८-अ उतारा व जमिनीचा नकाशा',
      'तहसीलदारांचा उत्पन्नाचा दाखला',
      'भूजल सर्वेक्षण विकास यंत्रणेचे (GSDA) पाणी उपलब्धतेचे प्रमाणपत्र',
      'आधार कार्ड व राष्ट्रीयकृत बँक पासबुक'
    ],
    requiredDocumentsEn: [
      'Official Caste Certificate issued by competent authority',
      '7/12 & 8-A record and certified field map',
      'Tehsildar-issued annual income certificate',
      'GSDA water potential feasibility clearance',
      'Aadhaar card and Nationalized bank passbook'
    ],
    applicationProcessStepsMr: [
      '१. महाडीबीटी पोर्टलवर (mahadbt.maharashtra.gov.in) जाऊन SC प्रवर्गातून नोंदणी करा.',
      '२. "डॉ. बाबासाहेब आंबेडकर कृषी स्वावलंबन योजना" निवडा आणि "नवीन विहीर" घटक निवडा.',
      '३. GSDA पाणी प्रमाणपत्र व इतर सर्व कागदपत्रे अपलोड करा.',
      '४. तालुका कृषी समितीकडून प्रत्यक्ष जागेची पाहणी होऊन प्रशासकीय मान्यता दिली जाते.',
      '५. विहिरीचे काम ३ टप्प्यांत तपासणी (M-Book) होऊन अनुदान हप्त्यांमध्ये बँक खात्यात वर्ग होते.'
    ],
    applicationProcessStepsEn: [
      '1. Login to MahaDBT Portal with SC farmer profile.',
      '2. Select "Dr. Ambedkar Krishi Swavalamban" and pick "New Open Well".',
      '3. Upload caste certificate, income proof, and GSDA inspection certificate.',
      '4. Taluka committee verifies field and issues technical sanction.',
      '5. Construction grant is released in stage-wise installments linked to M-Book measurement.'
    ],
    portalName: 'MahaDBT Special Schemes',
    portalUrl: 'https://mahadbt.maharashtra.gov.in',
    helplineNumber: '022-49150800',
    isPopular: false,
    tagsMr: ['नवीन विहीर', '२.५ लाख अनुदान', 'अनुसूचित जाती योजना', 'सिंचन', 'पाईपलाईन', 'डॉ. आंबेडकर योजना'],
    tagsEn: ['New Well', '₹2.5 Lakh Grant', 'SC Farmer Scheme', 'Irrigation', 'Pipeline', 'Dr Ambedkar Scheme']
  },
  {
    id: 'drip-sprinkler-micro-irrigation',
    titleMr: 'मुख्यमंत्री शाश्वत कृषी सिंचन योजना (ठिबक व तुषार सिंचन ८०% अनुदान)',
    titleEn: 'Mukhyamantri Shashwat Krishi Sinchan Yojana (Drip & Sprinkler 80% Subsidy)',
    departmentMr: 'कृषी विभाग, महाराष्ट्र शासन',
    departmentEn: 'Department of Agriculture, Govt of Maharashtra',
    category: 'irrigation',
    subsidyBenefitMr: 'अल्प व अत्यल्प भूधारक शेतकऱ्यांना ८०% अनुदान, इतर शेतकऱ्यांना ७५% अनुदान',
    subsidyBenefitEn: '80% subsidy for small & marginal farmers, 75% for other farmers',
    shortSummaryMr: 'कमी पाण्यात जास्तीत जास्त उत्पादन घेण्यासाठी शेतात ठिबक किंवा तुषार सिंचन संच बसवण्यासाठी शासनाकडून ८०% पर्यंत घसघशीत अनुदान.',
    shortSummaryEn: 'Save water and boost yields with up to 80% direct subsidy on micro-irrigation drip and sprinkler systems.',
    overviewMr: 'पाण्याची टंचाई असलेल्या महाराष्ट्रातील सर्व जिल्ह्यांमध्ये सूक्ष्म सिंचनाचा वापर वाढवण्यासाठी ही योजना सुरू आहे. केंद्र सरकारच्या प्रधानमंत्री कृषी सिंचन योजनेतील ५५% अनुदानासोबत महाराष्ट्र शासन अतिरिक्त २५% पूरक अनुदान देते. यामुळे शेतकऱ्याला एकूण ८०% अनुदान मिळते आणि फक्त २०% खर्चात ठिबक किंवा तुषार संच शेतात बसवला जातो.',
    overviewEn: 'Top-up scheme supplementing PMKSY. Small & marginal farmers receive 55% Central subsidy plus 25% Maharashtra Government supplement, totaling 80% subsidy. Saves 50% water while increasing farm yield by 30-40%.',
    benefitsListMr: [
      'पाण्याची ५०% ते ६०% बचत आणि विजेचा कमी वापर.',
      'खते थेट मुळांना (Fertigation) देता येत असल्याने खतांची ३०% बचत.',
      'उत्पादनात किमान २५% ते ४०% भरघोस वाढ.',
      'कमाल ५ हेक्टर क्षेत्रापर्यंत अनुदानाचा लाभ उपलब्ध.'
    ],
    benefitsListEn: [
      'Saves 50% to 60% irrigation water and reduces electricity load.',
      'Allows precision fertigation directly to root zones, saving 30% fertilizer.',
      'Increases crop output by 25% to 40%.',
      'Subsidy available for up to 5 hectares per farmer.'
    ],
    eligibilityCriteriaMr: [
      'शेतकऱ्याकडे स्वतःच्या नावे शेतजमीन आणि पाण्याचा शाश्वत स्त्रोत असावा.',
      'वीज पंप किंवा सोलर पंप कार्यान्वित असावा.',
      'एकाच क्षेत्रावर पुढील ७ वर्षे दुसऱ्यांदा अनुदान घेता येत नाही.'
    ],
    eligibilityCriteriaEn: [
      'Landholding in farmer\'s name with functional water source.',
      'Must have working motor pump or solar pump.',
      'Can be availed once every 7 years for the same survey parcel.'
    ],
    requiredDocumentsMr: [
      '७/१२ व ८-अ उतारा',
      'मान्यताप्राप्त ठिबक कंपनीचे कोटेशन व डिझाईन नकाशा',
      'आधार कार्ड व बँक पासबुक',
      'वीज बिल किंवा सोलर पंप पावती'
    ],
    requiredDocumentsEn: [
      '7/12 & 8-A land records',
      'Dealer quotation & drip layout design from certified vendor',
      'Aadhaar card & bank passbook',
      'Electricity bill or solar pump certificate'
    ],
    applicationProcessStepsMr: [
      '१. महाडीबीटी पोर्टलवर अर्ज करून ठिबक किंवा तुषार सिंचन निवडा.',
      '२. सोडत लागल्यानंतर कृषी विभागाकडून पूर्वसंमती (Pre-Sanction) पत्र मिळवा.',
      '३. मान्यताप्राप्त डीलरकडून संच खरेदी करून शेतात बसवून घ्या.',
      '४. बिल व फोटो पोर्टलवर अपलोड करा.',
      '५. कृषी सहाय्यक जागेवर येऊन मोका तपासणी करतील व अनुदान खात्यात वर्ग होईल.'
    ],
    applicationProcessStepsEn: [
      '1. Apply on MahaDBT selecting Drip or Sprinkler system.',
      '2. Receive Pre-Sanction letter upon lottery allotment.',
      '3. Procure and install system from BIS-registered vendor.',
      '4. Upload GST tax invoice and field installation photos.',
      '5. Agri officer conducts field verification; subsidy is released via DBT.'
    ],
    portalName: 'MahaDBT Micro Irrigation',
    portalUrl: 'https://mahadbt.maharashtra.gov.in',
    helplineNumber: '022-49150800',
    isPopular: true,
    tagsMr: ['ठिबक सिंचन', 'तुषार सिंचन', '८०% अनुदान', 'पाणी बचत', 'महाडीबीटी', 'सूक्ष्म सिंचन'],
    tagsEn: ['Drip Irrigation', 'Sprinkler', '80% Subsidy', 'Water Saving', 'MahaDBT', 'Micro Irrigation']
  },
  {
    id: 'animal-husbandry-dairy-goat-scheme',
    titleMr: 'पशुसंवर्धन विभाग - दुधाळ गाय-म्हैस वाटप व शेळीपालन अनुदान योजना',
    titleEn: 'Animal Husbandry Dept - Dairy Cattle & Goat Farming Subsidy',
    departmentMr: 'पशुसंवर्धन आयुक्तालय, महाराष्ट्र शासन',
    departmentEn: 'Commissionerate of Animal Husbandry, Govt of Maharashtra',
    category: 'animal_husbandry',
    subsidyBenefitMr: '२ दुधाळ गायी/म्हशी खरेदीवर ५०% ते ७५% अनुदान; १०+१ शेळी मेंढी गटासाठी ५०% ते ७५% अनुदान',
    subsidyBenefitEn: '50% to 75% subsidy on 2 milch cows/buffaloes; 50% to 75% on 10+1 goat unit',
    shortSummaryMr: 'शेतकऱ्यांना शेतीपूरक व्यवसाय म्हणून २ संकरित गायी किंवा म्हशी, तसेच १० शेळ्या + १ बोकड गट स्थापनेसाठी शासनाकडून ५०% ते ७५% भांडवली अनुदान.',
    shortSummaryEn: 'Capital subsidy of up to 75% for purchasing 2 high-yielding milch cattle or establishing a 10+1 goat farming unit.',
    overviewMr: 'कोरडवाहू शेतकऱ्यांचे उत्पन्न दुप्पट करण्यासाठी व दुष्काळात शाश्वत उत्पन्नाचा स्त्रोत निर्माण करण्यासाठी राज्य शासनाचा पशुसंवर्धन विभाग ही योजना राबवतो. यात २ दुधाळ गाई/म्हशी गट किंवा १० शेळ्या व १ बोकड गट दिला जातो. अनुसूचित जाती व जमाती प्रवर्गासाठी ७५% अनुदान आणि सर्वसाधारण प्रवर्गासाठी ५०% अनुदान मिळते. सोबत ३ वर्षांचा पशुविमा सुद्धा समाविष्ट असतो.',
    overviewEn: 'Boosts supplementary farm income through dairy and small ruminant husbandry. Provides financial assistance for purchasing 2 high-yielding HF/Jersey cows, Murrah/Jafrabadi buffaloes, or 10 Osmanabadi/Sangamneri goats + 1 buck. SC/ST farmers get 75% subsidy; General category gets 50% with 3 years livestock insurance.',
    benefitsListMr: [
      '२ दुधाळ जनावरांच्या खरेदीवर सर्वसाधारण प्रवर्गाला ५०% (₹४०,००० ते ₹६०,०००) व SC/ST ला ७५% अनुदान.',
      '१०+१ शेळी गटासाठी शेड, खाद्य व जनावरांवर ५०% ते ७५% अनुदान.',
      'जनावरांचा ३ वर्षांचा विमा शासकीय अनुदानातून मोफत.',
      'दुग्ध व्यवसाय व शेळीपालनातून दरमहा नियमित उत्पन्नाची खात्री.'
    ],
    benefitsListEn: [
      '50% (General) to 75% (SC/ST) subsidy on purchasing 2 milch cattle units.',
      '50% to 75% aid on 10 goats + 1 buck unit including shed construction.',
      'Free 3-year comprehensive livestock insurance under scheme.',
      'Guarantees recurring monthly income alongside seasonal agriculture.'
    ],
    eligibilityCriteriaMr: [
      'अर्जदाराकडे चारा उत्पादनासाठी शेतजमीन असावी किंवा जनावरे सांभाळण्याची सोय असावी.',
      'वय १८ ते ६० वर्षे दरम्यान असावे.',
      'कुटुंबातील एकाच व्यक्तीला योजनेचा लाभ घेता येतो.'
    ],
    eligibilityCriteriaEn: [
      'Applicant must have fodder availability or sufficient shelter arrangement.',
      'Age between 18 and 60 years.',
      'Restricted to one beneficiary per household.'
    ],
    requiredDocumentsMr: [
      '७/१२ व ८-अ उतारा',
      'आधार कार्ड व बँक पासबुक',
      'जातीचा दाखला (SC/ST सवलतीसाठी)',
      'पशुपालन प्रशिक्षण प्रमाणपत्र (असल्यास प्राधान्य)',
      'रहिवासी प्रमाणपत्र'
    ],
    requiredDocumentsEn: [
      '7/12 & 8-A land records',
      'Aadhaar card & bank passbook',
      'Caste certificate for SC/ST category',
      'Livestock rearing training certificate (preferred)',
      'Domicile certificate'
    ],
    applicationProcessStepsMr: [
      '१. महाडीबीटी पोर्टलवर "पशुसंवर्धन योजना" या शीर्षकाखाली नोंदणी करा.',
      '२. दुधाळ जनावरे वाटप किंवा शेळी गट वाटप योजना निवडा.',
      '३. कागदपत्रे जोडून अर्ज सादर करा.',
      '४. जिल्हास्तरीय समितीकडून लाभार्थी निवड झाल्यावर खरेदी समितीसमोर जनावरे खरेदी करा.',
      '५. जनावरांना कानात टॅग (Ear Tagging) लावून अनुदानाची रक्कम खात्यात जमा केली जाते.'
    ],
    applicationProcessStepsEn: [
      '1. Login to MahaDBT under Animal Husbandry Schemes.',
      '2. Select Milch Animals or Goat Farming Unit.',
      '3. Submit application along with required attachments.',
      '4. Upon selection, purchase animals before the designated purchase committee.',
      '5. Ear tagging is completed and subsidy is credited to applicant\'s bank account.'
    ],
    portalName: 'MahaDBT Animal Husbandry',
    portalUrl: 'https://ahd.mahadbtmahait.gov.in',
    helplineNumber: '1962 / 020-25691456',
    isPopular: false,
    tagsMr: ['दुधाळ गाय', 'म्हैस वाटप', 'शेळीपालन अनुदान', 'पशुसंवर्धन', '७५% अनुदान', 'डेअरी व्यवसाय'],
    tagsEn: ['Milch Cow', 'Buffalo', 'Goat Farming', 'Animal Husbandry', '75% Subsidy', 'Dairy']
  }
];
