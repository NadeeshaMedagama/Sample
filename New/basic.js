// let a =5;
// console.log(a);

// function sumNumbers(num = 10){
//     num += 10 ;
//     return num;
// }
// console.log(sumNumbers(10));

var number = 10;
number = 20;
console.log(number);

console.log("Hello World!");
// window.alert("Hello");
// window.alert("World!");

let firstName = "Nadeesha";
let age = 22;
let student = false;

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled : " + student;

let userName = window.prompt("What is your name?");
console.log(userName);
let userAge = window.prompt("How old are you?");
console.log(userAge);

let userName;
document.getElementById("myButton").onclick = function(){

    userName = document.getElementById("userName").value;
    console.log("Your name is :" , userName);
    document.getElementById("myLabel").innerHTML = "Hello " + userName;
}

let Age = window.prompt("Age:");
console.log("Before the change:" , typeof Age);
Age = Number(Age);
console.log("After the change:" , typeof Age);
Age += 1;
console.log("You are" , Age , "years old"); 

let z;
z = Boolean("");
console.log(z , typeof z);

const pi = 3.14159;
let radius;
let circumference;

radius = window.prompt("What is the radius?");
radius = Number(radius);

circumference = 2 * pi * radius;

 console.log("Circumference is " , circumference);
let a = 4.99;
a = Math.round(a);
a = Math.floor(a);
console.log(a);
let b = Math.PI;
console.log(b);

document.getElementById("Submit").onclick = function(){

    a = document.getElementById("aSide").value;
    a = Number(a);

    b = document.getElementById("bSide").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a , 2) + Math.pow(b , 2));
    //console.log(Math.sqrt(c));
    document.getElementById("cLabel").innerHTML = "Side C :" + c;

}

let count = 0 ;

document.getElementById("decreaseBtn").onclick = function(){
    count-=1 ;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("resetBtn").onclick = function(){
    count=0;
    document.getElementById("countLabel").innerHTML = count ;
}
document.getElementById("increaseBtn").onclick = function(){
    count+=1 ;
    document.getElementById("countLabel").innerHTML = count;
}

let x ;
let y ;
let c ;


// document.getElementById("roll").onclick = function(){
//     x = Math.floor(Math.random() * 10) +1;
//     y = Math.floor(Math.random() * 10) +1;
//     c = Math.floor(Math.random() * 10) +1;

//     document.getElementById("aLabel").innerHTML = x;
//     document.getElementById("bLabel").innerHTML = y;
//     document.getElementById("cLabel").innerHTML = c;
// }

// let phoneNumber = "123-456-789";
// console.log(phoneNumber.replaceAll("-" , "_"));

// let fullName = "Nadeesha Madhubhan Medagama";
// let firstname;
// let LastName;

// firstname = fullName.slice(0 , fullName.indexOf(" "));
// LastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(firstname);
// console.log(LastName);

// let userName = "nadeesha";
// let letter = userName.charAt(0);
// letter = letter.toUpperCase();
// let letter = userName.charAt(0).toUpperCase();

// console.log(letter);

// document.getElementById("button").onclick = function(){

//     const check = document.getElementById("checkbox");
//     const visa = document.getElementById("visa");
//     const master = document.getElementById("master");
//     const paypal = document.getElementById("paypal");

//     if(check.checked){
//         console.log("You are Subscribed!");
//     }else{
//         console.log("You are not Subscribed!");
//     }
//     if(visa.checked){
//         console.log("Your payment method is Visa.");
//     }else if (master.checked){
//         console.log("Your payment method is MasterCard.");
//     }else if (paypal.checked){
//         console.log("Your payment method is PayPal.");
//     }else{
//         console.log("You have not selected any payment method");
//     }
// }

// let grade  = 49;

// switch(true){
//     case grade >= 90:
//         console.log("You have Grade A pass");
//         break;
//     case grade >= 80:
//         console.log("You have Grade B pass");
//         break;
//     case grade >= 70:
//         console.log("You have Grade C pass");
//         break;
//     case grade >= 60:
//         console.log("You have Grade D pass");
//         break;
//     case grade >= 50:
//         console.log("You have Grade E pass");
//         break;
//     default :
//         console.log("You have not any Grade pass");
//         break;

// }

// let temperarture = 2;
// let weather = true;

// if(temperarture >15 && weather){
//     console.log("Weather is cold");
// }
// else{
//     console.log("Weather is Hot");
// }

// let count = 15;

// if (!(count > 0)){
//     console.log("Count is greater than 0");
// }else{
//     console.log("Count is less than 0");
// }
// let name = "";
// while(name == ""){
//     name = window.prompt("Enter your name :"); 
// }
// console.log("Hello" , name);

// while(true){
//     console.log("Hello")
// }
console.log("Hi");

// for ( let i = 1 ; i < 11 ; i++){
//     if(i==5){
//         // continue ;
//         break;
//     }
//     console.log(i);
// }
// let symbol = window.prompt("Enter you need symbol :");
// let rows = window.prompt("Enter num of Rows :");
// let cols = window.prompt("Enter num of columns :");

// for(let i = 1 ; i <= rows ; i++){
//     for (let j = 1 ; j <= cols ; j++){
//         document.getElementById("rectangle").innerHTML += symbol ;
//     }
//     document.getElementById("rectangle").innerHTML += "<br>" ;
// }
// happy();

// function happy(){
//     let name= "Nadeesha";
//     let age = 22;

//     happyBirthday(name , age);
// }
function happyBirthday(name , age){
    console.log("Your name is" , name , "\nYou are" , age , "years old");
}
happyBirthday("Nadeesha" , 26);

// let width;
// let height;
// let area;

// width = window.prompt("Enter a width");
// height = window.prompt("Enter a height");

// area = getArea(width , height);

// console.log("Area is" , area);

// function getArea(width , height){
//     return width * height ;
// }

let myage = getAge(19);

console.log(myage);


function getAge(myage){
    return myage > 18 ? true : false ;
}

check(56);

function check(win){
    win ? console.log("Win") : console.log("Lose") ;
}

let Name = "Nadeesha";
let Age = 23;
let value = 50;

let text = `Hello ${Name} <br>
            You are ${Age} years old<br>
            Your total is $${value} for the foods.<br>`

document.getElementById("123").innerHTML = text;

let myNum = .5;

myNum = myNum.toLocaleString("en-US", {style: "currency" , currency: "USD"});
myNum = myNum.toLocaleString("hi-IN", {style: "currency" , currency: "INR"});

myNum = myNum.toLocaleString(undefined , {style : "percent"});
console.log(myNum);

