//Object Literals
const person = {
   firstName: 'John',
   lastName: 'Doe',
   age: 30,
   hobbies: ['music', 'movies', 'sports'],
   address: {                                   // This is an embedded object
      street: '50 main st',
      city: 'Boston',
      state: 'MA'
   }
};
console.log(person);

const { firstName, lastName } = person;
console.log(firstName);

const { firstName2, address: { city } } = person;
console.log(city);

// You can create an arrays of objects
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

console.log(todos[1].text); // Prints Meeting with boss

//JSON is a data format that is very similar to object literals.
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);