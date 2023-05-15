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



function checkElement(buttonValue) {
    if (buttonValue == 'C') {
        return 0;
    }
    else if (buttonValue == '/' || buttonValue == '*' || buttonValue == '+' || buttonValue == '-') {
        return 1;
    }
    else if (buttonValue == '=') {
        return 2;
    }
    else { //number
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
    param1: "",
    operator: "",
    param2: ""
};
var args = [];
let state = 0;
const screen = document.getElementById("display");
const buttonsContainer = document.querySelector('.container');
buttonsContainer.addEventListener('click', function (event) {

    /*Bu kod, bir olayın hedefinin buton elementi olup olmadığını kontrol eder.Olay dinleyicisi tarafından alınan event nesnesinin target özelliği, olayın hedefi olan HTML öğesini temsil eder. tagName özelliği ise bu öğenin etiket adını büyük harflerle döndürür.*/

    if (event.target.tagName === 'BUTTON') {

        const buttonValue = event.target.innerText;
        console.log(typeof(buttonValue));
        var btnType = checkElement(buttonValue);
        var len = args.length;
       console.log(len);
        if (btnType == 0) { //reset screen
            screen.innerText = '';
            //bak
            args.length = 0
            // console.log(args[0]);
            // console.log(args[1]);
            // console.log(args[2]);

        }
        else if (btnType == 1) { //operator
            if (len == 0) {
                return;
            }
            else if (len != 0  && checkElement(args[len - 1]) == 1) {
                args[len - 1] = buttonValue;
                console.log("State: ",len);
                console.log("Operator tuslanmıs mesela + arkasına * girilmisse bu değişcek yani args[state-1]==* olmalı: ",args[len-1]);
            }
            else if (len != 0 && checkElement(args[len - 1]) == 3) {
                args.push(buttonValue);
                console.log("State: ",len);
                console.log("Eger sayı arkasına operator girilmisse 999+ gibi args[state]==+ olmalı: ",args[len]);
            }

        }
        else if (btnType == 2) { //result
            if (args[1])
                screen.innerText = '111';
        }
        else { //number
            if (len == 0 ) { //ilk eleman
                args.push(buttonValue);
                console.log("State: ",len);
                console.log(args[0]);
                console.log("sayi girildi: ", buttonValue);
            }
            else { //args[1]=="" yani operator girilmemişse sayı giriliyorsa 1.ye girilir
                if (checkElement(args[len- 1]) == 3) {
                    args[len - 1] = args[len - 1] + buttonValue;
                    console.log(args[len-1]);
                    console.log("State: ",len);
                    console.log("eger sayi arkasına sayi girilmisse yani 9 ardına 9 basılmıssa: ", args[len-1]);
                }
                if (checkElement(args[len - 1]) == 1) {
                    args.push(buttonValue);
                    console.log("State: ",len);
                    console.log("eger operatorden sonra bir rakam girilmisse yani 9+(2) ise args[state]==2 olmalı: ", args[len]);
                }

            }
        }
        
    }
    for (var i = 0; i < args.length; i++) {
        console.log("uzunluk: ", args.length);
        console.log("Eleman: ", args[i]);
        console.log("Eleman: ", args[3]);
    }
});
