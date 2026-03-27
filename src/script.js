// let name = "Deborah";
// console.log(name);

// let age = 15;
// console.log(age);

// let num1 = 10;
// let num2 = 5;
// let sum = num1 + num2;
// console.log(sum);

// let difference = num1 - num2;
// console.log(difference);

// let product = num1 * num2;
// console.log(product);

// let quotient = num1 / num2;
// console.log(quotient);

// 15 % 4; 
// let remainder = 15 % 4;
// console.log(remainder);

// let a = true;
// console.log(a);

// let b = 5;
// typeof b; 
// console.log(typeof b);
    
// let c = "Hello";
// typeof c; 
// console.log(typeof c);


//Prompt the user to enter a number
//Check if the number is even or odd
//Display that the number the user entered is even or odd


// let number = prompt("Enter a number")
// if( number % 2 == 0){
//     alert(`${number} is even`)
// } else{
//     alert(`${number} is odd`)
// }

// Take the user's name
//Ask for the age
//If they are 18 and above, display that they can sign up for tiktok
// If they are less than 18 display that they can't sign up tiktok

let name = prompt("What is your name?")
let answer = prompt("How old are you?")
let email = prompt("What is your email?")

if(answer < 12) {
    alert(`Hello ${name}. You are ${answer} years old and you are too young to register. Sorry😞😞`)
} else if(12 < answer && answer < 18){
    alert(`Hello ${name}. You are ${answer} years old and you have limited options to register for. We will keep you in touch via your mail: ${email}.👋👋👋`)
} else if(answer >= 18){
    alert(`Hello ${name}. You are ${answer} years old and you can register for any option of your choosing. We will keep you in touch via your mail: ${email}.👋👋👋`)
}


