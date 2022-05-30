const path = require("path")
const f = require('fastify')({logger: false})

f.register(require('fastify-static'), {
    root: path.join(__dirname,'public'),
    prefix:'/public/',
})

// In this example, when you get localhost:3000
f.get('/', (request, reply) => {
    reply.header('Content-Type','application/json')
    reply.send({hello: new Date()})
})
f.get('/index', (request, reply) => {
    reply.sendFile('index.html')
})


const start = async () => {
    try {
        await f.listen(3000)
    } catch (err) {
        f.log.error(err)
        process.exit(1)
    }
}
start().then(r => r)