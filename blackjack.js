let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");

function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
  } else {
    message = "You've got Blackjack!";
  }
  startBtn.addEventListener("click", startGame());
  messageEl.textContent = message;
}
