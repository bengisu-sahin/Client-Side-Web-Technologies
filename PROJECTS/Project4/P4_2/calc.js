/**
 * Light-Dark Mode Implementation
 */
const modeBtn = document.getElementById("modeBtn");
modeBtn.addEventListener("click", function () {
    const cssFile = document.getElementById("css-file");
    const modeIcon = document.getElementById("mode-icon");
    if (cssFile.href.endsWith("light.css")) {
        cssFile.href = "dark.css";
        modeIcon.classList.remove("fa-sun");
        modeIcon.classList.add("fa-moon");
    } else {
        cssFile.href = "light.css";
        modeIcon.classList.remove("fa-moon");
        modeIcon.classList.add("fa-sun");
    }
});



function checkElement(buttonValue){
    if(buttonValue=='C'){
        return 0;
    }
    else if(buttonValue=='/' || buttonValue=='*' || buttonValue=='+' || buttonValue=='-' ){
        return 1;
    }
    else if(buttonValue == '='){
        return 2;
    }
    else{ //number
        return 3;
    }
}

// var pressedBtns=document.querySelectorAll(".arg");
// console.log(pressedBtns);
// var param1 = 0;
// var param2 = 0;
// var operator = '';
// var []=
const inputs = {
    param1: 0,
    operator: "",
    param2: 0
  };
const screen=document.getElementById("display");
console.log(screen);
const buttonsContainer = document.querySelector('.container');
buttonsContainer.addEventListener('click', function(event) {

/*Bu kod, bir olayın hedefinin buton elementi olup olmadığını kontrol eder.Olay dinleyicisi tarafından alınan event nesnesinin target özelliği, olayın hedefi olan HTML öğesini temsil eder. tagName özelliği ise bu öğenin etiket adını büyük harflerle döndürür.*/

  if (event.target.tagName === 'BUTTON') {

    const buttonValue = event.target.innerText;
    console.log(buttonValue);
    var btnType=checkElement(buttonValue);

    if(btnType == 0){ //reset screen
       screen.innerText='';
    }
    else if(btnType == 1 ){ //operator
        inputs.operator=buttonValue;
        
    }
    else if(btnType == 2 ){ //result

        screen.innerText='111';
     }
    else{ //number

    }
  }
});
