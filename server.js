const express = require('express')
const port = process.env.PORT || 8383
const path = require('path')

// connect mongodb
const collection = require ('./mongodb')

// this is our app 
const app = express()


// api middelwares
app.use(express.json()) //this is to accept data in json format 

app.use(express.urlencoded({extended:false})) //decode the data and send through html form

app.use(express.static('public')) //serving the public folder as static folder

// /////////////////////////////////////
const publicPath=path.join(__dirname, '../public')
// 
app.set('view engine', 'html')
app.set("views",publicPath)

// /////////////////////////////////////


// app.get('/login',(req,res) => {
//     res.render('login')
// })

app.get('/login', (req,res) => {
    res.sendFile(__dirname + '/public/login.html')
})

app.get('/signup', (req,res) => {
    res.sendFile(__dirname + '/public/signup.html')
})


// app.post('/formPost', (req,res) => {
//     console.log(req.body) //the data we get is in the body of request

// })


app.post('/signup', async (req,res)=>{
    const data ={
        username:req.body.username,
        password:req.body.password
    }

    await collection.insertMany([data])

    res.sendFile(__dirname + '/public/home.html')

})


app.post('/login', async (req,res)=>{

    try{
        const check = await collection.findOne({username:req.body.username})

        if(check.password === req.body.password){
            res.sendFile(__dirname + '/public/home.html')
        }
        else{
            res.send('wrong password')
        }
    }
    catch{

        res.send('wrong username or password')

    }
})

// app.get('/signup',(req,res) => {
//     res.render('signup.html')
// })



// API ROUTES
// app.get('/signup', (req,res) => {

//     res.sendFile(__dirname + '/public/signup.html')
// })

// app.post('/formPost', (req,res) => {
//     console.log(req.body) //the data we get is in the body of request

// })

app.listen(port, () => console.log(`Server has started at http://localhost:${port}`))