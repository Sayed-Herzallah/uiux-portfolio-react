# Sayed Herzallah Portfolio: Animated Interactive Developer Showcase

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,100:0369a1&height=160&section=header&text=Sayed%20Herzallah%20Portfolio&fontSize=42&fontColor=ffffff&fontFamily=Outfit" width="100%" />
</div>

<div align="center">
  ![React](https://img.shields.io/badge/React-2023-blue?logo=react&style=for-the-badge) ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Animations-blue?logo=framer&style=for-the-badge) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3-blue?logo=tailwindcss&style=for-the-badge) ![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
</div>

موقع **معرض الأعمال التفاعلي** للمهندس سيد حرز الله هو واجهة تعريفية متقدمة مبنية باستخدام React ومكتبة Framer Motion لإتاحة تجربة تصفح تفاعلية وحركية تستعرض مشاريعه الرائدة وخبراته الهندسية.

This repository holds the interactive portfolio frontend client for **Sayed Herzallah's Developer Showcase**. Featuring Framer Motion scroll triggers, project details popups, and a responsive contact form.

---

## 🧬 UI Component & Animation Flow

The frontend manages smooth layout transitions and contact triggers:

```mermaid
graph TD
    Visitor[Portfolio Visitor] -->|Scroll down| Scroll[Framer Motion Scroll triggers]
    Scroll -->|Animate element fade-ins| View[Projects Grid View]
    Visitor -->|Click Project card| Modal[Framer Motion Modal Popup]
    Visitor -->|Fill contact form & submit| API[Submit contact query]
```

---

## 🛠️ Technology Stack & Assets

*   **Library**: **React 18** + **Vite**.
*   **Animation Engine**: **Framer Motion** managing entry, exit, and scroll states.
*   **Design**: **TailwindCSS** customized typography grids.

---

## 📂 Repository Module Layout

```text
uiux-portfolio-react/
├── src/
│   ├── components/      # ProjectCard, ContactForm, Navbar
│   ├── assets/          # Project graphics and logo assets
│   ├── App.jsx          # Showcase page controller
│   └── main.jsx         # Render entry point
├── package.json         # Node metadata
└── README.md            # System documentation
```

---

## ⚡ Local Setup & Run
```bash
git clone https://github.com/Sayed-Herzallah/uiux-portfolio-react.git
cd uiux-portfolio-react
npm install
npm run dev
```

---

## 📄 License
Licensed under the **MIT License**.
