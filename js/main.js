/**
 * NATTHANON SORNSUWAN - FULL-STACK DEVELOPER
 * Clean Engineering Portfolio Engine
 */

const PROJECTS_DATA = [
  {
    id: 'erp',
    category: 'erp',
    company: 'D DOT FARM / iToolmart',
    duration: '2 ปี 3 เดือน',
    role: 'Full-Stack Developer',
    title: {
      th: 'iToolMart Enterprise ERP & Multi-Branch Inventory',
      en: 'iToolMart Enterprise ERP & Multi-Branch Inventory'
    },
    shortDesc: {
      th: 'ระบบบริหารทรัพยากรองค์กร (ERP) ดูแลยอดขาย คลังสินค้าหลายสาขา จัดซื้อ PO และวิเคราะห์กำไรขาดทุน',
      en: 'Enterprise ERP managing multi-branch inventory, procurement PO workflows, sales audit, and profit margins.'
    },
    problem: {
      th: 'ธุรกิจค้าปลีก-ค้าส่งมีสินค้าหลายพันรายการและหลายสาขา จำเป็นต้องมีระบบรวมศูนย์ที่ตัดสต็อกแม่นยำ แจ้งเตือนสินค้าใกล้หมด และคำนวณต้นทุน-กำไรได้ทันทีโดยไม่ต้องรอสรุปสิ้นเดือน',
      en: 'Wholesale & retail operations with thousands of SKUs required centralized inventory sync, threshold stock alerts, and instant profit-loss computation.'
    },
    solution: {
      th: 'ออกแบบฐานข้อมูล MySQL เชื่อมโยงทุกสาขา พัฒนาแดชบอร์ดกราฟ Highcharts แสดงยอดขายและกำไรแบบเรียลไทม์ พร้อมระบบออกเอกสาร PO และ Export ข้อมูลเป็น Excel/PDF',
      en: 'Architected relational MySQL schema, built responsive Highcharts dashboards for real-time financials, and implemented automated PO generation with Excel/PDF export.'
    },
    tags: ['PHP', 'MySQL', 'Node.js', 'ERP Architecture', 'Highcharts', 'Excel/PDF Export', 'RBAC'],
    imageTitles: {
      th: ['แดชบอร์ดภาพรวมยอดขาย', 'คลังสินค้า & สต็อก', 'ระบบจัดซื้อ (PO)', 'บันทึกยอดขายรายวัน', 'สถิติการขายแยกสาขา'],
      en: ['Financial Dashboard', 'Stock & Inventory', 'Procurement (PO)', 'Daily Sales Ledger', 'Branch Analytics']
    },
    images: [
      './Portfolio/erp/1.png',
      './Portfolio/erp/2.png',
      './Portfolio/erp/3.png',
      './Portfolio/erp/4.png',
      './Portfolio/erp/5.png'
    ],
    features: {
      th: [
        'แดชบอร์ดสรุปรายรับ-รายจ่าย ยอดซื้อ และกำไรสุทธิ แสดงกราฟ Highcharts รายเดือน',
        'ระบบบริหารคลังสินค้า ตรวจสอบสินค้าคงเหลือ และแจ้งเตือนเมื่อสต็อกต่ำกว่าเกณฑ์',
        'ระบบสร้างและจัดการใบสั่งซื้อ (PO) กรองตามช่วงวันที่และส่งออกรายงาน Excel ได้ทันที',
        'ระบบบันทึกยอดขายและใบเสร็จ แยกตามพนักงานขาย สาขา และประเภทการชำระเงิน',
        'ระบบกำหนดสิทธิ์การเข้าถึง (Role-Based Access Control) ป้องกันข้อมูลรั่วไหล'
      ],
      en: [
        'Real-time financial dashboard with Highcharts monthly income/expense graphs',
        'Multi-branch inventory tracker with automated low-stock threshold warnings',
        'Procurement purchase order (PO) workflow with date-range filters and Excel export',
        'Sales and receipt audit log categorized by salesperson, branch, and payment method',
        'Granular Role-Based Access Control (RBAC) safeguarding sensitive business data'
      ]
    }
  },
  {
    id: 'hr',
    category: 'hr',
    company: 'D DOT FARM',
    duration: '2 ปี 3 เดือน',
    role: 'Full-Stack Developer',
    title: {
      th: 'Dee.Farm HR Management & Payroll Platform',
      en: 'Dee.Farm HR Management & Payroll Platform'
    },
    shortDesc: {
      th: 'ระบบบริหารงานบุคคล บันทึกเวลาเข้า-ออกงาน อนุมัติวันลา และคำนวณบัญชีเงินเดือน (Payroll)',
      en: 'Human Resource Management system featuring digital attendance, leave workflow, and automated payroll.'
    },
    problem: {
      th: 'การลงเวลาทำงานด้วยกระดาษหรือเครื่องสแกนเดิมคำนวณสถิติการมาสาย วันลาคงเหลือ และเงินเดือนพนักงานได้ล่าช้าและเกิดข้อผิดพลาดง่าย',
      en: 'Manual punch cards and offline attendance tracking caused discrepancies in leave quotas and delayed monthly payroll calculations.'
    },
    solution: {
      th: 'พัฒนาระบบ Web Clock-in/Clock-out บันทึกเวลาออนไลน์พร้อมคำนวณสถิติสาย-ขาด-ลาอัตโนมัติ เชื่อมโยงเข้าสู่ระบบคำนวณเงินเดือน (Payroll) และออกสลิปเงินเดือน',
      en: 'Built web-based clock-in/out attendance tracking, automated leave requests with approval hierarchies, and payroll slip computation.'
    },
    tags: ['Vue.js', 'PHP', 'Node.js', 'MySQL', 'HRM', 'Payroll Engine', 'Calendar Integration'],
    imageTitles: {
      th: ['แดชบอร์ดลงเวลาทำงาน', 'ประวัติพนักงาน & สิทธิ์ลา', 'บัญชีเงินเดือน (Payroll)', 'ระบบจัดการคำขอลา'],
      en: ['Attendance Dashboard', 'Employee Master & Leave', 'Payroll Ledger', 'Leave Request Manager']
    },
    images: [
      './Portfolio/hr/1.png',
      './Portfolio/hr/2.png',
      './Portfolio/hr/3.png',
      './Portfolio/hr/4.png'
    ],
    features: {
      th: [
        'แดชบอร์ดพนักงานส่วนบุคคล: ปุ่มลงเวลาเข้างาน-เลิกงาน และแสดงโควตาวันลาคงเหลือ',
        'ระบบยื่นคำขอลา (ลาป่วย, ลากิจ, ลาพักร้อน) พร้อมระบุเหตุผลและสถานะการอนุมัติ',
        'ระบบบัญชีเงินเดือน (Payroll) แสดงประวัติการจ่ายเงินย้อนหลัง และออกสลิปเงินเดือน',
        'ระบบจัดการประวัติพนักงาน ข้อมูลติดต่อฉุกเฉิน บัญชีธนาคาร และประวัติการศึกษา',
        'ปฏิทินบริษัทแสดงวันหยุดตามประเพณีและกำหนดการสำคัญขององค์กร'
      ],
      en: [
        'Personal employee portal: 1-click clock in/out, remaining quota, tardiness logs',
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
    role: 'Full-Stack Developer',
    title: {
      th: 'iToolMart E-Commerce Platform & Community',
      en: 'iToolMart E-Commerce Platform & Community'
    },
    shortDesc: {
      th: 'เว็บสโตร์ค้าปลีกเครื่องมือช่างและอุปกรณ์อุตสาหกรรม ค้นหาแบรนด์ A-Z คูปองโปรโมชั่น และวิดีโอ TikTok',
      en: 'Industrial tool e-commerce storefront with A-Z brand directory, promotion vouchers, and TikTok video feeds.'
    },
    problem: {
      th: 'สินค้าอุปกรณ์ช่างมีหลายหมวดหมู่และสเปกซับซ้อน ผู้ใช้ค้นหาแบรนด์และอะไหล่ยาก ต้องการระบบแคตตาล็อกที่โหลดไวและเชื่อมต่อโซเชียลมีเดีย',
      en: 'Specialized industrial tools required intuitive navigation for complex technical specs, fast brand filtering, and social proof integration.'
    },
    solution: {
      th: 'พัฒนา Front-End ด้วยสถาปัตยกรรม Component-driven สร้างระบบค้นหาแบรนด์ A-Z แบบทันใจ ระบบคูปองส่วนลด และเชื่อมต่อวิดีโอ TikTok จากหน้าร้านสาขา',
      en: 'Engineered responsive component architecture featuring instant A-Z brand filtering, promo code engine, and regional TikTok video embeds.'
    },
    tags: ['Vue.js', 'PHP', 'Tailwind / CSS', 'E-Commerce', 'TikTok Embed', 'Brand Index A-Z'],
    imageTitles: {
      th: ['หน้าแรก & หมวดหมู่เครื่องมือ', 'บทความรีวิว & วิดีโอ TikTok', 'หน้ารวมแบรนด์ & คูปองส่งฟรี', 'การแสดงผลสินค้า', 'แคตตาล็อกอุปกรณ์'],
      en: ['Storefront & Categories', 'Review Articles & TikTok', 'Brand Index & Coupons', 'Product Showcase', 'Hardware Catalogue']
    },
    images: [
      './Portfolio/itool/1.png',
      './Portfolio/itool/2.png',
      './Portfolio/itool/3.png',
      './Portfolio/itool/4.png',
      './Portfolio/itool/5.png'
    ],
    features: {
      th: [
        'ระบบแคตตาล็อกสินค้าขนาดใหญ่ แยกตามหมวดหมู่อุปกรณ์ช่างและงานอุตสาหกรรม',
        'ดัชนีแบรนด์ A-Z ช่วยให้ลูกค้าค้นหาและเข้าถึงแบรนด์ที่ต้องการได้อย่างรวดเร็ว',
        'ระบบคูปองส่งฟรีและโปรโมชั่นส่วนลดตามเงื่อนไขยอดซื้อ',
        'เชื่อมต่อฟีดวิดีโอสั้น TikTok จากสาขา เพิ่มความน่าเชื่อถือและการตัดสินใจซื้อ',
        'ระบบบทความรีวิวเครื่องมือช่าง ช่วยผลักดัน Organic Search และ SEO'
      ],
      en: [
        'Comprehensive product catalogue categorized by tool type and industrial application',
        'Alphabetical (A-Z) brand directory with instant multi-filter browsing',
        'Tiered promotion coupon engine (Free shipping, minimum spend discounts)',
        'Live social commerce integration embedding regional TikTok videos',
        'Integrated engineering blog and knowledge base boosting organic SEO rankings'
      ]
    }
  },
  {
    id: 'superexchange',
    category: 'fintech',
    company: 'FinTech Solution / Central Chiang Rai',
    duration: 'Production System',
    role: 'Full-Stack Developer',
    title: {
      th: 'Super Exchange Chiang Rai — Live FX & Rate Locking',
      en: 'Super Exchange Chiang Rai — Live FX & Rate Locking'
    },
    shortDesc: {
      th: 'แพลตฟอร์มแลกเปลี่ยนเงินตราต่างประเทศ บอร์ดเรทเรียลไทม์ และระบบจองล็อกเรทออนไลน์ล่วงหน้า',
      en: 'Foreign currency exchange platform featuring real-time FX rate boards and rate-locking reservation.'
    },
    problem: {
      th: 'อัตราแลกเปลี่ยนเงินตราต่างประเทศมีความผันผวนตลอดวัน ลูกค้าต้องการทราบเรทที่แน่นอนก่อนเดินทางมาที่สาขา และต้องการล็อกเรทไว้ล่วงหน้า',
      en: 'Fluctuating FX rates created uncertainty for travelers. Customers needed real-time rate verification and guaranteed rate locking before branch visits.'
    },
    solution: {
      th: 'พัฒนากระดานอัตราแลกเปลี่ยนแบบ Real-Time แสดงค่าซื้อ-ขาย เครื่องคำนวณแปลงสกุลเงินสองทาง และระบบจองล็อกเรทล่วงหน้าพร้อมเชื่อมต่อ LINE Official',
      en: 'Built live FX ticker boards, bi-directional currency calculator, and online reservation booking with rate-locking and LINE API integration.'
    },
    tags: ['JavaScript', 'PHP', 'FinTech', 'Real-Time FX', 'Rate Lock Booking', 'LINE API'],
    imageTitles: {
      th: ['กระดานเรทเงินตราต่างประเทศ', 'โมดอลคำนวณ & ฟอร์มจองล็อกเรท', 'ตารางเรทสกุลเงินหลัก', 'ข้อมูลสาขาเซ็นทรัล เชียงราย', 'รายละเอียดเงื่อนไขการจอง'],
      en: ['Live Currency Rate Board', 'Rate Calculator & Booking', 'Major Currencies Table', 'Branch Location & Hours', 'Booking Terms & Validation']
    },
    images: [
      './Portfolio/superexchangechiangrai/1.png',
      './Portfolio/superexchangechiangrai/2.png',
      './Portfolio/superexchangechiangrai/3.png',
      './Portfolio/superexchangechiangrai/4.png',
      './Portfolio/superexchangechiangrai/5.png'
    ],
    features: {
      th: [
        'กระดานแสดงอัตราแลกเปลี่ยนเงินตราสกุลหลักทั่วโลก (USD, EUR, JPY, GBP, CNY, SGD ฯลฯ)',
        'เครื่องคำนวณแปลงค่าเงินสองทิศทาง (ต้องการซื้อ / ต้องการขาย) แบบคำนวณทันที',
        'ระบบเปิดจองล็อกเรทล่วงหน้า (Lock Rate) พร้อมระบุสาขาและเบอร์ติดต่อ',
        'ระบบตรวจสอบเงื่อนไขเวลาทำการของสาขาและแจ้งเตือนสถานะการเปิดรับจอง',
        'ปุ่มติดต่อด่วนผ่าน LINE Official Account เพื่อยืนยันคิวรับเงิน'
      ],
      en: [
        'Real-time foreign exchange rate ticker with accurate buy/sell spread tables',
        'Instant bi-directional currency converter (Buy Currency vs Sell Currency)',
        'Online Rate-Lock reservation system with branch pickup scheduling',
        'Operating hours validation and automated booking availability checks',
        'Direct LINE Official integration for instant confirmation and support'
      ]
    }
  },
  {
    id: 'lottoshop',
    category: 'ecommerce',
    company: 'E-Commerce Marketplace',
    duration: 'Production System',
    role: 'Full-Stack Developer',
    title: {
      th: 'ตลาดสลากไทย (LottoShop Digital Marketplace)',
      en: 'Thai Lottery Digital Marketplace'
    },
    shortDesc: {
      th: 'มาร์เก็ตเพลสสลากออนไลน์ ระบบค้นหาเลข 6 หลัก กรองเลขชุด และสรุปคำสั่งซื้อตะกร้าสินค้า',
      en: 'Digital marketplace with 6-digit number matching search, bundle filter, and merchant management.'
    },
    problem: {
      th: 'ลูกค้าต้องการค้นหาเลขสลากที่ตรงใจทั้ง 6 หลักหรือเฉพาะเลขท้าย/เลขหน้า รวมถึงเลือกซื้อแบบสลากชุดและสลากเดี่ยวจากตัวแทนจำหน่ายหลายราย',
      en: 'Customers needed flexible search options across 6-digit combinations and multi-ticket bundle filters from distributed sellers.'
    },
    solution: {
      th: 'พัฒนา Algorithm ค้นหาหมายเลขสลากแบบแม่นยำ พร้อมตัวกรองประเภทสลาก ตะกร้าสินค้ารวมหลายร้านค้า ระบบนับถอยหลังงวดสลาก และแดชบอร์ดตัวแทน',
      en: 'Engineered high-performance number lookup algorithm, multi-vendor cart checkout, draw countdown timer, and seller management portal.'
    },
    tags: ['Full-Stack', 'Search Algorithm', 'Marketplace', 'Shopping Cart', 'Vendor Portal', 'MySQL'],
    imageTitles: {
      th: ['หน้าแรก & ค้นหาเลข 6 หลัก', 'ตะกร้าสินค้า & สรุปยอดสั่งซื้อ', 'โปรไฟล์ร้านค้า & สถิติ', 'รายการสั่งซื้อของฉัน', 'ตัวกรองสลากชุด/สลากเดี่ยว', 'แดชบอร์ดตัวแทนจำหน่าย'],
      en: ['6-Digit Search & Listings', 'Cart & Order Summary', 'Merchant Profile & Stats', 'Order History', 'Bundle Type Filter', 'Vendor Dashboard']
    },
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
        'ระบบค้นหาเลขสลาก 6 หลัก รองรับทั้งค้นหาเลขท้าย เลขหน้า และค้นหาแบบเจาะจง',
        'ตัวกรองสลาก: หวยชุด (2-10 ใบ), หวยแถว, หวยเล่ม พร้อมระบุราคารวม',
        'ระบบนับถอยหลังวันออกสลาก (Draw Countdown) แสดงเวลาที่เหลือในการสั่งซื้อ',
        'ระบบตะกร้าสินค้า สรุปยอดรวมแยกตามร้านค้าตัวแทนอย่างโปร่งใส',
        'แดชบอร์ดผู้ขาย: จัดการรายการสลาก ตรวจสอบคำสั่งซื้อ และสถานะการชำระเงิน'
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
    role: 'Programmer / Web Developer',
    title: {
      th: 'Images Hubs Marketing Agency & Digital Portal',
      en: 'Images Hubs Marketing Agency & Digital Portal'
    },
    shortDesc: {
      th: 'เว็บไซต์เอเจนซีการตลาดออนไลน์ในเชียงใหม่ นำเสนอบริการดูแลสื่อ โฆษณา และผลงานลูกค้ายอดนิยม',
      en: 'Marketing agency web portal in Chiang Mai showcasing creative branding, advertising, and case studies.'
    },
    problem: {
      th: 'เอเจนซีต้องการเว็บไซต์ที่สื่อสารบริการการตลาดออนไลน์อย่างชัดเจน มีความน่าเชื่อถือสูง และกระตุ้นให้ลูกค้าติดต่อขอรับคำปรึกษาได้อย่างรวดเร็ว',
      en: 'Agency required a credible online identity clearly communicating marketing packages and driving direct client consultations.'
    },
    solution: {
      th: 'ออกแบบและพัฒนาหน้า Landing Page สไตล์โมเดิร์น แยกแพ็กเกจบริการเป็นสัดส่วน ปรับแต่ง Performance ให้โหลดเร็ว และทำ SEO ให้ติดหน้าแรก Google',
      en: 'Crafted high-converting landing page, structured transparent service tiers, optimized web vitals speed, and implemented advanced on-page SEO.'
    },
    tags: ['WordPress', 'SEO Optimization', 'Web Design', 'Landing Page', 'Performance', 'Social Media'],
    imageTitles: {
      th: ['หน้าแรก Hero Section', 'บริการออกแบบ Cover Page', 'บริการดูแล Facebook & IG', 'สิ่งที่ลูกค้าจะได้รับ', 'บริการแบนเนอร์โฆษณา'],
      en: ['Hero Section & Showcase', 'Cover Art Design', 'Social Media Management', 'Client Deliverables', 'Ad Banners & Campaigns']
    },
    images: [
      './Portfolio/imagehubs/1.png',
      './Portfolio/imagehubs/2.png',
      './Portfolio/imagehubs/3.png',
      './Portfolio/imagehubs/4.png',
      './Portfolio/imagehubs/5.png'
    ],
    features: {
      th: [
        'Hero Section ดึงดูดสายตาพร้อม Social Proof ความพึงพอใจของลูกค้ากว่า 1,000 ราย',
        'โครงสร้างนำเสนอบริการ: ออกแบบ Cover Page, ดูแลเพจ Facebook/IG, ทำ Banner โฆษณา',
        'ระบบแสดงความคุ้มค่าและสิ่งที่ลูกค้าจะได้รับอย่างชัดเจน',
        'ช่องทางติดต่อด่วนผ่าน Facebook Messenger และแบบฟอร์มขอใบเสนอราคา',
        'โครงสร้างโค้ดตามหลัก SEO และความเร็วหน้าเว็บที่เหมาะสม'
      ],
      en: [
        'Striking Hero section with social proof counters (1,000+ satisfied clients)',
        'Modular service showcase: Brand cover art, Facebook/IG growth, ad banners',
        'Clear value proposition breakdown addressing client expectations',
        'Instant Messenger chat CTA integration and quotation lead forms',
        'Clean semantic SEO architecture with optimized Core Web Vitals speed'
      ]
    }
  }
];

// Bilingual Translations dictionary
const TRANSLATIONS = {
  th: {
    navAbout: 'เกี่ยวกับฉัน',
    navExp: 'ประสบการณ์ทำงาน',
    navEdu: 'การศึกษา',
    navSkills: 'ทักษะ',
    navProjects: 'ผลงาน Portfolio',
    navContact: 'ติดต่อ',
    heroBadge: 'เปิดรับโอกาสงานทันที',
    heroTitle: 'ณัฏฐนนท์ ศรสุวรรณ',
    heroNickname: '(นนท์)',
    heroRole: 'FULL-STACK DEVELOPER',
    heroDesc: 'Web & Software Developer ประสบการณ์เกือบ 4 ปี เชี่ยวชาญการพัฒนาระบบธุรกิจครบวงจร ทั้ง ERP, CRM, POS หลายสาขา, ระบบจอง (Booking) และ E-commerce พร้อมทักษะด้าน Web Scraping, Google Merchant และงาน WordPress เชิงลึกควบคู่กับการทำ SEO เน้นสร้างระบบที่เสถียรและแก้ปัญหาธุรกิจได้จริง',
    btnProjects: 'ดูผลงานระบบจริง (Portfolio)',
    btnContact: 'ติดต่อร่วมงาน',
    btnCopyEmail: 'คัดลอกอีเมล',
    statExpVal: 'เกือบ 4 ปี',
    statExpLabel: 'ประสบการณ์ทำงานจริง',
    statGpaVal: '3.61',
    statGpaLabel: 'GPA เกียรตินิยม มทร.ล้านนา',
    statCoreVal: 'ERP & FinTech',
    statCoreLabel: 'ระบบระดับองค์กร & ธุรกิจ',
    aboutTag: 'About Me',
    aboutTitle: 'ประวัติและข้อมูลส่วนตัว',
    infoName: 'ชื่อ-นามสกุล',
    infoNickname: 'ชื่อเล่น',
    infoAge: 'อายุ',
    infoGender: 'เพศ',
    infoDegree: 'การศึกษา',
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
    navSkills: 'Skills',
    navProjects: 'Portfolio',
    navContact: 'Contact',
    heroBadge: 'Available for Immediate Employment',
    heroTitle: 'Natthanon Sornsuwan',
    heroNickname: '(Non)',
    heroRole: 'FULL-STACK DEVELOPER',
    heroDesc: 'Web & Software Developer with nearly 4 years of experience specializing in full-cycle enterprise business systems: ERP, CRM, multi-branch POS, Booking platforms, and E-commerce. Experienced in Web Scraping, Google Merchant, and advanced WordPress with SEO, committed to building robust solutions that solve real business challenges.',
    btnProjects: 'Explore Production Portfolio',
    btnContact: 'Get In Touch',
    btnCopyEmail: 'Copy Email',
    statExpVal: '~4 Years',
    statExpLabel: 'Engineering Experience',
    statGpaVal: '3.61',
    statGpaLabel: 'GPA Honors (RMUTL)',
    statCoreVal: 'ERP & FinTech',
    statCoreLabel: 'Production Platforms',
    aboutTag: 'About Me',
    aboutTitle: 'Personal Profile & Bio',
    infoName: 'Full Name',
    infoNickname: 'Nickname',
    infoAge: 'Age',
    infoGender: 'Gender',
    infoDegree: 'Degree',
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

let currentLang = localStorage.getItem('natthanon_lang') || 'th';
let currentTheme = localStorage.getItem('natthanon_theme') || 'dark';
let activeModalProject = null;
let activeModalImgIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initI18n();
  renderFullProjects('all');
  initLightboxModal();
  initScrollSpy();
  initContactForm();
});

/* Theme */
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

/* i18n */
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
  }
}

/* Projects Rendering */
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
    const problem = project.problem[currentLang];
    const solution = project.solution[currentLang];
    const features = project.features[currentLang];
    const imageTitles = project.imageTitles[currentLang];

    card.innerHTML = `
      <div class="project-full-header">
        <div class="project-header-left">
          <div class="project-badge-row">
            <span class="badge badge-cyan">${getCategoryLabel(project.category)}</span>
            <span class="badge badge-emerald">${project.company}</span>
            <span class="badge">${project.duration}</span>
            <span class="badge badge-role">${project.role}</span>
          </div>
          <h3 class="project-full-title">${title}</h3>
        </div>
        <div class="project-header-right">
          <button class="btn btn-outline btn-sm" onclick="openProjectModal('${project.id}', 0)">
            <span>ดูภาพขยายเต็มจอ</span>
          </button>
        </div>
      </div>

      <div class="project-full-grid">
        <!-- Gallery with Chrome Window Frame -->
        <div class="project-full-gallery">
          <div class="browser-chrome-frame">
            <div class="browser-chrome-bar">
              <span class="chrome-dot dot-red"></span>
              <span class="chrome-dot dot-yellow"></span>
              <span class="chrome-dot dot-green"></span>
              <span class="chrome-address" id="caption-${project.id}">${imageTitles[0]}</span>
            </div>
            <div class="project-main-display" onclick="openProjectModal('${project.id}', getActiveInlineImgIndex('${project.id}'))">
              <img src="${project.images[0]}" alt="${title}" id="display-${project.id}" class="project-main-img" />
              <div class="project-main-overlay">
                <span class="overlay-btn">คลิกเพื่อขยายภาพขนาดใหญ่</span>
              </div>
            </div>
          </div>

          <!-- Thumbnails Strip with actual screen names -->
          <div class="project-inline-thumbs">
            ${project.images.map((img, idx) => `
              <button class="inline-thumb-btn ${idx === 0 ? 'active' : ''}" 
                      data-project="${project.id}"
                      data-index="${idx}"
                      onclick="switchInlineDisplay('${project.id}', ${idx})"
                      title="${imageTitles[idx]}">
                <img src="${img}" alt="${imageTitles[idx]}" class="inline-thumb-img" />
                <span class="inline-thumb-title">${imageTitles[idx]}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Project Breakdown -->
        <div class="project-full-info">
          <div class="project-desc-block">
            <h4>โจทย์ทางธุรกิจ & ความต้องการ</h4>
            <p>${problem}</p>
          </div>

          <div class="project-desc-block">
            <h4>แนวทางการออกแบบและพัฒนา</h4>
            <p>${solution}</p>
          </div>

          <div class="project-features-block">
            <h4>ฟังก์ชันหลักในระบบ (Key Features)</h4>
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
            <h4>เทคโนโลยีที่ใช้ (Tech Stack)</h4>
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
  const captionEl = document.getElementById(`caption-${projectId}`);
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (displayImg && project && project.images[index]) {
    displayImg.src = project.images[index];
    displayImg.setAttribute('data-active-index', index);

    if (captionEl) {
      captionEl.textContent = project.imageTitles[currentLang][index];
    }

    const thumbs = document.querySelectorAll(`.inline-thumb-btn[data-project="${projectId}"]`);
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
    erp: 'ERP Platform',
    hr: 'HR Management',
    ecommerce: 'E-Commerce',
    fintech: 'FinTech',
    agency: 'Marketing Agency'
  };
  return labels[cat] || cat.toUpperCase();
}

function getCurrentFilter() {
  const activeBtn = document.querySelector('.filter-btn.active');
  return activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    renderFullProjects(filter);
  });
});

/* Lightbox Modal */
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
  const imageTitles = project.imageTitles[currentLang];

  if (modalTitle) {
    modalTitle.textContent = `${project.title[currentLang]} — ${imageTitles[activeModalImgIndex]}`;
  }

  if (mainImg) {
    mainImg.src = project.images[activeModalImgIndex];
    mainImg.alt = `${project.title[currentLang]} - ${imageTitles[activeModalImgIndex]}`;
  }

  if (thumbsContainer) {
    thumbsContainer.innerHTML = project.images.map((img, idx) => `
      <img src="${img}" 
           alt="${imageTitles[idx]}" 
           title="${imageTitles[idx]}"
           class="modal-thumb ${idx === activeModalImgIndex ? 'active' : ''}" 
           onclick="setModalImageIndex(${idx})" />
    `).join('');
  }

  if (detailsContainer) {
    const features = project.features[currentLang];
    detailsContainer.innerHTML = `
      <h4>ภาพรวมของระบบ</h4>
      <p>${project.shortDesc[currentLang]}</p>
      
      <h4>ฟังก์ชันหลักในระบบ (Key Features)</h4>
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
  const modalTitle = document.getElementById('modalTitle');
  if (mainImg) {
    mainImg.src = activeModalProject.images[activeModalImgIndex];
  }
  if (modalTitle) {
    modalTitle.textContent = `${activeModalProject.title[currentLang]} — ${activeModalProject.imageTitles[currentLang][activeModalImgIndex]}`;
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

/* Clipboard & Toast */
function copyToClipboard(text, message) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(message);
    }).catch(() => fallbackCopy(text, message));
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
    showToast("คัดลอก: " + text);
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
  toast.innerHTML = `<span>✓</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

window.copyEmail = function() {
  const msg = currentLang === 'th' ? 'คัดลอกอีเมลเรียบร้อยแล้ว' : 'Email copied to clipboard';
  copyToClipboard('nonin31313@gmail.com', msg);
};

window.copyPhone = function() {
  const msg = currentLang === 'th' ? 'คัดลอกเบอร์โทรเรียบร้อยแล้ว' : 'Phone number copied';
  copyToClipboard('0910798390', msg);
};

/* Scroll Spy */
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

/* Contact Form */
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
