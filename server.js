const express = require('express');

const connectDB = require('./config/db.js');

const app = express();

//  Connect Database

connectDB();

//  Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API is Running...'));

// define routes

app.use('/api/users', require('./route/api/users'));
app.use('/api/auth', require('./route/api/auth'));
app.use('/api/profile', require('./route/api/profile'));
app.use('/api/posts', require('./route/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
