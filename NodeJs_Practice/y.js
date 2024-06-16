const express=require('express').Router()
const route=require('express').Router()
const umodule=require('./x')

const {regValidation,loginval}=require('./z')
//register
route.post('/reg',async(req,res)=>{ 
    const {error}=regValidation(req.body)
    if(error)return res.status(404).send(error)

    const emailExist=await umodule.findOne({ 
        email:req.body.email
    })
    if(emailExist) return res.status(404).send("Email already exsist")
    const newUser=new umodule({ 
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        password:req.body.password
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
 route.get('/show',async(req,res)=>{ 
    try{ 
        const show=await umodule.find()
        res.send(show)
    }
    catch(error){ 
        console.log(error)
    }
 })

//show one
route.get('/showone', async(req,res)=>{ 
    let id=req.query.id
    try{ 
        const showone=await umodule.findById(id)
        res.send(showone)
    }
    catch(error){ 
        console.log(error)
    }
})

 //update
 route.get('/update',async(req,res)=>{ 
    let _id=req.body._id
    try{ 
        const update=await umodule.findByIdAndUpdate(_id,req.body)
        res.send("data updated")
    }
    catch(error){ 
        console.log(error)
    }
 })
 
 route.post('/login',async(req,res)=>{ 
    const {error}=loginval(req.body)
    if(error) return res.status(404).send(error.details[0].message)

    const userExist=await umodule.findOne({ 
        email:req.body.email
    })
    if(!userExist) return res.status(404).send("Invalid Email")

    const passExist=await umodule.findOne({ 
        password:req.body.password
    })
    if(!passExist) return res.status(404).send("Invalid password")



    res.send("Login succesfully")
 })

module.exports=route;