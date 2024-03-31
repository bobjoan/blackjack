let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let cards = [firstCard, secondCard]; // array of items

let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

startButton.addEventListener("click", renderGame); // listener for start game
newCardButton.addEventListener("click", newCard); // listener for new card selector

function startGame() {
  renderGame();
}

function renderGame() {
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
  cardEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    //iterating through loop
    cardEl.textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
  } else {
    message = "You're out of the game!";
  }
}

function newCard() {
  let card = 5;
  sum += card;
  cards.push(card);
  renderGame();
}
