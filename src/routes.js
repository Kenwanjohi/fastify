const { v4: uuidv4 } = require('uuid');
const { allTodos, addTodo, updateTodo } = require('./schemas')
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
        const {name, important, dueDate} = request.body
        const id = uuidv4()
        const done = false
        createdAt = new Date().toISOString()
        const query = {
            text: `INSERT INTO todos (id, name, "createdAt", important, "dueDate", done)
                    VALUES($1, $2, $3, $4, $5, $6 ) RETURNING *`,
            values: [id, name, createdAt, important, dueDate, done],
            }
        try {
            const {rows} = await client.query(query)
            console.log(rows[0])
            reply.code(201)
            return {created: true}
        } catch (err) {
            throw new Error(err)
        }
        
    })
    fastify.patch('/:id',{schema: updateTodo}, async function (request, reply) {
        const id = request.params.id
        const {important, dueDate, done} = request.body
        const query = {
            text:  `UPDATE todos SET 
                    important = COALESCE($1, important), 
                    "dueDate" = COALESCE($2, "dueDate"), 
                    done = COALESCE($3, done) 
                    WHERE id = $4 RETURNING *`,
            values : [important, dueDate, done, id]
        }
        try {
            const {rows} = await client.query(query)
            console.log(rows[0])
            reply.code(204)
        } catch (err) {
            throw new Error(err)
        }
    } )
}
module.exports= routes