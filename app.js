var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
    console.log('client request URL shahan:', request.url);
    //cars route
    if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/car2.jpg') {
        fs.readFile('images/car2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/*'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/car3.jpg') {
        fs.readFile('images/car3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/*'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/car4.jpg') {
        fs.readFile('images/car4.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/*'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents);
            response.end();
        })
    }
    // cats route
    else if (request.url === '/cats'){
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat1.jpg') {
        fs.readFile('images/cat1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/*'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat2.jpg') {
        fs.readFile('images/cat2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/*'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat3.jpg') {
        fs.readFile('images/cat3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/*'});
            response.write(contents);
            response.end();
        })
    }
    // cars/new form
    else if (request.url === 'cars/new'){
        fs.readFile('views/newcar.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }








    
    else {
        response.writeHead(404);
        response.end('$$$File not found $$$!!!');
    }
});
server.listen(6789);
console.log("Running in localhost at port 6789");