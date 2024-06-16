var express=require('express')
var app=express()

app.get('/zzz',(req,res)=>{ 
    res.send('This is get method')
})

app.get('/avi',(req,res)=>{ 
    res.send('My name is Avishkar Gawali')
})

app.post('/xyz',(req,res)=>{ 
    res.send('This is post method')
})

app.listen(4000)