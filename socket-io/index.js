const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const options = {};
const assembleias = {};

const express = require("express");
const socket = require("socket.io");

let TEN_MEETINGS_API = "https://dev.tenmeetings.com.br/";
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

// Socket setup
const io = socket(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Access-Control-Allow-Origin", "*"],
    credentials: true,
  },
});

io.on("connection", async (socket) => {
  console.log("conectaram?");
  socket.on("jogouCarta", (jogada) => {
    console.log("jogou carta");
    io.emit("jogouCarta", jogada);
  });

  socket.on("disconnecting", () => {
    console.log(" saiu");
  });
});
