// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Navbar scroll effects
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.floating-nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Active nav link
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            document.querySelector(`a[href="#${entry.target.id}"]`).classList.add('active');
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('section').forEach(section => observer.observe(section));

// Counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 20);
    });
}

// Intersection observer for animations
const animateObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            if (entry.target.classList.contains('hero')) {
                animateCounters();
            }
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    animateObserver.observe(section);
});

// Theme toggle
document.querySelector('.theme-toggle').addEventListener('click', () => {
    const body = document.body;
    const icon = document.querySelector('.theme-toggle i');
    if (body.getAttribute('data-theme') === 'light') {
        body.setAttribute('data-theme', 'dark');
        icon.className = 'fas fa-moon';
    } else {
        body.setAttribute('data-theme', 'light');
        icon.className = 'fas fa-sun';
    }
});

// Form submission
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('🎉 Message sent! We\'ll reply in 24 hours.');
    e.target.reset();
});

// Portfolio hover
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px) scale(1.02)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// Navbar floating animation
document.querySelector('.floating-nav').addEventListener('mouseenter', () => {
    document.querySelector('.floating-nav').style.transform = 'translateX(-50%) scale(1.05)';
});
document.querySelector('.floating-nav').addEventListener('mouseleave', () => {
    document.querySelector('.floating-nav').style.transform = 'translateX(-50%) scale(1)';
});
