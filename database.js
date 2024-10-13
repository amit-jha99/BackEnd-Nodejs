const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "Add your url inside these quotes";
  
const client = new MongoClient(url);

// Database Name
const dbName = "Testing";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  //inserting data
  const data = {
    firstname: "Kunal",
    lastname: "Jha",
    age: "24",
    city: "Mumbai",
  };
  // const insertResult = await collection.insertMany([data]);
  // console.log("Inserted documents =>", insertResult);

  // //update the document
  // const updateResult = await collection.updateOne(data, { $set: { age: 23 } });
  // console.log("Updated documents =>", updateResult);
  // //reading data
  // const findResult = await collection.find({}).toArray();
  // console.log("Found documents =>", findResult);

  // const countResult = await collection.countDocuments({});
  // console.log("Count of document in the user collection =>",countResult);

  const result = await collection.find({firstname: "Amit"}).toArray();
  console.log("result =>",result);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

// Go to mongodb website
// Create a free M0 cluster
//Create a user
//Get the connection string
// In a cluster you can create multiple seperate databases.
// Collection means table name
//In collection you can insert documents in it.
