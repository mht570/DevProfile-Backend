const mongoose = require("mongoose");
const password =
  "mongodb+srv://DevNetwork:DevNetwork@devnetwork.yodhs.mongodb.net/DevNetwork?retryWrites=true&w=majority";
const url = password;

// const url ="mongodb+srv://mhe123:mhe123@mhetest-jlsan.mongodb.net/<dbname>?retryWrites=true&w=majority"
const connectDB = async () => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  console.log("database connected");
};

module.exports = connectDB;
