// ================= NAVBAR TOGGLE =================
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ================= NAVBAR SCROLL SHADOW =================
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scroll-shadow");
    } else {
        navbar.classList.remove("scroll-shadow");
    }
});

// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        // Close mobile menu after clicking a link
        if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
        }
    });
});
