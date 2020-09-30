

let guesses = [];

let correctNumber = getRandomNumber();
console.log("correct num: "+correctNumber);

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
}

function domEvents() {
  alert(document.body.firstChild.innerHTML);
}

function playGame(){
  let numberGuess = document.getElementById('number-guess').value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess); //dont need 
  displayHistory();
}

function displayResult(numberGuess){
  if (numberGuess > correctNumber){
    showNumberAbove();
  }
  else if (numberGuess < correctNumber){
    showNumberBelow();
  }
  else {
    showYouWon();
  }
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  let dialog = getDialog('won', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}

function displayHistory() {
  let index = guesses.length-1; 
  let list = "<ul class='list-group'>";
  
  while(index >= 0){
    list += "<li class='list-group-item'>" + 
    "You guessed "+ guesses[index] + "</li>";
    index--;
  }

  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}

function initGame(){
  correctNumber = getRandomNumber();
  document.getElementById("result").innerHTML = "";
  guesses = [];
  displayHistory();

}

function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

function getRandomNumber(){
  let correctNumber = (Math.floor(Math.random()*100)+1);
  console.log(correctNumber);
  return correctNumber;

}

function saveGuessHistory(guess) {
  guesses.push(guess);
  console.log(guesses);
}


function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

