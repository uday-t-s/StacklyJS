// JavaScript Practice Tasks


// Task 1 - For Loop

for (let num1 = 1; num1 <= 10; num1++) {
    console.log(num1);
}



// Task 2 - Reverse Number

for (let num2 = 10; num2 >= 1; num2--) {
    console.log(num2);
}



// Task 3 - Even Numbers

for (let num3 = 1; num3 <= 20; num3++) {

    if (num3 % 2 == 0) {
        console.log(num3);
    }
}



// Task 4 - Odd Numbers

for (let num4 = 1; num4 <= 20; num4++) {

    if (num4 % 2 != 0) {
        console.log(num4);
    }
}



// Task 5 - Multiplication Table

let tableNumber = prompt("Enter a number");

for (let num5 = 1; num5 <= 10; num5++) {

    console.log(tableNumber + " x " + num5 + " = " + (tableNumber * num5));
}



// Task 6 - Countdown

let num6 = 10;

while (num6 >= 1) {

    console.log(num6);

    num6--;
}



// Task 7 - Sum of Numbers

let num7 = 1;
let sum7 = 0;

while (num7 <= 10) {

    sum7 += num7;

    num7++;
}

console.log(sum7);



// Task 8 - Do While

let num8 = 1;

do {

    console.log(num8);

    num8++;

} while (num8 <= 5);



// Task 9 - Do While Understanding

let num9 = 10;

do {

    console.log(num9);

    num9++;

} while (num9 <= 5);


// Output: 10

// do while executes the code first
// after that it checks the condition
// so 10 is printed one time



// Task 10 - String Characters

let name10 = "javascript";

for (let ch of name10) {

    console.log(ch);
}



// Task 11 - Array Values

let fruits11 = [
    "apple",
    "orange",
    "banana",
    "mango",
    "grapes"
];

for (let fruit of fruits11) {

    console.log(fruit);
}



// Task 12 - Student Names

let studentNames = [
    "Sridhar",
    "Ragu",
    "Dhivi",
    "Magila",
    "Kavi"
];

for (let studentName of studentNames) {

    console.log("Student: " + studentName);
}



// Task 13 - Employee Object

let employee13 = {

    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};

for (let key in employee13) {

    console.log(key + " " + employee13[key]);
}



// Task 14 - Product Object

let product14 = {

    productName: "Mobile",
    price: 15000,
    brand: "Samsung",
    category: "Electronics",
    stock: 15
};

for (let key in product14) {

    console.log(key + " " + product14[key]);
}



// Task 15 - Simple Function

function welcome15() {

    console.log("Welcome to JavaScript");
}

welcome15();
welcome15();
welcome15();



// Task 16 - Function With Parameter

function greet16(name) {

    console.log("Hello " + name);
}

greet16("Naveen");
greet16("Arun");
greet16("Priya");



// Task 17 - Multiple Parameters

function student17(name, age, department) {

    console.log("Student Name: " + name);
    console.log("Age: " + age);
    console.log("Department: " + department);
}

student17("Sridhar", 20, "CSE");
student17("Magila", 19, "IT");
student17("Kavi", 20, "ECE");



// Task 18 - Addition Function

function add18(a, b) {

    return a + b;
}

let result18 = add18(10, 20);

console.log(result18);



// Task 19 - Salary

function salary19(amount) {

    return amount;
}

let amount19 = salary19(50000);

console.log(amount19);



// Task 20 - Bonus Calculator

function bonus20(salary, bonusAmount) {

    console.log("Salary = " + salary);
    console.log("Bonus = " + bonusAmount);

    return salary + bonusAmount;
}

console.log("Total = " + bonus20(50000, 5000));



// Task 21 - Default Parameter

function employee21(name, role = "Developer") {

    console.log("Name: " + name);
    console.log("Role: " + role);
}

employee21("Arun");
employee21("Priya", "Designer");



// Task 22 - Named Function

function square22(number) {

    return number * number;
}

console.log(square22(2));
console.log(square22(3));
console.log(square22(6));
console.log(square22(7));
console.log(square22(8));



// Task 23 - Anonymous Function

let calculate23 = function(a, b) {

    return a + b;
};

console.log(calculate23(10, 20));



// Task 24 - Arrow Function

let multiply24 = (a, b) => {

    return a * b;
};

console.log(multiply24(5, 6));



// Task 25 - Scope

function test25() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a);

    // console.log(b);
    // console.log(c);
}

test25();


// a can be accessed outside the block
// b and c cannot be accessed outside the block
// var is function scoped
// let and const are block scoped



// Task 26 - Hoisting

console.log(a26);

var a26 = 10;


// Output: undefined
// var is hoisted and initialized with undefined



// Task 27 - Hoisting with let

// console.log(b27);

let b27 = 20;


// Output: ReferenceError
// let cannot be accessed before initialization



// Task 28 - Hoisting with const

// console.log(c28);

const c28 = 30;


// Output: ReferenceError
// const cannot be accessed before initialization


// var -> undefined
// let -> ReferenceError
// const -> ReferenceError



// Task 29 - IIFE

(function () {

    console.log("Welcome to JavaScript");

})();


(function (product, discount) {

    console.log(
        product + " has " + discount + "% discount"
    );

})("Mobile", 20);



// Task 30 - Callback and Higher Order Function

function welcome30() {

    console.log("Welcome");
}

function execute30(callback) {

    callback();
}

execute30(welcome30);


// welcome30 is the callback function
// execute30 is the higher order function



// Task 31 - Generator Function

function* cashback31() {

    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let cashbackOffers = cashback31();

for (let offer of cashbackOffers) {

    console.log(offer);
}



// Task 32 - Employee Management Console

let employees32 = [

    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },

    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },

    {
        name: "Kumar",
        age: 28,
        department: "Finance",
        role: "Accountant",
        salary: 45000
    }
];



// 1. for...of

for (let employee of employees32) {

    console.log(employee);
}



// 2. for...in

for (let employee of employees32) {

    for (let key in employee) {

        console.log(key + ": " + employee[key]);
    }
}



// 3 & 4. Function with parameters

function displayEmployee(name, age, department, role, salary) {

    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Department: " + department);
    console.log("Role: " + role);
    console.log("Salary: " + salary);
}



// Calling the function

displayEmployee(
    "Arun",
    25,
    "IT",
    "Developer",
    40000
);



// 5. Return

function getSalary(employee) {

    return employee.salary;
}

console.log("Arun Salary: " + getSalary(employees32[0]));



// 6. Condition

for (let employee of employees32) {

    if (employee.salary >= 40000) {

        console.log(
            employee.name + " has salary >= 40000"
        );

    } else {

        console.log(
            employee.name + " has salary below 40000"
        );
    }
}



// 7. Arrow Function

let annualSalary = (salary) => {

    return salary * 12;
};

console.log(
    "Annual Salary: " + annualSalary(40000)
);



// 8. Generator

function* employeeBenefits() {

    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let benefits = employeeBenefits();

for (let benefit of benefits) {

    console.log(benefit);
}