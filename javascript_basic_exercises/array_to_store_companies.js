/* Create an array to store companies -> "Microsoft", "Meta", "Google", "Uber"
a. Remove the first company from the array
b. Remove Meta and add Daraz in its place 
c. Add Amazon at the end */

// a. -->
let companies = ["Microsoft", "Meta", "Google", "Uber"]
companies.shift()
console.log(companies)

// b. -->
companies = ["Microsoft", "Meta", "Google", "Uber"]
companies.splice(1,1,"Daraz")
console.log(companies)

// c. -->
companies = ["Microsoft", "Meta", "Google", "Uber"]
companies.push("Amazon")
console.log(companies)