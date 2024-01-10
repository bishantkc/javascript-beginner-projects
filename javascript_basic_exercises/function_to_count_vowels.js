function countVowels(str) {
    let count = 0
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++
        }
    }
    console.log(count)
}
let alphabet = prompt("Enter alphabet of which you want to count vowel : ")
countVowels(alphabet)

// Doing same using arrow function

const arrowCountVowel = (str) => {
    let count = 0
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++
        }
    }
    console.log(count)
}
let letter = prompt("Enter alphabet of which you want to count vowel : ")
arrowCountVowel(letter)
 