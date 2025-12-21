// ================= NAVBAR TOGGLE =================
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const navbar = document.querySelector(".navbar");

// Toggle mobile menu
if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");
        navToggle.setAttribute("aria-expanded", isOpen);
    });
}

// Close menu when clicking a nav link (mobile UX)
navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
    });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
    if (
        !navLinks.contains(e.target) &&
        !navToggle.contains(e.target)
    ) {
        navLinks.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
    }
});

// Close menu on ESC key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        navLinks.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
    }
});

// ================= NAVBAR SCROLL SHADOW =================
window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        navbar.classList.add("scroll-shadow");
    } else {
        navbar.classList.remove("scroll-shadow");
    }
});
