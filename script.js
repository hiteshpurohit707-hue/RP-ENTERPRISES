// LOADER
let progress = 0;
const loader = document.getElementById("loader");
const progressSpan = document.getElementById("progress");
const circle = document.getElementById("progress-bar");

const radius = 90;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;

function setProgress(p){
circle.style.strokeDashoffset = circumference - (p/100)*circumference;
}

const interval = setInterval(()=>{
progress++;
progressSpan.textContent = progress;
setProgress(progress);

if(progress >= 100){
clearInterval(interval);
loader.style.display = "none";
}
},20);


// SCROLL ANIMATION
window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight - 100){
el.classList.add("active");
}
});
});


// MOBILE MENU
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click",()=>{
nav.classList.toggle("active");
});
