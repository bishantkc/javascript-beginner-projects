let gameNum = 15
let userNum = prompt("Guess the game number : ") 

while (userNum != gameNum) {
    if (userNum > gameNum) {
        userNum = prompt("Too high. Guess again: : ")
    } else {
        userNum = prompt("Too Low. Guess again : ")
    }
}

console.log("Congratulations, you have guessed the right number.")