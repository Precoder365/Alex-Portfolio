const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 0);
});

// Scroll reveal

let sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
});

sr.reveal(".contact-info",{delay:100});
sr.reveal(".contact-img",{origin:"top",delay:200});

function hasReached(element) {
  const elementTop = element.getBoundingClientRect().top;
  if (window.innerHeight >= elementTop + element.offsetHeight) {
    return true;
  }
  return false;
}