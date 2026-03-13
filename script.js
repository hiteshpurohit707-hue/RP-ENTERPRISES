/* ================= BUTTON MESSAGE ================= */

function showMessage(){
alert("Thank you! Our team will contact you soon.");
}


/* ================= SCROLL ANIMATION ================= */

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

const windowHeight = window.innerHeight;
const revealPoint = 120;

reveals.forEach(element => {

const revealTop = element.getBoundingClientRect().top;

if(revealTop < windowHeight - revealPoint){
element.classList.add("active");
}

});
// LOADER COUNTER
let progress = 0;
const progressSpan = document.getElementById('progress');
const loader = document.getElementById('loader');
const circle = document.getElementById('progress-bar');

const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

function setProgress(percent){
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

const interval = setInterval(() => {
  progress++;
  progressSpan.textContent = progress;
  setProgress(progress);

  if(progress >= 100){
    clearInterval(interval);
    loader.style.transition = "opacity 0.5s ease";
    loader.style.opacity = "0";
    setTimeout(()=>loader.style.display="none",500);
  }
}, 30);
