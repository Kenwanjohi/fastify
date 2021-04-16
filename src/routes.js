async function routes(fastify, options) {
    
    const client = fastify.db.client
    fastify.get('/', async function (request, reply) {
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