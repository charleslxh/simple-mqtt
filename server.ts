
var io = require('socket.io');

class Server {
    port: number;
    constructor(public _port) {
        this.port = _port;
    }
}

