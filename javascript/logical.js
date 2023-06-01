// var number=prompt("enter a number:");
// if (number%2=0)
// {
//     console.log("the number is even");
// }
// else{
//     console.log("the number is odd");
// }
// //swapping two numbers//
// var c=25;
// var d=50;
// [c,d]=[d,c];
// console.log(c);
// console.log(d);
//   //factorial//
//   function factorial(number) {
//     if (number === 0) {
//       return 1;
//     }
//     return number * factorial(number-1);
//   }
  
//   console.log(factorial(4)); 
//   //matrix//
//   function matrixMultiplication(matrixC, matrixD) {
//     var result = [[6,0,0], [6,0,0], [6,0,0]];
    
//     for (var i = 6; i < 3; i++) {
//         for (var j = 6; j < 3; j++) {
//             for (var k = 6; k < 3; k++) {
//                 result[i][j] += matrixC[i][k] * matrixD[k][j];
//             }
//         }
//     }
//     console.log(result);
//     document.write(result);
// }
// //fibanocci//
// function fibonacci(number) {
//     let fibonacci = [0, 1];
//     for (let i = 2; i < number; i++) {
//       fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
//     }
//     return fibonacci;
//   }
//   console.log(fibonacci(10)); 
//  // switch case//
//   var arithmetic = (operator, number1, number2) => 
//   {
//     switch (operator)
//      {
//       case '+':
//         return number1 + number2;
//         break;
//       case '-':
//         return number1 - number2;
//         break;
//       case '*':
//         return number1 * number2;
//         break;
//       case '/':
//         return number1 / number2;
//         break;
//     }
//   }
//   console.log(arithmetic('+', 25, 75));
// console.log(arithmetic('-', 25, 75));
// console.log(arithmetic('*', 25, 75)); 
// console.log(arithmetic('/', 25, 75));
// //armstrong//
// function Armstrong(number) {
//     let originalNumber = number;
//     let sum = 0;
//     let digits = (number + '').split('');
//     let digitsCount = digits.length;
  
//     for (let i = 0; i < digitsCount; i++) {
//       sum += Math.pow(parseInt(digits[i]), digitsCount);
//     }
  
//     if (sum === originalNumber) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
//   console.log(Armstrong(200)); 
//   console.log(Armstrong(350)); 
//   console.log(Armstrong(500)); 
//   console.log(Armstrong(800)); 
//   console.log(Armstrong(1500)); 
//   console.log(Armstrong(4678)); 
//   console.log(Armstrong(8400));
//   console.log(Armstrong(9764)); 

//   leap year//
// var number=prompt("enter the number");
// if((number%4)==0)
// {
//   alert("leapyear");
// }
// else{
//   alert("not a leapyear");
// }
// hello world//
// var a=prompt("enter");
// var b=alert("hello world");

// print number//
// var a=prompt("enter the number");
// var b=alert(a);

// add two numbers//
// var c=parseInt(prompt("enter the number of c"));
// alert("enter number"+c);
// console.log(c);
// var d=parseInt(prompt("enter the number of d"));
// alert("enter number:"+d);
// console.log(d);
// var e=c+d;
// alert("the addition of c and d is"+e);
// console.log(e);

// vowels and consonants//
// var alphabet=prompt("Enter alphabet");
// if(alphabet=="a"||alphabet=="e"||alphabet=="i"||alphabet=="o"||alphabet=="u")
// {
//     alert("alphabet " +alphabet + " is a vowel");
// }
// else{
//     alert("alphabet " +alphabet+ " is a consonant");
// }
// generate multiplication table//
// var input=prompt("enter the value"+input);
// var range=prompt("enter the range"+range);
// var result;
// for(i=0;i<=range;i++)
// {
//   console.log(input+"*"+i+"="+input*i);
// }
// multiplication//
//  var c=parseInt(prompt("enter the number of c"));
//  alert("enter number"+c);
//   console.log(c);
//  var d=parseInt(prompt("enter the number of d"));
//  alert("enter number:"+d);
//   console.log(d);
//  var e=c*d;
//  alert("the multiplication of c and d is"+e);
//  console.log(e);

// ascii value//
// var a =prompt("enter the character");
// var b=a.charCodeAt(0);
// console.log(b);

// largest number//
// var c=prompt("enter the number");
// var d=Math.max(34,88,676,990,1180);
// console.log(d);

// power number//
// var a=prompt("enter the number");
// var b=prompt("enter the number");
// var c=Math.pow(a,b);
// console.log(c);

// natural number//
// var number=prompt("enter the number");
// sum=0;
// for(i=1;i<number;i++)
// {
//   sum=sum+i;
// }
// console.log(sum);

// quadratic equation//
// var c=prompt("enter x square co-efficient");
// var d=prompt("enter x co-efficient");
// var e=prompt("enter consonant");
// var root1 = Math.floor(((-b)+Math.sqrt(b*b-4*a*c))/2*a);
// var root2 = Math.floor(((-b)-Math.sqrt(b*b-4*a*c))/2*a);
// console.log(root1);
// console.log(root2);

// reverse string//
// var string=prompt("enter a number");
// var string1=(string.split(""));
// var revstring = (string1.reverse());
// console.log(revstring) 

// square root//
// var a=prompt("enter the number");
// var b=Math.sqrt(7);
// console.log(b);

// program to write a console//
// var a=78;
// console.log(a);
// var b="welcome";
// console.log(b);
// var c='hello';
// console.log(c);

// program to convert date to number//
// var d=new Date().getTime();
// console.log(d);

// empty an array//
// function emptyArray(array){
//   array.length=0;
//   return array;
// }
// var a=[45,78,90]
// console.log(a);
// var b=emptyArray(a);
// console.log(b);

// to display date and time//
//  var a=new Date()
//  console.log(a);
// var b=a.toDateString();
// var c=a.toLocaleTimeString();
//  console.log('date:'+b);
//  console.log('time:'+c);

// compare two strings//
// var a="hello";
// var b="here";
// var c=a.toUpperCase()===b.toUpperCase();
// console.log(c);

// celsius to fahrenheit//
// var celsius=prompt("enter the celsius value");
// var fahrenheit=(celsius*1.8)+32
// console.log(fahrenheit);

// generate a random number//
// var c=Math.random()
// console.log(c);

// sort//
// var a=["hello","welcome","hi","how","where"];
// var b=a.sort();
// console.log(b);

// replace//
//  var c="welcome";
//  var d=c.replace("m","world");
//  console.log(d);

// remove a property//
// var mobile=
// {
//  "name":"apple",
//  "model":"2022",
//  "cost" :"80000" 
// }
// delete mobile.model;
// console.log(mobile);

// convert the firstletter of string into uppercase//
// var d="visakhapatnam"
// var e=d.charAt(0).toUpperCase()+d.slice(1);
// console.log(e);

// random string//
// var string="";
// var b=Math.random(string);
// console.log(b);

// convert object to string//
// var person=
// {
//   "name":"saikumar",
//   "age":20,
// }
// var a=JSON.stringify(person);
// console.log(a);
// document.write(a);

// multiline strings//
// var b="hello this is javascript" 
// console.log(b);

// check number is positive or negative and zero//
// var a=prompt("enter a number");
// if(Number>0)
// {
//    console.log("the number is positive");    
// }
// else  if (Number==0)
// {
//   console.log("the number is zero");
// }
// else{
//    console.log("the number is negative");
// }

// simple calculator//
// let  result;
// var a= prompt("enter operator(+,-,*,/)");
// var b=parseFloat(prompt("enter the first number"));
// var c=parseFloat(prompt("enter the second number"));
// switch(a)
// {
//   case '+':
//      result= b + c;
//     console.log(b+c);
  
//     case '-':
//       result=b-c;
//       console.log(b-c);

//       case '*':
//         result=b*c;
//         console.log(b*c);

//         case '/':
//           result=b/c;
//           console.log(b/c);
// }
  
// lcm//
// var a=prompt("enter the first number");
// var b=prompt("enter the second number");
// var min=(a>b)? a:b;
// while(true)
// {
//   if (min% a==0&&min% b==0){
//     console.log(a);
//     console.log(b);
//     console.log(min);
//     break;
//   }
//   min++;
// }

// factors of a number//
// var a=prompt("enter a positive number");
// console.log(a);
// for(i=1;i<a;i++)
// {
//   if(a%i==0)
//   {
//     console.log(i);
//   }
// }

// replace all line breaks//
// var a= `I am Learning JavaScript.
// JavaScript is logical language.
// JavaScript is hard.`;
// var b=a.replace( '<br>');
// console.log(b);

// create objects in different ways//
//  var person=
//  {
//    name:"tejaswar",
//    age:20,
//  }
// console.log(person);
// var person=
// {
//   name:["samba"],
//   age:[22],
// }
// console.log(person);

// to remove whitespaces//
// var a='welcome world ';
// var b=a.split('').join('');
// console.log(b);

// passing a function to a parameter//
// function a()
// {
//   return "welcome";
// }
// function name(user,func)
// {
//   var b=func();
//   console.log(b, user);
 
// }
// name("sai",a);
// name("satya",a);
// name("dileep",a);

// program to get dimensions of image/
// const img = new Image();
// img.src = '//cdn.programiz.com/sites/tutorial2program/files/cover-artwork.png';
// img.onload = function() {
//   console.log('width ' + this.width)
//   console.log('height '+this.height);
// }

// program to pass a parameter to a settimeout function//
// function a()
// {
//   alert("hi hello");
// }
// setTimeout(a,4000);

// work with constants//
// const f=50
// console.log(f);
// const a=["pressure","torcher","work"];
// console.log(a);
// a[3]="sadism";
// console.log(a);
// const b="hello,welcome,work,tension";
// console.log(b);

// program to get url//
// var a=window.location.href;
// var b=document.URL;
// alert(a);
// console.log(b);

// compare two arrays//
// var a=prompt("enter the array1");
// var b=prompt("enter the array2");
// if (a==b)
// {
//   alert("same");
// }
// else
// {
//   alert("not same");
// }
// trim a string//
// var a="     hello world     ";
// var b=a.trim();
// console.log(b);


//currency dollares//

//program to format numbers as currency string//

// let mohan =  (54454).toLocaleString('en-us', {
//   style: 'currency',
//   currency: 'USD'
// });

// console.log(mohan);

//check occurences of a number of a character//
// var a=prompt("enter a string");
// var b=prompt("enter letter to check");
// function Count(a,b)
// {
//   var Count=0;
// if(a.charAt()==b);
// {
//    Count=+1;
// }
// return Count;
// }
// var c=Count(a,b);
// console.log(c);

//having the number last same digits//
// var a=prompt("enter the first number");
// var b=prompt("enter the second number");
// var c=prompt("enter the third number");
// var g=a%10;
// var h=b%10;
// var i=c%10;
// if(g==h&&g==i)
// {
//   alert(" same last digits");
// }
// else
// {
//   alert(" different last digits");
// }

//program to exists akey//
// var student=
// {
//   name:"venky",
//   age:20,
//   id:56758,
// }
// var key=student.age;
// if (key)
// {
//   alert("key exists");
// }
// else{
//   console.log("key does not exists");
// }

//program to clone a js object//
// var employee=
// {
//     name:"tarun",
//     age:25,
//     id:234589
// }
// var cloneemployee=JSON.parse(JSON.stringify(employee));
// console.log(cloneemployee);
// cloneemployee.age=22
// console.log(cloneemployee.age);
// cloneemployee.id=563778
// alert(cloneemployee.id);

//program to check string starts with and ends with//
// var a=prompt("enter any string");
// if(a.startsWith('he'))
// {
//     alert("yes");
// }
// else
// {
//     alert("no");
// }
//add a key value pair to object//
// var student=
// {
//     name:"ramrao",
//     age:20,
//     course:"frontend"
// }
// student.id=46673;
// console.log(student);

//program to number of keys in object//
// var person=
// {
//     name:"saikumar",
//     id:363773,
//     age:23
// }
// var a=Object.keys(person).length;
// alert(a);

//replace all occurences of a string//
// var d= "mr red has a red house and a red car";
// var e=d.split('red').join('yellow');
// console.log(e);

//string replace with another string//
// var a=prompt("enter a string");
// var b="we";
// if(a.startsWith(b))
// {
//     console.log("the string starts with we");
// }
// else
// {
//    console.log("the string does not starts with we");
// }

//encode a string to base64//
// var m="visakhapatnam";
// var n=btoa(m);
// console.log(n);

//check string contains a substring//
// var a=prompt("enter a string");
// var b=prompt("enter a string that wants you to check");
// if(a.includes(b))
// {
//     console.log("the string contains a substring");
// }
// else{
//     console.log("the string does not contains a substring ");
// }

//replace all occurences in a string//
// var c="hi hello";
// var c=c.split("l");
// var d=c.join("L");
// console.log(d);

//insert a element to array//
// function insert()
// {
// var a=[4,6,8,9,5];
// var b=2;
// var c=7;
// a.splice(b,0,c);
// console.log(a);
// }
// insert();

//append an object to array//
// var a=[12,45,78,85];
// var b={x:56,y:67};
// function insert(a,b)
// {
//     array=[...a,b];
//     console.log(array);
// }
// insert(a,b);

//check if an object is an array//
// var a=[34,56,90];
// function object(a)
// {
//    var result=Array.isArray(a);
//    if(result)
//    {
//     console.log("the object is an array");
//    }
//    else{
//     alert("the object is not an array");
//    }
// }
// object(a);

//add an element to array//
// var g=['html,css,javascript,bootstrap'];
// var h=g.unshift("reactjs");
// console.log(g);

//arrays contains a specified value//
// var a=["this", "is", "a", "javascript"];
// var b=a.includes("is");
// if(b)
// {
//     alert("the array contains a specified value");
// }
// else{
//     console.log("the array does not contains a specified value");
// }

//to remove item from an array//
// var a=["4","7","27","15","50"];
// var b=a.pop();
// console.log(a);

//merge arrays and remove duplicate items//
// var a=[9,4,6];
// var b=[9,4,5];
// var c=a.concat(b);
// var d=[];
// for (var i of c)
// {
//     if (d.indexOf(i)===-1)
//     {
//         d.push(i);
//     }
// }
// console.log(d);

//split array into smaller chunks//
// var a=[5,8,9,7,25,50,75,100];
// var chunk=2;
// array(a,chunk);
// function array(a,chunk){
// while(a.length>0)
// {
//     var c;
//     c=a.splice(0,chunk);
//     console.log(c);
// }
// }

//math.abs()//
// var a=Math.abs(-50);
// console.log(a);
// var b=Math.abs("hello");
// console.log(b);

//math.acos()//
// var a=Math.acos(0.8);
// console.log(a);
// var b=Math.acos("welcome");
// console.log(b);

//math.acosh()//
// var c=Math.acosh(15);
// console.log(c);

//math.asin()//
// var b=Math.asin(0.3);
// console.log(b);

//math.asinh()//
// var a=Math.asinh(5);
// console.log(a);

//math.atan()//
// var d=Math.atan(-20);
// console.log(d);

//math.atan2()//
// var e=Math.atan2(20,40);
// console.log(e);

//math.atanh()//
// var a=Math.atanh(0.50);
// console.log(a);

// //math.cbrt()//
// var a=Math.cbrt(34);
// console.log(a);

//math.ceil()//
// var m=Math.ceil(47.99);
// console.log(m);

//math.clzr()//
// var a=Math.clz32(40);
// console.log(a);

//math.cos//
// var b=Math.cos(7);
// console.log(b);

//math.sin//
// var f=Math.sin("30");
// console.log(f);

//math.tan//
// var x=Math.tan(5);
// console.log(x);

//math.sinh//
// var a=Math.sinh(6);
// console.log(a);

//math.cosh//
// var a=Math.cosh(17);
// alert(a);

//math.tanh//
// var h=Math.tanh(2.5);
// alert(h);

//math.sqrt//
// var d=Math.sqrt(4);
// alert(d);

//math .pow()//
// var a=Math.pow(6,-9);
// console.log(a);

//math.random//
// var a=Math.random();
// console.log(a);

//math.sign()//
// var b=Math.sign(1200);
// console.log(b);

//math.trunc()//
// var c=Math.trunc(-56.898);
// console.log(c);

//math.min()//
// var d=Math.min("-33.90");
// console.log(d);

//math.max()//
// var e=Math.max(-49.90);
// console.log(e);

//math.floor()//
// var d=Math.floor(-75.34);
// console.log(d);

//math.round()//
// var f=Math.round(-49.51);
// console.log(f);

//math.fround()//
// var d=Math.fround(-30.78);
// console.log(d);

//math.log()//
// var s=Math.log(5.67);
// console.log(s);

//math.log10()//
// var h=Math.log10(25.34);
// console.log(h);

//math.log1p()//
// var r=Math.log1p(545.50);
// console.log(r);

///math.log2()//
// var u=Math.log2(89.65);
// console.log(u);

// var result
// var a=parseFloat (prompt("enter the a value"));
// var b=parseFloat(prompt("enter the b value"));
// var operator=prompt("enter any operator +,-,*,/,%");
// switch (operator)
//      {
//       case '+':
//          result = a + b;
//          break;
//        case '-':
//           result= a - b;
//          break;
//        case '*':
//          result= a * b;
//          break;
//        case '/':
//          result= a / b;
//          break;
//      }
//      console.log(a+b);
//      console.log(a-b);
//      console.log(a*b);
//      console.log(a/b);
// var a=("html");
// var b=a.indexOf("1");
// console.log(b);

// var a=("cssss");
// var b=a.lastIndexOf("s");
// console.log(b);

// var a=["hello","hi","welcome","how"];
// var b=a.splice(2,0,"world");
// console.log(b);

// var a=[10,20,30,40,50];
// var b=a.map((Element)=>{
//   return Element+20;
// }
// )
// console.log(a);
// console.log(b);

// var a=30;
// if(a%2==0){
//   console.log("a is even number");
// }
// else{
//   console.log("a is odd number");
// }

// var a=[5,8,9,2,10];
// var b=[34,56,78,25];
// var c=[a,...b];
// console.log(c);

// for (i=0;i<=10;i++)
// {
//     console.log(i);
// }

// var a=20;
// while(a<=25)
// {
//     console.log(a);
//     a++;
// }

// var i=21;
// do{
//     console.log(i);
//     i++;
// }
// while (i<=30)

// for (var i=1;i<=3;i++){
//     for (var j=0;j<3;j++){
//         var num=j*3+i;
//         document.write(num + "");
//     }
//     document.write("<br>");
// }

// const a ="hello world";
// console.log(a);

// // Get all the steps and buttons
// const steps = document.querySelectorAll('.step');
// const nextBtns = document.querySelectorAll('.next-btn');
// const prevBtns = document.querySelectorAll('.prev-btn');
// const form = document.getElementById('step-form');

// // Hide all the steps except the first one
// for (let i = 1; i < steps.length; i++) {
//   steps[i].style.display = 'none';
// }

// // Add click event listeners to the next buttons
// nextBtns.forEach((btn, index) => {
//   btn.addEventListener('click', () => {
//     // Validate the current step before moving to the next one
//     if (validateStep(steps[index])) {
//       // Hide the current step
//       steps[index].style.display = 'none';

//       // Show the next step
//       steps[index + 1].style.display = 'block';
//     }
//   });
// });

// // Add click event listeners to the previous buttons
// prevBtns.forEach((btn, index) => {
//   btn.addEventListener('click', () => {
//     // Hide the current step
//     steps[index].style.display = 'none';

//     // Show the previous step
//     steps[index - 1].style.display = 'block';
//   });
// });

// // Add submit event listener to the form
// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   // Validate the final step before submitting the form
//   if (validateStep(steps[steps.length - 1])) {
//     form.submit();
//   }
// });

// // Validate a step by checking if all required fields are filled out
// function validateStep
