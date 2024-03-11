const { name } = require('ejs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

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