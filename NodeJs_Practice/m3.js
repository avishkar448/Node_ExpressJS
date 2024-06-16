const express=require('express').Router()
const route=require('express').Router()
const joi=require('joi')
const userModule=require('./m2')
const bcrypt=require('bcrypt')

const registerValidation=(data)=>{ 
    const Schema=joi.object({ 
        name:joi.string().min(5).max(10).required(),
        email:joi.string().email().required(),
        phone:joi.number().required(),
        password:joi.string().required()
    })

    return Schema.validate(data)
}

const loginValidation=(data)=>{ 
    const Schema=joi.object({ 
        email:joi.string().email().required(),
        password:joi.string().required()
    })
}

route.post('/reg',async(req,res)=>{
    const {error}=registerValidation(req.body)
    if(error) return res.status(404).send(error)
    
    const salt=await bcrypt.genSalt(10)
    const hashpass=await bcrypt.hash(req.body.password,salt)

    const newUser=new userModule({ 
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
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
    const error=loginValidation(req.body)
    if(error) return res.status(404).send(error)

    const emailExist=await userModule.findOne({ 
        email:req.body.email
    })
    if(!emailExist) return res.status(404).send("Invalid Email")

    const passExist=await bcrypt.compare(req.body.password,emailExist.password)

    if(!passExist) return res.status(404).send("Invalid password")

    res.send("login sucessful")
})

module.exports=route