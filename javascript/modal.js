var modal=document.getElementById("modal")
var body=document.getElementById("body")
var modalbtn=document.getElementById("modal-button")
var close=document.getElementById("close")

modalbtn.addEventListener('click',()=>{
    modal.style.display="block";
    body.style.backgroundBlendMode="overlay"
})

close.addEventListener('click',()=>{
    modal.style.display="none"
    body.style.background="white"
})