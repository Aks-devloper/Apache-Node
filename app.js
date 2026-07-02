const http = require('http')

const server = http.createServer((req, res) => {
    console.log(`Request received: ${req.url}`);

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end(`
        <html>
        <body>
            <h1>Node.js Application</h1>
            <p>Served through Apache Reverse Proxy</p>
        </body>
        </html>
    `);
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Node app listening on localhost:3000');
    console.log('Git Advanced Practice');
    console.log('created a devops feature');
    console.log('A payment reciept is created');
    console.log('Track a new concept');
    console.log('Added a new booking feature');
    console.log('Created a booking page');
    console.log('A quote feature is added');
    console.log('A project Quotes are created');
});
