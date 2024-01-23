// app.js

const express = require('express');
const mongoose = require('mongoose');
const registerRouter = require('./routes/register');

const app = express();

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost:27017/NGU', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use('/register', registerRouter);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});