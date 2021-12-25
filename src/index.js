const config = require("../config/config");
const express = require("express");
const compression = require("compression");
const mongoSanitize = require("express-mongo-sanitize");
const app = express();
const xss = require("xss-clean");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// gzip compression
app.use(compression());

app.get("/user", function (req, res) {
  res.json({
    sayHello: "Hello World",
  });
});

app.post("/user", async (req, res) => {
  try {
    const body = req.body;
    return res.status(201).json(body);
  } catch (error) {
    return res.status(500).json(error);
  }
});

app.listen(config.port, config.host, () => {
  console.log(`APP LISTENING ON http://${config.host}:${config.port}`);
});

module.exports = app;
