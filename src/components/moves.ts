const piedra = require("url:../assets/piedra.png");
const papel = require("url:../assets/papel.png");
const tijera = require("url:../assets/tijera.png");
class Moves extends HTMLElement {
  shadow: ShadowRoot = this.attachShadow({ mode: "open" });
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.classList.add("move");
  }

  returnImage(theMove) {
    if (theMove == "piedra") {
      return piedra;
    } else if (theMove == "papel") {
      return papel;
    } else {
      return tijera;
    }
  }

  render() {
    this.classList.add("move");
    const move = this.getAttribute("move")!;
    const div = document.createElement("div");
    const style = document.createElement("style");
    const playState = this.getAttribute("state") || "out-of-game";
    style.innerHTML = `
    
    .hand{
     height:126px;
     cursor:pointer;
    }

    .hand.result{
      height:200px;
    }

    @media (min-width:769px){
      .hand.result{
        transition:initial;
        height:300px;
      }
      .hand.result:hover{
        height:300px;
      }
    }
  
    @media (min-width:769px){
      .hand{
       transition: 1s ease-in-out all;
        height:initial;
      }
      .hand:hover{
        height:200px;
      }
    }
      `;

    div.innerHTML = `<img class="hand ${playState}" src="${this.returnImage(
      move
    )}"/>`;

    this.shadow.appendChild(div);
    this.shadow.appendChild(style);
    this.classList.add(move);
    const handState = div.querySelector(".play");
    const hand = div.querySelector(".hand");
  }
}
customElements.define("the-move", Moves);
