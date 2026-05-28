export default {
  async fetch(request) {
    const upgradeHeader = request.headers.get("Upgrade");
    if (!upgradeHeader || upgradeHeader !== "websocket") {
      return new Response("OK", { status: 200 });
    }
    const webSocketPair = new WebSocketPair();
    const [client, server] = Object.values(webSocketPair);
    server.accept();
    const fetchResponse = await fetch("http://79.133.42.185:8080", {
      headers: request.headers,
    });
    return new Response(null, { status: 101, webSocket: client });
  },
};
