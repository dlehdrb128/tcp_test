const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);

  res.writeHead(200);
  if (req.method === "GET" && req.url === "/") {
    return res.end("get");
  } else {
    return res.end("이외 조건들");
  }
});

server.listen(5000);
