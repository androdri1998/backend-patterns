const http = require("node:http");
const WebSocket = require("websocket").server;
const connections = new Map();

const httpServer = http.createServer();

const webSocket = new WebSocket({ httpServer });
httpServer.listen(8000, () => {
  console.log("server running on port 8000");
});

const sendForAll = ({ messageText, connections }) => {
  for (let connection of connections.values()) {
    connection.send(messageText);
  }
};

webSocket.on("request", (request) => {
  const connection = request.accept(null, request.origin);

  connection.on("message", (message) => {
    sendForAll({
      messageText: `user id ${connection.socket.remotePort}: ${message.utf8Data}`,
      connections,
    });
  });

  connections.set(connection.socket.remotePort, connection);
  sendForAll({
    messageText: `user id ${connection.socket.remotePort} has connected`,
    connections,
  });
});
