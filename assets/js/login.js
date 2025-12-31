// Login form handling
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // Form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Clear previous errors
        clearErrors();
        
        // Get form values
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        
        // Validate inputs
        let isValid = true;
        
        if (!username) {
            showError(usernameInput, 'Username is required');
            isValid = false;
        }
        
        if (!password) {
            showError(passwordInput, 'Password is required');
            isValid = false;
        } else if (password.length < 6) {
            showError(passwordInput, 'Password must be at least 6 characters');
            isValid = false;
        }
        
        if (!isValid) {
            return;
        }
        
        // Simulate login (replace with actual API call)
        loginUser(username, password);
    });

    // Clear error on input
    [usernameInput, passwordInput].forEach(input => {
        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                input.classList.remove('error');
                const errorMsg = input.parentElement.querySelector('.error-message');
                if (errorMsg) {
                    errorMsg.remove();
                }
            }
        });
    });
});

function showError(input, message) {
    input.classList.add('error');
    
    // Remove existing error message if any
    const existingError = input.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Create and add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    input.parentElement.appendChild(errorDiv);
}

function clearErrors() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.classList.remove('error');
    });
    
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());
}

function loginUser(username, password) {
    // Show loading state
    const loginBtn = document.querySelector('.btn-login');
    const originalText = loginBtn.textContent;
    loginBtn.textContent = 'Logging in...';
    loginBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Mock authentication - replace with real API call
        if (username === 'admin' && password === 'admin123') {
            // Success
            alert('Login successful!');
            // Store user session (in real app, use proper session management)
            localStorage.setItem('user', JSON.stringify({ username }));
            // Redirect to authenticated home page
            window.location.href = '../home/home.html';
        } else {
            // Failed
            alert('Invalid username or password');
            loginBtn.textContent = originalText;
            loginBtn.disabled = false;
        }
    }, 1000);
}

// Handle forgot password
document.querySelector('.forgot-password')?.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Password reset functionality coming soon!');
});

// Add enter key support
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const form = document.getElementById('loginForm');
        if (form) {
            form.dispatchEvent(new Event('submit'));
        }
    }
});
