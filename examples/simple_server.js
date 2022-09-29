//import { WebSocketServer } from 'ws';
import WebSocket from 'ws';
const wss = new WebSocketServer({ port: 8083 });

wss.on('connection', function connection(ws) {
    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });

    ws.send('something');
});