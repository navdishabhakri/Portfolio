const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");
menuIcon.onclick = () => {
  navLinks.classList.toggle("active");
};

let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? "block" : "none";
  });

  dots.forEach((dot, index) => {
    dot.className = index === slideIndex ? "dot active" : "dot";
  });
}

function moveSlide(n) {
  const slides = document.querySelectorAll(".slide");
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  showSlides();
}

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

// Initialize the slider
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.querySelector(".dots");

  // Create dots dynamically based on slides
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.addEventListener("click", () => currentSlide(index));
    dotsContainer.appendChild(dot);
  });

  showSlides();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
