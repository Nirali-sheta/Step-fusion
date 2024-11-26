
document.addEventListener("DOMContentLoaded", function() {
    // Check if the current page is not login.html or registration.html
    if (!window.location.pathname.includes('login.html') && !window.location.pathname.includes('registration.html')) {
        fetch('/html/components/navbar.html')  // Path to your navbar component
            .then(response => response.text())
            .then(data => {
                document.body.insertAdjacentHTML('afterbegin', data);  
            })
            .catch(error => {
                console.error('Error loading the navbar:', error);
            });
    }
});
