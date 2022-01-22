class Button extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    const shadow = this.attachShadow({ mode: "open" });
    const button = document.createElement("button");
    const style = document.createElement("style");
    style.innerHTML = `
      button{
      width:100%;
      max-width:404px;
      height:87px;
      font-family:"Odibee Sans";
      font-weight:400;
      font-size:45px;
      color:#D8FCFC;
      background-color:#006CFC;
      border: solid 10px #001997;
      border-radius:10px;
      }
      `;

    button.textContent = this.textContent;

    shadow.appendChild(button);
    shadow.appendChild(style);
  }
}
customElements.define("my-button", Button);
