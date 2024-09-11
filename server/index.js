const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

const uri = "mongodb://admin:<admin>@<admin>/?ssl=true&replicaSet=atlas-13bqvc-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
let db;

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;
  db = client.db('test');
  console.log('MongoDB connected');
});

// POST /signup - Create a new user
app.post('/signup', async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;

  try {
    const userExists = await db.collection('users').findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const newUser = { firstName, lastName, username, email, password };
    await db.collection('users').insertOne(newUser);
    res.status(201).send('User created successfully');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /chat - Get all chat messages
app.get('/chat', async (req, res) => {
  try {
    const messages = await db.collection('messages').find().toArray();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /chat - Post a new chat message
app.post('/chat', async (req, res) => {
  const { sender, content } = req.body;

  if (!sender || !content) {
    return res.status(400).json({ error: 'Sender and content are required' });
  }

  try {
    const newMessage = { sender, content, timestamp: new Date() };
    await db.collection('messages').insertOne(newMessage);
    res.status(201).json(newMessage); // Return the new message with its ID
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
