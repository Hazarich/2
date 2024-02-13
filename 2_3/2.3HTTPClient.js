const http = require('http');

const textToSend = 'Example text to send to server';

const options = {
    hostname: 'localhost',
    port: 8000,
    path: `/?text=${encodeURIComponent(textToSend)}`,
    method: 'GET'
};

const startTime = new Date();

const req = http.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        const endTime = new Date();
        const totalTime = endTime - startTime;

        console.log(`Response from server: ${data}`);
        console.log(`Total time: ${totalTime} ms`);
    });
});

req.on('error', (error) => {
    console.error(`Error: ${error}`);
});

req.end();
