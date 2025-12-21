// ================= NAVBAR TOGGLE =================
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");
        navToggle.setAttribute("aria-expanded", isOpen);
    });
}

// Close mobile menu when resizing to desktop
window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        navToggle.setAttribute("aria-expanded", false);
    }
});

// Navbar shadow on scroll
window.addEventListener("scroll", () => {
    navbar.classList.toggle("scroll-shadow", window.scrollY > 50);
});

// Smooth scroll + close mobile menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
        navLinks.classList.remove("active");
        navToggle.setAttribute("aria-expanded", false);
    });
});
