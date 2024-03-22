const express = require("express");
const app = express();
const session = require('express-session');
const bodyParser = require("body-parser");
const DB = require('./database.js');

const port = process.argv.length > 2 ? process.argv[2] : 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: "abcdefg",
  resave: true,
  saveUninitialized: true
}))
app.use(express.json());
app.use(express.static("public"));

var mock_database = [
  {
    name: "Admin",
    username: "admin",
    password: "password",
    manager: true,
  },
];

var responses = [
  {
    name: "employee1",
    goals: "this is my goal",
    goal_rate: "Excellent",
    next_goals: "These are my next goals",
    form_complete: false,
  },
  {
    name: "employee2",
    goals: "this is my goal",
    goal_rate: "Excellent",
    next_goals: "These are my next goals",
    form_complete: false,
  },
  {
    name: "employee3",
    goals: "this is my goal",
    goal_rate: "Excellent",
    next_goals: "These are my next goals",
    form_complete: true,
  },
];

app.get("/logininfo", async (req, res) => {
  const user = req.session.user
  const results = await DB.getReponses();
  res.send({ user, results });
});

app.post("/login", async (req, res) => {
  var login_username = req.body.username;
  var login_password = req.body.password;
  const user = await DB.loginUser({username: login_username, password: login_password})
  if (!user) {
    res.sendFile("login.html", {root: "public"})
    return;
  }
  req.session.user = user;
  if (!req.session.user) {
    res.sendFile("login.html", {root: "public"})
  }
  if (req.session.user.manager) {
    res.sendFile("dashboard-manager.html", {root: 'public'})
  } else if (!req.session.user.manager) {
    res.sendFile("employee-form.html", {root: 'public'})
  } else {
    res.sendFile("login.html", {root: "public"})
  }
});

app.post('/sendresponses', async (req,res) => {
  const response = {
    goals: req.body.goals,
    goal_rate: req.body.goal_rate,
    next_goals: req.body.next_goals,
    form_complete: false
  }
  await DB.updateResponse(req.session.user, response)
  res.sendFile("thankyou.html", {root: 'public'})
})

app.post("/register", async (req, res) => {
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
  res.sendFile("employee-form.html", {root: "public"});
});

app.use((_req, res) => {
  res.sendFile("index.html", { root: "public" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
