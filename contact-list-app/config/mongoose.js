const mongoose = require("mongoose");

// Database connection URI
const uri = "mongodb://127.0.0.1:27017/contact-list";

// Establishing the connection
mongoose.connect(uri, {
  //used to avoid depricated warnings

  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connection events
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
//connection evens if error  print error
mongoose.connection.on("error", (err) => {
  console.error("Failed to connect to MongoDB:", err);
});

//connection event print message disconnected to the database;
mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});
