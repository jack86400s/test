const WebSocket = require('fix/126FortuneTiger(虎虎生财)/server/ws');
const server = new WebSocket.Server({ port: 9001 });

function send(socket,ret){ }
server.on('connection', (socket) => {console.log('Client connected.');
    socket.on('close', () => {console.log('Client disconnected.');});

    socket.on('message', (message) => { console.log(`Received message: ${message}`);
        var ret= {
            "error": 0
        };
        socket.send(JSON.stringify(ret))
    });
});

