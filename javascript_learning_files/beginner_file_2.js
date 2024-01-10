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

let obj = {
    item: "pen",
    price: 10
}

// this is like f output of python
let output = `The cost of ${obj.item} is ${obj.price} rupees.`
console.log(output)

                 //or

console.log("The cost of", obj.item, "is", obj.price, "rupees.")

// for next line \n same like python
console.log("Hello\nWorld")

let thing = "hello"
console.log(thing.toUpperCase())

// string -> immutable (cannot be replaced)
// array -> mutable (can be replaced)
let heroes = ["Ironman", "Thor", "Spiderman"]
console.log(heroes.slice(1,3))  // it returns piece of array : slice(start_index, end_index)

let number = [1,2,3,4,5]
//splice format: splice(startidx, delCount, newElement)
number.splice(2,1,8)  // it change original array(add,rmove,replace)
console.log(number) 

//function --> 2 numbers, sum
function sum(x, y) {
    return x + y
}
console.log(sum(3,2))

// arrow function
const arrowSum = (a, b) => {
    console.log(a + b)
}
arrowSum(5,4)

// for Each method

let arr = [1,2,3,4,5]

//prints value at each index
arr.forEach(function printVal(val) {
    console.log(val)
})

       // or 

 arr.forEach((val) => {
    console.log(val)
})

// map
let nums = [12,14,15]

let newArr = nums.map((val) => { // this prints value in array format
    return val * val
})
console.log(newArr)

// reduce
let Arr = [1,2,3,4]

const Output = Arr.reduce((prev, curr) => {
    return prev + curr // this will loop and store output in prev and new number will go in current
})

console.log(Output) //output = 10