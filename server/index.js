// index.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const bcrypt = require('bcrypt'); // For password hashing

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Helper function to generate a random ID
const generateId = () => crypto.randomBytes(16).toString('hex');

// Sign Up Endpoint
app.post('/signup', async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;

  // Check if the username or email already exists
  const existingUser = users.find(
    (user) => user.username === username || user.email === email
  );
  if (existingUser) {
    return res.status(400).json({ error: 'Username or email already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const newUser = {
    id: generateId(),
    firstName,
    lastName,
    username,
    email,
    password: hashedPassword,
    token: null, // Will be set upon sign-in
  };
  users.push(newUser);

  res.status(201).json({ message: 'User created successfully' });
});

// Sign In Endpoint
app.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  // // Find user
  // const user = users.find((user) => user.email === email);
  // if (!user) {
  //   return res.status(400).json({ error: 'Invalid email or password' });
  // }

  // const passwordMatch = await bcrypt.compare(password, user.password);
  // if (!passwordMatch) {
  //   return res.status(400).json({ error: 'Invalid email or password' });
  // }

  // // Generate a simple token (in production, use JWT)
  // const token = generateId();

  // // Attach token to the user (in-memory)
  // user.token = token;

  // // Return the user data and token
  // res.json({
  //   message: 'Signin successful',
  //   user: {
  //     id: user.id,
  //     username: user.username,
  //     token,
  //   },
  // });

  return res.send({email: email, password: password})
});

// Middleware to verify token
const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];

  // Find user with matching token
  const user = users.find((user) => user.token === token);

  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Attach user to request object
  req.user = user;
  next();
};

// Chat Endpoints

// // Get Chat Messages
// app.get('/chat', authenticate, (req, res) => {
//   res.json(messages);
// });

// // Post a New Message
// app.post('/chat', authenticate, (req, res) => {
//   const { content } = req.body;

//   const newMessage = {
//     id: generateId(),
//     sender: req.user.username,
//     content,
//     timestamp: new Date(),
//   };
//   messages.push(newMessage);

//   res.status(201).json(newMessage);
// });

// // Groups Endpoints
// // Get All Groups
// app.get('/groups', authenticate, (req, res) => {
//   res.json(groups);
// });

// // Create a New Group
// app.post('/groups', authenticate, (req, res) => {
//   const { name, members, destination } = req.body;

//   const newGroup = {
//     id: generateId(),
//     name,
//     members,
//     destination,
//   };
//   groups.push(newGroup);

//   res.status(201).json(newGroup);
// });

app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});