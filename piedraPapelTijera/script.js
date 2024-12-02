// Elementos del DOM
const buttons = document.querySelectorAll(".choice");
const playerChoiceText = document.getElementById("playerChoice").querySelector("span");
const computerChoiceText = document.getElementById("computerChoice").querySelector("span");
const resultText = document.getElementById("gameResult").querySelector("span");

// Opciones disponibles
const options = ["piedra", "papel", "tijera"];

// Función para obtener una elección aleatoria de la computadora
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Función para determinar el ganador
function determineWinner(player, computer) {
  if (player === computer) {
    return "¡Empate!";
  } else if (
    (player === "piedra" && computer === "tijera") ||
    (player === "papel" && computer === "piedra") ||
    (player === "tijera" && computer === "papel")
  ) {
    return "¡Ganaste!";
  } else {
    return "¡Perdiste!";
  }
}

// https://emojipedia.org/
const optionIcons = {
    piedra: "💎",
    papel: "📄",
    tijera: "✂️",
  };

// Evento al hacer clic en una opción
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.getAttribute("data-choice");
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    // Actualizar el DOM con los resultados
    playerChoiceText.textContent = playerChoice;
    computerChoiceText.textContent = computerChoice;
    computerIcon.textContent = optionIcons[computerChoice];
    resultText.textContent = result;
  });
});
