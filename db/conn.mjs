const { MongoClient } = require("mongodb");

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString)

let conn;
try {
    conn = await client.connect();
} catch (e) {
    console.log(e);
}

let records_db = conn.db("sample_training");

module.exports = records_db;