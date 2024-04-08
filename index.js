const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/app' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('1\n');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

const port = 3001;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
