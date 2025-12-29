// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validate form
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }

            // Show success message
            showSuccessMessage();

            // Reset form
            contactForm.reset();

            // In a real application, you would send this data to a server
            console.log('Contact Form Submitted:', {
                name,
                email,
                message,
                timestamp: new Date().toISOString()
            });
        });
    }
});

function showSuccessMessage() {
    // Create success message if it doesn't exist
    let successMsg = document.querySelector('.success-message');
    
    if (!successMsg) {
        successMsg = document.createElement('div');
        successMsg.className = 'success-message';
        successMsg.textContent = 'Thank you for your feedback! We will get back to you soon.';
        
        const form = document.getElementById('contact-form');
        form.parentNode.insertBefore(successMsg, form);
    }

    // Show message
    successMsg.classList.add('show');

    // Hide after 5 seconds
    setTimeout(() => {
        successMsg.classList.remove('show');
    }, 5000);
}
