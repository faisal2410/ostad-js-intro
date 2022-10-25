// Functions/Parameter/Argument/Function Declaration/ Function Expression/Return
//  ফা্ংশনকে একটা মেশিনের সাথে তুলনা করা যেতে পারে।
//  ফাংশন হচ্ছে কয়েক লাইন কোডের সমস্টি (block of code) যা নির্দিষ্ট একটি কাজ সম্পাদন করে।

// function add(){
//     console.log(2+3);
//     console.log("Bangladesh")
// }





// calling / running / invoking function

// add();
// console.log("We are learning basic js")
// add();
// add();
// add();
// console.log("We are learning basic js");
// add();

// function sumOfTwoNumbers(x,y){
//     return x+y;
    
// }

// var result=sumOfTwoNumbers(30,40);
// console.log(result);




///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
var age1 = calcAge1(1991);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// Function expression
var calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
var age2 = calcAge2(1991);

console.log(age1, age2);

