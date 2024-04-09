setInterval(timer,1000);
setInterval(time_hr,1000);
setInterval(time_sec,1000);

function timer(){
    const date = new Date();
   let h = document.getElementById("hour").innerHTML = date.getHours();
} 
function time_hr(){
    const date = new Date();
  let m =   document.getElementById("min").innerHTML = date.getMinutes();
} 
function time_sec(){
    const date = new Date();
  let s =  document.getElementById("sec").innerHTML = date.getSeconds();

} 

