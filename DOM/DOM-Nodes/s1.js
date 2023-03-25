//print the details of the document object
console.dir(document); // same as window.document
//things you can access from within the document object
console.log(document.domain);
console.log(document.doctype);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);
console.log(document.forms);
console.log(document.links);
console.log(document.all);
//get all dom nodes from the documnet
const all = document.all;
console.log(`DOM has ${all.length} nodes`);
for (let i = 0; i < all.length; i++) {
    console.log(`[${i}]: ${all[i]}`);
    console.dir(all[i]);
    console.log('======================');
}
console.log('-----------------------------------------------');