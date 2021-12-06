const PORT = 3000;
const express = require("express");
var cors = require("cors");
var allowlist = ["http://localhost:8000"];
var corsOptions = {
  origin: function (origin, callback) {
    var originIsAllowlisted = allowlist.indexOf(origin) !== -1;
    callback(null, originIsAllowlisted);
  },
};
const server = express()
  .use(cors(corsOptions))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = require("socket.io")(server, {
  cors: {
    origin: corsOptions.origin,
  },
});
io.on("connection", (socket) => {
  socket.on("message", (msg) => {
    console.log("message: " + msg);
    socket.emit(
      "message",
      ["Hi there!", "Hello!", "Howdy"][Math.floor(Math.random() * 3)]
    );
  });
});
