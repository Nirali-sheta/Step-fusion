function validatePassword(){
    const password=document.getElementById("password").value;    
    const confirmPassword=document.getElementById("confirmPassword").value;
    const passwordError=document.getElementById("passwordError");
    const confirmPasswordError=document.getElementById("confirmPasswordError");
    let isvalid=true;
    // password validation
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if(!password){
        passwordError.innerHTML="Password is required!";
        passwordError.classList.add("show");
        isvalid=false;
    }
    else if(!passwordRegex.test(password)){
        passwordError.innerHTML="Password must contain at least one digit,character and one special character,and at least 8 character long";
        passwordError.classList.add("show");
        isvalid=false;}
    else{
        passwordError.classList.remove("show");    
    }
    // validate confirm password
    if(!confirmPassword){
        confirmPasswordError.innerHTML="Confirm password is required!";
        confirmPasswordError.classList.add("show");
        isvalid=false;
    }
    else if(confirmPassword!==password){
        confirmPasswordError.innerHTML="Confirm password is not match with password!"
        confirmPasswordError.classList.add("show");
        isvalid=false
    }
    else{
        confirmPasswordError.classList.remove("show");       
    }
    return isvalid;
}

export default validatePassword;