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
var resStr;
var result;
var args = [];
const screen = document.getElementById("display");
const res = document.getElementById("result");
const op = document.getElementById("operations");
const buttonsContainer = document.querySelector('.container');
buttonsContainer.addEventListener('click', function (event) {

    /*Bu kod, bir olayın hedefinin buton elementi olup olmadığını kontrol eder.Olay dinleyicisi tarafından alınan event nesnesinin target özelliği, olayın hedefi olan HTML öğesini temsil eder. tagName özelliği ise bu öğenin etiket adını büyük harflerle döndürür.*/

    if (event.target.tagName === 'BUTTON') {

        const buttonValue = event.target.innerText;
        var btnType = checkElement(buttonValue);
        var len = args.length;

        if (btnType == 0) { //reset screen
            args.length = 0
            result = 0;
            resStr = "";
            op.innerText = '';
            res.innerText = '';
        }
        else if (btnType == 1) { //operator
            if (len == 0) {
                return; //ilk eleman operator ise ekranda bir şey gösterme 
            }
            else if (len != 0 && checkElement(args[len - 1]) == 1) { //bir önceki operator ise ve yine operator girilmişse değiştir
                args[len - 1] = buttonValue;
            }
            else if (len != 0 && checkElement(args[len - 1]) == 3) { //bir önceki eleman sayı ise operatorü kabul et
                args.push(buttonValue);
            }
            op.innerText += buttonValue;
        }
        else if (btnType == 2) { //result
            resStr = args.join(" ");
            result = eval(resStr);
            op.innerText += "=";
            res.innerText = result;
            args.length = 0
            result = 0;
            resStr = "";
        }
        else { //number

            if (len == 0) { //ilk eleman
                args.push(buttonValue);
            }

            else { //args[1]=="" yani operator girilmemişse sayı giriliyorsa 1.ye girilir
                if (checkElement(args[len - 1]) == 3) {
                    args[len - 1] = args[len - 1] + buttonValue;
                }
                if (checkElement(args[len - 1]) == 1) {
                    args.push(buttonValue);
                }

            }
            op.innerText += buttonValue;
            console.log(op.innerText);
        }

    }
});