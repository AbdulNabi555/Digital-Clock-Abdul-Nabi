

let hourEl = document.getElementById("hour");
let minuteEl = document.getElementById('minute');
let secondEl = document.getElementById('second');

 function upDateTime(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = 'PM'
    if(h>12){
    h = h-12;
    ampm = 'AM';

    }
    h = h<10 ? "0"+h:h;
    m = m<10 ? "0"+m: m;
    s = s<10 ? "0"+s: s;
    hourEl.textContent = h;
    minuteEl.textContent = m;
    secondEl.textContent = s;
    
    setTimeout(()=>{
        upDateTime()
     },1000)
    
    
 }
 upDateTime()
 
 

 