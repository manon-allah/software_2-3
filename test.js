const http = require('http')
const fs = require('fs')
const url = require('url')
const express = require('express')
const { error } = require('console')

const app = express();
const server = http.createServer((req , res)=>
{
    const path = url.parse(req.url).pathname;
    switch (path) {
        case "/":
                fs.readFile('./home.html' , null , (error , data)=>
                {
                    if (error) {
                        res.end("can't find this page")
                    }
                    else
                    {
                        res.end(data);
                    }
                })
            break;
            case "/user":
                fs.readFile('./user.html' , null , (error , data)=>
                {
                    if (error) {
                        res.end("can't find this page")
                    }
                    else
                    {
                        res.end(data);
                    }
                })
            break;
            case "/info":
                fs.readFile('./info.html' , null , (error , data)=>
                {
                    if (error) {
                        res.end("can't find this page")
                    }
                    else
                    {
                        res.end(data);
                    }
                })
            break;
    
        default:
            res.end("can't find this page")
            break;
    }
})

server.listen(3000 , ()=>
{
    console.log("Running")
})