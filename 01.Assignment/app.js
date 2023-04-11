// Question 01
// Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

if (num1 > num2) {
  console.log("The larger number is: " + num1);
} else if (num2 > num1) {
  console.log("The larger number is: " + num2);
} else {
  console.log("The numbers are equal.");
}

// Question 02
// Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.
// Sample: 3
// Output : The sign is +
// Sample: -5
// Output : The sign is 


let number = prompt("Enter a number:");

if (number > 0) {
  alert("The sign is +");
} else if (number < 0) {
  alert("The sign is -");
} else {
  alert("The number is zero.");
}

// Question 03
// Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.


let number1 = prompt("Enter the first number:");
let number2 = prompt("Enter the second number:");
let number3 = prompt("Enter the third number:");
let number4 = prompt("Enter the fourth number:");
let number5 = prompt("Enter the fifth number:");

let largestNumber = number1;

if (number2 > largestNumber) {
  largestNumber = number2;
}

if (number3 > largestNumber) {
  largestNumber = number3;
}

if (number4 > largestNumber) {
  largestNumber = number4;
}

if (number5 > largestNumber) {
  largestNumber = number5;
}

console.log("The largest number is: " + largestNumber);


// Question 04

// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"


for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }

  
// Question 05

// Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.


let marks = prompt("Enter the your number:");
let totalMarks = 100;


let averageMarks = totalMarks / marks;

console.log("The average marks are: " + averageMarks);

if (averageMarks >= 90) {
  console.log("The grade is A");
} else if (averageMarks >= 80) {
  console.log("The grade is B");
} else if (averageMarks >= 70) {
  console.log("The grade is C");
} else if (averageMarks >= 60) {
  console.log("The grade is D");
} else {
  console.log("The grade is F");
}


// Question 06

// . Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz"


for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

  
// Question 07

// Write a JavaScript program to construct the following pattern, using a nested
// for loop.


for (let i = 1; i <= 5; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star += "* ";
    }
    console.log(star);
  }
  