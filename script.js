setInterval(()=>{
    let timeNow = Date().split(' ')[4];
    let note = 'AM';
    if(timeNow.substring(0,2)>12){
        timeNow = timeNow.substring(0,2) - 12
        if(parseInt(timeNow) < 10){
            timeNow = '0' + timeNow;
        }
        timeNow += Date().split(' ')[4].substring(2);
        note = "PM"
    }
    document.getElementById('time').innerHTML = timeNow;
    document.getElementById('notation').innerHTML = note;
}, 1000)