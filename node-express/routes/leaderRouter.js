const express = require('express');
const bodyParser = require('body-parser');
const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route("/")

.all((req,res,next) => {
    res.status = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the leaders for you!');
})
.post((req,res,next) => {
    res.end('Will add the leader: '+ req.body.name + ' with details ' + req.body.description);
})
.put((req,res,next) => {
    res.status = 403;
    res.end("Put method it's not supported on /leaders");
})
.delete((req,res,next) => {
    res.end("Deleting all the leaders");
});


//////////////////// Details ////////////////////

leaderRouter.route("/:leaderId")

.get((req,res,next) => {
    res.end('Will send details of the leader '+ req.params.leaderId + " to you!");
})

.post((req,res,next) => {
    res.status = 403;
    res.end("Post method it's not supported on /leaders/" + req.params.leaderId + " \n ");
})

.put((req,res,next) => {
    res.write("Updating the leader: "+ req.params.leaderId);
    res.end("Will update the leader: " + req.body.name + " with details: " + req.body.description);
})


.delete((req,res,next) => {
    res.end("Deleting leader: "+ req.params.leaderId);
});


module.exports = leaderRouter;