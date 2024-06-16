const route=require('express').Router()
const verify=require('./verifytoken')

route.get('/',verify,(req,res)=>{ 
    res.json({ 
        post:{ 
            title:"JWT token",
            description:"This is our first token"
        }
    })
})

module.exports=route;
///