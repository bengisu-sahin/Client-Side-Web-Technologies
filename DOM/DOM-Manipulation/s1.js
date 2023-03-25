function ChangeLightState(newState){
    /*Select the HTML element to modify*/
    const element=document.getElementById('bulb');
    /*Change the 'src' attribute of the element*/
    if(newState == 1) element.src='pic_bulbon.gif';
    else element.src='pic_bulboff.gif';
}