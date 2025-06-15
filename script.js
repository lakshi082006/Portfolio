// DOM Elements
const navbar = document.getElementById("navbar")
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")
const themeToggle = document.getElementById("theme-toggle")
const typingText = document.getElementById("typing-text")
const contactForm = document.getElementById("contact-form")
const projectModal = document.getElementById("project-modal")
const modalClose = document.querySelector(".modal-close")

// Typing Animation
const phrases = ["Frontend Developer", "UI/UX Designer", "Problem Solver", "Creative Thinker"]

let phraseIndex = 0
let charIndex = 0
let isDeleting = false

function typeEffect() {
  const currentPhrase = phrases[phraseIndex]

  if (isDeleting) {
    typingText.textContent = currentPhrase.substring(0, charIndex - 1)
    charIndex--
  } else {
    typingText.textContent = currentPhrase.substring(0, charIndex + 1)
    charIndex++
  }

  let typeSpeed = isDeleting ? 50 : 100

  if (!isDeleting && charIndex === currentPhrase.length) {
    typeSpeed = 2000
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    phraseIndex = (phraseIndex + 1) % phrases.length
    typeSpeed = 500
  }

  setTimeout(typeEffect, typeSpeed)
}

// Start typing animation
typeEffect()

// Navbar scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Mobile menu toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// Theme toggle
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"

  document.documentElement.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)

  // Update icon
  const icon = themeToggle.querySelector("i")
  icon.className = newTheme === "dark" ? "fas fa-sun" : "fas fa-moon"
})

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "light"
document.documentElement.setAttribute("data-theme", savedTheme)
const themeIcon = themeToggle.querySelector("i")
themeIcon.className = savedTheme === "dark" ? "fas fa-sun" : "fas fa-moon"

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated")

      // Animate skill bars
      if (entry.target.classList.contains("skill-category")) {
        const skillBars = entry.target.querySelectorAll(".skill-progress")
        skillBars.forEach((bar) => {
          const width = bar.getAttribute("data-width")
          setTimeout(() => {
            bar.style.width = width + "%"
          }, 200)
        })
      }
    }
  })
}, observerOptions)

// Observe all elements with animation class
document.querySelectorAll(".animate-on-scroll").forEach((el) => {
  observer.observe(el)
})

// Contact form validation and submission
contactForm.addEventListener("submit", async (e) => {
  e.preventDefault()

  const formData = new FormData(contactForm)
  const name = formData.get("name").trim()
  const email = formData.get("email").trim()
  const message = formData.get("message").trim()

  // Clear previous errors
  document.querySelectorAll(".error-message").forEach((error) => {
    error.textContent = ""
  })

  let isValid = true

  // Validate name
  if (name.length < 2) {
    document.getElementById("name-error").textContent = "Name must be at least 2 characters long"
    isValid = false
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    document.getElementById("email-error").textContent = "Please enter a valid email address"
    isValid = false
  }

  // Validate message
  if (message.length < 10) {
    document.getElementById("message-error").textContent = "Message must be at least 10 characters long"
    isValid = false
  }

  if (isValid) {
    const submitBtn = contactForm.querySelector('button[type="submit"]')
    submitBtn.classList.add("loading")

    // Simulate form submission
    setTimeout(() => {
      submitBtn.classList.remove("loading")
      alert("Thank you for your message! I'll get back to you soon.")
      contactForm.reset()
    }, 2000)
  }
})

// Project modal functionality
const projectData = {
  1: {
    title: "Personal portfolio",
    description: "A responsive portfolio website built with HTML, CSS, JavaScript, and Bootstrap to showcase my frontend skills, projects, and certifications with smooth animations and clean, accessible UI.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
    "Responsive design",
    "Smooth scroll and animations (GSAP, AOS)",
    "Project showcase with GitHub/demo links",
    "Interactive certificate modal viewer",
    "Mobile-first layout",
    "Clean and accessible UI",
    "Deployed on GitHub Pages"
    ],
    github: "https://github.com/lakshi082006/Portfolio.git",
    demo: "https://lakshi082006.github.io/Portfolio/",
  },
  2: {
    title: "Task Management App",
    description:
      "A responsive task management application with drag & drop functionality. Built with vanilla JavaScript and local storage for data persistence.",
    technologies: ["JavaScript", "CSS3", "HTML5", "Local Storage", "Drag & Drop API"],
    features: [
      "Create, edit, and delete tasks",
      "Drag and drop task organization",
      "Priority levels and due dates",
      "Local storage for data persistence",
      "Responsive design",
      "Dark/light theme toggle",
    ],
    github: "https://github.com/lakshi082006/Ace_Project_Lakshitha",
    demo: "https://lakshi082006.github.io/Ace_Project_Lakshitha/",
  },
}

// Project card click handlers
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    const projectId = card.getAttribute("data-project")
    showProjectModal(projectId)
  })
})

function showProjectModal(projectId) {
  const project = projectData[projectId]
  if (!project) return

  const modalBody = document.getElementById("modal-body")
  modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <p class="project-description">${project.description}</p>
        
        <h3>Technologies Used</h3>
        <div class="modal-tech">
            ${project.technologies.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
        </div>
        
        <h3>Key Features</h3>
        <ul class="feature-list">
            ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
        </ul>
        
        <div class="modal-buttons">
            <a href="${project.github}" class="btn btn-secondary" target="_blank">
                <i class="fab fa-github"></i> View Code
            </a>
            <a href="${project.demo}" class="btn btn-primary" target="_blank">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
        </div>
    `

  projectModal.style.display = "block"
  document.body.style.overflow = "hidden"
}

// Close modal
modalClose.addEventListener("click", closeModal)
projectModal.addEventListener("click", (e) => {
  if (e.target === projectModal) {
    closeModal()
  }
})

function closeModal() {
  projectModal.style.display = "none"
  document.body.style.overflow = "auto"
}

// Resume download
document.getElementById("download-resume").addEventListener("click", (e) => {
  e.preventDefault()
  alert("Resume download would be implemented here. Please add your actual resume file.")
})

// Add some additional CSS for modal content
const modalStyles = `
    .project-description {
        color: var(--text-secondary);
        margin-bottom: 2rem;
        line-height: 1.6;
    }
    
    .modal-tech {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 2rem;
    }
    
    .tech-tag {
        padding: 0.25rem 0.75rem;
        background: var(--primary-color);
        color: white;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 500;
    }
    
    .feature-list {
        margin-bottom: 2rem;
        padding-left: 1.5rem;
    }
    
    .feature-list li {
        color: var(--text-secondary);
        margin-bottom: 0.5rem;
        line-height: 1.5;
    }
    
    .modal-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
    }
    
    .modal h2 {
        color: var(--text-primary);
        margin-bottom: 1rem;
    }
    
    .modal h3 {
        color: var(--text-primary);
        margin: 1.5rem 0 1rem 0;
        font-size: 1.2rem;
    }
`

// Add modal styles to head
const styleSheet = document.createElement("style")
styleSheet.textContent = modalStyles
document.head.appendChild(styleSheet)

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && projectModal.style.display === "block") {
    closeModal()
  }
})

// Performance optimization: Lazy load images when they come into view
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target
      if (img.dataset.src) {
        img.src = img.dataset.src
        img.removeAttribute("data-src")
        imageObserver.unobserve(img)
      }
    }
  })
})

// Observe all images with data-src attribute
document.querySelectorAll("img[data-src]").forEach((img) => {
  imageObserver.observe(img)
})

console.log("Portfolio website loaded successfully! 🚀")
