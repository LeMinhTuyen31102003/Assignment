// Quizzes page functionality
document.addEventListener('DOMContentLoaded', () => {
    const quizCodeInput = document.getElementById('quizCode');
    const takeQuizBtn = document.getElementById('takeQuizBtn');

    // Handle Take Quiz button
    if (takeQuizBtn && quizCodeInput) {
        takeQuizBtn.addEventListener('click', () => {
            const quizCode = quizCodeInput.value.trim();
            
            if (!quizCode) {
                alert('Please enter a quiz code');
                quizCodeInput.focus();
                return;
            }

            // Add loading state
            takeQuizBtn.classList.add('loading');
            takeQuizBtn.textContent = 'Loading';
            
            // Simulate quiz lookup (replace with actual API call)
            setTimeout(() => {
                // Mock validation
                if (quizCode.length >= 4) {
                    // Success - redirect to quiz
                    alert(`Starting quiz with code: ${quizCode}`);
                    // In real app: window.location.href = `/quiz/${quizCode}`;
                    takeQuizBtn.classList.remove('loading');
                    takeQuizBtn.textContent = 'Take Quiz';
                    quizCodeInput.value = '';
                } else {
                    // Failed
                    alert('Invalid quiz code. Please try again.');
                    takeQuizBtn.classList.remove('loading');
                    takeQuizBtn.textContent = 'Take Quiz';
                    quizCodeInput.focus();
                }
            }, 1000);
        });

        // Handle Enter key in input
        quizCodeInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                takeQuizBtn.click();
            }
        });
    }

    // Handle Start buttons on quiz cards
    const startButtons = document.querySelectorAll('.btn-start');
    startButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const quizCard = button.closest('.quiz-card');
            const quizTitle = quizCard.querySelector('h3').textContent;
            
            // Check if user is logged in
            const user = JSON.parse(localStorage.getItem('user') || 'null');
            
            if (!user) {
                // Redirect to login if not authenticated
                if (confirm('You need to login to take a quiz. Go to login page?')) {
                    window.location.href = '../auth/login.html';
                }
                return;
            }

            // Add loading state
            button.textContent = 'Loading...';
            button.disabled = true;
            
            // Simulate quiz start (replace with actual navigation)
            setTimeout(() => {
                alert(`Starting quiz: ${quizTitle}`);
                // In real app: window.location.href = `/quiz/${quizId}/start`;
                button.textContent = 'Start';
                button.disabled = false;
            }, 1000);
        });
    });
});

console.log('%c Quizzes Page Loaded ', 'background: #4DA6FF; color: white; font-size: 14px; padding: 5px;');
