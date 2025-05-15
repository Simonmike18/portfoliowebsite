// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

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

// Animate Pricing Cards
gsap.utils.toArray(".pricing-card").forEach((card, index) => {
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

// Handle Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simulate form submission (you can replace this with an actual API call)
    alert(`Thank you, ${name}! Your message has been sent.\nEmail: ${email}\nMessage: ${message}`);
    
    // Reset form
    this.reset();
});

// Handle Pricing Plan Selection
document.querySelectorAll(".select-plan").forEach(button => {
    button.addEventListener("click", function () {
        const plan = this.getAttribute("data-plan");
        alert(`You have selected the ${plan} plan! We'll get in touch to finalize your subscription.`);
    });
});