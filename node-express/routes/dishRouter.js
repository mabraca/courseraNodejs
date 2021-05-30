const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route("/")
.all((req,res,next) => {
    res.status = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the dishes for you!');
})
.post((req,res,next) => {
    res.end('Will add the dish S'+ req.body.name + ' with details ' + req.body.description);
})
.put((req,res,next) => {
    res.status = 403;
    res.end("Put method it's not supported on /dishes");
})
.delete((req,res,next) => {
    res.end("Deleting all the dishes");
});

module.exports = dishRouter;