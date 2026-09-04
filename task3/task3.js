// ========================================
// TASK 1
// var, let, const
// ========================================

var studentName = "Uday";
let studentAge = 25;
const collegeName = "MVIT College";

// Print all three values

console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("College Name:", collegeName);

// Change var value

studentName = "Uday Kumar";

console.log("Changed Student Name:", studentName);

// Change let value

studentAge = 26;

console.log("Changed Student Age:", studentAge);

// Try changing const value

// collegeName = "ABC College";

// Error: Assignment to constant variable.

// Try redeclaring var

var studentName = "Uday";

console.log("Redeclared Student Name:", studentName);

// Try redeclaring let

// let studentAge = 30;

// Error: Identifier 'studentAge' has already been declared.

// const collegeName = "ABC College";

// Error: Identifier 'collegeName' has already been declared


// =================================================
// TASK 2

// Printing Statements


// console.log()

console.log("Hello JavaScript");

// alert()

alert("Welcome to JavaScript");

// confirm()

confirm("Do you like JavaScript?");

// prompt()

let userName = prompt("Enter your name");

// document.writeln()

document.writeln("Hello " + userName);


// ============================================
// TASK 3
// User Details


let name1 = prompt("Enter your name");
let age = prompt("Enter your age");
let city = prompt("Enter your city");
let qualification = prompt("Enter your qualification");

console.log("Name:", name1);
console.log("Age:", age);
console.log("City:", city);
console.log("Qualification:", qualification);


// ==============================================
// TASK 4
// Find Data Types


let value1 = "JavaScript";
let value2 = 100;
let value3 = 99.5;
let value4 = true;
let value5 = false;
let value6;
let value7 = null;

// Print values

console.log(value1);
console.log(value2);
console.log(value3);
console.log(value4);
console.log(value5);
console.log(value6);
console.log(value7);

// Print data types

console.log(typeof value1);
console.log(typeof value2);
console.log(typeof value3);
console.log(typeof value4);
console.log(typeof value5);
console.log(typeof value6);
console.log(typeof value7);


// ======================================================
// TASK 5

// Student Array

let students = [
    "Arun",
    "Priya",
    "Kumar",
    "Divya",
    "Rahul"
];

console.log("First Student:", students[0]);

console.log("Second Student:", students[1]);

console.log("Last Student:", students[students.length - 1]);

console.log("Total Students:", students.length);


// ================================================
// TASK 6
// Employee Object


let employee = {
    name: "Uday",
    age: 25,
    role: "Software Developer",
    skills: ["JavaScript", "HTML", "CSS"],
    isWorking: true,
    qualification: ["BE", "MCA"]
};

console.log("Employee Name:", employee.name);

console.log("Age:", employee.age);

console.log("Role:", employee.role);

console.log("First Skill:", employee.skills[0]);

console.log(
    "Last Qualification:",
    employee.qualification[employee.qualification.length - 1]
);

console.log("Working Status:", employee.isWorking);


// ===============================================
// TASK 7
// Calculator


let a = 20;
let b = 5;

console.log("Addition:", a + b);

console.log("Subtraction:", a - b);

console.log("Multiplication:", a * b);

console.log("Division:", a / b);

console.log("Modulus:", a % b);

console.log("Exponentiation:", a ** b);


// ==============================================
// TASK 8
// Shopping Bill


let shirt = 999;
let pant = 1499;
let shoes = 1999;
let bag = 799;

let totalPrice = shirt + pant + shoes + bag;

console.log("Total Price:", totalPrice);


// ==============================================
// TASK 9
// Increment & Decrement


// A - Post Increment

let a1 = 10;

let b1 = a1++;

console.log(a1);
console.log(b1);

// Output
// 11
// 10


// B - Pre Increment

let a2 = 10;

let b2 = ++a2;

console.log(a2);
console.log(b2);

// Output
// 11
// 11


// C - Post Decrement

let a3 = 10;

let b3 = a3--;

console.log(a3);
console.log(b3);

// Output
// 9
// 10


// D - Pre Decrement

let a4 = 10;

let b4 = --a4;

console.log(a4);
console.log(b4);

// Output
// 9
// 9


// ==================================================
// TASK 10
// Assignment Operators


// +=

let num1 = 10;

num1 += 5;

console.log("Addition Assignment:", num1);

// Output: 15


// -=

let num2 = 10;

num2 -= 3;

console.log("Subtraction Assignment:", num2);

// Output: 7


// *=

let num3 = 10;

num3 *= 2;

console.log("Multiplication Assignment:", num3);

// Output: 20


// /=

let num4 = 10;

num4 /= 4;

console.log("Division Assignment:", num4);

// Output: 2.5


// %=

let num5 = 10;

num5 %= 3;

console.log("Modulus Assignment:", num5);

// Output: 1


// **=

let num6 = 10;

num6 **= 2;

console.log("Exponentiation Assignment:", num6);

// Output: 100


// =============================================
// TASK 11
// Comparison Operators


console.log(10 > 5);

console.log(10 < 5);

console.log(10 >= 10);

console.log(10 <= 9);

console.log(5 == "5");

console.log(5 === "5");

console.log(10 != "10");

console.log(10 !== "10");

// Output
// true
// false
// true
// false
// true
// false
// false
// true


// ==============================================
// TASK 12
// Logical AND


console.log(true && true);

console.log(true && false);

console.log(false && true);

console.log(false && false);

// Output
// true
// false
// false
// false


// ==============================================
// TASK 13
// Logical OR


console.log(true || true);

console.log(true || false);

console.log(false || true);

console.log(false || false);

// Output
// true
// true
// true
// false


// ==============================================
// TASK 14
// Logical NOT


console.log(!true);

console.log(!false);

console.log(!(5 > 10));

console.log(!(10 > 5));

// Output
// false
// true
// true
// false


// ===============================================
// TASK 15
// Comparison + Logical


console.log(5 == "5" && !(5 === 5) || 6 > 7);

console.log(10 > 5 && 8 < 12 || 4 === "4");

console.log(7 === 7 && 10 != "10" || 5 >= 5);

console.log(15 < 10 || 20 > 15 && 5 == "5");

// Output
// false
// true
// true
// true


// ==================================================
// TASK 16
// Ternary - Voting


let votingAge = 20;

let votingResult = votingAge >= 18
    ? "Eligible to vote"
    : "Not eligible";

console.log(votingResult);


// ================================================
// TASK 17
// Ternary - Password


let password = true;

let loginResult = password
    ? "Login successful"
    : "Wrong password";

console.log(loginResult);


// =====================================================
// TASK 18
// Concatenation & Template String


let userName1 = "Naveen";
let userAge = 25;
let userCity = "Trichy";

// Using +

console.log(
    "My name is " + userName1 +
    ". I am " + userAge +
    " years old. I live in " + userCity + "."
);

// Using template literal

console.log(
    `My name is ${userName1}. I am ${userAge} years old. I live in ${userCity}.`
);


// ========================================
// TASK 19
// String Conversion


let stringValue1 = String(100);
let stringValue2 = String(true);
let stringValue3 = String(undefined);
let stringValue4 = String(null);
let stringValue5 = String([1, 2]);

console.log(stringValue1);
console.log(typeof stringValue1);

console.log(stringValue2);
console.log(typeof stringValue2);

console.log(stringValue3);
console.log(typeof stringValue3);

console.log(stringValue4);
console.log(typeof stringValue4);

console.log(stringValue5);
console.log(typeof stringValue5);


// =============================================
// TASK 20
// Number Conversion


console.log(Number());

console.log(Number(""));

console.log(Number("123"));

console.log(Number("a1"));

console.log(Number(true));

console.log(Number(false));

console.log(Number(undefined));

console.log(Number(null));

// Output
// 0
// 0
// 123
// NaN
// 1
// 0
// NaN
// 0


// ========================================
// TASK 21
// Boolean Conversion
// ========================================

console.log(Boolean());

console.log(Boolean(""));

console.log(Boolean("hello"));

console.log(Boolean(123));

console.log(Boolean(true));

console.log(Boolean(false));

console.log(Boolean(undefined));

console.log(Boolean(null));

console.log(Boolean([]));

console.log(Boolean({}));

// Output
// false
// false
// true
// true
// true
// false
// false
// false
// true
// true


// ===============================================
// TASK 22
// Voting Eligibility


let ageForVoting = Number(prompt("Enter your age"));

if (ageForVoting >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}


// ============================================
// TASK 23
// Positive or Negative


let number = Number(prompt("Enter a number"));

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


// ===============================================
// TASK 24
// Grade System

let marks = Number(prompt("Enter your marks"));

if (marks >= 90 && marks <= 100) {
    console.log("A Grade");
} else if (marks >= 80) {
    console.log("B Grade");
} else if (marks >= 70) {
    console.log("C Grade");
} else if (marks >= 60) {
    console.log("D Grade");
} else {
    console.log("Fail");
}


// ==============================================
// TASK 25
// Nested If - Job Eligibility


let jobAge = Number(prompt("Enter your age"));
let height = Number(prompt("Enter your height"));
let weight = Number(prompt("Enter your weight"));

if (jobAge >= 18) {

    if (height >= 160) {

        if (weight >= 60) {
            console.log("Congratulations! You are selected");
        } else {
            console.log("Weight requirement not satisfied");
        }

    } else {
        console.log("Height requirement not satisfied");
    }

} else {
    console.log("Age requirement not satisfied");
}


// =============================================== 
// TASK 26
// Traffic Light


let trafficLight = prompt("Enter traffic light color");

switch (trafficLight) {

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid color");
}


// ==============================================
// TASK 27
// Day


let day = 1;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}


// =============================================
// TASK 28
// FINAL MINI PROJECT


// Student Result System


// Step 1 - User details

let studentName1 = prompt("Enter your name");
let studentAge1 = Number(prompt("Enter your age"));
let studentCity1 = prompt("Enter your city");

// Step 2 - Marks

let tamilMarks = Number(prompt("Enter Tamil marks"));
let englishMarks = Number(prompt("Enter English marks"));
let mathsMarks = Number(prompt("Enter Maths marks"));

// Step 3 - Calculate

let totalMarks1 = tamilMarks + englishMarks + mathsMarks;

let averageMarks1 = totalMarks1 / 3;

// Step 4 - Grade

let grade;

if (averageMarks1 >= 90) {
    grade = "A";
} else if (averageMarks1 >= 80) {
    grade = "B";
} else if (averageMarks1 >= 70) {
    grade = "C";
} else if (averageMarks1 >= 60) {
    grade = "D";
} else {
    grade = "Fail";
}

// Step 5 - Voting

let voting;

if (studentAge1 >= 18) {
    voting = "Eligible";
} else {
    voting = "Not Eligible";
}

// Step 6 - Display

console.log(`
Name: ${studentName1}
Age: ${studentAge1}
City: ${studentCity1}
Total: ${totalMarks1}
Average: ${averageMarks1}
Grade: ${grade}
Voting: ${voting}
`);