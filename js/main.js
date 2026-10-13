/**
 * NATTHANON SONSAWAN - FULL-STACK DEVELOPER PORTFOLIO
 * Main JavaScript Engine: CV Data, Project Showcase, i18n, Theme, Lightbox
 */

// Project Data Store with full bilingual content and multiple screenshots
const PROJECTS_DATA = [
  {
    id: 'erp',
    category: 'erp',
    company: 'D DOT FARM / iToolmart',
    duration: '2 ปี 3 เดือน',
    title: {
      th: 'iToolMart Enterprise ERP, POS & Inventory Platform',
      en: 'iToolMart Enterprise ERP, POS & Inventory Platform'
    },
    shortDesc: {
      th: 'ระบบบริหารทรัพยากรองค์กร (ERP) และ POS จัดการยอดขาย สินค้าคงคลังหลายสาขา ระบบจัดซื้อ PO และวิเคราะห์กำไรขาดทุน',
      en: 'Enterprise ERP & POS platform managing multi-branch inventory, procurement POs, sales ledgers, and profit analytics.'
    },
    fullDesc: {
      th: 'พัฒนาระบบ ERP และ POS สำหรับธุรกิจค้าปลีก-ค้าส่งขนาดใหญ่ รวบรวมข้อมูลรายรับ-รายจ่าย ยอดขาย กำไรขาดทุน แสดงผลแดชบอร์ดแบบโต้ตอบด้วย Highcharts จัดการระบบสต็อกแจ้งเตือนสินค้าใกล้หมด (Low Stock Alert) ระบบสร้างใบสั่งซื้อ (PO) ส่งออกเอกสาร Excel/PDF พร้อมการควบคุมสิทธิ์ผู้ใช้แบบเข้มงวด (RBAC)',
      en: 'Engineered an end-to-end ERP and POS system for large-scale retail & wholesale business. Aggregates multi-branch financials, profit margins into Highcharts dashboards, automated stock alerts, procurement workflows with Excel/PDF exports, and granular RBAC security.'
    },
    tags: ['Full-Stack', 'PHP', 'MySQL', 'ERP Architecture', 'POS System', 'Highcharts', 'Excel/PDF Export', 'RBAC'],
    images: [
      './Portfolio/erp/1.png',
      './Portfolio/erp/2.png',
      './Portfolio/erp/3.png',
      './Portfolio/erp/4.png',
      './Portfolio/erp/5.png'
    ],
    features: {
      th: [
        'แดชบอร์ดสรุปรายรับ-รายจ่าย และยอดขายรวมทุกสาขาแบบเรียลไทม์ พร้อมกราฟ Highcharts',
        'ระบบบริหารสต็อกคลังสินค้าและการแจ้งเตือนสินค้าใกล้หมด (Low Stock Alert)',
        'ระบบสร้างและจัดการใบสั่งซื้อ (PO) พร้อมฟิลเตอร์ช่วงเวลาและส่งออก Excel',
        'ระบบจัดการยอดขายและใบเสร็จ แยกตามพนักงานขายและคลังสาขา',
        'การควบคุมสิทธิ์ผู้ใช้งาน (Role-Based Access Control) ตามระดับอำนาจ'
      ],
      en: [
        'Real-time multi-branch financial & sales analytics dashboard powered by Highcharts',
        'Multi-warehouse stock inventory with automated low-stock threshold alerts',
        'PO procurement workflow with custom date-range filtering and Excel export',
        'Sales and invoice audit tracking sorted by salesperson and warehouse',
        'Role-Based Access Control (RBAC) across organizational departments'
      ]
    }
  },
  {
    id: 'hr',
    category: 'hr',
    company: 'D DOT FARM',
    duration: '2 ปี 3 เดือน',
    title: {
      th: 'Dee.Farm HR Management & Payroll Platform',
      en: 'Dee.Farm HR Management & Payroll Platform'
    },
    shortDesc: {
      th: 'แพลตฟอร์มบริหารงานบุคคลครบวงจร ระบบลงเวลาเข้าออกงาน อนุมัติวันลา และคำนวณบัญชีเงินเดือน (Payroll)',
      en: 'All-in-one Human Resource Management platform with clock-in/out, digital leave approval, and automated payroll.'
    },
    fullDesc: {
      th: 'ระบบบริหารจัดการทรัพยากรบุคคลขององค์กร รองรับการบันทึกเวลาทำงานผ่านระบบออนไลน์ เช็คสถิติการมาสาย ขาดงาน ระบบยื่นขออนุมัติวันลา (ลาป่วย ลากิจ ลาพักร้อน) พร้อมปฏิทินบริษัท ระบบจัดการข้อมูลพนักงาน และระบบบัญชีเงินเดือน (Payroll) คำนวณภาษีอัตโนมัติ',
      en: 'Enterprise HRM platform featuring web clock-in/out attendance tracking, tardiness analytics, digital leave requests with approval hierarchies, company calendar sync, employee directory, and automated payroll slip & tax computation.'
    },
    tags: ['Full-Stack', 'Vue.js', 'Node.js', 'MySQL', 'HRM System', 'Payroll Engine', 'Attendance Tracking', 'Calendar Sync'],
    images: [
      './Portfolio/hr/1.png',
      './Portfolio/hr/2.png',
      './Portfolio/hr/3.png',
      './Portfolio/hr/4.png'
    ],
    features: {
      th: [
        'แดชบอร์ดพนักงานส่วนบุคคล: ลงเวลาเข้างาน, เลิกงาน, สถิติการมาสาย และวันลาคงเหลือ',
        'ระบบยื่นคำร้องขอลา (ลาป่วย, ลากิจ, ลาพักร้อน) พร้อมเหตุผลและสถานะอนุมัติ',
        'ระบบบัญชีเงินเดือน (Payroll) แสดงรายการจ่าย ย้อนหลัง และดาวน์โหลดสลิปเงินเดือน',
        'ระบบจัดการประวัติพนักงาน เอกสารแนบ ประวัติการศึกษา และข้อมูลบัญชีธนาคาร',
        'ปฏิทินองค์กรแสดงวันหยุดประจำปีและกำหนดการวันหยุดสำคัญ'
      ],
      en: [
        'Personal employee portal: Clock in/out, remaining quota, tardiness logs',
        'Digital leave management workflow (Sick, Personal, Vacation) with manager approvals',
        'Comprehensive payroll ledger with payment receipts and exportable slips',
        'Employee master file repository including emergency contacts and banking data',
        'Interactive organization calendar highlighting public holidays and company events'
      ]
    }
  },
  {
    id: 'itool',
    category: 'ecommerce',
    company: 'D DOT FARM / iToolmart',
    duration: '2 ปี 3 เดือน',
    title: {
      th: 'iToolMart E-Commerce Platform & Community',
      en: 'iToolMart E-Commerce Platform & Community'
    },
    shortDesc: {
      th: 'เว็บสโตร์ค้าปลีกเครื่องมือช่างและอุปกรณ์อุตสาหกรรม แคตตาล็อกแบรนด์ A-Z คูปองโปรโมชั่น และวิดีโอ TikTok',
      en: 'Large-scale industrial tool e-commerce platform with dynamic brand filters, promo vouchers, and TikTok video feeds.'
    },
    fullDesc: {
      th: 'ร้านค้าออนไลน์สินค้าอุตสาหกรรมและเครื่องมือช่างชั้นนำ รองรับแคตตาล็อกสินค้าขนาดใหญ่ การจัดหมวดหมู่แบรนด์ A-Z ค้นหาแบบทันใจ ระบบคูปองส่งฟรีและโปรโมชั่นส่วนลด พร้อมการเชื่อมโยงคอนเทนต์วิดีโอ TikTok จากหน้าร้านสาขา และบล็อกบทความรีวิวเครื่องมือ',
      en: 'Modern e-commerce platform built for professional tool retail. Features responsive mega-menus, alphabetical brand index, instant keyword search, promotional discount voucher engine, branch TikTok feed embeds, and engineering blog community.'
    },
    tags: ['E-Commerce', 'Frontend Architecture', 'Vue.js / Nuxt', 'Brand Index A-Z', 'Coupon Engine', 'TikTok Embed', 'UI/UX'],
    images: [
      './Portfolio/itool/1.png',
      './Portfolio/itool/2.png',
      './Portfolio/itool/3.png',
      './Portfolio/itool/4.png',
      './Portfolio/itool/5.png'
    ],
    features: {
      th: [
        'แคตตาล็อกสินค้าอัจฉริยะ ค้นหาและจัดกลุ่มหมวดหมู่อุปกรณ์ช่างหลากหลายสเปก',
        'ดัชนีแบรนด์ A-Z ช่วยให้ลูกค้าค้นหาแบรนด์ยอดนิยมได้อย่างรวดเร็ว',
        'ระบบคูปองส่งฟรีและส่วนลดคำนวณตามเงื่อนไขยอดซื้อ',
        'ระบบเชื่อมโยงสื่อวิดีโอ TikTok จากสาขา เพิ่มยอดขายและความน่าเชื่อถือ',
        'ระบบคอมมูนิตี้และบทความรีวิวเทคนิคช่าง ช่วยขับเคลื่อน SEO'
      ],
      en: [
        'Extensive product categorization tailored for complex hardware specifications',
        'Alphabetical (A-Z) brand directory with instant multi-filter browsing',
        'Tiered promotion coupon engine (Free shipping, minimum spend discounts)',
        'Live social commerce integration embedding regional TikTok videos',
        'Integrated knowledge base & review articles optimizing organic SEO'
      ]
    }
  },
  {
    id: 'superexchange',
    category: 'fintech',
    company: 'FinTech Solution / Central Chiang Rai',
    duration: 'Production System',
    title: {
      th: 'Super Exchange Chiang Rai — Live FX & Rate Locking',
      en: 'Super Exchange Chiang Rai — Live FX & Rate Locking'
    },
    shortDesc: {
      th: 'แพลตฟอร์มแลกเปลี่ยนเงินตราต่างประเทศ บอร์ดเรทเรียลไทม์ และระบบจองล็อกเรทออนไลน์ล่วงหน้า',
      en: 'FinTech currency exchange web service featuring real-time FX rate boards and rate-locking booking.'
    },
    fullDesc: {
      th: 'เว็บแอปพลิเคชันบริการแลกเปลี่ยนเงินตราต่างประเทศสาขาเซ็นทรัล เชียงราย แสดงกระดานอัตราแลกเปลี่ยนสกุลเงินหลักทั่วโลก (USD, EUR, JPY, GBP, CNY, SGD ฯลฯ) พร้อมเครื่องคำนวณเงินตรา ระบบเปิดจองล็อกเรทล่วงหน้าเพื่อคุ้มครองความผันผวน และเชื่อมต่อ Official LINE Chat สำหรับลูกค้า',
      en: 'Foreign currency exchange web app serving Central Chiang Rai. Features live rate boards for global currencies (USD, EUR, JPY, GBP, CNY, SGD), interactive FX conversion calculator, branch reservation booking with rate-locking, and LINE Official API integration.'
    },
    tags: ['FinTech', 'Real-Time FX Board', 'Rate Lock Booking', 'Calculator Tool', 'LINE API', 'Responsive UI'],
    images: [
      './Portfolio/superexchangechiangrai/1.png',
      './Portfolio/superexchangechiangrai/2.png',
      './Portfolio/superexchangechiangrai/3.png',
      './Portfolio/superexchangechiangrai/4.png',
      './Portfolio/superexchangechiangrai/5.png'
    ],
    features: {
      th: [
        'กระดานอัตราแลกเปลี่ยนเงินตราต่างประเทศแบบเรียลไทม์ อัปเดตเรทซื้อ-ขายแม่นยำ',
        'เครื่องคำนวณแปลงค่าเงินสองทิศทาง (ต้องการซื้อ / ต้องการขาย)',
        'ระบบจองและล็อกเรทล่วงหน้า (Lock Rate) พร้อมโมดอลฟอร์มระบุสาขาและเบอร์ติดต่อ',
        'ระบบแจ้งเตือนเงื่อนไขธุรกรรมและสถานะเวลาทำการของสาขา',
        'ปุ่มติดต่อด่วนผ่าน LINE Official Account เพิ่มอัตราการปิดการจอง'
      ],
      en: [
        'Real-time foreign exchange rate ticker with buy/sell spreads',
        'Bi-directional currency converter (Buy Currency vs Sell Currency)',
        'Online Rate-Lock reservation system with branch pickup scheduling',
        'Business operating hours and transaction legal terms validation',
        'Direct LINE Official integration for instant customer service'
      ]
    }
  },
  {
    id: 'lottoshop',
    category: 'ecommerce',
    company: 'E-Commerce Marketplace',
    duration: 'Production System',
    title: {
      th: 'ตลาดสลากไทย (LottoShop Digital Marketplace)',
      en: 'Thai Lottery Digital Marketplace'
    },
    shortDesc: {
      th: 'มาร์เก็ตเพลสสลากออนไลน์ ระบบค้นหาเลข 6 หลัก กรองเลขชุด และสรุปคำสั่งซื้อตะกร้าสินค้า',
      en: 'Digital lottery marketplace with 6-digit number search, bundle filter, and multi-vendor checkout.'
    },
    fullDesc: {
      th: 'แพลตฟอร์มตลาดสลากออนไลน์สำหรับผู้ค้าและผู้ซื้อ ค้นหาหมายเลข 6 หลักแบบระบุตำแหน่ง กรองสลากใบเดี่ยว สลากชุด (2-10 ใบ) ระบบนับถอยหลังวันออกผลสลาก ตะกร้าสินค้าสรุปยอดคำสั่งซื้อแยกตามร้านค้า และหน้าโปรไฟล์บริหารจัดการร้านค้าตัวแทน',
      en: 'Digital lottery marketplace connecting sellers and buyers. Includes digit-by-digit matching search, bundle filtering (single to 10-ticket packs), draw date countdown clock, multi-vendor cart aggregator, and merchant profile dashboard.'
    },
    tags: ['Marketplace', 'Full-Stack', 'Search Algorithm', 'Cart Checkout', 'Countdown Timer', 'Merchant Portal'],
    images: [
      './Portfolio/lottoshop/1.png',
      './Portfolio/lottoshop/2.png',
      './Portfolio/lottoshop/3.png',
      './Portfolio/lottoshop/4.png',
      './Portfolio/lottoshop/5.png',
      './Portfolio/lottoshop/6.png'
    ],
    features: {
      th: [
        'ระบบค้นหาเลขสลาก 6 หลักแบบอินเทอร์แอคทีฟ รองรับการสืบค้นเลขท้ายและเลขหน้า',
        'ตัวกรองประเภทสลาก: หวยชุด, หวยแถว, หวยเล่ม, หวยก้อน',
        'ระบบนับถอยหลังงวดสลาก (Draw Countdown) แสดงเวลาคงเหลือแบบนาทีต่อนาที',
        'ระบบตะกร้าสินค้า สรุปยอดรวมแยกตามร้านค้าตัวแทนอย่างโปร่งใส',
        'แดชบอร์ดผู้ค้า: จัดการสต็อกสลาก ดูยอดขาย และตั้งค่าข้อมูลร้านค้า'
      ],
      en: [
        'Interactive 6-digit slot search with flexible prefix/suffix lookup',
        'Lottery bundle filtering: Single tickets, small packs, wholesale bundles',
        'Real-time draw countdown timer tracking time remaining for ticket sales',
        'Transparent multi-merchant shopping cart and checkout invoice summary',
        'Merchant portal: Manage active ticket listings, sales records, and store profiles'
      ]
    }
  },
  {
    id: 'imagehubs',
    category: 'agency',
    company: 'IMAGESHUBS Co., Ltd.',
    duration: '1 ปี',
    title: {
      th: 'Images Hubs Marketing Agency & Digital Portal',
      en: 'Images Hubs Marketing Agency & Digital Portal'
    },
    shortDesc: {
      th: 'เว็บไซต์เอเจนซีการตลาดออนไลน์ในเชียงใหม่ นำเสนอบริการดูแลสื่อ โฆษณา และผลงานลูกค้ายอดนิยม',
      en: 'Digital marketing agency portal in Chiang Mai showcasing creative branding, advertising, and case studies.'
    },
    fullDesc: {
      th: 'เว็บไซต์ทางการของทีมการตลาดออนไลน์ Images Hubs เชียงใหม่ ออกแบบเพื่อสร้างความน่าเชื่อถือและการแปลงเป็นลูกค้า (Conversion) นำเสนอบริการดูแล Facebook & IG, ทำปก Cover Page, ทำแบนเนอร์โพสต์โฆษณา และแบบฟอร์มติดต่อขอคำปรึกษาด่วน พร้อมการปรับแต่ง SEO เชิงลึก',
      en: 'Official web presence for Images Hubs marketing agency. Crafted with high-impact visual aesthetics to maximize conversion rates. Features structured service tiers (Social media management, graphic banners, cover design) and customer consultation touchpoints.'
    },
    tags: ['Web Agency', 'WordPress', 'SEO Optimization', 'Conversion UX', 'Landing Page', 'Social Ads'],
    images: [
      './Portfolio/imagehubs/1.png',
      './Portfolio/imagehubs/2.png',
      './Portfolio/imagehubs/3.png',
      './Portfolio/imagehubs/4.png',
      './Portfolio/imagehubs/5.png'
    ],
    features: {
      th: [
        'ส่วน Hero Section โดดเด่นพร้อมสถิติความนิยม (1,000+ ความนิยมของลูกค้า)',
        'ส่วนจัดแสดงบริการ: ออกแบบ Cover Page, ดูแลแฟนเพจ Facebook & IG, ทำ Banner โฆษณา',
        'ระบบนำเสนอสิทธิประโยชน์ที่ลูกค้าจะได้รับอย่างเป็นระบบ',
        'ปุ่มติดต่อด่วนผ่านระบบแชท Messenger และแบบฟอร์มส่งข้อมูล',
        'การปรับแต่ง SEO เชิงลึกและความเร็วหน้าเว็บเพื่ออันดับการค้นหาที่ดีขึ้น'
      ],
      en: [
        'Striking Hero section with social proof counters (1,000+ customer rating)',
        'Modular service showcase: Brand cover art, Facebook/IG growth, ad banners',
        'Value proposition breakdowns answering client expectations transparently',
        'Instant Messenger chat CTA integration and lead capture forms',
        'Advanced on-page SEO tuning and core web vitals speed optimization'
      ]
    }
  }
];

// Translations dictionary for bilingual switcher
const TRANSLATIONS = {
  th: {
    navAbout: 'เกี่ยวกับฉัน',
    navExp: 'ประสบการณ์ทำงาน',
    navEdu: 'การศึกษา',
    navSkills: 'ทักษะ & เทคโนโลยี',
    navProjects: 'ผลงาน Portfolio',
    navContact: 'ติดต่อ',
    heroBadge: 'เปิดรับโอกาสงานทันที',
    heroTitle: 'ณัฏฐนนท์ ศรสวรรค์',
    heroNickname: '(นนท์)',
    heroRole: 'FULL-STACK DEVELOPER',
    heroDesc: 'Web & Software Developer ประสบการณ์เกือบ 4 ปี เชี่ยวชาญการพัฒนาระบบธุรกิจครบวงจร ทั้ง ERP, CRM, POS หลายสาขา, ระบบจอง (Booking) และ E-commerce พร้อมทักษะด้าน Web Scraping, Google Merchant และงาน WordPress เชิงลึกควบคู่กับการทำ SEO เน้นสร้างระบบที่เสถียรและแก้ปัญหาธุรกิจได้จริง',
    btnProjects: 'ดูผลงานระบบจริง (Portfolio)',
    btnContact: 'ติดต่อร่วมงาน',
    btnCopyEmail: 'คัดลอกอีเมล',
    statExpVal: 'เกือบ 4 ปี',
    statExpLabel: 'ประสบการณ์พัฒนาซอฟต์แวร์',
    statGpaVal: '3.61',
    statGpaLabel: 'GPA เกียรตินิยม มทร.ล้านนา',
    statCoreVal: 'ERP & FinTech',
    statCoreLabel: 'ระบบโปรดักชันระดับธุรกิจ',
    aboutTag: 'About Me',
    aboutTitle: 'ประวัติและข้อมูลส่วนตัว',
    infoName: 'ชื่อ-นามสกุล',
    infoNickname: 'ชื่อเล่น',
    infoAge: 'อายุ',
    infoGender: 'เพศ',
    infoDegree: 'การศึกษา',
    infoGpa: 'เกรดเฉลี่ยสะสม',
    infoPhone: 'เบอร์โทรศัพท์',
    infoEmail: 'อีเมล',
    infoGithub: 'GitHub Profile',
    infoLocation: 'สถานที่ทำงาน',
    infoLocationVal: 'เชียงใหม่ / พร้อมทำงาน On-site และ Remote',
    expTag: 'Work Experience',
    expTitle: 'ประสบการณ์ทำงานจริง',
    expSubtitle: 'ประวัติการทำงานในฐานะ Web & Software Developer ในองค์กรต่างๆ',
    eduTag: 'Education',
    eduTitle: 'ประวัติการศึกษา',
    skillTag: 'Programmer Skills',
    skillTitle: 'ทักษะและความสามารถทางเทคนิค',
    skillSubtitle: 'เทคโนโลยีและเครื่องมือที่เชี่ยวชาญตามประวัติการทำงานจริง',
    projectTag: 'Portfolio Showcase',
    projectTitle: 'ผลงานระบบจริงแบบละเอียด (Portfolio)',
    projectSubtitle: 'นำเสนอภาพตัวอย่างสกรีนช็อตทุกหน้า พร้อมรายละเอียดการออกแบบและฟังก์ชันการทำงาน',
    filterAll: 'ทั้งหมด (6 โปรเจกต์)',
    filterErp: 'ERP & Enterprise',
    filterHr: 'HR & Internal Tools',
    filterEcommerce: 'E-Commerce & Store',
    filterFintech: 'FinTech & Tools',
    filterAgency: 'Web Agency',
    contactTag: 'Get In Touch',
    contactTitle: 'พร้อมร่วมงานกับทีมของคุณ',
    contactSubtitle: 'เปิดรับโอกาสในตำแหน่ง Full-Stack Developer / Software Engineer',
    formName: 'ชื่อของคุณ',
    formEmail: 'อีเมลติดต่อกลับ',
    formMsg: 'ข้อความหรือรายละเอียดตำแหน่งงาน',
    btnSendMsg: 'ส่งข้อความติดต่อ',
    footerRights: 'สงวนลิขสิทธิ์ ออกแบบและพัฒนาสำหรับสมัครงานตำแหน่ง Full-Stack Developer'
  },
  en: {
    navAbout: 'About Me',
    navExp: 'Experience',
    navEdu: 'Education',
    navSkills: 'Skills & Stack',
    navProjects: 'Portfolio',
    navContact: 'Contact',
    heroBadge: 'Available for Immediate Employment',
    heroTitle: 'Natthanon Sonsawan',
    heroNickname: '(Non)',
    heroRole: 'FULL-STACK DEVELOPER',
    heroDesc: 'Web & Software Developer with nearly 4 years of experience specializing in full-cycle enterprise business systems: ERP, CRM, multi-branch POS, Booking platforms, and E-commerce. Experienced in Web Scraping, Google Merchant, and advanced WordPress with SEO, committed to building robust solutions that solve real business challenges.',
    btnProjects: 'Explore Production Portfolio',
    btnContact: 'Get In Touch',
    btnCopyEmail: 'Copy Email',
    statExpVal: '~4 Years',
    statExpLabel: 'Software Engineering Experience',
    statGpaVal: '3.61',
    statGpaLabel: 'GPA Honors (RMUTL)',
    statCoreVal: 'ERP & FinTech',
    statCoreLabel: 'Business-Grade Platforms',
    aboutTag: 'About Me',
    aboutTitle: 'Personal Profile & Bio',
    infoName: 'Full Name',
    infoNickname: 'Nickname',
    infoAge: 'Age',
    infoGender: 'Gender',
    infoDegree: 'Degree',
    infoGpa: 'GPA',
    infoPhone: 'Phone',
    infoEmail: 'Email',
    infoGithub: 'GitHub Profile',
    infoLocation: 'Location',
    infoLocationVal: 'Chiang Mai, Thailand / Available On-site & Remote',
    expTag: 'Work Experience',
    expTitle: 'Work & Professional Experience',
    expSubtitle: 'Hands-on track record as a Web & Software Developer across diverse industries',
    eduTag: 'Education',
    eduTitle: 'Educational Background',
    skillTag: 'Programmer Skills',
    skillTitle: 'Technical Competencies & Skills',
    skillSubtitle: 'Technologies, stacks, and tools applied in real-world software production',
    projectTag: 'Portfolio Showcase',
    projectTitle: 'Production Systems Portfolio',
    projectSubtitle: 'Full-view gallery with comprehensive screenshots, architecture, and feature sets',
    filterAll: 'All Projects (6)',
    filterErp: 'ERP & Enterprise',
    filterHr: 'HR & Internal Tools',
    filterEcommerce: 'E-Commerce & Store',
    filterFintech: 'FinTech & Tools',
    filterAgency: 'Web Agency',
    contactTag: 'Get In Touch',
    contactTitle: "Let's Build Great Products Together",
    contactSubtitle: 'Open for Full-Stack Developer and Software Engineer opportunities',
    formName: 'Your Name',
    formEmail: 'Your Contact Email',
    formMsg: 'Message or Opportunity Details',
    btnSendMsg: 'Send Inquiry',
    footerRights: 'All rights reserved. Designed & built for Full-Stack Developer job application.'
  }
};

// Current State
let currentLang = localStorage.getItem('natthanon_lang') || 'th';
let currentTheme = localStorage.getItem('natthanon_theme') || 'dark';
let activeModalProject = null;
let activeModalImgIndex = 0;

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initI18n();
  renderFullProjects('all');
  initLightboxModal();
  initScrollSpy();
  initContactForm();
});

/* ==========================================================================
   Theme Management
   ========================================================================== */
function initTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeButton();

  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', currentTheme);
      localStorage.setItem('natthanon_theme', currentTheme);
      updateThemeButton();
    });
  }
}

function updateThemeButton() {
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';
    themeBtn.setAttribute('title', currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
  }
}

/* ==========================================================================
   Internationalization (TH / EN)
   ========================================================================== */
function initI18n() {
  applyTranslations();

  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'th' ? 'en' : 'th';
      localStorage.setItem('natthanon_lang', currentLang);
      applyTranslations();
      renderFullProjects(getCurrentFilter());
      if (activeModalProject) {
        updateModalContent();
      }
    });
  }
}

function applyTranslations() {
  const dict = TRANSLATIONS[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) {
    langBtn.textContent = currentLang === 'th' ? 'EN' : 'TH';
    langBtn.setAttribute('title', currentLang === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย');
  }
}

/* ==========================================================================
   Full-View Projects Rendering with Inline Gallery & Details
   ========================================================================== */
function renderFullProjects(filter = 'all') {
  const container = document.getElementById('projectsFullContainer');
  if (!container) return;

  const filtered = filter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === filter);

  container.innerHTML = '';

  filtered.forEach(project => {
    const card = document.createElement('article');
    card.className = 'project-full-card';
    card.id = `project-${project.id}`;

    const title = project.title[currentLang];
    const fullDesc = project.fullDesc[currentLang];
    const features = project.features[currentLang];

    card.innerHTML = `
      <div class="project-full-header">
        <div class="project-header-left">
          <div class="project-badge-row">
            <span class="badge badge-cyan">${getCategoryLabel(project.category)}</span>
            <span class="badge badge-emerald">🏢 ${project.company}</span>
            <span class="badge">⏱️ ${project.duration}</span>
          </div>
          <h3 class="project-full-title">${title}</h3>
        </div>
        <div class="project-header-right">
          <button class="btn btn-outline btn-sm" onclick="openProjectModal('${project.id}', 0)">
            <span>🔍 ดูภาพขนาดใหญ่แบบเต็มจอ</span>
          </button>
        </div>
      </div>

      <div class="project-full-grid">
        <!-- Left: Image Showcase with interactive thumbnails -->
        <div class="project-full-gallery">
          <div class="project-main-display" onclick="openProjectModal('${project.id}', getActiveInlineImgIndex('${project.id}'))">
            <img src="${project.images[0]}" alt="${title}" id="display-${project.id}" class="project-main-img" />
            <div class="project-main-overlay">
              <span class="overlay-btn">🔍 คลิกเพื่อขยายภาพแบบเต็มจอ (Fullscreen)</span>
            </div>
          </div>
          <div class="project-inline-thumbs">
            ${project.images.map((img, idx) => `
              <img src="${img}" 
                   alt="Screenshot ${idx + 1}" 
                   class="inline-thumb ${idx === 0 ? 'active' : ''}" 
                   data-project="${project.id}"
                   data-index="${idx}"
                   onclick="switchInlineDisplay('${project.id}', ${idx})" />
            `).join('')}
          </div>
        </div>

        <!-- Right: Project Description & Features -->
        <div class="project-full-info">
          <div class="project-desc-block">
            <h4>${currentLang === 'th' ? '📌 ภาพรวมของระบบ' : '📌 System Overview'}</h4>
            <p>${fullDesc}</p>
          </div>

          <div class="project-features-block">
            <h4>${currentLang === 'th' ? '⚡ ฟังก์ชันหลักที่พัฒนาขึ้น (Key Features)' : '⚡ Key Implemented Features'}</h4>
            <ul class="features-checklist">
              ${features.map(f => `
                <li>
                  <span class="check-icon">✓</span>
                  <span>${f}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="project-stack-block">
            <h4>${currentLang === 'th' ? '🛠️ เทคโนโลยีที่ใช้ (Tech Stack)' : '🛠️ Technologies & Stack'}</h4>
            <div class="project-tags">
              ${project.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function switchInlineDisplay(projectId, index) {
  const displayImg = document.getElementById(`display-${projectId}`);
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (displayImg && project && project.images[index]) {
    displayImg.src = project.images[index];
    displayImg.setAttribute('data-active-index', index);

    // Update active thumb
    const thumbs = document.querySelectorAll(`.inline-thumb[data-project="${projectId}"]`);
    thumbs.forEach((th, i) => {
      th.classList.toggle('active', i === index);
    });
  }
}

function getActiveInlineImgIndex(projectId) {
  const displayImg = document.getElementById(`display-${projectId}`);
  if (displayImg && displayImg.getAttribute('data-active-index')) {
    return parseInt(displayImg.getAttribute('data-active-index'), 10) || 0;
  }
  return 0;
}

window.switchInlineDisplay = switchInlineDisplay;
window.getActiveInlineImgIndex = getActiveInlineImgIndex;

function getCategoryLabel(cat) {
  const labels = {
    erp: currentLang === 'th' ? 'ERP Platform' : 'ERP Platform',
    hr: currentLang === 'th' ? 'HR Management' : 'HR Management',
    ecommerce: currentLang === 'th' ? 'E-Commerce' : 'E-Commerce',
    fintech: currentLang === 'th' ? 'FinTech' : 'FinTech',
    agency: currentLang === 'th' ? 'Marketing Agency' : 'Marketing Agency'
  };
  return labels[cat] || cat.toUpperCase();
}

function getCurrentFilter() {
  const activeBtn = document.querySelector('.filter-btn.active');
  return activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
}

// Attach Filter Click Listeners
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    renderFullProjects(filter);
  });
});

/* ==========================================================================
   Interactive Lightbox Modal
   ========================================================================== */
function initLightboxModal() {
  const overlay = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const prevBtn = document.getElementById('modalPrevBtn');
  const nextBtn = document.getElementById('modalNextBtn');

  if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeProjectModal();
    });
  }

  if (prevBtn) prevBtn.addEventListener('click', prevModalImage);
  if (nextBtn) nextBtn.addEventListener('click', nextModalImage);

  document.addEventListener('keydown', (e) => {
    if (!overlay || !overlay.classList.contains('open')) return;
    if (e.key === 'Escape') closeProjectModal();
    if (e.key === 'ArrowLeft') prevModalImage();
    if (e.key === 'ArrowRight') nextModalImage();
  });
}

function openProjectModal(projectId, imgIndex = 0) {
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;

  activeModalProject = project;
  activeModalImgIndex = imgIndex;

  updateModalContent();

  const overlay = document.getElementById('projectModal');
  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeProjectModal() {
  const overlay = document.getElementById('projectModal');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  activeModalProject = null;
}

function updateModalContent() {
  if (!activeModalProject) return;

  const project = activeModalProject;
  const modalTitle = document.getElementById('modalTitle');
  const mainImg = document.getElementById('modalMainImg');
  const thumbsContainer = document.getElementById('modalThumbs');
  const detailsContainer = document.getElementById('modalDetails');

  if (modalTitle) {
    modalTitle.textContent = project.title[currentLang];
  }

  if (mainImg) {
    mainImg.src = project.images[activeModalImgIndex];
    mainImg.alt = `${project.title[currentLang]} - Screenshot ${activeModalImgIndex + 1}`;
  }

  // Thumbnails
  if (thumbsContainer) {
    thumbsContainer.innerHTML = project.images.map((img, idx) => `
      <img src="${img}" 
           alt="Thumbnail ${idx + 1}" 
           class="modal-thumb ${idx === activeModalImgIndex ? 'active' : ''}" 
           onclick="setModalImageIndex(${idx})" />
    `).join('');
  }

  // Details
  if (detailsContainer) {
    const features = project.features[currentLang];
    detailsContainer.innerHTML = `
      <h4>${currentLang === 'th' ? 'ภาพรวมระบบ & สถาปัตยกรรม' : 'System Overview & Architecture'}</h4>
      <p>${project.fullDesc[currentLang]}</p>
      
      <h4>${currentLang === 'th' ? 'ฟังก์ชันการทำงานหลัก (Key Features)' : 'Key Production Features'}</h4>
      <div class="modal-features-list">
        ${features.map(f => `
          <div class="modal-feature-item">
            <span>✓</span>
            <div>${f}</div>
          </div>
        `).join('')}
      </div>

      <div style="margin-top: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
        ${project.tags.map(t => `<span class="badge">${t}</span>`).join('')}
      </div>
    `;
  }
}

function setModalImageIndex(idx) {
  if (!activeModalProject) return;
  activeModalImgIndex = idx;
  const mainImg = document.getElementById('modalMainImg');
  if (mainImg) {
    mainImg.src = activeModalProject.images[activeModalImgIndex];
  }
  document.querySelectorAll('.modal-thumb').forEach((thumb, i) => {
    thumb.classList.toggle('active', i === activeModalImgIndex);
  });
}

function prevModalImage() {
  if (!activeModalProject) return;
  activeModalImgIndex = (activeModalImgIndex - 1 + activeModalProject.images.length) % activeModalProject.images.length;
  setModalImageIndex(activeModalImgIndex);
}

function nextModalImage() {
  if (!activeModalProject) return;
  activeModalImgIndex = (activeModalImgIndex + 1) % activeModalProject.images.length;
  setModalImageIndex(activeModalImgIndex);
}

window.openProjectModal = openProjectModal;
window.setModalImageIndex = setModalImageIndex;

/* ==========================================================================
   Copy to Clipboard & Toast Notifications
   ========================================================================== */
function copyToClipboard(text, message) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(message);
    }).catch(() => {
      fallbackCopy(text, message);
    });
  } else {
    fallbackCopy(text, message);
  }
}

function fallbackCopy(text, message) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(message);
  } catch (err) {
    showToast("Copy failed, please copy manually: " + text);
  }
  document.body.removeChild(textArea);
}

function showToast(message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>📋</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

window.copyEmail = function() {
  const msg = currentLang === 'th' ? 'คัดลอกอีเมลเรียบร้อยแล้ว!' : 'Email copied to clipboard!';
  copyToClipboard('nonin31313@gmail.com', msg);
};

window.copyPhone = function() {
  const msg = currentLang === 'th' ? 'คัดลอกเบอร์โทรศัพท์เรียบร้อยแล้ว!' : 'Phone number copied to clipboard!';
  copyToClipboard('0910798390', msg);
};

/* ==========================================================================
   Scroll Spy & Navbar Scroll
   ========================================================================== */
function initScrollSpy() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    let currentSectionId = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }
}

/* ==========================================================================
   Contact Form Handling
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const msg = document.getElementById('contactMessage').value;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Sender: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`);

    window.location.href = `mailto:nonin31313@gmail.com?subject=${subject}&body=${body}`;

    const toastMsg = currentLang === 'th' ? 'กำลังเปิดโปรแกรมส่งอีเมล...' : 'Opening mail client...';
    showToast(toastMsg);
  });
}
