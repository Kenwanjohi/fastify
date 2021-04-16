const fetchAllTasks = {
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


module.exports = {fetchAllTasks}