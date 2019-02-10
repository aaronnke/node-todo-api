const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb')
    }
    console.log('connected to mongodb')
    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text: 'Some todo',
    //     completed: false,
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Fail add todo:', err)
    //     }

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2))
    // })

    client.close();
})