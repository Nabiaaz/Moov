export default {
  async fetch(request) {
    const url = new URL(request.url);

    // 1. Redirection VLESS (Votre chemin actuel /vps1/vless-ws) sur le port 10001
    if (url.pathname === "/vps1/vless-ws") {
      return fetch("http://79.133.42.185:10001" + url.pathname, {
        headers: request.headers,
      });
    }

    // 2. Redirection Trojan sur le port 10002
    if (url.pathname === "/trojan-ws") {
      return fetch("http://79.133.42.185:10002" + url.pathname, {
        headers: request.headers,
      });
    }

    // 3. Vous pouvez ajouter d'autres protocoles ici (ex: VMess sur le port 10003)
    if (url.pathname === "/vmess-ws") {
      return fetch("http://79.133.42.185:10003" + url.pathname, {
        headers: request.headers,
      });
    }

    return new Response("Service actif", { status: 200 });
  },
};

