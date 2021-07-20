const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017';
const _mongoClient = new MongoClient(url, { useUnifiedTopology: true, useNewUrlParser: true });
const mongoDb = 'tikoisdumb';

const makeShopDb = require('./shopDb');

async function mongoClient() {
    if(!_mongoClient.isConnected()) {
        await _mongoClient.connect();
    }
    return _mongoClient.db(mongoDb)
}
// mysql db
const mysqlDb = require('./mysql');

const db = Object.freeze({
    shopDb: makeShopDb({ mongoClient }),
    mysqlDb
})

module.exports = db;