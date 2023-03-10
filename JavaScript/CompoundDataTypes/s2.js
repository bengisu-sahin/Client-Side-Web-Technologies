const numbers1 = [1, 2, 4, 8, 9];
const num2 = new Array(1, 2, 3, 4, 5);
const fruits = ['apples', 'oranges', 'bananas'];  // Array of strings

//array with mixed data types
const mixed = ['apple', 3, 'banana', 5.6, true, null, 9.53];

const A = [0, 1, 2];
A[3] = 3;
/**Can add an element to the end of an array.
 * Notice thar this is possible although A is declared with const !!!
 * cons in array declaration means that you can't change the array pointer A.
 */
/* For example, it is not possible to now say:
//A = [5, 7]; // This is not possible because you are trying to assign A to a new array object*/

//You can add an element to an arbitrary slot in the array

A[6] = 12;
// Now, A[4] and A[5] have undefined objects
console.log(typeof A[4]);   // returns undefined
console.log(typeof A);      // returns object
console.log(typeof A[0]);   // returns number

A.push(20);
A.unshift(25); //insert at the beginning
const last = A.pop();
Array.isArray(A);           // returns true

const index = A.indexOf(7); // returns -1
console.log(`index: ${index}`);