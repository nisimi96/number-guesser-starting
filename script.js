let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10)
}

console.log(generateTarget())

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    const humanDifference = Math.abs(humanGuess - targetNumber);
    const computerDifference = Math.abs(computerGuess - targetNumber);
  
    if (humanDifference <= computerDifference) {
      return true; // Human wins
    } else {
      return false; // Computer wins
    }
}

compareGuesses()

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

updateScore()

const advanceRound = () => {
    currentRoundNumber++;
}

advanceRound()



