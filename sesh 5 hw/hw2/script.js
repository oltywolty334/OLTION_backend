let http = require('http');

let server = http.createServer((req, res) => {
    console.log(req.method);
});
server.listen(4000, () => {
    console.log("Server listening on port 4000")
});