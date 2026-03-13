/* ================= LOADER COUNTER ================= */

document.addEventListener("DOMContentLoaded", function(){

let progress = 0;

const progressSpan = document.getElementById("progress");
const loader = document.getElementById("loader");
const circle = document.getElementById("progress-bar");

const radius = circle.getAttribute("r");
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

function setProgress(percent){
const offset = circumference - (percent / 100) * circumference;
circle.style.strokeDashoffset = offset;
}

const interval = setInterval(function(){

progress++;

progressSpan.textContent = progress;

setProgress(progress);

if(progress >= 100){

clearInterval(interval);

loader.style.opacity = "0";

setTimeout(function(){
loader.style.display = "none";
},500);

}

},30);

});
