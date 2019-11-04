const http = require('http')
const config = require('./config')
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const promisify = require('util').promisify
const stat = promisify(fs.stat)
const readdir = promisify(fs.readdir)

let server = http.createServer((req,res)=>{
    let filePath = path.join(config.root,req.url)
    async function readFile(req,res,filePath) {
        try{
            const stats = await stat(filePath)
            if(stats.isFile()){
                res.statusCode = 200
                res.setHeader('Content-Type','text/javascript;charset=UTF-8')
                fs.createReadStream(filePath).pipe(res)
            }else if(stats.isDirectory()){
                const file = await readdir(filePath)
                res.statusCode = 200
                res.setHeader('Content-Type','text/html;charset=UTF-8')
                let arr = file.map((item)=>{
                    return `<a target="_self" href=http://127.0.0.1:8883${req.url!=='/'?req.url+'\/':'\/'}${item}>${item}</a>` 
                })
                res.end(arr.join('<br>'))
            }
        }catch(err){
            res.statusCode = 404
            res.setHeader('Content-Type','text/javascript;charset=UTF-8')
            res.end('没有该文件')
            return
        }
    }

    // if(req.url === '/'){
    //     res.statusCode = 200
    //     res.setHeader('Content-Type','text/html;charset=UTF-8')
    //     let url = path.join(config.root,'../index.html')
    //     fs.createReadStream(url).pipe(res)
    // }else{
    //     readFile(req,res,filePath)
    // }
    readFile(req,res,filePath)
})

server.listen(config.port,config.hostname,()=>{
    var add = `http://${config.hostname}:${config.port}`
    console.info(`${chalk.green(add)}`)
})