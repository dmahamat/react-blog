const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://dmahamat:Mahamat1@cluster0-w53zk.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("DB connected"))
  .catch(err => console.error(err));

app.get("/", (req, res) => {
  res.send("<h1>Hello Mahamat</h1>");
});

app.listen(5000);
