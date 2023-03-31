const itemList = document.querySelector(".items");
document.querySelector("#my-form").addEventListener("submit", OnSubmit);

//The state:Current list of items
//Read the current set of items from the local storage
let items = [];
/*A common use of JSON is to exchange data to/from a web server.

When receiving data from a web server, the data is always a string.

Parse the data with JSON.parse(), and the data becomes a JavaScript object.

 */
const storedItems = JSON.parse(localStorage.getItem("items"));
console.log(storedItems);
if (storedItems != null) items = storedItems
console.log(items);
let lastItemId = 0;
items.forEach(element => {
    lastItemId = Math.max(lastItemId, element.id);
});
//save the current list of items to localStorage
function SaveItems2LocalStorage() {
    localStorage.setItem("items", JSON.stringify(items));
}
///
function addItem(title) {
    items.push({
        id: ++lastItemId,
        title: title
    })
}
function deleteItem(id) {
    items = item.filter(item => item.id != id);
    SaveItems2LocalStorage();
}
//
function filterItems(filterStr) {
    if (filterItems == '') return items;
    const filtered = items.filter(item => item.title.toLowerCase().indexof(filterStr) >= 0);
    return filtered;
}
/* Render the current list of items on the HTML page */
function renderItems() {
    const filterStr = document.querySelector("#itemFilterInput").value.trim().toLowerCase();
    const filteredItems = filterItems(filterStr);
    let template = '';
    filteredItems.forEach(item => {
        template +=
            `   <li class="listItem">
                <div class="listItemText">${item.title}</div>
                <button class="delbtn" onclick={deleteButtonHandler(${item.id})}>X</button>
            </li>
        `
    })
    document.querySelector("#root").innerHTML = template;
}
function deleteButtonHandler(id) {
    deleteItem(id);
    renderItems();
}
/**********************************************************************
 * This functions gets called when the submit button is pressed 
 **********************************************************************/
function OnSubmit(e) {
    e.preventDefault();
    const itemInput = document.querySelector("#itemInput");
    const title = itemInput.value.trim();
    itemInput.value = '';
    console.log('OnSubmit: ', title);
    if (title = '') {
        const msg = document.querySelector(".msg");
        msg.classList.add('error');
        msg.innerHTML = 'Please enter an item';
        msg.style.display = "block";
        setTimeout(() => { msg.style.display = "none"; }, 1500);

    }
    else {
        addItem(title);
        SaveItems2LocalStorage();
        renderItems();
    }
}
const itemFilterInput = document.querySelector('#itemFilterInput')
itemFilterInput.addEventListener('input', ItemFilterInputKeyPressEventHandler)

function ItemFilterInputKeyPressEventHandler(e) {
    renderItems()
} 
renderItems()