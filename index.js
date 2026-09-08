const typewriterElement = document.getElementById('typewriter');

// Tutaj wpisz teksty, które mają się zmieniać:
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
    // Kasowanie znaków
    typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    // Pisanie znaków
    typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  // Ustawienie prędkości pisania / kasowania
  let typeSpeed = isDeleting ? 50 : 100;

  // Gdy całe słowo zostanie napisane
  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 2000; // Czas pauzy przed rozpoczęciem kasowania (2 sekundy)
    isDeleting = true;
  } 
  // Gdy słowo zostanie całkowicie skasowane
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // Przejście do następnego słowa
    typeSpeed = 500; // Pauza przed pisaniem kolejnego słowa
  }

  setTimeout(typeEffect, typeSpeed);
}

// Uruchomienie efektu po załadowaniu strony
document.addEventListener('DOMContentLoaded', typeEffect);

const cursorGlow = document.getElementById('cursorGlow');
if(window.innerWidth > 768){
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
}