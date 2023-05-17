const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/Habit', {useNewUrlParser: true}, { useUnifiedTopology: true });


mongoose.connect('mongodb+srv://saikrishna:nagamani143@habit-tracker.z9iod3w.mongodb.net/',{ useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Database Connected !!!");
});

// // module.exports= db;

// mongodb+srv://saikrishnamadasu1:<password>@cluster0.xnrnyip.mongodb.net/

// const { MongoClient } = require("mongodb");
// const username = encodeURIComponent("saikrishnamadasu1");
// const password = encodeURIComponent("saikrishnamadasu1");
// const cluster = "@cluster0";
// const authSource = "<authSource>";
// const authMechanism = "<authMechanism>";
// let uri =
//   `mongodb+srv://${username}:${password}@${cluster}/?authSource=${authSource}&authMechanism=${authMechanism}`;
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     await client.connect();
//     const database = client.db("<dbName>");
//     const ratings = database.collection("<collName>");
//     const cursor = ratings.find();
//     await cursor.forEach(doc => console.dir(doc));
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);