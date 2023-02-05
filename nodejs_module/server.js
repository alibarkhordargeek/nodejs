const http = require('http')
const newResponse = require('./response')
const newContent = require('./content_type')
const statusCode = require('./status_code')
const newLog = require('./new_listen_log')
const port = 3000
const h_name = '127.0.0.1'

const nodejs_s = http.createServer((req, res) => {
    console.log('request method: ' + req.method)
    console.log(newResponse())
    res.statusCode = statusCode()
    if (res.statusCode === 200) {
        console.log(res.statusCode, "OK")
    }
    res.setHeader('Content-Type', newContent())
    res.end(newResponse())
})

nodejs_s.listen(port, h_name, () => {
    console.log(newLog())
})