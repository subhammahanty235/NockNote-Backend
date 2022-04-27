const jwt = require("jsonwebtoken");




const fetchUser = (req ,res ,next)=>{
    //get the user from the jwd toekn and add id to req object
    const token = req.header('auth-token');
    if (!token){
        res.status(401).send({error : "please authenticte using a valid token"})
    }
    try {
        const data = jwt.verify(token , process.env.JWT_SECRET);
        req.user = data.user
        next();
    } catch (error) {
        res.status(401).send({error : "please authenticte using a valid token"})
    }
    
}


module.exports = fetchUser;