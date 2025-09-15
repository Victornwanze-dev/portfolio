// create floating particles
const hero = document.getElementById ("hero");

for (let i=0;i < 30; i++) {
    let particle = document.createElement ("div");
    particle.classList.add("particle");
    particle.style.left = Math.random() *100 + "vw";
    particle.style.animationDuration =4 + Math.random() *6 + "s";
    particle.style.opacity =Math.random();
    hero.appendChild(particle)
}

// contact form (basic handler)
document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert ("Thanks for reaching out! Your message has been received.") ;
}) ;

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector ('.nav-links');

menuToggle.addEventListener ('click', ()=> {
    navLinks.classList.toggle ('show');
});


function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add ("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
