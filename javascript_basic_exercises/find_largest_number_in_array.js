let arr = [5,6,8,9,1,12]

const output = arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr  // it checks which is greater & greater value is stored in prev and new value stored in curr
})                                    // and compared again

console.log(output)