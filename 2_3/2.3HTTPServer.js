const http = require('http');
const fetch = require('node-fetch').default;

const server = http.createServer((req, res) => {
    let receivedText = '';

    req.on('data', (chunk) => {
        receivedText += chunk;
    });

    req.on('end', () => {
        fetch(`https://api64.ipify.org?format=json`)
            .then(response => {
                if (response.ok) {
                    response.json().then(data => {
                        res.writeHead(200, {'Content-Type': 'text/plain'});
                        res.end(receivedText);
                    });
                } else {
                    throw new Error('Response not OK');
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    });
});

server.listen(8000, () => {
    console.log('Server listening on http://localhost:8000');
});
