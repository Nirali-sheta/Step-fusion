import validateBasicInfo from "./services/validation/validateBasicInfo.js";
import validateLocation from "./services/validation/validateLocation.js";
import validatePassword from "./services/validation/validatePassword.js";
import registerUser from "./utils/registerUser.js";
   
   let currentSection=1;

  window.goNext=function(){
        const totalSection=3;

        if(currentSection===1 && !validateBasicInfo()){
            return;
        }
        if(currentSection==2 && !validateLocation()){
            return;
        }
       
       
        if(currentSection<totalSection){
            document.getElementById('section'+currentSection).classList.remove('active');
            currentSection++;
            console.log(currentSection);
            document.getElementById('section'+currentSection).classList.add('active');
        }

    }

  window.goPrevious=function(){
        const totalSection=3;
        if(currentSection>1){
            document.getElementById('section'+currentSection).classList.remove('active');
            currentSection--;
            document.getElementById('section'+currentSection).classList.add('active');
        }
    }
   
window.handleSubmit=function(event){

    event.preventDefault();

    if(currentSection==3 && !validatePassword()){
        return;
    }
        // handle password

    const userData={

        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
        dob: document.getElementById("dob").value,
        gender: document.getElementById("gender").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        country: document.getElementById("country").value,
        password:document.getElementById("password").value,
    }
    
   
    // register user into localstorage
    registerUser(userData);
 
    // alert("user registed successfully!");


    location.href="/html/home.html";
}

