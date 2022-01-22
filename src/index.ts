import { initRoute } from "./router";
import "./components/button";
import "./components/moves";

(function () {
  const rootEl = document.querySelector(".root");
  initRoute(rootEl);
})();
