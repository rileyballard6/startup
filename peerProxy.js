const { WebSocketServer } = require('ws');
const uuid = require('uuid');

function peerProxy(httpService) {

    const wss = new WebSocketServer({noServer: true})
}


module.exports = { peerProxy };