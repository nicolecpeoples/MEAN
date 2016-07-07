// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:

    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/cats' || request.url === '/') {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/cars/new') {
        fs.readFile('views/new_car.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/stylesheets/style.css'){ //req.url has the pathname, check if it conatins '.css'

      fs.readFile('stylesheets/style.css', function (err, page) {
        if (err) console.log(err);
        response.writeHead(200, {'Content-Type': 'text/css'});
        response.write(page);
        response.end();
      });

    }
    else if(request.url === '/images/car1.jpg'){ //req.url has the pathname, check if it conatins '.css'

      fs.readFile('images/car1.jpg', function (err, page) {
        if (err) console.log(err);
        response.writeHead(200, {'Content-Type': 'image/jpg'});
        response.write(page);
        response.end();
      });

    }

    else if(request.url === '/images/car2.jpg'){ //req.url has the pathname, check if it conatins '.css'

      fs.readFile('images/car2.jpg', function (err, page) {
        if (err) console.log(err);
        response.writeHead(200, {'Content-Type': 'image/jpg'});
        response.write(page);
        response.end();
      });

    }

    else if(request.url === '/images/car3.jpg'){ //req.url has the pathname, check if it conatins '.css'

      fs.readFile('images/car3.jpg', function (err, page) {
        if (err) console.log(err);
        response.writeHead(200, {'Content-Type': 'image/jpg'});
        response.write(page);
        response.end();
      });

    }

    else if(request.url === '/images/car4.jpg'){ //req.url has the pathname, check if it conatins '.css'

      fs.readFile('images/car4.jpg', function (err, page) {
        if (err) console.log(err);
        response.writeHead(200, {'Content-Type': 'image/jpg'});
        response.write(page);
        response.end();
      });

    }

    else if(request.url === '/images/cat1.jpg'){ //req.url has the pathname, check if it conatins '.css'

      fs.readFile('images/cat1.jpg', function (err, page) {
        if (err) console.log(err);
        response.writeHead(200, {'Content-Type': 'image/jpg'});
        response.write(page);
        response.end();
      });

    }

    else if(request.url === '/images/cat2.jpg'){ //req.url has the pathname, check if it conatins '.css'

      fs.readFile('images/cat2.jpg', function (err, page) {
        if (err) console.log(err);
        response.writeHead(200, {'Content-Type': 'image/jpg'});
        response.write(page);
        response.end();
      });

    }

    else if(request.url === '/images/cat3.jpg'){ //req.url has the pathname, check if it conatins '.css'

      fs.readFile('images/cat3.jpg', function (err, page) {
        if (err) console.log(err);
        response.writeHead(200, {'Content-Type': 'image/jpg'});
        response.write(page);
        response.end();
      });

    }

    else if(request.url === '/images/cat4.jpg'){ //req.url has the pathname, check if it conatins '.css'

      fs.readFile('images/cat4.jpg', function (err, page) {
        if (err) console.log(err);
        response.writeHead(200, {'Content-Type': 'image/jpg'});
        response.write(page);
        response.end();
      });

    }

    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");