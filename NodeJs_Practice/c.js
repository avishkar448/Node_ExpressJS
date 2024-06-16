const express=require('express').Router()
const route=require('express').Router()
const userModule=require('./b')
const bcrypt=require('bcrypt')

const {registerValidation}=require('./d')
//register
route.post('/register',async(req,res)=>{ 

    const {error}=registerValidation(req.body)
    const pExist=await userModule.findOne({ 
        phone:req.body.phone
    })
    if(pExist) return res.status(404).send("Phone no already exist")

    const emailExist=await userModule.findOne({ 
        email:req.body.email
    })
    if(emailExist) return res.status(404).send("Email already exist")
    
    const salt=await bcrypt.genSalt(10)
    const hashpasswd=await bcrypt.hash(req.body.password,salt)

    const newUser=new userModule({ 
        name:req.body.name,
        address:req.body.address,
        phone:req.body.phone,
        fees:req.body.fees,
        email:req.body.email,
        password:hashpasswd
    })

    try{ 
        const savedata=await newUser.save()
        res.send(savedata)
    }
    catch(err){ 
        console.log(err)
    }
})



module.exports=route;