# 🚀 Vilay Bende - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean design, dark/light theme switching, and smooth animations.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **🎨 Modern Design** - Clean, professional layout with smooth animations
- **🌙 Dark/Light Theme** - Toggle between themes with persistent preference
- **📱 Responsive** - Fully responsive design for all devices
- **⚡ Fast Performance** - Optimized with React and TypeScript
- **🎯 Typing Animation** - Custom typing effect for role display
- **🔄 Smooth Scrolling** - AOS animations for enhanced UX
- **🎪 Interactive Components** - Carousel, cards, and dynamic content

## 🛠️ Tech Stack

### **Frontend**

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Headless UI** - Accessible UI components
- **Heroicons** - Beautiful SVG icons

### **Animations & Effects**

- **AOS (Animate On Scroll)** - Scroll-triggered animations
- **Custom Typing Effect** - Reusable typing animation component
- **CSS Transitions** - Smooth hover and state transitions

### **Development Tools**

- **Create React App** - Zero-configuration build tool
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/vilay1702/vilay-portfolio.git
   cd vilay-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🚀 Available Scripts

| Command         | Description                      |
| --------------- | -------------------------------- |
| `npm start`     | Runs the app in development mode |
| `npm run build` | Builds the app for production    |
| `npm test`      | Launches the test runner         |
| `npm run eject` | Ejects from Create React App     |

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation component
│   ├── Home.tsx        # Hero section
│   ├── Skills.tsx      # Skills display
│   ├── Education.tsx   # Education cards
│   ├── Experience.tsx  # Work experience
│   ├── PoR.tsx         # Positions of responsibility
│   ├── Projects.tsx    # Project showcase
│   ├── Certificates.tsx # Certificate carousel
│   ├── Contact.tsx     # Contact information
│   ├── Footer.tsx      # Footer with theme toggle
│   ├── TypingEffect.tsx # Custom typing animation
│   ├── Carousel.tsx    # Image carousel component
│   └── index.ts        # Component exports
├── types/              # TypeScript interfaces
│   └── index.ts        # Shared data types
├── data.ts             # Portfolio content
├── ThemeContext.tsx    # Theme management
├── App.tsx             # Main application
└── index.css           # Global styles
```

## 🎨 Customization

### **Adding New Content**

1. **Update data.ts** - Modify the content constants
2. **Add images** - Place in `src/images/` directory
3. **Update types** - Add new interfaces in `src/types/index.ts`

### **Styling**

- **Tailwind CSS** - Use utility classes for styling
- **Custom CSS** - Add custom styles in `src/index.css`
- **Theme colors** - Modify theme context for custom colors

### **Components**

- **Reusable components** - TypingEffect, Carousel, etc.
- **Component-specific interfaces** - Props interfaces in component files
- **Shared types** - Data interfaces in `src/types/index.ts`

## 🌟 Key Components

### **TypingEffect**

```tsx
<TypingEffect
  texts={["React Developer", "TypeScript", "Full Stack"]}
  typingInterval={80}
  deletingInterval={50}
  pauseBeforeDelete={2000}
/>
```

### **Theme Context**

```tsx
const { theme, toggleTheme } = useContext(ThemeContext);
```

### **AOS Animations**

```tsx
<div data-aos="fade-up" data-aos-delay="200">
  Content with animation
</div>
```

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints**: sm, md, lg, xl
- **Flexible layouts** with Tailwind CSS
- **Touch-friendly** interactions

## 🎯 Performance

- **Optimized builds** with Create React App
- **Code splitting** for better loading
- **Image optimization** for faster loading
- **Minified CSS/JS** for production

## 🔧 Development

### **Adding New Sections**

1. Create component in `src/components/`
2. Add to `src/components/index.ts`
3. Import and use in `src/App.tsx`
4. Add data to `src/data.ts`

### **TypeScript**

- **Strict mode** enabled
- **Interface definitions** for all data
- **Type safety** throughout the application

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

- **Portfolio**: [vilaybende.com](https://vilaybende.com)
- **LinkedIn**: [vilaybende](https://linkedin.com/in/vilaybende)
- **GitHub**: [vilay1702](https://github.com/vilay1702)
- **Email**: vilay17bende@gmail.com

## 🙏 Acknowledgments

- **Create React App** - For the excellent development setup
- **Tailwind CSS** - For the utility-first CSS framework
- **Headless UI** - For accessible UI components
- **AOS** - For smooth scroll animations

---

⭐ **Star this repository if you found it helpful!**
