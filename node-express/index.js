const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');



const hostname = 'localhost';
const port = 3000;


const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/dishes', dishRouter);

// //////////////////////////////////////

app.get('/dishes/:dishId', (req,res,next) => {
    res.end('Will send details of the dish '+ req.params.dishId + "to you!");
});

app.post('/dishes/:dishId',(req,res,next) => {
    res.status = 403;
    res.end("Post method it's not supported on /dishes/" + req.params.dishId + "\n");
});

app.put('/dishes/:dishId',(req,res,next) => {
    res.write("Updating the dish: "+ req.params.dishId);
    res.end("Will update the dish " + req.body.name + " with details " + req.body.description);
});


app.delete('/dishes/:dishId',(req,res,next) => {
    res.end("Deleting dish "+ req.params.dishId);
});


app.use(express.static(__dirname + '/public'));
// req = request
// res = response
// next = middleware
app.use((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end("<html><body><h1>This is an Express server</h1></body></html>");
});



const server = http.createServer(app);

server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})