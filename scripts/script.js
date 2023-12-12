function clock(){
    let date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    if(sec < 10) sec = '0' + sec;
    if(min < 10) min = '0' + min;
    if(hour < 10) hour = '0' + hour;
    document.getElementById("clock").innerHTML = `${hour} : ${min} : ${sec}`;
}
setInterval(clock,1000);