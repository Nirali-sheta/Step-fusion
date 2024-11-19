let currentSection=1;

function goNext(){
    const totalSection=3;
    if(currentSection<totalSection){
        document.getElementById('section'+currentSection).classList.remove('active');
        currentSection++;
        console.log(currentSection);
        document.getElementById('section'+currentSection).classList.add('active');
    }

}

function goPrevious(){
    const totalSection=3;
    if(currentSection>1){
        document.getElementById('section'+currentSection).classList.remove('active');
        currentSection--;
        document.getElementById('section'+currentSection).classList.add('active');
    }
}

function handleSubmit(){

}