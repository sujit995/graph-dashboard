// import { MongoClient } from 'mongodb';
// import { readFileSync } from 'fs';

// const uri = 'mongodb+srv://sujitmishra402:admin1234@cluster0.g8d9hb2.mongodb.net/';

// const databaseName = 'dashboard-backend';
// const collectionName = 'graph-data';


// async function insertDataFromFile() {
//   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//   try {
//     await client.connect();
//     console.log('Connected to the database');

//     const database = client.db(databaseName);
//     const collection = database.collection(collectionName);

//     // Read JSON file
//     const jsonData = JSON.parse(readFileSync('./jsondata.json', 'utf-8'))

//     // Insert data into MongoDB
//     const result = await collection.insertMany(jsonData);
//     console.log(`${result.insertedCount} documents inserted.`);
//   } finally {
//     await client.close();
//     console.log('Connection closed.');
//   }
// }

// insertDataFromFile();

// module.exports = {
//   insertDataFromFile,
//   getClient: () => client,
// };


// db.js
const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://sujitmishra402:admin1234@cluster0.g8d9hb2.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

module.exports = {
  connectToDatabase,
  getClient: () => client,
};
