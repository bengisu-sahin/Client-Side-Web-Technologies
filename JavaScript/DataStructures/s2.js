/*Maps in JS are unique "key/value" pairs, and correspond to HashMap in other PLs.When we iterate over a map object, the key values are returned in the
order they are inserted.
*/
function PrintMapItem(M){
    str = "The map elements are: ";
    M.array.forEach((vale,key) => {
       str += `(${key}, ${value}), `;
    });
}
let M=new Map([[3, "Ali"], [5, "Veli"], ["Tree", "OK"], [4.5, 88]]);
console.log(M);
console.log(`The map has ${M.size} items`);
PrintMapItem(M);
console.log(M.keys());
console.log(M.values());
//adding new elment
M.set("Bengisu","Sahin");
PrintMapItem(M);
//remove an existing item
if(M.has("Tree")) M.delete("Tree");
if(M.has(99)) M.delete(99);
PrintMapItem(M);
//get the value of a key
if(M.has(4.5)) console.log("The value associated with 4.5 is: ${M.get(4.5)}");
//delete all pairs in the map
console.log("Removing all map items......");
M.clear();
PrintMapItem(M);