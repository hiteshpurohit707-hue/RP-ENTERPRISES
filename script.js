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

});
/* ================= LOADER ================= */
/* ================= LOADER ANIMATION ================= */

let progress = 0;
let loader = document.getElementById("loader");
let number = document.getElementById("progress");

let interval = setInterval(() => {

progress++;

number.textContent = progress;

if(progress >= 100){

clearInterval(interval);

setTimeout(() => {

loader.style.opacity = "0";

setTimeout(()=>{
loader.style.display = "none";
},500);

},500);

}

},50);
