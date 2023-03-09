console.log('Hello');
console.error('Error');
console.warn('Hello');
/*
===>JS has 7 primitive type:
    string.
    number.
    bigint.
    boolean.
    undefined.
    symbol.
    null.
*/
let x = 3;        // Decimal number
let y = 4.5;      // Floating-point number
let b = true;     // boolean
let u; //if value declared without a value will heave the type of undefined
//null, “hiçbir değeri temsil etmeyen bir değerdir”.
//undefined, , belirli bir değer atanmamış bir değişkenin varsayılan değeridir.

let t=undefined;
let z=null; //obj
let s ="Bengisu"; //string and it can also used with single  quotes 'Bengisu'
let A=[4,2,6,7]; //array
let obj = {firstName: 'Bengisu', lastName: 'Şahin', age: 22};
let F=function(n) {return n^2}; //function

console.log('x: ' + x);
console.log('y: ${y}'); //using back-ticks
console.log("s: <" + s + ">, s[1]: " + s[1]);  // Strings are 0-indexed as in C
console.log(A);
console.log(obj);
console.log(F);
console.log("typeof(F): " +typeof(F));