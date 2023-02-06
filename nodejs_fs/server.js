const http = require('http')
const port = 3000
const h_name = '127.0.0.1'
const readHtml = require('./read_html')

const nodejs_s = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    const hfile = readHtml('./mainpage.html')
    res.end(hfile)
})

nodejs_s.listen(port, h_name, () => {
    console.log('My nodejs-server is runnig!!!')
})