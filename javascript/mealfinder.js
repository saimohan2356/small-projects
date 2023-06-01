// var userinput=document.getElementById("text");
// var btn=document.getElementById("btn");
// var meals=document.getElementById("meals");
// var image=document.getElementById("image");

// btn.addEventListener("click",()=>
// {
//    if(Text.value=="")
//    {
//     alert("please enter any meals or keywords");
//    }
//    else{
//     var text1=Text.value;
//     var url=`www.themealdb.com/api/json/v1/1/search.php?f=a=${text1}`
//     fetch(url).then(result=>result.json())
//        .then(data=>
//         {
//             meals.innerHTML=data.meals.map(
//                (meal)=>
//                <div class="meal">
//                   <image.style="width:200px;height:200px;"src="${meal.strMealthumb}"alt="">
//                   <p>item name ${meal.strMeal}</p>
//                </div>
//             )
//    })


// }

// })
var text=document.getElementById("text");
var btn=document.getElementById("btn");
var image=document.getElementById("image");
var meals=document.getElementById("meals");
btn.addEventListener("click",()=>{
    if(text.value==""){
        alert("enter something valid");
    }
    else{
        var text1=text.value;
        var url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${text1}`;
        fetch(url).then(data=>data.json())
        .then(data=>{
            meals.innerHTML=data.meals.map(
                (meals)=>`
                <div class="meal">
                <img style="width: 10rem;height: 10rem;" src="${meals.strMealThumb}" alt="">
                <p>Item name :${meals.strMeal}</p>
                </div>                `
            )
            console.log(data);
            })}})