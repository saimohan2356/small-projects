var userinput=document.getElementById("userinput");
var locationnn=document.getElementById("locationnn");
var temperature=document.getElementById("temperature");
var climate=document.getElementById("climate");
var btn=document.getElementById("btn");
var apikey="ddb9c2dca343bfd6e67fefdec9ece529"

btn.addEventListener("click",()=>
{
   if(userinput.value=="")
   {
    alert("please enter any location");
   }
   else{
       var userinp=userinput.value;
       var url=`https://api.openweathermap.org/data/2.5/weather?q=${userinp}&appid=${apikey}`
       fetch(url).then(result=>result.json())
       .then(data=>
        {
            console.log(data);
            const{name}=data;
            locationnn.innerHTML=name;
            const{description}=data.weather[0];
            climate.innerHTML=description;
            const{feels_like}=data.main;
            temperature.innerHTML=(Math.floor(feels_like-273));
        })


        
   }



})