const http = require("http").createServer();

const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("a user connected");
  const animals = ["🐱 cat", "🐶 dog", "🐭 mouse", "🐴 horse", "🦊 fox"];
  io.emit("message", animals[Math.floor(Math.random() * animals.length)]);

  setInterval(() => {
    io.emit("message", animals[Math.floor(Math.random() * animals.length)]);
  }, 5000);
});

http.listen(8080, () => console.log("listening on http://localhost:8080"));
