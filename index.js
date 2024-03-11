const express = require("express");
const app = express();
const bodyParser = require("body-parser");

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

app.get('/logininfo', (req,res) => {
  res.send(mock_database[0]);
})

app.post("/login", (req, res) => {
  var login_username = req.body.username;
  var login_password = req.body.password;
  if (
    mock_database.find(
      (user) =>
        user.username === login_username && user.password == login_password
    )
  ) {
    res.sendFile("dashboard-manager.html", { root: "public" });
    
  } else {
    res.sendFile("login.html", { root: "public" });
  }
});

app.post("/register", (req, res) => {
  var name = req.body.username;
  var username = req.body.username;
  var password = req.body.password;
  mock_database.push({
    full_name: name,
    username: username,
    password: password,
    manager: false,
  });
  console.log(mock_database);
  res.redirect("/");
});

app.use((_req, res) => {
  res.sendFile("index.html", { root: "public" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
