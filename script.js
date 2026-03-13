/* BUTTON MESSAGE */

function showMessage(){
alert("Thank you! Our team will contact you soon.");
}


/* SCROLL REVEAL */

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", function(){

const windowHeight = window.innerHeight;
const revealPoint = 120;

reveals.forEach(function(element){

const revealTop = element.getBoundingClientRect().top;

if(revealTop < windowHeight - revealPoint){
element.classList.add("active");
}

});

});


/* LOADER */

document.addEventListener("DOMContentLoaded", function(){

let progress = 0;

const progressText = document.getElementById("progress");
const loader = document.getElementById("loader");
const website = document.getElementById("website");
const circle = document.getElementById("progress-bar");

const radius = 100;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;

function setProgress(percent){

const offset = circumference - (percent/100)*circumference;

circle.style.strokeDashoffset = offset;

}

const loaderInterval = setInterval(function(){

progress++;

progressText.textContent = progress;

setProgress(progress);

if(progress >= 100){

clearInterval(loaderInterval);

loader.style.opacity = "0";

setTimeout(function(){

loader.style.display = "none";
website.style.display = "block";

},500);

}

},35);

});
