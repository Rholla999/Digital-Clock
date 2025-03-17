function updateTime(){
    let now = new Date()
    let currentHr = String(now.getHours()).padStart(2, '0')
    let currentMin = String(now.getMinutes()).padStart(2, '0')
    let currentSec = String(now.getSeconds()).padStart(2, '0')

    const period = currentHr >= 12 ? 'PM' : 'AM'

    document.getElementById('hour').innerHTML = currentHr;
    document.getElementById('minute').innerHTML = currentMin;
    document.getElementById('seconds').innerHTML = currentSec;
    document.getElementById('ampm').innerHTML = period
}


setInterval(()=>{
    updateTime()
, 1000})
 