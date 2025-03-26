const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Data base connected succeccfully ⚙️...");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
