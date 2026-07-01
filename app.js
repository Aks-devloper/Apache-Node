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
    console.log('Git Advance Practice');
    console.log('Git branch demo Created');
    console.log('Learning a Git Stash');
    console.log('New Feature1 branch is created');
    console.log('Feature1 change2');
    console.log('Feature1 change3');
    console.log('New Feature2 branch is created');
    console.log('Feature2 change2');
    console.log('New Feature3 branch is created');
});
