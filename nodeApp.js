var http = require('http');
var fs = require('fs');
var PORT = 3000;

fs.readFile('./classifier.html', function (err, html) {

    if (err) throw err;    

    let app = http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    });
	
	// Start the server on port 3000
	app.listen(3000, '127.0.0.1');
	console.log('Node server running on port 3000');
});