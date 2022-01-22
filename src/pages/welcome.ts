export function initWelcomePage(param) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  div.classList.add("main-container");
  style.innerHTML = `
  
  `;
  div.innerHTML = `
  <div class="welcome-container">
  <h1 class="title">
    Piedra, <br />
    Papel o <br />Tijera
  </h1>
  <div class="start-button">
    <my-button>Empezar</my-button>
  </div>
  </div>
  <div class="moves-container">
    <the-move move="tijera"></the-move>
    <the-move move="piedra"></the-move>
    <the-move move="papel"></the-move>
</div>
  `;

  const button = div.querySelector(".start-button");

  button.addEventListener("click", (e) => {
    param.goTo("/instructions");
  });
  div.appendChild(style);
  return div;
}
