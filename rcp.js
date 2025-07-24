const arr = ["Rock", "Paper", "Scissor"];

const eventt = (event) => {
  const userChoice = Number(event.target.id);
  const compIndex = Math.floor(Math.random() * arr.length);

  const chose = document.getElementById("choise");
  const cpchoice = document.getElementById("cpchoise");
  const result = document.getElementById("result");

  chose.innerHTML = arr[userChoice];
  cpchoice.innerHTML = arr[compIndex];

  if (
    (compIndex === 0 && userChoice === 1) ||
    (compIndex === 1 && userChoice === 2) ||
    (compIndex === 2 && userChoice === 0)
  ) {
    result.innerHTML = "Winner is You!";
    result.style.color = "green";
  } else if (compIndex === userChoice) {
    result.innerHTML = "It's a Draw!";
    result.style.color = "orange";
  } else {
    result.innerHTML = "Computer Wins!";
    result.style.color = "red";
  }

  disableButtons();
};

function disableButtons() {
  document.querySelectorAll("button[id='0'], button[id='1'], button[id='2']").forEach(btn => {
    btn.removeEventListener("click", eventt);
  });
}

function enableButtons() {
  document.querySelectorAll("button[id='0'], button[id='1'], button[id='2']").forEach(btn => {
    btn.addEventListener("click", eventt);
  });
}

// Attach event listeners initially
enableButtons();

// Reset logic
const reset = document.getElementById("restart");
reset.addEventListener("click", () => {
  document.querySelectorAll(".clear").forEach(el => el.innerHTML = "");
  enableButtons();
});
