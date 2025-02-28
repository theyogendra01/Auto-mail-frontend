// Form validation and submission handling
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.auth-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const nameInput = document.getElementById('name');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Reset previous error states
            clearErrors();

            // Validate email
            if (!isValidEmail(emailInput.value)) {
                showError(emailInput, 'Please enter a valid email address');
                return;
            }

            // Validate password
            if (passwordInput.value.length < 8) {
                showError(passwordInput, 'Password must be at least 8 characters long');
                return;
            }

            // If on signup page, validate confirm password
            if (confirmPasswordInput && passwordInput.value !== confirmPasswordInput.value) {
                showError(confirmPasswordInput, 'Passwords do not match');
                return;
            }

            // If on signup page, validate name
            if (nameInput && nameInput.value.trim() === '') {
                showError(nameInput, 'Please enter your name');
                return;
            }

            // If all validations pass, simulate login/signup
            const isLoginPage = !confirmPasswordInput;
            handleAuth(isLoginPage);
        });
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(input, message) {
    const formGroup = input.closest('.form-group');
    const error = document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    formGroup.appendChild(error);
    input.classList.add('error');
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(error => error.remove());
    document.querySelectorAll('.error').forEach(input => input.classList.remove('error'));
}

function handleAuth(isLogin) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulate API call
    showLoading();

    setTimeout(() => {
        if (isLogin) {
            // Simulate successful login
            localStorage.setItem('user', JSON.stringify({ email }));
            window.location.href = 'dashboard.html';
        } else {
            // Simulate successful signup
            localStorage.setItem('user', JSON.stringify({
                email,
                name: document.getElementById('name').value
            }));
            window.location.href = 'dashboard.html';
        }
    }, 1500);
}

function showLoading() {
    const button = document.querySelector('.auth-button');
    button.disabled = true;
    button.innerHTML = '<span class="loading-spinner"></span> Processing...';
}
