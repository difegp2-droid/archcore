// Simple intersection observer to add animations on scroll
document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations for sections
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select elements to animate
    const bentoCards = document.querySelectorAll('.bento-card');
    const timelineSteps = document.querySelectorAll('.timeline-content');
    const ecoItems = document.querySelectorAll('.eco-item');
    const heroVisual = document.querySelectorAll('.hero-visual');

    // Add base styles for animation before observing
    [...bentoCards, ...timelineSteps, ...ecoItems, ...heroVisual].forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(el);
    });

    // Add a class for elements that become visible
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .visible {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        </style>
    `);
});
