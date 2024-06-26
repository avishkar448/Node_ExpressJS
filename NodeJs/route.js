const express=require('express').Router()
const route=require('express').Router()
const userModule=require('./module')
const bcrypt=require('bcrypt')
const {registerValidation,loginValidation}=require('./validation')
const jwt=require('jsonwebtoken')

route.post('/register',async(req,res)=>{ 

    const {error}=registerValidation(req.body)
    if(error) return res.status(404).send(error)

    const emailExist=await userModule.findOne({ 
        email:req.body.email
    })

    if(emailExist) return res.status(404).send("Email already exist!")

    const salt=await bcrypt.genSalt(10)
    const hashpass=await bcrypt.hash(req.body.password,salt)

    const newUser= new userModule({ 
        name:req.body.name,
        email:req.body.email,
        mobile:req.body.mobile,
        password:hashpass
    })

    try{ 
        const saveData=await newUser.save()
        res.send(saveData)
    }
    catch(error){ 
        console.log(error)
    }
})

route.post('/login',async(req,res)=>{ 
    const {error}=loginValidation(req.body)
    if(error) return res.status(404).send(error)

    const userExist=await userModule.findOne({ 
        email:req.body.email
    })

    if(!userExist) return res.status(404).send("Invalid Email!!")
    
    const passExist=await bcrypt.compare(req.body.password,userExist.password)
    if(!passExist) return res.status(401).send("Invalid password")

    const token=jwt.sign({name:userExist.name},process.env.token_sercet)
    res.header('auth-token',token).send(token)
    
    return res.send("login succesfully!!")
    
})

module.exports=route