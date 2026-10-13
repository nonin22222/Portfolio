# 💼 Natthanon Sonsawan - Full-Stack Developer Portfolio

เว็บไซต์ Portfolio ระดับโปรดักชัน สำหรับนำเสนอผลงานและสมัครงานในตำแหน่ง **Full-Stack Developer / Software Engineer** ออกแบบด้วยเทคโนโลยี Modern Web, Glassmorphism, ระบบสลับภาษา (TH/EN), ธีมสลับสว่าง-มืด (Light/Dark) และรองรับการ Deploy บน **GitHub Pages** ได้ทันทีโดยไม่ต้อง Build เพิ่มเติม

---

## 🌟 จุดเด่นของเว็บไซต์ (Features)
1. **GitHub Pages 100% Ready:** ใช้โครงสร้าง Static Web มาตรฐาน อ้างอิง Relative Path ทั้งหมด พร้อมไฟล์ `.nojekyll` รองรับการรันบน `https://<username>.github.io/<repo>/` ได้ทันที
2. **ระบบสลับภาษา (Bilingual TH / EN):** เปลี่ยนภาษาได้ทันใจผ่านปุ่มบนแถบนำทาง รองรับทั้ง HR ไทยและบริษัทข้ามชาติ
3. **Interactive Project Lightbox Modal:** เมื่อคลิกที่การ์ดผลงาน จะเปิดหน้าต่างดูรูปสกรีนช็อตขนาดใหญ่ พร้อมสลับดูรูปต่างๆ ในโปรเจกต์นั้นๆ และอ่านรายละเอียดสถาปัตยกรรมระบบ
4. **ตัวกรองหมวดหมู่ผลงาน (Filter Tabs):** กรองดูเฉพาะ ERP, HR & Payroll, E-Commerce, FinTech หรือ Web Agency ได้ทันที
5. **Interactive Photo Switcher:** สลับดูรูปโปรไฟล์ได้ 3 สไตล์ (Studio Portrait, รูปติดบัตรทางการ, รูปกิจกรรม)
6. **1-Click Copy Contact & Toasts:** คลิกคัดลอกอีเมลหรือเบอร์โทรศัพท์ได้ในคลิกเดียว พร้อมแจ้งเตือน Toast สวยงาม

---

## 📁 โครงสร้างโฟลเดอร์ในโปรเจกต์
```
Portfolio/
├── index.html                 # หน้าเว็บหลัก
├── .nojekyll                  # ป้องกันปัญหา Jekyll ของ GitHub Pages
├── README.md                  # คู่มือโปรเจกต์และการนำขึ้น GitHub Pages
├── css/
│   └── style.css              # ระบบสไตล์ Dark Luxury Tech + Glassmorphism + Responsive
├── js/
│   └── main.js                # ระบบจัดการข้อมูลผลงาน, Modal, Filter, i18n, Theme
├── me/                        # ข้อมูลและรูปถ่ายของผู้พัฒนา
│   ├── profile_portrait.jpg
│   ├── formal_photo.png
│   └── casual_photo.jpg
└── Portfolio/                 # โฟลเดอร์สกรีนช็อตผลงานจริงทั้ง 6 ระบบ
    ├── erp/                   # iToolMart Enterprise ERP Platform
    ├── hr/                    # Dee.Farm HR & Payroll Platform
    ├── itool/                 # iToolMart E-Commerce Platform
    ├── superexchangechiangrai/# Super Exchange FinTech Platform
    ├── lottoshop/             # ตลาดสลากไทย Marketplace
    └── imagehubs/             # Images Hubs Digital Marketing Agency
```

---

## 🚀 ขั้นตอนการนำขึ้น GitHub Pages (Step-by-Step Guide)

### วิธีที่ 1: อัปโหลดผ่าน GitHub Desktop หรือ Git CLI
1. สร้าง New Repository บน [GitHub.com](https://github.com) (เช่น ตั้งชื่อว่า `Portfolio`)
2. ดันโค้ดทั้งหมดในโฟลเดอร์นี้ขึ้นสู่ GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release for Full-Stack Developer"
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/Portfolio.git
   git push -u origin main
   ```

### วิธีที่ 2: ตั้งค่าเปิดใช้งาน GitHub Pages
1. เข้าไปที่หน้า Repository บน GitHub
2. ไปที่เมนู **Settings** (การตั้งค่า)
3. เมนูด้านซ้าย เลือกหัวข้อ **Pages**
4. ในส่วน **Build and deployment**:
   - **Source:** เลือก `Deploy from a branch`
   - **Branch:** เลือก `main` และโฟลเดอร์ `/ (root)`
   - กดปุ่ม **Save**
5. รอประมาณ 1-2 นาที GitHub จะสร้าง URL เว็บไซต์ของคุณ เช่น:  
   👉 `https://<YOUR_GITHUB_USERNAME>.github.io/Portfolio/`
