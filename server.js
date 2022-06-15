// serve a self-signed cert (by the seashore)

const https = require('https')
const certs = require('https-pem')

const server = https.createServer(certs)

server.on('request', (req, res) => {
    res.end('Hello world')
})

const port = process.env.PORT || 5000
server.listen(port, () => console.log(`listening on https://127.0.0.1:${port}`))
