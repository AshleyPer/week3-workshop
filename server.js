var express = require('express');
var app = express();
const path = require('path'); 
require('./routes/homeroute.js').route(app,path);

let users = [{"email": "email@com.au", "password" : "1234"}, {"email": "ashley@mail.com.au", "password" : "123"}, {"email": "gmail@eee.com.au", "password" : "ashley"}];

//var http = require('http').Server(app);
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(__dirname + '/www'));

//home.route(app, '/')

app.listen(3000, '127.0.0.1',function(){
    var d = new Date();
    var n = d.getHours();
    var m = d.getMinutes();
    console.log('Server has been started at : ' + n + ':' +m);
})

/*
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/www/form.html');
});*/

app.get('/account', function (req, res) {
    res.sendFile(__dirname + '/www/account.html');
});

app.post('/api/login',function(req,res){
    if(!req.body){
        return res.sendStatus(400);
    }

    var customer = {};

    customer.email = req.body.email;
    customer.upwd = req.body.upwd;
    customer.valid = false;
    
    for(let i = 0; i < users.length; i++){
        if(users[i].email == customer.email && users[i].password == customer.upwd){
            customer.valid = true;
            break;
        }
    }
    res.send(customer);
})