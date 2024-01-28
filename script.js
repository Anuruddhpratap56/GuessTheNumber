let randomNumber = 0;
let win = false;
let count = 0;
let startGame = false;

function gameStart(event) {
  event.preventDefault();
  startGame = true;
  randomNumber = Math.floor(Math.random() * 101);
}
function guessthenumber(event) {
  event.preventDefault();

  if (startGame === true) {
    const message = document.getElementById("message");
    const number = parseInt(document.getElementById("number").value);
    const chances = document.getElementById("chances");
    const enteredValues = document.getElementById("enteredValues");
    enteredValues.value += String(" " + number);

    if (count < 10 && win == false) {
      if (number == randomNumber) {
        win = true;
        startGame = false;
        message.value = "Congratulations, you win!";
        setTimeout(() => {
          location.reload();
        }, 5000);
      } else if (number < randomNumber) {
        count++;
        message.value = "Please choose a larger number.";
        chances.value = 10 - count;
      } else {
        count++;
        message.value = "Please choose a smaller number.";
        chances.value = 10 - count;
      }
      if (count >= 10) {
        chances.value = "Correct Answer: " + randomNumber;
        message.value = "Satta har gye bhidu";
        startGame = false;
      }
    }
  } else {
    message.value = "Please start the game";
    setTimeout(() => {
      location.reload();
    }, 300);
  }
}
