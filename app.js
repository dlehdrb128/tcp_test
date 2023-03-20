const net = require("net");

const server = net.createServer((socket) => {
  console.log(`cnnected address: ${socket.address().address}`);
  socket.on("data", (data) => {
    console.log("====== receive data=======");

    const httpHTML = `
HTTP/1.1 200 OK
Content-Type: text/html

    <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Hello, world!</title>
      </head>
      <body>
        <h1>Hello, world!</h1>
        <p>이야!!!!호호호홓호@$@$</p>
      </body>
      </html>
    `;

    const httpJSON = `HTTP/1.1 200 OK
Connection: close
Content-Type: application/json; charset=UTF-8

    {
    "name": "mung",
    "age": 30
    }
    `;

    // console.log(html, "받음 데이터!");
    console.log(httpJSON);
    socket.write(httpJSON);
    console.log("====== receive data=======");
    socket.end(); // 4-awy
  });
});

server.listen(5000, function () {
  console.log(`listen on port 5000`);
});
