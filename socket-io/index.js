const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const options = {};
const assembleias = {};

const express = require("express");
const socket = require("socket.io");

// App setup
const PORT = 3007;
const app = express();
app.use(function (req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const server = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("funciona marcelo");
});

const post = async (url, jwt) => {
  let resposta = await fetch(url, {
    mode: "no-cors",
    method: "POST",
    headers: { bearer: jwt },
  });
  // console.log(resposta);
};

class Sala {
  constructor(fase, room, players) {
    this.fase = fase;
    this.room = room;
    this.players = players;
  }
}

const salas = [] < Sala > [];

// Socket setup
const io = socket(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Access-Control-Allow-Origin", "*"],
    credentials: true,
  },
});
let i = 0;
io.on("connection", async (socket) => {
  let { room } = JSON.parse(JSON.stringify(socket.request._query));
  socket.room = room;
  socket.join(socket.room);
  if (!salas[room]) {
    console.log('netr')
    salas[room] = new Sala(1, room, 1);
    console.log(salas[room])
  }
  let salaAtual = salas[room];
  console.log(salaAtual)

  setTimeout(() => {
    io.to(socket.room).emit("definirCampo", ++salaAtual.players);
  }, 300);
  socket.on("jogouCarta", (jogada) => {
    console.log(socket.room);
    io.to(socket.room).emit("jogouCarta", jogada);
  });

  socket.on("disconnecting", () => {
    socket.leave(socket.room);
    console.log(" saiu");
  });
});
