function Add(num1, num2) { return num1 + num2; }
let n = Add(2, 3);
console.log(`n: ${n}`);  // prints n: 5
console.log(Add(2));     // prints NaN, i.e., Not a Number

function Add2(num1 = 1, num2 = 2) {
    return num1 + num2;
}
//lambda function
const F = (num1 = 1, num = 2) => { return num1 + num2; }
console.log(F(2, 3));
// If the function contains just one statement, we don’t need the curly braces.
const F2 = (num1 = 1, num2 = 2) => num1 + num2;
console.log(F2(1, 4)); // Prints 5

var x = 4; //global scope
function F3() {
    x = 7; // access global variable
    let sum = 0; //block-function scope
    for (let i = 0; i < 10; i++) { //i block scope
        var y = 4; //func scope
        z = 9; //z initialized without declaration and becomes globally scope
        let t = 2; //block scope
        sum += i;
    }
    console.log(`y: ${y}`);      // Prints 4
    console.log(`z: ${z}`);      // Prints 9
    console.log(`sum: ${sum}`);  // prints 9*10/2 = 45 
    // console.log(t);   // This is not possible. Can’t access t because it is block scope
} // F3
console.log(`x before calling F3: ${x}`);  // Prints 3
F3();
console.log(`x after calling F3: ${x}`);  // Prints 7
//console.log(`y: ${y}`);  // Cannot access y. It has function scope.
console.log(`z: ${z}`);  // Prints 9