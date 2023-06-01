let sec=0;
let min=0;
let hour=0;
let interval;
document.getElementById("btnstart").addEventListener('click',
function start(){
    interval=setInterval(()=>{
        document.getElementById("watch").innerHTML=`${hour} H: ${min} M : ${sec} S`;
        sec++;
        if(sec>=60){
            sec=0;
            min++;
        }
        if(min>=60){
            min=0;
            hour++;
        }
    },1000);
})
document.getElementById("btnstop").addEventListener('click',
function stop(){
clearInterval(interval);
interval = null;
});
document.getElementById("btnreset").addEventListener('click',
function pause(){
clearInterval(interval)
document.getElementById("watch").innerHTML = '0 H : 0 M : 0S';
});









