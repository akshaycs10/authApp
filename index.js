const http = require('http');
const userService = require('./user.service');

http.createServer(function (req, res) {
    if (req.method == 'POST') {
        processPost(req, res)
    }
    else {
        response.writeHead(200, "OK", { 'Content-Type': 'text/plain' });
        response.end();
    }
}).listen(8080, startup);

function startup() {
    console.log("server listening on 8080 ")
}

function processPost(request, response) {
    if (request.url === '/login') {

        let data = ''
        request.on('data', chunk => {
            data += chunk;
        })
        request.on('end', async () => {
            try {
                const { username, password } = JSON.parse(data)
                let token = await userService.authenticate(username, password)
                response.statusCode = 200
                response.setHeader('Content-Type', 'application/json')
                response.end(JSON.stringify({ token }))
            }
            catch (err) {
                console.error("caught error:", err)
                response.statusCode = 500
                response.setHeader('Content-Type', 'application/json')
                response.end(JSON.stringify({ msg: "internal server error" }))
            }
        })
    }
    else{
        response.writeHead(200, "OK", { 'Content-Type': 'text/plain' });
        response.end("endpoint not found");
    }
}