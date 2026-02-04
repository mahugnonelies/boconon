// DRAWER
const menuBtn = document.getElementById("menuBtn");
const drawer = document.getElementById("drawer");

menuBtn.addEventListener("click", () => {
  drawer.classList.toggle("open");
});

// SLIDER
const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 5000);

document.getElementById("next").onclick = () => {
  index = (index + 1) % slides.length;
  showSlide(index);
};

document.getElementById("prev").onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
};

