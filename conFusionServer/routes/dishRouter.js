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

//////////////////// Details ////////////////////

dishRouter.route("/:dishId")

.get((req,res,next) => {
    res.end('Will send details of the dish '+ req.params.dishId + " to you!");
})

.post((req,res,next) => {
    res.status = 403;
    res.end("Post method it's not supported on /dishes/" + req.params.dishId + " \n ");
})

.put((req,res,next) => {
    res.write("Updating the dish: "+ req.params.dishId);
    res.end("Will update the dish: " + req.body.name + " with details: " + req.body.description);
})


.delete((req,res,next) => {
    res.end("Deleting dish: "+ req.params.dishId);
});


module.exports = dishRouter;