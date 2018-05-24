const {MongoClient, ObjectID} = require('mongodb');

var person = {
  name: "ashan",
  age: 26,
  address: "Ku/Bopitiya, Bopitiya - 60155",
}

const url = 'mongodb://localhost:27017';
const dbName = "toDoApp";

MongoClient.connect(url, (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db(dbName); //create or select the database

  db.collection('todos').insertOne({
    text: "Something to do",
    completed: false
  }, (err, result) => {
    if(err){
      return console.log('Unable to create the document inside of todos collection');
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  });
  //
  // db.collection('Users').insertOne({
  //   name: "Ashan",
  //   age: 26,
  //   location: "Balawala Rd, ku/bopitiya, Bopitiya, 60155"
  // }, (err, result) => {
  //   if(err){
  //     return console.log("Coudln't add to Users colleciton");
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  client.close();
});
