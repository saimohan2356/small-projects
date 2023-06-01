var quote=document.getElementById("quote");
var btn=document.getElementById("btn");
var author=document.getElementById("author");

// btn.addEventListener("click",()=>
// {
//     var url=`https://type.fit/api/quotes`;
//     fetch(url).then(result=>result.json())
//     .then(data=>
//         {
//             console.log(data);
//             var i=Math.floor(Math.random()*data.length);
//             quote.innerHTML=data[i].text;
//             author.innerHTML=data[i].author;

//     })
// })
var result=[
    {
        "text":"pratice makes man perfect",
        "author":"naveen"
    },
    {
        "text":"the future depends on what you do today",
        "author":"das"
    },
    {
        "text":"if life was easy where would all the adventures",
        "author":"will roggers"
    },
    {
        "text":"dont let yesterday take up of to much today",
        "author":"einstein"
    }
]
btn=addEventListener("click",()=>{
    var length=Math.floor(Math.random()*result.length);
    quote.innerHTML=result[length].text;
    author.innerHTML=result[length].author;
})
