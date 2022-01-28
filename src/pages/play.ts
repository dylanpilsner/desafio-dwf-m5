import { state } from "../state";

export function initPlayPage(param) {
  let counter: any = 2;
  const div = document.createElement("div");
  const style = document.createElement("style");
  div.classList.add("main-container");
  const currentGame = state.getState().currentGame;

  style.innerHTML = `
  .main-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  
  .countdown-container {
    font-family: "Oswald";
    font-size: 100px;
    margin-bottom: 200px;
  }
  
  @media (min-width: 769px) {
    .countdown-container {
      font-size: 200px;
    }
  }
  
  .moves-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: end;
    gap: 10px;
  }
  
  @media (min-width: 769px) {
    .moves-container {
      gap: 45px;
    }
  }
    .chosen{
      transition:0.5s ease all;
      transform:translateY(-30px);
    }

    .not-chosen{
      transition:0.5s ease all;
      opacity:50%;
    }
  
  `;

  div.innerHTML = `
  <div class="countdown-container">
  <div class="countdown">3</div>
  </div>
  <div class="moves-container">
  <the-move state="play" move="tijera"></the-move>
  <the-move state="play" move="piedra"></the-move>
  <the-move state="play" move="papel"></the-move>
  </div>
  `;

  const move = div.querySelectorAll("the-move");
  move.forEach((i) => {
    i.addEventListener("click", (e) => {
      const piedra = div.querySelector(".piedra");
      const papel = div.querySelector(".papel");
      const tijera = div.querySelector(".tijera");
      const target = e.target as any;
      const move = target.getAttribute("move");
      const randomNumber = Math.floor(Math.random() * 3);
      const botMoves = ["piedra", "papel", "tijera"];
      const randomMove: any = botMoves[randomNumber];
      state.setMove(move, randomMove);
      state.winner();

      if (currentGame.myPlay == "piedra") {
        piedra.classList.add("chosen");
        papel.classList.add("not-chosen");
        tijera.classList.add("not-chosen");
      } else if (currentGame.myPlay == "papel") {
        papel.classList.add("chosen");
        piedra.classList.add("not-chosen");
        tijera.classList.add("not-chosen");
      } else if (currentGame.myPlay == "tijera") {
        tijera.classList.add("chosen");
        piedra.classList.add("not-chosen");
        piedra.classList.add("not-chosen");
      }
    });
  });

  const intervalId = setInterval(() => {
    const countdownContainer: any = div.querySelector(".countdown-container");
    const currentGame = state.getState().currentGame;
    countdownContainer.innerHTML = counter;
    counter--;
    if (counter < 0) {
      clearInterval(intervalId);
      countdownContainer.style.display = "none";
      if (currentGame.myPlay == "") {
        param.goTo("/instructions");
      } else param.goTo("/results");
    }
  }, 1000);

  if (currentGame.myPlay == "") {
    param.goTo("/instructions");
  }

  div.appendChild(style);

  return div;
}
