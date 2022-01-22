export function initInstructionsPage(param) {
  const div = document.createElement("div");

  div.innerHTML = `


  `;

  const customElement = div.querySelector("name-form");
  const customElementShadow = customElement.shadowRoot;
  const form = customElementShadow.querySelector(".my-form");
  form.addEventListener("submit", (e) => {
    param.goTo("/form");
  });

  return div;
}
