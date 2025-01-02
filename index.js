// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const CourseCategory = require('./model/users'); // Use singular and descriptive name for the model

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose
//   .connect(
//     "mongodb+srv://aayushhirpara60:<Aayush25>@training.njovn.mongodb.net/?retryWrites=true&w=majority&appName=Training/DivineTechSolutions",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(() => console.log("MongoDB connected successfully"))
//   .catch((err) => console.log("MongoDB connection error:", err));

// // Route to fetch data
// app.get('/getdata', (req, res) => {
//   CourseCategory.find()
//     .then((categories) => res.json(categories))
//     .catch((err) => {
//       console.error(err); // Log the error for debugging
//       res.status(500).json({ message: "Error fetching data", error: err });
//     });
// });

// // Start server
// app.listen(3001, () => {
//   console.log("Server is running http://localhost:3001");
// });

// 

// const express = require('express');
// const { MongoClient } = require('mongodb');

// // MongoDB Atlas URI
// const uri = "mongodb+srv://aayushhirpara60:Aayush25@training.njovn.mongodb.net/=Training/DivineTechSolutions"
// // Create a new MongoClient
// const client = new MongoClient(uri);

// // Initialize Express
// const app = express();
// const port = 3000; // You can change the port if needed

// // Route to fetch and display data from MongoDB
// app.get('/DivineTechSoutions', async (req, res) => {
//   try {
//     // Connect to MongoDB
//     await client.connect();
//     console.log("Successfully connected to MongoDB!");

//     // Access the 'DivineTechSoutions' database
//     const database = client.db("DivineTechSoutions");

//     // Access the 'BackendDevelopment' collection
//     const CourseCategory = database.collection("CourseCategory");
//     const BackendDevelopment = database.collection("BackendDevelopment");
//     const DataScience_DataAnalytics= database.collection("Data Science&Data Analytics");
//     const Designing = database.collection("Designing");
//     const FrontendDevelopment = database.collection("FrontendDevelopment");
//     const FullstackDevelopment = database.collection("FullstackDevelopment");
//     const MERNStackDevelopment = database.collection("MERNStackDevelopment");
//     const MobileApplicationDevelopment = database.collection("MobileApplicationDevelopment");
//     const ShortTermCourses = database.collection("ShortTermCourses");
//     const SoftwareTesting_Automation = database.collection("SoftwareTesting&Automation");
//     const Contact = database.collection("Contact");

//     // Fetch all documents from the 'DivineTechSoutions' collection
//     const DivineTechSoutions = await collection.find({}).toArray();

//     // Send the data as a response (can be displayed as JSON)
//     res.json(BackendDevelopment);
//     res.json(CourseCategory); 
//     res.json(DataScience_DataAnalytics); 
//     res.json(Designing); 
//     res.json(FrontendDevelopment); 
//     res.json(FullstackDevelopment); 
//     res.json(MERNStackDevelopment); 
//     res.json(MobileApplicationDevelopment); 
//     res.json(ShortTermCourses);
//     res.json(SoftwareTesting_Automation)
//     res.json(Contact)   // Sends the data in JSON format

//   } catch (error) {
//     console.error("Error fetching data:", error);
//     res.status(500).send("Internal Server Error");
//   } finally {
//     // Close the connection after the response
//     await client.close();
//   }
// });

// // Start the Express server
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

const express = require('express');
const { MongoClient } = require('mongodb');

// MongoDB Atlas URI
const uri = "mongodb+srv://aayushhirpara60:Aayush25@training.njovn.mongodb.net/Training/DivineTechSolutions";
// Create a new MongoClient
const client = new MongoClient(uri);

// Initialize Express
const app = express();
const port = 3000; // Port to run the server

// Route to fetch and display data from MongoDB
app.get('/DivineTechSoutions', async (req, res) => {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Successfully connected to MongoDB!");

    // Access the 'DivineTechSoutions' database
    const database = client.db("DivineTechSolutions");

    // Access all collections
    const collections = {
      CourseCategory: await database.collection("CourseCategory").find({}).toArray(),
      BackendDevelopment: await database.collection("BackendDevelopment").find({}).toArray(),
      DataScience_DataAnalytics: await database.collection("Data Science&Data Analytics").find({}).toArray(),
      Designing: await database.collection("Designing").find({}).toArray(),
      FrontendDevelopment: await database.collection("FrontendDevelopment").find({}).toArray(),
      FullstackDevelopment: await database.collection("FullstackDevelopment").find({}).toArray(),
      MERNStackDevelopment: await database.collection("MERNStackDevelopment").find({}).toArray(),
      MobileApplicationDevelopment: await database.collection("MobileApplicationDevelopment").find({}).toArray(),
      ShortTermCourses: await database.collection("ShortTermCourses").find({}).toArray(),
      SoftwareTesting_Automation: await database.collection("SoftwareTesting&Automation").find({}).toArray(),
      Contact: await database.collection("Contact").find({}).toArray(),
    };


    // Send all data as a combined JSON response
    res.json(collections);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  } finally {
    // Close the connection after the response
    await client.close();
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
