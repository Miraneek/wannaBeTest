
runGame()
document.querySelector("#new-game-btn").addEventListener("click", runGame)
function runGame() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let submitButton = document.querySelector("#submit-btn")
    let result = document.querySelector("#result")
    result.innerText = "Start by writing your first number"

    submitButton.addEventListener("click", () => {
        validateNumber(randomNumber)
    })
    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            validateNumber(randomNumber)
        }
    })
    
}
function validateNumber(randomNumber){
    let input = document.querySelector(".game-container input").value
    let result = document.querySelector("#result")

    if (input == randomNumber) {
        result.innerHTML = "You win!"
    } else if (input > randomNumber) {
        result.innerHTML = "Too high!"
    } else if (input < randomNumber) {
        result.innerHTML = "Too low!"
    }
}