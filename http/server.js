const http = require('http')
const streamIO = require('../fs/streamIO')

const server = http.createServer(function(req, resp) {
    console.log('request host:', req.headers.host);
    console.log('request url:', req.url);
    try {
        if (req.url === "/cpfile") {
            streamIO.fsPipe(
                "c/Users/SoberZ/myGitRepository/study_node/resoures/test.txt",
                "c/Users/SoberZ/myGitRepository/study_node/resoures/cp.txt",
                "otherData",
                res => {
                    console.log('111111', res);
                    if (res === -1) {
                        resp.writeHead(200, {
                            "Content-Type": "text/html"
                        })
                        resp.end("<h1>pipe error</h1>")
                    } else {
                        resp.writeHead(200, {
                            "Content-Type": "text/html"
                        })
                        resp.end("<h1>pipe success</h1>")
                    }
                }
            )
        }
    } catch (err) {
        resp.writeHead(500, { "Content-Type": "text/html" })
        resp.end("<h1>500 error</h1>")
    }
})

const start = port => {
    server.listen(port)
    console.log('server is start on port: ', port)
}

module.exports = {
    start
}