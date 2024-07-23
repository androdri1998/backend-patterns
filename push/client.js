const WebSocket = require("websocket").client;

const client = new WebSocket();

client.on("connect", (connection) => {
  connection.on("message", (message) => {
    console.log(message.utf8Data);
  });
});

client.connect("ws://localhost:8000");
