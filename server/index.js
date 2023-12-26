const express = require('express');
const cors = require('cors');

// Adjust the path to correctly reference the db.js file
const { connectToDatabase, getClient } = require('./db');

const app = express();
const port = 8080;

app.use(cors());
// app.use(json());

const databaseName = 'dashboard-backend';
const collectionName = 'graph-data';

// Define your routes and APIs here

app.get('/api/data', async (req, res) => {
    try {
      const database = getClient().db(databaseName);
      const collection = database.collection(collectionName);
      const data = await collection.find().toArray();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await connectToDatabase();
});
