// Using function inside object
const employee = { // calcTax is a function created inside object employee
    calcTax() {
        console.log("Tax rate is 10%")
    }
}

const Ram = {
    salary: 10,
}

/* proto is like using super class in python
  proto brings the function created in employee inside ram */
// with this object ram can also access function calcTax of employee
Ram.__proto__ = employee;

class car { //start and others are function built inside class
    start() {
        console.log("Start")
    }

    stop() {
        console.log("stop")
    }

    setBrand(brand) { // this can be written in constructor as well
        this.brandName = brand
    }
}

let bajaj = new car()
bajaj.setBrand("Bugatti")

class bike extends car{ 
    constructor(brand) {
        super() // brings constructor of super class / parent class
        this.brand = brand
    }
}

let pulsar = new bike("harley")
console.log(pulsar)

class cycle extends car { // extend will bring car function in bike means car class will be accesible to bike as well

}

let bicycle = new cycle()