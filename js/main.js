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

// ===== CONTACT FORM -> WHATSAPP =====
const whatsappForm = document.getElementById("whatsappForm");

if (whatsappForm) {
  whatsappForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const prenoms = document.getElementById("prenoms").value.trim();
    const email = document.getElementById("email").value.trim();
    const telephone = document.getElementById("telephone").value.trim();
    const message = document.getElementById("message").value.trim();

    const whatsappMessage =
      `📩 *NOUVEAU MESSAGE – SITE BOKONON AGBA*\n\n` +
      `👤 *Nom* : ${nom}\n` +
      `👤 *Prénoms* : ${prenoms}\n` +
      `📧 *Email* : ${email}\n` +
      `📞 *Téléphone* : ${telephone}\n\n` +
      `📝 *Message* :\n${message}`;

    const phoneNumber = "22962620000";
    const whatsappURL =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");
  });
}

// ===== CONSULTATION FORM -> WHATSAPP =====
const consultationForm = document.getElementById("consultationWhatsappForm");

if (consultationForm) {
  consultationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nom = document.getElementById("c-nom").value.trim();
    const prenoms = document.getElementById("c-prenoms").value.trim();
    const email = document.getElementById("c-email").value.trim();
    const telephone = document.getElementById("c-telephone").value.trim();
    const adresse = document.getElementById("c-adresse").value.trim();
    const pays = document.getElementById("c-pays").value.trim();
    const probleme = document.getElementById("c-probleme").value.trim();

    const message =
      `🧿 *DEMANDE DE CONSULTATION – SITE BOKONON AGBA*\n\n` +
      `👤 *Nom* : ${nom}\n` +
      `👤 *Prénoms* : ${prenoms}\n` +
      `📧 *Email* : ${email}\n` +
      `📞 *Téléphone* : ${telephone}\n` +
      `🏠 *Adresse* : ${adresse || "Non précisée"}\n` +
      `🌍 *Pays* : ${pays || "Non précisé"}\n\n` +
      `📝 *Problème décrit* :\n${probleme}`;

    const phoneNumber = "22962620000";
    const whatsappURL =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  });
}

document.querySelectorAll(".page-transition").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const href = link.getAttribute("href");
    document.getElementById("pageFade").classList.add("active");

    setTimeout(() => {
      window.location.href = href;
    }, 400);
  });
});

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();






