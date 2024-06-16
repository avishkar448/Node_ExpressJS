const express=require('express').Router()
const route=require('express').Router()
const userModule=require('./module')

//registers
route.post('/register',async(req,res)=>{ 
    const newUser=new userModule({ 
        name:req.body.name,
        email:req.body.email,
        mobile:req.body.mobile
    })
    try{ 
        const saveData=await newUser.save()
        res.send(saveData)
    } 
    catch(error){ 
        console.log(error)
    }
})

//show data
route.get('/showdata',async(req,res)=>{ 
    try{ 
        const showdata=await userModule.find();
        res.send(showdata)
    }
    catch(error){ 
        console.log(error)
    }
})

//update
route.post('/update',async(req,res)=>{ 
    let _id=req.body._id
    try{ 
        const update=await userModule.findByIdAndUpdate(_id,req.body);
        res.send("Data updated")
    }
    catch(error){ 
        console.log(error)
    }
})

module.exports=route;

