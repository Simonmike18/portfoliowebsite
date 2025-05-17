// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Optimize GSAP for Mobile Performance
ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
});

// Animate Hero Section
gsap.to(".hero-title", {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: "power3.out"
});

gsap.to(".hero-subtitle", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.5,
    ease: "power3.out"
});

gsap.to(".cta-button", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 1,
    ease: "power3.out"
});

// Animate Expertise Cards
gsap.utils.toArray(".expertise-card").forEach((card, index) => {
    gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.2,
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
});

// Animate Service Cards
gsap.utils.toArray(".service-card").forEach((card, index) => {
    gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.2,
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
});

// Animate Project Cards
gsap.utils.toArray(".project-card").forEach((card, index) => {
    gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.2,
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
});

// Animate Testimonial Cards
gsap.utils.toArray(".testimonial-card").forEach((card, index) => {
    gsap.to(card, {
        opacity: 1,
        x: 0,
    duration: 0.8,
        delay: index * 0.3,
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
});

// Animate Contact Section
gsap.to("#contact-form", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    scrollTrigger: {
        trigger: "#contact-form",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

// Handle Navigation Toggle
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close Navigation Menu When a Link is Clicked (Mobile)
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        if (navMenu.classList.contains("active")) {
            navToggle.classList.remove("active");
            navMenu.classList.remove("active");
        }
    });
});

// Handle Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const formMessage = document.getElementById("form-message");
    const form = this;

    formMessage.style.display = "block";
    formMessage.textContent = "Sending your message...";

    fetch("https://formspree.io/f/xrbqjpqe", {
        method: "POST",
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            form.reset();
            formMessage.style.display = "block";
            formMessage.textContent = "Message Sent Successfully!";
            setTimeout(() => {
                formMessage.style.transition = "opacity 1s ease";
                formMessage.style.opacity = "0";
                setTimeout(() => {
                    formMessage.style.display = "none";
                    formMessage.style.opacity = "1";
                    window.location.href = "https://simonmike18.github.io/portfoliowebsite/#contact";
                }, 1000);
            }, 3000);
        } else {
            formMessage.style.display = "block";
            formMessage.textContent = "Error: Failed to send message. Please try again.";
        }
    })
    .catch(error => {
        console.error("Form submission error:", error);
        formMessage.style.display = "block";
        formMessage.textContent = "Error: Failed to send message. Please try again.";
    });
});

// Back-to-Top Button
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});