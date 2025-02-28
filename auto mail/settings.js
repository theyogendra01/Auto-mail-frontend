document.addEventListener('DOMContentLoaded', function () {
    // Load user data
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.querySelector('input[type="text"]').value = user.name || '';
        document.querySelector('input[type="email"]').value = user.email || '';
    }

    // Handle profile form submission
    document.querySelectorAll('.settings-form').forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Show success message
            const button = e.target.querySelector('button');
            const originalText = button.textContent;
            button.textContent = 'Saved!';

            setTimeout(() => {
                button.textContent = originalText;
            }, 2000);
        });
    });

    // Handle delete account
    document.querySelector('.btn-danger').addEventListener('click', function () {
        if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
            localStorage.removeItem('user');
            window.location.href = 'index.html';
        }
    });
});
