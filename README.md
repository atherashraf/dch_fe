# DCH Frontend (dch_fe)

This is the **frontend codebase** for the **Data Clearing House (DCH)** project.

The goal is to provide a modern, scalable, responsive, and user-friendly interface for accessing geospatial data and services.

---

## 🧰 Built With

- [React 18+](https://reactjs.org/)
- [Vite 4+](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material-UI v6 (MUI)](https://mui.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router v6](https://reactrouter.com/)

---

## 📦 Folder Structure

```
src/
 ├── assets/          # Static assets (images, icons, etc.)
 ├── components/      # Reusable UI components (e.g., ModeToggle)
 ├── layouts/         # Layouts like DCHLayout
 ├── pages/           # Pages (DCHHomePage, LayersPage, etc.)
 ├── routes/          # Router setup (AppRoutes)
 ├── store/           # Redux store, slices, hooks
 ├── theme/           # Themes and global styling (light/dark mode)
 ├── App.tsx          # Main App component
 └── main.tsx         # Vite entry point
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

1. Clone the repository:

```bash
git clone https://your-repo-url.git
cd dch_fe
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## 🛠 Features

- 🚀 Super fast Vite setup
- 🎨 Material-UI theme (Light/Dark toggle)
- 🗂 Redux Toolkit setup (for theme mode)
- 📱 Responsive UI (flexbox and MUI Grid system)
- 🔥 Scrollable main content between sticky header and footer
- 🎯 Professional scrollbar styling
- 🗺 Asset management via public/img/
- 🧹 Clean project structure and code splitting

---

## 🔧 Important Configurations

- API proxy setup (`vite.config.ts`) for local FastAPI backend:

```ts
proxy: {
  '/api': {
    target: 'http://localhost:8778',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api/, ''),
  },
}
```

- Favicon can be changed by placing a new `favicon.ico` inside the `public/` folder.

---

## 🤝 Contributing

We welcome contributions to make this project better!

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before making a pull request.

### How to Contribute

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

---

## 📜 License

This project is licensed under the terms of the [MIT License](LICENSE).

MIT License

Copyright (c) 2024 Ather Ashraf

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## 👨‍💻 Developed by

**Ather Ashraf**

- LinkedIn: [https://sa.linkedin.com/in/ather-ashraf](https://sa.linkedin.com/in/ather-ashraf)
- Google Scholar: [https://scholar.google.com.pk/citations?user=XbqhyrsAAAAJ&hl=en](https://scholar.google.com.pk/citations?user=XbqhyrsAAAAJ&hl=en)

---

