// JavaScript


// 1. What is a variable in JavaScript?

// A variable is used to store a value.


/*
2. What are the three keywords used to create variables?

var
let
const
*/


// 3. Syntax using var

var a = 10;


// 4. Syntax using let

let b = 20;


// 5. Syntax using const

const c = 30;


// 6. What is declaration?

// Declaration means creating a variable without giving a value.

var d;


// 7. What is initialization?

// Initialization means giving a value to a variable.

var e = 50;


// 8. What is reassignment?

// Reassignment means changing the value of a variable.

let f = 60;

f = 70;


// 9. What is redeclaration?

// Redeclaration means declaring the same variable again.

var g = 80;

var g = 90;


// 10. Which keyword allows redeclaration?

// var


// 11. Which keyword allows reassignment?

// var and let


// 12. Which keyword requires initialization when declared?

// const


// 13. Identify declaration and initialization

let age = 25;

// Declaration = let age
// Initialization = 25


// 14. What is the value of a?

var a1 = 100;

console.log(a1);


// 15. Change number to 200

let number = 100;

number = 200;

console.log(number);


// ================================
// var
// ================================


// 16. Output

var a2 = 10;

console.log(a2);


// 17. Output

var a3 = 10;

a3 = 20;

console.log(a3);


// 18. Output

var a4 = 10;

var a4 = 30;

console.log(a4);


// 19. var name = "John"

var name = "John";

console.log(name);


// 20. price = 500

var price = 500;

console.log(price);


// 21. Reassign price to 1000

price = 1000;

console.log(price);


// 22. Output

var x = 50;

x = 100;

console.log(x);


// 23. Can var be reassigned?

// Yes


// 24. Can var be redeclared?

// Yes


// 25. Example of var redeclaration

var city1 = "Chennai";

var city1 = "Salem";

console.log(city1);


// ================================
// let
// ================================


// 26. let age = 25

let age1 = 25;

console.log(age1);


// 27. Output

let age2 = 20;

age2 = 30;

console.log(age2);


// 28. Can let be reassigned?

// Yes


// 29. Can let be redeclared?

// No


// 30. Find the error

// let name1 = "John";
// let name1 = "David";

// Error: name1 has already been declared


// 31. city = Chennai

let city = "Chennai";

console.log(city);


// 32. Change city to Salem

city = "Salem";

console.log(city);


// 33. Output

let x1 = 10;

x1 = 50;

console.log(x1);


// 34. salary = 25000

let salary = 25000;

console.log(salary);


// 35. Reassign salary to 30000

salary = 30000;

console.log(salary);


// ================================
// const
// ================================


// 36. pi = 3.14

const pi = 3.14;

console.log(pi);


// 37. Can const be reassigned?

// No


// 38. Can const be redeclared?

// No


// 39. What is wrong?

// const age3;
// age3 = 25;

// const must be initialized when declared.


// 40. What happens here?

// const price1 = 500;
// price1 = 1000;

// Error because const cannot be reassigned.


// 41. country = India

const country = "India";

console.log(country);


// 42. Output

const x2 = 100;

console.log(x2);


// 43. Which keyword should be used if value should not be reassigned?

// const


// 44. Difference between let and const

// let can be reassigned.
// const cannot be reassigned.


// 45. Difference between var and const

// var can be reassigned and redeclared.
// const cannot be reassigned or redeclared.




// 1. Student name, age and mark

let studentName = "Uday";
let age = 22;
let mark = 85;

console.log(studentName);
console.log(age);
console.log(mark);

      

// 2. Ask name and display using alert

let userName = prompt("What is your name?");

alert(userName);



// 3. Ask age and print in console

let userAge = prompt("How old are you?");

console.log(userAge);



// 4. Confirm

let above18 = confirm("Are you above 18?");

console.log(above18);



// 5. Ask name and display on webpage

let name = prompt("Enter your name");

document.writeln(name);