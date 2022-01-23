export function initWelcomePage(param) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  div.classList.add("main-container");
  style.innerHTML = `
  .title {
    margin: 40px 0 0;
    font-size: 80px;
    color: #009048;
    letter-spacing: 10px;
  }
  
  

  .start-button {
    width: 100%;
    height:100%;
    max-width: 404px;
    display:grid;
    align-items:center;
  }

my-button{
}

  @media(min-width:769px){
    .start-button{
    }
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
  div.innerHTML = `
  <div class="welcome-container">
  <h1 class="title">
    Piedra, <br />
    Papel o <br />Tijera
  </h1>
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

  const button = div.querySelector(".start-button");

  button.addEventListener("click", (e) => {
    param.goTo("/instructions");
  });
  div.appendChild(style);
  return div;
}
