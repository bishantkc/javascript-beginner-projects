/* Creating an object */
const student = {
    fullName: "Ram Kumar",
    age: 20,
    gpa: 3.6,
    isPass: true
}

console.log(student)

// Conditional statements
let age = 18
let mode = "dark"
let color

if (mode === "dark") {
    color = "black"
} else if (mode === "light") {
    color = "white"
} else{
    color = "green"
}

console.log(color)

// odd or even
let num = 10
// Checking same like python
if (num % 2 == 0) {
    console.log(num, "is even")
} else {
    console.log(num, "is odd")
}

//Ternary operators
let my_age = 20

age >=18 ? console.log("adult") : console.log("not adult")

/* format fot ternary: condition ? true output : false output */

//also can be written as
let result = age >=18 ? "adult" : "not adult"
console.log(result)

/* for loop format: initialize ; stopping condition ; updation(means how will variable(i) update) */

// for loop
for (let i = 1; i <=5; i++) {
    console.log("Hello World")
}

console.log("Loop has ended.")