const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb')
    }
    console.log('connected to mongodb')
    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5c5ee137e5af7c0eb6a3e975')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    })

    // client.close();
})