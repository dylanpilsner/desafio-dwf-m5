export function initInstructionsPage(param) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  div.classList.add("main-container");
  div.innerHTML = `
  <div class="instructions-container">
  <h2 class="instructions">
  Presioná jugar
  y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
  </h2>
  </div>
  <div class="start-button">
    <my-button>Empezar</my-button>
  </div>
  <div class="moves-container">
    <the-move move="tijera"></the-move>
    <the-move move="piedra"></the-move>
    <the-move move="papel"></the-move>
  </div>
  `;

  style.innerHTML = `
.button-container {
  width: 100%;
}

.instructions-container {
  max-width: 317px;
}

.instructions {
  margin: 40px 0 0;
  font-size: 50px;
  line-height: 60px;
  text-align: center;
}

.start-button {
  width: 100%;
  height:100%;
  max-width: 404px;
  display:grid;
  align-items: center;
}

.main-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.moves-container {
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: end;
  gap: 10px;
}

@media (min-width: 769px) {
  .moves-container {
    gap: 45px;
  }
}
`;

  div.appendChild(style);

  const startButton = div.querySelector(".start-button");
  startButton.addEventListener("click", (e) => {
    e.preventDefault();
    param.goTo("/play");
  });

  return div;
}
