const header = document.querySelector("header");

const ml_section=document.querySelector(".milestones");
const ml_counters=document.querySelectorAll(".number span");

const navLinks = document.querySelectorAll(".nav-link");

const hamburger = document.querySelector(".hamburger");

window.addEventListener("scroll", () => {
  activeLink();
  header.classList.toggle("scrolled", window.scrollY > 0);
  if(!mlPlayed) mlCounter();
});

// Scroll reveal

let sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
});

sr.reveal(".showcase-info",{delay:100});
sr.reveal(".showcase-image",{origin:"top",delay:200});

function hasReached(element) {
  const elementTop = element.getBoundingClientRect().top;
  if (window.innerHeight >= elementTop + element.offsetHeight) {
    return true;
  }
  return false;
}

// Counter

function updateCount(num, maxNum){
  let currentNum=+num.innerText;
  if(currentNum<maxNum){
    num.innerText=currentNum+1;
    setTimeout(()=>{
      updateCount(num,maxNum);
    },25);
  }
}

let mlPlayed=false;

function mlCounter() {
  if(!hasReached(ml_section)) return;
  mlPlayed=true;
  ml_counters.forEach(ctr=>{
    let target=+ctr.dataset.target;
    console.log(target);
    setTimeout(()=>{
      updateCount(ctr,target);
    },400);
  });
}

// Carousel

const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 500,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});

// To make navlink active

function activeLink(){
  let sections=document.querySelectorAll("section[id");
  let passedSections=Array.from(sections).map((sct,i)=>{
    return {
      y: sct.getBoundingClientRect().top-header.offsetHeight,
      id:i,
    };
  }).filter(sct=>sct.y<=0);

  let currentSectionID=passedSections.at(-1).id;

  navLinks.forEach(l=>l.classList.remove("active"));
  navLinks[currentSectionID].classList.add("active");

}

// Hamburger

hamburger.addEventListener("click",()=>{
 document.body.classList.toggle("open");
 document.body.classList.toggle("stopScrolling");
});

navLinks.forEach(link=>link.addEventListener("click",()=>{
  document.body.classList.remove("open");
  document.body.classList.remove("stopScrolling");
}));