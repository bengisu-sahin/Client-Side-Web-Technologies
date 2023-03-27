const form=document.querySelector("form");
const nameEl=form.querySelector("#name");

nameEl.addEventListener('input',e=>{
    console.log(nameEl.validity);
    if(nameEl.validity.tooShort){
        nameEl.setCustomValidity("Name must have at least 3 letters");  
    }
    else if(nameEl.validity.patternMismatch){
        nameEl.setCustomValidity("Name can only contain letters");
    }
    else{
        nameEl.setCustomValidity("");
        nameEl.reportValidity("");
    }
})