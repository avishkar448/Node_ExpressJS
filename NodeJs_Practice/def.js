const express=require('express').Router()
const route=require('express').Router()
const userModule=require('./abc')

//register
route.post('/register',async(req,res)=>{ 
    const newUser=new userModule({ 
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        salary:req.body.salary
    })

    try{ 
        const savedata=await newUser.save()
        res.send(savedata)
    }
    catch(err){ 
        console.log(err)
    }
})

//show data

route.get('/show',async(req,res)=>{ 
    try{ 
        const showdata=await userModule.find()
        res.send(showdata)
    }
    catch(err){ 
        console.log(err)
    } 
})

//delete

route.post('/del',async(req,res)=>{ 
    var query={ "_id": "65feeebafbd66a330ad1afa1"}
    try{ 
        const showdata=await userModule.deleteOne(query,req.body)
        res.send('data deleted')
    }
    catch(err){ 
        console.log(err)
    } 
})

module.exports=route;