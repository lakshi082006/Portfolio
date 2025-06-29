# Lakshitha - Personal Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a web developer. Built with vanilla HTML, CSS, and JavaScript, featuring smooth animations, dark/light theme toggle, and mobile-first responsive design.

## 🌟 Features

- *Responsive Design*: Fully responsive layout that works on all devices
- *Dark/Light Theme*: Toggle between dark and light themes with smooth transitions
- *Smooth Animations*: CSS animations and JavaScript-powered scroll animations
- *Interactive Elements*: Typing animation, skill progress bars, and project modals
- *Modern UI*: Clean, professional design with gradient backgrounds and shadows
- *Contact Form*: Functional contact form with validation
- *Project Showcase*: Interactive project cards with detailed modal views
- *Mobile Navigation*: Hamburger menu for mobile devices
- *Smooth Scrolling*: Smooth navigation between sections
- *Performance Optimized*: Lazy loading and intersection observers for better performance

## 🛠 Technologies Used

- *HTML5*: Semantic markup and modern HTML features
- *CSS3*: 
  - CSS Custom Properties (CSS Variables)
  - Flexbox and CSS Grid
  - Animations and Transitions
  - Media Queries for responsive design
  - Modern CSS techniques (backdrop-filter, gradients)
- *JavaScript (ES6+)*:
  - DOM manipulation
  - Event handling
  - Intersection Observer API
  - Local Storage for theme persistence
  - Form validation
  - Dynamic content loading

## 📁 Project Structure
```
portfolio/
│
├── index.html          # Main HTML file
├── style.css           # Main stylesheet
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── assets/
    └── Lakshitha_S_cv_6424.pdf  # Resume file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. *Clone the repository*
   bash
   git clone https://github.com/lakshi082006/Portfolio.git
   cd Portfolio
   

2. *Open the project*
   - Simply open index.html in your web browser
   - Or use a local server for development:
     bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using Live Server (VS Code extension)
     # Right-click on index.html and select "Open with Live Server"
     

3. *View the website*
   - Open your browser and navigate to the local server URL
   - The website should load with all animations and functionality

## 📱 Responsive Breakpoints

- *Desktop*: 1200px and above
- *Tablet*: 768px - 1199px
- *Mobile*: Below 768px
- *Small Mobile*: Below 480px

## 🎨 Color Scheme

### Light Theme
- Primary: #6366f1 (Indigo)
- Secondary: #8b5cf6 (Purple)
- Accent: #06b6d4 (Cyan)
- Background: #ffffff (White)
- Text: #1f2937 (Dark Gray)

### Dark Theme
- Background: #111827 (Dark Blue Gray)
- Cards: #1f2937 (Gray)
- Text: #f9fafb (Light Gray)
- Same accent colors for consistency

## ⚡ Performance Features

- *Intersection Observer*: For scroll-triggered animations
- *Lazy Loading*: Images load when they come into view
- *CSS Animations*: Hardware-accelerated animations
- *Optimized Assets*: Compressed images and minified code
- *Local Storage*: Theme preference persistence

## 📧 Contact Form

The contact form includes:
- Real-time validation
- Error message display
- Loading states
- Email format validation
- Required field validation

## 🔧 Customization

### Changing Colors
Edit the CSS custom properties in style.css:
css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  /* ... other variables */
}


### Adding Projects
Update the projectData object in script.js:
javascript
const projectData = {
  3: {
    title: "Your New Project",
    description: "Project description",
    technologies: ["Tech1", "Tech2"],
    // ... other properties
  }
}


### Modifying Content
- Update personal information in index.html
- Modify skills and percentages in the skills section
- Update social media links in the footer

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Future Enhancements

- [ ] Blog section integration
- [ ] CMS integration for easy content updates
- [ ] Advanced animations with GSAP
- [ ] PWA (Progressive Web App) features
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] SEO optimization improvements

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

*Lakshitha S*
- Email: lakshitha882006@gmail.com
- Phone: +91 6374 394 132
- Location: Chennai, India
- GitHub: [@lakshi082006](https://github.com/lakshi082006)
- LinkedIn: [Lakshitha S](https://www.linkedin.com/in/lakshitha-s-2aa4262b6/)

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography (Inter font family)
- CSS Grid and Flexbox for layout
- Intersection Observer API for scroll animations
- Modern CSS features for styling

---

⭐ If you found this project helpful, please give it a star on GitHub!
```
