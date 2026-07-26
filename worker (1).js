export default {
  async fetch(request) {
    const url = new URL(request.url);
    const upgradeHeader = request.headers.get("Upgrade");

    // Redirection vers le VLESS sur le port 10001
    if (url.pathname === "/vless-ws") {
      return fetch("http://79.133.42.185:10001" + url.pathname + url.search, {
        headers: request.headers,
      });
    }

    // Redirection vers le Trojan sur le port 10002
    if (url.pathname === "/trojan-ws") {
      return fetch("http://79.133.42.185:10002" + url.pathname + url.search, {
        headers: request.headers,
      });
    }

    return new Response("Service actif", { status: 200 });
  },
};
