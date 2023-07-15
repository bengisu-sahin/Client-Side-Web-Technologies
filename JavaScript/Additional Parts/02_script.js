//FUNCTIONS

//Function Declaration - Statement

console.log(square(3));//Hoisting example

function square(num) { //parameters 
    return (num * num);
}
/* square (5);//arguments
console.log(square (5)); */

console.log(square(4)); // () ---> Invoke

// Function Declaration --> HOISTED


//Function Expression
//Fonksiyonu bir değişkene atama işlemi
//Function name is optinal but usually we don't use a function name wit func exp. It is a anonymous func.
const square2 = function (num) { //parameters 
    return (num * num);
}

console.log(square2);

//Why we mostly used func exp ?
//bcs func exp is now first-class functions and we behave as a variable.
const myArr = [1, "Bengisu", function () { console.log("Array Element"); }]
myArr[2](); //fonksiyonu calıstırmak icin () koyduk

const myObj = {
    age: 5,
    name: "Arin",
    func: function () { console.log("Object Element"); }
};
myObj.func();
console.log(20 + (function () { return 10; })()) // IIFE
/*----------------------------------------------- */
square3(5);
const square3 = function (num) {
    return (num * num);
}
// Function Expression is not HOISTED



// FIRST - CLASS FUNCTIONS DEVAM
const addFive = function (num, func) {
    console.log(num + func());
}
addFive(10, function () { return 5; })

const myFunc = function (num) {
    return function toDouble() {
        console.log(num * 2);
    }
}
myFunc(8)(); //iç içe gecen componentlarda react da önemli
const result = myFunc(7);
console.log(result); // dondüğü değer içerdeki fonksiyon
result(); //14


// IIFE
// Immediately Invocable Function Expression

(function () {
    console.log(5 + 12);
})();
// console.log (sum);
/* sum();
console.log(sum); */


//Fonksiyonlar js de bir nesnedir.
