const fastify = require('fastify')({ logger: true })
const fastify_compress = require('fastify-compress')
const fastify_static = require('fastify-static')

const fs = require('fs')
const path = require('path')



fastify.get('/', (_request, reply) => sendHTMLFile(reply, 'index.html'))

// Return HTML file
function sendHTMLFile(reply, file) {
    reply.type('text/html').send(fs.readFileSync(`public/${file}`, {encoding: 'utf-8'}))
}

// Start the server
const start = async () => {
    try {
      await fastify.listen(3000); // localhost:XXXX
    } catch (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  };
  start();

  // Declare a named route
  fastify.get('/admin/artistes', (_request, reply) => sendHTMLFile(reply, 'artistes.html'))

  // Declare a dynamic route
fastify.get('/name/:name', async (request, reply) => {
    return { hello: request.params.name };
  });

  // Declare a post route
fastify.post('/dump', async (request, reply) => {
    return request.body;
  });