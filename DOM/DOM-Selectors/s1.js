/*******ELEMENT SELECTORS*********/

//Single Element Selectors
console.log(document.getElementById("my-form"));
console.log(document.querySelector(".container"));

//Multiple Element Selectors
console.log(document.getElementsByTagName('li'));//returns an HTMLCollection.Can't use array methods
console.log(document.getElementsByClassName("item")); //returns an HTMLCollection
console.log(document.querySelectorAll('.item')); //Returns a NodeList.Can use array methods such as forEach

let items = document.querySelectorAll(".item");
items.forEach((item) => console.log(item));

/*******MANIPULATING THE DOM*********/
let ul = document.querySelector('.items');
//ul.remove();
// ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Hello';
//ul.children[1].innerText = 'Ali';
//ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn=document.querySelector('.btn');
// btn.style.background='red';

//Create a new item and add it in between item2 & item3 (before item3) 
//Create new list item
const newItem = document.createElement('li');
newItem.className = "item";
newItem.id = "newItemId";
//create a new text item
const newTextItem = document.createTextNode("New Item");
newItem.style.fontWeight = "bold";
newItem.appendChild(newTextItem);
//Get a handle to item3
const item3 = ul.children[2];
//Add the new item after item2
ul.insertBefore(newItem, item3);

/*******EVENTS*********/
//Mouse Event
// const btn=document.querySelector(".btn");
// btn.addEventListener("click", e => {
//     e.preventDefault();
//     console.log(e.target.className);
//     document.getElementById('my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     ul.lastElementChild.innerHTML = '<h1>Changed</h1>';

// });
//Keyboard event
// const itemInput=document.querySelector('#itemInput');
// itemInput.addEventListener('input',e=>{
//     e.preventDefault();
//     document.querySelector('.container').append(itemInput.value);
// })

/*******USER FROM SCRIPT*********/
//Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const itemInput = document.querySelector('#itemInput');
const msg = document.querySelector('.msg');
const itemList = document.querySelector('.items');
//Listen for form submit
function onSubmit(e) {
    e.preventDefault();
    let itemVal = itemInput.value.trim();
    // Clear the field
    itemInput.value = '';
    if (itemVal === '') {
        //alert
        msg.classList.add('error');
        msg.innerHTML = 'Please enter an item !';
        msg.style.display = "block";
        //remove error after 3 seconds
        setTimeout(() => { msg.style.display = "none"; }, 1500);
    }
    else {
        //create new list item with user
        const li = document.createElement('li');
        //add class 'item' to li
        li.classList.add('item');
        //Add n-text node with input values
        li.appendChild(document.createTextNode(`${itemVal}`));
        // Append to ul
        itemList.appendChild(li);
    }
}
myForm.addEventListener('submit', onSubmit);