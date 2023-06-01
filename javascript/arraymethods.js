//array methods//
//push//
// var a=["html","css","bootstrap5","javascript"];
// var b=a.push("reactjs","nodejs");
// console.log(a);

//pop//
// var a=["html","css","bootstrap5","javascript ","nodejs"];
// var b=a.pop();
// console.log(a);

//shift//
// var a=["html","css","bootstrap5","javascript ","nodejs"];
// var b=a.shift();
// console.log(a);

//unshift//
// var a=["html","css","bootstrap5","javascript"];
//  var b=a.unshift("reactjs","nodejs");
//  console.log(a);

//random//
// var a= Math.floor(Math.random()*(1000));
// console.log(a);
// document.write(a);

//round//
// var a=Math.round(99999.56);
// console.log(a);
// document.write(a);

//ciel//
// var a=Math.ceil(9999.0);
// console.log(a);
// document.write(a);

//splice//
// var a=["monday","tuesday","wednesday","thursday","friday","sunday",];
// console.log(a);
// var b=a.splice(5,0 ,"saturday");
// console.log(a);

//cuberoot//
//  var a=Math.cbrt(50);
//  console.log(a);
//  //sqrt//
 //var a=Math.sqrt(10);
 // console.log(a);
//  //power//
//  var a=Math.pow(15,15);
//  console.log(a);
 
//sort//
// var e=["456","5747","5352","6868","2324","7989"];
// var b=e.sort();
// console.log(b);

// //reverse//
// var u=["6","5","january","546","may"];
// var b=u.reverse();
// console.log(b);

//find//
// var h=["jan","feb","mar","april","may","june",];
// var b=h.find((A)=>
// {
//     return A.startsWith("a");
// })
// console.log(b);
 
//some//
// var h=["jan","feb","mar","april","may","june",];
//  var b=h.some((A)=>
//  {
//      return A.startsWith("b");
//  })
//  console.log(b);

//  //every//
//  var h=["jan","feb","mar","april","may","june",];
//  var b=h.every((A)=>
//  {
//      return A.startsWith("b");
//  })
//  console.log(b);
 
 //filter//
//  var products=[
// {
//     category:"mobiles",
//     productname:"vivo",
//     productprize:1500,
//     productmodel:446547,
// },
// {
//     productname:"appo",
//     productprize:2000,
//     productmodel:4679,
// },
// {
//     productname:"appoa92020",
//     productprize:3000,
//     productmodel:4667,
// },
// {
//     productname:"appok15",
//     productprize:2500,
//     productmodel:6362,
// },
// {
//     productname:"apporenopro",
//     productprize:3500,
//     productmodel:3366,
// },
// {
//     productname:"appoa53",
//     productprize:4000,
//     productmodel:4666,
// },
// {
//     productname:"appoa79",
//     productprize:4500,
//     productmodel:774,
// },
// {
//     productname:"realme",
//     productprize:5000,
//     productmodel:64478,
// },
// {
//     productname:"realme50",
//     productprize:5500,
//     productmodel:7378,
// },
// {
//     productname:"realmenarzo",
//     productprize:6000,
//     productmodel:36873,
// },
// {
//     productname:"realme9",
//     productprize:6500,
//     productmodel:2000,
// },
// {
//     productname:"apple",
//     productprize:200000,
//     productmodel:2004,
// },
// {
//     productname:"appleiphone",
//     productprize:75000,
//     productmodel:2015,
// },
// {
//     productname:"appleplus",
//     productprize:80000,
//     productmodel:2020,
// },
// {
//     productname:"applepluspro",
//     productprize:85000,
//     productmodel:2021,
// },
// {
//     productname:"appleihone13",
//     productprize:150000,
//     productmodel:2021,
// },
// {
//     productname:"samusunggalaxy",
//     productprize:35000,
//     productmodel:2022,
// },
// {
//     productname:"oneplus",
//     productprize:20000,
//     productmodel:2022,
// },
// {
//     productname:"lava",
//     productprize:25000,
//     productmodel:2018,
// },
// {
//     productname:"iphone",
//     productprize:45000,
//     productmodel:2022,
// },
// {
//     productname:"vivov20pro",
//     productprize:30000,
//     productmodel:2019,
// },
//  ]
//  var d=products.filter((mobiles)=>
//  {
//      return mobiles.productprize<=50000;
//  });
// console.table(d);

//number values//
//  var a=Math.max(25,69,50,45,30,20,10);
//    console.log(a);
//    var a=Math.min(5,10,49,35,60,90,100);
//    console.log(a);

// // isNan//
// var b=isNaN(55);
// console.log(b);

// //isinteger//
// var a=Number.isInteger(50);
// console.log(a);

//parseint,parsefloat//
// var d=parseInt(25.6765);
// console.log(d);
// var b=parseFloat(30.6765);
// console.log(b);

//tofixed ,toexponential//
// var a=35.857587986;
// var b=a.toFixed(5);
// console.log(b);
// var a=40.894343398;
// var b=a.toExponential(4);
// console.log(b);

//for each 
//  var a=["a","b","c","d","e","f"];
//  var b=a.forEach(para =>{
//     console.log(para);
//  });
//  for(i=0;i<=6;i++)
//  {
//    var b=console.log(a[i]);
//  }
    
 //map//
//  var a=[34,75,67,90,25,50];
//  var b=a.map((everyele=>{
//      return everyele*6;
//  }));
//  console.log(b);   
    
//  var a=[34,75,67,90,25,50];
//  var b=a.map((everyele=>{
//      return everyele-6;
//  }));
//  console.log(b);  

//  var a=[34,75,67,90,25,50];
//  var b=a.map((everyele=>{
//      return everyele+6;
//  }));
//  console.log(b);  

//  var a=[34,75,67,90,25,50];
//  var b=a.map((everyele=>{
//      return everyele/3;
//  }));
//  console.log(b);  

//  var a=[34,75,67,90,25,50];
//  var b=a.map((everyele=>{
//      return everyele%3;
//  }));
//  console.log(b);  


//for of//
// var a=["hi","hello","welcome","how","what"];
// for( const b of a){
//     console.log(b);
// }

//spread operator//
// var a=["1","4","9","2"];
// var b=["3","6","5","8"];
// var e=["20","40","65","100"];
// var c=[a,...b,...e];
// console.table(c);
// document.write(c);

//synchoronous,asynchronous//
// var b="welcome";
// console.log(b);
// setInterval(()=>{
//     // alert("welcome");
//     document.write(b+"<br>");
// } ,3000);

// var a="hello";
// console.log(a);
// setInterval(()=>{
//     // alert("hello");
//     document.write(a+"<br>");
// },5000);

//set constructor//
// var a=[20,35,69,10,25,44,90,100];
// var b=new Set(a);
// console.log(b);

var a=[10];
var b=new Set(a);
    b.add(20);
    b.add(25);
    b.add(30);
    b.add(35);
    console.log(b);
    b.delete(25);
    console.log(b);
    


 