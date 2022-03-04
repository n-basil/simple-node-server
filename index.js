const http  = require("http");

const hostname = "127.0.0.1"
const port = 3000;

const server = http.createServer((req, resp) => {
    resp.end("Hello World!")
});

server.listen(port, hostname, () => {
    console.log(`Server listening at http://${hostname}:${port}/`)
});