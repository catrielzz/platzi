import { Server } from 'socket.io';
const socket = {};
const functions = {
    socket: socket,
    connect: function connect(server) {
        socket.io = new Server(server);
    }
}


export default functions;
