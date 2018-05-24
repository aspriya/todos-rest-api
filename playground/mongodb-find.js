const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'toDoApp';

MongoClient.connect(url, (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db(dbName);

  //things to do with db goes here
  // db.colleciton('todos').find({completed: false}).toArray().then((docs) => {
  //   console.log("todos");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) =>{
  //   console.log('Unable to fetch todos', err);
  // })
  //
  // db.colleciton('todos').find().count().then((count) => {
  //   console.log(`Todos couint: ${count}`);
  // }, (err) => {
  //   console.log('Unable to count the number of todos');
  // })

  db.collection('Users').find({name: "Ashan"}).toArray().then((docs) => {
    console.log("todo users");
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch data from Users');
  })

  //close the connection with server
  client.close();
})
