function showMessage(){
alert("Thank you! Our team will contact you soon.");
}

/* SCROLL REVEAL */

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", ()=>{

const windowHeight = window.innerHeight;
const revealPoint = 120;

reveals.forEach(element=>{

const revealTop = element.getBoundingClientRect().top;

if(revealTop < windowHeight - revealPoint){
element.classList.add("active");
}

});

});

/* LOADER */

document.addEventListener("DOMContentLoaded", ()=>{

let progress = 0;

const progressText = document.getElementById("progress");
const loader = document.getElementById("loader");
const circle = document.getElementById("progress-bar");

const radius = circle.getAttribute("r");
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;

function setProgress(percent){

const offset = circumference - (percent/100)*circumference;

circle.style.strokeDashoffset = offset;

}

const interval = setInterval(()=>{

progress++;

progressText.textContent = progress;

setProgress(progress);

if(progress >= 100){

clearInterval(interval);

loader.style.opacity="0";

setTimeout(()=>{
loader.style.display="none";
},500);

}

},30);

});
