// Check if user is authenticated
function checkAuth() {
    const user = localStorage.getItem('user');
    if (!user) {
        window.location.href = 'login.html';
    }
    return JSON.parse(user);
}

// Handle logout
function logout() {
    localStorage.removeItem('user');
    window.location.href = 'login.html';
}

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function () {
    const user = checkAuth();

    // Add logout button to sidebar
    const sidebar = document.querySelector('.sidebar-nav');
    const logoutLink = document.createElement('a');
    logoutLink.href = '#';
    logoutLink.onclick = logout;
    logoutLink.textContent = 'Logout';
    sidebar.appendChild(logoutLink);
});
