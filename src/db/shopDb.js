const { ObjectID } = require("bson");

module.exports = function makeShopDb({ mongoClient }, tableName = 'shops') {
    return Object.freeze({
        insert,
        findById,
        replaceById,
        all
    });
    
    async function findById(id) {
        const db = await mongoClient();
        const result = await db.collection(tableName).findOne({ _id: ObjectID(id) });
        return result;
    }

    async function insert(shopInfo) {
        const db = await mongoClient();
        const result = await db.collection(tableName).insertOne({ ...shopInfo });
        return result.ops[0];
    }

    async function all() {
        const db = await mongoClient();
        const result = await db.collection(tableName).find({}).toArray();
        return result;
    }

    async function replaceById(id, shopInfo) {
        const db = await mongoClient();
        const result = await db.collection(tableName).replaceOne({_id: ObjectID(id)}, shopInfo);
        return result.ops[0];
    }
}