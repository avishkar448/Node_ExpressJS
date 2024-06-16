var express=require('express')
var cookieParse=require('cookie-parser')

var app=express()
app.use(cookieParse())

app.get('/',(req,res)=>{ 
    res.send('Welcome to express app')
})

let x={ 
    name:"Avishkar",
    phone:"9730328530"
}

//Route for adding cookie
app.get('/app',(req,res)=>{ 
    res.cookie('data',x)
    res.send('user data added to cookie')
})

//Iterate user datafrom cookie
app.get('/getuser',(req,res)=>{ 
    //It shows all the cookies
    res.send(req.cookies)
})

//logout
app.get('/logout',(req,res)=>{ 
    res.clearCookie('data')
    res.send('user logout successfully')
})

app.listen(4000)