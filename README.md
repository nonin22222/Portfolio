# Natthanon Sornsuwan (ณัฏฐนนท์ ศรสุวรรณ) - Full-Stack Developer Portfolio

เว็บไซต์ Portfolio สำหรับนำเสนอผลงานและสมัครงานในตำแหน่ง **Full-Stack Developer / Software Engineer** ออกแบบด้วยเทคโนโลยี Modern Web, Dark Slate Engineering Theme, ระบบสลับภาษา (TH/EN), ธีมสลับสว่าง-มืด (Light/Dark) และรองรับการ Deploy บน **GitHub Pages** ได้ทันทีโดยไม่ต้อง Build เพิ่มเติม

---

## จุดเด่นของเว็บไซต์ (Key Highlights)
1. **GitHub Pages 100% Ready:** โครงสร้างเว็บมาตรฐาน พร้อมไฟล์ `.nojekyll` รองรับการทำงานบน `https://<username>.github.io/<repo>/` ทันที
2. **ระบบสลับภาษา (Bilingual TH / EN):** เปลี่ยนภาษาได้ทันใจผ่านปุ่มบนแถบนำทาง รองรับทั้ง HR ไทยและบริษัทข้ามชาติ
3. **Full-View Project Showcase & Chrome Mockup:** นำเสนอภาพตัวอย่างสกรีนช็อตทุกหน้าในกรอบ Browser Window พร้อมสลับแท็บดูแต่ละหน้าและอ่านรายละเอียดโจทย์ทางธุรกิจ/แนวทางแก้ปัญหา
4. **Interactive Project Lightbox Modal:** ดูรูปสกรีนช็อตขนาดใหญ่เต็มจอพร้อมเลื่อนเปลี่ยนรูปได้อย่างต่อเนื่อง
5. **ตัวกรองหมวดหมู่ผลงาน (Filter Tabs):** กรองดูเฉพาะ ERP, HR & Payroll, E-Commerce, FinTech หรือ Web Agency ได้ทันที
6. **1-Click Copy Contact & Toasts:** คัดลอกอีเมลหรือเบอร์โทรศัพท์ได้ในคลิกเดียว พร้อมการแจ้งเตือน Toast

---

## ข้อมูลผู้พัฒนา (Developer Profile)
- **ชื่อ-นามสกุล:** นายณัฏฐนนท์ ศรสุวรรณ (นนท์)
- **English Name:** Natthanon Sornsuwan (Non)
- **ตำแหน่ง:** Full-Stack Developer / Software Engineer
- **ประสบการณ์:** เกือบ 4 ปี (Enterprise Business Systems, ERP, POS, HR & Payroll, E-Commerce, Web Scraping)
- **การศึกษา:** ปริญญาตรี สาขาการพัฒนาซอฟต์แวร์ทางธุรกิจ มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา (RMUTL) — เกียรตินิยม (GPA 3.61)
- **GitHub:** [github.com/nonin22222](https://github.com/nonin22222)
- **อีเมล:** nonin31313@gmail.com
- **โทรศัพท์:** 091-079-8390

---

## โครงสร้างโฟลเดอร์ในโปรเจกต์
```
Portfolio/
├── index.html                 # หน้าเว็บหลัก
├── .nojekyll                  # ป้องกันปัญหา Jekyll ของ GitHub Pages
├── README.md                  # คู่มือโปรเจกต์และการนำขึ้น GitHub Pages
├── css/
│   └── style.css              # ระบบสไตล์ Clean Engineer + Responsive
├── js/
│   └── main.js                # ระบบข้อมูลผลงาน, Modal, Filter, i18n, Theme
├── me/                        # ข้อมูลและรูปถ่ายของผู้พัฒนา
│   └── profile_portrait.jpg
└── Portfolio/                 # โฟลเดอร์สกรีนช็อตผลงานจริงทั้ง 6 ระบบ
    ├── erp/                   # iToolMart Enterprise ERP Platform
    ├── hr/                    # Dee.Farm HR & Payroll Platform
    ├── itool/                 # iToolMart E-Commerce Platform
    ├── superexchangechiangrai/# Super Exchange FinTech Platform
    ├── lottoshop/             # ตลาดสลากไทย Marketplace
    └── imagehubs/             # Images Hubs Digital Marketing Agency
```

---

## ขั้นตอนการนำขึ้น GitHub Pages (Step-by-Step Guide)

### วิธีที่ 1: อัปโหลดผ่าน GitHub Desktop หรือ Git CLI
```bash
git add .
git commit -m "Update portfolio for Full-Stack Developer"
git push origin main
```

### วิธีที่ 2: ตั้งค่าเปิดใช้งาน GitHub Pages
1. เข้าไปที่หน้า Repository บน GitHub (`https://github.com/nonin22222/Portfolio`)
2. ไปที่เมนู **Settings** (การตั้งค่า)
3. เมนูด้านซ้าย เลือกหัวข้อ **Pages**
4. ในส่วน **Build and deployment**:
   - **Source:** เลือก `Deploy from a branch`
   - **Branch:** เลือก `main` และโฟลเดอร์ `/ (root)`
   - กดปุ่ม **Save**
5. รอประมาณ 1-2 นาที GitHub จะเผยแพร่เว็บไซต์ของคุณที่:  
   👉 `https://nonin22222.github.io/Portfolio/`
