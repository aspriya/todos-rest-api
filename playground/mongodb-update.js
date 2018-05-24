const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'toDoApp';

MongoClient.connect(url, (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db(dbName);

  // db.collection('todos').findOneAndUpdate({
  //   _id: new ObjectID('5b04e9f7ee905f7608368777')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // }).catch((err) => {
  //   console.log(err);
  // });

  db.collection('Users').findOneAndUpdate({
    name: "Ashan"
  }, {
    $set: {
      name: "Ashan Priyadarshana"
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  }).catch((err) => {
    console.log(err);
  })


  //close the connection with server
  client.close();
})
