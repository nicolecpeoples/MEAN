// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');

var url = require('url');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:

var serveFile = function() {

	fs.readFile('views/index.html', 'utf8', function (errors, contents){

			if (errors) console.log(errors);
			console.log(url.href());
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
}
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/') {
    	// console.log(url.host);
        serveFile();

    }

    else if(request.url === '/stylesheets/style.css'){ //req.url has the pathname, check if it conatins '.css'

      serveFile();

    }
    else if(request.url === '/images/car1.jpg'){ //req.url has the pathname, check if it conatins '.css'
      serveFile();
    }


    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(8000);
// print to terminal window
console.log("Running in localhost at port 8000");