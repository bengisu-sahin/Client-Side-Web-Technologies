/*Set in JS are an unordered set of items with no duplicates. This corresponds to the HashSet in other PLs.When we iterate over a set object, the values are returned in the order they are inserted.*/
function PrintSetItems(S){
    let str = "The set items are: ";
    S1.forEach(item=>{str += `${item}, `;});
    console.log(str);    
}
let S1=new Set([3,5,"bengisu",4.5,"emma"]);
console.log(S1);
console.log(`The set has ${S1.size} items`);
PrintSetItems(S1);
//add item-if it is already exist,it isn't added
console.log("Adding 20 to the set");
S1.add(20);
PrintSetItems(S1);
console.log("Adding 'emma' to the set");
S1.add('emma');  // No duplicates in a set. So, this does not add 'emma' again.
PrintSetItems(S1);
//remove item
S1.delete(4.5);
PrintSetItems(S1);
//find: does an item exist ?
let exist=S1.has("bengisu");
console.log(`Does the set contain 'bengisu'? ${exist? 'Yes': 'No'}`);
