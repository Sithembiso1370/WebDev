const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Loads .env file contents into process.env.
dotenv.config();

const databaseURL = process.env.DATABASE_URL;

const databaseConfiguration = async () => {
    try {
      await mongoose.connect(databaseURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Database connected');
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
};
  
module.exports = databaseConfiguration;
