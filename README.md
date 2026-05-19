# 🇹🇭 ENcore+ 2026 曼谷旅遊 App

> ENcore+ Asia-Pacific 2026 醫學學術會議暨曼谷旅遊隨行 App

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://annyhouyicheng-oss.github.io/)

---

## ✨ 功能特色

| 功能 | 說明 |
|------|------|
| 🗓️ **行程總覽** | 5/28–5/31 四天完整行程，逐日逐時記錄 |
| 📍 **景點地圖** | 曼谷購物、美食、按摩、景點一鍵導航 Google Maps |
| 🇹🇭 **泰語手冊** | 6大情境、40+常用句，點擊聽泰語發音（TTS） |
| 📓 **旅遊日記** | 每日心情記錄，儲存於本機 localStorage |
| ☑️ **行前清單** | 七大類行李清單，勾選進度追蹤 |
| 🌍 **雙時區時鐘** | 台灣 / 曼谷即時對照 |
| 📱 **PWA 支援** | 可加入主畫面，離線使用 |

---

## 🚀 使用方式

### 線上版（推薦）
直接用手機瀏覽器開啟，然後「加入主畫面」：

```
https://annyhouyicheng-oss.github.io/bangkok.html
```

### 本地執行
```bash
git clone https://github.com/annyhouyicheng-oss/annyhouyicheng-oss.github.io.git
cd annyhouyicheng-oss.github.io

# 用任意靜態伺服器啟動（避免 CORS）
npx serve .
# 或
python3 -m http.server 8080
```

瀏覽器開啟 `http://localhost:8080/bangkok.html`

---

## 📁 檔案結構

```
├── index.html          # 進入點，自動跳轉至主 App
├── bangkok.html        # 🇹🇭 曼谷旅遊 App 主檔（含全部資料與 UI）
├── manifest.json       # PWA Manifest（加入主畫面設定）
├── sw.js               # Service Worker（離線快取）
├── icon.svg            # App 圖示（SVG）
├── icon-192.png        # App 圖示 192×192（iOS / Android）
├── icon-512.png        # App 圖示 512×512（啟動畫面）
└── README.md           # 本文件
```

---

## 🏥 會議資訊

**ENcore+ Asia-Pacific 2026**
- 📅 日期：2026年5月29日（五）– 5月30日（六）
- 📍 地點：Hotel Renaissance Bangkok Ratchaprasong
- 🎯 主題：臨床營養、腸道營養、腫瘤與腎臟照護

---

## ✈️ 行程摘要

| 日期 | 行程 |
|------|------|
| 5/28（四） | ✈️ CI-835 台北 13:30 → 曼谷 16:20 |
| 5/29（五） | 🏥 ENcore+ Day 1 + 大會晚宴 |
| 5/30（六） | 🏥 ENcore+ Day 2 + 自由晚餐 |
| 5/31（日） | 🛫 CI-832 曼谷 13:20 → 台北 18:00 |

---

## 🛠️ 技術架構

- **前端**：React 18（UMD CDN）+ Babel Standalone
- **樣式**：純 CSS-in-JS（inline styles）
- **資料儲存**：localStorage（日記、清單進度）
- **語音**：Web Speech API（TTS 泰語發音）
- **地圖**：Google Maps 超連結導航
- **PWA**：Service Worker + Web Manifest

---

*最後更新：2026-05-19*
