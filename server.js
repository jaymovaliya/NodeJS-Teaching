// Node.JS

// eventDriven, asynchronous I/O/Non Blocking I/O


// producer/emitter --> Produce an event 
// Listener --> Listening to Event



// const http = require('http');
// const url = require('url')



// const server = http.createServer((request,response)=>{
//     const parserUrl = url.parse(request.url)
//     console.log(parserUrl)
//     response.writeHead(200,{"Content-Type":"text/html"})
//     response.end("<b>Node Mon Server Started...</b>")
// })


// server.listen(4000)

// express --> Maintain server for node js
const express = require('express')
const app = express()

// parse body for requests
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const userMapping = 
    {
        121 : "Jay",
        122 : "Kamran",
        123 : "Another"
    }


// '/' endpoint of api
app.get('/',((request,response)=>{
    response.json({output: "Hello from express"})
}))

// get user from id
app.get('/user/:id',((req,res)=>{
    const id = req.params.id
    let user = __getUser(id)
    res.json({user:user})
}))

// add user 
app.post('/user/add',((req,res)=>{
    console.log(req.body)
    const {id,name} = req.body
    userMapping[id] = name
    res.json({output:"Inserted successfully"})
}))

function __getUser(id){
    return userMapping[id]
}

app.listen(4000)
