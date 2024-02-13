const udp = require('dgram');
let server = udp.createSocket('udp4');

server.on('error', function (error) {
    console.log('Error: ' + error);
    server.close();
});

server.on('message', function (msg, info) {
    console.log('Data received from client : ' + msg.toString());
    console.log('Received %d bytes from %s:%d\n', msg.length, info.address, info.port);

    // Sending a response back to the client
    server.send(msg, info.port, 'localhost', function (error) {
        if (error) {
            server.close();
        } else {
            console.log('Data sent!');
        }
    });
});

server.on('listening', function () {
    let address = server.address();
    let port = address.port;
    let family = address.family;
    let ipaddr = address.address;
    console.log('Server is listening at port ' + port);
    console.log(`hi`)
});

// Emits after the socket is closed using socket.close();
server.on('close', function () {
    console.log('Socket is closed!');
});

server.bind(2222);
