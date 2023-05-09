const content = document.getElementById("content");
let tabContent = [];
function tabClick(id) {
    content.innerHTML="";
    id = id * 100 + id * 10 + id;

    for (let i = 0; i < 10; i++) {
        tabContent[i] = [];
        for (let j = 0; j < 14; j++) {
            tabContent[i][j] = id + " ";
        }
    }

    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    
    for (let i = 0; i < 10; i++) {
        let trow = document.createElement("tr");
        for (let j = 0; j < 14; j++) {
            let cell = document.createElement("td");
            cell.textContent = tabContent[i][j];
            cell.classList.add("cell");
            trow.appendChild(cell);
        }
        tbody.appendChild(trow);
    }

    table.appendChild(tbody);
    content.appendChild(table);
}
function loadThePage(){
    console.log("loadthepage");
    tabClick(1);

}