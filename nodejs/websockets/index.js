const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', (socket)=>{
    console.log('New client connected');
    socket.emit('Message', 'Welcome!');
})

setInterval(() => {
    io.emit('Message', 'Hello, you are notified');
}, 3000);

server.listen(8080, () => {
    console.log('Socket Server initialized in http://localhost:8080')
});