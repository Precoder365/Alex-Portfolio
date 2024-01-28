const header = document.querySelector("header");

const ml_section=document.querySelector(".milestones");
const ml_counters=document.querySelectorAll(".number span");

window.addEventListener("scroll", () => {
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