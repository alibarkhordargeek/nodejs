const http = require('http')
const port = 3000
const h_name = '127.0.0.1'
const read_file = require('./read_file')
const url = require('url')

const nodejs_s = http.createServer((req, res) => {
    const p_url = url.parse(req.url)
    console.log(p_url)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    let html;
    if (p_url.pathname === '/about') {
        html = read_file('./about.html')
    } else if (p_url.pathname === '/contact') {
        html = read_file('./contact.html')
    } else {
        html = read_file('./main.html')
    }
    res.end(html)
})

nodejs_s.listen(port, h_name, () => {
    console.log('My nodejs-server is runnig...')
})