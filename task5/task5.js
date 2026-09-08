//Task5


// Q1

// var can be re-declared and re-assigned.
var a = 10;
var a = 20;
a = 30;

// let cannot be re-declared in the same scope, but can be re-assigned.
let b = 10;
b = 20;

// const cannot be re-declared or re-assigned.
const c = 10;
// c = 20; // Error

console.log(a, b, c);

// var:
// var can be re-declared and re-assigned.
// It is function scoped.

// let:
// let cannot be re-declared in the same scope,
// but it can be re-assigned.
// It is block scoped.

// const:
// const cannot be re-declared or re-assigned.
// It is block scoped.

////////////////////////////////////////////////
// Q2

var x = 10;
var x = 20;

// let y = 10;
// let y = 20; // Error

// const z = 10;
// const z = 20; // Error

// var can be re-declared in the same scope.
// let and const cannot be re-declared in the same scope.

///////////////////////////////////////////////
// Q3

var x1 = 5;
let y1 = 10;
const z1 = 15;

x1 = 20;
y1 = 25;
// z1 = 30; // TypeError

console.log(x1, y1, z1);

// Output:
// 20 25 15

// If z1 = 30 is uncommented:
// TypeError: Assignment to constant variable.

/////////////////////////////////////////////////
// Q4

// Declaration means creating a variable using var, let or const.

let name;

// Initialization means assigning the first value to a variable.

let age = 20;

// let name;       → Declaration
// let age = 20;   → Declaration + Initialization

///////////////////////////////////////////////////
// Q5

let value;

console.log(value);

// Output:
// undefined

// The variable is declared but no value is assigned to it.

///////////////////////////////////////////////////
// Q6

// Hoisting is JavaScript's behavior of processing declarations
// before executing the code.

console.log(number);

var number = 10;

// Output:
// undefined

// The var declaration is hoisted, but the value is assigned
// only when the execution reaches that line.

//////////////////////////////////////////////////
// Q7

// undefined means a variable has been declared but no value
// has been assigned to it.

let first;
console.log(first);

// Output:
// undefined

// null means we intentionally assign an empty or no value.

let second = null;
console.log(second);

// Output:
// null

////////////////////////////////////////////////
// Q8

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});

// Output:
// object
// undefined
// object
// object

///////////////////////////////////////////////
// Q9

// == Loose Equality:
// It checks the value and can perform type conversion.

console.log(5 == "5");

// Output:
// true

// === Strict Equality:
// It checks both the value and the data type without
// performing type conversion.

console.log(5 === "5");

// Output:
// false

//////////////////////////////////////
// Q10

// ++i - Pre-increment:
// First increases the value and then uses it.

let i = 5;

console.log(++i);

// Output:
// 6

// i++ - Post-increment:
// First uses the current value and then increases it.

let j = 5;

console.log(j++);
console.log(j);

// Output:
// 5
// 6

///////////////////////
// Q11

let num1 = 10;
let num2 = "5";

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

// Output:
// 105
// 5
// 50
// 2


// Q12

// Logical operators are used to combine or reverse conditions.

// && - Logical AND
// Returns true when both conditions are true.

console.log(10 > 5 && 20 > 10);

// Output:
// true

// || - Logical OR
// Returns true when at least one condition is true.

console.log(10 > 5 || 20 < 10);

// Output:
// true

// ! - Logical NOT
// Reverses the result.

console.log(!(10 > 5));

// Output:
// false


// Q13

console.log(5 > 3 && 10 > 5);
console.log(5 > 10 || 10 > 5);
console.log(!(5 > 3));

// Output:
// true
// true
// false


// Q14

// The ternary operator is a short way of writing a simple if-else.

// Syntax:
// condition ? trueValue : falseValue;

let age1 = 20;

let result = age1 >= 18 ? "Adult" : "Minor";

console.log(result);

// Output:
// Adult


// Q15

// Implicit Type Casting:
// JavaScript automatically converts one data type into another.

let value1 = "10";
let value2 = 5;

console.log(value1 + value2);

// Output:
// 105

// Explicit Type Casting:
// We manually convert one data type into another.

let value3 = "10";

console.log(Number(value3));

// Output:
// 10


// Q16

console.log(Number("123"));
console.log(Number("hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Boolean(0));
console.log(Boolean("hello"));

// Output:
// 123
// NaN
// 1
// 0
// false
// true


// Q17

// NaN means Not a Number.
// It occurs when JavaScript tries to perform an invalid
// numeric conversion or calculation.

let value4 = Number("hello");

console.log(value4);

// Output:
// NaN


// Q18

// if-else is used when checking conditions, comparisons,
// or ranges.

let marks = 75;

if(marks >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Output:
// Pass

// switch is useful when comparing one value against
// multiple fixed cases.

let day = 2;

switch(day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}

// Output:
// Tuesday


// Q19

let age2 = 20;

if(age2 >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Output:
// Adult


// Q20

// A nested if means using one if statement inside another if statement.

let age3 = 20;
let hasID = true;

if(age3 >= 18) {
    if(hasID == true) {
        console.log("Entry allowed");
    }
}

// Output:
// Entry allowed


// Q21

let number1 = 10;

let answer = number1 % 2 == 0 ? "Even" : "Odd";

console.log(answer);

// Output:
// Even


// Q22

// while:
// The condition is checked before executing the loop.
// If the condition is false initially, the loop will not execute.

let count = 10;

while(count <= 5) {
    console.log(count);
    count++;
}

// Nothing will print.

// do-while:
// The code executes first and then the condition is checked.
// Therefore, it executes at least once.

let count1 = 10;

do {
    console.log(count1);
    count1++;
} while(count1 <= 5);

// Output:
// 10


// Q23

for(let k = 1; k <= 5; k++) {
    console.log(k);
}

// Output:
// 1
// 2
// 3
// 4
// 5


// Q24

// for-of:
// It is used to get the values from an iterable such as
// an array or string.

let fruits = ["Apple", "Banana", "Mango"];

for(let fruit of fruits) {
    console.log(fruit);
}

// Output:
// Apple
// Banana
// Mango

// for-in:
// It is used to get the keys or indexes.

let employee = {
    name: "Arun",
    age: 25
};

for(let key in employee) {
    console.log(key);
}

// Output:
// name
// age


// Q25

let sum = 0;

for(let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log(sum);

// Output:
// 5050


// Q26

// slice():
// It is used to extract a portion of an array.
// It does not modify the original array.

let numbers = [10, 20, 30, 40, 50];

let sliced = numbers.slice(1, 4);

console.log(sliced);
console.log(numbers);

// Output:
// [20, 30, 40]
// [10, 20, 30, 40, 50]

// splice():
// It is used to add, remove or replace elements.
// It modifies the original array.

let numbers1 = [10, 20, 30, 40, 50];

numbers1.splice(1, 2);

console.log(numbers1);

// Output:
// [10, 40, 50]


// Q27

let arr = [1, 2, 3];

arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();

console.log(arr);

// Output:
// [1, 2, 3]


// Q28

// Function Declaration:
// A function is declared using the function keyword.

function greet() {
    console.log("Hello");
}

greet();

// Output:
// Hello

// Function Expression:
// A function is assigned to a variable.

let greet1 = function() {
    console.log("Hello world");
};

greet1();

// Output:
// Hello world


// Q29

// An arrow function is a shorter syntax for writing
// a function expression using =>.

let add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));

// Output:
// 30


// Q30

function welcome() {
    return "Hello";
}

let message = welcome();

console.log(message);

// Output:
// Hello