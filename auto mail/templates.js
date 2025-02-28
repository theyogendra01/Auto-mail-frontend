// Show the new template modal
function showNewTemplateForm() {
    document.getElementById('templateModal').style.display = 'block';
}

// Close the modal
function closeModal() {
    document.getElementById('templateModal').style.display = 'none';
}

// Use template
function useTemplate(id) {
    // Redirect to composer with template data
    window.location.href = `dashboard.html?template=${id}`;
}

// Edit template
function editTemplate(id) {
    showNewTemplateForm();
    // Load template data into form
    // This would be populated from your backend
}

// Delete template
function deleteTemplate(id) {
    if (confirm('Are you sure you want to delete this template?')) {
        // Delete template logic here
        console.log(`Deleting template ${id}`);
    }
}

// Close modal when clicking outside
window.onclick = function (event) {
    if (event.target == document.getElementById('templateModal')) {
        closeModal();
    }
}

// Handle form submission
document.getElementById('templateForm').onsubmit = function (e) {
    e.preventDefault();
    // Save template logic here
    closeModal();
}
