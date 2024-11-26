
function handleButtonClick(event) {
    event.preventDefault(); 

    // Get values of email and password
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const emailError=document.getElementById("emailError");
    const passwordError=document.getElementById("passwordError");

    if(!email){
        emailError.innerHTML="email is requied!"
        emailError.classList.add("show");
    }
    else{
        emailError.classList.remove("show");
    }

    if(!password){
        passwordError.innerHTML="password is requied!"
        passwordError.classList.add("show");
    }
    else{
        passwordError.classList.remove("show");
    }

    // getting users array from localstorage
    const users=JSON.parse(localStorage.getItem("users")) || [];
    const user=users.find(user=>user.email===email && user.password===password);

    // if user is exist then allowed to login
    if(user){
        location.href='/html/home.html';

    }
    else{
        alert("Invalid username or password");
    }

}