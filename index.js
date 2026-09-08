const typewriterElement = document.getElementById('typewriter');

const words = [
  "Game Developerem w C++.",
  "Web Developerem.",
  "Pasjonatem Technologii.",
  "Twórcą No Gods Ahead."
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } 
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 500;
  }

  setTimeout(typeEffect, typeSpeed);
}

document.addEventListener('DOMContentLoaded', typeEffect);

const cursorGlow = document.getElementById('cursorGlow');
if(window.innerWidth > 768){
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
}

const statNumbers = document.querySelectorAll('.stat-number');
let animated = false;

function animateStats() {
    const triggerBottom = window.innerHeight * 0.85;
    
    statNumbers.forEach(num => {
        const top = num.getBoundingClientRect().top;
        if (top < triggerBottom && !animated) {
            const target = +num.getAttribute('data-target');
            let count = 0;
            const speed = target / 30;

            const updateCount = () => {
                count += speed;
                if (count < target) {
                    num.textContent = Math.ceil(count) + (target === 100 ? '%' : '');
                    setTimeout(updateCount, 40);
                } else {
                    num.textContent = target + (target === 100 ? '%' : '');
                }
            };

            updateCount();
        }
    });
}

window.addEventListener('scroll', animateStats);
animateStats();