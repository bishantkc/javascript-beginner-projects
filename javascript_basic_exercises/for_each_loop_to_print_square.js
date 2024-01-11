let arr = [1,2,3,4,5]

arr.forEach((num) => { // for each do loop for each element in array like normal for loop
    console.log(num * num) // num**2 also can be done
})

 // or

let calcSquare = (num) => {
    console.log(num * num)
}

arr.forEach(calcSquare)