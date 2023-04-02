function showTime() {

    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let am_pm = "AM";

    if (hour > 12) {
        hour = hour - 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hour = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    console.log(hour);
    minute = minute < 10 ? "0" + minute : minute;
    console.log(minute);
    second = sec < 10 ? "0" + second : second;
    console.log(second);

    let showHours=document.getElementById("hour");
    let showSec=document.getElementById("sec");
    let showMin=document.getElementById("min");
    let show_am_pm=document.getElementById("am-pm");

    showHours.innerHTML=hour;
    showMin.innerHTML=minute;
    showSec.innerHTML= second;
    show_am_pm.innerHTML=am_pm;
}
setInterval(showTime,1000);
showTime();