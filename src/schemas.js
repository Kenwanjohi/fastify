const allTodos = {
    response: {
        200: {
            type: 'array',
            items: {
                properties: {
                    id: {type: 'string',  format: 'uuid'},                                                              
                    task: {type: 'string'},                                           
                    createdAt:{type: 'string',format: "date-time"},
                    category: {type: 'string'},                    
                    important: {type: 'boolean'},
                    dueDate: {type: 'string',format: "date-time"},
                    done: {type: 'boolean'},
                    myDay: {type: 'boolean'}
                }
            }
        }
    }
}

const addTodo = {
    body: {
        type: 'object',
        required: ['task', 'category'],
        properties: {
            task: {type: 'string', default: 'tasks'},
            category: {type: 'string'},
            dueDate: {type: 'string', format: 'date-time', nullable: true, default: null},
            important: {type: 'boolean', default: false},
            myDay: {type: 'boolean', default: false},
        }
    },
    response: {
        201: {
            type: 'object',
            properties: {
                created: {type: 'boolean'}
            }
        }
    }
}


module.exports = {allTodos, addTodo}