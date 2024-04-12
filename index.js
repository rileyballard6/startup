const express = require("express");
const app = express();
const session = require('express-session');
const bodyParser = require("body-parser");
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js');

const port = process.argv.length > 2 ? process.argv[2] : 3000;
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: "abcdefg",
  resave: true,
  saveUninitialized: true
}))
app.use(express.json());
app.use(express.static("public"));



app.get("/logininfo", async (req, res) => {
  const user = req.session.user
  const results = await DB.getReponses();
  res.send({ user, results });
});

app.post("/login", async (req, res) => {
  var login_username = req.body.username;
  var login_password = req.body.password;
  const user = await DB.loginUser({username: login_username, password: login_password})
});

app.post('/sendresponses', async (req,res) => {
  console.log("request receieved")
  console.log(req.session.user)
  console.log(req.body)
  const response = {
    goals: req.body.goals,
    goal_rate: req.body.goal_rate,
    next_goals: req.body.next_goals,
    form_complete: false
  }
  await DB.updateResponse(req.body.username, response)
})

app.post("/register", async (req, res) => {
  console.log("request receieved")
  res.status(200);
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.log(req.body)
  var name = req.body.username;
  var username = req.body.username;
  var password = req.body.password;
  const new_user = {
    full_name: name,
    username: username,
    password: password,
    manager: false,
    response: {},
  };
  await DB.addUser(new_user);
  req.session.user = new_user;
  res.send(new_user);
});


const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

peerProxy(httpService);
