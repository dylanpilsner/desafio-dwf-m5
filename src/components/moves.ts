class Moves extends HTMLElement {
  shadow: ShadowRoot = this.attachShadow({ mode: "open" });
  constructor() {
    super();
    this.render();
  }

  returnImage(theMove) {
    const piedra = require("url:../images/piedra.png");
    const papel = require("url:../images/papel.png");
    const tijera = require("url:../images/tijera.png");
    if (theMove == "piedra") {
      return piedra;
    } else if (theMove == "papel") {
      return papel;
    } else {
      return tijera;
    }
  }

  render() {
    // const shadow: any = this.attachShadow({ mode: "open" });
    const move = this.getAttribute("move");
    const div = document.createElement("div");
    const style = document.createElement("style");

    style.innerHTML = `
    .hand{
     height:126px;
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

    div.innerHTML = `<img class="hand" src="${this.returnImage(move)}"/>`;

    this.shadow.appendChild(div);
    this.shadow.appendChild(style);
  }
}
customElements.define("the-move", Moves);
