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
    const piedra = require("url:../images/piedra.png");
    const papel = require("url:../images/papel.png");
    const tijera = require("url:../images/tijera.png");
    if (theMove == "piedra") {
      this.setAttribute("id", "1");
      return piedra;
    } else if (theMove == "papel") {
      this.setAttribute("id", "2");
      return papel;
    } else {
      this.setAttribute("id", "3");
      return tijera;
    }
  }

  render() {
    // const shadow: any = this.attachShadow({ mode: "open" });
    this.classList.add("move");
    const move = this.getAttribute("move");
    const div = document.createElement("div");
    const style = document.createElement("style");
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
       transition: 3s ease-in-out all;
        height:initial;
      }
      .hand:hover{
        height:200px;
      }
    }
      `;

    div.innerHTML = `<img class="hand" src=${this.returnImage(move)}/>`;
    const state = this.getAttribute("state");
    const hand = div.querySelector(".hand");

    hand.classList.add(state);

    this.shadow.appendChild(div);
    this.shadow.appendChild(style);
  }
}
customElements.define("the-move", Moves);
