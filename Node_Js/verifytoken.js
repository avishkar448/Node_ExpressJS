const jwt=require('jsonwebtoken')
module.exports=(req,res,next)=>{ 
    const token=req.header('auth-token');

    if(!token) return res.status(404).send("Access Denied");

    try{ 
        const verify=jwt.verify(token,process.env.tokent_secret)
        res.userExist=jwt.verify

        next();
    }
    catch(error){
        res.status(404).send("Invalid token")
    }
}