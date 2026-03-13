// mobile menu

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
nav.classList.toggle("active");
});


// smooth scroll

function scrollToSection(id){
document.getElementById(id).scrollIntoView({
behavior:"smooth"
});
}


// contact form message

document
.getElementById("contactForm")
.addEventListener("submit", function(e){

e.preventDefault();
document.getElementById("msg").innerText="Message Sent Successfully!";
});
