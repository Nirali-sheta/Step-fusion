
function userProfile(){
    const user=JSON.parse(localStorage.getItem("loggedInUser"));
    const initial=document.getElementById("img-initial");
    document.getElementById('fullname').textContent=`${user.firstname} ${user.lastname}`;
    document.getElementById('firstname').textContent=user.firstname;
    document.getElementById('lastname').textContent=user.lastname;
    document.getElementById('mobilenumber').textContent=user.mobile;
    document.getElementById('email').textContent=user.email;
    document.getElementById('address').textContent=user.address;
    document.getElementById('city').textContent=user.city;
    document.getElementById('state').textContent=user.state;
    document.getElementById('country').textContent=user.country;

    if(user.firstname && user.lastname){
        initial.textContent=user.firstname[0].toUpperCase()+user.lastname[0].toUpperCase();
    }
    else{
        initial.textContent=user.firstname[0].toUpperCase();
    }

}

userProfile();