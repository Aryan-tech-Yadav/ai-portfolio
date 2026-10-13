"use strict";

// ========================================
// 1. MOBILE NAVIGATION
// ========================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        // CSS uses "open", so JavaScript must use "open" too.
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    // Close the menu after clicking a navigation link.
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });
    });

    // Close the menu when Escape is pressed.
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            navLinks.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        }
    });
}


// ========================================
// 2. FOOTER YEAR
// ========================================

const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// ========================================
// 3. CONSOLE MESSAGE
// ========================================

console.log("AryanAI Portfolio loaded successfully!");