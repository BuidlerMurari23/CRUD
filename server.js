const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected with server'))
.catch((err) => console.log('MongoDB connection error: ', err));

// Routes
app.use('/api/users', userRoutes);

const port = process.env.PORT || 5060;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
