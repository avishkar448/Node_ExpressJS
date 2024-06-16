const express=require('express').Router()
const route=require('express').Router()
const joi=require('joi')
const bcrypt=require('bcrypt')
const userModule=require('./n2')
const jwt=require('jsonwebtoken')

const registerValidation=(data)=>{ 
    const Schema=joi.object({ 
        email:joi.string().email().required(),
        mobile:joi.number().integer().min(1000000000).max(9999999999),
        password:joi.string().min(8).max(15).required()
    })

    Schema.validate(data)
}

const loginValidation=(data)=>{ 
    const Schema=joi.object({ 
        email:joi.string().email().required(),
        password:joi.string().min(8).max(15).required()
    })
    Schema.validate(data)
}

route.post('/register',async(req,res)=>{ 
    const error=registerValidation(req.body)
    if(error) return res.status(404).send(error)

    const emailExist=await userModule.findOne({ 
        email:req.body.email
    })

    if(emailExist) return res.status(404).send("Email already exist")

    const salt=await bcrypt.genSalt(10)
    const hashpassword=await bcrypt.hash(req.body.password,salt)

    const newuser=new userModule({ 
        email:req.body.email,
        mobile:req.body.mobile,
        password:hashpassword
    })

    try{ 
        const saveData=await newuser.save()
        res.send(saveData)
    }
    catch(error){ 
        console.log(error)
    }
})

route.post('/login',async(req,res)=>{ 
    const error=loginValidation(req.body)
    if(error) return res.status(404).send()

    const userExist=await userModule.findOne({ 
        email:req.body.email
    })

    if(!userExist) return res.status(404).send("Invalid Email")

    const ispass=await bcrypt.compare(req.body.password,userExist.password)

    if(!ispass) return res.status(404).send("Invalid password")

    const token=jwt.sign({id:userExist.id},process.env.token_secret)

    res.header('auth-token',token).send(token)

    return res.send("Login succesfully")
})

module.exports=route