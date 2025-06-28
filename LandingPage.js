// Initialize AOS (Animate On Scroll) library
AOS.init({offset:0});

// Navbar scroll effect - change background when scrolling
window.addEventListener("scroll", function () {
    let nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

// Typewriter effect for the "Developer" text
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".typing-text");
    const text = "Developer";
    let index = 0;

    function typeText() {
        textElement.textContent = text.slice(0, index);
        index++;

        if (index > text.length) {
            setTimeout(eraseText, 1000); // Pause before erasing
        } else {
            setTimeout(typeText, 200); // Typing speed
        }
    }

    function eraseText() {
        index--;
        textElement.textContent = text.slice(0, index);

        if (index === 0) {
            setTimeout(typeText, 500); // Pause before retyping
        } else {
            setTimeout(eraseText, 100); // Erasing speed
        }
    }

    typeText(); // Start the effect
});

// Mobile Menu Toggle function
function toggleMenu() {
    let dropdown = document.querySelector(".dropdown");
    dropdown.classList.toggle("show");
}

// Hide navbar and show return button when scrolling to skills section
window.addEventListener("scroll", function () {
    let nav = document.querySelector("nav");
    let returnHomeBtn = document.querySelector(".return-home-btn");
    let aboutSection = document.getElementById("skills");

    // Check if the skills section is in view
    if (window.scrollY > aboutSection.offsetTop) {
        nav.classList.add("hide-nav"); // Hide navbar when reaching skills section
        returnHomeBtn.classList.add("show"); // Show return button
    } else {
        nav.classList.remove("hide-nav");
        returnHomeBtn.classList.remove("show"); // Hide return button when above skills section
    }

    // Scroll event for navbar color change
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

// Scroll to the top when return button is clicked
document.querySelector(".return-home-btn").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Smooth scrolling for navigation links
document.querySelectorAll(".links a, .dropdown a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1); // Remove #
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
