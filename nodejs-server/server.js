const http = require('http')
const port = 3000
const h_name = '127.0.0.1'

const nodejs_s = http.createServer((req, res) => {
    console.log('request method: ' + req.method)
    res.statusCode = 200
    if (res.statusCode === 200) {
        console.log(res.statusCode, "OK")
    }
    res.setHeader('Content-Type', 'text/plain')
    res.end("hi welcome to mrgeek's website")
})

nodejs_s.listen(port, h_name, () => {
    console.log('nodejs-server is runnig!')
})