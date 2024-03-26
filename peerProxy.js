const { WebSocketServer } = require('ws');
const uuid = require('uuid');

function peerProxy() {

    const wss = new WebSocketServer({noServer: true})
}