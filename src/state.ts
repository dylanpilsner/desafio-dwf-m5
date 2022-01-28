export { state };

type play = "piedra" | "papel" | "tijera";
type score = {
  myScore: number;
  botScore: number;
};
const state = {
  data: {
    currentGame: {
      myPlay: "",
      botPlay: "",
    },
    score: {
      myScore: 0,
      botScore: 0,
    },
    result: "",
  },
  listeners: [],

  init() {
    const score = JSON.parse(localStorage.getItem("saved-score"));
    const result = JSON.parse(localStorage.getItem("saved-result"));

    if (score && result) {
      this.setState(score);
      this.setResult(result);
    }
  },

  getState() {
    return this.data;
  },

  setMove(myMove: play, botMove: play) {
    const currentState = this.getState();
    if (currentState.currentGame.myPlay == "") {
      currentState.currentGame.myPlay = myMove;
      currentState.currentGame.botPlay = botMove;
    }
  },

  winner() {
    const data = this.getState();
    const currentGame = this.getState().currentGame;
    const myPlay = currentGame.myPlay;
    const botPlay = currentGame.botPlay;
    const ganoConTijera = myPlay == "tijera" && botPlay == "papel";
    const ganoConPiedra = myPlay == "piedra" && botPlay == "tijera";
    const ganoConPapel = myPlay == "papel" && botPlay == "piedra";
    const posibilities = [ganoConPiedra, ganoConPapel, ganoConTijera];
    if (posibilities.includes(true)) {
      this.pushScore({ myScore: 1, botScore: 0 });
      data.result = "win";
      this.setResult(data.result);
    } else if (myPlay == botPlay) {
      this.pushScore({ myScore: 0, botScore: 0 });
      data.result = "draw";
      this.setResult(data.result);
    } else {
      this.pushScore({ myScore: 0, botScore: 1 });
      data.result = "lose";
      this.setResult(data.result);
    }
  },

  pushScore(score: score) {
    const currentScore = this.getState().score;
    const myScore = currentScore.myScore;
    const botScore = currentScore.botScore;

    currentScore.myScore = myScore + score.myScore;
    currentScore.botScore = botScore + score.botScore;
    this.setState(currentScore);

    localStorage.setItem("saved-score", JSON.stringify(currentScore));
  },

  setResult(newResult) {
    this.data.result = newResult;
    localStorage.setItem("saved-result", JSON.stringify(newResult));
  },

  setState(newState) {
    this.data.score = newState;

    for (let cb of this.listeners) {
      cb(newState);
    }
  },

  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
};
