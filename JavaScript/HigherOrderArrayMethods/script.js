/*It does NOT define a constant array. It defines a constant reference to an array.Because of this, we can still change the elements of a constant array.
 */
const A = [3, 6, 2, 5, 8, 9, 1];
//classical way to iterate over an array
let s = "";
for (let i = 0; i < A.length; i++) {
    if (s == "") s += A[i];
    else s += ", " + A[i];
}
console.log(`s: ${s}`);
//foreach operator 
function F1(val, index, array) {
    if (s == "") s += val;
    else s += ", " + val;
}
s = "";
A.forEach(F1);
console.log(`s: ${s}`);
//instead of defining a named function, we can also use an arrow function,which is what is commonly done
s = "";
A.forEach((val, index, array) => {
    if (s == "") s += val;
    else s += ", " + val;
});
console.log(`s: ${s}`);
s = "";
A.forEach((val) => {
    if (s == "") s += val;
    else s += ", " + val;
});

function Array2String(A) {
    let str = "[";
    A.forEach((val) => {
        if (str === "[") str += val;
        else str += ", " + val;
    });
    str += "]";
    return str;
}
let B = A.map((val, index, array) => { return 2 * val; });
console.log(Array2String(B));
B = A.filter((val, index, array) => { return val > 5; });
console.log(Array2String(B));
let sum = A.reduce((sum = 0, val, index, array) => { sum += val; return sum; })
console.log(`Sum of the elements in A: ${total}`); let allSmallerThan10 = A.every((val, index, array) => { return val < 10; });
console.log(`Is every array element smaller than 10? ${allSmallerThan10}`);
let someBiggerThan8 = A.some((val, index, array) => { return val > 8; });
console.log(`Are some array elements bigger than 8? ${someBiggerThan8}`);
let someBiggerThan10 = A.some((val, index, array) => { return val > 10; });
console.log(`Are some array elements bigger than 10? ${someBiggerThan10}`);
let item = A.find((val) => { return val > 5; });
console.log(`The first item bigger than 5 is ${item}`);
console.log(`The first item smaller than 8 is ${A.find((val) => { return val < 8; })}`);
let index = A.findIndex((val) => { return val > 8; });
console.log(`The index of the first item bigger than 8 is ${index}`);
console.log(`The index of the first item equal to 7 is ${A.findIndex((val) => { return val == 7; })}`);
B = A.filter((val) => { return val > 7; }).map((val) => { return val + 10; });
console.log(Array2String(B));