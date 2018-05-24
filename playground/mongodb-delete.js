const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'toDoApp';

MongoClient.connect(url, (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db(dbName);

  //DELETE MANY
  // db.collection('todos').deleteMany({text: 'Eat Dinner'}).then((result) => {
  //   console.log(result);
  // }).
  // catch((err) => {
  //   console.log(err);
  // });

  //DELETE ONE
  // db.collection('todos').deleteOne({text: 'Eat Dinner'}).then((result) => {
  //   console.log(result);
  // }).catch((err) =>{
  //   console.log(err);
  // })

  //FINDONEANDDELETE
  db.collection('todos').findOneAndDelete({text: 'Eat Dinner'}).then((result) => {
    console.log(result);
  }).catch((err) => {
    console.log(err);
  })


  //close the connection with server
  client.close();
})
