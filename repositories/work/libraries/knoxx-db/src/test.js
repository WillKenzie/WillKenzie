request = require('http')
var options = {
    hostname: '127.0.0.1',
    port: '8080',
    path: '/',
    method: 'POST',
    json: {"name":"John", "lastname":"Doe"}
}
request.request(options, function(error, response, body){
    if(error) console.log(error);
    else console.log(body);
});