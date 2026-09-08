const cursorGlow = document.getElementById('cursorGlow');
if(window.innerWidth > 768){
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
}