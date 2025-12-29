// Main JavaScript file for Quiz App

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation to quiz cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all quiz cards
document.addEventListener('DOMContentLoaded', () => {
    const quizCards = document.querySelectorAll('.quiz-card');
    quizCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Animate stopwatch hand
    const stopwatch = document.querySelector('.stopwatch::after');
    if (stopwatch) {
        let rotation = 0;
        setInterval(() => {
            rotation += 6;
            document.documentElement.style.setProperty('--stopwatch-rotation', `${rotation}deg`);
        }, 100);
    }
});

// Handle "Take a Quiz" button click
const takeQuizBtn = document.querySelector('.btn-primary');
if (takeQuizBtn) {
    takeQuizBtn.addEventListener('click', () => {
        const quizzesSection = document.querySelector('.quizzes-section');
        if (quizzesSection) {
            quizzesSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// Handle quiz card "Start" buttons
document.querySelectorAll('.btn-start').forEach(button => {
    button.addEventListener('click', (e) => {
        const quizCard = e.target.closest('.quiz-card');
        const quizTitle = quizCard.querySelector('h3').textContent;
        
        // Add loading state
        button.textContent = 'Loading...';
        button.disabled = true;
        
        // Simulate navigation to quiz (replace with actual navigation)
        setTimeout(() => {
            alert(`Starting quiz: ${quizTitle}`);
            button.textContent = 'Start';
            button.disabled = false;
        }, 1000);
    });
});

// Mobile menu toggle (if needed in future)
const createMobileMenu = () => {
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav-menu');
    
    if (window.innerWidth <= 768) {
        // Add mobile menu button
        if (!document.querySelector('.mobile-menu-btn')) {
            const menuBtn = document.createElement('button');
            menuBtn.className = 'mobile-menu-btn';
            menuBtn.innerHTML = '☰';
            menuBtn.style.cssText = `
                display: block;
                font-size: 24px;
                background: none;
                border: none;
                cursor: pointer;
                padding: 10px;
            `;
            
            menuBtn.addEventListener('click', () => {
                nav.classList.toggle('mobile-active');
            });
            
            header.querySelector('.container').prepend(menuBtn);
        }
    }
};

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        createMobileMenu();
    }, 250);
});

// Initialize on load
window.addEventListener('load', () => {
    createMobileMenu();
    
    // Add fade-in animation to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '0';
        setTimeout(() => {
            hero.style.transition = 'opacity 1s ease';
            hero.style.opacity = '1';
        }, 100);
    }
});

// Add hover effect to quiz cards
document.querySelectorAll('.quiz-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Console welcome message
console.log('%c Welcome to Quiz App! ', 'background: #4DA6FF; color: white; font-size: 20px; padding: 10px;');
console.log('%c Built with ❤️ ', 'background: #2c3e50; color: white; font-size: 14px; padding: 5px;');
