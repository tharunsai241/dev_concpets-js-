//console.log('sdf')
const express=require('express')
const app=express()

app.use(logger)

app.get('/',(req,res)=>{
    console.log('home page')
    res.send('Home page')
})

// app.get('/users',auth,(req,res)=>{
//     console.log('users page')
//     console.log(`users is admin=${req.admin}`)
//     res.send('Users page')
    
// })

app.get('/users',(req,res)=>{
    console.log('users page')
   // console.log(`users is admin=${req.admin}`)
    res.send('Users page')
    
})



function logger(req,res,next){
    console.log('before')
    next()
    console.log('after')
    
}

function auth(req,res,next){
    if(req.query.admin==='true'){
        req.admin=true
        next()
    }else{
        res.send('No auth')
    }
}

app.listen(3000)