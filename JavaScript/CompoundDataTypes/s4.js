/* JS conditional statements have the same syntax as C */
const x = 10;
if (x === 10) {
    console.log('x is 10');

} else if (x > 10) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
} //end-if
const color = x > 10 ? 'red' : 'blue';
switch (color) {
    case 'red': console.log('color is red');
        break;
    case 'blue': console.log('color is blue');
        break;

    default:
        console.log('color is NOT red or blue.');
        break;
}
i=5;
let s="";
do{
    if (s === "") s = s + i;
    else          s = s + ", " + i;
    i++;
 } while (i <10);
 
 console.log(s);

 const todos = [
    {
       id: 1,
       text: 'Take out trash',
       isCompleted: true
    },
    {
       id: 2,
       text: 'Meeting with boss',
       isCompleted: true
    },
    {
       id: 3,
       text: 'Dentist appt',
       isCompleted: false
    }
 ];
 
 for (let i=0; i<todos.length; i++){
    console.log(todos[i].text);
 } 
 for(let todo of todos){
    console.log(todo.text);
 }