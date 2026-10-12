// ===== รายการเกมของ TaoLung Launcher =====
// แก้ไฟล์นี้บน GitHub (repo taolung) แล้ว Commit — โปรแกรมจะอ่านตอนเปิดครั้งถัดไป (GitHub อาจหน่วง 1-5 นาที)
//
// เพิ่มเกม = คัดลอกก้อน { ... } แล้วเปลี่ยนค่า ใส่เครื่องหมาย , ท้ายก้อน
//   id          ชื่อโฟลเดอร์เก็บเกมในเครื่อง (ภาษาอังกฤษ/ตัวเลข ห้ามซ้ำกัน)
//   title       ชื่อที่โชว์บนการ์ด
//   desc        คำอธิบายสั้น ๆ
//   repo        GitHub repo ที่ปล่อยเกม เช่น 'noandap234/TLRun' (ต้อง public)
//   asset       ชื่อไฟล์ที่แนบใน Release ล่าสุด (.exe หรือ .zip)
//   exe         ชื่อไฟล์ที่ใช้เปิดเกม (ถ้า asset เป็น .exe ก็ชื่อเดียวกัน, ถ้าเป็น .zip คือชื่อ exe ที่อยู่ในนั้น)
//   needsBridge true = เกมนี้ใช้ตัวกลาง TikTok / false = ไม่ใช้
//   icon        ลิงก์รูป (ไม่ใส่ก็ได้ ถ้าแนบไฟล์ icon.png ใน Release โปรแกรมจะหยิบเอง)
// อัปเดตเกม = สร้าง Release ใหม่ใน repo ของเกม ตั้ง tag เป็นเลขสูงขึ้น (v1.0.1) แนบไฟล์ใหม่ — ไม่ต้องแก้ไฟล์นี้

const GAMES_DATA = [
    {
    id: 'TaoLungRun',
    title: 'TaoLung Run',
    desc: 'วิ่งสู่เส้นชัย',
    repo: 'noandap234/TLRun',
    asset: 'runner.exe',
    exe: 'runner.exe',
    needsBridge: true,
    icon: 'https://github.com/noandap234/TLRun/releases/download/v1.0.1/icon.png',
  },
  {
    id: 'TaoLungRace',
    title: 'TaoLung Race',
    desc: 'แข่งรถ',
    repo: 'noandap234/tlrack',
    asset: 'race.exe',
    exe: 'race.exe',
    needsBridge: true,
    icon: 'https://github.com/noandap234/tlrack/releases/download/v1.0.2/icon.png',
  },
];


// ตัวโปรแกรม Launcher เอง (Release ล่าสุดต้องแนบ Setup และ tag = เลขเวอร์ชันของโปรแกรม)
const LAUNCHER_DATA = { repo: 'noandap234/taolung', asset: 'TaoLungLauncher-Setup.exe' };
