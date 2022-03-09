// CRUD -- CREATE, READ, UPDATE AND DELETE

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) return console.log('Unable to connect to database');

    const db = client.db(databaseName);

    // db.collection('users')
    //   .deleteMany({
    //     age: 29,
    //   })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));

    db.collection('tasks')
      .deleteOne({
        description: 'Wrestlung',
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
);
