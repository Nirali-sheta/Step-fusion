function validateLocation(){
    const Address=document.getElementById("address").value;
    const City=document.getElementById("city").value;
    const State=document.getElementById("state").value;
    const Country=document.getElementById("country").value;

    const addressError=document.getElementById("addressError");
    const cityError=document.getElementById("cityError");
    const stateError=document.getElementById("stateError");
    const countryError=document.getElementById("countryError");

    let isvalid=true;

    isvalid&&=validateField(Address,addressError,"Address");
    isvalid&&=validateField(City,cityError,"City");
    isvalid&&=validateField(State,stateError,"State");
    isvalid&&=validateField(Country,countryError,"Country");
    
    return isvalid;
    
}

function validateField(fieldvalue,fieldError,fieldname){
    if(!(fieldvalue)){
        fieldError.innerHTML=`${fieldname} is required`;
        fieldError.classList.add("show");
        return false;
    }
    else{
        fieldError.classList.remove("show");
        return true;
    }
}
export default validateLocation;