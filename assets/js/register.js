// Register form handling
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const usernameInput = document.getElementById('username');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    // Form submission
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Clear previous errors
        clearErrors();
        
        // Get form values
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const email = emailInput.value.trim();
        const username = usernameInput.value.trim();
        const phone = phoneInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        
        // Validate inputs
        let isValid = true;
        
        if (!firstName) {
            showError(firstNameInput, 'First name is required');
            isValid = false;
        }
        
        if (!lastName) {
            showError(lastNameInput, 'Last name is required');
            isValid = false;
        }
        
        if (!email) {
            showError(emailInput, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError(emailInput, 'Please enter a valid email');
            isValid = false;
        }
        
        if (!username) {
            showError(usernameInput, 'Username is required');
            isValid = false;
        } else if (username.length < 3) {
            showError(usernameInput, 'Username must be at least 3 characters');
            isValid = false;
        }
        
        if (!phone) {
            showError(phoneInput, 'Phone number is required');
            isValid = false;
        } else if (!isValidPhone(phone)) {
            showError(phoneInput, 'Please enter a valid phone number');
            isValid = false;
        }
        
        if (!password) {
            showError(passwordInput, 'Password is required');
            isValid = false;
        } else if (password.length < 6) {
            showError(passwordInput, 'Password must be at least 6 characters');
            isValid = false;
        }
        
        if (!confirmPassword) {
            showError(confirmPasswordInput, 'Please confirm your password');
            isValid = false;
        } else if (password !== confirmPassword) {
            showError(confirmPasswordInput, 'Passwords do not match');
            isValid = false;
        }
        
        if (!isValid) {
            return;
        }
        
        // Simulate registration (replace with actual API call)
        registerUser({
            firstName,
            lastName,
            email,
            username,
            phone,
            password
        });
    });

    // Clear error on input
    const inputs = [firstNameInput, lastNameInput, emailInput, usernameInput, phoneInput, passwordInput, confirmPasswordInput];
    inputs.forEach(input => {
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

    // Password strength indicator (optional)
    passwordInput.addEventListener('input', () => {
        updatePasswordStrength(passwordInput.value);
    });
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    return phoneRegex.test(phone);
}

function updatePasswordStrength(password) {
    // Optional: Add password strength indicator
    const strength = calculatePasswordStrength(password);
    // You can add visual feedback here
}

function calculatePasswordStrength(password) {
    let strength = 0;
    if (password.length >= 6) strength++;
    if (password.length >= 10) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z\d]/.test(password)) strength++;
    return strength;
}

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

function registerUser(userData) {
    // Show loading state
    const registerBtn = document.querySelector('.btn-login');
    const originalText = registerBtn.textContent;
    registerBtn.textContent = 'Registering...';
    registerBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Mock registration - replace with real API call
        // In real app, send data to server
        console.log('Registering user:', userData);
        
        // Success
        alert('Registration successful! Please login with your credentials.');
        
        // Redirect to login page
        window.location.href = 'login.html';
    }, 1500);
}

// Add enter key support
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const form = document.getElementById('registerForm');
        if (form && document.activeElement.tagName !== 'BUTTON') {
            e.preventDefault();
            form.dispatchEvent(new Event('submit'));
        }
    }
});
