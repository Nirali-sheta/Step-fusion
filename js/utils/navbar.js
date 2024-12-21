
document.addEventListener("DOMContentLoaded", function() {
    // Check if the current page is not login.html or registration.html
    if (!window.location.pathname.includes('login.html') && !window.location.pathname.includes('registration.html')) {
        fetch('/html/components/navbar.html')  // Path to your navbar component
            .then(response => response.text())
            .then(data => {
                document.body.insertAdjacentHTML('afterbegin', data);  
                addActive();
            })
            .catch(error => {
                console.error('Error loading the navbar:', error);
            });
    }
});

// Add class active when user clicks on navbar link
function addActive(){
    const currentPath=location.pathname;
    
    const navlink=document.querySelectorAll('.nav-link');
    
    navlink.forEach(link=>{
        if(link.getAttribute('href')==currentPath){
            link.classList.add('active');
        }
        else{
            link.classList.remove('active');
        }
    });
}
