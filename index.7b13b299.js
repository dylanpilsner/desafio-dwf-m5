function n(n,e,t,o){Object.defineProperty(n,e,{get:t,set:o,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=e.parcelRequireeee9;null==i&&((i=function(n){if(n in t)return t[n].exports;if(n in o){var e=o[n];delete o[n];var i={id:n,exports:{}};return t[n]=i,e.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(n,e){o[n]=e},e.parcelRequireeee9=i),i.register("27Lyk",(function(e,t){var o,i;n(e.exports,"register",(()=>o),(n=>o=n)),n(e.exports,"resolve",(()=>i),(n=>i=n));var r={};o=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)r[e[t]]=n[e[t]]},i=function(n){var e=r[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),i.register("8B8jX",(function(n,e){n.exports=new URL(i("27Lyk").resolve("icvvp"),import.meta.url).toString()})),i.register("cVTHf",(function(n,e){n.exports=new URL(i("27Lyk").resolve("b0tCg"),import.meta.url).toString()})),i.register("jq6ts",(function(n,e){n.exports=new URL(i("27Lyk").resolve("7JH3G"),import.meta.url).toString()})),i("27Lyk").register(JSON.parse('{"dZpbI":"index.7b13b299.js","icvvp":"win.16f25709.png","b0tCg":"draw.29b2912f.svg","7JH3G":"lose.9d0f0f55.png","1Bffm":"papel.5ac1194e.png","hJPD1":"tijera.9dc28ca9.png","9FfCk":"piedra.5fd0d233.png"}'));const r={data:{currentGame:{myPlay:"",botPlay:""},score:{myScore:0,botScore:0},result:""},listeners:[],init(){const n=JSON.parse(localStorage.getItem("saved-score")),e=JSON.parse(localStorage.getItem("saved-result"));n&&e&&(this.setState(n),this.setResult(e))},getState(){return this.data},setMove(n,e){const t=this.getState();""==t.currentGame.myPlay&&(t.currentGame.myPlay=n,t.currentGame.botPlay=e)},winner(){const n=this.getState(),e=this.getState().currentGame,t=e.myPlay,o=e.botPlay;["piedra"==t&&"tijera"==o,"papel"==t&&"piedra"==o,"tijera"==t&&"papel"==o].includes(!0)?(this.pushScore({myScore:1,botScore:0}),n.result="win",this.setResult(n.result)):t==o?(this.pushScore({myScore:0,botScore:0}),n.result="draw",this.setResult(n.result)):(this.pushScore({myScore:0,botScore:1}),n.result="lose",this.setResult(n.result))},pushScore(n){const e=this.getState().score,t=e.myScore,o=e.botScore;e.myScore=t+n.myScore,e.botScore=o+n.botScore,this.setState(e),localStorage.setItem("saved-score",JSON.stringify(e))},setResult(n){this.data.result=n,localStorage.setItem("saved-result",JSON.stringify(n))},setState(n){this.data.score=n;for(let e of this.listeners)e(n)},subscribe(n){this.listeners.push(n)}};const a=[{path:/\/welcome/,component:function(n){const e=document.createElement("div"),t=document.createElement("style");return e.classList.add("main-container"),t.innerHTML="\n  .main-container {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  \n  .title {\n    margin: 40px 0 0;\n    font-size: 80px;\n    color: #009048;\n    letter-spacing: 10px;\n  }\n  \n  \n\n  .start-button {\n    width: 100%;\n    height:100%;\n    max-width: 404px;\n    display:grid;\n    align-items:center;\n  }\n\nmy-button{\n}\n\n  @media(min-width:769px){\n    .start-button{\n    }\n  }\n  \n \n  \n  .moves-container {\n    display: grid;\n    height: 100%;\n    grid-template-columns: 1fr 1fr 1fr;\n    align-items: end;\n    gap: 10px;\n  }\n  \n  @media (min-width: 769px) {\n    .moves-container {\n      gap: 45px;\n    }\n  }\n  ",e.innerHTML='\n  <div class="welcome-container">\n  <h1 class="title">\n    Piedra, <br />\n    Papel o <br />Tijera\n  </h1>\n  </div>\n  <div class="start-button">\n    <my-button>Empezar</my-button>\n  </div>\n  <div class="moves-container">\n    <the-move move="tijera"></the-move>\n    <the-move move="piedra"></the-move>\n    <the-move move="papel"></the-move>\n</div>\n  ',e.querySelector(".start-button").addEventListener("click",(e=>{n.goTo("/instructions")})),e.appendChild(t),e}},{path:/\/instructions/,component:function(n){const e=document.createElement("div"),t=document.createElement("style");return e.classList.add("main-container"),e.innerHTML='\n  <div class="instructions-container">\n  <h2 class="instructions">\n  Presioná jugar\n  y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.\n  </h2>\n  </div>\n  <div class="start-button">\n    <my-button>Empezar</my-button>\n  </div>\n  <div class="moves-container">\n    <the-move move="tijera"></the-move>\n    <the-move move="piedra"></the-move>\n    <the-move move="papel"></the-move>\n  </div>\n  ',t.innerHTML="\n.button-container {\n  width: 100%;\n}\n\n.instructions-container {\n  max-width: 317px;\n}\n\n.instructions {\n  margin: 40px 0 0;\n  font-size: 50px;\n  line-height: 60px;\n  text-align: center;\n}\n\n.start-button {\n  width: 100%;\n  height:100%;\n  max-width: 404px;\n  display:grid;\n  align-items: center;\n}\n\n.main-container {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.moves-container {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n  align-items: end;\n  gap: 10px;\n}\n\n@media (min-width: 769px) {\n  .moves-container {\n    gap: 45px;\n  }\n}\n",e.appendChild(t),e.querySelector(".start-button").addEventListener("click",(e=>{e.preventDefault(),n.goTo("/play")})),e}},{path:/\/play/,component:function(n){let e=2;const t=document.createElement("div"),o=document.createElement("style");t.classList.add("main-container");const i=r.getState().currentGame;o.innerHTML='\n  .main-container {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  \n  .countdown-container {\n    font-family: "Oswald";\n    font-size: 100px;\n    margin-bottom: 200px;\n  }\n  \n  @media (min-width: 769px) {\n    .countdown-container {\n      font-size: 200px;\n    }\n  }\n  \n  .moves-container {\n    display: grid;\n    /* height: 100%; */\n    grid-template-columns: 1fr 1fr 1fr;\n    align-items: end;\n    gap: 10px;\n  }\n  \n  @media (min-width: 769px) {\n    .moves-container {\n      gap: 45px;\n    }\n  }\n    .chosen{\n      transition:0.5s ease all;\n      transform:translateY(-30px);\n    }\n\n    .not-chosen{\n      transition:0.5s ease all;\n      opacity:50%;\n    }\n  \n  ',t.innerHTML='\n  <div class="countdown-container">\n  <div class="countdown">3</div>\n  </div>\n  <div class="moves-container">\n  <the-move state="play" move="tijera"></the-move>\n  <the-move state="play" move="piedra"></the-move>\n  <the-move state="play" move="papel"></the-move>\n  </div>\n  ',t.querySelectorAll("the-move").forEach((n=>{n.addEventListener("click",(n=>{const e=t.querySelector(".piedra"),o=t.querySelector(".papel"),a=t.querySelector(".tijera"),s=n.target.getAttribute("move"),c=["piedra","papel","tijera"][Math.floor(3*Math.random())];r.setMove(s,c),r.winner(),"piedra"==i.myPlay?(e.classList.add("chosen"),o.classList.add("not-chosen"),a.classList.add("not-chosen")):"papel"==i.myPlay?(o.classList.add("chosen"),e.classList.add("not-chosen"),a.classList.add("not-chosen")):"tijera"==i.myPlay&&(a.classList.add("chosen"),e.classList.add("not-chosen"),e.classList.add("not-chosen"))}))}));const a=setInterval((()=>{const o=t.querySelector(".countdown-container"),i=r.getState().currentGame;o.innerHTML=e,e--,e<0&&(clearInterval(a),o.style.display="none",""==i.myPlay?n.goTo("/instructions"):n.goTo("/results"))}),1e3);return""==i.myPlay&&n.goTo("/instructions"),t.appendChild(o),t}},{path:/\/results/,component:function(n){const e=i("8B8jX"),t=i("cVTHf"),o=i("jq6ts"),a=document.createElement("div"),s=document.createElement("style"),c=r.getState().currentGame,l=r.getState().score,d=r.getState().result;return a.classList.add("main-container"),s.innerHTML="\n  .main-container {\n    height: 100vh;\n    max-width:335px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    margin:0 auto;\n  }\n  .bot-move-container {\n    transform: rotate(180deg);\n  }\n  \n  .my-move-container {\n    align-items: flex-end;\n  }\n  \n  .result-container {\n    position: absolute;\n    height: 100vh;\n    width: 100%;\n    max-width: 335px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    opacity: 0%;\n    flex-direction: column;\n    animation-duration: 3s;\n    animation-name: showsup;\n    animation-delay: 0.5s;\n    animation-fill-mode: forwards;\n  }\n  \n  .result-container.draw {\n    background-color: #828282b0;\n  }\n  .result-container.win {\n    background-color: #6cb46cb0;\n  }\n  .result-container.lose {\n    background-color: #894949e5;\n  }\n  \n  @keyframes showsup {\n    50%,\n    100% {\n      opacity: 100%;\n    }\n  }\n  \n  .result {\n    height: 250px;\n  }\n  \n  .score-container {\n    height: 217px;\n    width: 260px;\n    background-color: white;\n    border: solid 10px;\n    border-radius: 10px;\n    margin-top: 40px;\n  }\n  .score-title {\n    font-size: 55px;\n    margin: 0;\n    text-align: center;\n    margin-bottom: 10px;\n  }\n  .vos,\n  .bot {\n    font-size: 45px;\n    margin: 0;\n    text-align: right;\n    margin-right: 60px;\n  }\n  \n  .score {\n    margin-left: 10px;\n  }\n  \n  .play-again-button {\n    width: 100%;\n    max-width: 260px;\n    margin-top: 30px;\n  }\n  \n  ",a.innerHTML=`\n  <div class="bot-move-container">\n  <the-move move=${c.botPlay} state="result" style="text-align:center;"></the-move>\n  </div>\n  <div class="my-move-container">\n  <the-move move=${c.myPlay} state="result" style="text-align:center;"></the-move>\n  </div>\n  <div class="result-container">\n  <img class="result" src="${"win"==d?e:"lose"==d?o:"draw"==d?t:void 0}" />\n  <div class="score-container">\n  <h3 class="score-title">Score</h3>\n  <h4 class="vos">Vos:<span class="score">${l.myScore}</span></h4>\n  <h4 class="bot">Bot:<span class="score">${l.botScore}</span></h4>\n  </div>\n  <div class="play-again-button">\n  <my-button>Volver a Jugar</my-button>\n  </div>\n  </div>\n`,r.getState().currentGame={myPlay:"",botPlay:""},function(){const n=a.querySelector(".result-container");"win"==d?n.classList.add("win"):"draw"==d?n.classList.add("draw"):"lose"==d&&n.classList.add("lose")}(),a.querySelector("my-button").addEventListener("click",(e=>{e.preventDefault(),n.goTo("/instructions")})),""==c.myPlay&&n.goTo("/instructions"),a.appendChild(s),a}}];function s(n){function e(e){for(let o of a)if(o.path.test(e)){const e=o.component({goTo:t});n.firstChild?.remove(),n.appendChild(e)}}function t(n){const t=location.host.includes("github.io")?"/rock-paper-scissor"+n:n;history.pushState({},"",t),e(t)}location.host.includes("github.io")&&t("/welcome"),window.onpopstate=()=>{e(location.pathname)},e(location.pathname)}class c extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.attachShadow({mode:"open"}),e=document.createElement("button"),t=document.createElement("style");t.innerHTML='\n      button{\n      cursor:pointer;\n      width:100%;\n      height:87px;\n      font-family:"Odibee Sans";\n      font-weight:400;\n      font-size:45px;\n      color:#D8FCFC;\n      background-color:#006CFC;\n      border: solid 10px #001997;\n      border-radius:10px;\n      }\n\n      button:hover{\n        background-color:#0056ca\n      }\n\n      ',e.textContent=this.textContent,n.appendChild(e),n.appendChild(t)}}customElements.define("my-button",c);var l;l=new URL(i("27Lyk").resolve("9FfCk"),import.meta.url).toString();var d;d=new URL(i("27Lyk").resolve("1Bffm"),import.meta.url).toString();var m;m=new URL(i("27Lyk").resolve("hJPD1"),import.meta.url).toString();class p extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.classList.add("move")}returnImage(n){return"piedra"==n?l:"papel"==n?d:m}render(){this.classList.add("move");const n=this.getAttribute("move"),e=document.createElement("div"),t=document.createElement("style"),o=this.getAttribute("state")||"out-of-game";t.innerHTML="\n    \n    .hand{\n     height:126px;\n     cursor:pointer;\n    }\n\n    .hand.result{\n      height:200px;\n    }\n\n    @media (min-width:769px){\n      .hand.result{\n        transition:initial;\n        height:300px;\n      }\n      .hand.result:hover{\n        height:300px;\n      }\n    }\n  \n    @media (min-width:769px){\n      .hand{\n       transition: 1s ease-in-out all;\n        height:initial;\n      }\n      .hand:hover{\n        height:200px;\n      }\n    }\n      ",e.innerHTML=`<img class="hand ${o}" src="${this.returnImage(n)}"/>`,this.shadow.appendChild(e),this.shadow.appendChild(t),this.classList.add(n);e.querySelector(".play"),e.querySelector(".hand")}}customElements.define("the-move",p),function(){const n=document.querySelector(".root");r.init(),s(n)}();
//# sourceMappingURL=index.7b13b299.js.map
