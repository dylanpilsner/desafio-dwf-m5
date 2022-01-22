const routes = [
  {
    path: /\/welcome/,
    component: 1,
  },
  {
    path: /\/form/,
    component: 1,
  },
];

function isGithubPages() {
  return location.host.includes("github.io");
}

export function initRoute(container: Element) {
  const BASE_PATH = "/desafio-m5";

  function handleRoute(route) {
    for (let r of routes) {
      if (r.path.test(route)) {
        const el: any = r.component({ goTo: goTo });
        container.firstChild?.remove();
        container.appendChild(el);
      }
    }
  }

  function goTo(path) {
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }

  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = () => {
    handleRoute(location.pathname);
  };
  handleRoute(location.pathname);
}
