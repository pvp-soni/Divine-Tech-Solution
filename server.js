// const express = require('express');
// const { MongoClient, ObjectId } = require('mongodb');
// const app = express();
// const port = 3000;

// // MongoDB URI
// const uri = "mongodb+srv://aayushhirpara60:Aayush25@training.njovn.mongodb.net/Training/DivineTechSolutions";

// // Middleware
// app.use(express.json()); // Parse incoming JSON data

// // Connect to MongoDB
// let db;
// async function connectToDB() {
//   try {
//     const client = new MongoClient(uri);
//     await client.connect();
//     db = client.db("Training"); // Replace with your database name
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Database connection failed:", error);
//   }
// }
// connectToDB();

// // Root Route
// app.get('/', (req, res) => {
//   res.send('API Server is running!');
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

// // 1. **READ**: Get all documents in a collection
// app.get('/api/:collectionName', async (req, res) => {
//     try {
//       const collection = db.collection(req.params.collectionName);
//       const data = await collection.find({}).toArray();
//       res.status(200).json(data);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });
  
//   // 2. **CREATE**: Insert a new document
//   app.post('/api/:collectionName', async (req, res) => {
//     try {
//       const collection = db.collection(req.params.collectionName);
//       const result = await collection.insertOne(req.body);
//       res.status(201).json({ message: "Document created", id: result.insertedId });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });
  
//   // 3. **UPDATE**: Modify a document by ID
//   app.put('/api/:collectionName/:id', async (req, res) => {
//     try {
//       const collection = db.collection(req.params.collectionName);
//       const result = await collection.updateOne(
//         { _id: new ObjectId(req.params.id) },
//         { $set: req.body }
//       );
//       res.status(200).json({ message: "Document updated", modified: result.modifiedCount });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });
  
//   // 4. **DELETE**: Remove a document by ID
//   app.delete('/api/:collectionName/:id', async (req, res) => {
//     try {
//       const collection = db.collection(req.params.collectionName);
//       const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
//       res.status(200).json({ message: "Document deleted", deleted: result.deletedCount });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });
  
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const app = express();
const port = 5000;

// MongoDB URI
const uri = "mongodb+srv://aayushhirpara60:Aayush25@training.njovn.mongodb.net/Training/DivineTechSolutions";

// Middleware
app.use(express.json()); // Parse incoming JSON data

// Connect to MongoDB
let db;
async function connectToDB() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    db = client.db("Training"); // Ensure the database name matches the URI
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); // Exit if the database fails to connect
  }
} 

connectToDB();

// Root Route
app.get('/', (req, res) => {
  res.send('API Server is running!');
});

// READ: Get all documents from a collection
app.get('/api/:collectionName', async (req, res) => {
  try {
    const { collectionName } = req.params;
    const collections = db.collection(collectionName);
    const data = await collections.find({}).toArray();
    if (data.length === 0) {
      return res.status(404).json({ message: `No documents found in collection: ${collectionName}` });
    }
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching documents:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// CREATE: Insert a new document
app.post('/api/:collectionName', async (req, res) => {
  try {
    const { collectionsName } = req.params;
    const collection = db.collection(collectionName);
    const result = await collection.insertOne(req.body);
    res.status(201).json({ message: "Document created", id: result.insertedId });
  } catch (error) {
    console.error('Error inserting document:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// UPDATE: Modify a document by ID
app.put('/api/:collectionName/:id', async (req, res) => {
  try {
    const { collectionName, id } = req.params;
    const collections = db.collection(collectionName);
    const result = await collections.updateOne(
      { _id: new ObjectId(id) },
      { $set: req.body }
    );
    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: "Document not found or no changes made" });
    }
    res.status(200).json({ message: "Document updated", modified: result.modifiedCount });
  } catch (error) {
    console.error('Error updating document:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// DELETE: Remove a document by ID
app.delete('/api/:collectionName/:id', async (req, res) => {
  try {
    const { collectionName, id } = req.params;
    const collection = db.collection(collectionName);
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.status(200).json({ message: "Document deleted", deleted: result.deletedCount });
  } catch (error) {
    console.error('Error deleting document:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

