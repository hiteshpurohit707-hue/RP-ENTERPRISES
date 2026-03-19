/* ================= BUTTON MESSAGE ================= */
function showMessage(){
alert("Thank you! Our team will contact you soon.");
}


/* ================= SCROLL REVEAL ================= */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
const windowHeight = window.innerHeight;
const revealPoint = 120;

reveals.forEach(el => {
const top = el.getBoundingClientRect().top;

if(top < windowHeight - revealPoint){
el.classList.add("active");
}
});
}

window.addEventListener("scroll", revealOnScroll);


/* ================= LOADER ================= */
let progress = 0;

const progressSpan = document.getElementById("progress");
const loader = document.getElementById("loader");
const circle = document.getElementById("progress-bar");

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

// smooth fade out
loader.style.opacity = "0";
loader.style.transition = "opacity 0.6s ease";

setTimeout(()=>{
loader.style.display = "none";
document.body.style.overflow = "auto";
},600);
}

},20);


/* ================= MOBILE MENU ================= */
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
navMenu.classList.toggle("active");
});


/* ================= HEADER SCROLL EFFECT ================= */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
if(window.scrollY > 50){
header.style.background = "rgba(0,0,0,0.7)";
}
else{
header.style.background = "rgba(255,255,255,0.07)";
}
});
