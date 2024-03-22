const { MongoClient } = require('mongodb');
const config = require("./dbConfig.json");

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const startup = db.collection('users');

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

async function addUser(user) {
  const result = await startup.insertOne(user);
  return result;
}

async function loginUser(user) {
  const result = await startup.findOne({username: user.username})
  if (!result) {
    console.log('error!')
    return;
  }
  if (user.password == result.password) {
    return result;
  } else {
    console.log("error!")
  }
}

async function updateResponse(user, response) {
  await startup.findOneAndUpdate({username: user.username}, response)
}



module.exports = { addUser, loginUser, updateResponse };

