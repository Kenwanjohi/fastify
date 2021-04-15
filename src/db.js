const fastifyPlugin = require('fastify-plugin')
const { Client } = require('pg')
require('dotenv').config()

const client = new Client({
    user: 'postgres',
    password:process.env.PASSWORD,
    host: 'localhost',
    port: 5432,
    database: process.env.DATABASE
})
client.connect()
async function dbconnector(fastify, options) {
    fastify.decorate('db', function (text, params) {
        return client
    })
}

module.exports= fastifyPlugin(dbconnector)