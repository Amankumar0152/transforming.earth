// Hero Section Functions
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start).toLocaleString();
        }
    }, 16);
}

// Start counters when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Animate the statistics numbers
    setTimeout(() => {
        const treesPlanted = document.getElementById('treesPlanted');
        const earthHealed = document.getElementById('earthHealed');
        const volunteers = document.getElementById('volunteers');
        
        if (treesPlanted) animateCounter(treesPlanted, 4287956);
        if (earthHealed) animateCounter(earthHealed, 892);
        if (volunteers) animateCounter(volunteers, 56324);
    }, 1000);
});

// Smooth scroll to content
function scrollToContent() {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        window.scrollTo({
            top: heroHeight,
            behavior: 'smooth'
        });
    }
}

// Add scroll event listener to scroll indicator
document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', scrollToContent);
    }
});

// Parallax effect on scroll
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBg = document.querySelector('.hero-background');
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Optional: Leaf particles effect (remove if too heavy)
function createLeaf() {
    const leaf = document.createElement('div');
    leaf.innerHTML = '🍃';
    leaf.style.position = 'fixed';
    leaf.style.top = '-50px';
    leaf.style.left = Math.random() * window.innerWidth + 'px';
    leaf.style.fontSize = (20 + Math.random() * 15) + 'px';
    leaf.style.opacity = '0.7';
    leaf.style.pointerEvents = 'none';
    leaf.style.zIndex = '1';
    document.body.appendChild(leaf);
    
    const animation = leaf.animate([
        { transform: `translate(0, 0) rotate(0deg)`, opacity: 0.7 },
        { transform: `translate(${Math.random() * 100 - 50}px, ${window.innerHeight + 50}px) rotate(${360 + Math.random() * 360}deg)`, opacity: 0 }
    ], {
        duration: 3000 + Math.random() * 4000,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    });
    
    animation.onfinish = () => leaf.remove();
}

// Uncomment below line if you want the leaf effect
// setInterval(createLeaf, 800);