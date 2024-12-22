
const userInitialDiv = document.querySelector('#user-initial');
const userIcon = document.querySelector('.userlogo a i');

document.addEventListener("DOMContentLoaded", function() {
    // Check if the current page is not login.html or registration.html
    if (!window.location.pathname.includes('/html/forms/login.html') && !window.location.pathname.includes('/html/forms/registration.html')) {
        fetch('/html/components/navbar.html')  // Path to your navbar component
            .then(response => response.text())
            .then(data => {
                document.body.insertAdjacentHTML('afterbegin', data);  
                addActive();
                displayIntial();
                logout();
               
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


// display intials of user in the navbar

function displayIntial(){
 const user=JSON.parse(localStorage.getItem('loggedInUser'));
 const p=document.querySelector("#initial");

 const initalAlpha=user.firstname[0].toUpperCase();
 p.textContent=initalAlpha;
//  toggle intial latter if user logged in otherwise logo 
 const userInitialDiv = document.querySelector("#user-initial");
 const userIcon = document.querySelector(".userlogo a i");
 if (userInitialDiv) userInitialDiv.style.display = "flex";
 if (userIcon) userIcon.style.display = "none";
}

function toggleCard(){
    const card = document.getElementById("dropdown-card");
    // Toggle the visibility of the card
    if (card.style.display === "block") {
        card.style.display = "none";
    } else {
        card.style.display = "block";
    }
}

//close the card
document.addEventListener("click", (event) => {
        const card = document.getElementById("dropdown-card");
        const initials = document.querySelector(".user-initials");
        if (!card.contains(event.target) && !initials.contains(event.target)) {
            card.style.display = "none";
        }
});

// logout functionality
function logout(){
    const logout=document.querySelector('#logout');
    logout.addEventListener('click',(event)=>{
        event.preventDefault();
        localStorage.removeItem('cart');
        localStorage.removeItem('loggedInUser');
        localStorage.removeItem('wishlist');

        const userInitialDiv = document.querySelector("#user-initial");
        const userIcon = document.querySelector(".userlogo a i");
    
        if (userInitialDiv) userInitialDiv.style.display = "none";
        if (userIcon) userIcon.style.display = "block";

        const dropdownCard = document.querySelector('.dropdown-card');
        if (dropdownCard) {
            dropdownCard.innerHTML = `
                <a href="/html/forms/login.html">Login</a>
                <a href="/html/forms/registration.html">Sign Up</a>
            `;
        }

    });

}