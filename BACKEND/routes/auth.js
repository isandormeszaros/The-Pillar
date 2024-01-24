var express = require("express");
var router = express.Router();
var DB = require("../db/dboperations");
var jwt = require("jsonwebtoken");
const config = require("../db/config");
const authJwt = require('../middleware/authjwt');
 
// User
router.post('/login', function(req,res,next){
    console.log(req.body.email, req.body.password)
    DB.selectUsers(req.body.email,req.body.password)
    .then(data=> data[0])
    .then(data => {
        console.log(data)
        const packet = { "email": data.email, "role": data.role };
        console.log(packet, config.secret)
        const token = jwt.sign(packet, config.secret, {expiresIn: "1800s"}); //30 perc
        
        res.status(200).json({
            data:data,
            token: token
        })
    } )
    .catch(error => res.status(404).send(error))
})
 
router.get('/test', authJwt.verifyToken, //pl: megrendelés
(req, res) => {
    res.send(req.userParams);
});

router.get('/testAdmin', authJwt.verifyAdmin, //pl: admin funkciók
(req, res) => {
    res.send(req.userParams);
});

module.exports = router;