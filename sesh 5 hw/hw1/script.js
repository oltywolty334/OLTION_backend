let http = require('http');

let server = http.createServer((req, res) => {
});
server.listen(4000, () => {
    console.log("I am server 1!")
});

let server2 = http.createServer((req, res) => {
});
server2.listen(4001, () => {
    console.log("I am server 2!")
});

let server3 = http.createServer((req, res) => {
});
server3.listen(4002, () => {
    console.log("I am server 3!")
});

let server4 = http.createServer((req, res) => {
});
server4.listen(4003, () => {
    console.log("I am server 4!")
});