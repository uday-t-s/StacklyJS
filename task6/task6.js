//TASK.6

/////////////////////////////////////////////////////
// Task 1 — Student Result Analyzer

let studentName = prompt("Enter student name:");
let department = prompt("Enter department:");

let mark1 = Number(prompt("Enter mark for Subject 1:"));
let mark2 = Number(prompt("Enter mark for Subject 2:"));
let mark3 = Number(prompt("Enter mark for Subject 3:"));
let mark4 = Number(prompt("Enter mark for Subject 4:"));
let mark5 = Number(prompt("Enter mark for Subject 5:"));

let marks = [mark1, mark2, mark3, mark4, mark5];

function analyzeStudentResult(name, department, marks) {
    let totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    let average = totalMarks / marks.length;
    let grade;

    let isPassed = marks.every(mark => mark >= 50);

    if (!isPassed) {
        grade = "Fail";
    } else if (average >= 90) {
        grade = "A";
    } else if (average >= 75) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "Fail";
    }

    console.log("Student Result");
    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Marks:", marks);
    console.log("Total Marks:", totalMarks);
    console.log("Average:", average.toFixed(2));
    console.log("Result:", isPassed ? "Pass" : "Fail");
    console.log("Grade:", grade);
}

analyzeStudentResult(studentName, department, marks);

////////////////////////////////////////////////
// Task 2 — Employee Salary Calculator

let employee = {
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
};

function calculateSalary(employee) {
    let basicSalary = employee.salary;
    let bonus = 0;

    if (employee.experience >= 5) {
        bonus = basicSalary * 0.15;
    } else if (employee.experience >= 2) {
        bonus = basicSalary * 0.10;
    }

    let finalSalary = basicSalary + bonus;

    console.log("Employee Salary Calculator");
    console.log("Name:", employee.name);
    console.log("Role:", employee.role);
    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Final Salary:", finalSalary);
}

calculateSalary(employee);

//////////////////////////////////////////////////////
// Task 3 — Product Filter System

let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];

// 1. Products above ₹2,000
let productsAbove2000 = products.filter(product => product.price > 2000);
console.log("Products above ₹2,000:", productsAbove2000);

// 2. Electronics only
let electronicsProducts = products.filter(
    product => product.category === "electronics"
);
console.log("Electronics:", electronicsProducts);

// 3. First product below ₹1,000
let firstCheapProduct = products.find(product => product.price < 1000);
console.log("First product below ₹1,000:", firstCheapProduct);

// 4. Total price of all products
let totalProductPrice = products.reduce(
    (total, product) => total + product.price,
    0
);
console.log("Total product price:", totalProductPrice);

// 5. Any product above ₹50,000
let anyProductAbove50000 = products.some(product => product.price > 50000);
console.log("Any product above ₹50,000:", anyProductAbove50000);

// 6. Every product above ₹500
let everyProductAbove500 = products.every(product => product.price > 500);
console.log("Every product above ₹500:", everyProductAbove500);

//////////////////////////////////////////////////////
// Task 4 — Employee Management

let employees = [
    { id: 101, name: "Kavin", role: "Frontend Developer", salary: 40000 },
    { id: 102, name: "Rekha", role: "Backend Developer", salary: 48000 },
    { id: 103, name: "Soorya", role: "DevOps Engineer", salary: 55000 },
    { id: 104, name: "Kiran", role: "UI/UX Designer", salary: 38000 },
    { id: 105, name: "Kumar", role: "QA Engineer", salary: 42000 },
    { id: 106, name: "Chandru", role: "Project Manager", salary: 70000 }
];

// 1. Display all employee names
let employeeNames = employees.map(employee => employee.name);
console.log("Employee names:", employeeNames);

// 2. Employees earning above ₹40,000
let employeesAbove40000 = employees.filter(
    employee => employee.salary > 40000
);
console.log("Employees above ₹40,000:", employeesAbove40000);

// 3. Find employee with ID 103
let employeeWithId103 = employees.find(employee => employee.id === 103);
console.log("Employee with ID 103:", employeeWithId103);

// 4. Calculate total salary
let totalEmployeeSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
);
console.log("Total salary:", totalEmployeeSalary);

// 5. Find highest-paid employee
let highestPaidEmployee = employees.reduce(
    (highest, employee) =>
        employee.salary > highest.salary ? employee : highest,
    employees[0]
);
console.log("Highest-paid employee:", highestPaidEmployee);

// 6. Sort employees from highest salary to lowest
let employeesHighToLow = [...employees].sort(
    (a, b) => b.salary - a.salary
);
console.log("Employees high to low:", employeesHighToLow);

// 7. New array containing only employee names
let employeeNameArray = employees.map(employee => employee.name);
console.log("Names only:", employeeNameArray);

/////////////////////////////////////////////////////
// Task 5 — Shopping Cart

let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

function calculateCart(cart) {
    let itemTotals = cart.map(item => ({
        name: item.name,
        total: item.price * item.quantity
    }));

    console.log("Item Totals:", itemTotals);

    let totalCartValue = cart.reduce(
        (total, item) => total + (item.price * item.quantity),
        0
    );

    let discount = 0;

    if (totalCartValue > 50000) {
        discount = totalCartValue * 0.10;
    }

    let finalPayable = totalCartValue - discount;

    console.log("Total Cart Value:", totalCartValue);
    console.log("Discount:", discount);
    console.log("Final Payable Amount:", finalPayable);
}

calculateCart(cart);

/////////////////////////////////////////////
// Task 6 — Student Search System

let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];

// 1. Display all student names
let studentNames = students.map(student => student.name);
console.log("Student names:", studentNames);

// 2. Students who scored above 80
let studentsAbove80 = students.filter(student => student.mark > 80);
console.log("Students above 80:", studentsAbove80);

// 3. Find student named Priya
let priya = students.find(student => student.name === "Priya");
console.log("Student named Priya:", priya);

// 4. Calculate average mark
let totalStudentMarks = students.reduce(
    (total, student) => total + student.mark,
    0
);

let averageStudentMark = totalStudentMarks / students.length;
console.log("Average mark:", averageStudentMark);

// 5. Check whether anyone failed
let anyoneFailed = students.some(student => student.mark < 50);
console.log("Anyone failed:", anyoneFailed);

// 6. Check whether everyone scored above 40
let everyoneAbove40 = students.every(student => student.mark > 40);
console.log("Everyone scored above 40:", everyoneAbove40);

// 7. Sort students by marks
let studentsByMarks = [...students].sort(
    (a, b) => b.mark - a.mark
);
console.log("Students sorted by marks:", studentsByMarks);

//////////////////////////////////////////////////
// Task 7 — Array Transformation Challenge

let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

// 1. Numbers multiplied by 2
let doubledNumbers = numbers.map(number => number * 2);
console.log("Numbers x 2:", doubledNumbers);

// 2. Even numbers
let evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("Even numbers:", evenNumbers);

// 3. Numbers greater than 15
let numbersAbove15 = numbers.filter(number => number > 15);
console.log("Numbers above 15:", numbersAbove15);

// 4. First number greater than 20
let firstNumberAbove20 = numbers.find(number => number > 20);
console.log("First number above 20:", firstNumberAbove20);

// 5. Total of all numbers
let totalNumbers = numbers.reduce(
    (total, number) => total + number,
    0
);
console.log("Total:", totalNumbers);

// 6. Any number greater than 40
let anyNumberAbove40 = numbers.some(number => number > 40);
console.log("Any number above 40:", anyNumberAbove40);

// 7. Every number is positive
let everyNumberPositive = numbers.every(number => number > 0);
console.log("Every number is positive:", everyNumberPositive);

// 8. Sort from highest to lowest
let numbersHighToLow = [...numbers].sort((a, b) => b - a);
console.log("Numbers high to low:", numbersHighToLow);

//////////////////////////////////////////
// Task 8 — String Analyzer

let sentence = prompt("Enter a sentence:");

console.log("Original Sentence:", sentence);

// 1. Total characters
console.log("Total characters:", sentence.length);

// 2. Uppercase sentence
console.log("Uppercase:", sentence.toUpperCase());

// 3. Lowercase sentence
console.log("Lowercase:", sentence.toLowerCase());

// 4. Check whether it contains JavaScript
console.log(
    "Contains JavaScript:",
    sentence.includes("JavaScript")
);

// 5. First character
console.log("First character:", sentence.slice(0, 1));

// 6. Last character
console.log("Last character:", sentence.slice(-1));

// 7. Number of words
let words = sentence.trim().split(/\s+/);
console.log("Number of words:", words.length);

// 8. Replace JavaScript with Python
let replacedSentence = sentence.replace("JavaScript", "Python");
console.log("Replaced sentence:", replacedSentence);

// 9. Convert sentence into an array
let sentenceArray = sentence.split(" ");
console.log("Sentence array:", sentenceArray);

////////////////////////////////////////////////////
// Final Mini Project — Employee Dashboard

let dashboardEmployees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];


// 1. Employee List

console.log("All Employees:");

dashboardEmployees.forEach(employee => {
    console.log(employee);
});


// 2. Search employee by name

let searchedEmployee = dashboardEmployees.find(
    employee => employee.name === "Priya"
);

console.log("Searched Employee:", searchedEmployee);


// 3. Department Filter

let itEmployees = dashboardEmployees.filter(
    employee => employee.department === "IT"
);

console.log("IT Employees:", itEmployees);


// 4. Salary Filter

let highSalaryEmployees = dashboardEmployees.filter(
    employee => employee.salary > 50000
);

console.log("Employees earning above ₹50,000:", highSalaryEmployees);


// 5. Calculate total company salary

let totalCompanySalary = dashboardEmployees.reduce(
    (total, employee) => total + employee.salary,
    0
);

console.log("Total Company Salary:", totalCompanySalary);


// 6. Find highest-paid employee

let highestSalaryEmployee = dashboardEmployees.reduce(
    (highest, employee) =>
        employee.salary > highest.salary ? employee : highest,
    dashboardEmployees[0]
);

console.log("Highest-Paid Employee:", highestSalaryEmployee);


// 7. Employees with more than 3 years experience

let experiencedEmployees = dashboardEmployees.filter(
    employee => employee.experience > 3
);

console.log("Employees with more than 3 years experience:", experiencedEmployees);


// 8. Sort employees by salary

let salaryLowToHigh = [...dashboardEmployees].sort(
    (a, b) => a.salary - b.salary
);

console.log("Salary Low to High:", salaryLowToHigh);

let salaryHighToLow = [...dashboardEmployees].sort(
    (a, b) => b.salary - a.salary
);

console.log("Salary High to Low:", salaryHighToLow);


// 9. Statistics

let totalEmployees = dashboardEmployees.length;
let averageSalary = totalCompanySalary / totalEmployees;

console.log("Employee Dashboard Statistics");
console.log("Total Employees:", totalEmployees);
console.log("Total Salary: ₹" + totalCompanySalary);
console.log("Highest Salary: ₹" + highestSalaryEmployee.salary);
console.log("Average Salary: ₹" + Math.round(averageSalary));