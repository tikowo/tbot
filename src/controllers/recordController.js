module.exports = function makeRecordController({ recordService }) {
    return Object.freeze({
        store
    })

    async function store(httpRequest) {
        const shop = await recordService.addRecord(httpRequest.body);

        return {
            statusCode: 201,
            body: shop
        }
    }
}