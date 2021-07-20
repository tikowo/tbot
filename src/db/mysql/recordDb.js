module.exports = function makeRecordDb({ mysqlConnection }) {
    return Object.freeze({
        insert
    })
    
    async function insert(recordInfo) {
        const id = await mysqlConnection('records').insert({name: "tiko"});
        const record = await mysqlConnection('records').where('id', id).first();

        return record;
    }
}