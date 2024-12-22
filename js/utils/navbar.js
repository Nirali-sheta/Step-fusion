
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

 const initial=user.firstname[0].toUpperCase();
 p.textContent=initial;

 const div=document.getElementById("user-initial");
 div.style.display="block";

 const userIcon=document.getElementById("userIcon");
 userIcon.style.display="none";

 document.getElementById("dropdown-card").innerHTML=`<a href="/html/pages/profilePage.html">Profile</a>
                    <a href="/html/forms/registration.html" onclick="logout()" id="logout">Log Out</a>`
 
}

function toggleCard(){
    const card = document.getElementById("dropdown-card");
    // Toggle the visibility of the card
    
    if(card.style.display=="block"){
        card.style.display="none";
    }
    else{

        card.style.display="block";
    }
}

//close the card
document.addEventListener("click", (event) => {
        const card = document.getElementById("dropdown-card");
        const userlogo=document.getElementById("userIcon");
        const initial=document.getElementById("user-initial");

        if(!card.contains(event.target) && !userlogo.contains(event.target) && !initial.contains(event.target)){
            card.style.display="none";

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
        const userIcon = document.querySelector("#userIcon");
    
        userIcon.style.display="block";
        userInitialDiv.style.display="none";

        const dropdownCard = document.querySelector('.dropdown-card');
        if (dropdownCard) {
            dropdownCard.innerHTML = `
                <a href="/html/forms/login.html">Login</a>
                <a href="/html/forms/registration.html">Sign Up</a>
            `;
        }
        
    });

}