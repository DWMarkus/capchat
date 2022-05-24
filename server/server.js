// require framework
const fastify = require('fastify')({ logger: true })

// delcare route
fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
});

// run server
const start = async() => {
    try {
        await fastify.listen(3306)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()