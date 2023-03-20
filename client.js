const net = require("net");

// 서버 5000번 포트로 접속
// 3 way-handshake
const socket = net.connect({ port: 5000 });

socket.on("connect", function () {
  console.log("connected to server!");
  const msg = `GET /a HTTP/1.1\r\nAccept: */*\r\nUser-Agent: my-test-agent\r\nHost: localhost:5000\r\n\r\n
`;

  const msg15 = [
    "GET / HTTP/1.1",
    "Accept: */*",
    "User-Agent: my-test-agent",
    "Host: localhost:5000",
    "",
    "",
  ].join("\r\n");

  console.log(msg);

  //   console.log(
  //     "============================== 절취선 ============================",
  //   );
  console.log(msg15);

  socket.write(msg);

  //   setInterval(function () {
  //     socket.write("mung mung~~");
  //   }, 1000);
});

// 서버로부터 받은 데이터를 화면에 출력
socket.on("data", function (chunk) {
  console.log("receive: " + chunk);
});

// 접속이 종료됬을때 메시지 출력
// 4 way-handshake
socket.on("end", function () {
  console.log("disconnected.");
});

// 에러가 발생할때 에러메시지 화면에 출력
socket.on("error", function (err) {
  console.log(err);
});

// connection에서 timeout이 발생하면 메시지 출력
socket.on("timeout", function () {
  console.log("connection timeout.");
});
