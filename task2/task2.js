//Task2 in that subtasks
// TASK-1

var studentName = "Uday";
let studentAge = 25;
const collegeName = "MVIT College";


// 1. Print all three values

console.log("Student Name: " , studentName);
console.log("Student Age: " , studentAge);
console.log("College Name: " , collegeName);


// 2. Change the var value

studentName = "Uday Kumar";

console.log("Student Name: " , studentName);


// 3. Change the let value

studentAge = 23;

console.log("Student Age: " , studentAge);


// 4. Try changing const value

//collegeName = "ABC College";

// Error: Assignment to constant variable


// 5. Try redeclaring var

var studentName = "Uday";

console.log("Student Name: " , studentName);


// 6. Try redeclaring let

// let studentAge = 25;

// Error: Identifier 'studentAge' has already been declared



// ===========================================
// TASK-2
// User Information


let name01 = prompt("Enter your name");
let age01 = prompt("Enter your age");
let city01 = prompt("Enter your city");

console.log("Name: " , name01);
console.log("Age: " , age01);
console.log("City: " , city01);



// ================================
// TASK-3
// Welcome Message


let userName = prompt("Enter your name");

alert("Welcome " + userName + "!");



// ===========================================
// TASK-4
// Age Calculator


let birthYear = prompt("Enter your birth year");

let currentYear = 2026;

let userAge = currentYear - birthYear;

console.log("Birth Year: ",  birthYear);
console.log("Age: "  ,userAge);



// ================================
// TASK-5
// Identify Data Types

let message = "Hello";
let number = 100;
let decimal = 25.5;
let isTrue = true;
let isFalse = false;
let empty;
let nullValue = null;

console.log(typeof message);
console.log(typeof number);
console.log(typeof decimal);
console.log(typeof isTrue);
console.log(typeof isFalse);
console.log(typeof empty);
console.log(typeof nullValue);



// ================================
// TASK-6
// Student Data

let student = {
    name: "Uday",
    age: 22,
    city: "Mysore",
    qualification: "BE",
    isStudent: true
};

console.log(student);

console.log(student.name);
console.log(student.age);
console.log(student.qualification);
console.log(student.isStudent);



// ======================================
// TASK-7
// Fruit Array


let fruits = [
    "Apple",
    "Mango",
    "Orange",
    "Banana",
    "Grapes",
    "Papaya"
];


// First fruit

console.log("First fruit: " , fruits[0]);


// Second fruit

console.log("Second fruit: " , fruits[1]);


// Last fruit

console.log("Last fruit: " , fruits[fruits.length - 1]);


// Total number of fruits

console.log("Total fruits: " , fruits.length);



// ================================
// TASK-8

let a = 20;
let b = 5;


// Addition

console.log("Addition: " , (a + b));


// Subtraction

console.log("Subtraction: " , (a - b));


// Multiplication

console.log("Multiplication: " , (a * b));


// Division

console.log("Division: " , (a / b));


// Modulus

console.log("Modulus: " , (a % b));


// Exponentiation

console.log("Exponentiation: " , (a ** b));


//Addition: 25
//Subtraction: 15
//Multiplication: 100
//Division: 4
//Modulus: 0
//Exponentiation: 3200000


// ====================================
// TASK-9


let shirt = 999;
let pant = 1499;
let shoes = 1999;

let total = shirt + pant + shoes;

console.log("Total: " , total);



// ================================
// TASK-10
// Simple Marks Calculation

let tamil = 80;
let english = 75;
let maths = 90;

let totalMarks = tamil + english + maths;

let averageMarks = totalMarks / 3;

console.log("Total Marks: " , totalMarks);
console.log("Average Marks: " , averageMarks);



// ================================
// TASK-11
// Post Increment

let num1 = 10;

let num2 = num1++;

console.log(num1);
console.log(num2);

// Output
// num1 = 11
// num2 = 10



// =====================================
// TASK-12


let num3 = 10;

let num4 = ++num3;

console.log(num3);
console.log(num4);

// Output
// num3 = 11
// num4 = 11



// ================================
// TASK-13
// Post Decrement


let num5 = 20;

let num6 = num5--;

console.log(num5);
console.log(num6);

// Output
// num5 = 19
// num6 = 20



// ================================
// TASK-14
// Pre Decrement

let num7 = 20;

let num8 = --num7;

console.log(num7);
console.log(num8);

// Output
// num7 = 19
// num8 = 19



// ===================================
// TASK-15



// TASK 15 — Find the Final Values

// Expected Output 
// a = 7
// b = 4
// c = 7
// d = 5


let a15 = 5;

let b15 = a15++;

let c15 = ++a15;

let d15 = b15--;


console.log(a15);
console.log(b15);
console.log(c15);
console.log(d15);


// Verified Output
// 7
// 4
// 7
// 5



//===========================================
// TASK-16



// Addition Assignment

let value1 = 10;

value1 += 5;

console.log("Addition Assignment: " , value1);


// Subtraction Assignment

let value2 = 10;

value2 -= 5;

console.log("Subtraction Assignment: " , value2);


// Multiplication Assignment

let value3 = 10;

value3 *= 5;

console.log("Multiplication Assignment: " , value3);


// Division Assignment

let value4 = 10;

value4 /= 5;

console.log("Division Assignment: " , value4);


// Modulus Assignment

let value5 = 10;

value5 %= 3;

console.log("Modulus Assignment: " , value5);


// Exponentiation Assignment

let value6 = 10;

value6 **= 2;

console.log("Exponentiation Assignment: " , value6);



// ================================
// TASK-17



// Variables

let myName = "Uday";
let myAge = 22;
let myCity = "Mysore";
let myCollege = "MITM College";


// Array

let subjects = [
    "JavaScript",
    "HTML",
    "Machine Learning",
    "Java",
    "Python"
];


// Object

let studentDetails = {
    name: myName,
    age: myAge,
    city: myCity,
    subjects: subjects,
    isStudent: true
};


// 1. Student name

console.log("Student Name: " , studentDetails.name);


// 2. Student age

console.log("Student Age: " , studentDetails.age);


// 3. City

console.log("City: " , studentDetails.city);


// 4. First subject

console.log("First Subject: " , studentDetails.subjects[0]);


// 5. Last subject

console.log("Last Subject: " ,
    studentDetails.subjects[studentDetails.subjects.length - 1]);


// 6. Total subjects

console.log("Total Subjects: " + studentDetails.subjects.length);


// 7. Complete object

console.log("Complete Object:");

console.log(studentDetails);

//========================================
// FINAL CHALLENGE



let firstNumber = Number(prompt("Enter first number"));
let secondNumber = Number(prompt("Enter second number"));


// Addition

console.log( "Addition: " , (firstNumber + secondNumber));


// Subtraction

console.log("Subtraction: " ,(firstNumber - secondNumber));


// Multiplication

console.log("Multiplication: " ,(firstNumber * secondNumber));


// Division

console.log("Division: " ,(firstNumber / secondNumber));


// Modulus

console.log( "Modulus: " , (firstNumber % secondNumber));


// Power

console.log("Power: " ,(firstNumber ** secondNumber));