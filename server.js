// server.js

const express = require('express');
const mongoose = require('mongoose');
const { mongoURL } = require('./config');

// routes
const books = require('./routes/books');

// middleware
const { handleErrors } = require('./middleware/errorHandlers');

const app = express();

// db connection
mongoose.connect(mongoURL)
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));

// middleware  
app.use(express.json());

// routes 
app.use('/api/books', books);

// handle 404 errors
app.use((req, res, next) => {
    res.status(404).json({ message: 'Path not found' });
});

// global error handler
app.use(handleErrors);

const port = 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));