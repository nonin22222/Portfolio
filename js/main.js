/**
 * NATTHANON SONSAWAN - FULL-STACK DEVELOPER PORTFOLIO
 * Main JavaScript Engine: i18n, Interactive Modal, Filtering, Theme, Toasts
 */

// Project Data Store with full bilingual content and multiple screenshots
const PROJECTS_DATA = [
  {
    id: 'erp',
    category: 'erp',
    title: {
      th: 'iToolMart Enterprise ERP Platform',
      en: 'iToolMart Enterprise ERP Platform'
    },
    shortDesc: {
      th: 'ระบบบริหารทรัพยากรองค์กร (ERP) จัดการยอดขาย สินค้าคงคลัง ระบบจัดซื้อ และวิเคราะห์ข้อมูลสาขา',
      en: 'Comprehensive Enterprise Resource Planning system handling sales, multi-warehouse inventory, and branch analytics.'
    },
    fullDesc: {
      th: 'ระบบ ERP ที่พัฒนาขึ้นเพื่อรองรับธุรกิจค้าปลีก-ค้าส่งขนาดใหญ่ รวบรวมข้อมูลรายรับ-รายจ่าย ยอดขาย กำไรขาดทุน แสดงผลแดชบอร์ดแบบโต้ตอบด้วยกราฟสถิติ จัดการระบบสต็อกแจ้งเตือนสินค้าใกล้หมด ระบบสั่งซื้อ (PO) ส่งออกเอกสาร Excel/PDF พร้อมการควบคุมสิทธิ์ผู้ใช้แบบเข้มงวด',
      en: 'Enterprise ERP developed for retail and wholesale operations. Aggregates real-time income, expenses, and profit margins into interactive chart dashboards. Includes automated low-stock warnings, purchase order (PO) workflows, and Excel/PDF reporting.'
    },
    tags: ['Full-Stack', 'ERP Architecture', 'Highcharts', 'Inventory Control', 'Excel Export', 'RBAC'],
    images: [
      './Portfolio/erp/1.png',
      './Portfolio/erp/2.png',
      './Portfolio/erp/3.png',
      './Portfolio/erp/4.png',
      './Portfolio/erp/5.png'
    ],
    features: {
      th: [
        'แดชบอร์ดสรุปรายรับ-รายจ่าย และยอดขายรวมทุกสาขาแบบเรียลไทม์',
        'ระบบบริหารสต็อกคลังสินค้าและการแจ้งเตือนสินค้าใกล้หมด (Low Stock Alert)',
        'ระบบสร้างและจัดการใบสั่งซื้อ (PO) พร้อมฟิลเตอร์ช่วงเวลาและส่งออก Excel',
        'ระบบจัดการยอดขายและใบเสร็จ แยกตามพนักงานขายและสาขา',
        'การควบคุมสิทธิ์ผู้ใช้งาน (Role-Based Access Control) ตามระดับอำนาจ'
      ],
      en: [
        'Real-time multi-branch financial & sales analytics dashboard',
        'Multi-warehouse stock inventory with automated low-stock threshold alerts',
        'PO procurement workflow with date-range filtering and Excel export',
        'Sales and invoice audit tracking sorted by salesperson and warehouse',
        'Role-Based Access Control (RBAC) across organizational departments'
      ]
    }
  },
  {
    id: 'hr',
    category: 'hr',
    title: {
      th: 'Dee.Farm HR Management Platform',
      en: 'Dee.Farm HRM & Workforce Platform'
    },
    shortDesc: {
      th: 'แพลตฟอร์มบริหารงานบุคคลครบวงจร ระบบลงเวลาเข้าออกงาน อนุมัติวันลา และคำนวณเงินเดือน',
      en: 'End-to-end Human Resource Management platform with clock-in/out, leave approvals, and payroll processing.'
    },
    fullDesc: {
      th: 'ระบบบริหารจัดการทรัพยากรบุคคลขององค์กร รองรับการบันทึกเวลาทำงานผ่านระบบออนไลน์ เช็คสถิติการมาสาย ขาดงาน ระบบยื่นขออนุมัติวันลา (ลาป่วย ลากิจ ลาพักร้อน) พร้อมปฏิทินบริษัท ระบบจัดการข้อมูลพนักงาน และระบบบัญชีเงินเดือน (Payroll) คำนวณภาษีอัตโนมัติ',
      en: 'All-in-one HRM platform featuring web clock-in/out attendance tracking, tardiness analytics, digital leave requests with approval hierarchies, company calendar sync, employee directory, and automated payroll slip & tax computation.'
    },
    tags: ['Full-Stack', 'HRM System', 'Payroll Engine', 'Attendance Tracking', 'Calendar Sync', 'Security'],
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
        'ระบบบัญชีเงินเดือน (Payroll) แสดงรายการจ่าย ย้อนหลัง และดาวน์โหลดสลิป',
        'ระบบจัดการประวัติพนักงาน เอกสารแนบ ประวัติการศึกษา และข้อมูลธนาคาร',
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
    title: {
      th: 'iToolMart E-Commerce Platform',
      en: 'iToolMart E-Commerce Storefront'
    },
    shortDesc: {
      th: 'เว็บสโตร์ค้าปลีกเครื่องมือช่างและอุปกรณ์อุตสาหกรรม พร้อมระบบแคตตาล็อก แบรนด์ และคูปองโปรโมชั่น',
      en: 'Large-scale industrial tool e-commerce platform with dynamic brand filters, TikTok feeds, and promo coupons.'
    },
    fullDesc: {
      th: 'ร้านค้าออนไลน์สินค้าอุตสาหกรรมและเครื่องมือช่างชั้นนำ รองรับแคตตาล็อกสินค้าขนาดใหญ่ การจัดหมวดหมู่แบรนด์ A-Z ค้นหาแบบทันใจ ระบบคูปองส่งฟรีและโปรโมชั่นส่วนลด พร้อมการเชื่อมโยงคอนเทนต์วิดีโอ TikTok จากหน้าร้านสาขา และบล็อกบทความรีวิวเครื่องมือ',
      en: 'Modern e-commerce platform built for professional tool retail. Features responsive mega-menus, alphabetical brand index, instant keyword search, promotional discount voucher engine, branch TikTok feed embeds, and engineering blog community.'
    },
    tags: ['E-Commerce', 'Frontend Architecture', 'Brand Index A-Z', 'Coupon Engine', 'TikTok Embed', 'UI/UX'],
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
    title: {
      th: 'Super Exchange Chiang Rai',
      en: 'Super Exchange Currency Platform'
    },
    shortDesc: {
      th: 'แพลตฟอร์มแลกเปลี่ยนเงินตราต่างประเทศ บอร์ดเรทเรียลไทม์ และระบบจองล็อกเรทออนไลน์ล่วงหน้า',
      en: 'FinTech currency exchange web service featuring real-time FX rate boards and rate-locking booking.'
    },
    fullDesc: {
      th: 'เว็บแอปพลิเคชันบริการแลกเปลี่ยนเงินตราต่างประเทศสาขาเซ็นทรัล เชียงราย แสดงกระดานอัตราแลกเปลี่ยนสกุลเงินหลักทั่วโลก (USD, EUR, JPY, GBP, CNY, SGD ฯลฯ) พร้อมเครื่องคำนวณเงินตรา ระบบเปิดจองล็อกเรทล่วงหน้าเพื่อคุ้มครองความผันผวน และเชื่อมต่อ Official LINE Chat สำหรับลูกค้า',
      en: 'Foreign currency exchange web app serving Central Chiang Rai. Features live rate boards for global currencies (USD, EUR, JPY, GBP, CNY, SGD), interactive FX conversion calculator, branch reservation booking with rate-locking, and LINE Official API integration.'
    },
    tags: ['FinTech', 'Real-Time FX Board', 'Rate Lock Booking', 'Calculator Tool', 'LINE API', 'Responsive'],
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
    title: {
      th: 'ตลาดสลากไทย (LottoShop Marketplace)',
      en: 'Thai Lottery Digital Marketplace'
    },
    shortDesc: {
      th: 'มาร์เก็ตเพลสสลากออนไลน์ ระบบค้นหาเลข 6 หลัก กรองเลขชุด และสรุปคำสั่งซื้อตะกร้าสินค้า',
      en: 'Digital lottery marketplace with 6-digit number search, bundle filter, and shopping cart checkout.'
    },
    fullDesc: {
      th: 'แพลตฟอร์มตลาดสลากออนไลน์สำหรับผู้ค้าและผู้ซื้อ ค้นหาหมายเลข 6 หลักแบบระบุตำแหน่ง กรองสลากใบเดี่ยว สลากชุด (2-10 ใบ) ระบบนับถอยหลังวันออกผลสลาก ตะกร้าสินค้าสรุปยอดคำสั่งซื้อแยกตามร้านค้า และหน้าโปรไฟล์บริหารจัดการร้านค้าตัวแทน',
      en: 'Digital lottery marketplace connecting sellers and buyers. Includes digit-by-digit matching search, bundle filtering (single to 10-ticket packs), draw date countdown clock, multi-vendor cart aggregator, and merchant profile dashboard.'
    },
    tags: ['Marketplace', 'Search Algorithm', 'Cart Checkout', 'Countdown Timer', 'Merchant Portal'],
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
    title: {
      th: 'Images Hubs Marketing Agency',
      en: 'Images Hubs Digital Agency'
    },
    shortDesc: {
      th: 'เว็บไซต์เอเจนซีการตลาดออนไลน์ในเชียงใหม่ นำเสนอบริการดูแลสื่อ โฆษณา และผลงานลูกค้ายอดนิยม',
      en: 'Digital marketing agency portal in Chiang Mai showcasing creative branding, advertising, and case studies.'
    },
    fullDesc: {
      th: 'เว็บไซต์ทางการของทีมการตลาดออนไลน์ Images Hubs เชียงใหม่ ออกแบบเพื่อสร้างความน่าเชื่อถือและการแปลงเป็นลูกค้า (Conversion) นำเสนอบริการดูแล Facebook & IG, ทำปก Cover Page, ทำแบนเนอร์โพสต์โฆษณา และแบบฟอร์มติดต่อขอคำปรึกษาด่วน',
      en: 'Official web presence for Images Hubs marketing agency. Crafted with high-impact visual aesthetics to maximize conversion rates. Features structured service tiers (Social media management, graphic banners, cover design) and customer consultation touchpoints.'
    },
    tags: ['Agency Showcase', 'Conversion UX', 'Landing Page', 'Social Ads', 'Branding'],
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
        'ดีไซน์ Responsive สวยงามและโหลดรวดเร็วทุกอุปกรณ์'
      ],
      en: [
        'Striking Hero section with social proof counters (1,000+ customer rating)',
        'Modular service showcase: Brand cover art, Facebook/IG growth, ad banners',
        'Value proposition breakdowns answering client expectations transparently',
        'Instant Messenger chat CTA integration and lead capture forms',
        'Ultra-fast, fully responsive mobile and desktop viewing performance'
      ]
    }
  }
];

// Translations dictionary for bilingual switcher
const TRANSLATIONS = {
  th: {
    navAbout: 'เกี่ยวกับฉัน',
    navSkills: 'ทักษะ & เทคโนโลยี',
    navProjects: 'ผลงานที่พัฒนา',
    navCapabilities: 'ความเชี่ยวชาญ',
    navContact: 'ติดต่อ',
    heroBadge: 'พร้อมเริ่มงานทันที',
    heroTitle: 'ณัฏฐนนท์ ศรสวรรค์',
    heroRole: 'Full-Stack Developer & Software Engineer',
    heroDesc: 'เชี่ยวชาญการออกแบบและพัฒนาระบบระดับองค์กร (ERP), ระบบบริหารงานบุคคล (HRM & Payroll), เว็บสโตร์ E-Commerce และแพลตฟอร์ม FinTech ที่ต้องการความแม่นยำ ปลอดภัย และรองรับผู้ใช้งานจริง',
    btnProjects: 'ดูผลงานจริงทั้งหมด',
    btnContact: 'ติดต่อเพื่อเริ่มงาน',
    btnCopyEmail: 'คัดลอกอีเมล',
    stat1Label: 'ระบบโปรดักชันจริง',
    stat2Label: 'Full-Stack Lifecycle',
    stat3Label: 'ERP & FinTech',
    photoTabStudio: 'โปรไฟล์',
    photoTabFormal: 'รูปติดบัตร',
    photoTabCasual: 'กิจกรรม',
    aboutTag: 'About Me',
    aboutTitle: 'มุ่งมั่นสร้างซอฟต์แวร์ที่ตอบโจทย์ธุรกิจจริง',
    aboutDesc1: 'สวัสดีครับ ผม ณัฏฐนนท์ ศรสวรรค์ (นน) นักพัฒนา Full-Stack Developer ที่มีประสบการณ์ทำงานจริงในการสร้างระบบซอฟต์แวร์ระดับ Core Business ให้กับหลากหลายองค์กร ไม่ว่าจะเป็นระบบ ERP สำหรับคลังสินค้าและจัดซื้อ, ระบบ HRM คำนวณเงินเดือนและภาษี, ไปจนถึง E-Commerce และระบบแลกเปลี่ยนเงินตรา',
    aboutDesc2: 'ผมให้ความสำคัญทั้งความถูกต้องของ Business Logic, ความปลอดภัยของฐานข้อมูล, ประสิทธิภาพในการประมวลผลข้อมูลปริมาณมาก และการส่งมอบ UI ที่ผู้ใช้งานทำงานได้อย่างลื่นไหล รวดเร็ว และไม่มีข้อผิดพลาด',
    infoName: 'ชื่อ-นามสกุล',
    infoRole: 'ตำแหน่ง',
    infoEmail: 'อีเมล',
    infoPhone: 'เบอร์โทรศัพท์',
    infoLocation: 'ที่อยู่ / การทำงาน',
    infoLocationVal: 'เชียงใหม่, ประเทศไทย (พร้อม On-site / Remote)',
    infoStatus: 'สถานะ',
    infoStatusVal: 'พร้อมเริ่มงานทันที (Ready to hire)',
    skillTag: 'Tech Stack',
    skillTitle: 'ทักษะและความสามารถทางเทคนิค',
    skillSubtitle: 'เครื่องมือและเทคโนโลยีที่ใช้จริงในการสร้างสรรค์ระบบงานคุณภาพ',
    tabAll: 'ทั้งหมด',
    tabFrontend: 'Frontend',
    tabBackend: 'Backend & API',
    tabDatabase: 'Database',
    tabSystems: 'สถาปัตยกรรมระบบ',
    projectTag: 'Portfolio Showcase',
    projectTitle: 'ผลงานระบบจริงที่พัฒนาขึ้น',
    projectSubtitle: 'คลิกดูภาพสกรีนช็อตแบบเต็มทุกหน้า พร้อมรายละเอียดการออกแบบระบบ',
    filterAll: 'ทั้งหมด (6)',
    filterErp: 'ERP & Enterprise',
    filterHr: 'HR & Internal Tools',
    filterEcommerce: 'E-Commerce & Store',
    filterFintech: 'FinTech & Tools',
    filterAgency: 'Web Agency',
    viewDetails: 'ดูภาพสกรีนช็อต & รายละเอียด',
    capTag: 'Why Hire Me',
    capTitle: 'จุดเด่นในฐานะ Full-Stack Developer',
    capSubtitle: 'สิ่งที่ทำให้ผมสามารถสร้างคุณค่าให้กับทีมและองค์กรของคุณได้ทันที',
    contactTag: 'Get In Touch',
    contactTitle: 'พร้อมร่วมงานกับทีมของคุณ',
    contactSubtitle: 'เปิดรับโอกาสในตำแหน่ง Full-Stack Developer / Software Engineer',
    formName: 'ชื่อของคุณ',
    formEmail: 'อีเมลติดต่อกลับ',
    formMsg: 'ข้อความหรือรายละเอียดตำแหน่งงาน',
    btnSendMsg: 'ส่งข้อความติดต่อ',
    footerRights: 'สงวนลิขสิทธิ์ ออกแบบและพัฒนาเพื่อนำเสนอผลงานบน GitHub Pages'
  },
  en: {
    navAbout: 'About Me',
    navSkills: 'Skills & Stack',
    navProjects: 'Projects',
    navCapabilities: 'Expertise',
    navContact: 'Contact',
    heroBadge: 'Ready for Immediate Employment',
    heroTitle: 'Natthanon Sonsawan',
    heroRole: 'Full-Stack Developer & Software Engineer',
    heroDesc: 'Specialized in building mission-critical enterprise systems (ERP), HR & automated payroll solutions, e-commerce storefronts, and FinTech rate-booking platforms engineered for high reliability and real-world scale.',
    btnProjects: 'View All Projects',
    btnContact: 'Get In Touch',
    btnCopyEmail: 'Copy Email',
    stat1Label: 'Production Systems',
    stat2Label: 'Full-Stack Lifecycle',
    stat3Label: 'ERP & FinTech Solutions',
    photoTabStudio: 'Studio Portrait',
    photoTabFormal: 'Official Photo',
    photoTabCasual: 'Casual',
    aboutTag: 'About Me',
    aboutTitle: 'Engineering Business-Driven Software Solutions',
    aboutDesc1: 'Hi, I am Natthanon Sonsawan (Non), a Full-Stack Developer with hands-on production experience engineering mission-critical software for diverse businesses—from multi-warehouse inventory ERPs and automated payroll HRM systems to digital marketplaces and foreign exchange booking services.',
    aboutDesc2: 'I focus on bulletproof business logic, database transaction integrity, optimized queries for large data volumes, and crafting seamless, intuitive user experiences that empower teams to work faster with zero friction.',
    infoName: 'Full Name',
    infoRole: 'Target Role',
    infoEmail: 'Email',
    infoPhone: 'Phone',
    infoLocation: 'Location',
    infoLocationVal: 'Chiang Mai, Thailand (Available On-site / Remote)',
    infoStatus: 'Availability',
    infoStatusVal: 'Available Immediately (Ready to hire)',
    skillTag: 'Tech Stack',
    skillTitle: 'Technical Competencies & Skills',
    skillSubtitle: 'Modern frameworks, database systems, and architectures used in production',
    tabAll: 'All',
    tabFrontend: 'Frontend',
    tabBackend: 'Backend & API',
    tabDatabase: 'Database',
    tabSystems: 'System Architecture',
    projectTag: 'Portfolio Showcase',
    projectTitle: 'Production Projects Showcase',
    projectSubtitle: 'Click any project to inspect high-resolution screenshots and architecture breakdowns',
    filterAll: 'All Projects (6)',
    filterErp: 'ERP & Enterprise',
    filterHr: 'HR & Internal Tools',
    filterEcommerce: 'E-Commerce & Store',
    filterFintech: 'FinTech & Tools',
    filterAgency: 'Web Agency',
    viewDetails: 'Inspect Gallery & Details',
    capTag: 'Why Hire Me',
    capTitle: 'Full-Stack Core Strengths',
    capSubtitle: 'Proven technical capabilities ready to drive immediate value for your engineering team',
    contactTag: 'Get In Touch',
    contactTitle: "Let's Build Great Products Together",
    contactSubtitle: 'Open for Full-Stack Developer and Software Engineer opportunities',
    formName: 'Your Name',
    formEmail: 'Your Contact Email',
    formMsg: 'Message or Opportunity Details',
    btnSendMsg: 'Send Inquiry',
    footerRights: 'All rights reserved. Designed & built for seamless GitHub Pages deployment.'
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
  renderProjects('all');
  initLightboxModal();
  initScrollSpy();
  initPhotoSwitcher();
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
      renderProjects(getCurrentFilter());
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
   Project Showcase Rendering & Filtering
   ========================================================================== */
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === filter);

  grid.innerHTML = '';

  filtered.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-category', project.category);

    const title = project.title[currentLang];
    const desc = project.shortDesc[currentLang];
    const coverImg = project.images[0];
    const imgCount = project.images.length;

    card.innerHTML = `
      <div class="project-thumb-wrap" onclick="openProjectModal('${project.id}', 0)">
        <img src="${coverImg}" alt="${title}" class="project-thumb" loading="lazy" />
        <div class="project-badge-top">
          <span class="badge badge-cyan">${getCategoryLabel(project.category)}</span>
        </div>
        <div class="project-count-badge">
          <span>📷 ${imgCount} รูป</span>
        </div>
        <div class="project-overlay">
          <span class="overlay-btn">🔍 ${currentLang === 'th' ? 'ดูภาพและรายละเอียด' : 'Inspect Gallery'}</span>
        </div>
      </div>
      <div class="project-body">
        <div class="project-header-row">
          <h3 class="project-title">${title}</h3>
        </div>
        <p class="project-desc">${desc}</p>
        <div class="project-tags">
          ${project.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        <div class="project-footer">
          <button class="btn btn-secondary btn-sm" onclick="openProjectModal('${project.id}', 0)">
            <span>${currentLang === 'th' ? 'คลิกดูรายละเอียด' : 'View Full Details'}</span>
            <span>→</span>
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

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
    renderProjects(filter);
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

// Global exposure for onclick handlers
window.openProjectModal = openProjectModal;
window.setModalImageIndex = setModalImageIndex;

/* ==========================================================================
   Photo Switcher in Hero Section
   ========================================================================== */
function initPhotoSwitcher() {
  const avatarImg = document.getElementById('heroAvatarImg');
  const buttons = document.querySelectorAll('.photo-tab-btn');

  const photos = {
    studio: './me/profile_portrait.jpg',
    formal: './me/formal_photo.png',
    casual: './me/casual_photo.jpg'
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const photoKey = btn.getAttribute('data-photo');
      if (avatarImg && photos[photoKey]) {
        avatarImg.src = photos[photoKey];
      }
    });
  });
}

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
