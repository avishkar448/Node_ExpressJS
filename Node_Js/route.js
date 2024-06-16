const express=require('express').Router()
const route=require('express').Router()
const bcrypt=require('bcrypt')

const jwt=require('jsonwebtoken')

const userModule=require('./module')
const {registerValidation, loginValidation}=require('./validation')
//register
route.post("/register",async(req,res)=>{
    const {error}=registerValidation(req.body)
   // if(error)return res.status(404).send(error) 
   const emailExist=await userModule.findOne({ 
    email:req.body.email
   })
    if(emailExist)return res.status(404).send("Email is already exist")

    const salt= await bcrypt.genSalt(10)
    const hashpasswd=await bcrypt.hash(req.body.password,salt)
    const newuser=new userModule({ 
        name:req.body.name,
        email:req.body.email,
        mobile:req.body.mobile,
       // password:req.body.password,
        password:hashpasswd
    })
    try{ 
        const saveData=await newuser.save()
        res.send(saveData)
    } 
    catch(error){ 
        console.log(error)
    }
}) 

//showdata
route.get('/showdata',async(req,res)=>{ 
    try{ 
        const showdata=await userModule.find()
        res.send(showdata)
    }
    catch(error){ 
        console.log(error)
    }
})

//update
route.get('/update',async(req,res)=>{ 
    let _id=req.body._id
    try{ 
        const update=await userModule.findByIdAndUpdate(_id,req.body)
        res.send('data updated')
    }
    catch(error){ 
        console.log(error)
    }
})

//show one user 
route.get("/showone",async(req,res)=>{ 
    const id=req.query.id
    try{ 
        const showone=await userModule.findById(id)
        res.send(showone)
    }
    catch(error){ 
        console.log(error)
    }
})

//login
route.post("/login",async(req,res)=>{ 
    const{error}=loginValidation(req.body)
   // if(error)return res.status(404).send(error.details[0].message)

    const userExist =await userModule.findOne({
        email:req.body.email
    })
    if(!userExist) return res.status(404).send("Invalid email");

    const ispasswordValid=await bcrypt.compare(req.body.password,userExist.password)

    if(!ispasswordValid) return res.status(401).send("Invalid password")

    const token=jwt.sign({id:userExist.id},process.env.tokent_secret)

   res.header('auth-token',token).send(token)

    res.send("Login successful")
})

module.exports=route;
//
