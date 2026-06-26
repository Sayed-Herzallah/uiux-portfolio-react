# UI/UX Designer Portfolio: Interactive Design Showcase

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,100:0369a1&height=160&section=header&text=UI/UX%20Designer%20Portfolio&fontSize=42&fontColor=ffffff&fontFamily=Outfit" width="100%" />
</div>

<div align="center">
  <img src="https://img.shields.io/badge/React-2023-blue?logo=react&style=for-the-badge" alt="React" /> <img src="https://img.shields.io/badge/Framer%20Motion-Animations-blue?logo=framer&style=for-the-badge" alt="Framer Motion" /> <img src="https://img.shields.io/badge/TailwindCSS-v3-blue?logo=tailwindcss&style=for-the-badge" alt="TailwindCSS" /> <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</div>

موقع **معرض أعمال مصممة واجهات المستخدم (UI/UX)** التفاعلي، قمت بتطوير وبرمجة الواجهة الأمامية بالكامل باستخدام React ومكتبة Framer Motion لعرض التصاميم ونماذج العمل بصورة احترافية حركية.

An interactive, high-fidelity portfolio website developed for a professional UI/UX Designer. Designed by the UI/UX designer and developed end-to-end as a React frontend client by Sayed Herzallah.

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
