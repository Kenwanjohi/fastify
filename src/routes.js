const { v4: uuidv4 } = require('uuid');
const { allTodos, addTodo } = require('./schemas')
async function routes(fastify, options) {
    const client = fastify.db.client
    fastify.get('/', {schema: allTodos}, async function (request, reply) {
        try {
            const {rows} = await client.query('SELECT * FROM todos')
            console.log(rows)
            return rows
        } catch(err) {
            throw new Error(err)
        }
    })

    fastify.post('/', {schema: addTodo}, async function(request, reply) {
        const {task, category, important, myDay, dueDate} = request.body
        const id = uuidv4()
        const done = false
        createdAt = new Date().toISOString()
        const query = {
            text: `INSERT INTO todos (id, task, "createdAt", category, important, "dueDate", done, "myDay")
                    VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
            values: [id, task, createdAt, category, important, dueDate, done, myDay],
            }
        try {
            const {rows} = await client.query(query)
            console.log(rows[0])
            reply.status(201).send({created: 'true'})
        } catch (err) {
            console.error(err)
            return
        }
        
    })
}
module.exports= routes