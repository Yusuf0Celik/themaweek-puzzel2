const inputButton = document.querySelector(".input-button");

inputButton.addEventListener("click", toggleWinner);

function toggleWinner() {
  const winner = document.querySelector(".winner");
  const inputValue = document.querySelector(".input-puzzel").value;
  if(inputValue === "vond je alle spellen leuk? dank je voor het spelen!"){
    winner.classList.add("active");
    console.log("Jij bent een winnaar!");
  }else{
    console.log("Verkeerd antwoord")
  }
}

// vond je alle spellen leuk? dank je voor het spelen!