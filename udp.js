const dgram = require("dgram");
const server = dgram.createSocket("udp4");
const port = 5000;

server.on("message", (message, info) => {
  console.log(message.toString());
  console.log(info.address, "port:", info.port);
});

server.on("listening", () => {
  const address = server.address();
  console.log(`listening ${address.address}:${address.port}`);
});

server.bind(port);
