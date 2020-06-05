const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

const usersRoute = require('./routes/api/users');
const profileRoute = require('./routes/api/profile');
const postsRoute = require('./routes/api/posts');
const authRoute = require('./routes/api/auth');

// Define Routes
app.use('/api/users', usersRoute);
app.use('/api/profile', profileRoute);
app.use('/api/posts', postsRoute);
app.use('/api/auth', authRoute);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
