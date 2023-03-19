const mongoose = require("mongoose"); //mongoose functions returns promises any functions
// should be asynchronous/concurrent

const connectDb = async () => {
  const connection = await mongoose.connect(process.env.CONNECTION_STRING);

  console.log(
    `MongoDB connected: ${connection.connection.host}`.cyan.underline.bold
  );
};

module.exports = connectDb;
