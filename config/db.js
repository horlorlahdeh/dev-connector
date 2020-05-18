const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB database connection established successfully');
  } catch (err) {
    console.error(err.message);

    // Exit the process on failure or error
    process.exit(1);
  }
};

module.exports = connectDB;
