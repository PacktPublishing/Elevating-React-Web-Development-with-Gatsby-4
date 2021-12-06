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
const pathToRoom = (path) => `Page-${path}`;

io.on("connection", (socket) => {
  io.emit("count", io.engine.clientsCount);
  socket.on("page-update", ({ currentPage, previousPage }) => {
    if (previousPage) {
      const previousRoom = pathToRoom(previousPage);
      socket.leave(previousRoom);
      io.to(previousRoom).emit(
        "page-count",
        io.sockets.adapter.rooms.get(previousRoom)?.size
      );
    }
    const roomToJoin = pathToRoom(currentPage);
    socket.join(roomToJoin);
    io.to(roomToJoin).emit(
      "page-count",
      io.sockets.adapter.rooms.get(roomToJoin).size
    );
  });
  socket.on("disconnect", function () {
    io.emit("count", io.engine.clientsCount);
    for(room of io.sockets.adapter.rooms){
      io.to(room[0]).emit(
        "page-count",
        io.sockets.adapter.rooms.get(room[0])?.size
      );
    };
  });
});
