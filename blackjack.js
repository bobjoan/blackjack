let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

let player = {
  name: "Joan",
  win: 200,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.win;
startButton.addEventListener("click", renderGame); // listener for start game
newCardButton.addEventListener("click", newCard); // listener for new card selector

function startGame() {
  isAlive = true;
  let firstCard = rollDice();
  let secondCard = rollDice();
  sum = firstCard + secondCard;
  cards = [firstCard, secondCard]; // array of items
  renderGame();
}

function rollDice() {
  let randomNumber = Math.floor(Math.random() * 13) + 1; //1 - 13

  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  }
  return randomNumber;
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
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = rollDice();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
