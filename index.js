var http = require('http');
var server = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        ipaddress: req.headers['x-forwarded-for'],
        language: req.headers['accept-language'].split(',')[0],
        software: req.headers['user-agent'].match(/\((.+?)\)/)[1]
    })); // regex explained http://tinyurl.com/mog7lr3
});

server.listen(process.env.PORT || 8080, function (err){
    if (err) throw err;
    console.log("App started on port 8080");
});