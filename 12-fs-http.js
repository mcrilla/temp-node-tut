const http = require('http');

const server = http.createServer((req,res)=> {
    if(req.url === '/'){
        res.end('basic server home page')
    }
    else if(req.url === '/about'){
        res.end('basic server about page')
    } 
    else {
        // res.write('lost')   <- cannot have this if you are adding things to res.end.  res.write seems to superceed res.end in that case

        res.end(`
         <h1>oops</h1>
         <a href="/">Back Home</a>
         `)
    }
})

server.listen(5000)