var container=document.getElementById("container");
var btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    if (container.paused){
        container.play();
        btn.innerHTML="pause";
    }
    else{
        container.pause();
        btn.innerHTML="play";
    }
})

// var a=document.getElementById("sector");
// var b=document.createElement("h1");
// b.innerHTML="javascript";
// var c=a.appendChild(b);
// console.log(a);
