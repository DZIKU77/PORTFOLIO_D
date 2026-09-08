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

// 3. Efekt 3D Tilt na Kartach (Lekkie odchylanie przy najechaniu myszką)
    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    });

    // 4. Kopiowanie linku do schowka z informacją powiadomienia
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const link = btn.getAttribute('data-link');
            navigator.clipboard.writeText(link).then(() => {
                const originalText = btn.textContent;
                btn.textContent = '✅ Skopiowano!';
                btn.style.borderColor = '#10b981';
                btn.style.color = '#10b981';

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.borderColor = '';
                    btn.style.color = '';
                }, 2000);
            });
        });
    });