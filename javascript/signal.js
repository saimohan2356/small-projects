function signal()
{
    var green=document.getElementById("green");
    var yellow=document.getElementById("yellow");
    var red=document.getElementById("red");

setTimeout(()=>
{
   red.style.opacity=1;
   green.style.opacity=0;
   yellow.style.opacity=0;
},1000);
setTimeout(()=>
{
    red.style.opacity=0;
   green.style.opacity=0;
   yellow.style.opacity=1;
},2000);
setTimeout(()=>
{
    red.style.opacity=0;
    green.style.opacity=1;
    yellow.style.opacity=0;
},3000);

}
setInterval(()=>
{
   signal()
},4000);
