const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your username: ", usernamechecker);
function usernamechecker(username){

    if (username == `admin`){
        console.log("Welcome "+username);
    }else{
        console.log("Wrong username");
        rl.close();
    }
}

