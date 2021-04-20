const allTodos = {
    response: {
        200: {
            type: 'array',
            items: {
                type: 'object',
                required: ['id', 'name', 'createdAt', 'important', 'dueDate', 'done'],
                properties: {
                    id: {type: 'string',  format: 'uuid'},                                                              
                    name: {type: 'string'},                                           
                    createdAt:{type: 'string',format: "date-time"},                  
                    important: {type: 'boolean'},
                    dueDate: {type: 'string',format: "date-time"},
                    done: {type: 'boolean'},
                }
            }
        }
    }
}
const addTodo = {
    body: {
        type: 'object',
        required: ['name'],
        properties: {
            name: {type: 'string',},
            dueDate: {type: 'string', format: 'date-time', nullable: true, default: null},
            important: {type: 'boolean', default: false},
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
const updateTodo = {
    body: {
        type: 'object',
        properties: {
            dueDate: {type: 'string', format: 'date-time'},
            important: {type: 'boolean'},
            done: {type: 'boolean'}
        }
    },
    params: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' }
        }
      }
}
module.exports = {allTodos, addTodo, updateTodo}