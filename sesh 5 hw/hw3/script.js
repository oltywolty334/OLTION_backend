let http = require('http');
let fs = require('fs');

let myTxtFile = fs.readFileSync('text.txt');

let server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/txt');
    res.setHeader('Content-Disposition', 'attachment; filename="text.txt"');
    res.write(myTxtFile);
    res.end();
});

server.listen(4000, () => {
    console.log("Server started listening on port 4000")
});