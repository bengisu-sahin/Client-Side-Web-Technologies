let fontSize = 16; //default
function ChangeFontSize(delta) {
    let param = document.getElementById('param1');
    console.log(param);
    console.log(param.style.fontSize);
    fontSize += delta;
    if (fontSize < 10) fontSize = 10;
    else if (fontSize > 50) fontSize = 50;
    param.style.fontSize = fontSize + "px";
}
function ChangeColor(color) {
    document.getElementById('param1').style.color = color;
}
function ChangeBorder(border) {
    if (border === 1) document.getElementById('para1').style.border = "2px solid black";
    else document.getElementById('para1').style.border = "none";
}