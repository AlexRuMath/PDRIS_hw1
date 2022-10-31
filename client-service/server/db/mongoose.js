const mongoose = require('mongoose');
const glob = require('glob');
// Create the database connection
mongoose.connect(process.env.CONNECTION_STRING);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + process.env.CONNECTION_STRING);
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
  mongoose.disconnect();
  process.exit(1);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

setTimeout(() => {
  if(mongoose.connection.readyState != mongoose.ConnectionStates.connected){
    console.error("MongoDB service not connected")
    process.exit(1)
  }
}, 1000)

require('./mongoose-models/user')
