const net = require('net');
const fetch = require('node-fetch').default;

const server = net.createServer((socket) => {
    console.log('Client connected');
    socket.on('data', function(data) {
        console.log('Received ' + data.toString());
        socket.write(`Hi`)
        fetch(`https://api64.ipify.org?format=json`)
            .then(response => {
                if (response.ok) {
                    response.json().then(data => {
                        socket.write(JSON.stringify(data));
                    });
                } else {
                    throw new Error('Response not OK');
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    });
    socket.on('end', function() {
        console.log('Connection is closed');
    });
});

const PORT = 1337;
server.listen(PORT, function() {
    console.log(`Port: ${PORT}`);
});
