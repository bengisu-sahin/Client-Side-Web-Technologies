//VAR-LET-CONST

let age; //we can define let without an initial value.
console.log(age);

age = 22;
console.log(age);

const name = "bengisu"; //In const, we have to give an initial value to the variable when declare the variable.
console.log(name);

//name="cansu"; ERROR!

/**
 * let özel olarak değişmesini istediğimiz ifadelerde kullanılır.
 * const tipinde değişken tanımlanırken başlangıç değeri verilmek zorundadır.
 */


const myArr = [1, 2, 3];
console.log(myArr); //Output --> 1 2 3
myArr.pop();
console.log(myArr); //Output --> 1 2 
//const olmasına rağmen neden sondaki eleman pop edildi ? Çünkü burada const ile ifade ettiğimiz ve değişmeyen şey array objesinin refer ettiği bellek alanıdır.

//myArr =[1,2,33,44,5] ERROR!
const student = {
    name: "Arin",
    age: 5
}
Object.freeze(student); // bu kullanılırsa bir daha student içeriği değişmiyor
console.log(student);
student.name = "Elis";
console.log(student);


//VAR --> global scope / functional scope

var x = 1;
console.log(x); //Output --> 1 
if (x === 1) {
    var x = 10;
    console.log(x); //Output --> 10
}
console.log(x); //Output --> 10

// LET --> block scope
let y = 1;
console.log(y); //Output --> 1 
if (y === 1) {
    let y = 10;
    console.log(y) //Output --> 10
}
console.log(y) //Output --> 1 

// HOISTING (Yukarı çekme - yükseltme) let ve const da yok
// var m;
console.log(m);
var m = 10;
console.log(m);

/*
//let y; //XXXXX
console.log(n);
let y=20;*/