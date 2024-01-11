let items =  [250, 645, 300, 900, 50]

// items.length refer to how many time loop will occur
for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10
    items[i] -= offer
}

console.log(items)

         //or (another method)

let i = 0
for (let val of items) {
    let offer = val / 10
    items[i] -= offer
    console.log(`value after offer = ${items[i]}`)
    i++
}