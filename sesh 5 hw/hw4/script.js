let http = require('http');

let server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Disposition', 'attachment; filename="hello.txt"');
    res.write("hello world");
    res.end();
});
server.listen(4000, () => {
    console.log("Server 1 successfuly started on port 4000!")
});