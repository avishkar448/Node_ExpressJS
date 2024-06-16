// var express=require('express')
// var app=express(); //store logic in app

// app.get('/',(req,res)=>{ 
//     res.send('This is get method')
// })

// app.listen(4000)

const express=require('express')
const app=express()

app.post('/',(req,res)=>{ 
    res.send('This is post method')
})

app.listen(4000)