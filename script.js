// ── Navbar: hamburger toggle ──────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a nav link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ── Navbar: shadow on scroll ───────────────────────────────────────────────────
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 40
        ? '0 1px 24px rgba(0, 0, 0, 0.4)'
        : 'none';
}, { passive: true });

// ── Scroll progress bar ────────────────────────────────────────────────────────
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    progressBar.style.width = Math.min(pct, 100) + '%';
}, { passive: true });

// ── Fade-up animation via IntersectionObserver ────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll(
        '.project-card, .skill-category, .timeline-item, .highlight-item, .blog-card, .award-item'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // fire once
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

    targets.forEach((el, i) => {
        el.classList.add('fade-up');
        // Stagger within the same grid row
        el.style.transitionDelay = (i % 4) * 60 + 'ms';
        observer.observe(el);
    });
});
