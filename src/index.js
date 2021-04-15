const fastify = require('fastify')({logger: true})
const route  = require('./routes')
const dbconnector = require('./db')
fastify.register(dbconnector)
fastify.register(route)
async function start()  {
    try{
        await fastify.listen(3000)
    } catch(err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()