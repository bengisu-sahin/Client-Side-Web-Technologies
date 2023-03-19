/*************ARRAYS***********/
// JavaScript only has array objects, and methods to manipulate arrays. 
// Arrays correspond to ArrayList/LinkedList in other programming languages.
// Unlike strongly-typed PLs, JS arrays can store items of different types
function printListItems(L){
    str="List Items: ";
    L.array.forEach(element => {
        str=str+element+", ";
    });
    console.log(str);
}
A = [5, 4, 9, 1, 3]
console.log(`A = [${A}]`);
console.log(`Length of the list is ${A.length}`)
console.log(A)
printListItems(A);
//push(obj):APpend the specifies obj to the end of the array
//unshift(obj):Insert an object at the beginning of the array
A.push(20);
A.unshift(12);
printListItems(A);
//pop(): Removes and returns the last item in the list
//shift(): Removes and returns the firts item in the list
console.log(`Removing the last item from the list: ${A.pop()}`);
console.log(`Removing the first item from the list: ${A.shift()}`);
printListItems(A);
//Add list together
B = [50, 51, 60, 55];
C=A.concat(B);//concatenates A and B and returns a new array
PrintListItems(B);
PrintListItems(C);
//This doesn't make a copy pf the list.This is just a pointer assignment just points D to the same list
D=A;
//List items: 44, 4, 9, 1, 3, 20,
PrintListItems(A); 
//List items: 44, 4, 9, 1, 3, 20, 
PrintListItems(D);
// Find the index of 1
console.log(`Index of item 1 is: ${A.indexOf(1)}`);
//sort the list in ascending order
D.sort((a,b)=>{return a-b;});
PrintListItems(D);