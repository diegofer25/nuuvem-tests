const fs = require('fs')
const http = require('http')   
const url = require('url')

const server = (req, res) => {

    var action = url.parse(req.url, true).pathname
    const notFound = (res) => {
        res.writeHead(404)
        res.end('Resource Not Found')
    }

    if (!action.includes('.')) {
        
        if (action == '/') action = '/index'
        
        try {
            var html = fs.readFileSync('./public' + action + '.html', 'utf8')
            res.writeHead(200, {'Content-Type': 'text/html' })
            res.end(html)
        } catch (e) {
            notFound(res)
        }
        

    } else {
        const type = action.split('.')[1]
        const contentType = {
            'js': 'text/javascript',
            'css': 'text/css',
            'png': 'image/gif',
            'ico': 'image/gif',
            'html': 'text/html'
        }[type]
        
        if (contentType) {
            try {

                var file = fs.readFileSync('./public' + action)
                res.writeHead(200, {'Content-Type': contentType })
                res.end(file, contentType == 'image/gif' ? 'binary' : undefined)

            } catch (e) {
                notFound(res)
            }

        }
        notFound(res)
    }
}

http.createServer(server).listen(8080, () => {
    console.log('Server is Online')
})
