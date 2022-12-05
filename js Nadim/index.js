// // console.log("hello world");
// // var myName="nadim naiyer";
// // console.log(myName);
// // var myAge=23;
// // console.log(myAge);
// // var _my__Name="nadim";
// // console.log(_my__Name);




// // data types in js

// var myName="Nadim Naiyer";
// console.log(myName);
// // type operator
// console.log(typeof(myName));
// var myAge=23;
// console.log(typeof(myAge));
// var iAMNadim=true;
// console.log(iAMNadim);
// console.log(typeof(iAMNadim));
// console.log(10+ "20");
// console.log(9- "5");
// console.log("java" +"script");
// console.log(" "+ " ")
// console.log("naiyer"-"nadim");
// null vs undefined
// var iAmUseless=null;
// console.log(iAmUseless);

// var iAmStandBy;
// console.log(iAmStandBy);
// NaN===NaN;
// Number.NaN===NaN;
// isNaN(NaN);
// isNaN(Number.NaN);
// Number.isNaN(Nan);


// console.log(isNaN(NaN));



// console.log(5+20);
// assignment opretor

// var x=5;
// var y=5;
// console.log("is a both the x and y are equal or not " + x==y);
// // arthemetic opretors
// console.log(1+2);
// console.log(10-5);
// console.log(20/5);
// console.log(3*5);





// incriment or decriment opretors

// postfix opretions

// var num=15;
// var newNUm=num++;
// console.log(num);
// console.log(newNUm);

// prefix opretions

// var num=15;
// var newNum=++num +5;
// console.log(num);
// console.log(newNum);


// comparison opretor

// var a=30;
// var b=10;
// console.log(a==b);
// console.log(a !=b);
// console.log(a>b)

// logical opretosr

var a=30;
var b=-20;
// logical AND opretor

// console.log(a>b && b>0);

// logical or opretor
// console.log(a>b || b>0);

// string opretors
// console.log("hello world");
// console.log("hello" + "world")

// challenge time 4
// console.log(3**3);
// console.log(3**4);
// ?shop 2 numbers
// var a=5;
// var b=10;
// var c=b;
// b=a;
// a=c;
// console.log("the value of a is " +a);
// console.log("the value of a is " +b);


// loops in js

// if raining =raincoat;
// else no raincoat;


// var tomr="rain";
// var tomr="sunny";


// if(tomr=="rain"){
//     console.log("take a raincoat");

// }else{
//     console.log("no need to raincoat")
// }


// leap year


// var year=2020;


// if(year %4===0){
//     if(year%100===0){
//         if(year%400===0){
//             console.log("the year"+ year + " is a leaper year");
//         }else{
//             console.log("the year"+ yera+ " in not leaper year");
//         }

//     }else{
//         console.log("the year"+ year+ " in not leaper year");

//     }

// }else{
//     console.log("the year" + year+ "is a leaper year");


// }




// truthy and falsey (0,false,undefined,NaN,null)

// if(score =0){
//     console.log("yeh,we won the game");


// }else{
//     console.log("omg ,we loss the game");
// }



// conditional(ternary) opretors

// the conditional (ternary) operator is the only javascript opretor that takes three operends
// var age=18;
// if(age>=18){
//     console.log("you are eligible to votre");
// }else{
//     console.log("you are  not eligible to votre");
// }

// var age=20;
// console.log( (age>=18) ? "you can vote" : "you can't vote");


// switch statement
// evaluatesan expression ,matching the expression's value ton a case clause ,
// and execute statements associated with taht case .

// 1st with out break statement
// find the area of tringle,circle,rectangl?

// var area="square";
// var PI=3.142,l=5, b=4, r=3;
// if(area=="circle"){
//     console.log(" the area of circle is:"= +PI*r**2);

// }else if(area=="tringle"){
//     console.log("the area of tringle:" +(l*b)/2);

// }else if(area=="rectangle"){


// console.log("the are of rectangle:" + (l*b));
// }else{
//     console.log("plese inter valid data");
// }

// var area="circle";
// var PI=3.142,l=5, b=4, r=3;
// switch(area){
//     case "circle":
//     console.log(" the area of circle is:"= +PI*r**2);
//     break;

//     case "triangle":
//         console.log("the area of tringle:" +(l*b)/2);    
//         break;

// case "rectanglr":
//     console.log("the are of rectangle:" + (l*b));
//     break;
//     default:
//         console.log("plese inter valid data");

// }

// while loop
// the while staement creates a loop that execute a specified statement
// as long as the test condition evalutes to true.
// var num=0;
// while(num<=10){
//     console.log(num++);
// }


// do while loop

// var num =0;

// do{
//     console.log(num);
//     num++;

// }while(num<=10);



// for loop

// for( var num=0;num<=10;num++){
// console.log(num);
// }\


// javascript program to print table for given number 
// (8,9,12,15) using for loop?

// for(var num=1;num<=20;num++){

//     var tableOf=10;
//     console.log ( tableOf +"*" +num +"=" +tableOf*num);
// }



// functions in java script
// 1  function definition
// 2 calling a function
//  3 function parameter
// 4 function argument
//  5 function expresssion
// 6 return keyword
// 7 anonymous function
   

// what is function definations 
// befor we use a function ,we need to define it,

// var a=10;
// var b=20;
// var sum=a+b;
// console.log(sum);

// function sum(){
//     var a=10;
//     var b=20;
//     var total =a+b;
// console.log(total);
// }

// sum();

// challenge no 7



// function sum(a,b){
   
//      var total =a+b;
//  console.log(total);
//  }
//  sum();
//  sum(20,30);
//  sum(50,50);
// sum(10,60);


// interview que
// 


// what is your functipon expression

// function sum(a,b){
//     var total =a+b;
//     console.log(total);

// }
// var funExp =sum(5,15);

// return keyword
// when javascript reaches return statement 
// the function will stop executing 


// fuction often compute a return value
// the return value is "returned " back to the "caller"


// function sum(a,b){
//     return total =a+b;
    

// }
// var funExp =sum(5,15);
// console.log( " the sum of two number is" + funExp);
 

// WELCOME TO ECMAScript
// ECMAScript 2015

// var myName="nadim ";
// console.log(myName);
// myName="naiyer";
// console.log(myName);

//  let  myName="nadim ";
// console.log(myName);
// myName="naiyer";
// console.log(myName);
// const myName="nadim ";
// console.log(myName);
// myName="naiyer";
// console.log(myName);


// function biodata(){
//     var myFirstName="nadim";
//     console.log(myFirstName);
//     if(true){
//         var myLastName="naiyer";
//         console.log("inner " +myLastName);
//         console.log("inner "+myFirstName );

//     }
//     console.log("innerouter " + myLastName);
// }
// // // biodata(); 

// mult(a,b){
// return a*b
// return a*b;
// }
// console.log(mult(5,3));


//  fat arrow function

// normal way to writing function

// console.log(sum());
// function sum(){
//     let a=5;b=6;
//     let sum=a+b;
//     return 'the sum of two number is ${sum}';
// }
// how to convert fat arrow function

// const sum =( )=>{
//     let a=5;b=6;
//     let sum=a+b;
//     return 'the sum of two number is ${a+b}';
// }
// console.log(sum());

// ARRAYS IN JAVAscript(6)

// when we use var,we can stored only one value at a time;

// var friend1="sarfaraz";
// var friend2="sahid";
// var friend3="kaif";
// var myFriends =['sarfaraz',22, 'sahid',23,'kaif',17];
// var Names=["nadim","naiyer","kaif","raza"];
// //    treaversal of an array
// secarching and filter in an array
// hopw to short and compare an array
// how to insert add and replace and delet element in array(CRUD)
// map (),Reduce(),filter();


// var myFriends=new Array 

// var myFriends =['sarfaraz',22, 'sahid',23,'kaif',17];

// traversal array
// var myFriends =['sarfaraz', 'sahid','kaif'];
// console.log(myFriends[2]);

// if we want to check the lenghth of the array elements;

// console.log(myFriends.length-1);


// for in loop

// var myFriends =['sarfaraz', 'sahid','kaif'];

// for( var i=0;i<myFriends.length;i++){
//      console.log(myFriends[i]);
// }

// for in loop and for of loop index no ke liye use krte he and elements ke liye

// var myFriends =['sarfaraz', 'sahid','kaif'];

// for(let elements in myFriends){
//     console.log(elements);
// }
// for(let elements of myFriends){
//     console.log(elements);
// }

// array prototype.forEach()loop
// calls a function for each elements in the array

// var myFriends =['sarfaraz', 'sahid','kaif'];

// myFriends.forEach(functions(element,index,array){
//     console.log(element+"index:"+ index)

// });
// myFriends.forEach((element,index,array)=>{
//     console.log(element+"index:"+ index)
// })

// searching and filter in array in js

//  var myFriends =["sarfaraz","sahid","kaif","raju"];
//  console.log(myFriends.indexOf);
  

// how to insert add and replace and delet element in array(CRUD)


// array prototype.push

// const animals=['hen','caw','goats'];
//  const count=animals.push('sheep','ox','duck');
// console.log(animals);
// console.log(count);


// // unshifit

// const animals=['hen','caw','goats'];
//  const count=animals.unshift('sheep','ox','duck');
// console.log(animals);
// console.log(count);

// // 2nd example
// const myNumber=[1,2,3, 5];
// myNumber.unshift(4,6);

// console.log(myNumber);


// const plants=['brocc0li','cauliflower','kale','tomato','cabbage'];
// console.log(plants);
// console.log(plants.pop());
// console.log(plants);

// shift array

// const plants=['brocc0li','cauliflower','kale','tomato','cabbage'];
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);

// challange time 9;

// 1: Add Dec at the end of an array?

// const months=['jan','murch','april','june','july'];

// sol1

// const newMonth=months.splice(months.length,0,"Dec");
// console.log(months);
// sol2
// console.log(newMonth);

// sol3

// const months=['jan','murch','april','june','july'];
// const indexOfMonth=months.indexOf('june');
// if(indexOfMonth != -1){
//     const updateMonth=months.splice(indexOfMonth,1,'June');
// }else{
//     console.log('No such data find');
// }


// console.log(months);


//  map array
// const array1=[1,4,9,16,25];
// num>9;
// let newArr=array1.map((curElem,index,arr)=>{
//     return curElem>9;

// })
// console.log(array1);
// console.log(newArr);


//  let arr=[25,36,49,64,81];
// let arrSqr =arr.map((curElem)=>{
//     return curElem;
// })
// console.log(arrSqr);



// let arr=[2,3,4,5,6,8];
// let arr2=arr.map((curElem)=>{
//     return curElem *2;

// }).filter((curElem)=>{
//     return curElem>10;
// })
// console.log(arr2);
// 78  

// Reduce mrthod 
// flatten an array means  to convert the 3d and 2d array in to a 
// single demenstional array





//  the reduce()methods executes a reduce function (thwt you provides )
// on each elements of array of the array, resulting in single out put value


// the reduce function takes four argumnts :
// accumulator
// Current Value 
// Current Index
// Source Array

// let arr=[5,6,2];
// let sum=arr.reduce(( accumulator,curElem,index,arr) =>{
//     return accumulator +=curElem;
// })
// console.log(sum);


// multiple 

// let arr=[5,6,2];
// let sum=arr.reduce(( accumulator,curElem,index,arr) =>{
//     return accumulator *=curElem;
// })
// console.log(sum);

// subtraction

// let arr=[5,6,2];
// let sum=arr.reduce(( accumulator,curElem,index,arr) =>{
//     return accumulator -=curElem;
// })
// console.log(sum);

// How to fatten an array
// converting 2d and array 3d into one dimensional array


// const arr=[
//     ['zone_1','zone_2'],
//     ['zone_3','zone_4'],
//     ['zone_5','zone_6'],
//     ['zone_7','zone_8']

    
// ];
// let flatArr=arr.reduce((accum,currVal)=>{
//     return accum.concat(currVal);
// })
// console.log(flatArr);




// STRINGS IN JAVASCRIPT

// 1 Escape character
// 2 Finding a String in a string
// 3 searching for a string in a string
// 4 Extracting string part 
// 5 replecing string content
// 6 Extracting String character
// 7 other use ful methods
// let myName="nadim";
// let myChannelName="nadim naiyer";
// let ytName=new String("nadim technical");
// console.log(myName);
// console.log((ytName));

//  how to find the length of a string 
// string .prototype .length
// reflets the length of the string


// let myName="nadim naiyer";
// console.log(myName .length);  

            //Escape character

// let anySentance="we are the so-called  \"vikings\" fromthe north.";

// console.log(anySentance);


// let anySentance='we are the so-called  "vikings" fromthe north.';

// console.log(anySentance);


// from index
// indexof
// const myBioData= 'I am nadim naiyer '

// console.log(myBioData.indexOf("Nadim"));

        //  searching in a string in a string
        
        // Extracting String parts

        // var str="apple, Banana, kiwi, mango";
        // // let res =str.slice(0,5);
        // let res =str.slice(7);
        // console.log(res);


// challange 10,


// Display only 280 characters of a string like the
// one used in twitter?
// let mytwitter ="Lorem nagopdhhb nbcjihe2jl   bgiuejgkmm njchdigik njhiue2khuh nbcihheor4oheiu jefegb wiej jeirurienfu jnjeirjhuiiekhufegufhejfnjfheo niiero4t9 huiuefij4knsbfiedjwkjv jifeulwndfiuhfjo3iflkcmsnvidkdhofljheuiruklj kdiuyrue nadim";
// let myActualTweet = myTweets.slice(0,280);
// console.log(myActualTweet);
// console.log(myActualTweet.length);

// substring
// let str ="Apple, Banana, kiwi";
// let res =str.substring(8,-2);
// console.log(res);

// sub

// let str ="Apple, Banana, kiwi";
// // let res=str.substr(7,-2);
// let res =str.substr(-4);
// console.log(res);

        //       Replacing String content();

// let myBioData ="I am nadim naiyer ";
// let replaceData = myBioData.replace("nadim","Nadim");
// console.log(replaceData);
// console.log(myBioData);

// Extracting String content

// there are three methods for extracting string character :;
// charAt(position)
// charcodeAt(position)
// property access[]


// the charAt() method 
// the charAt()method returns the character at a
// specified index(position) in a string

// let str ="HELLO WORLD";

// console.log(str.charAt(3));

// unic code;

// var str ="HELLO WORLD";

// console.log(str.charCodeAt(0));

// challange 11;

// return the unicode of the last character in a string 

// let str ="HELLO WORLD";
// let lastChar=str.length -1;
// console.log(str.charCodeAt(lastChar));

// property access
//      ECMAScript 5 (2009) allows property access[]on strings;

// var str ="HELLO WORLD";
// console.log(str[1]);


// let myName ="nadim naiyer";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());


// the concat()method 
// concat()joins two or more strings
// let fName ="Nadim";
// let lName ="Naiyer";
// console.log(fName.concat(lName));
// console.log(fName.concat(" ",lName));

// string .trim

// var str ="           nadim           ";
// console.log(str.trim());

// converting a string to an array

// A string can be converted to an array with the split()method

// 

// var txt ="a,b,c,d";   // string

// console.log(txt.split(","));
// console.log(txt.split(" "));
// console.log(txt.split("|"));

// DATE AND TIME IN JAVAScript

// Date Methods(get and set)
// Time Methods(get and set)
 
// javascript date objects represents a single moment in a time in a 
// plateform independent formet .date object contain a number 
// that represent millisecond since 1 january 1970 uTc.

// Creating Date objeects
// there are four ways to creating a new date objects.


//  new Date()
//  new Date(year,months,day,hours,minutes,seconds,milliseconds)
// //  its take 7 ways
// new Date(milliseconds)
// // we cannot avoid month section
// new Date(date String)

// new Date()
        // date object are created with the new date()constroctor.

// let currDate =new Date();
// console.log(currDate);

// console.log(new Date());
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());
 
//  Date.now()
// Returns the numeric value crossponding to the current time the number 
// of milliseconds elapased since january 1,1970 00:00:00 UTC
// console.log(Date.now());



//  new date(year,month,....);
// 7 number specify year,month,day,hours,minutes,seconds,milliseconds(in order that)
// note: javascript counts months from 0 to 11;

// january is 0 and december is 11;

// var d = new Date(2022,11,26,10,33,30,0);
// console.log(d.toLocaleString());

// how to gate the indivisual date

// const curDate =new Date();
// console.log(curDate.toLocaleDateString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());
// console.log(curDate.getDate());
// console.log(curDate.getDay());



// const curDate =new Date();
// console.log(curDate.toLocaleDateString());
// console.log(curDate.getFullYear(2022));
// console.log(curDate.getMonth(10));
// console.log(curDate.getDate(26));
// console.log(curDate.getDay(6));

// how to set  time indivisual

//  const curTime =new Date();
// console.log(curTime.toLocaleDateString());
// console.log(curTime.getFullYear(2022));
// console.log(curTime.getMonth(10));
// console.log(curTime.getDate(26));
// console.log(curTime.getDay(6));


// JAVASCRIPT MATH OBJECT 

//  the java script math object allows you to perform mathematical task on number 

// console.log(math.PI);    method

// console.log(Math.PI);

// math .round 
// return the value of x rounded to its nearest integer 

// let num =10.2565;
// console.log(Math.round(num));

// let num =10.5565;
// console.log(Math.round(num));

// Math.pow();
// Math .pow(x,y) returns the value of x to the power of y

// console.log(Math.pow(2,3));
// console.log(2**3);

// Math.sqrt();
// Math .sqrt(x) returns the square root of x;

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(121));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(85));

// Math.abs()
// Math.abs(x) return the absolute (positive) value of x;

// console.log(Math.abs(-55));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-955));


//  Math .ceil();
// Math.ceil(x) returns the value of x rounded up to its nesrest integer

// console.log(Math.ceil(4.4));
// console.log(Math.ceil(4));
// console.log(Math.ceil(99.1));

// math.floor()
//  math.floor(x) return the value of x rounded down to its  neareset integer

// console.log(Math.floor(4.4));

// console.log(Math.floor(99.9));
// math.min()
// matj.min( ) can be used to find the lowrest value in a list of argument

// console.log(Math.min(0,150,28,20,-8,-17,-200));

// math.max()
// matj.min( ) can be used to find the highest value in a list of argument


// console.log(Math.max(0,150,28,20,-8,-17,-200));
//  math.random()

// Math.random() returns a random number between 0(inclusive),and 1

// console.log(Math.random()*10);

// Math.trunc()
// the trunc()method returns the integer part of a number

// console.log(Math.trunc(4.6));

// console.log(Math.trunc(-99.1));

// DOM IN JAVASCRIPT (10) //
//  window vs Document
//  DOM vs BOM 
//  DOM Navigation 
//  searching and getting elementss Refrance


//  1 window vs document

// window 
// 1: window is the main container or we we can say the global object 
// and any opretion related to entire browser window can be part of window object

// Document
// 1: where as the Dom is the child of window object 

//  for ex
// change the background colour to red
// document.body.style.background ="red"; 


// DOM nevigations

 
// EVENTS IN JAVASCRIPT(11)//

// 4 ways of writing Events in javascript 


// what is event object?
// MouseEvent in javascript
// keybpard Event in java script
// inputEvent in javascript

// HTML events are "things" that happen to HTML elements.
// when javaScript is used to in HTML pages ,javascript can "react" on these events.

// HTML events
// an HTML Events can be somthing the browser dose, or somthing is use dose.

// here are some example of html events

// an html web pages has finished loading 
// an html input filed was changed 
// an html button was clicked
// often ,when events happen ,you may want to do somthing
// javascript lets you execute code we events are detected

// html allows event holders Attributes ,with java script code to be added to html elements 
       



// TIMING BASED EVENTS IN IS//

// setTimeout()
// setInterval()
// clearTimeout()
// clearInterval()

// OPPS IN JAVASCRIPT//
// 


//   let bioData={
//         myName:"Nadim Naiyer",
//         myAge: 23,
//         getData :function(){
//                 console.log("my name is ${bioData.myName} and myAge is ${bioData.myAge}")
//         }
//   }
//   console.log(bioData.getData());


// let bioData={
//         myName:"Nadim Naiyer",
//         myAge: 23,
//         getData :function(){
//                 console.log("my name is ${bioData.myName} and myAge is ${bioData.myAge}")
//         }
//   }
//   console.log(bioData.getData());

// this object//

// const obj = {
//         myAge:23,
//         myName() {
//                 console.log(this);

//         }
// }
// obj.myName();


// Destructuring in ES6
//  the destruring assignment syntex is a java script expression
// that makes it possible to unpack value from arrays,
// or properties from objects,into distinct variable.


// =>Array destructing 

// const myBioData =['nadim', 'Naiyer', 23];

// let myFName=myBioData[0];
// let myLName =myBioData[1];
// let myAge = myBioData[2];
// console.log( myFName);

// let [myFName,myLName,myAge]= myBioData;
// console.log( myFName);


//  ES7
// 1:Array
// imclude methods
// const colors =['red','black','blue','green'];
// const isPresent =colors.includes('white');

// console.log(isPresent);
// "use strict";
// x=3.14;
// console.log(x);

// ADVANCE JAvascript

// Event propogation 
// // what is event propogation?
// ans:- the event propagation mode determines in which order
//  the elements received the elements received the Event
        
// hoisting 
// example
// console.log(myName);
// var myName;
// myName="Nadim";

// var myName;
// console.log(myName)  

// myName="Nadim";

// scope chain
//  for example
// let a ="hello guys";
// const first=()=>{
//         let b="how are you?";
//         const second=()=>{
//                 let c ="hii,I am fine thank you.";
//                 console.log(a+b+c);
//         }
//            second();
// }
// first();

// closures

 



// const add= (a,b)=>{
//     return a+b;

// }
// // console.log(add(5,2));
// const subs=(a,b)=>{
//     return Math.abs(a-b);
// }
// const mult =(a,b)=>{
//     return a+b;
// }
// const calculator =(num1,num2,operator)=>{
//     return operator(num1,num2);
// }
// calculator(5,2,subs);
// console.log(calculator(5,2,mult));













   