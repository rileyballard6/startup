const { name } = require('ejs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const e = require('express');

const port = process.argv.length > 2 ? process.argv[2] : 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

var mock_database = [
  {
    name: "Admin",
    username: "admin",
    password: "password",
    manager: true
  }
];

app.post('/login', (req,res) => {
  var login_username = req.body.username;
  var login_password = req.body.password;
  mock_database.forEach((user) => {
    if (login_username == user.username) {
      if (login_password == user.password && user.manager) {
        res.sendFile('dashboard-manager.html', { root: 'public' });
      } else if (login_password == user.password) {
        res.sendFile('employee-form.html', { root: 'public' });

      }
    } else {
      console.log("user not found")
    }
  }) 

})

app.post('/register', (req,res) => {
    var name = req.body.username;
    var username = req.body.username;
    var password = req.body.password;
    mock_database.push({
      full_name: name,
      username: username,
      password: password,
      manager: false
    })
    console.log(mock_database);
    res.redirect('/')
})

app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });
  
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });