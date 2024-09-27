const mongoose = require("mongoose");

const dbConnect = () => {
  const uri = process.env.MONGOBD_URI || "mongodb://localhost:27017/userDB";
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database connected successfully"))
    .catch((error) => {
      throw new Error(`MongooseError: ${error.message}`);
    });
};

module.exports = dbConnect;
