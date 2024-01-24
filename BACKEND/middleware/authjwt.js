const jwt = require('jsonwebtoken');
const config = require('../db/authconfig');

verifyAdmin = (req, res, next) =>{

    let token = req.headers['x-access-token'];

    if(!token){
        return res.status(401).json({ message: "Nincs token megadva" });
    }
    else{
        jwt.verify(token, config.secret, (err, decoded) =>{
            if(err){    
                return res.status(401).json({ message: "Érvénytelen token" });

            }
            req.userParams = decoded;

        req.userParams["expDate"] = new Date(1000 * req.userParams.exp).toLocaleString();

            //   {
            //     "email": "email@example.com",
            //     "role": 9,
            //     "iat": 1704881663,
            //     "exp": 1704883463
            //   }
        })
        if(req.userParams.role == "9")
        next();
        else{
            return res.status(403).json({ message: "Nincs hozzá jogosultság" });
        }
    }
}

//---------------------------------------------------------------------------------------------------------------------------//

verifyToken = (req, res, next) => {
    let token = req.headers['x-access-token'];

    if(!token){
        return res.status(401).json({ message: "Nincs token megadva" });
    }
    else{
        jwt.verify(token, config.secret, (err, decoded) =>{
            if(err){    
                return res.status(401).json({ message: "Érvénytelen token" });

            }
            req.userParams = decoded;
            console.log("Kiadva: " + new Date(1000 * req.userParams.iat).toLocaleString());
            console.log("Érvényes: " + new Date(1000 * req.userParams.exp).toLocaleString());

        req.userParams["expDate"] = new Date(1000 * req.userParams.exp).toLocaleString();

            //   {
            //     "email": "email@example.com",
            //     "role": 9,
            //     "iat": 1704881663,
            //     "exp": 1704883463
            //   }
        })
        next();
    }
}

const authJwt = {
    verifyToken : verifyToken,
    verifyAdmin : verifyAdmin 
}

module.exports = authJwt;