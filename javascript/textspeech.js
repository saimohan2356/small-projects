var input=document.getElementById("input");
// var select=document.getElementById("select");
var btn=document.getElementById("btn");
var  qrcode=document.getElementById("qrcode");
// var speechinp=speechSynthesis;
// speechinp.addEventListener("voiceschanged",()=>{
//     var voices=speechinp.getVoices();
//     for (var singlevoice of voices)
//     {
//         console.log(voices); 
//         var optioninp=document.createElement("option");
//         optioninp.value=`${singlevoice.name} ${singlevoice.lang}`;
//         select.appendChild(optioninp);
//         optioninp.innerHTML=optioninp.value;  
//     }
  
// })

//  function textspeech(mytext)
//  {
//     var utteranceinp=new SpeechSynthesisUtterance(mytext);
//     for (const voice of speechSynthesis.getVoices())
//     {
//         if(voice.name===input.value)
//         {
//             utteranceinp.voice=voice;
//         }
//     }
//     speechSynthesis.speak(utteranceinp);
//  }

// btn.addEventListener("click",()=>
// {
//   if (input.value!=="")
//   {
//     if(!speechSynthesis.speaking)
//     {
//         textspeech(input.value);
//     }
//   }
//   else
//   {
//     alert("enter a valid input");
//   }
// })
// var btnstop=document.getElementById("btnstop");
// btnstop.addEventListener("stop",()=>
// {
//     if (input.value!=="")
//     {
//       if(!speechSynthesis.stop)
//       {
//           textspeech(input.value);
//       }
//     }
// })

btn.addEventListener("click",()=>
{ 
  if(input.value=="")
  {
    alert("please enter a text")
  }
  else
  {
    var qr=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example=${input.value}`;
    qrcode.src=qr;
  }

})


