let marks = [40,80,85,79,92,95]

let toppers = marks.filter((val) => { // It filters value in marks array and returns value > 90
    return val > 90
})

console.log(toppers)