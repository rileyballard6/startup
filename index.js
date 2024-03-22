const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const DB = require('./database.js');

const port = process.argv.length > 2 ? process.argv[2] : 3000;
app.use(bodyParser.urlencoded({ extended: true }));
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

app.get("/logininfo", (req, res) => {
  res.send({ mock_database, responses });
});

app.post("/login", async (req, res) => {
  var login_username = req.body.username;
  var login_password = req.body.password;
  const user = await DB.loginUser({username: login_username, password: login_password})
  console.log(user)
  if (
    mock_database.find(
      (user) =>
        user.username === login_username &&
        user.password == login_password &&
        user.manager
    )
  ) {
    res.sendFile("dashboard-manager.html", { root: "public" });
  } else if (
    mock_database.find(
      (user) =>
        user.username === login_username &&
        user.password == login_password
    )
  ) {
    res.sendFile("employee-form.html", { root: "public" });

  } else {
    res.sendFile("login.html", { root: "public" });
  }
});

app.post('/sendresponses', (req,res) => {
  console.log(req.body);
  responses.push({
    name: "New Employee",
    goals: req.body.goals,
    goal_rate: req.body.goal_rate,
    next_goals: req.body.next_goals,
    form_complete: false
  })
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
  };
  await DB.addUser(new_user);
  res.sendFile("employee-form.html", {root: "public"});
});

app.use((_req, res) => {
  res.sendFile("index.html", { root: "public" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
