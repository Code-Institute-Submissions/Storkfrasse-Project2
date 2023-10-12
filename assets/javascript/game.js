const choices = document.querySelectorAll(".choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultText = document.getElementById("result-text");
const comment = document.getElementById("comment"); // Added comment element

// Add a click event listener to each choice button
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const playerChoice = choice.getAttribute("data-choice");
        playerChoiceDisplay.textContent = playerChoice;
        const computerChoice = getComputerChoice();
        computerChoiceDisplay.textContent = computerChoice;
        const result = determineWinner(playerChoice, computerChoice);
        resultText.textContent = result;

        

        console.log("Player choice: " + playerChoice);
        console.log("Computer choice: " + computerChoice);
        console.log("Result: " + result);
    });
});

// Function to generate a random choice for the computer
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(player, computer) {
    if (player === computer) {
        console.log("It's a tie!");
        return "It's a tie!";
    }
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        console.log("You Win!");
        return "You Win!";
    } else {
        console.log("Computer Win!");
        return "Computer Win";
    }
}

// Get reference to the HTML elements
const rulesButton = document.querySelector(".rules-button"); // Use .querySelector to select by class
const rulesPopup = document.getElementById("rules-popup");
const closeRulesButton = document.getElementById("close-rules");

// Add an event listener to open rules pop-up when the "Rules" button is pressed
rulesButton.addEventListener("click", () => {
    rulesPopup.style.display = "block";
});

// Add an event listener to close the rules pop-up
closeRulesButton.addEventListener("click", () => {
    rulesPopup.style.display = "none";
});





