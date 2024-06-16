var express=require('express')
var cookieParse=require('cookie-parser')

var app=express();
app.use(cookieParse())

app.get('/',function(req,res){ 
    res.send("Welcome to express app")
});

let users={ 
   name:"Avishkar",
   age:"21" 
}

app.get('/set',(req,res)=>{ 
    res.cookie("userdata",users)
    res.send('user data added to cookie')
});

app.get('/getUser',(req,res)=>{ 
    res.send(req.cookie)
    res.send('bbb.................!')
});

app.get('/logout',(req,res)=>{ 
    res.clearCookie("userData")
    res.send('user logout succesfully!!')
});

app.listen(4000)

