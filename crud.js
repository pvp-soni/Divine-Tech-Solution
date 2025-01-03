const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 4000;

// MongoDB Atlas URI
const uri = "mongodb+srv://aayushhirpara60:Aayush25@training.njovn.mongodb.net/Training/DivineTechSolutions";
const client = new MongoClient(uri);

// Middleware
app.use(express.json()); // Correct JSON middleware

// Reusable database connection
let db;

async function connectDB() {
  if (!db) {
    try {
      await client.connect();
      console.log("Successfully connected to MongoDB!");
      db = client.db("DivineTechSolutions");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw error;
    }
  }
  return db;
}

// Utility function to validate ObjectId
function isValidObjectId(id) {
  return ObjectId.isValid(id);
}

// Routes
// 1. READ: Fetch all documents from a specific collection
app.get('/api/:collectionName', async (req, res) => {
  try {
    const db = await connectDB();
    const { collectionName } = req.params;
    const collection = db.collection(collectionName);
    const data = await collection.find({}).toArray();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching documents:", error.message);
    res.status(500).send("Unable to fetch documents");
  }
});

// 2. CREATE: Add a new document to a specific collection
app.post('/api/:collectionName', async (req, res) => {
  try {
    const db = await connectDB();
    const { collectionName } = req.params;
    const collection = db.collection(collectionName);
    const newDocument = req.body;

    const result = await collection.insertOne(newDocument);
    res.status(201).json({ message: "Document added successfully", id: result.insertedId });
  } catch (error) {
    console.error("Error adding document:", error.message);
    res.status(500).send("Unable to add document");
  }
});

// 3. UPDATE: Modify an existing document using its ID
app.put('/api/:collectionName/:id', async (req, res) => {
  try {
    const db = await connectDB();
    const { collectionName, id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).send("Invalid document ID");
    }

    const collection = db.collection(collectionName);
    const updatedData = req.body;

    const result = await collection.updateOne(
      { _id: new ObjectId(id) }, // Find document by ID
      { $set: updatedData } // Update fields
    );

    if (result.matchedCount === 0) {
      res.status(404).send("Document not found");
    } else {
      res.status(200).json({ message: "Document updated successfully" });
    }
  } catch (error) {
    console.error("Error updating document:", error.message);
    res.status(500).send("Unable to update document");
  }
});

// 4. DELETE: Remove a document by ID
app.delete('/api/:collectionName/:id', async (req, res) => {
  try {
    const db = await connectDB();
    const { collectionName, id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).send("Invalid document ID");
    }

    const collection = db.collection(collectionName);
    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      res.status(404).send("Document not found");
    } else {
      res.status(200).json({ message: "Document deleted successfully" });
    }
  } catch (error) {
    console.error("Error deleting document:", error.message);
    res.status(500).send("Unable to delete document");
  }
});

// Start the server after DB connection is established
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start server:", error.message);
  });
