/*There is no stack ds in JS,but we can easily implement one using array.Recall that the list have push and pop operations already.We can simply use them to implement stack*/
class Stack {
    constructor() {
        this.S = [];
    }
    //push an obj to the stack
    push(item) { this.S.push(item); }
    //return the item at the top of the stack without removing it
    top() {
        if (this.S.length == 0) return null;
        else return this.S[this.S.length - 1];
    }
    //removes the item at the top of the stack  and returns it
    pop() {
        if (this.S.length == 0) return null;
        else return this.S.pop();
    }
    // Returns true if the stack is empty, false otherwise
    isEmpty() {
        if (this.S.length == 0) return true;
        else return false;
    }
}
// Test code for the stack        
S = new Stack();
console.log("Adding 1 to the Stack");
S.push(1);

console.log("Adding 2 to the Stack");
S.push(2);

console.log("Adding Ali to the Stack");
S.push("Ali");

console.log("Adding 4.5 to the Stack");
S.push(4.5);

console.log(`Item at the top of the stack: ${S.top()}`);
console.log(`Removing the item at the top of the stack: ${S.pop()}`);

console.log("Adding Veli to the Stack");
S.push("Veli");

console.log("Adding 10 to the Stack");
S.push(10);

str = "Popping off all stack elements: "
while (!S.isEmpty()){str += `${S.pop()}, `;}
console.log(str);