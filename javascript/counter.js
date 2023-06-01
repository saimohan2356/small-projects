var value=document.getElementById("value");
var inc=document.getElementById("inrease");
var decrease=document.getElementById("decrease")
var reset = document.getElementById("reset")
var count = 0;
inc.addEventListener("click",()=>
{
   count++
   console.log(count);
   value.innerHTML = count;
})
decrease.addEventListener("click",()=>
{
   count--
   console.log(count);
   value.innerHTML = count;
})
reset.addEventListener("click",()=>{
    count = 0
    value.innerHTML = count;
})



 

  