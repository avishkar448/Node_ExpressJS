const mysql=require('mysql')

var conn=mysql.createConnection({ 
    host:"localhost",
    user:"root",
    password:"9730328530"
});

conn.connect((err)=>{ 
    if(err){ 
        console.log("error occure: ",err)
    }
    console.log("Connected to mysql!")
    conn.query("create database Rock",(err,result)=>{ 
        if(err){ 
            console.log(err)
        }
        console.log("Database is created")
    })
})