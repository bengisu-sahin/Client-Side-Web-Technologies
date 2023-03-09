/*ES6 stands for ECMAScript 6.ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015. */
/* ES6 intrudoced the exponentiation operator ** */
let x=2**4; //2^4=16
console.log(`2**4 = ${x}`); //placeholders
/* Exponentiation can also be performed using the Math object */
const z = Math.pow(5, 2);
console.log(`Math.pow(5, 2) = ${z}`);
x =  5/2;
console.log(`5/2 = ${x}`);
/* Comparison operators */
if (2 == "2") console.log("2=='2' is true");
else          console.log("2=='2' is false");
if (2 === "2") console.log("2==='2' is true");
else           console.log("2==='2' is false");if (2 != "2") console.log("2!='2' is true");
else          console.log("2!='2' is false");
if (2 !== "2") console.log("2!=='2' is true");
else           console.log("2!=='2' is false");
if (2 > '2') console.log("2 > '2' returns true");
else         console.log("2 > '2' returns false");