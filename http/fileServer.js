const path = require('path')
const http = require('http')
const fs = require('fs')
const url = require('url')

const rootPath = path.resolve(process.argv[2] || '.')

const server = http.createServer(function(request, response) {
    let responseCode = 200
    let requestUrl = request.url
    let parseUrl = url.parse(requestUrl)
    let pathName = parseUrl.pathname
    console.log('request parse url: ', parseUrl)
    if(pathName.startsWith('/download')) {
        let queryString = parseUrl.query
    }
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end('<h1>Hello World!</h1>')
})

function start(port) {
    server.listen(port)
    console.log('server is start at port :', port)
}

module.exports = {
    start
}