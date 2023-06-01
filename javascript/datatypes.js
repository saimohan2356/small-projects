// var num1=50;
// console.log(typeof(num1));

// var num2=75;
// console.log(typeof(num2));

// var c=null;
// console.log(c);

// var edc;
// console.log(edc);

// var bln="true";
// console.log(typeof(bln));

//arrays//
// var employees=["fggdg","gdge","ggdg","dwd","hgvu","gtdd",];
// console.log(employees);
// document.write(employees);
// console.log(employees[4]);
// document.write(employees[4]);
// document.write("<br>");

//objects//

// var students={
//     stdname:"venkatesh",
//     stdid:546237,
//     stdage:25,
// }
// console.log(students);
// document.write(students);

//operators//
//arithmethic operators//
//addition//
// var a=500;
// var b=5000;
// var sum=a+b;
// console.log(sum);

// //subtraction//
// var sub=a-b;
// console.log(sub);

// //multiplication//
// var mul=a*b;
// console.log(mul);

// //division//
// var div=a/b;
// console.log(div);

// //modulus//
// var mod=a%b;
// console.log(mod);

//assignment operators//
// var a=40;
// var b=60;
// console.log(a+=b);
// var d=a-=b;
// console.log(d);
// var e=a*=b;
// console.log(e);
// var f=a/=b;
// console.log(f);
// var g=a%=b;
// console.log(g);

//comparision operators//
// var a=30;
// var b="30";
// console.log(a==b);
// console.log(a===b);

// var a=30;
// var b=20;
// // console.log(a>b);
// console.log(a<b);
 
//terminary operator
//   var a=prompt("enter the value");
//   var b=prompt("enter the another value");
//   (a>b)?console.log("a is greater"):console.log("b is greater");

// var btn=document.getElementById("btn");
// btn.addEventListener("input",()=>
// {
//    document.body.style.backgroundColor=btn.value;
//    var a=prompt("enter the value");
//      var b=prompt("enter the another value");
//   (a>b)?console.log("a is greater"):console.log("b is greater");
// });

//loops//
 //for loop//
// var a=["a","b","c","d","e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// for (i=0;i<26;i++)
// {
//     console.log(a[i]);
//     document.write(a[i]);
//     document.write("<br>");
// }

// var a=prompt("enter the number");
// var reach=prompt("enter the limit");
// for (i=reach;i>=0;i--)
// {
//     console.log(`${a}*${i}=${i*a}`);
//     document.write(`${a}*${i}=${i*a}`);
//     document.write("<br>");
// }
   //while loop//
       
    //   var a=prompt("enter the number");
    //   var reach=prompt("enter the limit");
    //    var i=0;
    //    while(i<=reach)
    //    {
    //     document.write(`${a}*${i}=${i*a}`);
    //     document.write("<br>");
    //     i++;
    //    }

       //do-while//
  
    //   var a=prompt("enter the number");
    //   var reach=prompt("enter the limit");
    //    var i=0;
    //    do
    //    {
    //     document.write(`${a}*${i}=${i*a}`);
    //     document.write("<br>");
    //     i++;
    //    }
    //    while(i<=reach);
        

   //  var a="this  /t is/t heading";
   //  console.log(a);
   //  document.write(a);
//function call//
//

   

// employee.empsalary.call(employee);
// var employee2=
// {
//    empname:"abc",
//    salary:75000,
// }
// employee.empsalary.call(employee2);
//call//
// var studentdetails=
// {
//    stdname:"tww",
//    stdid:10,
//    stdage:function()
//    {
//       document.write(this.stdid)
//    }
// }
//  studentdetails.stdage.call(studentdetails);

// var students=[
//   {
//    stdname:"venkatesh",
//    stdid:33,
//    stdage:19
//   },
//   {
//    stdname:"teja",
//    stdid:88,
//    stdage:20
//   },
//   {
//    stdname:"tejaswar",
//    stdid:72,
//    stdage:21
//   },
//   {
//    stdname:"samba",
//    stdid:55,
//    stdage:22
//   },
//   {
//    stdname:"dilip",
//    stdid:43,
//    stdage:19
//   },
//   {
//    stdname:"sai",
//    stdid:34,
//    stdage:20
//   }
// ];

// for(var i=0;i<students.length;i++)
// {
//    console.log(students[3].stdname);
// }
//bind//
// var studentdetails=
// {
//    stdname:"ege",
//    stdid:65,
//    stdage:function()
//    {
//       document.write(this.stdname);
//        return console.log(this.stdname)
//    }
// }
// var welcome=studentdetails.stdage.bind(studentdetails);
// welcome()
//apply//
// var studentdetails=
// {
//    stdname:"sss",
//    stdid:88,
//    stdage:function(a,b)
//    {
//       document.write(this.stdid);
//       console.log(a,b)
//       return console.log(this.stdid)
      
//    }
// }
// studentdetails.stdage.apply(studentdetails, [2021,2022]);

// var subjects=["maths","physics","chemistry","computer","electronics"];
// var [a,b,c,d,e]=subjects;
// document.write(a+"<br>"+b+"<br>"+c+"<br>"+d+"<br>"+e);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// var salary={
//    A:20000,
//    B:30000,
//    C:35000,
//    D:45000,
//    E:50000
// }
// for (let i in salary){
//    // var salary="₹";
//    console.log(`${i} : $ ${salary[i]}`);
//    document.write(`${salary[i]}`);
// }

function sum(a,b)
{
   var c=(a+b);
   console.log("sum of a and b is :"+c);
   return c;
}
function sub(a,b)
{
   var c=(a-b);
   console.log("sub of a and b is :"+c);
   return c;
}sub(10,sum(10,20));
function mul(a,b)
{
   var c=(a*b);
   console.log("mul of a and b is :"+c);
   return c;
}
function div(a,b)
{
   var c=(a/b);
   console.log("div of a and b is :"+c);
   return c;
}mul(10,div(10,20));