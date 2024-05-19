updateParallax();

window.addEventListener('scroll', function() {
    requestAnimationFrame(updateParallax);
});

function updateParallax() {
    const layer1 = document.querySelector('.layer1');
    const layer2 = document.querySelector('.layer2');
    const scrollPosition = window.pageYOffset;
    
    layer1.style.transform = 'translateY(' + scrollPosition * 0.14 + 'px)';
    layer2.style.transform = 'translateY(' + scrollPosition * 0.17 + 'px)';
}