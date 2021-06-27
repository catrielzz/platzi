const http = require('http');

http.createServer(router).listen(3000);

function router(req, res){
    console.log('New Request!');
    console.log(req.url);

    switch (req.url) {
        case '/hello':
            res.write('Hello, how are you');
            res.end();
            break;

        default:
            res.write('Error 404: Not Found');
            res.end();
    }

    // res.writeHead(201, {'Content-Type': 'text/plain'});

    // res.write('Hello, we are using nodejs http');
    
    // res.end();
};

console.log('Listening http in port 3000');