const dgram = require('dgram');
const fetch = require('node-fetch').default;

let client = dgram.createSocket('udp4');

client.on('message', function (msg, info) {
    console.log('Data received from server : ' + msg.toString());
    console.log('Received %d bytes from %s:%d\n', msg.length, info.address, info.port);
});

async function getIp() {
    const data = await fetch('https://api64.ipify.org?format=json');
    return data.json();
}

getIp()
    .then(ipData => {
        const ipBuffer = Buffer.from(JSON.stringify(ipData));
        client.send(ipBuffer, 2222, 'localhost', function (error) {
            if (error) {
                client.close();
            } else {
                console.log('hi');
            }
        });
    })
    .catch(err => {
        console.error('Error fetching IP:', err);
        client.close();
    });
