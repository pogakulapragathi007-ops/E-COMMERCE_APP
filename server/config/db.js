const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://Pragathi:Pragathi123@ac-hhpscle-shard-00-00.xv9nxyh.mongodb.net:27017,ac-hhpscle-shard-00-01.xv9nxyh.mongodb.net:27017,ac-hhpscle-shard-00-02.xv9nxyh.mongodb.net:27017/?ssl=true&replicaSet=atlas-4iv5xx-shard-0&authSource=admin&appName=Cluster0");

    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;