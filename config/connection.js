const {connect, connection} = require("mongoose");

const connectionString = process.env.MONGODB_URI || "mongod://127.0.0.1:27017/socialNetworkApi";

connect(connectionString);

module.exports = connection;