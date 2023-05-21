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

var args = [];
let state = 0;
const screen = document.getElementById("display");
const buttonsContainer = document.querySelector('.container');
buttonsContainer.addEventListener('click', function (event) {

    /*Bu kod, bir olayın hedefinin buton elementi olup olmadığını kontrol eder.Olay dinleyicisi tarafından alınan event nesnesinin target özelliği, olayın hedefi olan HTML öğesini temsil eder. tagName özelliği ise bu öğenin etiket adını büyük harflerle döndürür.*/

    if (event.target.tagName === 'BUTTON') {

        const buttonValue = event.target.innerText;
        var btnType = checkElement(buttonValue);
        var len = args.length;
        if (btnType == 0) { //reset screen
            screen.innerText = '';
            args.length = 0
        }
        else if (btnType == 1) { //operator
            if((args[len-2]=="/" || args[len-2]=="*") && len != 0){
                var op1=args.pop();
                var operator=args.pop();
                var op2=args.pop();
                var res=(Number(op2)/Number(op1));
                console.log(res);
                console.log(args[len]);
                
            }
            if (len == 0) {
                return; //ilk eleman operator ise ekranda bir şey gösterme 
            }
            else if (len != 0 && checkElement(args[len - 1]) == 1) { //bir önceki operator ise ve yine operator girilmişse değiştir
                args[len - 1] = buttonValue;
                // console.log("State: ", len);
                // console.log("Operator tuslanmıs mesela + arkasına * girilmisse bu değişcek yani args[state-1]==* olmalı: ", args[len - 1]);
            }
            else if (len != 0 && checkElement(args[len - 1]) == 3) { //bir önceki eleman sayı ise operatorü kabul et
                args.push(buttonValue);
                // console.log("State: ", len);
                // console.log("Eger sayı arkasına operator girilmisse 999+ gibi args[state]==+ olmalı: ", args[len]);
            }

        }
        else if (btnType == 2) { //result
            for (var i = 0; i < args.length; i++) {
                console.log(args[i] + " ");
              }
            // if (args[1]) {
            //     for (var i = 0; i < args.length; i++) {
            //         console.log(" " + args[i]);
            //     }
            // }

        }
        else { //number
            
            if (len == 0) { //ilk eleman
                args.push(buttonValue);
                // console.log("State: ", len);
                // console.log(args[0]);
                // console.log("sayi girildi: ", buttonValue);
            }
            
            else { //args[1]=="" yani operator girilmemişse sayı giriliyorsa 1.ye girilir
                if (checkElement(args[len - 1]) == 3) {
                    args[len - 1] = args[len - 1] + buttonValue;
                    // console.log(args[len - 1]);
                    // console.log("State: ", len);
                    // console.log("eger sayi arkasına sayi girilmisse yani 9 ardına 9 basılmıssa: ", args[len - 1]);
                }
                if (checkElement(args[len - 1]) == 1) {         
                        args.push(buttonValue);                    
                    // console.log("State: ", len);
                    // console.log("eger operatorden sonra bir rakam girilmisse yani 9+(2) ise args[state]==2 olmalı: ", args[len]);
                }

            }
        }
        

    }
});



// function hesapla(ifade) {
//     var operandlar = [];
//     var operatorler = {
//       '+': { precedence: 1, operation: function(a, b) { return a + b; } },
//       '-': { precedence: 1, operation: function(a, b) { return a - b; } },
//       '*': { precedence: 2, operation: function(a, b) { return a * b; } },
//       '/': { precedence: 2, operation: function(a, b) { return a / b; } }
//     };
  
//     function evaluateExpression() {
//       var operand2 = operandlar.pop();
//       var operatör = operandlar.pop();
//       var operand1 = operandlar.pop();
//       var result = operatorler[operatör].operation(operand1, operand2);
//       operandlar.push(result);
//     }
  
//     for (var i = 0; i < ifade.length; i++) {
//       var eleman = ifade[i];
  
//       if (!isNaN(eleman)) {
//         operandlar.push(Number(eleman));
//       } else if (eleman in operatorler) {
//         while (operandlar.length > 1 && operatorler[eleman].precedence==2)
//          {
//           evaluateExpression();
//         }
//         operandlar.push(eleman);
//       }
//     }
  
//     while (operandlar.length > 1) {
//       evaluateExpression();
//     }
  
//     return operandlar[0];
//   }
  
// //   function isHigherPrecedence(op1, op2) {
// //     return operatorler[op1].precedence >= operatorler[op2].precedence;
// //   }
  
// //   var ifade = ["22", "/", "2", "-", "12"];
// //   var sonuc = hesapla(ifade);
// //   console.log("Sonuç: " + sonuc);
// //   ;
  

// // Örnek kullanım:
// var ifade = ["23", "+", "4", "/", "2"];
// var sonuc = hesapla(ifade);
// console.log("Sonuç: " + sonuc);

// function hesapla(ifade) {
//     var operandlar = [];
//     var operatorler = {
//         '+': function (a, b) { return a + b; },
//         '-': function (a, b) { return a - b; },
//         '*': function (a, b) { return a * b; },
//         '/': function (a, b) { return a / b; }
//     };

//     for (var i = 0; i < ifade.length; i++) {
//         if (checkElement(ifade[i]) == 3) var eleman = Number(ifade[i]);
//         else var eleman = ifade[i];

//         if (!isNaN(eleman)) {
//             operandlar.push(eleman);
//         } else if (eleman in operatorler) {
//             while (
//                 operandlar.length > 1 &&
//                 typeof operandlar[operandlar.length - 2] === 'number' &&
//                 typeof operandlar[operandlar.length - 1] === 'number'
//             ) {
//                 var operand2 = operandlar.pop();
//                 var operand1 = operandlar.pop();
//                 var operatör = operandlar.pop();
//                 if (operatorler.hasOwnProperty(operatör)) {
//                     operandlar.push(operatorler[operatör](operand1, operand2));
//                 } else {
//                     throw new Error("Geçersiz operatör: " + operatör);
//                 }
//             }
//             operandlar.push(eleman);
//         }
//     }

//     while (operandlar.length > 1) {
//         var operand2 = operandlar.pop();
//         var operatör = operandlar.pop();
//         var operand1 = operandlar.pop();
//         if (operatorler.hasOwnProperty(operatör)) {
//             operandlar.push(operatorler[operatör](operand1, operand2));
//         } else {
//             console.log("Geçersiz operatör: " + operatör);
//         }
//     }

//     return operandlar[0];
// }

// // Örnek kullanım:
// var ifade = ["22", "/", "2", "-", "12"];
// var sonuc = hesapla(ifade);
// console.log("Sonuç: " + sonuc);
