// DRAWER
const menuBtn = document.getElementById("menuBtn");
const drawer = document.getElementById("drawer");

if (menuBtn && drawer) {
  menuBtn.addEventListener("click", () => {
    drawer.classList.toggle("open");
  });

  // Fermer le drawer après clic
  document.querySelectorAll(".drawer a").forEach(link => {
    link.addEventListener("click", () => {
      drawer.classList.remove("open");
    });
  });
}

// SLIDER (uniquement sur index.html)
const slides = document.querySelectorAll(".slide");
let index = 0;

if (slides.length > 0) {
  const showSlide = (i) => {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
  };

  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 5000);

  const next = document.getElementById("next");
  const prev = document.getElementById("prev");

  if (next && prev) {
    next.onclick = () => {
      index = (index + 1) % slides.length;
      showSlide(index);
    };

    prev.onclick = () => {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    };
  }
}

// SCROLL ANIMATION
const fadeElements = document.querySelectorAll(".fade-up");

window.addEventListener("scroll", () => {
  fadeElements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.classList.add("visible");
    }
  });
});

// DOMAIN ICON CLICK EFFECT
const domainIcons = document.querySelectorAll(".domain-icon");

domainIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    domainIcons.forEach(i => i.classList.remove("active"));
    icon.classList.add("active");
  });
});

// TESTIMONIALS SLIDER
const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");
let testimonialIndex = 0;

function showTestimonial(index) {
  testimonials.forEach(t => t.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));

  testimonials[index].classList.add("active");
  dots[index].classList.add("active");
}

setInterval(() => {
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  showTestimonial(testimonialIndex);
}, 5000);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    testimonialIndex = i;
    showTestimonial(i);
  });
});

// EVENTS ACTIVE DATE
const eventItems = document.querySelectorAll(".event-item");
const eventDates = document.querySelectorAll(".event-date");

eventItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    eventDates.forEach(d => d.classList.remove("active"));
    eventDates[index].classList.add("active");
  });
});

document.querySelector(".newsletter-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Merci pour votre inscription 🙏");
});

// CONSULTATION TABS
const tabButtons = document.querySelectorAll(".tab-btn");
const tabTexts = document.querySelectorAll(".tab-text");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tabButtons.forEach(b => b.classList.remove("active"));
    tabTexts.forEach(t => t.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});
