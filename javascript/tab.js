var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var btn3=document.getElementById("btn3");
var p1=document.getElementById("p1");
btn1.addEventListener("click",()=>{
    p1.innerHTML="HELLO WORLD";
});
btn2.addEventListener("click",()=>{
    p1.innerHTML="WELCOME";
});
btn3.addEventListener("click",()=>{
    p1.innerHTML="It refers to the development of both front end(client side) and back end(server side) portions of web application.";
})