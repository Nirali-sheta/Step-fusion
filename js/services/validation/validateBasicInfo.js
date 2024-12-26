function validateBasicInfo(){
    const firstname=document.getElementById("firstname").value;
    const lastname=document.getElementById("lastname").value;
    const mobile=document.getElementById("mobile").value;
    const email=document.getElementById("email").value;
    const dob=document.getElementById("dob").value;
    const gender=document.getElementById("gender").value;

    let firstnameError=document.getElementById("firstnameError");
    let lastnameError=document.getElementById("lastnameError");
    let mobileError=document.getElementById("mobileError");
    let emailError=document.getElementById("emailError");
    let dobError=document.getElementById("dobError");
    let genderError=document.getElementById("genderError");

    let isvalid=true;
    // firstname validation
    if(!firstname){
        firstnameError.innerHTML='Fisrt name is required!';
        firstnameError.classList.add('show');
        isvalid=false;
    }
    else if(!firstname.match(/[A-Za-z]/) || /^\d/.test(firstname)){
        firstnameError.innerHTML='Fisrt name must contain alphabets!';
        firstnameError.classList.add('show');
        isvalid=false;
    }
    else{
        firstnameError.classList.remove('show');    
    }
    // last name validation
    if(lastname && (!lastname.match(/[A-Za-z]+$/))){
        lastnameError.innerHTML='Last name must contain alphabets!';
        lastnameError.classList.add('show');
        isvalid=false;
    }
    else{
        lastnameError.classList.remove('show');     
    }
    
    // mobile validation
   if(!mobile){
     mobileError.innerHTML = "Mobile number is required!";
     mobileError.classList.add("show");
     isvalid=false;

   }
   else if (!mobile.match(/^(\+?[1-9]{1,2})?[1-9][0-9]{9}$/)) {
        mobileError.innerHTML = "Enter a valid mobile number!";
        mobileError.classList.add("show");
        isvalid=false;

    } else {
        mobileError.classList.remove("show");
    }

    // email validation
    const pattern=/^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!email){
        emailError.innerHTML="Email is required!";
        emailError.classList.add("show");
        isvalid=false;

    }
     else if(!pattern.test(email)){
        emailError.innerHTML="Enter valid email!";
        emailError.classList.add("show");
        isvalid=false;

    }
    else{
        emailError.classList.remove("show");
    }

    // dob validation

      // age validation
      const birthdate=new Date(dob);
      const today=new Date();
      
      const age=Math.floor((today-birthdate)/365*24*60*60*1000); //milliseconds to year

    if(!dob){
        dobError.innerHTML="Date of birth required!";
        dobError.classList.add("show");
        isvalid=false;
    }

    else if(!(age>=18)){
        dobError.innerHTML="Age less than 18 not allowed!";
        dobError.classList.add("show");
        isvalid=false;
     }
    else{
        dobError.classList.remove("show");
    }
    // gender validation
    if(!gender){
        genderError.innerHTML="Gender is required!";
        genderError.classList.add("show");
        isvalid=false;
    }
    else{
        genderError.classList.remove("show");
    }
  
    return isvalid;
}

export default validateBasicInfo;
