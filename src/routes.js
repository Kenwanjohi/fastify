async function routes(fastify, options) {
    const client = fastify.db()
    fastify.get('/', async (request, reply) => {
        try {
            const {rows} = await client.query('select * from tasks')
            console.log(rows)
            reply.send(rows)
        } catch(err) {
            console.log(err)
        }
    })
}
module.exports= routes