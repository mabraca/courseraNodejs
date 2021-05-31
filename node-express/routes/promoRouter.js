const express = require('express');
const bodyParser = require('body-parser');
const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route("/")

.all((req,res,next) => {
    res.status = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the promos for you!');
})
.post((req,res,next) => {
    res.end('Will add the promo: '+ req.body.name + ' with details ' + req.body.description);
})
.put((req,res,next) => {
    res.status = 403;
    res.end("Put method it's not supported on /promotions");
})
.delete((req,res,next) => {
    res.end("Deleting all the promotions");
});


//////////////////// Details ////////////////////
promoRouter.route("/:promoId")

.get((req,res,next) => {
    res.end('Will send details of the promo '+ req.params.promoId + " to you!");
})

.post((req,res,next) => {
    res.status = 403;
    res.end("Post method it's not supported on /promotions/" + req.params.promoId + " \n ");
})

.put((req,res,next) => {
    res.write("Updating the promo: "+ req.params.promoId);
    res.end("Will update the promo: " + req.body.name + " with details: " + req.body.description);
})


.delete((req,res,next) => {
    res.end("Deleting promo: "+ req.params.promoId);
});


module.exports = promoRouter;