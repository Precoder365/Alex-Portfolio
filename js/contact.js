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

// Form validation

const form = document.querySelector("form");
if(form){
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");

  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (name.value==="" || email.value === "" || message.value === "") {
      alert("Please enter all fields");
    } if(name.value.length < 3){
      alert("Name must be at least 3 characters long");
    }
    else {
      alert("Message sent!");
      email.value = "";
      message.value = "";
    }
  });
}