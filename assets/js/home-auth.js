// Home page for authenticated users
document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    
    const authMenu = document.querySelector('.auth-menu');
    const userMenu = document.querySelector('.user-menu');
    const managementDropdown = document.querySelector('.dropdown');

    if (user) {
        // User is logged in - show user menu and management
        if (authMenu) authMenu.style.display = 'none';
        if (userMenu) userMenu.style.display = 'flex';
        if (managementDropdown) managementDropdown.style.display = 'block';

        // Display user name
        const userName = document.getElementById('userName');
        if (userName && user.username) {
            userName.textContent = user.username;
        }

        // Load user avatar if available
        const userAvatar = document.getElementById('userAvatar');
        if (userAvatar && user.avatar) {
            userAvatar.src = user.avatar;
        }

        // User dropdown menu toggle
        const userMenuBtn = document.getElementById('userMenuBtn');
        const userDropdownMenu = document.getElementById('userDropdownMenu');

        if (userMenuBtn && userDropdownMenu) {
            userMenuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                userDropdownMenu.classList.toggle('show');
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!userMenuBtn.contains(e.target) && !userDropdownMenu.contains(e.target)) {
                    userDropdownMenu.classList.remove('show');
                }
            });
        }

        // Logout functionality
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Confirm logout
                if (confirm('Are you sure you want to logout?')) {
                    // Clear user session
                    localStorage.removeItem('user');
                    
                    // Show logout message
                    alert('Logged out successfully!');
                    
                    // Reload page
                    window.location.reload();
                }
            });
        }
    } else {
        // User is not logged in - show auth menu
        if (authMenu) authMenu.style.display = 'flex';
        if (userMenu) userMenu.style.display = 'none';
        if (managementDropdown) managementDropdown.style.display = 'none';
    }

    // Management dropdown menu (for mobile)
    const managementDropdownElement = document.querySelector('.dropdown');
    if (managementDropdownElement && window.innerWidth <= 768) {
        const dropdownToggle = managementDropdownElement.querySelector('.dropdown-toggle');
        const dropdownMenu = managementDropdownElement.querySelector('.dropdown-menu');
        
        if (dropdownToggle && dropdownMenu) {
            dropdownToggle.addEventListener('click', (e) => {
                e.preventDefault();
                dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
            });
        }
    }
});

// Console welcome message
const user = JSON.parse(localStorage.getItem('user') || 'null');
if (user) {
    console.log('%c Welcome back! ', 'background: #4DA6FF; color: white; font-size: 16px; padding: 8px;');
}
