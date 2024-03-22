// mongoConnection.js

const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'collage';
const client = new MongoClient(url);

async function dbConnect() {
    try {
        await client.connect();
        return client.db(database);
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
}

module.exports = dbConnect;
