const winner = document.getElementById(".winner");
const input = document.getElementById(".input-puzzel");
const inputButton = document.getElementById(".input-button");

inputButton.addEventListener("click", toggleWinner);

function toggleWinner() {
  if(input.value === '123') {
    winner.classList.toggle("active");
  }else {
    winner.classList.remove("active");
  }
}

// vond je alle spellen leuk? dank je voor het spelen!