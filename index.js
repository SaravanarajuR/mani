const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs');


app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/loginWM", {
  useNewUrlParser: true
});

const schema = {
  emailId: String,
  password: String,
}

const Data = mongoose.model("Data", schema);

app.get("/login", function (req, res) {
  res.render("login");
})

app.get("/signup", function (req, res) {
  res.render("signup");
})

app.get('/donate', function (req, res) {
  res.render("donarpage");
})
app.get('/header', function (req, res) {
  res.render("header");
})

app.post("/signup", function (req, res) {
  const data = new Data({
    emailId: req.body.email,
    password: req.body.cpassword,
  });
})













app.listen("3000", function () {
  console.log("server started")
})
