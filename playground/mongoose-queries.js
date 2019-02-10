const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')

const id = '5c5ff24e8529d81723d73e171'

if (!ObjectID.isValid(id)) {
    console.log('Is not valid')
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// })

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found')
    }
    console.log('Todo by id', todo)
}).catch((e) => console.log(e))