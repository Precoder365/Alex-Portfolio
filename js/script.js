const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 0);
});

// Scroll reveal

let sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
});

sr.reveal(".showcase-info",{delay:100});
sr.reveal(".showcase-image",{origin:"top",delay:200});