const { fetchAllTasks } = require('./schemas')
async function routes(fastify, options) {
    
    const client = fastify.db.client

    fastify.get('/', {schema: fetchAllTasks}, async function (request, reply) {
        try {
            const {rows} = await client.query('select * from tasks')
            console.log(rows)
            reply.send(rows)
        } catch(err) {
            console.error(err)
        }
    })
}
module.exports= routes