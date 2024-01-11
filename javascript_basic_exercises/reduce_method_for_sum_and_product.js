let n = prompt("Enter a number: ")

let arr = []
for (let i = 1; i <= n; i++) {
    arr[i-1] = i
}

const sum = arr.reduce((prev, curr) => {
    return prev + curr
})
console.log("sum =", sum)

const product = arr.reduce((prev, curr) => {
    return prev * curr
})
console.log("product =", product)