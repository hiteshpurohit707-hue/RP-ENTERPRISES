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

const interval = setInterval(() => {
  progress++;
  progressSpan.textContent = progress;

  if(progress >= 100){
    clearInterval(interval);
    // Fade out loader smoothly
    loader.style.transition = "opacity 0.5s ease";
    loader.style.opacity = "0";
    setTimeout(()=>loader.style.display="none", 500);
  }
}, 30); // Adjust speed: lower = faster
