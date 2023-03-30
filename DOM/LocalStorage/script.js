const itemList=document.querySelector(".items");

//The state:Current list of items
//Read the current set of items from the local storage
let items=[];
/*A common use of JSON is to exchange data to/from a web server.

When receiving data from a web server, the data is always a string.

Parse the data with JSON.parse(), and the data becomes a JavaScript object.

 */
const storedItems=JSON.parse(localStorage.getItem("items"));
console.log(storedItems);
if (storedItems != null) items = storedItems
console.log(items);
let lastItemId = 0;
items.forEach(element => {
    lastItemId=Math.max(lastItemId,element.id);
});
//save the current list of items to localStorage
function SaveItems2LocalStorage(){
    localStorage.setItem("items",JSON.stringify(items));
}
function addItem(title){
    items.push({
        id: ++lastItemId, 
        title:title
    })
}