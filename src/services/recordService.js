module.exports = function makeRecordService({ recordDb }) {
    return Object.freeze({
        addRecord,
    });

    async function addRecord(record) {
        // await shopValidator.validateAsync(shop);

        return recordDb.insert(record);
    }
}