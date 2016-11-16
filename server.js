var express = require('express');
var app = express();
var parser = require('ua-parser-js');
var r={};

app.get('/', function (req, res) {
    r.ip=req.headers['x-forwarded-for'];
    var templang=req.headers['accept-language']

    var lang=templang.split(",");
    console.log(lang[0]);
    r.language=lang[0];
    var agent=req.headers['user-agent'];
    var ua = parser(req.headers['user-agent']);
    r.OS=ua.os.name + ' ' + ua.os.version;
    res.send(r);
})

app.listen(8080);


