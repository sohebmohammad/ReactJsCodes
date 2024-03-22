const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 4002;

app.use(cors());

// Connection URI for MongoDB (replace 'your_database_url' with your actual MongoDB database URL)
const uri = 'mongodb://localhost:27017/collage';

// Connect to MongoDB using Mongoose
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Event listener for successful connection
db.on('connected', () => {
  console.log('Connected to MongoDB');
  
  // Start the Express server only after the MongoDB connection is established
  app.listen(PORT, () => {
    console.log(`Server Started: http://127.0.0.1:${PORT}`);
  });
});

// Event listener for connection errors
db.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Event listener for disconnection
db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

// Define a route to fetch data from the 'LoginData' collection
app.get('/', async (req, res) => {
  try {
    // Fetch all documents from the 'LoginData' collection
    const documents = await db.collection('loginData').find({}).toArray();

    console.log('Number of documents:', documents.length); // Log the number of documents
    
    if (documents.length > 0) {
      res.json(documents);
    } else {
      res.status(404).send('No documents found in the LoginData collection');
    }
  } catch (error) {
    console.error('Error fetching data from the database:', error);
    res.status(500).send('Error fetching data from the database');
  }
});